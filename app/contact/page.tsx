
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F5F0E8] px-6 py-32 text-[#1A1A1A] md:px-12">
      <div className="mx-auto grid w-full max-w-7xl items-start gap-16 lg:grid-cols-2 lg:gap-20">
        <div className="pt-4">
          <SectionHeading
            label="Contact ÀDÙN"
            title="We'd love to hear from you."
          />

          <p className="mt-8 max-w-lg font-body text-base leading-8 text-[#4B453D]">
            Whether you're planning a special evening, asking about our menu,
            or simply want to say hello, our team is here to help.
          </p>

          <div className="mt-10">
            <p className="font-heading text-2xl italic text-[#6B1D2A]">
              Good food. Meaningful moments.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] bg-[#1A1A1A] px-7 py-4 text-[#F5F0E8] md:px-10">
          <div className="border-b border-white/15 py-7">
            <p className="text-xs uppercase tracking-[0.25em] text-[#C9A961]">
              Visit
            </p>

            <p className="mt-4 text-base leading-8">
              14 Adebayo Doherty Street
              <br />
              Victoria Island, Lagos
            </p>
          </div>

          <div className="border-b border-white/15 py-7">
            <p className="text-xs uppercase tracking-[0.25em] text-[#C9A961]">
              Opening Hours
            </p>

            <div className="mt-4 space-y-2 text-sm leading-7 text-[#F5F0E8]/80">
              <p>
                <span className="text-[#F5F0E8]">Monday – Thursday</span>
                <br />
                12:00 PM – 10:00 PM
              </p>

              <p>
                <span className="text-[#F5F0E8]">Friday – Saturday</span>
                <br />
                12:00 PM – 11:30 PM
              </p>

              <p>
                <span className="text-[#F5F0E8]">Sunday</span>
                <br />
                1:00 PM – 9:00 PM
              </p>
            </div>
          </div>

          <div className="py-7">
            <p className="text-xs uppercase tracking-[0.25em] text-[#C9A961]">
              Reservations
            </p>

            <p className="mt-3 text-sm leading-7 text-[#F5F0E8]/80">
              Planning your next dining experience? We'd be delighted to
              welcome you.
            </p>

            <Link
              href="/reservations"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#C9A961] px-6 py-3 text-sm font-medium text-[#1A1A1A] transition-colors hover:bg-[#E0C782]"
            >
              Reserve a Table
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}