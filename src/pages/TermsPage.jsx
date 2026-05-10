import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const termsSections = [
  {
    title: "Use of the Service",
    body: [
      "PixoCut Studio provides AI-powered image background removal and related creative tools.",
      "You agree to use the service only for lawful purposes and in a way that does not interfere with the platform, its systems, or other users.",
    ],
  },
  {
    title: "User Content",
    body: [
      "You retain ownership of the images and content you upload.",
      "By using the service, you grant us the limited rights necessary to process your files and return the requested output.",
      "You must have the rights and permissions required to upload and process any content you submit.",
    ],
  },
  {
    title: "Prohibited Use",
    body: [
      "You may not use the service for illegal, infringing, abusive, fraudulent, or harmful activity.",
      "You may not attempt to reverse engineer, disrupt, overload, or bypass security or usage limits of the platform.",
    ],
  },
  {
    title: "Accounts and Access",
    body: [
      "You are responsible for keeping your account credentials secure and for activity that occurs under your account.",
      "We may suspend or terminate access if we believe the service is being misused or if continued access creates risk for the platform or other users.",
    ],
  },
  {
    title: "Availability and Updates",
    body: [
      "We may improve, modify, pause, or discontinue parts of the service at any time.",
      "We do not guarantee uninterrupted availability, specific processing speeds, or error-free operation at all times.",
    ],
  },
  {
    title: "Disclaimer and Liability",
    body: [
      "The service is provided on an as-is and as-available basis to the extent permitted by law.",
      "To the maximum extent allowed by law, we are not liable for indirect, incidental, special, or consequential losses arising from use of the platform.",
    ],
  },
];

export default function TermsPage({
  onSignIn,
  onSignUp,
  currentUser,
  onLogout,
}) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#06050F] font-plus text-[#F0EEFF]">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_15%_10%,rgba(79,70,229,.18)_0%,transparent_70%),radial-gradient(ellipse_60%_50%_at_85%_20%,rgba(124,58,237,.14)_0%,transparent_65%),radial-gradient(ellipse_70%_60%_at_50%_80%,rgba(37,99,235,.12)_0%,transparent_65%),radial-gradient(ellipse_50%_40%_at_90%_90%,rgba(168,85,247,.10)_0%,transparent_60%)]" />
      <div className="pointer-events-none fixed inset-0 z-[1] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,.04)_1px,transparent_0)] bg-[length:12px_12px] opacity-20" />

      <Navbar
        onSignIn={onSignIn}
        onSignUp={onSignUp}
        currentUser={currentUser}
        onLogout={onLogout}
      />

      <main className="page-shell relative z-10 py-16 sm:py-20">
        <section className="mx-auto max-w-5xl">
          <div className="rounded-[32px] border border-violet-500/20 bg-white/[0.03] p-8 shadow-[0_30px_120px_rgba(17,10,40,.45)] backdrop-blur-xl sm:p-10 lg:p-14">
            <div className="mb-10 border-b border-violet-500/15 pb-8">
              <span className="inline-flex rounded-full border border-violet-400/25 bg-violet-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-violet-200">
                Legal
              </span>
              <h1 className="mt-5 font-syne text-4xl font-extrabold tracking-tight text-[#F6F3FF] sm:text-5xl">
                Terms of Service
              </h1>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-[#B6B0D1] sm:text-base">
                Effective date: May 4, 2026. These terms govern access to and
                use of PixoCut Studio and its background removal features.
              </p>
            </div>

            <div className="grid gap-5">
              {termsSections.map((section) => (
                <section
                  key={section.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-7"
                >
                  <h2 className="text-xl font-semibold text-[#F0EEFF]">
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-3 text-sm leading-7 text-[#B6B0D1] sm:text-[15px]">
                    {section.body.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
