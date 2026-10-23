export default function ReservationCTA() {
  return (
    <section className="relative overflow-hidden bg-[#6B1D2A] px-6 py-28 sm:py-36">
      <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full border border-[#C9A961]/20" />
      <div className="absolute -bottom-40 -left-32 h-80 w-80 rounded-full border border-[#C9A961]/20" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="font-body text-xs uppercase tracking-[0.3em] text-[#C9A961]">
          Your Table Awaits
        </p>

        <h2 className="mt-5 font-heading text-5xl font-medium leading-tight text-[#F5F0E8] sm:text-6xl lg:text-7xl">
          Make an evening of it.
        </h2>

        <p className="mx-auto mt-7 max-w-2xl font-body text-base leading-8 text-[#F5F0E8]/70 sm:text-lg">
          Gather around the table, discover familiar flavours in unexpected
          ways, and experience Nigerian dining through a different lens.
        </p>

        <a
          href="/reservations"
          className="mt-10 inline-flex items-center justify-center rounded-full [#C9A961] px-8 py-4 font-body text-xs uppercase tracking-[0.2em] text-[#C9A961] transition-colors hover:bg-[#C9A961] hover:text-[#6B1D2A]"
        >
          Reserve Your Table
        </a>
      </div>
    </section>
  );
}