"use client";

import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "REQUIREMENTS ENGINEERING & INSIGHTS",
    body:
      "Before we write a single line of code, we invest heavily in understanding your clinical workflows, pain points, and goals. This phase has always been the most valuable — and the most neglected industry-wide. We have made it our foundation. With the cost of prototyping now dramatically lower, we can finally operationalize proper RE the way it always should have been done.",
  },
  {
    number: "02",
    title: "EARLY PROTOTYPING",
    body:
      "We put a working prototype in your hands faster than you expect. Instead of approving abstract specifications, you interact with the real system — early — and shape it while change is still cheap. This is not just a technical advantage. It is a fundamentally better way to build trust and reduce risk.",
  },
  {
    number: "03",
    title: "AGILE, ITERATIVE DELIVERY",
    body:
      "We work in short cycles, delivering value continuously. You always know what is being built and why. Our agile approach means the solution evolves with your feedback — not despite it. We bring deep experience in agile ways of working across complex, data-driven systems.",
  },
  {
    number: "04",
    title: "PRIVACY & SUSTAINABILITY BY DESIGN",
    body:
      "Data protection is not a checkbox. It is built into every architectural decision from day one. We hold deep expertise in GDPR, Swiss nDSG, and the specific obligations of medical data. Security, auditability, and long-term maintainability are non-negotiable defaults — not afterthoughts.",
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
          Every practice is different. We do not arrive with a solution already in mind.
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
            "The falling cost of prototyping means we can finally invest in
            requirements engineering the way it always should have been done."
          </p>
        </div>
      </div>
    </section>
  );
}
