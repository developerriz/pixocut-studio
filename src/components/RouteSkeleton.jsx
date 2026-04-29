function SkeletonBlock({ className = "" }) {
  return <div className={`rounded-xl bg-violet-400/20 ${className}`} />;
}

export default function RouteSkeleton({ name = "page" }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#06050F] font-plus text-[#F0EEFF]">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_15%_10%,rgba(79,70,229,.18)_0%,transparent_70%),radial-gradient(ellipse_60%_50%_at_85%_20%,rgba(124,58,237,.14)_0%,transparent_65%),radial-gradient(ellipse_70%_60%_at_50%_80%,rgba(37,99,235,.12)_0%,transparent_65%),radial-gradient(ellipse_50%_40%_at_90%_90%,rgba(168,85,247,.10)_0%,transparent_60%)]" />
      <div className="pointer-events-none fixed inset-0 z-[1] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,.04)_1px,transparent_0)] bg-[length:12px_12px] opacity-20" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 py-6 md:px-10">
        <div className="rounded-2xl border border-violet-500/25 bg-[rgba(18,15,40,.7)] p-5 backdrop-blur-xl">
          <SkeletonBlock className="h-4 w-28" />
          <SkeletonBlock className="mt-4 h-8 w-[42%]" />
          <SkeletonBlock className="mt-3 h-4 w-[70%]" />
          <div className="mt-2 text-xs text-violet-300/70">Loading {name}</div>
          <SkeletonBlock className="mt-8 h-[300px] w-full" />
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <SkeletonBlock className="h-[220px] w-full" />
          <SkeletonBlock className="h-[220px] w-full" />
        </div>
      </div>
    </div>
  );
}