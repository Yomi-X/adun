import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";

export default function Story() {
  return (
    <section className="bg-[#1A1A1A] px-6 py-24 sm:py-32">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src="/images/experience/experience-01.jpg"
            alt="ÀDÙN dining experience"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 55vw, 100vw"
          />
        </div>

        <div className="max-w-xl">
          <SectionHeading
            label="Our Story"
            title="Rooted in heritage. Reimagined for today."
          />

          <p className="mt-8 font-body text-base leading-8 text-[#F5F0E8]/70">
            ÀDÙN celebrates the depth, warmth, and creativity of Nigerian
            cuisine through a contemporary lens. Our approach is rooted in
            familiar flavours, thoughtful technique, and the stories that
            connect food to memory, place, and people.
          </p>

          <p className="mt-5 font-body text-base leading-8 text-[#F5F0E8]/70">
            Every plate is an invitation to experience something recognisable
            in a new way — refined without losing its soul.
          </p>
        </div>
      </div>
    </section>
  );
}