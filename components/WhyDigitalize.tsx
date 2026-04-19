"use client";

import { Check } from "lucide-react";
import { type ReactNode, useEffect, useRef, useState } from "react";
import { FadeIn } from "./FadeIn";

function useInViewOnce() {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setInView(true);
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

function useCountUp(end: number, enabled: boolean, durationMs = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!enabled) return;

    let frame: number;
    const t0 = performance.now();
    const ease = (t: number) => 1 - (1 - t) ** 3;

    const tick = (now: number) => {
      const u = Math.min((now - t0) / durationMs, 1);
      setValue(Math.round(end * ease(u)));
      if (u < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [enabled, end, durationMs]);

  return value;
}

function StatCard({
  kind,
  label,
  source,
  animate,
}: {
  kind: { type: "multiplier" } | { type: "percent" } | { type: "fraction" };
  label: string;
  source: string;
  animate: boolean;
}) {
  const n2 = useCountUp(2, animate && kind.type === "multiplier");
  const n49 = useCountUp(49, animate && kind.type === "percent");

  let display: ReactNode;
  if (kind.type === "multiplier") {
    display = (
      <span className="font-stat text-5xl font-semibold tabular-nums tracking-tight bg-gradient-to-r from-pdl-accent to-pdl-accent-2 bg-clip-text text-transparent sm:text-6xl">
        {n2}×
      </span>
    );
  } else if (kind.type === "percent") {
    display = (
      <span className="font-stat text-5xl font-semibold tabular-nums tracking-tight bg-gradient-to-r from-pdl-accent to-pdl-accent-2 bg-clip-text text-transparent sm:text-6xl">
        {n49}%
      </span>
    );
  } else {
    display = (
      <span className="font-stat text-5xl font-semibold tracking-tight bg-gradient-to-r from-pdl-accent to-pdl-accent-2 bg-clip-text text-transparent sm:text-6xl">
        ⅔
      </span>
    );
  }

  return (
    <div className="flex h-full flex-col rounded-lg border border-pdl-border bg-pdl-highlight/30 p-6 shadow-lg shadow-pdl-accent/5 backdrop-blur-sm">
      <div className="mb-4">{display}</div>
      <p className="flex-1 text-base text-pdl-text">{label}</p>
      <p className="mt-4 text-xs text-pdl-muted">{source}</p>
    </div>
  );
}

const benefits = [
  "See more patients without burning out or extending hours",
  "Reduce documentation time — focus on the work that matters",
  "Eliminate preventable errors through intelligent workflows",
  "Reclaim the essence of medicine: thinking, teaching, caring",
  "Make decisions with real-time data, not guesswork",
];

export function WhyDigitalize() {
  const { ref, inView } = useInViewOnce();

  return (
    <section
      id="why-digitalize"
      ref={ref}
      className="border-b border-pdl-border bg-pdl-bg py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-pdl-text sm:text-4xl">
            <span className="bg-gradient-to-r from-pdl-accent to-pdl-accent-2 bg-clip-text text-transparent">
              "Where did all the time go?"
            </span>
          </h2>
        </FadeIn>

        <FadeIn delayMs={60} className="mt-6 max-w-3xl">
          <p className="text-lg text-pdl-muted">
            Paperwork ate your practice. The data proves it — and it's stark.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <StatCard
            kind={{ type: "multiplier" }}
            label="Physicians spend nearly twice as long managing EHRs as they do talking to patients."
            source="Annals of Internal Medicine"
            animate={inView}
          />
          <StatCard
            kind={{ type: "percent" }}
            label="of a physician's workday is trapped in screens — not in rooms with patients."
            source="EvidenceCare Time-Allocation Study"
            animate={inView}
          />
          <StatCard
            kind={{ type: "fraction" }}
            label="of physicians report that admin burden directly harms their ability to deliver care."
            source="Mass General Physicians Survey"
            animate={inView}
          />
        </div>

        <div
          className="my-14 h-px w-full bg-gradient-to-r from-transparent via-pdl-border to-transparent"
          role="separator"
          aria-hidden
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <FadeIn>
            <p className="text-lg text-pdl-text leading-relaxed">
              This isn&apos;t your fault. It&apos;s a design failure. Systems optimized for billing, not patients. Technology that was supposed to free you has enslaved you.
            </p>
          </FadeIn>

          <FadeIn delayMs={80}>
            <ul className="space-y-4">
              {benefits.map((item) => (
                <li key={item} className="flex gap-3 text-pdl-text">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pdl-accent/20 text-pdl-accent">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        <FadeIn delayMs={120} className="mt-12">
          <p className="text-xl font-semibold text-pdl-accent sm:text-2xl">
            Digitalization isn&apos;t transformation. It&apos;s restoration.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
