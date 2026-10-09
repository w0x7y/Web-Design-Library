export default function DashboardSalesPipeline() {
  return (
    <section className="bg-white px-6 py-10 text-zinc-950 sm:px-12">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-3xl font-semibold tracking-tight">Pipeline</h2>
          <span className="inline-flex rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-700">
            October 2026
          </span>
        </header>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="grid gap-2 bg-zinc-50 rounded-lg p-5">
            <p className="text-xs font-medium opacity-70">Discovery</p>
            <p className="text-3xl font-semibold tracking-tight tabular-nums">
              $24,000
            </p>
            <p className="text-xs opacity-70">6 conversations</p>
          </div>
          <div className="grid gap-2 bg-zinc-50 rounded-lg p-5">
            <p className="text-xs font-medium opacity-70">Proposal</p>
            <p className="text-3xl font-semibold tracking-tight tabular-nums">
              $48,500
            </p>
            <p className="text-xs opacity-70">4 opportunities</p>
          </div>
          <div className="grid gap-2 bg-zinc-50 rounded-lg p-5">
            <p className="text-xs font-medium opacity-70">Negotiation</p>
            <p className="text-3xl font-semibold tracking-tight tabular-nums">
              $32,000
            </p>
            <p className="text-xs opacity-70">2 opportunities</p>
          </div>
          <div className="grid gap-2 bg-emerald-50 text-emerald-950 rounded-lg p-5">
            <p className="text-xs font-medium opacity-70">Won</p>
            <p className="text-3xl font-semibold tracking-tight tabular-nums">
              $19,800
            </p>
            <p className="text-xs opacity-70">3 new customers</p>
          </div>
        </div>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <article>
            <h2 className="text-lg font-semibold">Worth your attention</h2>
            <ul className="mt-5 grid gap-5" role="list">
              <li className="border-b border-zinc-200 pb-5">
                <div className="flex flex-wrap justify-between gap-3">
                  <div className="grid gap-2">
                    <p className="text-sm font-semibold">Common Ground</p>
                    <p className="text-xs text-zinc-500">
                      Proposal sent · Follow up today
                    </p>
                  </div>
                  <p className="text-sm tabular-nums">$18,000</p>
                </div>
              </li>
              <li className="border-b border-zinc-200 pb-5">
                <div className="flex flex-wrap justify-between gap-3">
                  <div className="grid gap-2">
                    <p className="text-sm font-semibold">Northstar Labs</p>
                    <p className="text-xs text-zinc-500">
                      Contract review · Due Friday
                    </p>
                  </div>
                  <p className="text-sm tabular-nums">$24,500</p>
                </div>
              </li>
              <li className="border-b border-zinc-200 pb-5">
                <div className="flex flex-wrap justify-between gap-3">
                  <div className="grid gap-2">
                    <p className="text-sm font-semibold">Forma Studio</p>
                    <p className="text-xs text-zinc-500">
                      Discovery call · Tomorrow
                    </p>
                  </div>
                  <p className="text-sm tabular-nums">$12,000</p>
                </div>
              </li>
            </ul>
          </article>
          <aside className="border-l-2 border-emerald-700 pl-6">
            <p className="text-xs font-medium tracking-widest text-zinc-500">
              MONTHLY TARGET
            </p>
            <p className="mt-5 text-2xl font-semibold tabular-nums">
              $19,800 / $30,000
            </p>
            <meter
              className="mt-4 h-3 w-full accent-emerald-700"
              min="0"
              max="30000"
              value="19800"
              aria-label="Monthly sales target progress"
            >
              66% of target
            </meter>
            <p className="mt-3 text-xs text-zinc-500">
              66% of target, with 21 days to go.
            </p>
            <a
              className="mt-7 inline-flex text-sm font-medium underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
              href="#"
            >
              Review forecast
            </a>
          </aside>
        </div>
      </div>
    </section>
  )
}
