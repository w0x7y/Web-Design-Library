// Fonts: IBM Plex Sans
export default function PricingRailFares() {
  return (
    <section className="bg-white font-['IBM_Plex_Sans',ui-sans-serif,system-ui,sans-serif] text-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-300 pb-5">
          <p className="text-xl font-semibold tracking-tight">Morrow Rail</p>
          <p
            className="text-xs font-medium tracking-widest uppercase text-slate-600"
          >
            The coast is closer than you think
          </p>
        </header>
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <h2
            className="text-4xl leading-[1.1] font-medium tracking-tight sm:text-6xl"
          >
            Two fares. One good journey.
          </h2>
          <p
            className="max-w-sm text-base text-slate-600"
          >
            Direct trains to the sea, every hour. Choose a fixed departure or leave room for a change of plan.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4 text-sm font-medium">
          <span>Bristol Temple Meads</span>
          <svg
            className="h-4 w-12 text-red-700"
            aria-hidden="true"
            viewBox="0 0 48 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M2 8h42m-6-5 6 5-6 5" />
          </svg>
          <span>Weston-super-Mare</span>
          <span className="text-xs font-medium tracking-widest uppercase text-slate-600">34 min / direct</span>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <article className="grid border border-slate-300 sm:grid-cols-[1fr_8rem]">
            <div className="p-6">
              <h3 className="text-2xl font-medium">Advance</h3>
              <p className="mt-3 text-sm text-slate-600">One train. A smaller fare.</p>
              <p className="mt-6 text-5xl font-medium tracking-tight tabular-nums">£18</p>
              <p className="mt-3 text-sm text-slate-600">Book at least 7 days ahead.</p>
            </div>
            <div
              className="flex flex-col justify-between gap-6 border-t border-dashed border-slate-300 bg-slate-50 p-5 sm:border-t-0 sm:border-l"
            >
              <p className="text-xs font-medium tracking-widest uppercase text-slate-600">FIXED</p>
              <a
                className="inline-flex min-h-11 items-center justify-center bg-red-700 px-3 text-sm font-semibold text-white hover:bg-red-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-950"
                href="#"
              >
                Book Advance
              </a>
            </div>
          </article>
          <article className="grid border border-slate-300 sm:grid-cols-[1fr_8rem]">
            <div className="p-6">
              <h3 className="text-2xl font-medium">Anytime</h3>
              <p className="mt-3 text-sm text-slate-600">Plans change. Your ticket can too.</p>
              <p className="mt-6 text-5xl font-medium tracking-tight tabular-nums">£32</p>
              <p className="mt-3 text-sm text-slate-600">Any departure on your travel date.</p>
            </div>
            <div
              className="flex flex-col justify-between gap-6 border-t border-dashed border-slate-300 bg-slate-50 p-5 sm:border-t-0 sm:border-l"
            >
              <p className="text-xs font-medium tracking-widest uppercase text-slate-600">FLEXIBLE</p>
              <a
                className="inline-flex min-h-11 items-center justify-center bg-red-700 px-3 text-sm font-semibold text-white hover:bg-red-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-950"
                href="#"
              >
                Book Anytime
              </a>
            </div>
          </article>
        </div>
        <p
          className="mt-8 text-sm text-slate-600"
        >
          Single adult fares. Seat reservation and one bicycle space included. Children under 5 travel free
          with an adult.
        </p>
      </div>
    </section>
  )
}
