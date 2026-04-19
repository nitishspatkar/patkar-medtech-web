"use client";

import { FadeIn } from "./FadeIn";

const considerations = [
  {
    question: "Can it save time?",
    answer: "Maybe. But only if the problem is actually about processing speed, not clinical judgment. We're honest about this.",
  },
  {
    question: "Can it reduce errors?",
    answer: "Yes — but only at specific decision points. And only when humans stay in the loop. AI that replaces judgment is dangerous.",
  },
  {
    question: "Can it improve care?",
    answer: "When it's built for the right problem, yes. Most AI in healthcare is built for investor decks, not for you.",
  },
];

export function AIConsiderations() {
  return (
    <section
      id="ai-considerations"
      className="border-b border-pdl-border bg-pdl-bg py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-pdl-text sm:text-4xl">
            Do you need AI? <span className="text-pdl-muted">Actually?</span>
          </h2>
        </FadeIn>

        <FadeIn delayMs={60} className="mt-6 max-w-3xl">
          <p className="text-lg text-pdl-muted">
            Everyone's adding AI because everyone else is. We ask different questions first.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {considerations.map(({ question, answer }, i) => (
            <FadeIn key={question} delayMs={i * 80}>
              <div className="flex h-full flex-col rounded-lg border border-pdl-border bg-pdl-highlight p-6 shadow-lg shadow-pdl-accent/5">
                <h3 className="font-heading text-lg font-semibold text-pdl-accent">
                  {question}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-pdl-text">
                  {answer}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delayMs={120} className="mt-12">
          <div className="rounded-lg bg-gradient-to-br from-pdl-accent/5 to-pdl-accent-2/5 border border-pdl-border p-8 shadow-lg shadow-pdl-accent/5 sm:p-10">
            <p className="text-lg text-pdl-text leading-relaxed">
              We evaluate AI the same way we evaluate every technology: Does it solve a real problem? Does it improve outcomes? Is it worth the complexity? If the answer isn't clearly yes to all three, we don't use it. Your practice is complex enough already.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
