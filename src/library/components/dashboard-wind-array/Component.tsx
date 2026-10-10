// Fonts: Manrope
export default function DashboardWindArray() {
  return (
    <section className="relative isolate overflow-hidden bg-teal-950 px-4 py-8 font-['Manrope',ui-sans-serif,system-ui,sans-serif] text-cyan-50 sm:px-8 sm:py-12" aria-labelledby="dashboard-wind-array-title">
      <img src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1600&q=80" alt="Wind turbines beneath a golden evening sky" width="1600" height="1067" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-25" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-r from-teal-950 via-teal-950/80 to-teal-900/40"></div>
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-cyan-200">AERLANE / NORTH ARRAY</p>
            <h2 id="dashboard-wind-array-title" className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">A clear view of every turbine.</h2>
          </div>
          <p className="text-sm text-cyan-100">Snapshot · 10 Oct, 14:35</p>
        </header>
        <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <figure className="rounded-2xl border border-cyan-100/20 bg-teal-950/40 p-5 sm:p-8">
            <figcaption className="flex flex-wrap justify-between gap-2 text-sm"><span>North field · 6 turbines</span><span>5 generating / 1 in service</span></figcaption>
            <ul role="list" className="mt-8 grid grid-cols-3 gap-3 sm:gap-6">
              <li className="rounded-xl border border-cyan-200/25 bg-teal-900/50 p-3 text-center">
                <svg aria-hidden="true" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto mb-3 size-10 text-cyan-200">
                  <circle cx="20" cy="16" r="2"></circle>
                  <path d="M20 18v19M20 14V2l-3 10 3 2Zm2 3 10 6-7-9-3 3Zm-4 0L8 23l7-9 3 3Z"></path>
                </svg>
                <p className="text-xs font-semibold">WT-01</p>
                <p className="mt-1 text-[11px] text-cyan-100">4.2 MW</p>
              </li>
              <li className="rounded-xl border border-cyan-200/25 bg-teal-900/50 p-3 text-center">
                <svg aria-hidden="true" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto mb-3 size-10 text-cyan-200">
                  <circle cx="20" cy="16" r="2"></circle>
                  <path d="M20 18v19M20 14V2l-3 10 3 2Zm2 3 10 6-7-9-3 3Zm-4 0L8 23l7-9 3 3Z"></path>
                </svg>
                <p className="text-xs font-semibold">WT-02</p>
                <p className="mt-1 text-[11px] text-cyan-100">4.1 MW</p>
              </li>
              <li className="rounded-xl border border-cyan-200/25 bg-teal-900/50 p-3 text-center">
                <svg aria-hidden="true" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto mb-3 size-10 text-cyan-200">
                  <circle cx="20" cy="16" r="2"></circle>
                  <path d="M20 18v19M20 14V2l-3 10 3 2Zm2 3 10 6-7-9-3 3Zm-4 0L8 23l7-9 3 3Z"></path>
                </svg>
                <p className="text-xs font-semibold">WT-03</p>
                <p className="mt-1 text-[11px] text-cyan-100">4.3 MW</p>
              </li>
              <li className="rounded-xl border border-cyan-200/25 bg-teal-900/50 p-3 text-center">
                <svg aria-hidden="true" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto mb-3 size-10 text-cyan-200">
                  <circle cx="20" cy="16" r="2"></circle>
                  <path d="M20 18v19M20 14V2l-3 10 3 2Zm2 3 10 6-7-9-3 3Zm-4 0L8 23l7-9 3 3Z"></path>
                </svg>
                <p className="text-xs font-semibold">WT-04</p>
                <p className="mt-1 text-[11px] text-cyan-100">4.0 MW</p>
              </li>
              <li className="rounded-xl border bg-teal-900/50 p-3 text-center border-amber-200/50 text-amber-200">
                <svg aria-hidden="true" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto mb-3 size-10 text-cyan-200">
                  <circle cx="20" cy="16" r="2"></circle>
                  <path d="M20 18v19M20 14V2l-3 10 3 2Zm2 3 10 6-7-9-3 3Zm-4 0L8 23l7-9 3 3Z"></path>
                </svg>
                <p className="text-xs font-semibold">WT-05</p>
                <p className="mt-1 text-[11px] text-cyan-100">Service</p>
              </li>
              <li className="rounded-xl border border-cyan-200/25 bg-teal-900/50 p-3 text-center">
                <svg aria-hidden="true" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto mb-3 size-10 text-cyan-200">
                  <circle cx="20" cy="16" r="2"></circle>
                  <path d="M20 18v19M20 14V2l-3 10 3 2Zm2 3 10 6-7-9-3 3Zm-4 0L8 23l7-9 3 3Z"></path>
                </svg>
                <p className="text-xs font-semibold">WT-06</p>
                <p className="mt-1 text-[11px] text-cyan-100">4.1 MW</p>
              </li>
            </ul>
            <p className="mt-6 text-xs text-cyan-100">WT-05 isolated for a scheduled gearbox inspection.</p>
          </figure>
          <aside className="rounded-2xl border border-white/25 bg-white/10 p-6 backdrop-blur-xl" aria-label="Array generation summary">
            <p className="text-xs font-semibold tracking-[0.16em] text-cyan-200">CURRENT GENERATION</p>
            <p className="mt-3 text-5xl font-semibold tracking-tight tabular-nums">20.7</p>
            <p className="mt-2 text-sm text-cyan-100">MW / 30 MW installed</p>
            <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-cyan-100/25 pt-6">
              <div>
                <dt className="text-xs text-cyan-100">Wind speed</dt>
                <dd className="mt-2 text-xl font-semibold tabular-nums">9.4 m/s</dd>
              </div>
              <div>
                <dt className="text-xs text-cyan-100">Today so far</dt>
                <dd className="mt-2 text-xl font-semibold tabular-nums">218 MWh</dd>
              </div>
            </dl>
            <details className="mt-7 border-t border-white/25 pt-5">
              <summary className="cursor-pointer text-sm font-semibold text-amber-200 hover:text-amber-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">WT-05 service note</summary>
              <p className="mt-3 text-sm leading-6">Crew checked in at 13:10. Inspection complete; oil sample pending. Next update at 15:00.</p>
            </details>
          </aside>
        </div>
      </div>
    </section>
  )
}
