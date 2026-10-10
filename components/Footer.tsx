import Link from "next/link";

const footerLinks = [
  { label: "Menu", href: "/menu" },
  { label: "Experience", href: "/experience" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#1A1A1A] px-6 py-16 sm:py-20">
      {/* Top half of a pill-shaped footer divider */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-4"
      >
        <svg
          viewBox="0 0 1440 16"
          preserveAspectRatio="none"
          className="h-full w-full"
          fill="none"
        >
          <path
            d="M0 16 C0 6 18 1 40 1 H1400 C1422 1 1440 6 1440 16"
            stroke="#C9A961"
            strokeWidth="1.5"
            strokeOpacity="0.85"
          />
        </svg>
      </div>
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-12 border-b border-[#F5F0E8]/10 pb-12 md:grid-cols-[1.3fr_0.7fr_0.7fr]">
          <div>
            <p className="font-heading text-5xl text-[#F5F0E8]">ÀDÙN</p>

            <p className="mt-5 max-w-sm font-body text-sm leading-7 text-[#F5F0E8]/55">
              Contemporary Nigerian dining, reimagined with warmth,
              intention, and a distinctly Nigerian spirit.
            </p>
          </div>

          <div>
            <p className="font-body text-xs uppercase tracking-[0.2em] text-[#C9A961]">
              Explore
            </p>

            <nav className="mt-5 flex flex-col gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="gold-hover inline-block w-fit rounded-full px-3 py-2 text-[#F5F0E8]/70 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#C9A961]/15 hover:text-[#E0C782] hover:shadow-[0_0_22px_rgba(201,169,97,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A961]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="font-body text-xs uppercase tracking-[0.2em] text-[#C9A961]">
              Visit
            </p>

            <div className="mt-5 font-body text-sm leading-7 text-[#F5F0E8]/60">
              <p>
                14 Adebayo Doherty Street
                <br />
                Victoria Island, Lagos
              </p>

              <p className="mt-4">
                Monday – Sunday
                <br />
                12:00 PM – 10:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-xs text-[#F5F0E8]/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} ÀDÙN. All rights reserved.
          </p>

          <p>Contemporary Nigerian Dining, Reimagined.</p>
        </div>
      </div>
    </footer>
  );
}