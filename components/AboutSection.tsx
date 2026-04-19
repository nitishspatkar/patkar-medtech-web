import { FadeIn } from "./FadeIn";

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
                <div className="rounded-xl overflow-hidden border-2 border-pdl-accent/30 shadow-lg w-32 h-40 bg-gradient-to-br from-pdl-accent/20 to-pdl-accent-2/20 flex items-center justify-center">
                  <span className="text-4xl">👨‍⚕️</span>
                </div>
                <p className="mt-2 text-sm text-center text-pdl-muted font-medium">Physician</p>
              </div>
              <div className="animate-float" style={{ animationDelay: "0.2s" }}>
                <div className="rounded-xl overflow-hidden border-2 border-pdl-accent-2/30 shadow-lg w-32 h-40 bg-gradient-to-br from-pdl-accent-2/20 to-pdl-accent/20 flex items-center justify-center">
                  <span className="text-4xl">💻</span>
                </div>
                <p className="mt-2 text-sm text-center text-pdl-muted font-medium">Engineer</p>
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
