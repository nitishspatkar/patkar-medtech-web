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
      className="relative bg-cream px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        {/* Stats as primary hero content */}
        <div className="mb-20 lg:mb-32">
          <p className="mb-8 text-lg text-muted font-semibold">THE REALITY</p>
          
          <div className="grid gap-6 sm:grid-cols-3">
            <div ref={(el) => (statRefs.current[0] = el)} className="stat-card">
              <div className="heading-display mb-4 text-4xl sm:text-5xl"><span className="stat-number">120</span></div>
              <p className="text-sm font-semibold text-teal mb-2">MIN / DAY</p>
              <p className="text-base leading-relaxed text-dark">
                Swiss acute care doctors spend on documentation alone.
              </p>
            </div>
            <div ref={(el) => (statRefs.current[1] = el)} className="stat-card">
              <div className="heading-display mb-4 text-4xl sm:text-5xl"><span className="stat-number">19</span>%</div>
              <p className="text-sm font-semibold text-teal mb-2">OF WORKING TIME</p>
              <p className="text-base leading-relaxed text-dark">
                German physicians spend on administrative tasks.
              </p>
            </div>
            <div ref={(el) => (statRefs.current[2] = el)} className="stat-card">
              <div className="heading-display mb-4 text-4xl sm:text-5xl"><span className="stat-number">50</span>%</div>
              <p className="text-sm font-semibold text-teal mb-2">NON-PATIENT TIME</p>
              <p className="text-base leading-relaxed text-dark">
                of a physician's day spent on non-patient-facing activities.
              </p>
            </div>
          </div>
        </div>

        {/* Message section below */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center pt-12 border-t border-dark/10">
          <div>
            <h1 className="heading-display mb-8 max-w-3xl">
              BETTER TOOLS.<br />
              BETTER MEDICINE.
            </h1>

            <p className="mb-8 max-w-2xl text-base leading-relaxed text-dark sm:text-lg">
              The digitalization of healthcare was supposed to make practice easier. For most doctors, it made it harder. We build custom solutions that actually fit — compliant by design, built on deep clinical understanding, and shaped around the way you work.
            </p>

            <a href="#our-approach" className="btn-modern">
              → See How We Work
            </a>
          </div>

          {/* Hero illustration */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-full aspect-square bg-burgundy/5 rounded-lg border-2 border-burgundy/20 flex items-center justify-center overflow-hidden">
              <img 
                src="/images/hero-illustration.jpg" 
                alt="Healthcare digitalization illustration" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
