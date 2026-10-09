// Fonts: Bagel Fat One, Gabarito (https://fonts.google.com/specimen/Bagel+Fat+One)
export default function CtaBannerGradient() {
  return (
    <section className="bg-orange-50 px-4 py-16 font-['Gabarito',ui-sans-serif,system-ui,sans-serif] text-violet-950 antialiased sm:px-6 sm:py-24">
      <div className="relative isolate mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-linear-to-br from-amber-300 via-orange-300 to-pink-400 px-6 py-12 sm:rounded-[2.5rem] sm:px-12 sm:py-16 lg:grid lg:grid-cols-12 lg:items-center lg:gap-8 lg:p-16">
        <div aria-hidden="true" className="absolute -top-24 -right-32 -z-10 size-72 rounded-full bg-yellow-200/60 sm:-top-40 sm:size-[30rem] lg:-top-48 lg:-right-40 lg:size-[34rem]" />

        <div className="lg:col-span-7">
          <h2 className="font-['Bagel_Fat_One',ui-sans-serif,system-ui,sans-serif] text-[2.75rem] leading-[0.98] text-balance sm:text-6xl lg:text-7xl">
            Plan the trip, not the <span className="inline-block -rotate-2 rounded-full bg-white px-[0.28em] pb-[0.06em]">group chat</span>
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-pretty sm:text-xl">
            Tandem keeps the ferry times, the villa, the dinner votes and who owes what in one shared plan, so nobody
            has to scroll back through 400 messages.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href="#"
              className="group inline-flex h-14 items-center gap-3 rounded-full bg-violet-950 pr-2.5 pl-7 text-lg font-semibold text-white shadow-[0_14px_28px_-12px_rgb(46_16_101/0.7)] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-rotate-2 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-950"
            >
              Start a trip
              <span className="flex size-9 items-center justify-center rounded-full bg-yellow-300 text-violet-950">
                <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" className="size-5 transition-transform duration-300 group-hover:translate-x-0.5">
                  <path d="M4 10h11.5M11 5.5l4.5 4.5-4.5 4.5" />
                </svg>
              </span>
            </a>
            <a
              href="#"
              className="rounded-md text-lg font-semibold underline decoration-violet-950/40 decoration-2 underline-offset-[0.3em] transition-colors hover:decoration-violet-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-950"
            >
              See a sample trip
            </a>
          </div>
          <p className="mt-6 text-[0.9375rem] font-medium">Free for trips of up to eight. Friends join from a link, no app needed.</p>
        </div>

        {/* Stickers: a row that wraps on phones, scattered along a dotted route from 1024px */}
        <div className="relative mt-12 lg:col-span-5 lg:mt-0 lg:h-[22rem]">
          <svg aria-hidden="true" viewBox="0 0 400 352" fill="none" className="absolute inset-0 hidden size-full text-violet-950/45 lg:block">
            <path d="M70 46C210 30 330 70 300 128S90 150 92 214s210 30 220 104" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="0.5 11" />
          </svg>
          <ul role="list" aria-label="A trip planned in Tandem" className="flex flex-wrap gap-3 text-[0.9375rem] sm:text-base lg:block">
            <li className="flex w-fit -rotate-2 items-center gap-2.5 rounded-full bg-white py-1.5 pr-4 pl-1.5 shadow-[0_10px_20px_-8px_rgb(76_5_25/0.4)] lg:absolute lg:top-2 lg:left-4 lg:-rotate-6">
              <span className="flex size-8 items-center justify-center rounded-full bg-yellow-300">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-[1.125rem]">
                  <path d="M3 14h18l-2.4 4.3a2 2 0 0 1-1.75 1.2H7.15a2 2 0 0 1-1.75-1.2Z" />
                  <path d="M6 14v-3.5h9.5L19 14M9.5 10.5V6.5h3l1.5 4" />
                </svg>
              </span>
              <span>
                <span className="font-semibold">Ferry to Hydra</span> Fri 09:40
              </span>
            </li>
            <li className="flex w-fit rotate-2 items-center gap-2.5 rounded-full bg-violet-950 py-1.5 pr-4 pl-1.5 text-white shadow-[0_10px_20px_-8px_rgb(76_5_25/0.4)] lg:absolute lg:top-[6.5rem] lg:right-0 lg:rotate-3">
              <span className="flex size-8 items-center justify-center rounded-full bg-pink-300 text-violet-950">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-[1.125rem]">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
                  <path d="m8 12.25 2.75 2.75L16 9.5" />
                </svg>
              </span>
              <span>
                <span className="font-semibold">Dinner vote</span> Tacos win 5–1
              </span>
            </li>
            <li className="flex w-fit -rotate-1 items-center gap-2.5 rounded-full bg-lime-200 py-1.5 pr-4 pl-1.5 shadow-[0_10px_20px_-8px_rgb(76_5_25/0.4)] lg:absolute lg:top-[11.5rem] lg:left-0 lg:-rotate-2">
              <span className="flex size-8 items-center justify-center rounded-full bg-white">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-[1.125rem]">
                  <path d="M4 10.5 12 4l8 6.5V19a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 19Z" />
                  <path d="M9.5 20.5V15h5v5.5" />
                </svg>
              </span>
              <span>
                <span className="font-semibold">Villa split six ways</span> €142 each
              </span>
            </li>
            <li className="flex w-fit rotate-1 items-center gap-2.5 rounded-full bg-white py-1.5 pr-4 pl-1.5 shadow-[0_10px_20px_-8px_rgb(76_5_25/0.4)] lg:absolute lg:right-6 lg:bottom-2 lg:rotate-6">
              <span className="flex size-8 items-center justify-center rounded-full bg-pink-300">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-[1.125rem]">
                  <rect x="3.5" y="7.5" width="17" height="12.5" rx="2.5" />
                  <path d="M9 7.5V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5v2M3.5 12.75h17" />
                </svg>
              </span>
              <span>
                <span className="font-semibold">Packing list</span> 23 of 31 packed
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
