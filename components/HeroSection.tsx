import { FadeIn } from "./FadeIn";

const trustItems = [
  "🇨🇭 Switzerland-based. EU-ready.",
  "🔒 GDPR & nDSG Compliant by Design",
  "🩺 Founded by Clinicians & Engineers",
];

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-pdl-border"
    >
      <div
        className="pdl-dot-pattern absolute inset-0 opacity-60"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-pdl-bg via-[#eef6f9] to-pdl-bg"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-20">
        <FadeIn>
          <h1 className="font-heading max-w-3xl text-4xl font-bold leading-[1.15] tracking-tight text-pdl-text sm:text-5xl lg:text-[3.25rem]">
            Medicine deserves better tools.
            <br />
            We build them.
          </h1>
        </FadeIn>

        <FadeIn delayMs={80} className="mt-6">
          <p className="max-w-2xl text-lg text-pdl-muted sm:text-xl">
            Custom digital solutions for Swiss medical practices — built by a
            team that understands healthcare from the inside.
          </p>
        </FadeIn>

        <FadeIn delayMs={140} className="mt-8">
          <p className="max-w-3xl text-base text-pdl-text sm:text-lg">
            We are Patkar Digital Labs. Founded by a physician and a computer
            scientist, we design and build software that fits the real-world
            complexity of clinical practice. No off-the-shelf compromises. No
            generic systems. Just thoughtful, private, and sustainable digital
            tools — made for you.
          </p>
        </FadeIn>

        <FadeIn delayMs={200} className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#our-approach"
            className="inline-flex items-center justify-center rounded-xl bg-pdl-accent px-6 py-3.5 text-center text-base font-semibold text-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-colors hover:bg-pdl-accent/90"
          >
            See How We Work
          </a>
          <a
            href="#solutions"
            className="inline-flex items-center justify-center rounded-xl border border-pdl-border bg-transparent px-6 py-3.5 text-center text-base font-semibold text-pdl-accent transition-colors hover:bg-pdl-section"
          >
            Explore Our Solutions
          </a>
        </FadeIn>
      </div>

      <div className="relative border-t border-pdl-border bg-pdl-section/80 backdrop-blur-sm">
        <div className="mx-auto grid max-w-6xl gap-5 px-4 py-6 sm:grid-cols-3 sm:gap-8 sm:px-6 lg:px-8">
          {trustItems.map((label) => (
            <p
              key={label}
              className="flex items-center gap-2 text-sm leading-snug text-pdl-text sm:text-[0.9375rem]"
            >
              <span className="sr-only">Trust signal: </span>
              {label}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
