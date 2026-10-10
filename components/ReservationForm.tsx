"use client";

import { useEffect, useState } from "react";

export default function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    setMinDate(`${year}-${month}-${day}`);
  }, []);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  
  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-2xl border border-[#C9A961]/40 p-8 text-center"
      >
        <h2 className="font-heading text-3xl text-[#F5F0E8]">
          Thank you.
        </h2>

        <p className="mt-4 font-body text-sm leading-7 text-[#F5F0E8]/70">
          This is a demonstration only. Your details have not been sent
          to a restaurant, and no reservation has been made or confirmed.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-6"
    >
      <div>
        <label
          htmlFor="name"
          className="font-body text-xs uppercase tracking-[0.2em] text-[#C9A961]"
        >
          Name
        </label>

        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-3 w-full border-b border-[#F5F0E8]/20 bg-transparent px-0 py-3 font-body text-[#F5F0E8] outline-none focus:border-[#C9A961]"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="font-body text-xs uppercase tracking-[0.2em] text-[#C9A961]"
        >
          Email
        </label>

        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-3 w-full border-b border-[#F5F0E8]/20 bg-transparent px-0 py-3 font-body text-[#F5F0E8] outline-none focus:border-[#C9A961]"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="date"
            className="font-body text-xs uppercase tracking-[0.2em] text-[#C9A961]"
          >
            Date
          </label>

          <input
            id="date"
            name="date"
            type="date"
            min={minDate}
            required
            className="mt-3 w-full border-b border-[#F5F0E8]/20 bg-transparent px-0 py-3 font-body text-[#F5F0E8] outline-none focus:border-[#C9A961]"
          />
        </div>

        <div>
          <label
            htmlFor="guests"
            className="font-body text-xs uppercase tracking-[0.2em] text-[#C9A961]"
          >
            Guests
          </label>

          <select
            id="guests"
            name="guests"
            required
            className="mt-3 w-full border-b border-[#F5F0E8]/20 bg-[#1A1A1A] px-0 py-3 font-body text-[#F5F0E8] outline-none focus:border-[#C9A961]"
          >
            <option value="">Select</option>
            <option value="1">1 guest</option>
            <option value="2">2 guests</option>
            <option value="3">3 guests</option>
            <option value="4">4 guests</option>
            <option value="5">5 guests</option>
            <option value="6">6 guests</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="requests"
          className="font-body text-xs uppercase tracking-[0.2em] text-[#C9A961]"
        >
          Special Requests
        </label>

        <textarea
          id="requests"
          name="requests"
          rows={4}
          className="mt-3 w-full resize-none border-b border-[#F5F0E8]/20 bg-transparent px-0 py-3 font-body text-[#F5F0E8] outline-none focus:border-[#C9A961]"
        />
      </div>

      <button
        type="submit"
        className="gold-hover mt-4 rounded-full border border-[#C9A961] px-7 py-4 font-body text-xs uppercase tracking-[0.2em] text-[#C9A961] transition-all duration-300 hover:-translate-y-1 hover:bg-[#C9A961] hover:text-[#1A1A1A] hover:shadow-[0_0_25px_5px_rgba(201,169,97,0.45)]"
      >
        Request Reservation
      </button> 
    </form>
  );
}