
import Image from "next/image";

const galleryImages = [
  {
    src: "/images/gallery/gallery-01.jpg",
    alt: "ÀDÙN culinary presentation",
    category: "Culinary Artistry",
  },
  {
    src: "/images/gallery/gallery-02.jpg",
    alt: "ÀDÙN dining experience",
    category: "The Experience",
  },
  {
    src: "/images/gallery/gallery-03.jpg",
    alt: "Contemporary Nigerian cuisine",
    category: "Culinary Artistry",
  },
  {
    src: "/images/gallery/gallery-04.jpg",
    alt: "ÀDÙN restaurant atmosphere",
    category: "The Atmosphere",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#F5F0E8] px-6 pb-24 pt-36 text-[#1A1A1A] md:px-12">
      <div className="mx-auto max-w-7xl">
        <header className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#8A6A27]">
            A glimpse into ÀDÙN
          </p>

          <h1 className="font-heading text-5xl md:text-7xl">
            Moments at ÀDÙN
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#4B453D] md:text-lg">
            From the artistry of our kitchen to the warmth of our dining room,
            discover the details that make every visit special.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((item, index) => (
            <article
              key={item.src}
              className={`group ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="relative h-72 overflow-hidden bg-[#E8DFD0] sm:h-80 lg:h-96">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex items-center justify-between gap-4 border-b border-[#C9A961]/40 py-4">
                <h2 className="font-heading text-2xl">
                  {item.category}
                </h2>
                <span className="text-sm text-[#8A6A27]">
                  0{index + 1}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}