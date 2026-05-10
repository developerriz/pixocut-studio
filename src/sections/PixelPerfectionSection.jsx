import { useRef } from "react";
import { gsap } from "gsap";
import { FiCheck, FiEye } from "react-icons/fi";
import ecommerceImage from "../assets/e-commerce.jpg.jpeg";
import ecommerceNoBg from "../assets/e-commerce-no-bg.png";
import girlImage from "../assets/girl-img.jpg.jpeg";
import girlNoBg from "../assets/girl-no-bg.png";
import peakDetailingImage from "../assets/peak-detailing.jpg.jpeg";
import peakDetailingNoBg from "../assets/peak-detailing-no-bg.png";
import AnalyticsSection from "./AnalyticsSection";

function PixelPerfectionSection() {
  const useCases = [
    {
      id: 1,
      title: "Portrait HD Quality",
      original: girlImage,
      processed: girlNoBg,
      description: "Professional portrait backgrounds removed in HD quality",
      badge: "Portrait",
    },
    {
      id: 2,
      title: "E-commerce Products",
      original: ecommerceImage,
      processed: ecommerceNoBg,
      description: "Perfect for product listing and catalog backgrounds",
      badge: "E-commerce",
    },
    {
      id: 3,
      title: "Peak Detailing for Hair",
      original: peakDetailingImage,
      processed: peakDetailingNoBg,
      description: "Advanced hair detection and edge perfection",
      badge: "Hair & Edges",
    },
  ];

  return (
    <>
      <AnalyticsSection />
      <section className="page-shell relative z-10 py-[4.5rem]">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-violet-500/30 bg-violet-600/10 px-3.5 py-1.5 text-xs font-medium text-violet-300">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            See It In Action
          </span>
          <h2 className="mt-4 font-syne text-[clamp(32px,4vw,48px)] font-extrabold text-[#F0EEFF]">
            Built for{" "}
            <span className="bg-gradient-to-br from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Pixel Perfection
            </span>
          </h2>
          <p className="mt-4 text-[clamp(14px,2vw,16px)] text-[#8B85A8]">
            Hover over any card to reveal the magic
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {useCases.map((useCase) => (
            <div
              key={useCase.id}
              className="group cursor-pointer overflow-hidden rounded-[24px] border border-violet-500/15 bg-[rgba(18,15,40,0.6)] backdrop-blur-sm transition-all"
              onMouseEnter={(event) => {
                gsap.to(event.currentTarget, {
                  y: -10,
                  duration: 0.28,
                  ease: "power2.out",
                  boxShadow:
                    "0 24px 64px rgba(124,58,237,.18), 0 0 0 1px rgba(139,92,246,.25)",
                });

                const originalImg = event.currentTarget.querySelector(
                  ".pixel-preview-original",
                );
                const processedBg =
                  event.currentTarget.querySelector(".pixel-preview-bg");
                const processedImg = event.currentTarget.querySelector(
                  ".pixel-preview-processed",
                );
                const hoverHint =
                  event.currentTarget.querySelector(".hover-hint");

                if (originalImg)
                  gsap.to(originalImg, {
                    opacity: 0,
                    duration: 0.35,
                    ease: "power2.inOut",
                  });
                if (processedBg)
                  gsap.to(processedBg, {
                    opacity: 1,
                    duration: 0.35,
                    ease: "power2.inOut",
                  });
                if (processedImg)
                  gsap.to(processedImg, {
                    opacity: 1,
                    duration: 0.35,
                    ease: "power2.inOut",
                  });
                if (hoverHint)
                  gsap.to(hoverHint, {
                    opacity: 0,
                    duration: 0.2,
                  });
              }}
              onMouseLeave={(event) => {
                gsap.to(event.currentTarget, {
                  y: 0,
                  duration: 0.28,
                  ease: "power2.out",
                  boxShadow: "none",
                });

                const originalImg = event.currentTarget.querySelector(
                  ".pixel-preview-original",
                );
                const processedBg =
                  event.currentTarget.querySelector(".pixel-preview-bg");
                const processedImg = event.currentTarget.querySelector(
                  ".pixel-preview-processed",
                );
                const hoverHint =
                  event.currentTarget.querySelector(".hover-hint");

                if (originalImg)
                  gsap.to(originalImg, {
                    opacity: 1,
                    duration: 0.35,
                    ease: "power2.inOut",
                  });
                if (processedBg)
                  gsap.to(processedBg, {
                    opacity: 0,
                    duration: 0.35,
                    ease: "power2.inOut",
                  });
                if (processedImg)
                  gsap.to(processedImg, {
                    opacity: 0,
                    duration: 0.35,
                    ease: "power2.inOut",
                  });
                if (hoverHint)
                  gsap.to(hoverHint, {
                    opacity: 1,
                    duration: 0.25,
                  });
              }}
            >
              {/* Image Area */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                {/* Original image */}
                <img
                  className="pixel-preview-original absolute inset-0 h-full w-full object-cover object-center"
                  src={useCase.original}
                  loading="lazy"
                  alt={useCase.title}
                />

                {/* Processed bg — checkerboard transparent pattern */}
                <div className="pixel-preview-bg absolute inset-0 opacity-0">
                  <div className="absolute inset-0 bg-[#f8f8f8]" />
                  <div className="absolute inset-0 [background-size:24px_24px] [background-image:linear-gradient(45deg,#d9d9d9_25%,transparent_25%),linear-gradient(-45deg,#d9d9d9_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#d9d9d9_75%),linear-gradient(-45deg,transparent_75%,#d9d9d9_75%)] [background-position:0_0,0_12px,12px_-12px,-12px_0]" />
                </div>

                {/* Processed image */}
                <img
                  className="pixel-preview-processed absolute inset-0 h-full w-full object-cover object-center opacity-0"
                  src={useCase.processed}
                  loading="lazy"
                  alt={`${useCase.title} - Processed`}
                />

                {/* Top-left badge */}
                <div className="absolute left-3 top-3 rounded-full border border-violet-500/30 bg-[rgba(18,15,40,.72)] px-2.5 py-1 text-[11px] font-medium text-violet-300 backdrop-blur-md">
                  {useCase.badge}
                </div>

                {/* Hover hint overlay */}
                <div className="hover-hint absolute inset-x-0 bottom-0 flex items-center justify-center gap-1.5 bg-gradient-to-t from-[rgba(10,8,30,.7)] to-transparent pb-4 pt-10 text-[12px] font-medium text-violet-200/80">
                  <FiEye className="h-3.5 w-3.5" />
                  Hover to preview
                </div>
              </div>

              {/* Card Footer */}
              <div className="flex items-start gap-3 px-5 py-5">
                {/* Icon dot */}
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600/15 border border-violet-500/25">
                  <FiCheck className="h-3.5 w-3.5 text-violet-400" />
                </div>
                <div>
                  <h3 className="mb-1 font-syne text-[15px] font-semibold text-[#F0EEFF]">
                    {useCase.title}
                  </h3>
                  <p className="text-[13px] leading-5 text-[#8B85A8]">
                    {useCase.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default PixelPerfectionSection;
