const hours = [
  { day: "Monday – Thursday", time: "12:00 PM – 10:00 PM" },
  { day: "Friday – Saturday", time: "12:00 PM – 11:30 PM" },
  { day: "Sunday", time: "1:00 PM – 9:00 PM" },
];

export default function LocationHours() {
  return (
    <section className="bg-[#F5F0E8] px-6 py-24 text-[#1A1A1A] sm:py-32">
      <div className="mx-auto grid w-full max-w-7xl gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
        <div>
          <p className="font-body text-xs uppercase tracking-[0.3em] text-[#6B1D2A]">
            Find Us
          </p>

          <h2 className="mt-4 font-heading text-5xl font-medium leading-tight sm:text-6xl">
            Come gather around our table.
          </h2>

          <p className="mt-8 max-w-lg font-body text-base leading-8 text-[#1A1A1A]/65">
            Located in the heart of Victoria Island, ÀDÙN brings contemporary
            Nigerian dining to an intimate setting designed for long lunches,
            memorable dinners, and everything in between.
          </p>

          <div className="mt-10">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-[#6B1D2A]">
              Address
            </p>

            <p className="mt-3 font-body text-sm leading-7">
              14 Adebayo Doherty Street
              <br />
              Victoria Island, Lagos
            </p>
          </div>
        </div>

        <div className="lg:pt-2">
          <div className="border-t border-[#1A1A1A]/15">
            <div className="py-6">
              <p className="font-body text-xs uppercase tracking-[0.2em] text-[#6B1D2A]">
                Opening Hours
              </p>
            </div>

            {hours.map((item) => (
              <div
                key={item.day}
                className="flex items-center justify-between gap-6 border-t border-[#1A1A1A]/10 py-5 font-body text-sm"
              >
                <span>{item.day}</span>
                <span className="text-right text-[#1A1A1A]/60">
                  {item.time}
                </span>
              </div>
            ))}
          </div>

          <a
            href="/contact"
            className="mt-10 inline-flex border border-[#1A1A1A] px-7 py-4 font-body text-xs uppercase tracking-[0.2em] transition-colors hover:bg-[#1A1A1A] hover:text-[#F5F0E8]"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}