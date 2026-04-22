"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  const faqRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion.current) return;

    // Animate FAQ rows on scroll
    const visibleFaqs = faqRefs.current.filter(Boolean);
    if (visibleFaqs.length > 0) {
      gsap.from(visibleFaqs, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: visibleFaqs[0],
          start: "top 75%",
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const animateContentOpen = (index: number) => {
    const content = contentRefs.current[index];
    if (!content || prefersReducedMotion.current) return;

    gsap.to(content, {
      height: "auto",
      opacity: 1,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const animateContentClose = (index: number) => {
    const content = contentRefs.current[index];
    if (!content || prefersReducedMotion.current) return;

    gsap.to(content, {
      height: 0,
      opacity: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleAccordionClick = (index: number) => {
    if (openIndex === index) {
      animateContentClose(index);
      setOpenIndex(null);
    } else {
      if (openIndex !== null) {
        animateContentClose(openIndex);
      }
      setOpenIndex(index);
      animateContentOpen(index);
    }
  };

  return (
    <section
      id="faq"
      className="relative bg-burgundy px-4 py-20 sm:px-6 sm:py-32 lg:px-8 lg:py-48 text-cream"
    >
      <div className="mx-auto max-w-6xl">
        <div className="eyebrow text-cream/60">FAQ</div>

        <div className="accent-divider"></div>

        <h2 className="heading-display mb-16 max-w-3xl">
          EVERYTHING YOU<br />
          NEED TO KNOW
        </h2>

        <div className="space-y-0 border-t border-cream/20 max-w-4xl">
          {faqs.map((faq, i) => (
            <div
              key={i}
              ref={(el) => (faqRefs.current[i] = el)}
              className="border-b border-cream/20 py-6 sm:py-8"
            >
              <button
                type="button"
                onClick={() => handleAccordionClick(i)}
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

              <div
                ref={(el) => (contentRefs.current[i] = el)}
                id={`faq-${i}`}
                style={{
                  height: openIndex === i ? "auto" : 0,
                  opacity: openIndex === i ? 1 : 0,
                  overflow: "hidden",
                }}
                className="transition-all"
              >
                <div className="mt-6 max-w-3xl">
                  <p className="text-base leading-relaxed text-cream/90">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
