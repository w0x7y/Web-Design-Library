// Fonts: Instrument Serif (https://fonts.google.com/specimen/Instrument+Serif)
export default function HeroEditorialSerif() {
  return (
    <section className="bg-[#f4efe6] text-stone-950 antialiased">
      <div className="mx-auto max-w-7xl px-5 pt-5 pb-14 sm:px-8 sm:pt-8 lg:pb-20">
        <div className="flex items-center justify-between gap-4 border-y border-stone-950 py-2 text-[0.6875rem] font-medium tracking-[0.12em] uppercase">
          <span className="font-['Instrument_Serif',ui-serif,Georgia,serif] text-xl tracking-normal normal-case italic">
            Meridian
          </span>
          <span className="hidden sm:inline">The walking quarterly</span>
          <span>No. 14 · Autumn 2026</span>
        </div>

        <div className="mt-10 grid gap-12 lg:mt-14 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-14">
          <div className="lg:col-span-7">
            <h1 className="font-['Instrument_Serif',ui-serif,Georgia,serif] text-[3.5rem] leading-[0.95] tracking-[-0.02em] text-balance sm:text-7xl lg:max-w-[28rem] lg:text-8xl lg:text-wrap">
              The long way <em className="text-orange-800">up</em> is the whole point.
            </h1>
            <p className="mt-7 max-w-xl font-['Instrument_Serif',ui-serif,Georgia,serif] text-[1.375rem] leading-snug text-pretty text-stone-700 sm:text-2xl">
              Eleven writers, four mountain ranges and one stubborn mule. Our autumn issue is about routes that
              take longer than they should, and why we keep choosing them.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-5">
              <a
                href="#"
                className="group inline-flex h-12 items-center gap-3 bg-stone-950 px-6 text-sm font-medium text-[#f4efe6] transition-colors hover:bg-orange-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950"
              >
                Read the autumn issue
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="size-4 transition-transform group-hover:translate-x-1"
                >
                  <path d="M2 8h11M9 4l4 4-4 4" />
                </svg>
              </a>
              <a
                href="#"
                className="text-sm font-medium underline decoration-stone-950/30 underline-offset-[0.3em] transition-colors hover:decoration-stone-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-950"
              >
                Subscribe from €48 a year
              </a>
            </div>
          </div>

          <figure className="lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1">
            <img
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&q=80"
              alt="A lone hiker on a rocky outcrop above forested valleys, in hazy evening light"
              width={1600}
              height={1063}
              className="aspect-[4/3] w-full object-cover object-[66%_center] sm:aspect-[3/2] lg:aspect-[4/5]"
            />
            <figcaption className="mt-3 flex items-baseline gap-3 text-xs text-stone-600">
              <span className="shrink-0 font-['Instrument_Serif',ui-serif,Georgia,serif] text-base text-orange-800 italic">
                Plate I
              </span>
              <span>Late light on the ridge above the treeline, 7:48 p.m. The full story starts on page 28.</span>
            </figcaption>
          </figure>

          <div className="lg:col-span-7 lg:self-end">
            <h2 className="border-t border-stone-950 pt-3 text-[0.6875rem] font-medium tracking-[0.12em] uppercase">
              In this issue
            </h2>
            <ol role="list" className="mt-4 grid gap-5 sm:grid-cols-3 sm:gap-8">
              <li>
                <a href="#" className="group flex gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-950">
                  <span className="font-['Instrument_Serif',ui-serif,Georgia,serif] text-2xl leading-none text-orange-800 italic tabular-nums">
                    12
                  </span>
                  <span>
                    <span className="block font-['Instrument_Serif',ui-serif,Georgia,serif] text-xl leading-tight decoration-1 underline-offset-[0.2em] group-hover:underline">
                      The mule who knew the way
                    </span>
                    <span className="mt-1 block text-xs text-stone-600">Ana Ferrer</span>
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="group flex gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-950">
                  <span className="font-['Instrument_Serif',ui-serif,Georgia,serif] text-2xl leading-none text-orange-800 italic tabular-nums">
                    28
                  </span>
                  <span>
                    <span className="block font-['Instrument_Serif',ui-serif,Georgia,serif] text-xl leading-tight decoration-1 underline-offset-[0.2em] group-hover:underline">
                      A hut at 2,700 metres
                    </span>
                    <span className="mt-1 block text-xs text-stone-600">Jonas Weil</span>
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="group flex gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-950">
                  <span className="font-['Instrument_Serif',ui-serif,Georgia,serif] text-2xl leading-none text-orange-800 italic tabular-nums">
                    46
                  </span>
                  <span>
                    <span className="block font-['Instrument_Serif',ui-serif,Georgia,serif] text-xl leading-tight decoration-1 underline-offset-[0.2em] group-hover:underline">
                      What the fog keeps
                    </span>
                    <span className="mt-1 block text-xs text-stone-600">Mira Sato</span>
                  </span>
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
