import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";

export default function Experience() {
  return (
    <section className="bg-[#1A1A1A] px-6 py-24 sm:py-32">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src="/images/experience/experience-01.jpg"
            alt="ÀDÙN dining experience"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
        </div>

        <div className="max-w-xl lg:pl-8">
          <SectionHeading
            label="The Experience"
            title="More than a meal. A moment to remember."
          />

          <p className="mt-8 font-body text-base leading-8 text-[#F5F0E8]/70">
            From the first welcome to the final course, every detail at ÀDÙN
            is considered. Warm hospitality, thoughtful design, and expressive
            Nigerian cuisine come together to create an experience that feels
            both familiar and entirely new.
          </p>

          <p className="mt-5 font-body text-base leading-8 text-[#F5F0E8]/70">
            Come for the flavours. Stay for the atmosphere. Leave with a story
            worth telling.
          </p>

          <a
            href="/experience"
            className="mt-10 inline-flex items-center border-b border-[#C9A961] pb-2 font-body text-xs uppercase tracking-[0.2em] text-[#C9A961] transition-opacity hover:opacity-70"
          >
            Discover the Experience
          </a>
        </div>
      </div>
    </section>
  );
}