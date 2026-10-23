import DishCard from "@/components/DishCard";
import SectionHeading from "@/components/SectionHeading";
import { signatureDishes } from "@/lib/menuData";

export default function MenuSection() {
  return (
    <section
      id="signature-dishes"
      className="bg-[#22201D] px-6 py-24 sm:py-32"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-14 flex flex-col gap-6 sm:mb-16 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            label="The ÀDÙN Selection"
            title="Signature Dishes"
          />

          <p className="max-w-md font-body text-sm leading-7 text-[#F5F0E8]/60">
            Nigerian flavours, thoughtfully reimagined. Every dish celebrates
            our culinary heritage with a contemporary touch.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {signatureDishes.map((dish) => (
            <DishCard key={dish.name} dish={dish} theme="dark" />
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="/menu"
            className="inline-flex border border-[#C9A961]/70 px-7 py-4 font-body text-xs uppercase tracking-[0.2em] text-[#C9A961] transition-colors hover:bg-[#C9A961] hover:text-[#1A1A1A]"
          >
            Explore Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}