import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const sections = [
  {
    title: "Information We Collect",
    body: [
      "We may collect basic account details such as your name, email address, and login activity when you create or use an account.",
      "When you use our background remover, we may process uploaded images, export preferences, and usage events to deliver the service properly.",
      "We may also collect technical information like device type, browser details, IP address, and approximate analytics data to improve performance and security.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      "To provide background removal, account access, downloads, and product features.",
      "To improve speed, output quality, reliability, and user experience across the platform.",
      "To communicate important updates, support responses, security notices, and account-related information.",
    ],
  },
  {
    title: "Image Processing",
    body: [
      "Uploaded images are processed only to generate the requested background removal result.",
      "We do not claim ownership over your uploaded content.",
      "If temporary storage is used for processing, it is retained only for as long as operationally necessary, unless a longer retention period is required for security, abuse prevention, or legal compliance.",
    ],
  },
  {
    title: "Sharing of Information",
    body: [
      "We do not sell your personal information.",
      "We may share limited data with trusted service providers that help us run hosting, analytics, authentication, storage, or customer support systems.",
      "We may also disclose information if required by law, to enforce our terms, or to protect our users, platform, or legal rights.",
    ],
  },
  {
    title: "Cookies and Analytics",
    body: [
      "We may use cookies or similar technologies to keep you signed in, remember preferences, and understand product usage.",
      "These tools help us improve navigation, detect issues, and measure product performance.",
    ],
  },
  {
    title: "Data Security",
    body: [
      "We use reasonable technical and organizational safeguards to protect account information and processed files.",
      "No online service can guarantee absolute security, so users should also take care when uploading sensitive content.",
    ],
  },
  {
    title: "Your Choices",
    body: [
      "You may request access, correction, or deletion of your account information where applicable.",
      "You may stop using the service at any time and contact support for privacy-related questions.",
    ],
  },
  {
    title: "Policy Updates",
    body: [
      "We may update this Privacy Policy from time to time to reflect product, legal, or operational changes.",
      "When material updates are made, the revised version will be posted on this page with an updated effective date.",
    ],
  },
];

export default function PrivacyPolicyPage({
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
              <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
                Legal
              </span>
              <h1 className="mt-5 font-syne text-4xl font-extrabold tracking-tight text-[#F6F3FF] sm:text-5xl">
                Privacy Policy
              </h1>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-[#B6B0D1] sm:text-base">
                Effective date: May 4, 2026. This page explains what
                information PixoCut Studio collects, how we use it, and the
                choices available to users of our AI background removal
                platform.
              </p>
            </div>

            <div className="grid gap-5">
              {sections.map((section) => (
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

            <section className="mt-8 rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 p-6 sm:p-7">
              <h2 className="text-xl font-semibold text-[#F0EEFF]">
                Contact
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#C7C2DD] sm:text-[15px]">
                For privacy-related requests or questions, please contact the
                PixoCut Studio team through your official support channel or the
                contact information published with the product.
              </p>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
