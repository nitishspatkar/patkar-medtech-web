import Image from "next/image";
import { FadeIn } from "./FadeIn";

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
        stroke="#0891b2"
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
        stroke="#0891b2"
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
            The team behind the code
          </h2>
        </FadeIn>

        <div className="mt-10 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6 text-lg text-pdl-text">
            <FadeIn>
              <p>
                Founded when two perspectives collided: a practicing physician and a computer scientist. We speak the same language. We understand the frustrations.
              </p>
            </FadeIn>
            <FadeIn delayMs={60}>
              <p>
                Supporting us is a network of specialist clinicians across multiple domains. When we engage on your project, we bring the exact expertise your practice needs.
              </p>
            </FadeIn>
          </div>

          <FadeIn delayMs={80}>
            <div className="flex gap-6 justify-center lg:justify-end">
              <div className="animate-float">
                <div className="rounded-xl overflow-hidden border-2 border-pdl-accent/30 shadow-lg w-32 h-40">
                  <Image
                    src="/founder-1.jpg"
                    alt="Physician founder"
                    width={128}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="animate-float" style={{ animationDelay: "0.2s" }}>
                <div className="rounded-xl overflow-hidden border-2 border-pdl-accent-2/30 shadow-lg w-32 h-40">
                  <Image
                    src="/founder-2.jpg"
                    alt="Engineer founder"
                    width={128}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          <FadeIn>
            <div className="h-full rounded-lg border border-pdl-border bg-pdl-highlight p-5 shadow-lg shadow-pdl-accent/5">
              <h3 className="font-heading text-lg font-semibold text-pdl-text">
                Built by Practitioners
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-pdl-muted">
                We aren't consultants observing medicine from the outside. We practice it.
              </p>
            </div>
          </FadeIn>
          <FadeIn delayMs={70}>
            <div className="h-full rounded-lg border border-pdl-border bg-pdl-highlight p-5 shadow-lg shadow-pdl-accent/5">
              <h3 className="font-heading text-lg font-semibold text-pdl-text">
                Privacy by Design
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-pdl-muted">
                Data protection isn't paperwork. It's embedded in every architectural decision.
              </p>
            </div>
          </FadeIn>
          <FadeIn delayMs={140}>
            <div className="h-full rounded-lg border border-pdl-border bg-pdl-highlight p-5 shadow-lg shadow-pdl-accent/5">
              <h3 className="font-heading text-lg font-semibold text-pdl-text">
                Engineering That Lasts
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-pdl-muted">
                Software designed for longevity, not quarterly releases.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
