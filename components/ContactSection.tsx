"use client";

import { type FormEvent } from "react";
import { FadeIn } from "./FadeIn";

export function ContactSection() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <section
      id="contact"
      className="border-b border-pdl-border bg-pdl-bg py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-pdl-text sm:text-4xl">
            Let&apos;s talk about your practice
          </h2>
        </FadeIn>

        <FadeIn delayMs={60} className="mt-6 max-w-3xl">
          <p className="text-lg text-pdl-muted">
            You do not need a detailed brief or a technical specification. Just
            describe your biggest challenge — we will take it from there.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <form
              action=""
              method="post"
              onSubmit={handleSubmit}
              className="space-y-5"
              noValidate
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-pdl-text"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="w-full rounded-lg border border-pdl-border bg-pdl-bg px-4 py-3 text-base text-pdl-text outline-none ring-pdl-accent/30 transition-shadow placeholder:text-pdl-muted focus:border-pdl-accent focus:ring-2"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="organisation"
                  className="mb-1.5 block text-sm font-medium text-pdl-text"
                >
                  Practice / Organisation
                </label>
                <input
                  id="organisation"
                  name="organisation"
                  type="text"
                  autoComplete="organization"
                  className="w-full rounded-lg border border-pdl-border bg-pdl-bg px-4 py-3 text-base text-pdl-text outline-none ring-pdl-accent/30 transition-shadow placeholder:text-pdl-muted focus:border-pdl-accent focus:ring-2"
                  placeholder="Clinic or hospital name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-pdl-text"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="w-full rounded-lg border border-pdl-border bg-pdl-bg px-4 py-3 text-base text-pdl-text outline-none ring-pdl-accent/30 transition-shadow placeholder:text-pdl-muted focus:border-pdl-accent focus:ring-2"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-pdl-text"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full resize-y rounded-lg border border-pdl-border bg-pdl-bg px-4 py-3 text-base text-pdl-text outline-none ring-pdl-accent/30 transition-shadow placeholder:text-pdl-muted focus:border-pdl-accent focus:ring-2"
                  placeholder="What is the main challenge you want to solve?"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-pdl-accent px-6 py-3.5 text-base font-semibold text-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-colors hover:bg-pdl-accent/90 sm:w-auto"
              >
                Send Message
              </button>
            </form>
          </FadeIn>

          <FadeIn delayMs={80}>
            <div className="rounded-xl border border-pdl-border bg-pdl-section p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)] sm:p-8">
              <div className="space-y-6 text-pdl-text">
                <p>📍 Based in Switzerland. Available across the EU.</p>
                <p>
                  📧{" "}
                  <a
                    href="mailto:hello@patkardigitallabs.com"
                    className="font-medium text-pdl-accent underline-offset-2 hover:underline"
                  >
                    hello@patkardigitallabs.com
                  </a>
                </p>
                <p className="text-sm text-pdl-muted">
                  Language note: We work in English. German support coming soon.
                </p>
                <p className="text-sm italic text-pdl-muted">
                  Your message goes directly to our founding team. No sales
                  funnel, no automated follow-up. Just a real conversation.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
