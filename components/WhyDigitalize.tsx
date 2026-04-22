"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function WhyDigitalize() {
  const headlineRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<(HTMLDivElement | null)[]>([]);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion.current) return;

    // Animate eyebrow
    if (eyebrowRef.current) {
      gsap.from(eyebrowRef.current, {
        opacity: 0,
        y: 10,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: eyebrowRef.current,
          start: "top 80%",
        },
      });
    }

    // Animate headline
    if (headlineRef.current) {
      gsap.from(headlineRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headlineRef.current,
          start: "top 80%",
        },
      });
    }

    // Animate body text
    if (bodyRef.current) {
      gsap.from(bodyRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: bodyRef.current,
          start: "top 80%",
        },
      });
    }

    // Animate benefits with stagger
    const visibleBenefits = benefitsRef.current.filter(Boolean);
    if (visibleBenefits.length > 0) {
      gsap.from(visibleBenefits, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: visibleBenefits[0],
          start: "top 75%",
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  const benefits = [
    "Recover time lost to redundant documentation",
    "Replace fragmented systems with coherent workflows",
    "Reduce cognitive load during consultations",
    "Eliminate preventable scheduling and medication errors",
    "Make data work for you — not the other way around",
  ];

  return (
    <section
      id="why-digitalize"
      className="relative bg-burgundy px-4 py-20 sm:px-6 sm:py-32 lg:px-8 lg:py-48 text-cream"
    >
      <div className="mx-auto max-w-6xl">
        <div className="eyebrow text-cream/60" ref={eyebrowRef}>The Problem</div>

        <h2 className="heading-display mb-8 max-w-3xl" ref={headlineRef}>
          THE TOOLS SHOULD<br />
          WORK FOR YOU.
        </h2>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-2xl" ref={bodyRef}>
            <p className="mb-6 text-lg leading-relaxed">
              You chose medicine because of patients — not systems. Healthcare IT that was built for billing and compliance, not for clinical work. The result is systems that demand adaptation from doctors rather than offering it.
            </p>
            <p className="text-lg leading-relaxed">
              These are engineering problems. And engineering problems have solutions.
            </p>
          </div>

          <div className="space-y-4">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                ref={(el) => (benefitsRef.current[i] = el)}
                className="flex gap-4 items-start pb-4 border-b border-cream/20 last:border-0"
              >
                <div className="font-display text-2xl font-bold shrink-0 text-cream/60">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="text-base leading-relaxed pt-1">{benefit}</p>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}
