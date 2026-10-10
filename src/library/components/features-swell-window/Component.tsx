// Fonts: Archivo (https://fonts.google.com/specimen/Archivo)
export default function FeaturesSwellWindow() {
  return (
    <section className="bg-teal-950 text-teal-50 font-['Archivo',ui-sans-serif,system-ui,sans-serif] bg-linear-to-br from-teal-950 via-teal-900 to-cyan-950">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <p className="text-sm font-semibold text-lime-300">Brine / Know your window</p>
        <h2 className="mt-4 max-w-3xl text-[2.25rem] leading-[1.1] font-semibold tracking-[-0.025em] sm:text-[3rem]">
          Go when the coast says yes.
        </h2>
        <p className="mt-5 max-w-xl leading-relaxed text-teal-100">
          Swell, wind and tide on the same clock. Pick a session that fits the conditions,
          not just your calendar.
        </p>
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <figure className="min-w-0 rounded-2xl border border-teal-700 bg-teal-950 p-6 sm:p-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs text-teal-100">Fistral Beach / Saturday</p>
                <p className="text-5xl font-semibold tracking-tight">1.4<span className="ml-2 text-lg font-normal text-teal-100">m swell</span></p>
              </div>
              <p className="text-xs text-teal-100">12 sec period · WNW</p>
            </div>
            <svg role="img" aria-label="Swell builds from 0.8 metres at 6am to a 1.4 metre peak at noon, easing to 0.9 metres by 6pm" viewBox="0 0 600 160" preserveAspectRatio="none" fill="none" className="mt-8 h-36 w-full text-lime-300">
              <path d="M0 150H600M0 100H600M0 50H600" stroke="currentColor" strokeOpacity="0.2" />
              <path d="M0 130C80 130 110 90 150 80S240 20 300 25 390 40 450 65 550 105 600 120" stroke="currentColor" strokeWidth="3" />
              <path d="M300 15V155" stroke="currentColor" strokeDasharray="4 6" strokeOpacity="0.5" />
            </svg>
            <div className="mt-3 flex justify-between text-xs text-teal-100">
              <span>06:00</span>
              <span>09:00</span>
              <span>12:00</span>
              <span>15:00</span>
              <span>18:00</span>
            </div>
            <figcaption className="mt-6 border-t border-teal-700 pt-4 text-sm text-teal-100">
              Best window: 10:00–13:00. Offshore wind, building swell, incoming tide.
            </figcaption>
          </figure>
          <div className="flex flex-col justify-center gap-8">
            <article className="border-l border-teal-500 pl-6">
              <h3 className="text-xl font-semibold">Your break, not the nearest buoy</h3>
              <p className="mt-3 text-sm leading-relaxed text-teal-100">
                Local exposure and seabed shape turn offshore readings into a
                forecast for the beach you actually surf.
              </p>
            </article>
            <article className="border-l border-teal-500 pl-6">
              <h3 className="text-xl font-semibold">An alert worth waking up for</h3>
              <p className="mt-3 text-sm leading-relaxed text-teal-100">
                Set your swell range and wind direction. Brine sends a heads-up when
                your spot is likely to work.
              </p>
            </article>
            <a href="#" className="inline-flex w-fit items-center gap-3 py-2 text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-50">
              Find your local forecast
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
