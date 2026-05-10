import { useEffect, useState } from "react";
import { useRef } from "react";
import { gsap } from "gsap";
import { FiCalendar, FiBarChart2, FiActivity, FiTarget } from "react-icons/fi";
import { getBgRemoveCount } from "../api/authApi";

function AnalyticsSection() {
  const colorMap = {
    cyan: "from-cyan-400 to-blue-500",
    violet: "from-violet-500 to-purple-500",
    green: "from-emerald-400 to-green-500",
    yellow: "from-yellow-400 to-orange-400",
  };

  const getIconByColor = (color) => {
    const iconMap = {
      cyan: FiCalendar,
      violet: FiBarChart2,
      green: FiActivity,
      yellow: FiTarget,
    };
    return iconMap[color];
  };

  const GlassCard = ({ title, value, subtitle, color }) => {
    const ref = useRef(null);
    const cardRef = useRef(null);

    useEffect(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      );
    }, []);

    const getGradientColor = () => {
      const gradientMap = {
        cyan: "from-cyan-500/30 to-blue-500/20",
        violet: "from-violet-500/30 to-purple-500/20",
        green: "from-emerald-500/30 to-green-500/20",
        yellow: "from-yellow-500/30 to-orange-500/20",
      };
      return gradientMap[color];
    };

    const getGlowColor = () => {
      const glowMap = {
        cyan: "shadow-cyan-500/20",
        violet: "shadow-violet-500/20",
        green: "shadow-emerald-500/20",
        yellow: "shadow-yellow-500/20",
      };
      return glowMap[color];
    };

    const getBorderColor = () => {
      const borderMap = {
        cyan: "border-cyan-500/20 group-hover:border-cyan-400/40",
        violet: "border-violet-500/20 group-hover:border-violet-400/40",
        green: "border-emerald-500/20 group-hover:border-emerald-400/40",
        yellow: "border-yellow-500/20 group-hover:border-yellow-400/40",
      };
      return borderMap[color];
    };

    const IconComponent = getIconByColor(color);

    return (
      <div ref={ref} className="group relative">
        <div
          className={`absolute -inset-1 bg-gradient-to-br ${getGradientColor()} rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10`}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-br ${getGradientColor()} rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-all duration-700 -z-10`}
        />

        <div
          ref={cardRef}
          className={`relative rounded-3xl overflow-hidden backdrop-blur-2xl border ${getBorderColor()} transition-all duration-500 group-hover:shadow-2xl ${getGlowColor()} group-hover:shadow-xl`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-white/3 to-white/1 pointer-events-none" />
          <div
            className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${colorMap[color]} opacity-30 group-hover:opacity-60 transition-opacity duration-500`}
          />
          <div
            className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${getGradientColor()} rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-all duration-700`}
          />
          <div
            className={`absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br ${getGradientColor()} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-all duration-700 delay-75`}
          />

          <div className="relative z-10 flex min-h-[180px] items-center px-6 py-7 sm:px-8 sm:py-8">
            <div className="flex w-full items-center gap-5 sm:gap-6">
              <div
                className={`flex-shrink-0 inline-flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-[#0d1630]/70 shadow-inner backdrop-blur-md transition-all duration-300 group-hover:scale-105 ${getGlowColor()}`}
              >
                <IconComponent
                  className={`h-8 w-8 ${color === "cyan" ? "text-cyan-300" : color === "violet" ? "text-violet-300" : color === "green" ? "text-emerald-300" : "text-yellow-300"}`}
                />
              </div>

              <div className="h-24 w-px flex-shrink-0 bg-gradient-to-b from-transparent via-white/15 to-transparent" />

              <div className="min-w-0 flex-1 text-left">
                <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-cyan-300/85 sm:text-sm">
                  {title}
                </p>
                <h3
                  className={`mt-2 text-4xl font-black leading-none text-white sm:text-5xl bg-gradient-to-br ${colorMap[color]} bg-clip-text text-transparent`}
                >
                  {value}
                </h3>
                <p className="mt-3 max-w-[18rem] text-sm leading-relaxed text-gray-400 sm:text-[15px]">
                  {subtitle}
                </p>
              </div>
            </div>

            <div
              className={`absolute bottom-0 left-1/2 h-1.5 w-24 -translate-x-1/2 rounded-full bg-gradient-to-r ${colorMap[color]} opacity-70 shadow-[0_0_18px_rgba(59,130,246,0.35)] transition-all duration-500 group-hover:w-28 group-hover:opacity-100`}
            />
          </div>

          <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 group-hover:animate-pulse" />
          </div>
        </div>
      </div>
    );
  };

  // ✅ UPDATED STATE
  const [stats, setStats] = useState({
    today: 0,
    month: 0,
    total: 0,
    successRate: "0%",
  });

  const [loading, setLoading] = useState(true);

  // ✅ reusable refresh function
  const refreshStats = async () => {
    try {
      const data = await getBgRemoveCount();

      setStats({
        today: Number(data?.today_count) || 0,
        month: Number(data?.month_count) || 0,
        total: Number(data?.total_count) || 0,
        successRate: data?.success_rate || "0%",
      });
    } catch (err) {
      console.error("Stats refresh failed", err);
    }
  };

  useEffect(() => {
    let isMounted = true;

    const fetchCount = async () => {
      try {
        const data = await getBgRemoveCount();

        if (isMounted) {
          setStats({
            today: Number(data?.today_count) || 0,
            month: Number(data?.month_count) || 0,
            total: Number(data?.total_count) || 0,
            successRate: data?.success_rate || "0%",
          });
        }
      } catch (error) {
        console.error("Count fetch failed", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchCount();

    // 🔥 GLOBAL FUNCTION
    window.refreshStats = refreshStats;

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="page-shell relative z-10 py-[4.5rem]">
      {/* Header */}
      <div className="mb-12 text-center">
        <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-600/10 px-3.5 py-1.5 text-xs font-medium text-cyan-300">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          Real-Time Performance
        </span>
        <h2 className="mt-4 font-syne text-[clamp(32px,4vw,48px)] font-extrabold text-[#F0EEFF]">
          Background Remover{" "}
          <span className="bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600 bg-clip-text text-transparent">
            Tracker
          </span>
        </h2>
        <p className="mt-4 text-[clamp(14px,2vw,16px)] text-[#8B85A8]">
          Track your image removal performance
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 mb-[100px]">
        <GlassCard
          title="Today Count"
          value={stats.today}
          subtitle="Images processed today"
          color="cyan"
        />

        <GlassCard
          title="Month Count"
          value={stats.month}
          subtitle="Images processed this month"
          color="violet"
        />

        <GlassCard
          title="Total Count"
          value={stats.total}
          subtitle="Total images processed"
          color="yellow"
        />

        <GlassCard
          title="Success Rate"
          value={stats.successRate}
          subtitle="Successfully processed images"
          color="green"
        />
      </div>
    </section>
  );
}

export default AnalyticsSection;
