import { gsap } from "gsap";
import {
  FaBolt,
  FaBullseye,
  FaLayerGroup,
  FaLock,
  FaPalette,
  FaRocket,
} from "react-icons/fa";

function FeaturesSection() {
  const features = [
    {
      Icon: FaBolt,
      title: "Instant Results",
      desc: "AI removes backgrounds in under 2 seconds, HD quality guaranteed.",
    },
    {
      Icon: FaBullseye,
      title: "Pixel-Perfect Edges",
      desc: "Advanced edge detection handles hair, fur, and complex shapes flawlessly.",
    },
    {
      Icon: FaLock,
      title: "Private & Secure",
      desc: "Images are processed and deleted instantly. Zero data retention.",
    },
    {
      Icon: FaPalette,
      title: "Custom Backgrounds",
      desc: "Replace with any color, gradient, or upload your own background.",
    },
    {
      Icon: FaLayerGroup,
      title: "Batch Processing",
      desc: "Remove backgrounds from 50+ images simultaneously with one click.",
    },
    {
      Icon: FaRocket,
      title: "API Access",
      desc: "Integrate directly into your workflow with our powerful REST API.",
    },
  ];

  return (
    <section className="page-shell relative z-10 py-16">
      <div className="mb-12 text-center">
        <span className="mb-3.5 inline-flex items-center gap-1 rounded-full border border-violet-500/30 bg-violet-600/15 px-3.5 py-1.5 text-xs text-violet-300">
          Features
        </span>
        <h2 className="font-syne text-[clamp(28px,3.5vw,44px)] font-extrabold text-[#F0EEFF]">
          Everything you{" "}
          <span className="bg-gradient-to-br from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
            need
          </span>
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="cursor-default rounded-[20px] border border-violet-500/25 bg-[rgba(18,15,40,.72)] px-6 py-7 backdrop-blur-xl transition"
            onMouseEnter={(event) => {
              gsap.to(event.currentTarget, {
                y: -6,
                duration: 0.25,
                boxShadow: "0 20px 60px rgba(124,58,237,.2)",
              });
            }}
            onMouseLeave={(event) => {
              gsap.to(event.currentTarget, {
                y: 0,
                duration: 0.25,
                boxShadow: "none",
              });
            }}
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[14px] border border-violet-500/20 bg-gradient-to-br from-violet-600/20 to-blue-600/15 text-[22px]">
              <feature.Icon className="h-5 w-5 text-violet-300" />
            </div>
            <h3 className="mb-2 font-syne text-[17px] font-bold text-[#F0EEFF]">
              {feature.title}
            </h3>
            <p className="text-sm leading-[1.65] text-[#8B85A8]">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
