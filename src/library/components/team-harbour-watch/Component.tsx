// Fonts: Fraunces
export default function TeamHarbourWatch() {
  return (
    <section
      aria-labelledby="team-harbour-watch-title"
      className="bg-amber-50 text-blue-950 font-['Fraunces',ui-sans-serif,system-ui,sans-serif] antialiased"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-24">
        <header className="grid items-center gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <p
              className="text-[0.75rem] leading-[1.5] font-semibold uppercase tracking-[0.16em] text-blue-800"
            >
              Tide Office / Harbour master
            </p>
            <h2
              id="team-harbour-watch-title"
              className="mt-4 text-[2.25rem] leading-[1.1] tracking-[-0.035em] text-balance sm:text-[3.5rem] font-normal"
            >
              Know who is on watch.
            </h2>
            <p
              className="mt-5 max-w-xl text-[1rem] leading-[1.75] text-stone-700"
            >
              Meet the harbour team who plan arrivals, assign moorings and keep the quay moving.
            </p>
          </div>
          <figure>
            <img
              src="https://images.unsplash.com/photo-1660745469414-543a641d22bf?w=1600&q=80"
              alt="Colourful wooden boats moored beside a stone harbour wall"
              width={1600}
              height={2390}
              className="aspect-[3/2] w-full object-cover"
            />
            <figcaption
              className="mt-3 text-[0.75rem] leading-[1.5] text-stone-600"
            >
              The inner harbour, before the next arrivals.
            </figcaption>
          </figure>
        </header>
        <ul role="list" className="mt-12 grid gap-10 md:grid-cols-2 md:gap-16">
          <li className="border-t border-blue-950 pt-6">
            <p className="text-[3rem] leading-[1] tracking-[-0.05em] text-blue-950 sm:text-[4rem]">DAY</p>
            <h3 className="mt-6 text-[1.75rem] leading-[34px] font-medium">Nora Bell</h3>
            <p className="mt-2 text-[0.875rem] leading-[1.5] text-blue-800">Harbour master · Day watch</p>
            <p
              className="mt-4 max-w-lg text-[1rem] leading-[1.75] text-stone-700"
            >
              Nora plans vessel arrivals and allocates visiting berths. Send your draught and arrival time before entering the harbour.
            </p>
            <a
              href="mailto:nora@example.com"
              className="mt-5 inline-flex items-center gap-2 text-[0.875rem] leading-[1.5] underline underline-offset-4 hover:text-blue-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
            >
              <span>Plan an arrival with Nora</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4 shrink-0"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </li>
          <li className="border-t border-blue-950 pt-6">
            <p className="text-[3rem] leading-[1] tracking-[-0.05em] text-blue-950 sm:text-[4rem]">NIGHT</p>
            <h3 className="mt-6 text-[1.75rem] leading-[34px] font-medium">Ivo Marin</h3>
            <p className="mt-2 text-[0.875rem] leading-[1.5] text-blue-800">Deputy harbour master · Night watch</p>
            <p
              className="mt-4 max-w-lg text-[1rem] leading-[1.75] text-stone-700"
            >
              Ivo coordinates overnight moorings and the early fishing fleet. He keeps the watch log ready for the morning handover.
            </p>
            <a
              href="mailto:ivo@example.com"
              className="mt-5 inline-flex items-center gap-2 text-[0.875rem] leading-[1.5] underline underline-offset-4 hover:text-blue-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
            >
              <span>Arrange a berth with Ivo</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4 shrink-0"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
