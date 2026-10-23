
import Image from "next/image";
import type { Dish } from "@/lib/menuData";

type DishCardProps = {
  dish: Dish;
  theme?: "light" | "dark";
};

export default function DishCard({
  dish,
  theme = "light",
}: DishCardProps) {
  const isDark = theme === "dark";

  return (
    <article className="group">
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-[#C9A961]/25 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>

      <div className="mt-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3
              className={`font-heading text-2xl font-medium ${
                isDark ? "text-[#F5F0E8]" : "text-[#1A1A1A]"
              }`}
            >
              {dish.name}
            </h3>

            <p
              className={`mt-2 max-w-sm font-body text-sm leading-6 ${
                isDark
                  ? "text-[#F5F0E8]/75"
                  : "text-[#4B453D]/60"
              }`}
            >
              {dish.description}
            </p>
          </div>

          <span
            className={`shrink-0 font-semibold ${
              isDark ? "text-[#C9A961]" : "text-[#8A6A27]"
            }`}
          >
            {dish.price}
          </span>
        </div>

        <p
          className={`mt-3 font-body text-[10px] uppercase tracking-[0.25em] ${
            isDark ? "text-[#C9A961]" : "text-[#8A6A27]/70"
          }`}
        >
          {dish.category}
        </p>
      </div>
    </article>
  );
}