export function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-cream px-4 py-20 sm:px-6 sm:py-32 lg:px-8 lg:py-48"
    >
      <div className="mx-auto max-w-6xl">
        <div className="eyebrow">About Us</div>

        <h2 className="heading-display mb-12 max-w-3xl">
          WHO WE ARE AND<br />
          HOW WE CAN HELP
        </h2>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 mb-16">
          <div className="max-w-2xl space-y-6">
            <p className="text-lg leading-relaxed text-dark">
              Patkar Digital Labs was founded by a practising physician and a PhD
              computer scientist. This is a rare combination — and it is our core
              advantage. We do not translate between medicine and engineering.
              We speak both languages natively.
            </p>
            <p className="text-lg leading-relaxed text-dark">
              Around this founding pair, we work with a carefully selected network
              of associate clinicians — specialist doctors who join us on a
              per-engagement basis, bringing domain expertise matched to your
              specific environment. Whether your context is general practice,
              surgical care, geriatrics, or beyond, we bring the right clinical
              knowledge to the table.
            </p>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-dark pl-6 py-2">
              <p className="font-display text-2xl font-bold text-dark">
                Clinical Inside Out.
              </p>
            </div>
            <div className="border-l-4 border-dark pl-6 py-2">
              <p className="font-display text-2xl font-bold text-dark">
                Privacy as Architecture.
              </p>
            </div>
            <div className="border-l-4 border-dark pl-6 py-2">
              <p className="font-display text-2xl font-bold text-dark">
                Sustainable by Default.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-dark/20 pt-8">
          <p className="text-base text-muted">
            Want to know more about our team?<br />
            <a href="#" className="font-semibold text-dark hover:opacity-70 transition-opacity">
              → Meet the Associates
            </a>
            <span className="text-muted"> [link placeholder — separate page, TBD]</span>
          </p>
        </div>
      </div>
    </section>
  );
}
