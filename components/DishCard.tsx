import Image from "next/image";
import type { Dish } from "@/lib/menuData";

type DishCardProps = {
  dish: Dish;
};

export default function DishCard({ dish }: DishCardProps) {
  return (
    <article className="group">
      <div className="relative aspect-[4/5] overflow-hidden bg-[#F5F0E8]/5">
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
            <h3 className="font-heading text-2xl font-medium text-[#F5F0E8]">
              {dish.name}
            </h3>

            <p className="mt-2 max-w-sm font-body text-sm leading-6 text-[#F5F0E8]/60">
              {dish.description}
            </p>
          </div>

          <span className="shrink-0 font-body text-sm text-[#C9A961]">
            {dish.price}
          </span>
        </div>

        <p className="mt-3 font-body text-[10px] uppercase tracking-[0.25em] text-[#C9A961]/70">
          {dish.category}
        </p>
      </div>
    </article>
  );
}