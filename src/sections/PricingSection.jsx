import { FiCheck } from "react-icons/fi";

function PricingSection({ onSignUp }) {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      sub: "Perfect for trying out",
      cta: "Start Free",
      highlighted: false,
      features: [
        "20 images / month",
        "Standard quality exports",
        "Manual background removal",
        "Community support",
      ],
    },
    {
      name: "Pro",
      price: "$9",
      sub: "per month, billed monthly",
      cta: "Upgrade to Pro",
      highlighted: true,
      features: [
        "200 images / month",
        "HD quality exports",
        "Batch processing",
        "Priority support",
      ],
    },
    {
      name: "Business",
      price: "$29",
      sub: "per month, for teams",
      cta: "Contact Sales",
      highlighted: false,
      features: [
        "500 images / month",
        "API access included",
        "Team seats and roles",
        "Dedicated account manager",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="page-shell relative z-10 py-16"
    >
      <div className="mb-12 text-center">
        <span className="mb-3.5 inline-flex items-center gap-1 rounded-full border border-violet-500/30 bg-violet-600/15 px-3.5 py-1.5 text-xs text-violet-300">
          Pricing
        </span>
        <h2 className="font-syne text-[clamp(28px,3.5vw,44px)] font-extrabold text-[#F0EEFF]">
          Choose your{" "}
          <span className="bg-gradient-to-br from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
            perfect plan
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-[620px] text-sm text-[#8B85A8] md:text-base">
          Start free and scale when you need more volume, quality, and team
          features.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-[22px] border px-6 py-7 backdrop-blur-xl transition ${
              plan.highlighted
                ? "border-violet-400/55 bg-gradient-to-b from-violet-500/20 to-blue-500/10 shadow-[0_20px_70px_rgba(76,29,149,.35)]"
                : "border-violet-500/25 bg-[rgba(18,15,40,.72)]"
            }`}
          >
            <div className="mb-6 flex items-start justify-between gap-3">
              <div>
                <h3 className="font-syne text-xl font-bold text-[#F0EEFF]">
                  {plan.name}
                </h3>
                <p className="mt-1 text-xs text-[#8B85A8]">{plan.sub}</p>
              </div>
              {plan.highlighted && (
                <span className="rounded-full border border-violet-300/35 bg-violet-400/20 px-2.5 py-1 text-[11px] font-semibold text-violet-200">
                  Most Popular
                </span>
              )}
            </div>

            <div className="mb-6 flex items-end gap-1">
              <span className="font-syne text-4xl font-extrabold text-[#F0EEFF]">
                {plan.price}
              </span>
              {plan.price !== "Free" && (
                <span className="pb-1 text-sm text-[#8B85A8]">/mo</span>
              )}
            </div>

            <button
              type="button"
              onClick={onSignUp}
              className={`mb-6 w-full rounded-full px-5 py-3 text-sm font-semibold transition ${
                plan.highlighted
                  ? "bg-gradient-to-br from-violet-600 to-blue-600 text-white shadow-[0_0_30px_rgba(124,58,237,.35)] hover:-translate-y-0.5 hover:shadow-[0_0_50px_rgba(124,58,237,.55)]"
                  : "border border-violet-500/30 text-[#F0EEFF] hover:bg-violet-500/10"
              }`}
            >
              {plan.cta}
            </button>

            <ul className="space-y-2.5">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-sm text-[#CFCBE7]"
                >
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-violet-500/20 text-xs text-violet-300">
                    <FiCheck className="h-3.5 w-3.5" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PricingSection;
