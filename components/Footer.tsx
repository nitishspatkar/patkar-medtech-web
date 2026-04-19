import Link from "next/link";
import { LogoMark } from "./LogoMark";

function LinkedInGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-pdl-border bg-pdl-section">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
          <a href="#top" className="flex items-center gap-2.5 no-underline transition-opacity hover:opacity-80">
            <LogoMark className="h-8 w-8 shrink-0" />
            <span className="font-heading text-lg font-semibold tracking-tight text-pdl-text">
              Patkar Digital Labs
            </span>
          </a>
          <p className="text-sm text-pdl-muted">
            © 2025 Patkar Digital Labs. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <nav className="flex flex-wrap items-center gap-4 text-sm" aria-label="Legal">
            <Link
              href="/privacy"
              className="text-pdl-muted transition-colors hover:text-pdl-accent"
            >
              Privacy Policy
            </Link>
            <span className="text-pdl-border" aria-hidden>
              ·
            </span>
            <Link
              href="/impressum"
              className="text-pdl-muted transition-colors hover:text-pdl-accent"
            >
              Impressum
            </Link>
          </nav>
          <a
            href="https://www.linkedin.com/company/patkar-digital-labs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pdl-muted transition-colors hover:text-pdl-accent"
            aria-label="Patkar Digital Labs on LinkedIn"
          >
            <LinkedInGlyph className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
