// Fonts: IBM Plex Sans (https://fonts.google.com/specimen/IBM+Plex+Sans)
export default function FeaturesChargeStop() {
  return (
    <section className="bg-slate-950 text-slate-50 font-['IBM_Plex_Sans',ui-sans-serif,system-ui,sans-serif]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold text-orange-300">Relay Charge / Open-road charging</p>
          <h2 className="mt-4 max-w-3xl text-[2.25rem] leading-[1.1] font-semibold tracking-[-0.025em] sm:text-[3rem]">
            A useful stop. A fuller battery.
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-slate-300">
            Pull off the road, plug in and take a break. Our charging hubs put a hot
            drink and a clean washroom within reach.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <article className="border-l-2 border-orange-300 pl-5">
              <h3 className="font-semibold">Tap, plug, charge</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Use your contactless card at the charger. The price appears before
                your session starts.
              </p>
            </article>
            <article className="border-l-2 border-orange-300 pl-5">
              <h3 className="font-semibold">Help at every hub</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                A support number on every charger connects you to a person, day or night.
              </p>
            </article>
          </div>
          <div className="mt-8">
            <a href="#" className="inline-flex w-fit items-center gap-3 py-2 text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-50">
              Find a charging hub
            </a>
          </div>
        </div>
        <figure className="overflow-hidden rounded-xl border border-slate-600 bg-slate-900">
          <figcaption className="flex flex-wrap justify-between gap-3 bg-orange-200 px-6 py-4 text-sm font-semibold text-slate-950"><span>Example charging session</span><span>RC 082</span></figcaption>
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 p-6 sm:p-8">
            <div>
              <p className="text-2xl font-semibold sm:text-4xl">20%</p>
              <p className="mt-2 text-xs text-slate-300">Battery on arrival</p>
            </div>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6 text-orange-300">
              <path d="M13 2 4 14h7l-1 8 10-12h-7l1-8Z" />
            </svg>
            <div className="text-right">
              <p className="text-2xl font-semibold sm:text-4xl">80%</p>
              <p className="mt-2 text-xs text-slate-300">Target charge</p>
            </div>
          </div>
          <div className="mx-6 mb-6 rounded-lg border border-slate-700 p-5 sm:mx-8 sm:mb-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-semibold">Room to recharge</h3>
              <span className="rounded-sm bg-slate-800 px-2 py-1 text-xs text-orange-200">Up to 150 kW</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Wide bays, step-free paths and places to sit. CCS connectors for
              compatible electric cars.
            </p>
          </div>
          <p className="border-t border-dashed border-slate-600 px-6 py-4 text-sm text-slate-300">
            £0.59 per kWh. No membership or connection fee.
          </p>
        </figure>
      </div>
    </section>
  )
}
