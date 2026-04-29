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
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 0.8 },
    )
      .fromTo(
        heroSubRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.5",
      )
      .fromTo(
        heroBtnsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.4",
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="relative z-10 mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-16 px-5 pb-16 pt-16 lg:grid-cols-2 lg:gap-28 xl:gap-32">
      {/* Left Side */}
      <div className="max-w-[520px] font-changa xl:-ml-16">
        <div className="mb-5 inline-flex w-fit animate-[float_4s_ease-in-out_infinite] items-center gap-1 rounded-full border border-violet-500/30 bg-violet-600/15 px-3.5 py-1.5 text-xs text-violet-300">
          100% Free for Early Users
        </div>

        <h1
          ref={heroTextRef}
          className="mb-5 font-changa  tracking-wider text-[clamp(36px,4.5vw,62px)] font-extrabold leading-[1.25] text-[#F0EEFF]"
        >
          Remove Image
          <br />
          Backgrounds
          <br />
          <span className="inline-block rounded-[6px] border border-orange-500/60 bg-[linear-gradient(90deg,rgba(121,35,4,.5),rgba(34,15,7,.2))] px-3 py-1 text-[#FED7AA] shadow-[inset_0_0_0_1px_rgba(251,146,60,.25)]">
            Instantly
          </span>
        </h1>

        <p
          ref={heroSubRef}
          className="mb-8 max-w-[440px] text-[clamp(15px,1.5vw,18px)] leading-7 text-[#8B85A8]"
        >
          No watermarks. No quality loss. Just crystal-clear cutouts in seconds
          {" - "}powered by PixoCut AI. Free for early users.
        </p>

        <div
          ref={heroBtnsRef}
          className="mb-9 flex flex-wrap gap-3.5 max-sm:flex-col"
        >
          <button
            type="button"
            className="rounded-full bg-gradient-to-br from-violet-600 to-blue-600 px-[34px] py-[15px] text-base font-semibold text-white shadow-[0_0_30px_rgba(124,58,237,.35)] transition hover:-translate-y-0.5 hover:shadow-[0_0_50px_rgba(124,58,237,.55)]"
            onClick={() =>
              document.querySelector("input[data-upload-input='true']")?.click()
            }
          >
            Upload Now
          </button>

          {/* <button
            type="button"
            className="rounded-full border border-violet-500/25 px-7 py-[15px] text-[15px] font-medium text-[#8B85A8] transition hover:border-violet-400/60 hover:bg-violet-500/10 hover:text-[#F0EEFF]"
          >
            Watch Demo
          </button> */}
        </div>
      </div>

      {/* Right Side */}
      <div className="relative flex w-full justify-center lg:justify-end xl:translate-x-16">
        {/* Glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,.25)_0%,transparent_70%)] blur-[90px]" />

        {/* 🔥 IMPORTANT: Width control added */}
        <div className="w-full max-w-[520px]">
          <SplitPreview />
        </div>

        {/* Badge */}
        <div className="absolute bottom-[18px] right-[-20px] flex animate-[float_4s_ease-in-out_infinite] items-center gap-2 rounded-[14px] border border-violet-500/25 bg-[rgba(18,15,40,.72)] px-4 py-2.5 text-[13px] font-medium backdrop-blur-xl">
          <div className="h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_8px_#22C55E]" />
          <span>AI Processing Live</span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
