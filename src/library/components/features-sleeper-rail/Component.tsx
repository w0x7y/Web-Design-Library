// Fonts: IBM Plex Sans (https://fonts.google.com/specimen/IBM+Plex+Sans)
export default function FeaturesSleeperRail() {
  return (
    <section className="bg-slate-950 text-slate-50 font-['IBM_Plex_Sans',ui-sans-serif,system-ui,sans-serif]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold text-orange-300">Northbound / Night services</p>
          <h2 className="mt-4 max-w-3xl text-[2.25rem] leading-[1.1] font-semibold tracking-[-0.025em] sm:text-[3rem]">
            The journey is your room for the night.
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-slate-300">
            Close the cabin door in the city. Open the blind in the Highlands. We take
            care of the hours between.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <article className="border-l-2 border-orange-300 pl-5">
              <h3 className="font-semibold">A bed, already made</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Cotton sheets, a proper pillow and a reading light for the last
                chapter.
              </p>
            </article>
            <article className="border-l-2 border-orange-300 pl-5">
              <h3 className="font-semibold">Breakfast at your door</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Choose your breakfast the night before. Your host brings it as the
                hills arrive.
              </p>
            </article>
          </div>
          <div className="mt-8">
            <a href="#" className="inline-flex w-fit items-center gap-3 py-2 text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-50">
              Explore the cabins
            </a>
          </div>
        </div>
        <figure className="overflow-hidden rounded-xl border border-slate-600 bg-slate-900">
          <figcaption className="flex flex-wrap justify-between gap-3 bg-orange-200 px-6 py-4 text-sm font-semibold text-slate-950"><span>Your overnight escape</span><span>NB 214</span></figcaption>
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 p-6 sm:p-8">
            <div>
              <p className="text-2xl font-semibold sm:text-4xl">London</p>
              <p className="mt-2 text-xs text-slate-300">Departs 21:15</p>
            </div>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6 text-orange-300">
              <path d="M3 12h18m-6-6 6 6-6 6" />
            </svg>
            <div className="text-right">
              <p className="text-2xl font-semibold sm:text-4xl">Inverness</p>
              <p className="mt-2 text-xs text-slate-300">Arrives 08:40</p>
            </div>
          </div>
          <div className="mx-6 mb-6 rounded-lg border border-slate-700 p-5 sm:mx-8 sm:mb-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-semibold">A cabin of your own</h3>
              <span className="rounded-sm bg-slate-800 px-2 py-1 text-xs text-orange-200">Classic double</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Two lower beds. A washbasin. Space for the bags, and time to switch off.
            </p>
          </div>
          <p className="border-t border-dashed border-slate-600 px-6 py-4 text-sm text-slate-300">
            No airport queue. No hotel check-in. Wake up there.
          </p>
        </figure>
      </div>
    </section>
  )
}
