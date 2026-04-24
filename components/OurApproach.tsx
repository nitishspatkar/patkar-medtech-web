"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion.current) return;

    // Animate step rows on scroll
    const visibleSteps = stepRefs.current.filter(Boolean);
    if (visibleSteps.length > 0) {
      gsap.from(visibleSteps, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: visibleSteps[0],
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
      setOpenIndex(-1);
    } else {
      if (openIndex >= 0) {
        animateContentClose(openIndex);
      }
      setOpenIndex(index);
      animateContentOpen(index);
    }
  };

  return (
    <section
      id="our-approach"
      className="relative bg-cream px-4 py-20 sm:px-6 sm:py-32 lg:px-8 lg:py-48"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="heading-display mb-16 max-w-3xl">
          WHAT WE<br />
          DO DIFFERENTLY
        </h2>

        <div className="space-y-4 border-t border-dark/10">
          {steps.map((step, i) => (
            <div
              key={i}
              ref={(el) => (stepRefs.current[i] = el)}
              className={`card-modern border-l-4 transition-all ${openIndex === i ? 'border-l-teal bg-white shadow-lg' : 'border-l-transparent hover:bg-white/50'}`}
            >
              <button
                type="button"
                onClick={() => handleAccordionClick(i)}
                className="w-full flex items-start justify-between gap-4 text-left p-2"
                aria-expanded={openIndex === i}
                aria-controls={`step-${i}`}
              >
                <div className="flex items-start gap-6 flex-1 min-w-0">
                  <span className={`font-display text-2xl font-bold shrink-0 pt-1 ${openIndex === i ? 'text-teal' : 'text-muted'}`}>
                    {step.number}
                  </span>
                  <h3 className="font-display text-xl font-bold text-dark sm:text-2xl leading-tight">
                    {step.title}
                  </h3>
                </div>
                <span className={`text-2xl font-light shrink-0 pt-1 transition-colors ${openIndex === i ? 'text-teal' : 'text-muted'}`}>
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>

              <div
                ref={(el) => (contentRefs.current[i] = el)}
                id={`step-${i}`}
                style={{
                  height: openIndex === i ? "auto" : 0,
                  opacity: openIndex === i ? 1 : 0,
                  overflow: "hidden",
                }}
                className="transition-all"
              >
                <div className="mt-6 ml-12 max-w-3xl">
                  <p className="text-base leading-relaxed text-dark">
                    {step.body}
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
