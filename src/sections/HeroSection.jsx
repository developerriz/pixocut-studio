import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitPreview from "../components/SplitPreview";

function HeroSection() {
  const heroTextRef = useRef(null);
  const heroSubRef = useRef(null);
  const heroBtnsRef = useRef(null);

  useEffect(() => {
    gsap.set([heroTextRef.current, heroSubRef.current, heroBtnsRef.current], {
      opacity: 0,
    });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      heroTextRef.current,
      { y: 50 },
      { opacity: 1, y: 0, duration: 0.8 },
    )
      .fromTo(
        heroSubRef.current,
        { y: 30 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4",
      )
      .fromTo(
        heroBtnsRef.current,
        { y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.3",
      );

    return () => tl.kill();
  }, []);

  return (
    <section className="page-shell relative z-10 grid grid-cols-1 gap-10 pt-12 pb-12 sm:pt-16 sm:pb-16 lg:grid-cols-2 lg:gap-20 xl:gap-28">
      {/* LEFT */}
      <div className="max-w-[520px] font-plus text-center lg:text-left mx-auto lg:mx-0">
        {/* Badge */}
        <div className="mb-4 inline-flex animate-[float_4s_ease-in-out_infinite] items-center gap-1 rounded-full border border-violet-500/30 bg-violet-600/15 px-3 py-1 text-xs text-violet-300">
          100% Free for Early Users
        </div>

        {/* Heading */}
        <h1
          ref={heroTextRef}
          className="mb-4 font-jakarta text-[clamp(32px,6vw,60px)] font-extrabold leading-tight text-[#F0EEFF]"
        >
          Remove Image Backgrounds{" "}
          <span className="inline-block mt-2 rounded-md border border-orange-500/60 bg-[linear-gradient(90deg,rgba(121,35,4,.5),rgba(34,15,7,.2))] px-3 py-1 text-[#FED7AA] shadow-[inset_0_0_0_1px_rgba(251,146,60,.25)]">
            Instantly
          </span>
        </h1>

        {/* Subtext */}
        <p
          ref={heroSubRef}
          className="mb-6 text-[clamp(14px,2.5vw,18px)] leading-relaxed text-[#8B85A8]"
        >
          No watermarks. No quality loss. Just crystal-clear cutouts in seconds
          — powered by PixoCut AI.
        </p>

        {/* Buttons */}
        <div
          ref={heroBtnsRef}
          className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
        >
          <button
            type="button"
            className="rounded-full bg-gradient-to-br from-violet-600 to-blue-600 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-[0_0_25px_rgba(124,58,237,.35)] transition hover:-translate-y-0.5 hover:shadow-[0_0_45px_rgba(124,58,237,.55)]"
            onClick={() =>
              document.querySelector("input[data-upload-input='true']")?.click()
            }
          >
            Upload Now
          </button>
        </div>
      </div>

      {/* RIGHT */}
      <div className="relative flex justify-center lg:justify-end">
        {/* Glow (Responsive) */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[260px] w-[260px] sm:h-[380px] sm:w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,.25)_0%,transparent_70%)] blur-[80px]" />

        {/* Preview */}
        <div className="w-full max-w-[480px] sm:max-w-[520px]">
          <SplitPreview />
        </div>

        {/* Badge FIXED */}
        <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-[-10px] flex animate-[float_4s_ease-in-out_infinite] items-center gap-2 rounded-lg border border-violet-500/25 bg-[rgba(18,15,40,.72)] px-3 py-2 text-xs sm:text-sm backdrop-blur-xl">
          <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_#22C55E]" />
          <span>AI Processing Live</span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
