"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { LogoMark } from "./LogoMark";

const navLinks = [
  { href: "#why-digitalize", label: "Why Digitalize" },
  { href: "#our-approach", label: "Our Approach" },
  { href: "#solutions", label: "Solutions" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-shadow duration-300 ${
        scrolled
          ? "border-pdl-border bg-pdl-bg shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
          : "border-transparent bg-pdl-bg/90 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="group flex items-center gap-2.5 text-pdl-text no-underline"
        >
          <LogoMark className="h-8 w-8 shrink-0" />
          <span className="font-heading text-lg font-semibold tracking-tight">
            Patkar Digital Labs
          </span>
        </a>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-pdl-text/90 transition-colors hover:text-pdl-accent"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-lg border-2 border-pdl-accent px-4 py-2 text-sm font-semibold text-pdl-accent transition-colors hover:bg-pdl-accent hover:text-white"
          >
            Get in Touch
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-pdl-text md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-pdl-border bg-pdl-bg md:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-3 text-base font-medium text-pdl-text hover:bg-pdl-section"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 rounded-lg border-2 border-pdl-accent px-4 py-3 text-center text-sm font-semibold text-pdl-accent"
            onClick={() => setOpen(false)}
          >
            Get in Touch
          </a>
        </nav>
      </div>
    </header>
  );
}
