import { ArrowRight, CalendarDays, Cpu, Pill } from "lucide-react";
import { FadeIn } from "./FadeIn";

const projects = [
  {
    title: "Implant Infrastructure & Real-Time Monitoring",
    description:
      "Connected medical devices that talk to physicians. Real-time monitoring and clinical decision support without regulatory theater.",
    icon: Cpu,
  },
  {
    title: "Medication Safety for Humans",
    description:
      "Elderly patients forget. Caregivers lose track. Pharmacists juggle interactions. Our system prevents missed doses and dangerous interactions.",
    icon: Pill,
  },
  {
    title: "Scheduling That Works",
    description:
      "Smart scheduling that respects clinical needs, staffing constraints, and labor law. No spreadsheet hell.",
    icon: CalendarDays,
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
          {projects.map(({ title, description, icon: Icon }, i) => (
            <FadeIn key={title} delayMs={i * 80}>
              <article className="flex h-full flex-col rounded-lg border border-pdl-border bg-pdl-highlight/30 p-6 shadow-lg shadow-pdl-accent/5 backdrop-blur-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-pdl-accent/20 text-pdl-accent">
                  <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                </div>
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
          <div className="rounded-lg border border-pdl-accent/30 bg-pdl-highlight/50 px-6 py-6 shadow-lg shadow-pdl-accent/10 backdrop-blur-sm sm:flex sm:items-center sm:justify-between sm:gap-6 sm:px-8">
            <p className="text-base text-pdl-text sm:max-w-2xl">
              Your workflows are unique. We don&apos;t force generic software. We engineer solutions that fit your practice.
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
