"use client";

import { useEffect, useRef, useState } from "react";
import { FadeIn } from "./FadeIn";

const steps = [
  {
    title: "Deep Requirements Engineering",
    body:
      "Before we write a single line of code, we invest heavily in understanding your clinical workflows, pain points, and goals. We ask the questions no one else asks. This phase has always been the most valuable — and the most neglected. We have made it the foundation.",
  },
  {
    title: "Early Prototyping",
    body:
      "With today's development tools, we can put a working prototype in your hands faster than ever. This changes everything. Instead of approving abstract specifications, you interact with the actual system — early — and shape it while it is still cheap to change. This is not just a technical advantage. It is a better way to build trust.",
  },
  {
    title: "Agile, Iterative Delivery",
    body:
      "We work in short cycles, delivering value continuously. You always know what is being built and why. Our agile approach means the solution evolves with your feedback — not despite it.",
  },
  {
    title: "Sustainable and Compliant by Design",
    body:
      "Data privacy is not a checkbox. It is built into every architectural decision. We hold deep expertise in GDPR, Swiss nDSG, and the specific privacy obligations of medical data. Security, auditability, and long-term maintainability are non-negotiable defaults.",
  },
];

export function OurApproach() {
  const containerRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setActive(true);
      },
      { threshold: 0.12 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="our-approach"
      ref={containerRef}
      className="border-b border-pdl-border bg-pdl-section py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-pdl-text sm:text-4xl">
            How we work with you
          </h2>
        </FadeIn>

        <FadeIn delayMs={60} className="mt-6 max-w-3xl">
          <p className="text-lg text-pdl-muted">
            Every practice is different. We do not arrive with a solution already
            in mind. We start by deeply understanding your world.
          </p>
        </FadeIn>

        {/* Desktop: horizontal timeline */}
        <div className="relative mt-14 hidden lg:block">
          <div
            className="absolute left-0 right-0 top-[2.25rem] h-px bg-pdl-border"
            aria-hidden
          />
          <ol className="relative grid grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <li key={step.title} className="flex flex-col">
                <div
                  className={`mx-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-pdl-accent bg-pdl-bg text-sm font-semibold text-pdl-accent transition-all duration-700 ${
                    active
                      ? "translate-y-0 opacity-100"
                      : "translate-y-3 opacity-0"
                  }`}
                  style={{ transitionDelay: `${i * 160}ms` }}
                >
                  {i + 1}
                </div>
                <div
                  className={`mt-6 flex flex-1 flex-col rounded-xl border border-pdl-border bg-pdl-bg p-5 shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-all duration-700 ${
                    active
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${120 + i * 160}ms` }}
                >
                  <h3 className="font-heading text-lg font-semibold text-pdl-text">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-pdl-muted">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Mobile / tablet: vertical stack */}
        <ol className="relative mt-12 space-y-6 lg:hidden">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className={`relative flex gap-4 transition-all duration-700 ${
                active ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 140}ms` }}
            >
              <div className="flex flex-col items-center">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-pdl-accent bg-pdl-bg text-sm font-semibold text-pdl-accent">
                  {i + 1}
                </div>
                {i < steps.length - 1 ? (
                  <div
                    className="mt-2 w-px flex-1 min-h-[2rem] bg-pdl-border"
                    aria-hidden
                  />
                ) : null}
              </div>
              <div className="flex-1 rounded-xl border border-pdl-border bg-pdl-bg p-5 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
                <h3 className="font-heading text-lg font-semibold text-pdl-text">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-pdl-muted">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <FadeIn className="mt-14">
          <figure className="rounded-xl border border-pdl-accent/20 bg-pdl-bg p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)] sm:p-8">
            <blockquote className="text-lg font-medium leading-relaxed text-pdl-text sm:text-xl">
              &ldquo;The falling cost of prototyping means we can finally do
              requirements engineering the way it should be done — iteratively,
              collaboratively, with real feedback. We use that to our
              advantage.&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-sm font-medium text-pdl-accent">
              — Patkar Digital Labs
            </figcaption>
          </figure>
        </FadeIn>
      </div>
    </section>
  );
}
