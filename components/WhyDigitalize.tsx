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
      <span className="font-stat text-5xl font-semibold tabular-nums tracking-tight text-pdl-accent sm:text-6xl">
        {n2}×
      </span>
    );
  } else if (kind.type === "percent") {
    display = (
      <span className="font-stat text-5xl font-semibold tabular-nums tracking-tight text-pdl-accent sm:text-6xl">
        {n49}%
      </span>
    );
  } else {
    display = (
      <span className="font-stat text-5xl font-semibold tracking-tight text-pdl-accent sm:text-6xl">
        ⅔
      </span>
    );
  }

  return (
    <div className="flex h-full flex-col rounded-xl border border-pdl-border bg-pdl-bg p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
      <div className="mb-4">{display}</div>
      <p className="flex-1 text-base text-pdl-text">{label}</p>
      <p className="mt-4 text-xs text-pdl-muted">{source}</p>
    </div>
  );
}

const benefits = [
  "See more patients without extending your hours",
  "Reduce documentation time with smarter workflows",
  "Eliminate preventable scheduling and medication errors",
  "Reclaim the joy of practising medicine",
  "Make data-driven decisions with real-time insights",
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
            You went into medicine to care for people.
          </h2>
        </FadeIn>

        <FadeIn delayMs={60} className="mt-6 max-w-3xl">
          <p className="text-lg text-pdl-muted">
            But somewhere along the way, the paperwork took over. Research
            consistently shows that physicians spend more time on administrative
            tasks than they do with patients — and the costs are far greater than
            just frustration.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <StatCard
            kind={{ type: "multiplier" }}
            label="Physicians spend nearly twice as much time on administrative tasks as they do with patients."
            source="Annals of Internal Medicine"
            animate={inView}
          />
          <StatCard
            kind={{ type: "percent" }}
            label="of a physician's workday is spent in EHR systems — compared to only 27% in direct patient care."
            source="Time-allocation study, EvidenceCare"
            animate={inView}
          />
          <StatCard
            kind={{ type: "fraction" }}
            label="of physicians say administrative duties negatively affect their ability to deliver high-quality care."
            source="Massachusetts General Physicians Organization Survey"
            animate={inView}
          />
        </div>

        <div
          className="my-14 h-px w-full bg-pdl-border"
          role="separator"
          aria-hidden
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <FadeIn>
            <p className="text-lg text-pdl-text">
              This is not a personal failure. It is a systemic one. Scheduling
              conflicts, manual documentation, medication tracking, and
              disconnected data flows — these are problems that software can
              solve. And solving them does not just save time. It recovers
              energy. It reduces burnout. It lets you focus on what actually
              demands your expertise.
            </p>
          </FadeIn>

          <FadeIn delayMs={80}>
            <ul className="space-y-4">
              {benefits.map((item) => (
                <li key={item} className="flex gap-3 text-pdl-text">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pdl-accent/10 text-pdl-accent">
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
            Digitalization is not a disruption. It is the restoration of what
            medicine should feel like.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
