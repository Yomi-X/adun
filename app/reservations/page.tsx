import ReservationForm from "@/components/ReservationForm";

export default function ReservationsPage() {
  return (
    <main className="min-h-screen bg-[#1A1A1A] px-6 py-32 text-[#F5F0E8]">
      <div className="mx-auto max-w-3xl">
        <p className="font-body text-xs uppercase tracking-[0.3em] text-[#C9A961]">
          Reservations
        </p>

        <h1 className="mt-4 font-heading text-5xl sm:text-6xl">
          Reserve your table.
        </h1>

        <p className="mt-6 font-body leading-8 text-[#F5F0E8]/60">
          Join us for an evening of contemporary Nigerian dining,
          thoughtful hospitality, and memorable moments.
        </p>
        <ReservationForm />
      </div>
    </main>
  );
}