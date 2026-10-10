// Fonts: Archivo (https://fonts.google.com/specimen/Archivo)
export default function FaqRailHelpdesk() {
  return (
    <section className="bg-yellow-300 font-['Archivo',ui-sans-serif,system-ui,sans-serif] text-neutral-950 antialiased">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid gap-6 border-2 border-neutral-950 p-6 md:grid-cols-[1fr_auto] md:items-end">
          <header>
            <p className="text-xs font-semibold uppercase tracking-[0.12em]">Pennant Rail / passenger information</p>
            <h2 className="mt-4 text-[2.5rem] leading-[1.1] tracking-[-0.035em] text-balance sm:text-[3.5rem]">Before you board.</h2>
            <p className="mt-5 max-w-[38rem] text-[1rem] leading-[1.7]">A few practical answers for the branch line, the morning commute and the last train home.</p>
          </header>
          <p className="border-2 border-neutral-950 p-4 text-[0.875rem] font-bold uppercase">Ticket office / 06:00–22:00</p>
        </div>
        <div className="mt-8 grid gap-0 border-2 border-neutral-950 bg-yellow-50">
          <details open className="group border-b-2 border-neutral-950 last:border-b-0">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950 [&::-webkit-details-marker]:hidden px-6">
              <span>TICKETS / Is my ticket tied to one train?</span>
              <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
            </summary>
            <div className="max-w-[65ch] px-6 pb-6 text-[0.9375rem] leading-[1.7] md:ml-[20%]">
              <p>
                A Flex ticket works on any train on the printed date. A Saver ticket is valid only
                on the departure you selected. The ticket type is printed above the journey details.
              </p>
            </div>
          </details>
          <details className="group border-b-2 border-neutral-950 last:border-b-0">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950 [&::-webkit-details-marker]:hidden px-6">
              <span>BICYCLES / Can my bike travel with me?</span>
              <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
            </summary>
            <div className="max-w-[65ch] px-6 pb-6 text-[0.9375rem] leading-[1.7] md:ml-[20%]">
              <p>
                Each train has four bike spaces. Reserve one at checkout at no charge. Folding bikes
                can travel as luggage when folded; please keep doorways clear.
              </p>
            </div>
          </details>
          <details className="group border-b-2 border-neutral-950 last:border-b-0">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950 [&::-webkit-details-marker]:hidden px-6">
              <span>ACCESS / How do I arrange boarding assistance?</span>
              <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
            </summary>
            <div className="max-w-[65ch] px-6 pb-6 text-[0.9375rem] leading-[1.7] md:ml-[20%]">
              <p>
                Our station team can meet you at the entrance and help you reach your seat. Add
                assistance when booking, or visit the ticket office at least 20 minutes before
                departure.
              </p>
            </div>
          </details>
          <details className="group border-b-2 border-neutral-950 last:border-b-0">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950 [&::-webkit-details-marker]:hidden px-6">
              <span>DISRUPTION / What if my connection is missed?</span>
              <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
            </summary>
            <div className="max-w-[65ch] px-6 pb-6 text-[0.9375rem] leading-[1.7] md:ml-[20%]">
              <p>
                Show your original ticket to the next train crew. When a Pennant delay causes a
                missed connection, you can take the next available service without buying another
                ticket.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  )
}
