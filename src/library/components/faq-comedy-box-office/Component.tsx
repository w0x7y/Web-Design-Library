// Fonts: Archivo (https://fonts.google.com/specimen/Archivo)
export default function FaqComedyBoxOffice() {
  return (
    <section className="bg-yellow-300 font-['Archivo',ui-sans-serif,system-ui,sans-serif] text-neutral-950 antialiased">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid gap-6 border-2 border-neutral-950 p-6 md:grid-cols-[1fr_auto] md:items-end">
          <header>
            <p className="text-xs font-semibold uppercase tracking-[0.12em]">Punchline Cellar / box office</p>
            <h2 className="mt-4 text-[2.5rem] leading-[1.1] tracking-[-0.035em] text-balance sm:text-[3.5rem]">Before the first laugh.</h2>
            <p className="mt-5 max-w-[38rem] text-[1rem] leading-[1.7]">Tickets, seats and the small print for a night of stand-up in our downstairs room.</p>
          </header>
          <p className="border-2 border-neutral-950 p-4 text-[0.875rem] font-bold uppercase">Box office / 17:00 to 23:00</p>
        </div>
        <div className="mt-8 grid gap-0 border-2 border-neutral-950 bg-yellow-50">
          <details open className="group border-b-2 border-neutral-950 last:border-b-0">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950 [&::-webkit-details-marker]:hidden px-6">
              <span>TICKETS / Is my ticket for a particular show?</span>
              <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
            </summary>
            <div className="max-w-[65ch] px-6 pb-6 text-[0.9375rem] leading-[1.7] md:ml-[20%]">
              <p>
                Yes. Each ticket names the date and the 8pm or 10pm show. Check the time before
                paying; a ticket for the early set does not include the late one.
              </p>
            </div>
          </details>
          <details className="group border-b-2 border-neutral-950 last:border-b-0">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950 [&::-webkit-details-marker]:hidden px-6">
              <span>SEATING / Can our group sit together?</span>
              <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
            </summary>
            <div className="max-w-[65ch] px-6 pb-6 text-[0.9375rem] leading-[1.7] md:ml-[20%]">
              <p>
                Book the whole group in one order and we will seat you together. Tables hold up to
                six people. Larger groups sit at neighbouring tables; seats are allocated on
                arrival.
              </p>
            </div>
          </details>
          <details className="group border-b-2 border-neutral-950 last:border-b-0">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950 [&::-webkit-details-marker]:hidden px-6">
              <span>ACCESS / Is the performance room step-free?</span>
              <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
            </summary>
            <div className="max-w-[65ch] px-6 pb-6 text-[0.9375rem] leading-[1.7] md:ml-[20%]">
              <p>
                The cellar has twelve steps and no lift. Our monthly ground-floor show has a
                step-free entrance and an accessible toilet. Ask the box office to confirm the venue
                before booking.
              </p>
            </div>
          </details>
          <details className="group border-b-2 border-neutral-950 last:border-b-0">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950 [&::-webkit-details-marker]:hidden px-6">
              <span>ARRIVAL / What if I reach the club after the start?</span>
              <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
            </summary>
            <div className="max-w-[65ch] px-6 pb-6 text-[0.9375rem] leading-[1.7] md:ml-[20%]">
              <p>
                An usher will admit you at the next break between acts. Arrive twenty minutes before
                the show for the full opening set. We keep your booked seat until the interval.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  )
}
