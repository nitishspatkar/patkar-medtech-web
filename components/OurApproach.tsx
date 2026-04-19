"use client";

import { useEffect, useRef, useState } from "react";
import { FadeIn } from "./FadeIn";

const steps = [
  {
    title: "Deep Requirements Engineering",
    body:
      "We learn your workflows, not impose solutions. We ask the questions that matter.",
  },
  {
    title: "Rapid Prototyping & Feedback",
    body:
      "Working prototypes in weeks, not quarters. You steer development while changes are cheap.",
  },
  {
    title: "Continuous Delivery",
    body:
      "Short cycles, incremental value. Visible iterations. Your feedback shapes the product.",
  },
  {
    title: "Security by Architecture",
    body:
      "Privacy built in from day one. GDPR, nDSG, medical data obligations are our north star.",
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
            How we build software physicians want to use
          </h2>
        </FadeIn>

        <FadeIn delayMs={60} className="mt-6 max-w-3xl">
          <p className="text-lg text-pdl-muted">
            Every practice is unique. We fit the tool to the medicine.
          </p>
        </FadeIn>

        {/* Desktop: horizontal timeline */}
        <div className="relative mt-14 hidden lg:block">
          <div
            className="absolute left-0 right-0 top-[2.25rem] h-px bg-gradient-to-r from-transparent via-pdl-accent/40 to-transparent"
            aria-hidden
          />
          <ol className="relative grid grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <li key={step.title} className="flex flex-col">
                <div
                  className={`mx-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-pdl-accent bg-pdl-section text-sm font-semibold text-pdl-accent transition-all duration-700 ${
                    active
                      ? "translate-y-0 opacity-100"
                      : "translate-y-3 opacity-0"
                  }`}
                  style={{ transitionDelay: `${i * 160}ms` }}
                >
                  {i + 1}
                </div>
                <div
                  className={`mt-6 flex flex-1 flex-col rounded-lg border border-pdl-border bg-pdl-highlight/40 p-5 shadow-lg shadow-pdl-accent/5 backdrop-blur-sm transition-all duration-700 ${
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
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-pdl-accent bg-pdl-section text-sm font-semibold text-pdl-accent">
                  {i + 1}
                </div>
                {i < steps.length - 1 ? (
                  <div
                    className="mt-2 w-px flex-1 min-h-[2rem] bg-gradient-to-b from-pdl-accent/40 to-transparent"
                    aria-hidden
                  />
                ) : null}
              </div>
              <div className="flex-1 rounded-lg border border-pdl-border bg-pdl-highlight/40 p-5 shadow-lg shadow-pdl-accent/5 backdrop-blur-sm">
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
          <figure className="rounded-lg border border-pdl-accent/30 bg-pdl-highlight/50 p-6 shadow-lg shadow-pdl-accent/10 backdrop-blur-sm sm:p-8">
            <blockquote className="text-lg font-medium leading-relaxed text-pdl-text sm:text-xl">
              &ldquo;Prototyping costs have collapsed. This changes everything. You can finally do requirements engineering iteratively, collaboratively, with real stakes.&rdquo;
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
