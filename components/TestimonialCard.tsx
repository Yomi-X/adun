import type { Testimonials } from '@/lib/testimonialData'

type Testimonial = {
  quote: string;
  name: string;
  detail: string;
};

type TestimonialCardProps = {
  testimonial: Testimonials;
};

export default function TestimonialCard({
  testimonial,
}: TestimonialCardProps) {
  return (
    <article className="border-t border-[#F5F0E8]/15 pt-6">
      <p className="font-heading text-2xl leading-relaxed text-[#F5F0E8] sm:text-3xl">
        “{testimonial.quote}”
      </p>

      <div className="mt-8">
        <p className="font-body text-xs uppercase tracking-[0.2em] text-[#C9A961]">
          {testimonial.name}
        </p>

        <p className="mt-2 font-body text-xs text-[#F5F0E8]/50">
          {testimonial.detail}
        </p>
      </div>
    </article>
  );
}