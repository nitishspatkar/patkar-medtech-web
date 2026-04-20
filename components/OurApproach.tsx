"use client";

import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "REQUIREMENTS ENGINEERING & INSIGHTS",
    body:
      "The most expensive mistake in software is building the wrong thing perfectly. We prevent that. Before any development begins, we invest heavily in understanding your clinical reality — your workflows, your edge cases, your unstated needs. We surface the real problem, not just the visible one. This is where most projects cut corners. We do not.",
  },
  {
    number: "02",
    title: "EARLY PROTOTYPING",
    body:
      "A picture is worth a thousand words. A working prototype is worth a thousand meetings. We build interactive prototypes early — not to impress, but to create a shared understanding of what we are building before the cost of change becomes high. The cost of building early prototypes has dropped dramatically. We use that to your advantage: you see the solution before it is built, and change it while change is still cheap.",
  },
  {
    number: "03",
    title: "AGILE, ITERATIVE DELIVERY",
    body:
      "Clinical environments change. Priorities shift. New needs emerge. Our delivery model is designed for that reality — short cycles, continuous feedback, and a process that evolves with your practice rather than locking you into a spec written six months ago.",
  },
  {
    number: "04",
    title: "PRIVACY & SUSTAINABILITY BY DESIGN",
    body:
      "Medical data is among the most sensitive in existence. We treat it that way. GDPR and Swiss nDSG compliance are not items on a checklist — they are the lens through which every architectural decision is made. The systems we build are secure, auditable, and designed to last.",
  },
];

export function OurApproach() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="our-approach"
      className="relative bg-cream px-4 py-20 sm:px-6 sm:py-32 lg:px-8 lg:py-48"
    >
      <div className="mx-auto max-w-6xl">
        <div className="eyebrow">How We Work</div>

        <h2 className="heading-display mb-4 max-w-3xl">
          HOW WE SOLVE<br />
          YOUR CHALLENGES
        </h2>

        <p className="mb-16 max-w-2xl text-lg text-muted leading-relaxed">
          Most digitalization projects fail not because of bad engineering — but because the wrong problem was solved.
        </p>

        <div className="space-y-0 border-t border-dark/20">
          {steps.map((step, i) => (
            <div
              key={i}
              className="border-b border-dark/20 py-6 sm:py-8"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-start justify-between gap-4 text-left transition-opacity hover:opacity-70"
                aria-expanded={openIndex === i}
                aria-controls={`step-${i}`}
              >
                <div className="flex items-start gap-6 flex-1 min-w-0">
                  <span className="font-display text-2xl font-bold text-muted shrink-0 pt-1">
                    {step.number}
                  </span>
                  <h3 className="font-display text-xl font-bold text-dark sm:text-2xl leading-tight">
                    {step.title}
                  </h3>
                </div>
                <span className="text-2xl font-light text-dark shrink-0 pt-1">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>

              {openIndex === i && (
                <div id={`step-${i}`} className="mt-6 ml-12 max-w-3xl">
                  <p className="text-base leading-relaxed text-dark">
                    {step.body}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-lg border border-dark/20 bg-cream/50 p-8 sm:p-10">
          <p className="text-xl font-bold leading-tight text-dark sm:text-2xl">
            Most digitalization projects fail not because of bad engineering — but because the wrong problem was solved.
          </p>
        </div>
      </div>
    </section>
  );
}
