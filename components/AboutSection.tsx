import { FadeIn } from "./FadeIn";

const values = [
  {
    title: "Clinical Inside Out",
    body: "We understand healthcare not as observers, but as practitioners.",
    emoji: "🩺",
  },
  {
    title: "Privacy as Architecture",
    body: "Data protection is not an add-on. It is how we build.",
    emoji: "🔐",
  },
  {
    title: "Sustainable Digitalization",
    body: "Technology that lasts, scales, and respects human values.",
    emoji: "♻️",
  },
];

function AboutIllustration() {
  return (
    <svg
      className="h-auto w-full max-w-md text-pdl-accent"
      viewBox="0 0 400 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect
        x="48"
        y="64"
        width="200"
        height="200"
        rx="24"
        stroke="currentColor"
        strokeOpacity="0.35"
        strokeWidth="2"
      />
      <circle
        cx="248"
        cy="120"
        r="88"
        stroke="#2E9E8F"
        strokeOpacity="0.45"
        strokeWidth="2"
      />
      <path
        d="M120 200c32-48 72-72 120-72"
        stroke="currentColor"
        strokeOpacity="0.5"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M200 96v48M176 120h48"
        stroke="#2E9E8F"
        strokeOpacity="0.6"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect
        x="232"
        y="200"
        width="120"
        height="72"
        rx="8"
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="1.5"
      />
      <path
        d="M248 216h80M248 232h56M248 248h72"
        stroke="currentColor"
        strokeOpacity="0.2"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="border-b border-pdl-border bg-pdl-section py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-pdl-text sm:text-4xl">
            Who we are
          </h2>
        </FadeIn>

        <div className="mt-10 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6 text-lg text-pdl-text">
            <FadeIn>
              <p>
                Patkar Digital Labs was founded by two people who share a rare
                combination of expertise: a practising physician who has
                experienced clinical workflows firsthand, and a PhD computer
                scientist with deep experience in software engineering, data
                systems, and digital sustainability.
              </p>
            </FadeIn>
            <FadeIn delayMs={60}>
              <p>
                This is not a consultancy that visits medical practices and
                translates for engineers. We are the physician and the engineer
                — in the same room, speaking the same language.
              </p>
            </FadeIn>
            <FadeIn delayMs={120}>
              <p>
                Around this founding pair, we work with an associate model: a
                carefully selected network of specialist clinicians who join us on
                a per-engagement basis, bringing domain expertise that matches
                your specific environment — whether that is general practice,
                surgical care, geriatrics, or beyond.
              </p>
            </FadeIn>
          </div>

          <FadeIn delayMs={80} className="flex justify-center lg:justify-end">
            <div className="pdl-dot-pattern rounded-2xl border border-pdl-border bg-pdl-bg p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
              <AboutIllustration />
            </div>
          </FadeIn>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {values.map((v, i) => (
            <FadeIn key={v.title} delayMs={i * 70}>
              <div className="h-full rounded-xl border border-pdl-border bg-pdl-bg p-5 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
                <p className="text-2xl" aria-hidden>
                  {v.emoji}
                </p>
                <h3 className="font-heading mt-3 text-lg font-semibold text-pdl-text">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-pdl-muted">
                  {v.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
