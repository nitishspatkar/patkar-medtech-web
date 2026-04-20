export function Footer() {
  return (
    <footer className="bg-burgundy text-cream px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="text-lg font-bold">
            Patkar Medtech
          </div>

          <p className="text-sm text-cream/60">
            © 2025 Patkar Medtech. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <a href="#" className="text-cream/70 hover:text-cream transition-colors">
              Privacy Policy
            </a>
            <span className="text-cream/30">·</span>
            <a href="#" className="text-cream/70 hover:text-cream transition-colors">
              Impressum
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
