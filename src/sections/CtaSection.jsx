function CtaSection({ onSignUp }) {
  return (
    <section className="page-shell relative z-10 py-16">
      <div className="relative overflow-hidden rounded-[28px] border border-violet-500/25 bg-[linear-gradient(135deg,rgba(79,70,229,.15),rgba(124,58,237,.1))] px-10 py-12 text-center backdrop-blur-xl">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(124,58,237,.15)_0%,transparent_70%)] blur-[80px]" />
        <h2 className="relative mb-4 font-syne text-[clamp(25px,3.5vw,40px)] font-extrabold text-[#F0EEFF]">
          Start removing backgrounds
          <br />
          <span className="bg-gradient-to-br from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
            for free today
          </span>
        </h2>
        <p className="relative mb-8 text-base text-[#8B85A8]">
          No credit card required · Unlimited usage · HD quality
        </p>
        <div className="relative flex justify-center gap-3.5 max-sm:flex-col">
          <button
            type="button"
            className="rounded-full bg-gradient-to-br from-violet-600 to-blue-600 px-10 py-4 text-[17px] font-semibold text-white shadow-[0_0_30px_rgba(124,58,237,.35)] transition hover:-translate-y-0.5 hover:shadow-[0_0_50px_rgba(124,58,237,.55)]"
            onClick={onSignUp}
          >
            Get Started Free
          </button>
          {/* <button
            type="button"
            className="rounded-full border border-violet-500/25 px-[30px] py-4 text-[15px] font-medium text-[#8B85A8] transition hover:border-violet-400/60 hover:bg-violet-500/10 hover:text-[#F0EEFF]"
          >
            View Pricing
          </button> */}
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
