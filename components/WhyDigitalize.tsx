"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function WhyDigitalize() {
  const containerRef = useRef<HTMLDivElement>(null);
  const benefitRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    benefitRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          delay: i * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            once: true,
          },
        }
      );
    });
  }, []);

  const benefits = [
    "See more patients without longer hours",
    "Cut documentation time with smarter workflows",
    "Eliminate preventable scheduling errors",
    "Reduce medication mistakes automatically",
    "Make decisions backed by real-time data",
  ];

  return (
    <section
      id="why-digitalize"
      ref={containerRef}
      className="relative bg-burgundy px-4 py-20 sm:px-6 sm:py-32 lg:px-8 lg:py-48 text-cream"
    >
      <div className="mx-auto max-w-6xl">
        <div className="eyebrow text-cream/60">The Problem</div>

        <h2 className="heading-display mb-8 max-w-3xl">
          YOU WENT INTO<br />
          MEDICINE TO CARE<br />
          FOR PEOPLE.
        </h2>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-2xl">
            <p className="mb-6 text-lg leading-relaxed">
              But somewhere along the way, the paperwork took over. Administrative
              overload, scheduling friction, disconnected data, medication tracking
              — these are not inevitable parts of practice. They are solvable problems.
            </p>
            <p className="text-lg leading-relaxed">
              And the cost is not just frustration. It is burnout. Missed diagnoses.
              Rushed consultations. Energy spent on the wrong things.
            </p>
          </div>

          <div className="space-y-4">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                ref={(el) => {
                  benefitRefs.current[i] = el;
                }}
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

        <div className="mt-12 border-t border-cream/20 pt-12">
          <p className="text-2xl font-bold leading-tight">
            Digitalization is not a disruption.<br />
            It is the restoration of what<br />
            medicine should feel like.
          </p>
        </div>
      </div>
    </section>
  );
}
