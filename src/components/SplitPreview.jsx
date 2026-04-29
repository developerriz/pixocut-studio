import { useEffect, useState } from "react";
import heroImage from "../assets/hero-image.jpg";
import heroImageNoBg from "../assets/hero-image-no-bg.png";

function SplitPreview() {
  const [splitPos, setSplitPos] = useState(0);

  useEffect(() => {
    let frame;
    const cycleDuration = 4000;
    const startTime = performance.now();

    const animate = (time) => {
      const elapsed = time - startTime;

      // Smooth ping-pong motion: top -> bottom -> top
      const wave =
        (Math.sin((2 * Math.PI * elapsed) / cycleDuration - Math.PI / 2) + 1) /
        2;
      setSplitPos(wave * 100);

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="relative w-full max-w-[520px] overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,.08),rgba(255,255,255,.02)),rgba(18,15,40,.78)] p-4 shadow-[0_30px_90px_rgba(0,0,0,.45),0_1px_0_rgba(255,255,255,.06)_inset] max-sm:rounded-3xl max-sm:p-3">
      <div className="relative min-h-[640px] overflow-hidden rounded-[28px] bg-white max-sm:min-h-[520px]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(132,146,175,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(132,146,175,.08)_1px,transparent_1px)] bg-[size:88px_88px] opacity-30" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_12%,rgba(124,58,237,.06),transparent_30%),radial-gradient(circle_at_88%_82%,rgba(6,182,212,.06),transparent_32%)]" />

        <div className="absolute inset-0 overflow-hidden rounded-[28px] bg-white shadow-[0_20px_55px_rgba(36,41,67,.08),0_1px_0_rgba(255,255,255,.9)_inset]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_84%,rgba(108,122,149,.14)_1px,transparent_1.7px),linear-gradient(180deg,rgba(255,255,255,.98),rgba(248,249,252,.98))] bg-[size:18px_18px,auto]" />

          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(${splitPos}% 0 0 0)` }}
          >
            <img
              src={heroImage}
              loading="lazy"
              alt="Original portrait"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </div>

          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 0 ${100 - splitPos}% 0)` }}
          >
            <img
              src={heroImageNoBg}
              loading="lazy"
              alt="Background removed portrait"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </div>

          <div
            className="pointer-events-none absolute left-0 right-0 z-10 h-0 -translate-y-1/2"
            style={{ top: `${splitPos}%` }}
          >
            <div className="absolute left-0 top-1/2 h-[3px] w-full -translate-y-1/2 bg-gradient-to-r from-white/90 to-cyan-400 shadow-[0_0_24px_rgba(34,211,238,.32)]" />
            <div className="absolute left-1/2 top-1/2 flex h-[54px] w-[54px] -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-1.5 rounded-full border border-white/65 bg-white/95 text-lg font-bold text-slate-900 shadow-[0_16px_30px_rgba(15,23,42,.16),0_0_0_8px_rgba(255,255,255,.18)] max-sm:h-12 max-sm:w-12">
              <span>{`\u02C4`}</span>
              <span>{`\u02C5`}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SplitPreview;
