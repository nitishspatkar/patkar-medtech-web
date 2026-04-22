"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const statRefs = useRef<(HTMLDivElement | null)[]>([]);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    prefersReducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion.current) return;

    // Animate stat numbers with counter
    statRefs.current.forEach((stat, index) => {
      if (!stat) return;
      
      const numberEl = stat.querySelector(".stat-number");
      if (!numberEl) return;

      let obj = { value: 0 };
      const finalValue = index === 0 ? 120 : index === 1 ? 19 : 50;
      
      gsap.to(obj, {
        value: finalValue,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: stat,
          start: "top 80%",
          onUpdate() {
            if (numberEl instanceof HTMLElement) {
              numberEl.textContent = Math.round(obj.value).toString();
            }
          },
        },
      });

      gsap.from(stat, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: stat,
          start: "top 80%",
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="top"
      className="relative bg-cream px-4 py-20 sm:px-6 sm:py-32 lg:px-8 lg:py-48"
    >
      <div className="mx-auto max-w-6xl">
        <h1 className="heading-display mb-8 max-w-4xl">
          BETTER TOOLS.<br />
          BETTER MEDICINE.
        </h1>

        <p className="mb-12 max-w-3xl text-base leading-relaxed text-dark sm:text-lg">
          The digitalization of healthcare was supposed to make practice easier. For most doctors, it made it harder. We build custom solutions that actually fit — compliant by design, built on deep clinical understanding, and shaped around the way you work.
        </p>

        <a href="#our-approach" className="inline-flex items-center gap-2 text-lg font-semibold text-dark hover:opacity-70 transition-opacity">
          → See How We Work
        </a>

        {/* Stat bar */}
        <div className="mt-20 border-t border-dark/20 pt-12 grid gap-12 sm:grid-cols-3">
          <div ref={(el) => (statRefs.current[0] = el)}>
            <div className="heading-display mb-2 text-3xl sm:text-4xl"><span className="stat-number">0</span> min</div>
            <p className="text-sm leading-relaxed text-muted">
              Swiss acute care doctors spend 120 minutes every day on documentation alone — and that number is rising.
              <br />
              <em className="text-xs">FMH/gfs.bern Physician Workplace Survey 2024</em>
            </p>
          </div>
          <div ref={(el) => (statRefs.current[1] = el)}>
            <div className="heading-display mb-2 text-3xl sm:text-4xl"><span className="stat-number">0</span>%</div>
            <p className="text-sm leading-relaxed text-muted">
              of a German physician's working time is consumed by administrative tasks — not patient care.
              <br />
              <em className="text-xs">McKinsey Physician Survey</em>
            </p>
          </div>
          <div ref={(el) => (statRefs.current[2] = el)}>
            <div className="heading-display mb-2 text-3xl sm:text-4xl"><span className="stat-number">0</span>%</div>
            <p className="text-sm leading-relaxed text-muted">
              of a physician's day is spent on non-patient-facing activities.
              <br />
              <em className="text-xs">University of Illinois / multiple studies</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
