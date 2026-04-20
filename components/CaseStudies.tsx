"use client";

import { useState } from "react";

const caseStudies = [
  {
    number: "01",
    category: "Medical Devices",
    title: "Digital Infrastructure for Medical Implants",
    body: "End-to-end digital interfaces and infrastructure for connected medical implants. Real-time monitoring, data logging, and clinical decision support — built to meet strict regulatory standards. [PLACEHOLDER: client name, outcome metrics]",
  },
  {
    number: "02",
    category: "Elderly Care",
    title: "Medication Assistant",
    body: "An intelligent medication management system for elderly patients and their caregivers. Reduces missed doses, flags adverse interactions, and lowers hospital readmission rates. [PLACEHOLDER: client name, outcome metrics]",
  },
  {
    number: "03",
    category: "Clinical Operations",
    title: "Roster & Scheduling Optimisation",
    body: "Smart staff scheduling that eliminates coordination overhead for clinical leads — freeing time and mental energy for patient outcomes, not spreadsheets. [PLACEHOLDER: client name, outcome metrics]",
  },
];

export function CaseStudies() {
  const [openIndex, setOpenIndex] = useState(0);

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
              className="border-b border-cream/20 py-6 sm:py-8"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-start justify-between gap-4 text-left transition-opacity hover:opacity-70"
                aria-expanded={openIndex === i}
                aria-controls={`case-${i}`}
              >
                <div className="flex items-start gap-6 flex-1 min-w-0">
                  <span className="font-display text-2xl font-bold text-cream/60 shrink-0 pt-1">
                    {study.number}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-cream/60 uppercase letter-spacing-wider mb-1">
                      {study.category}
                    </p>
                    <h3 className="font-display text-xl font-bold text-cream sm:text-2xl leading-tight">
                      {study.title}
                    </h3>
                  </div>
                </div>
                <span className="text-2xl font-light text-cream shrink-0 pt-1">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>

              {openIndex === i && (
                <div id={`case-${i}`} className="mt-6 ml-12 max-w-3xl">
                  <p className="text-base leading-relaxed text-cream">
                    {study.body}
                  </p>
                </div>
              )}
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
