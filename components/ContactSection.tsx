"use client";

import { type FormEvent } from "react";

export function ContactSection() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <section
      id="contact"
      className="relative bg-cream px-4 py-20 sm:px-6 sm:py-32 lg:px-8 lg:py-48"
    >
      <div className="mx-auto max-w-6xl">
        <div className="eyebrow">Contact</div>

        <h2 className="heading-display mb-16 max-w-3xl">
          SCHEDULE A<br />
          CONSULTATION
        </h2>

        {/* Email as hero */}
        <div className="mb-16">
          <a
            href="mailto:hello@patkarmedtech.ch"
            className="inline-block font-display text-4xl sm:text-5xl font-bold text-dark hover:opacity-70 transition-opacity break-words"
          >
            hello@patkarmedtech.ch
          </a>
        </div>

        {/* Contact form */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 max-w-3xl">
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
                className="mb-1.5 block text-sm font-semibold uppercase letter-spacing-wider text-muted"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                className="w-full border-b border-dark/20 bg-transparent px-0 py-3 text-base text-dark outline-none placeholder:text-muted transition-colors focus:border-dark/40"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="organisation"
                className="mb-1.5 block text-sm font-semibold uppercase letter-spacing-wider text-muted"
              >
                Practice / Organisation
              </label>
              <input
                id="organisation"
                name="organisation"
                type="text"
                autoComplete="organization"
                className="w-full border-b border-dark/20 bg-transparent px-0 py-3 text-base text-dark outline-none placeholder:text-muted transition-colors focus:border-dark/40"
                placeholder="Clinic or hospital name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-semibold uppercase letter-spacing-wider text-muted"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="w-full border-b border-dark/20 bg-transparent px-0 py-3 text-base text-dark outline-none placeholder:text-muted transition-colors focus:border-dark/40"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-semibold uppercase letter-spacing-wider text-muted"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full border-b border-dark/20 bg-transparent px-0 py-3 text-base text-dark outline-none placeholder:text-muted transition-colors focus:border-dark/40 resize-none"
                placeholder="What's your challenge?"
              />
            </div>
            <div className="pt-4">
              <button
                type="submit"
                className="px-6 py-3 bg-dark text-cream font-semibold text-sm hover:opacity-80 transition-opacity"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Info box */}
          <div>
            <p className="text-base leading-relaxed text-dark mb-12">
              You do not need to know exactly what you need. Most of the practices we work with came to us with a frustration, not a specification. Describe your situation — we will ask the right questions.
            </p>
            <p className="text-sm text-muted">
              Your message goes directly to our founding team. No sales funnel. No automated follow-up. Just a real conversation.
              <br /><br />
              Based in Switzerland. Available across the EU.
              <br />
              We work in English. German support coming soon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
