import DishCard from "@/components/DishCard";
import SectionHeading from "@/components/SectionHeading";
import { fullMenu } from "@/lib/menuData";

export default function MenuPage() {
  const categories = [...new Set(fullMenu.map((dish) => dish.category))];

  return (
    <main className="min-h-screen bg-[#F5F0E8] px-6 pb-24 pt-36 text-[#1A1A1A] md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C9A961]">
            ÀDÙN
          </p>

          <h1 className="font-heading text-5xl md:text-7xl">
            The ÀDÙN Menu
          </h1>

          <p className="mt-5 text-base text-[#1A1A1A]/70 md:text-lg">
            Nigerian flavours, thoughtfully reimagined.
          </p>
        </div>

        {categories.map((category) => {
          const categoryDishes = fullMenu.filter(
            (dish) => dish.category === category
          );

          return (
            <section key={category} className="mb-20">
              <h2 className="mb-8 border-b-2 border-[#C9A961]/60 pb-4 font-heading text-3xl font-semibold text-[#1A1A1A] md:text-4xl">
                {category}
              </h2>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {categoryDishes.map((dish) => (
                  <DishCard key={dish.name} dish={dish} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}