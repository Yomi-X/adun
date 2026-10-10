
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";

const values = [
  {
    number: "01",
    title: "Heritage",
    description:
      "We celebrate the ingredients, flavours, and traditions that make Nigerian cuisine distinctive.",
  },
  {
    number: "02",
    title: "Craft",
    description:
      "We approach every dish and every detail with care, creativity, and intention.",
  },
  {
    number: "03",
    title: "Hospitality",
    description:
      "We believe great dining is about more than food. It is about making people feel welcome.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#1A1A1A] text-[#F5F0E8]">
      <section className="px-6 pb-20 pt-36 md:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="About ÀDÙN"
            title="A contemporary expression of Nigerian hospitality."
          />

          <div className="mt-16 grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <div className="relative min-h-[320px] overflow-hidden md:min-h-[480px]">
              <Image
                src="/images/experience/experience-01.jpg"
                alt="The ÀDÙN dining experience"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="space-y-6 font-body text-base leading-8 text-[#F5F0E8]/75">
              <p>
                ÀDÙN was imagined as a place where Nigerian culinary heritage
                could meet contemporary technique, thoughtful design, and warm
                hospitality.
              </p>

              <p>
                Our philosophy is simple: honour where we come from while
                creating something that feels fresh, expressive, and entirely
                of its time.
              </p>

              <p>
                Every detail, from the plate to the room, is considered with
                intention.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F0E8] px-6 py-24 text-[#1A1A1A] md:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="What guides us"
            title="Rooted in heritage. Driven by craft."
          />

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.number}
                className="border-t border-[#C9A961]/60 pt-6"
              >
                <p className="text-sm tracking-widest text-[#8A6A27]">
                  {value.number}
                </p>

                <h3 className="mt-4 font-heading text-3xl">
                  {value.title}
                </h3>

                <p className="mt-4 leading-7 text-[#4B453D]">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}