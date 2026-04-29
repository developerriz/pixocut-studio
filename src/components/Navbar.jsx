import { useState } from "react";
import { FiMenu, FiStar, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../api/authApi";
import { toast } from "react-toastify";

function Navbar({ onSignIn, onSignUp, currentUser, onLogout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // const navItems = ["Features", "Pricing", "Gallery", "API"];
  const navItems = ["Features", "Gallery"];
  const routeMap = {
    Home: "/",
    Features: "/features",
    // Pricing: "/pricing",
    Gallery: "/gallery",
    // API: "/api",
  };

  const handleNavClick = (event, label) => {
    const target = routeMap[label];
    if (target) {
      event.preventDefault();
      navigate(target);
      setIsMenuOpen(false);
    }
  };

  const displayName = currentUser?.name || "User";
  const initials = displayName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

  const handleLogout = async () => {
    try {
      await logoutUser();
    } catch {
      // Ignore API failure and still clear local auth state.
    }

    onLogout?.();
    setIsMenuOpen(false);
    setIsProfileMenuOpen(false);
    toast.success("Logged out successfully");
    navigate("/");
  };

  const goToProfileSettings = () => {
    setIsMenuOpen(false);
    setIsProfileMenuOpen(false);
    navigate("/profile");
  };

  const goToMyActivity = () => {
    setIsMenuOpen(false);
    setIsProfileMenuOpen(false);
    navigate("/my-activity");
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-violet-500/15 bg-[#06050F]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between px-10">
        <button
          type="button"
          className="flex items-center gap-2.5"
          onClick={(event) => handleNavClick(event, "Home")}
        >
          <div className="flex h-[34px] w-[34px] items-center justify-center rounded-[9px] font-syne text-base font-extrabold text-white">
            <img src="https://toolsbyprabhat.com/images/icons/favicon-pixocut.png" alt="" />
          </div>
          <span className="flex items-center gap-2 font-syne text-lg font-extrabold text-[#F0EEFF]">
            <span>
              PixoCut
              <span className="bg-gradient-to-br from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                {" "}
                Studio
              </span>
            </span>
            <span className="rounded-[9px] border border-violet-400/30 bg-violet-500/10 px-2 leading-[1.5] font-plus text-[8px] font-normal uppercase tracking-wider text-violet-200">
              Beta
            </span>
          </span>
        </button>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((label) => (
            <a
              key={label}
              className="text-sm text-[#8B85A8] transition-colors hover:text-[#F0EEFF]"
              href="#"
              onClick={(event) => handleNavClick(event, label)}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2.5 lg:flex">
          {currentUser ? (
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsProfileMenuOpen((prev) => !prev)}
                className="inline-flex items-center gap-2 rounded-full border border-violet-500/25 px-3.5 py-2 text-sm text-[#F0EEFF] transition hover:border-violet-400/60 hover:bg-violet-500/10"
                aria-expanded={isProfileMenuOpen}
                aria-haspopup="menu"
              >
                {currentUser.photoUrl ? (
                  <img
                    src={currentUser.photoUrl}
                    loading="lazy"
                    alt="Profile"
                    className="h-8 w-8 rounded-full border border-violet-400/40 object-cover"
                  />
                ) : (
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-blue-600 text-xs font-bold text-white">
                    {initials || "U"}
                  </span>
                )}
                <span className="max-w-[130px] truncate">{displayName}</span>
              </button>

              {isProfileMenuOpen && (
                <div className="absolute right-0 top-[calc(100%+10px)] z-50 w-52 rounded-2xl border border-violet-500/25 bg-[#100d24]/95 p-2.5 shadow-[0_16px_60px_rgba(8,6,20,.55)] backdrop-blur-xl">
                  <button
                    type="button"
                    onClick={goToProfileSettings}
                    className="w-full rounded-xl px-3 py-2 text-left text-sm text-[#F0EEFF] transition hover:bg-violet-500/15"
                  >
                    Profile Settings
                  </button>
                  <button
                    type="button"
                    onClick={goToMyActivity}
                    className="mt-1 w-full rounded-xl px-3 py-2 text-left text-sm text-[#F0EEFF] transition hover:bg-violet-500/15"
                  >
                    My Activity
                  </button>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="mt-1 w-full rounded-xl px-3 py-2 text-left text-sm text-rose-200 transition hover:bg-rose-500/10"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <button
                type="button"
                className="rounded-full border border-violet-500/25 px-5 py-2.5 text-sm font-medium text-[#8B85A8] transition hover:border-violet-400/60 hover:bg-violet-500/10 hover:text-[#F0EEFF]"
                onClick={onSignIn}
              >
                Sign In
              </button>
              <button
                type="button"
                className="rounded-full bg-gradient-to-br from-violet-600 to-blue-600 px-[22px] py-2.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(124,58,237,.35)] transition hover:-translate-y-0.5 hover:shadow-[0_0_50px_rgba(124,58,237,.55)]"
                onClick={onSignUp}
              >
                Sign Up Free
              </button>
            </>
          )}
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-violet-500/30 text-[#F0EEFF] lg:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <FiX className="h-5 w-5" />
          ) : (
            <FiMenu className="h-5 w-5" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-violet-500/20 px-10 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((label) => (
              <a
                key={label}
                className="text-sm text-[#8B85A8] transition-colors hover:text-[#F0EEFF]"
                href="#"
                onClick={(event) => handleNavClick(event, label)}
              >
                {label}
              </a>
            ))}
          </div>

          <div className="mt-4 flex flex-col gap-2.5 sm:flex-row">
            {currentUser ? (
              <div className="w-full space-y-2">
                <button
                  type="button"
                  className="rounded-full border border-violet-500/25 px-5 py-2.5 text-sm font-medium text-[#F0EEFF] transition hover:border-violet-400/60 hover:bg-violet-500/10"
                  onClick={() => setIsProfileMenuOpen((prev) => !prev)}
                >
                  Profile Options
                </button>

                {isProfileMenuOpen && (
                  <div className="grid gap-2">
                    <button
                      type="button"
                      className="rounded-full border border-violet-500/25 px-5 py-2.5 text-sm font-medium text-[#F0EEFF] transition hover:border-violet-400/60 hover:bg-violet-500/10"
                      onClick={goToProfileSettings}
                    >
                      Profile Settings
                    </button>
                    <button
                      type="button"
                      className="rounded-full border border-violet-500/25 px-5 py-2.5 text-sm font-medium text-[#F0EEFF] transition hover:border-violet-400/60 hover:bg-violet-500/10"
                      onClick={goToMyActivity}
                    >
                      My Activity
                    </button>
                    <button
                      type="button"
                      className="rounded-full border border-violet-500/25 px-5 py-2.5 text-sm font-medium text-[#8B85A8] transition hover:border-violet-400/60 hover:bg-violet-500/10 hover:text-[#F0EEFF]"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <button
                  type="button"
                  className="rounded-full border border-violet-500/25 px-5 py-2.5 text-sm font-medium text-[#8B85A8] transition hover:border-violet-400/60 hover:bg-violet-500/10 hover:text-[#F0EEFF]"
                  onClick={() => {
                    setIsMenuOpen(false);
                    onSignIn();
                  }}
                >
                  Sign In
                </button>
                <button
                  type="button"
                  className="rounded-full bg-gradient-to-br from-violet-600 to-blue-600 px-[22px] py-2.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(124,58,237,.35)] transition hover:-translate-y-0.5 hover:shadow-[0_0_50px_rgba(124,58,237,.55)]"
                  onClick={() => {
                    setIsMenuOpen(false);
                    onSignUp();
                  }}
                >
                  Sign Up Free
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
