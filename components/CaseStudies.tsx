"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
  {
    number: "01",
    category: "Medical Devices",
    title: "Connected Implant Platform",
    body: "A connected electro-stimulation implant requires software that works for two very different people: the patient living with it, and the clinician managing it. We architected a secure, multi-tenant platform to serve both — defining functional requirements, resolving deployment strategy, scoping regulatory compliance under GDPR and Swiss FADP, and prototyping the core user journeys. Validated feedback on those prototypes informed every major technical decision before development began. {/* PLACEHOLDER: client name, outcome metrics */}",
  },
  {
    number: "02",
    category: "Elderly Care",
    title: "Medication Adherence for Older Adults",
    body: "The people who most need reliable medication support are often the least well-served by the tools designed to provide it. Existing apps rely on loud reminders and manual diaries — interaction patterns that work poorly for older adults with cognitive or physical limitations. We helped a Swiss eHealth startup define a better path: through user interviews, literature research, and hands-on prototyping of AI and voice-based concepts, we produced a requirements foundation and tested prototypes that placed the actual needs of older adults — and their caregivers — at the centre. An Innosuisse-recognised preliminary study, delivering risk reduction before development began. {/* PLACEHOLDER: client name, outcome metrics */}",
  },
  {
    number: "03",
    category: "Clinical Operations",
    title: "Staff Scheduling for a Paediatric Department",
    body: "Roster planning in a hospital department is deceptively complex. Workload percentages, vacation requests, regulatory constraints on consecutive shifts and night duties, last-minute absences — all of it must be reconciled, often manually, across disconnected systems. For a Swiss paediatric department, we led the technical design of a scheduling tool that brought this complexity under control. The system integrated the relevant constraints, surfaced patterns through clear visualisations, and made both planned and spontaneous changes manageable. The result was a tool that reduced the cognitive burden of roster planning while giving clinical leads the analytical visibility they had never had before. {/* PLACEHOLDER: client name, outcome metrics */}",
  },
];

export function CaseStudies() {
  const [openIndex, setOpenIndex] = useState(0);
  const caseRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion.current) return;

    // Animate case study rows on scroll
    const visibleCases = caseRefs.current.filter(Boolean);
    if (visibleCases.length > 0) {
      gsap.from(visibleCases, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: visibleCases[0],
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
      id="work"
      className="relative bg-burgundy px-4 py-20 sm:px-6 sm:py-32 lg:px-8 lg:py-48 text-cream"
    >
      <div className="mx-auto max-w-6xl">
        <div className="eyebrow text-cream/60">Work</div>

        <h2 className="heading-display mb-16 max-w-3xl">
          SUCCESS<br />
          STORIES
        </h2>

        <div className="space-y-0 border-t border-cream/20">
          {caseStudies.map((study, i) => (
            <div
              key={i}
              ref={(el) => (caseRefs.current[i] = el)}
              className="border-b border-cream/20 py-6 sm:py-8"
            >
              <button
                type="button"
                onClick={() => handleAccordionClick(i)}
                className="w-full flex items-start justify-between gap-4 text-left transition-opacity hover:opacity-70"
                aria-expanded={openIndex === i}
                aria-controls={`case-${i}`}
              >
                <div className="flex items-start gap-6 flex-1 min-w-0">
                  <span className="font-display text-2xl font-bold text-cream/60 shrink-0 pt-1">
                    {study.number}
                  </span>
                  <div className="min-w-0">
                    <div className="category-badge">
                      {study.category}
                    </div>
                    <h3 className="font-display text-xl font-bold text-cream sm:text-2xl leading-tight">
                      {study.title}
                    </h3>
                  </div>
                </div>
                <span className="text-2xl font-light text-cream shrink-0 pt-1">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>

              <div
                ref={(el) => (contentRefs.current[i] = el)}
                id={`case-${i}`}
                style={{
                  height: openIndex === i ? "auto" : 0,
                  opacity: openIndex === i ? 1 : 0,
                  overflow: "hidden",
                }}
                className="transition-all"
              >
                <div className="mt-6 ml-12 max-w-3xl">
                  <p className="text-base leading-relaxed text-cream">
                    {study.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-cream/20 pt-12 flex items-center justify-between gap-6">
          <p className="text-lg font-semibold">
            Every engagement is custom.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 text-cream hover:opacity-70 transition-opacity font-semibold">
            → Talk to us about your challenge
          </a>
        </div>
      </div>
    </section>
  );
}
