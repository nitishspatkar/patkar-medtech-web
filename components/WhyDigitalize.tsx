"use client";

export function WhyDigitalize() {
  const benefits = [
    "Recover time lost to redundant documentation",
    "Replace fragmented systems with coherent workflows",
    "Reduce cognitive load during consultations",
    "Eliminate preventable scheduling and medication errors",
    "Make data work for you — not the other way around",
  ];

  return (
    <section
      id="why-digitalize"
      className="relative bg-burgundy px-4 py-20 sm:px-6 sm:py-32 lg:px-8 lg:py-48 text-cream"
    >
      <div className="mx-auto max-w-6xl">
        <div className="eyebrow text-cream/60">The Problem</div>

        <h2 className="heading-display mb-8 max-w-3xl">
          THE TOOLS SHOULD<br />
          WORK FOR YOU.
        </h2>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-2xl">
            <p className="mb-6 text-lg leading-relaxed">
              You chose medicine because of patients — not systems. Yet the average Swiss doctor now spends 120 minutes every day on documentation alone. In Germany, physicians report that administrative tasks consume nearly a fifth of their working time — and that share is growing.
            </p>
            <p className="mb-6 text-lg leading-relaxed">
              Every extra click, every disconnected system, every redundant entry adds up — in time, in cognitive load, and in the quiet erosion of why you went into medicine in the first place.
            </p>
            <p className="mb-6 text-lg leading-relaxed">
              These are not isolated frustrations. They are the predictable outcome of healthcare IT that was built for billing and compliance, not for clinical work. The result is systems that demand adaptation from doctors rather than offering it.
            </p>
            <p className="text-lg leading-relaxed">
              These are engineering problems. And engineering problems have solutions.
            </p>
          </div>

          <div className="space-y-4">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="flex gap-4 items-start pb-4 border-b border-cream/20 last:border-0"
              >
                <div className="font-display text-2xl font-bold shrink-0 text-cream/60">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="text-base leading-relaxed pt-1">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-cream/20 pt-12">
          <p className="text-2xl font-bold leading-tight">
            Digitalization is not a disruption. It is the restoration of what medicine should feel like.
          </p>
        </div>
      </div>
    </section>
  );
}
