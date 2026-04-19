import { ArrowRight, CalendarDays, Cpu, Pill } from "lucide-react";
import { FadeIn } from "./FadeIn";

const projects = [
  {
    title: "Digital Infrastructure for Medical Implants",
    description:
      "End-to-end digital interfaces and infrastructure for connected medical implants — enabling real-time monitoring, data logging, and clinical decision support.",
    icon: Cpu,
  },
  {
    title: "Medication Assistant for Elderly Patients",
    description:
      "An intelligent medication management system designed for elderly patients and their caregivers — reducing missed doses, adverse interactions, and hospital readmissions.",
    icon: Pill,
  },
  {
    title: "Roster & Scheduling Optimisation",
    description:
      "Smart scheduling systems that eliminate the coordination overhead of staff rostering — freeing clinical leads to focus on patient outcomes, not spreadsheets.",
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
            What we build
          </h2>
        </FadeIn>

        <FadeIn delayMs={60} className="mt-6 max-w-3xl">
          <p className="text-lg text-pdl-muted">
            We have delivered projects across clinical infrastructure, patient
            safety, and operational efficiency. Every engagement is custom — but
            here are examples of what is possible.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map(({ title, description, icon: Icon }, i) => (
            <FadeIn key={title} delayMs={i * 80}>
              <article className="flex h-full flex-col rounded-xl border border-pdl-border bg-pdl-bg p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-pdl-accent/10 text-pdl-accent">
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
          <div className="rounded-xl border border-pdl-border bg-pdl-section px-6 py-6 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:px-8">
            <p className="text-base text-pdl-text sm:max-w-2xl">
              Every solution we build is tailored to your practice&apos;s
              specific context, size, and technical environment.
            </p>
            <a
              href="#contact"
              className="mt-4 inline-flex items-center gap-2 text-base font-semibold text-pdl-accent sm:mt-0 sm:shrink-0"
            >
              Talk to us about your challenge
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
