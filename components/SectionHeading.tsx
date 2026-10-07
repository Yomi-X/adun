type SectionHeadingProps = {
  label: string;
  title: string;
};

export default function SectionHeading({
  label,
  title,
}: SectionHeadingProps) {
  return (
    <div>
      <p className="font-body text-xs uppercase tracking-[0.3em] text-[#C9A961]">
        {label}
      </p>

      <h2 className="mt-4 font-heading text-4xl font-medium leading-tight text-[#F5F0E8] sm:text-5xl lg:text-6xl">
        {title}
      </h2>
    </div>
  );
}