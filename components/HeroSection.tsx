"use client";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative bg-cream px-4 py-20 sm:px-6 sm:py-32 lg:px-8 lg:py-48"
    >
      <div className="mx-auto max-w-6xl">
        <h1 className="heading-display mb-8 max-w-4xl">
          BETTER TOOLS.<br />
          BETTER MEDICINE.
        </h1>

        <p className="mb-6 max-w-2xl text-lg text-muted leading-relaxed sm:text-xl">
          Custom digital solutions for medical practices that understand how healthcare actually works.
        </p>

        <p className="mb-12 max-w-3xl text-base leading-relaxed text-dark sm:text-lg">
          The digitalization of healthcare was supposed to make practice easier. For most doctors, it made it harder. We build custom solutions that actually fit — compliant by design, built on deep clinical understanding, and shaped around the way you work.
        </p>

        <a href="#our-approach" className="inline-flex items-center gap-2 text-lg font-semibold text-dark hover:opacity-70 transition-opacity">
          → See How We Work
        </a>

        {/* Stat bar */}
        <div className="mt-20 border-t border-dark/20 pt-12 grid gap-12 sm:grid-cols-3">
          <div>
            <div className="heading-display mb-2 text-3xl sm:text-4xl">120 min</div>
            <p className="text-sm leading-relaxed text-muted">
              Swiss acute care doctors spend 120 minutes every day on documentation alone — and that number is rising.
              <br />
              <em className="text-xs">FMH/gfs.bern Physician Workplace Survey 2024</em>
            </p>
          </div>
          <div>
            <div className="heading-display mb-2 text-3xl sm:text-4xl">19%</div>
            <p className="text-sm leading-relaxed text-muted">
              of a German physician's working time is consumed by administrative tasks — not patient care.
              <br />
              <em className="text-xs">McKinsey Physician Survey</em>
            </p>
          </div>
          <div>
            <div className="heading-display mb-2 text-3xl sm:text-4xl">50%</div>
            <p className="text-sm leading-relaxed text-muted">
              of a physician's day is spent on non-patient-facing activities.
              <br />
              <em className="text-xs">University of Illinois / multiple studies</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
