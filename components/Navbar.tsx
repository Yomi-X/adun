const links = [
  { label: "Menu", href: "/menu" },
  { label: "Experience", href: "/experience" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6">
        <a
          href="/"
          className="font-heading text-3xl font-semibold tracking-wide text-[#F5F0E8]"
        >
          ÀDÙN
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-xs uppercase tracking-[0.18em] text-[#F5F0E8]/80 transition-colors hover:text-[#C9A961]"
            >
              {link.label}
            </a>
          ))}

          <a
            href="/reservations"
            className="border border-[#C9A961] px-5 py-3 font-body text-xs uppercase tracking-[0.18em] text-[#C9A961] transition-colors hover:bg-[#C9A961] hover:text-[#1A1A1A]"
          >
            Reserve
          </a>
        </div>
      </nav>
    </header>
  );
}