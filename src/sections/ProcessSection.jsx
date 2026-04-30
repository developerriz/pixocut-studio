import { FiChevronRight, FiCpu, FiDownload, FiUpload } from "react-icons/fi";

function ProcessSection() {
  const steps = [
    {
      n: "01",
      title: "Upload Image",
      desc: "Drag & drop or click to upload any photo — JPG, PNG, or WebP",
      icon: <FiUpload className="h-[22px] w-[22px] text-violet-400" />,
    },
    {
      n: "02",
      title: "AI Processes",
      desc: "Our model detects & removes background instantly with clean edges",
      icon: <FiCpu className="h-[22px] w-[22px] text-violet-400" />,
    },
    {
      n: "03",
      title: "Download HD",
      desc: "Get your transparent PNG in full resolution, ready to use anywhere",
      icon: <FiDownload className="h-[22px] w-[22px] text-violet-400" />,
    },
  ];

  const connectorStyle = {
    background:
      "linear-gradient(90deg, rgba(124,58,237,.4), rgba(37,99,235,.4))",
  };

  return (
    <section className="page-shell relative z-10 py-16 text-center">
      <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-600/10 px-4 py-1.5 text-xs font-medium text-violet-300">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-violet-400" />
        How it works
      </span>

      <h2 className="mb-14 font-syne text-[clamp(28px,3.5vw,44px)] font-extrabold text-[#F0EEFF]">
        Three steps to{" "}
        <span className="bg-gradient-to-br from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
          perfection
        </span>
      </h2>

      <div className="mx-auto grid max-w-[960px] items-center md:grid-cols-[1fr_48px_1fr_48px_1fr] ">
        {steps.map((step, index) => (
          <div key={step.n} className="contents">
            <div className="mb-5 rounded-[20px] border border-violet-500/20 bg-[rgba(18,15,40,0.75)] px-7 py-9 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/45">
              <p
                className="mb-4 text-[10.5px] font-semibold uppercase tracking-widest"
                style={{ color: "rgba(167,139,250,0.5)" }}
              >
                Step {step.n}
              </p>
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-[14px] border border-violet-500/20 bg-violet-500/10">
                {step.icon}
              </div>
              <h3 className="mb-2.5 font-syne text-[17px] font-bold text-[#F0EEFF]">
                {step.title}
              </h3>
              <p className="text-[13.5px] leading-relaxed text-[#8B85A8]">
                {step.desc}
              </p>
            </div>

            {index < steps.length - 1 && (
              <div className="hidden flex-col items-center justify-center gap-1 md:flex">
                <div className="h-px w-8" style={connectorStyle} />
                <FiChevronRight
                  className="h-5 w-5"
                  style={{ color: "rgba(139,92,246,0.5)" }}
                />
                <div className="h-px w-8" style={connectorStyle} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProcessSection;
