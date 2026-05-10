import { useEffect, useMemo, useState } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Skeleton } from "boneyard-js/react";
import ApiPage from "./pages/ApiPage";
import RouteSkeleton from "./components/RouteSkeleton";
import ScrollToTopButton from "./components/ScrollToTopButton";
import FeaturesPage from "./pages/FeaturesPage";
import ForgotPassword from "./pages/ForgotPassword";
import ForgotPasswordOtpReset from "./pages/ForgotPasswordOtpReset";
import GalleryPage from "./pages/GalleryPage";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import MyActivityPage from "./pages/MyActivityPage";
import PricingPage from "./pages/PricingPage";
import ProfilePage from "./pages/ProfilePage";
import Register from "./pages/Register";
import RegisterOtp from "./pages/RegisterOtp";
import About from "./pages/About";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsPage from "./pages/TermsPage";

const LOCAL_USER_KEY = "pixelcut_user";

const getStoredUser = () => {
  try {
    const raw = localStorage.getItem(LOCAL_USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

const getUserFromAuthResponse = (payload) => {
  const userCandidate =
    payload?.user ||
    payload?.data?.user ||
    payload?.data ||
    payload?.result?.user ||
    payload?.result;

  if (!userCandidate || typeof userCandidate !== "object") {
    return null;
  }

  return {
    id: userCandidate.id || userCandidate.user_id || null,
    name: userCandidate.name || "New User",
    email: userCandidate.email || "",
    photoUrl: userCandidate.photoUrl || userCandidate.avatar || "",
    phone: userCandidate.phone || "",
    bio: userCandidate.bio || "",
  };
};

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState(() => getStoredUser());
  const [isRouteLoading, setIsRouteLoading] = useState(true);
  const isBoneyardCapture = import.meta.env.VITE_BONEYARD_CAPTURE === "true";
  const routeSkeletonDelay = isBoneyardCapture ? 1500 : 260;

  useEffect(() => {
    setIsRouteLoading(true);
    const timer = window.setTimeout(
      () => setIsRouteLoading(false),
      routeSkeletonDelay,
    );
    return () => window.clearTimeout(timer);
  }, [location.pathname, routeSkeletonDelay]);

  const persistUser = (user) => {
    if (!user) {
      localStorage.removeItem(LOCAL_USER_KEY);
      setCurrentUser(null);
      return;
    }

    localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(user));
    setCurrentUser(user);
  };

  const handleAuthSuccess = (payload, fallbackEmail) => {
    const apiUser = getUserFromAuthResponse(payload);
    const defaultName = fallbackEmail?.split("@")[0] || "User";

    persistUser(
      apiUser || {
        id: null,
        name: defaultName,
        email: fallbackEmail || "",
        photoUrl: "",
        phone: "",
        bio: "",
      },
    );
  };

  const pageProps = useMemo(
    () => ({
      onSignIn: () => navigate("/login"),
      onSignUp: () => navigate("/register"),
      currentUser,
      onLogout: () => persistUser(null),
    }),
    [currentUser, navigate],
  );

  const routeSkeletonName = useMemo(() => {
    if (location.pathname === "/") {
      return "route-home";
    }

    if (location.pathname === "/login") {
      return "route-Login";
    }

    if (location.pathname === "/register") {
      return "route-Register";
    }

    return `route-${location.pathname.replace(/^\/+/, "").replace(/\//g, "-")}`;
  }, [location.pathname]);

  return (
    <>
      <Skeleton
        name={routeSkeletonName}
        loading={isRouteLoading}
        fallback={<RouteSkeleton name={location.pathname} />}
        animate="shimmer"
        transition
      >
        <Routes>
          <Route path="/" element={<HomePage {...pageProps} />} />
          <Route path="/gallery" element={<GalleryPage {...pageProps} />} />
          <Route path="/features" element={<FeaturesPage {...pageProps} />} />
          <Route path="/pricing" element={<PricingPage {...pageProps} />} />
          <Route path="/api" element={<ApiPage {...pageProps} />} />
          <Route
            path="/login"
            element={
              currentUser ? (
                <Navigate to="/" replace />
              ) : (
                <Login {...pageProps} onAuthSuccess={handleAuthSuccess} />
              )
            }
          />
          <Route
            path="/register"
            element={
              currentUser ? (
                <Navigate to="/" replace />
              ) : (
                <Register {...pageProps} />
              )
            }
          />
          <Route
            path="/register/verify-otp"
            element={
              currentUser ? (
                <Navigate to="/" replace />
              ) : (
                <RegisterOtp {...pageProps} onAuthSuccess={handleAuthSuccess} />
              )
            }
          />
          <Route
            path="/forgot-password"
            element={
              currentUser ? (
                <Navigate to="/" replace />
              ) : (
                <ForgotPassword {...pageProps} />
              )
            }
          />
          <Route
            path="/forgot-password/verify-otp"
            element={
              currentUser ? (
                <Navigate to="/" replace />
              ) : (
                <ForgotPasswordOtpReset {...pageProps} />
              )
            }
          />
          <Route
            path="/profile"
            element={
              currentUser ? (
                <ProfilePage
                  {...pageProps}
                  user={currentUser}
                  onUserUpdate={persistUser}
                />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/my-activity"
            element={
              currentUser ? (
                <MyActivityPage {...pageProps} user={currentUser} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route path="/about" element={<About {...pageProps} />} />
          <Route
            path="/privacy-policy"
            element={<PrivacyPolicyPage {...pageProps} />}
          />
          <Route path="/terms" element={<TermsPage {...pageProps} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Skeleton>

      <ScrollToTopButton />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        pauseOnFocusLoss={false}
        draggable
        style={{ zIndex: 999999 }}
      />
    </>
  );
}
