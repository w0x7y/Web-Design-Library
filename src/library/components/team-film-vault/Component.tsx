// Fonts: Instrument Serif
export default function TeamFilmVault() {
  return (
    <section
      aria-labelledby="team-film-vault-title"
      className="bg-zinc-950 text-zinc-100 font-['Instrument_Serif',ui-sans-serif,system-ui,sans-serif] antialiased"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-24">
        <div className="flex flex-wrap justify-between gap-4 border-b border-zinc-700 pb-5 text-[0.875rem] leading-[1.5] text-rose-200">
          <p>Framekeep Film Trust</p>
          <p>People / Preservation department</p>
        </div>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <header>
            <h2
              id="team-film-vault-title"
              className="mt-4 text-[2.25rem] leading-[1.1] tracking-[-0.035em] text-balance sm:text-[4.5rem] font-normal"
            >
              Keeping the next screening possible.
            </h2>
            <figure className="mt-8 flex items-end gap-5">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80"
                alt="Mira Bellamy, preservation director"
                width={400}
                height={267}
                className="h-48 w-32 object-cover grayscale"
              />
              <figcaption
                className="max-w-40 text-[1.125rem] leading-[1.4] text-zinc-400"
              >
                Mira, between two inspections. Bristol, 2026.
              </figcaption>
            </figure>
          </header>
          <div className="border-b border-zinc-700">
            <details open className="border-t border-zinc-700 py-5">
              <summary
                className="flex cursor-pointer list-none items-center justify-between gap-4 hover:text-rose-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current [&::-webkit-details-marker]:hidden"
              >
                <span>
                  <span className="block text-[1.75rem] leading-[1.2]">Mira Bellamy</span>
                  <span className="mt-2 block font-sans text-[0.75rem] leading-[1.5] text-zinc-400">Photochemical preservation</span>
                </span>
                <span aria-hidden="true" className="shrink-0 text-[1.5rem] leading-[1]">+</span>
              </summary>
              <p
                className="mt-5 max-w-md font-sans text-[0.875rem] leading-[1.8] text-zinc-300"
              >
                Mira inspects shrinkage and colour fade, then chooses a stock and temperature for each collection.
              </p>
            </details>
            <details className="border-t border-zinc-700 py-5">
              <summary
                className="flex cursor-pointer list-none items-center justify-between gap-4 hover:text-rose-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current [&::-webkit-details-marker]:hidden"
              >
                <span>
                  <span className="block text-[1.75rem] leading-[1.2]">Jules Ferreira</span>
                  <span className="mt-2 block font-sans text-[0.75rem] leading-[1.5] text-zinc-400">Digital scanning</span>
                </span>
                <span aria-hidden="true" className="shrink-0 text-[1.5rem] leading-[1]">+</span>
              </summary>
              <p
                className="mt-5 max-w-md font-sans text-[0.875rem] leading-[1.8] text-zinc-300"
              >
                Jules keeps the grain and the frame edge. Every scan is checked against the original projection print.
              </p>
            </details>
            <details className="border-t border-zinc-700 py-5">
              <summary
                className="flex cursor-pointer list-none items-center justify-between gap-4 hover:text-rose-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current [&::-webkit-details-marker]:hidden"
              >
                <span>
                  <span className="block text-[1.75rem] leading-[1.2]">Elena Wu</span>
                  <span className="mt-2 block font-sans text-[0.75rem] leading-[1.5] text-zinc-400">Cataloguing &amp; rights</span>
                </span>
                <span aria-hidden="true" className="shrink-0 text-[1.5rem] leading-[1]">+</span>
              </summary>
              <p
                className="mt-5 max-w-md font-sans text-[0.875rem] leading-[1.8] text-zinc-300"
              >
                Elena traces release histories and donor records so each film can be found, credited and screened.
              </p>
            </details>
          </div>
        </div>
      </div>
    </section>
  )
}
