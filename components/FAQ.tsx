"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How long is a typical engagement?",
    answer:
      "Most focused projects — a scheduling system, a medication tool, a clinical interface — run between three and six months from requirements to deployment. We always define scope together before committing to a timeline. No surprises.",
  },
  {
    question: "How do you handle data confidentiality?",
    answer:
      "Medical data is among the most sensitive in existence. We treat it that way. Every system we build is designed for GDPR and Swiss nDSG compliance from the first architectural decision — not retrofitted at the end. We sign NDAs and data processing agreements before any engagement begins.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We work on a project basis or a retainer depending on the engagement. After an initial scoping conversation, we provide a clear proposal with no hidden costs. We do not charge for the first conversation.",
  },
  {
    question: "Do we need a technical team on our side?",
    answer:
      "No. We handle the full technical scope. What we need from you is availability for requirements sessions and prototype reviews — your clinical knowledge, not your IT department.",
  },
  {
    question: "Can you work with our existing systems?",
    answer:
      "Yes. We assess your existing infrastructure during the requirements phase and design integrations where possible. We do not ask you to start from scratch.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative bg-burgundy px-4 py-20 sm:px-6 sm:py-32 lg:px-8 lg:py-48 text-cream"
    >
      <div className="mx-auto max-w-6xl">
        <div className="eyebrow text-cream/60">FAQ</div>

        <h2 className="heading-display mb-16 max-w-3xl">
          EVERYTHING YOU<br />
          NEED TO KNOW
        </h2>

        <div className="space-y-0 border-t border-cream/20 max-w-4xl">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border-b border-cream/20 py-6 sm:py-8"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-start justify-between gap-4 text-left transition-opacity hover:opacity-70"
                aria-expanded={openIndex === i}
                aria-controls={`faq-${i}`}
              >
                <h3 className="font-bold text-lg sm:text-xl leading-tight pr-4">
                  {faq.question}
                </h3>
                <span className="text-2xl font-light shrink-0 pt-0">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>

              {openIndex === i && (
                <div id={`faq-${i}`} className="mt-6 max-w-3xl">
                  <p className="text-base leading-relaxed text-cream/90">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
