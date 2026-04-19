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
            Ready to rethink your workflows?
          </h2>
        </FadeIn>

        <FadeIn delayMs={60} className="mt-6 max-w-3xl">
          <p className="text-lg text-pdl-muted">
            You don&apos;t need a 50-page requirements document. Tell us your biggest friction point — we&apos;ll handle the rest.
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
                  className="w-full rounded-lg border border-pdl-border bg-pdl-highlight/20 px-4 py-3 text-base text-pdl-text outline-none ring-pdl-accent/30 transition-shadow placeholder:text-pdl-muted focus:border-pdl-accent focus:ring-2"
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
                  className="w-full rounded-lg border border-pdl-border bg-pdl-highlight/20 px-4 py-3 text-base text-pdl-text outline-none ring-pdl-accent/30 transition-shadow placeholder:text-pdl-muted focus:border-pdl-accent focus:ring-2"
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
                  className="w-full rounded-lg border border-pdl-border bg-pdl-highlight/20 px-4 py-3 text-base text-pdl-text outline-none ring-pdl-accent/30 transition-shadow placeholder:text-pdl-muted focus:border-pdl-accent focus:ring-2"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-pdl-text"
                >
                  Your Challenge
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full resize-y rounded-lg border border-pdl-border bg-pdl-highlight/20 px-4 py-3 text-base text-pdl-text outline-none ring-pdl-accent/30 transition-shadow placeholder:text-pdl-muted focus:border-pdl-accent focus:ring-2"
                  placeholder="What's the main problem you want to solve?"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-gradient-to-r from-pdl-accent to-pdl-accent-2 px-6 py-3.5 text-base font-semibold text-pdl-bg shadow-lg shadow-pdl-accent/20 transition-all hover:shadow-xl hover:shadow-pdl-accent/30 sm:w-auto"
              >
                Send Message
              </button>
            </form>
          </FadeIn>

          <FadeIn delayMs={80}>
            <div className="rounded-lg border border-pdl-accent/30 bg-pdl-highlight/50 p-6 shadow-lg shadow-pdl-accent/10 backdrop-blur-sm sm:p-8">
              <div className="space-y-6 text-pdl-text">
                <div>
                  <p className="font-semibold">📍 Where we are</p>
                  <p className="mt-1 text-sm text-pdl-muted">Switzerland-based. EU-wide service.</p>
                </div>
                <div>
                  <p className="font-semibold">📧 Direct contact</p>
                  <p className="mt-1">
                    <a
                      href="mailto:hello@patkardigitallabs.com"
                      className="text-pdl-accent underline-offset-2 hover:underline"
                    >
                      hello@patkardigitallabs.com
                    </a>
                  </p>
                </div>
                <div>
                  <p className="font-semibold">🗣️ Language</p>
                  <p className="mt-1 text-sm text-pdl-muted">English. German support available upon request.</p>
                </div>
                <hr className="border-pdl-border" />
                <p className="text-sm italic text-pdl-muted">
                  Your message reaches our founding team directly — no gatekeepers, no form queues. Just a conversation.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
