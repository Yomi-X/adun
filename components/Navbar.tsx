"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Experience", href: "/experience" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const linkStyle =
    "gold-hover rounded-full px-3 py-3 font-body text-[11px] uppercase tracking-[0.14em] text-[#F5F0E8]/80 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#C9A961]/15 hover:text-[#E0C782] hover:shadow-[0_0_22px_rgba(201,169,97,0.4)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A961]";

  const reserveStyle =
    "inline-flex w-fit items-center justify-center rounded-full border border-[#C9A961] px-5 py-3 font-body text-[11px] uppercase tracking-[0.16em] text-[#C9A961] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#C9A961] hover:text-[#1A1A1A] hover:shadow-[0_0_28px_rgba(201,169,97,0.45)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A961]";

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-[#1A1A1A]">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-5"
      >
        <Link
          href="/"
          onClick={closeMenu}
          className="shrink-0 font-heading text-3xl font-semibold tracking-wide text-[#F5F0E8] transition-colors duration-300 hover:text-[#C9A961]"
        >
          ÀDÙN
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={linkStyle}>
              {link.label}
            </Link>
          ))}

          <Link href="/reservations" className={`ml-3 ${reserveStyle}`}>
            Reserve <span aria-hidden="true" className="ml-2">↗</span>
          </Link>
        </div>

        {/* Mobile hamburger button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C9A961]/50 text-2xl text-[#C9A961] transition-all duration-300 hover:bg-[#C9A961]/15 hover:shadow-[0_0_20px_rgba(201,169,97,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A961] md:hidden"
        >
          <span aria-hidden="true">{isMenuOpen ? "×" : "☰"}</span>
        </button>
      </nav>

      {/* Animated mobile dropdown */}
      <div
        id="mobile-navigation"
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
        className={`overflow-hidden border-t border-[#C9A961]/20 bg-[#1A1A1A] transition-[max-height,opacity,transform] duration-300 ease-out md:hidden ${
          isMenuOpen
            ? "max-h-[32rem] translate-y-0 opacity-100"
            : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile navigation"
          className="mx-auto flex max-w-7xl flex-col items-start gap-2 px-6 py-5"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              tabIndex={isMenuOpen ? 0 : -1}
              className={linkStyle}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/reservations"
            onClick={closeMenu}
            tabIndex={isMenuOpen ? 0 : -1}
            className={`mt-2 ${reserveStyle}`}
          >
            Reserve a Table <span aria-hidden="true" className="ml-2">↗</span>
          </Link>
        </nav>
      </div>

      {/* Existing decorative divider */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-4 overflow-hidden"
      >
        <svg
          viewBox="0 0 1440 16"
          preserveAspectRatio="none"
          className="h-full w-full"
          fill="none"
        >
          <path
            d="M0 0 C0 12 18 15 40 15 H1400 C1422 15 1440 12 1440 0"
            stroke="#C9A961"
            strokeOpacity="0.65"
            strokeWidth="1.2"
          />
        </svg>
      </div>
    </header>
  );
}