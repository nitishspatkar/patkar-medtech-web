import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum — Patkar Digital Labs",
  description: "Legal disclosure (Impressum) for Patkar Digital Labs.",
};

export default function ImpressumPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-sm text-pdl-muted">
        <Link href="/" className="text-pdl-accent hover:underline">
          ← Back to home
        </Link>
      </p>
      <h1 className="font-heading mt-8 text-3xl font-bold tracking-tight text-pdl-text">
        Impressum
      </h1>
      <p className="mt-6 text-pdl-muted">
        This page is a placeholder. Legal details will be added before
        publication.
      </p>
    </div>
  );
}
