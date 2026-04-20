"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How long is a typical engagement?",
    answer:
      "It depends on scope. A focused digitalization project — such as scheduling automation or a medication assistant — typically runs 3 to 6 months from requirements to deployment. We always define scope together before committing to a timeline. [PLACEHOLDER — refine with actual data]",
  },
  {
    question: "How do you handle data confidentiality?",
    answer:
      "All data processed through our systems is handled under strict GDPR and Swiss nDSG compliance. We design for data minimisation, purpose limitation, and auditability from the first architectural decision. We are happy to sign NDAs and data processing agreements before any engagement begins.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We work on a project basis or a retainer model depending on the nature of the engagement. We provide a clear proposal after an initial scoping conversation — no surprises. [PLACEHOLDER — update with actual model]",
  },
  {
    question: "Do we need a technical team on our side?",
    answer:
      "No. We handle the full technical scope. You need only to be available for requirements sessions and prototype reviews. We keep you informed without requiring you to understand the engineering.",
  },
  {
    question: "Can you work with our existing software systems?",
    answer:
      "Yes. We assess your existing infrastructure during the requirements phase and design integrations where possible. We do not require you to start from scratch.",
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
