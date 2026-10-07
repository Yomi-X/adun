import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";

const galleryImages = [
  {
    src: "/images/gallery/gallery-01.jpg",
    alt: "ÀDÙN dining atmosphere",
  },
  {
    src: "/images/gallery/gallery-02.jpg",
    alt: "ÀDÙN Nigerian cuisine",
  },
  {
    src: "/images/gallery/gallery-03.jpg",
    alt: "ÀDÙN restaurant interior",
  },
  {
    src: "/images/gallery/gallery-04.jpg",
    alt: "ÀDÙN dining experience",
  },
];

export default function GalleryPreview() {
  return (
    <section className="bg-[#1A1A1A] px-6 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-14 flex flex-col gap-6 sm:mb-16 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            label="Inside ÀDÙN"
            title="A taste of the atmosphere."
          />

          <a
            href="/gallery"
            className="font-body text-xs uppercase tracking-[0.2em] text-[#C9A961] transition-opacity hover:opacity-70"
          >
            View Gallery →
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden md:row-span-2">
            <Image
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>

          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={galleryImages[1].src}
              alt={galleryImages[1].alt}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={galleryImages[2].src}
                alt={galleryImages[2].alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="25vw"
              />
            </div>

            <div className="relative aspect-square overflow-hidden">
              <Image
                src={galleryImages[3].src}
                alt={galleryImages[3].alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="25vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}