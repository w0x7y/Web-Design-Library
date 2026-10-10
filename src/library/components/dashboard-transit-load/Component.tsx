// Fonts: Space Grotesk
export default function DashboardTransitLoad() {
  return (
    <section className="bg-white px-4 py-10 font-['Space_Grotesk',ui-sans-serif,system-ui,sans-serif] text-indigo-950 sm:px-8" aria-labelledby="dashboard-transit-load-title">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-wrap items-end justify-between gap-4 border-b border-indigo-200 pb-6">
          <div>
            <p className="text-xs font-semibold tracking-widest">CITYLOOP / RIDERSHIP</p>
            <h2 className="mt-2 text-3xl font-medium tracking-tight" id="dashboard-transit-load-title">The city in motion.</h2>
          </div>
          <p className="text-xs text-indigo-800">Saturday, 10 Oct · 14:00–15:00</p>
        </header>
        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <article>
            <h3 className="text-lg font-medium">Average load by bus route</h3>
            <ul role="list" className="mt-5 grid gap-6">
              <li className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4">
                <span className="grid size-10 place-content-center rounded-lg border-2 border-indigo-950 text-sm font-bold">24</span>
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="text-sm font-semibold">Crosstown</h4>
                    <p className="text-xs tabular-nums">82% seats occupied</p>
                  </div>
                  <div aria-hidden="true" className="relative mt-3 h-2 rounded-full bg-indigo-100">
                    <div className="h-full w-[82%] rounded-full bg-orange-700"></div>
                    <span className="absolute -top-1 left-1/2 -translate-x-1/2 size-4 rounded-full border-2 border-indigo-700 bg-white"></span>
                  </div>
                  <p className="mt-3 text-xs text-indigo-800">West End to Eastgate · 12 buses</p>
                </div>
              </li>
              <li className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4">
                <span className="grid size-10 place-content-center rounded-lg border-2 border-indigo-950 text-sm font-bold">08</span>
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="text-sm font-semibold">Riverside</h4>
                    <p className="text-xs tabular-nums">64% seats occupied</p>
                  </div>
                  <div aria-hidden="true" className="relative mt-3 h-2 rounded-full bg-indigo-100">
                    <div className="h-full w-[64%] rounded-full bg-indigo-700"></div>
                    <span className="absolute -top-1 left-1/2 -translate-x-1/2 size-4 rounded-full border-2 border-indigo-700 bg-white"></span>
                  </div>
                  <p className="mt-3 text-xs text-indigo-800">Quayside to Civic Square · 8 buses</p>
                </div>
              </li>
              <li className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4">
                <span className="grid size-10 place-content-center rounded-lg border-2 border-indigo-950 text-sm font-bold">16</span>
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="text-sm font-semibold">Hilltop</h4>
                    <p className="text-xs tabular-nums">46% seats occupied</p>
                  </div>
                  <div aria-hidden="true" className="relative mt-3 h-2 rounded-full bg-indigo-100">
                    <div className="h-full w-[46%] rounded-full bg-indigo-700"></div>
                    <span className="absolute -top-1 left-1/2 -translate-x-1/2 size-4 rounded-full border-2 border-indigo-700 bg-white"></span>
                  </div>
                  <p className="mt-3 text-xs text-indigo-800">Museum to Upper Park · 6 buses</p>
                </div>
              </li>
            </ul>
            <p className="mt-3 text-xs text-indigo-800">Circle marker = 50% occupancy reference</p>
          </article>
          <aside className="border-l-2 border-indigo-200 pl-6">
            <h3 className="text-lg font-medium">Boardings this hour</h3>
            <p className="mt-3 text-5xl font-medium tracking-tight tabular-nums">8,246</p>
            <p className="mt-3 text-xs text-indigo-800">+12% against last Saturday</p>
            <dl className="mt-6 grid gap-4">
              <div className="flex flex-wrap justify-between gap-2 text-sm">
                <dt>Service kilometres</dt>
                <dd>1,184</dd>
              </div>
              <div className="flex flex-wrap justify-between gap-2 text-sm">
                <dt>Accessible vehicles</dt>
                <dd>26 / 26</dd>
              </div>
              <div className="flex flex-wrap justify-between gap-2 text-sm">
                <dt>Scheduled trips run</dt>
                <dd>97.4%</dd>
              </div>
            </dl>
          </aside>
        </div>
        <details className="mt-8 border-t border-indigo-200 pt-5">
          <summary className="cursor-pointer text-sm font-medium hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Crosstown capacity note</summary>
          <p className="mt-3 text-sm leading-6 text-indigo-800">The 14:20 and 14:40 eastbound trips are above 90% seated capacity. An extra departure is scheduled from West End at 14:50.</p>
        </details>
      </div>
    </section>
  )
}
