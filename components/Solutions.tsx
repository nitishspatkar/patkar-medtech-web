import { ArrowRight } from "lucide-react";
import { FadeIn } from "./FadeIn";

const projects = [
  {
    title: "Implant Infrastructure & Real-Time Monitoring",
    description:
      "Connected medical devices that talk to physicians. Real-time monitoring and clinical decision support without regulatory theater.",
  },
  {
    title: "Medication Safety for Humans",
    description:
      "Elderly patients forget. Caregivers lose track. Pharmacists juggle interactions. Our system prevents missed doses and dangerous interactions.",
  },
  {
    title: "Scheduling That Works",
    description:
      "Smart scheduling that respects clinical needs, staffing constraints, and labor law. No spreadsheet hell.",
  },
];

export function Solutions() {
  return (
    <section
      id="solutions"
      className="border-b border-pdl-border bg-pdl-bg py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-pdl-text sm:text-4xl">
            What we&apos;ve built. What&apos;s possible.
          </h2>
        </FadeIn>

        <FadeIn delayMs={60} className="mt-6 max-w-3xl">
          <p className="text-lg text-pdl-muted">
            Specific solutions for specific problems. Custom for your practice.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map(({ title, description }, i) => (
            <FadeIn key={title} delayMs={i * 80}>
              <article className="flex h-full flex-col rounded-lg border border-pdl-border bg-pdl-highlight p-6 shadow-lg shadow-pdl-accent/5">
                <h3 className="font-heading text-xl font-semibold text-pdl-text">
                  {title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-pdl-muted">
                  {description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delayMs={120} className="mt-12">
          <div className="rounded-lg border border-pdl-accent/30 bg-pdl-highlight px-6 py-6 shadow-lg shadow-pdl-accent/10 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:px-8">
            <p className="text-base text-pdl-text sm:max-w-2xl">
              Your practice has unique needs. We don't build generic software. We engineer solutions built for your specific context.
            </p>
            <a
              href="#contact"
              className="mt-4 inline-flex items-center gap-2 text-base font-semibold text-pdl-accent transition-all hover:gap-3 sm:mt-0 sm:shrink-0"
            >
              Let&apos;s talk
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
