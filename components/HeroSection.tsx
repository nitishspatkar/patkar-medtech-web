"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headlineRef.current) return;

    const words = headlineRef.current.querySelectorAll(".word");
    gsap.fromTo(
      words,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative bg-cream px-4 py-20 sm:px-6 sm:py-32 lg:px-8 lg:py-48"
    >
      <div className="mx-auto max-w-6xl">
        <div className="eyebrow">Medical Digitalization — Switzerland</div>

        <h1
          ref={headlineRef}
          className="heading-display mb-8 max-w-4xl"
        >
          <span className="word inline-block">BUILD</span>
          <span className="word inline-block">SMARTER.</span>
          <br />
          <span className="word inline-block">CARE</span>
          <span className="word inline-block">BETTER.</span>
        </h1>

        <p className="mb-6 max-w-2xl text-lg text-muted leading-relaxed sm:text-xl">
          Custom digital solutions for medical practices — built by a physician
          and an engineer.
        </p>

        <p className="mb-12 max-w-3xl text-base leading-relaxed text-dark sm:text-lg">
          We are Patkar Digital Labs. We design and build software that fits the
          real-world complexity of clinical practice. No off-the-shelf systems.
          No generic solutions. Just thoughtful, private, and sustainable digital
          tools — made for your specific environment.
        </p>

        <a href="#our-approach" className="inline-flex items-center gap-2 text-lg font-semibold text-dark hover:opacity-70 transition-opacity">
          → See How We Work
        </a>

        {/* Stat bar */}
        <div className="mt-20 border-t border-dark/20 pt-12 grid gap-12 sm:grid-cols-3">
          <div>
            <div className="heading-display mb-2 text-3xl sm:text-4xl">2×</div>
            <p className="text-sm leading-relaxed text-muted">
              Time physicians spend on admin vs. patient care
              <br />
              <em className="text-xs">Annals of Internal Medicine</em>
            </p>
          </div>
          <div>
            <div className="heading-display mb-2 text-3xl sm:text-4xl">49%</div>
            <p className="text-sm leading-relaxed text-muted">
              of a physician's day spent in EHR — only 27% with patients
              <br />
              <em className="text-xs">EvidenceCare</em>
            </p>
          </div>
          <div>
            <div className="heading-display mb-2 text-3xl sm:text-4xl">⅔</div>
            <p className="text-sm leading-relaxed text-muted">
              of physicians say admin duties harm quality of care
              <br />
              <em className="text-xs">MGH Physician Survey</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
