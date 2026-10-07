import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#1A1A1A] px-6 py-24">
      <Image
        src="/images/hero/hero.jpg"
        alt="ÀDÙN contemporary Nigerian dining"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-[#1A1A1A]/60" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-6 font-body text-sm uppercase tracking-[0.3em] text-[#C9A961]">
            ÀDÙN
          </p>

          <h1 className="font-heading text-6xl font-medium leading-[0.9] tracking-tight text-[#F5F0E8] sm:text-7xl lg:text-9xl">
            Contemporary Nigerian Dining, Reimagined.
          </h1>

          <p className="mt-8 max-w-xl font-body text-base leading-8 text-[#F5F0E8]/70 sm:text-lg">
            A refined expression of Nigerian heritage, crafted with intention,
            warmth, and a contemporary culinary spirit.
          </p>

          <a
            href="/reservations"
            className="mt-10 inline-flex items-center border border-[#C9A961] px-7 py-4 font-body text-sm uppercase tracking-[0.2em] text-[#C9A961] transition-colors hover:bg-[#C9A961] hover:text-[#1A1A1A]"
          >
            Reserve a Table
          </a>
        </div>
      </div>
    </section>
  );
}