import { FadeIn } from "./FadeIn";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-pdl-border"
    >
      <div
        className="pdl-dot-pattern absolute inset-0 opacity-40"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-pdl-bg via-pdl-highlight/20 to-pdl-bg"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-20">
        <FadeIn>
          <h1 className="font-heading max-w-3xl text-4xl font-bold leading-[1.15] tracking-tight text-pdl-text sm:text-5xl lg:text-[3.25rem]">
            What if your EHR actually{" "}
            <span className="bg-gradient-to-r from-pdl-accent to-pdl-accent-2 bg-clip-text text-transparent">
              understood medicine?
            </span>
          </h1>
        </FadeIn>

        <FadeIn delayMs={80} className="mt-6">
          <p className="max-w-2xl text-lg text-pdl-muted sm:text-xl">
            Digital tools built by clinicians for clinicians — not spreadsheet companies pretending to understand healthcare.
          </p>
        </FadeIn>

        <FadeIn delayMs={140} className="mt-8">
          <p className="max-w-3xl text-base text-pdl-text sm:text-lg leading-relaxed">
            We are Patkar Digital Labs. Founded by a physician-engineer team, we build purpose-built software that fits the messy, beautiful complexity of real clinical practice. No generic compromises. No security theater. Just thoughtful, secure, and sustainable digital tools — engineered for medicine, not despite it.
          </p>
        </FadeIn>

        <FadeIn delayMs={200} className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#our-approach"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-pdl-accent to-pdl-accent-2 px-7 py-3.5 text-center text-base font-semibold text-pdl-bg shadow-lg shadow-pdl-accent/20 transition-all hover:shadow-xl hover:shadow-pdl-accent/30"
          >
            See How We Work
          </a>
          <a
            href="#solutions"
            className="inline-flex items-center justify-center rounded-lg border border-pdl-accent/30 bg-pdl-accent/5 px-7 py-3.5 text-center text-base font-semibold text-pdl-accent transition-all hover:bg-pdl-accent/10 hover:border-pdl-accent/50"
          >
            Explore Our Solutions
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
