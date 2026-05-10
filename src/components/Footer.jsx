import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

function Footer() {
  const productLinks = [
    { label: "BG Remover", href: "/" },
    { label: "Image Upscaler (Coming Soon)", href: null },
  ];
  const companyLinks = [
    { label: "About", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Features", href: "/features" },
  ];
  const bottomLinks = [
    { label: "Privacy", href: "/privacy-policy" },
    { label: "Terms", href: "/terms" },
  ];

  const socialIcons = [
    {
      label: "Instagram",
      href: "https://www.instagram.com/toolsbyprabhat?igsh=MWo3OGtpNTNpd2czbA==",
      hrefLabel: "@toolsbyprabhat",
      Icon: FaInstagram,
    },
    // {
    //   label: "GitHub",
    //   Icon: FaGithub,
    // },
    // {
    //   label: "Discord",
    //   Icon: FaDiscord,
    // },
  ];

  const linkClass =
    "group flex items-center gap-1.5 text-sm transition-colors duration-150";

  return (
    <footer
      className="relative z-10 mt-10 border-t border-violet-500/20 py-14"
      style={{
        background: "linear-gradient(180deg, #0d0b1a 0%, #0a0814 100%)",
        color: "#8B85A8",
      }}
    >
      <div className="page-shell">
        <div className="grid gap-y-10 md:grid-cols-2 md:gap-x-12 xl:grid-cols-[1.6fr_0.7fr_0.7fr_1.1fr] xl:gap-x-12">
          {/* Brand */}
          <div>
            <h3
              className="font-syne text-xl font-extrabold"
              style={{ color: "#F0EEFF" }}
            >
              PixoCut{" "}
              <span className="bg-gradient-to-br from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Studio
              </span>
            </h3>
            <p
              className="mt-3 max-w-xs text-sm leading-relaxed"
              style={{ color: "#9C97B7" }}
            >
              Remove backgrounds in seconds — clean edges, transparent exports,
              and workflow-ready API tools.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["99.8% Accuracy", "API Ready", "10M+ Images"].map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300"
                >
                  {b}
                </span>
              ))}
            </div>
            <div className="mt-5 flex gap-2.5">
              {socialIcons.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-violet-500/25 bg-white/5 transition-colors hover:bg-violet-500/20"
                >
                  <s.Icon className="h-4 w-4 text-[#8B85A8]" />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4
              className="mb-4 text-xs font-semibold uppercase tracking-widest"
              style={{ color: "#F0EEFF" }}
            >
              Product
            </h4>
            <div className="flex flex-col gap-2.5">
              {productLinks.map((label) =>
                label.href ? (
                  <Link
                    key={label.label}
                    to={label.href}
                    className={linkClass}
                    style={{ color: "#8B85A8" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#F0EEFF")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#8B85A8")
                    }
                  >
                    {label.label}
                    <FiArrowRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                ) : (
                  <span
                    key={label.label}
                    className={`${linkClass} cursor-default opacity-70`}
                    style={{ color: "#8B85A8" }}
                  >
                    {label.label}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4
              className="mb-4 text-xs font-semibold uppercase tracking-widest"
              style={{ color: "#F0EEFF" }}
            >
              Company
            </h4>
            <div className="flex flex-col gap-2.5">
              {companyLinks.map((label) => (
                <Link
                  key={label.label}
                  to={label.href}
                  className={linkClass}
                  style={{ color: "#8B85A8" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#F0EEFF")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#8B85A8")
                  }
                >
                  {label.label}
                  <FiArrowRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4
              className="mb-4 text-xs font-semibold uppercase tracking-widest"
              style={{ color: "#F0EEFF" }}
            >
              Stay Updated
            </h4>
            <p
              className="mb-4 text-sm leading-relaxed"
              style={{ color: "#9C97B7" }}
            >
              Get product updates and new AI feature drops — no spam, ever.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-full border border-violet-500/25 bg-white/5 px-4 py-2 text-sm outline-none focus:border-violet-500/60"
                style={{ color: "#F0EEFF" }}
              />
              <button
                type="button"
                className="whitespace-nowrap rounded-full bg-gradient-to-br from-violet-600 to-blue-600 px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Join
              </button>
            </div>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=Support@toolsbyprabhat.com"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center justify-center rounded-full border border-violet-500/30 bg-white/5 px-5 py-2 text-sm font-semibold text-violet-200 transition-colors hover:border-violet-400/50 hover:bg-violet-500/15 hover:text-white"
            >
              Contact Us
            </a>
            <div
              className="mt-3 flex items-center gap-2 text-xs"
              style={{ color: "#6B6585" }}
            >
              <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
              All systems operational
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-violet-500/15 pt-5 text-xs md:flex-row md:items-center"
          style={{ color: "#6B6585" }}
        >
          <span>© 2026 PixelCut Studio · All rights reserved</span>
          <div className="flex items-center gap-6">
            {bottomLinks.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                style={{ color: "#6B6585" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F0EEFF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#6B6585")}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
