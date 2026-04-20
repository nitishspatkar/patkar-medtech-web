"use client";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative bg-cream px-4 py-20 sm:px-6 sm:py-32 lg:px-8 lg:py-48"
    >
      <div className="mx-auto max-w-6xl">
        <div className="eyebrow">Medical Digitalization — Switzerland & EU</div>

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
            <div className="heading-display mb-2 text-3xl sm:text-4xl">2×</div>
            <p className="text-sm leading-relaxed text-muted">
              Time physicians spend on admin vs. patient care
              <br />
              <em className="text-xs">Annals of Internal Medicine</em>
            </p>
          </div>
          <div>
            <div className="heading-display mb-2 text-3xl sm:text-4xl">49%</div>
            <p className="text-sm leading-relaxed text-muted">
              of a physician's day spent in EHR — only 27% with patients
              <br />
              <em className="text-xs">EvidenceCare</em>
            </p>
          </div>
          <div>
            <div className="heading-display mb-2 text-3xl sm:text-4xl">⅔</div>
            <p className="text-sm leading-relaxed text-muted">
              of physicians say admin duties harm quality of care
              <br />
              <em className="text-xs">MGH Physician Survey</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
