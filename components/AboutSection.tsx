"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const valueRefs = useRef<(HTMLDivElement | null)[]>([]);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion.current) return;

    // Animate value lines with stagger
    const visibleValues = valueRefs.current.filter(Boolean);
    if (visibleValues.length > 0) {
      gsap.from(visibleValues, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: visibleValues[0],
          start: "top 80%",
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="about"
      className="relative bg-cream px-4 py-20 sm:px-6 sm:py-32 lg:px-8 lg:py-48"
    >
      <div className="mx-auto max-w-6xl">
        <div className="accent-divider"></div>
        
        <div className="eyebrow">About Us</div>

        <h2 className="heading-display mb-12 max-w-3xl">
          WHO WE ARE AND<br />
          HOW WE CAN HELP
        </h2>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 mb-16">
          <div className="max-w-2xl space-y-6">
            <p className="text-lg leading-relaxed text-dark">
              Patkar Medtech was founded by Nitish and Sanjeet Patkar — a computer scientist and a physician who happen to be partners in life as well as work. Nitish holds a PhD in Computer Science from the University of Bern and brings deep expertise in requirements engineering, software architecture, agile development, and digital sustainability. Sanjeet is a Senior Physician in General Paediatrics with daily clinical experience in the real demands of hospital practice.
            </p>
            <p className="text-lg leading-relaxed text-dark">
              This is not a consultancy that interprets medicine for engineers. We live in both worlds. We know what a clinical environment actually feels like — the workflows, the pressures, the moments where poor software costs time that belongs to patients.
            </p>
            <p className="text-lg leading-relaxed text-dark">
              Around this founding pair, we work with a carefully selected network of associate clinicians — specialist doctors who join us per engagement, bringing domain expertise matched to your specific context.
            </p>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-dark pl-6 py-2" ref={(el) => (valueRefs.current[0] = el)}>
              <p className="font-display text-2xl font-bold text-dark">
                Clinical Inside Out.
              </p>
            </div>
            <div className="border-l-4 border-dark pl-6 py-2" ref={(el) => (valueRefs.current[1] = el)}>
              <p className="font-display text-2xl font-bold text-dark">
                Privacy as Architecture.
              </p>
            </div>
            <div className="border-l-4 border-dark pl-6 py-2" ref={(el) => (valueRefs.current[2] = el)}>
              <p className="font-display text-2xl font-bold text-dark">
                Sustainable by Default.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-dark/20 pt-8">
          <p className="text-base text-muted">
            Want to know more about our team?<br />
            <a href="#" className="font-semibold text-dark hover:opacity-70 transition-opacity">
              → Meet the Associates
            </a>
            <span className="text-muted"> [link placeholder — separate page, TBD]</span>
          </p>
        </div>
      </div>
    </section>
  );
}
