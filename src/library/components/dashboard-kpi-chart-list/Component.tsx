export default function DashboardKpiChartList() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Overview title</h1>
            <p className="mt-2 text-sm text-neutral-500">Oct 4–10, 2026</p>
          </div>
          <nav aria-label="Date range" className="flex flex-wrap gap-1 rounded-lg border border-neutral-300 p-1">
            <a href="#" className="rounded-md border px-3 py-2 text-sm font-medium transition-colors border-transparent text-neutral-600 hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Today</a>
            <a href="#" aria-current="true" className="rounded-md border px-3 py-2 text-sm font-medium transition-colors border-neutral-900 bg-neutral-900 text-white forced-colors:border-[ButtonText] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">7 days</a>
            <a href="#" className="rounded-md border px-3 py-2 text-sm font-medium transition-colors border-transparent text-neutral-600 hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">30 days</a>
          </nav>
        </header>
        <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="min-w-0 rounded-lg border border-neutral-200 bg-white p-6">
            <dt className="text-sm text-neutral-500">Total activity</dt>
            <dd className="mt-2 text-3xl font-semibold tracking-tight">1,284<span className="ml-1 text-sm font-normal text-neutral-500">items</span></dd>
            <dd className="mt-3 flex items-center gap-1 text-xs text-neutral-600">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0">
                <path d="m7 14 5-5 5 5M12 9v10" />
              </svg>
              <span><span className="sr-only">Up </span>8.2% vs previous</span>
            </dd>
          </div>
          <div className="min-w-0 rounded-lg border border-neutral-200 bg-white p-6">
            <dt className="text-sm text-neutral-500">Active people</dt>
            <dd className="mt-2 text-3xl font-semibold tracking-tight">248<span className="ml-1 text-sm font-normal text-neutral-500">people</span></dd>
            <dd className="mt-3 flex items-center gap-1 text-xs text-neutral-600">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0">
                <path d="m7 14 5-5 5 5M12 9v10" />
              </svg>
              <span><span className="sr-only">Up </span>4.1% vs previous</span>
            </dd>
          </div>
          <div className="min-w-0 rounded-lg border border-neutral-200 bg-white p-6">
            <dt className="text-sm text-neutral-500">Average time</dt>
            <dd className="mt-2 text-3xl font-semibold tracking-tight">24<span className="ml-1 text-sm font-normal text-neutral-500">min</span></dd>
            <dd className="mt-3 flex items-center gap-1 text-xs text-neutral-600">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0">
                <path d="m7 10 5 5 5-5M12 15V5" />
              </svg>
              <span><span className="sr-only">Down </span>2.4% vs previous</span>
            </dd>
          </div>
          <div className="min-w-0 rounded-lg border border-neutral-200 bg-white p-6">
            <dt className="text-sm text-neutral-500">Completion rate</dt>
            <dd className="mt-2 text-3xl font-semibold tracking-tight">98.4<span className="ml-1 text-sm font-normal text-neutral-500">%</span></dd>
            <dd className="mt-3 flex items-center gap-1 text-xs text-neutral-600">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0">
                <path d="m7 14 5-5 5 5M12 9v10" />
              </svg>
              <span><span className="sr-only">Up </span>1.2% vs previous</span>
            </dd>
          </div>
        </dl>
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <div className="min-w-0 rounded-lg border border-neutral-200 bg-white p-6 lg:col-span-2">
            <h2 className="text-base font-semibold">Period trend</h2>
            <p className="mt-2 text-sm text-neutral-600">1,284 items across the selected period.</p>
            <svg aria-hidden="true" viewBox="0 0 240 128" fill="none" stroke="currentColor" strokeWidth="1.5" preserveAspectRatio="none" className="mt-6 h-56 w-full">
              <path d="M4 16h232M4 48h232M4 80h232M4 112h232" className="text-neutral-200" />
              <rect x="8" y="85" width="12.6667" height="35" rx="2" fill="currentColor" stroke="none" className="text-neutral-300" />
              <rect x="26.6667" y="66" width="12.6667" height="54" rx="2" fill="currentColor" stroke="none" className="text-neutral-300" />
              <rect x="45.3333" y="77" width="12.6667" height="43" rx="2" fill="currentColor" stroke="none" className="text-neutral-300" />
              <rect x="64" y="48" width="12.6667" height="72" rx="2" fill="currentColor" stroke="none" className="text-neutral-300" />
              <rect x="82.6667" y="62" width="12.6667" height="58" rx="2" fill="currentColor" stroke="none" className="text-neutral-300" />
              <rect x="101.333" y="34" width="12.6667" height="86" rx="2" fill="currentColor" stroke="none" className="text-neutral-300" />
              <rect x="120" y="53" width="12.6667" height="67" rx="2" fill="currentColor" stroke="none" className="text-neutral-300" />
              <rect x="138.667" y="42" width="12.6667" height="78" rx="2" fill="currentColor" stroke="none" className="text-neutral-300" />
              <rect x="157.333" y="24" width="12.6667" height="96" rx="2" fill="currentColor" stroke="none" className="text-neutral-300" />
              <rect x="176" y="39" width="12.6667" height="81" rx="2" fill="currentColor" stroke="none" className="text-neutral-300" />
              <rect x="194.667" y="18" width="12.6667" height="102" rx="2" fill="currentColor" stroke="none" className="text-neutral-300" />
              <rect x="213.333" y="8" width="12.6667" height="112" rx="2" fill="currentColor" stroke="none" className="text-neutral-500" />
            </svg>
            <p className="sr-only">Illustrative bar trend over Oct 4–10. Total: 1,284 items, up 8.2 percent.</p>
            <div className="mt-3 flex flex-wrap justify-between gap-2 text-xs text-neutral-500">
              <span>Oct 4</span>
              <span>Oct 6</span>
              <span>Oct 8</span>
              <span>Oct 10</span>
            </div>
          </div>
          <div className="min-w-0 rounded-lg border border-neutral-200 bg-white p-6">
            <h2 className="text-base font-semibold">Ranked contributors</h2>
            <ol role="list" className="mt-6 space-y-5">
              <li>
                <div className="flex items-start justify-between gap-3 text-sm">
                  <span><span className="mr-2 text-neutral-500">1.</span>Leading item</span>
                  <span className="font-medium tabular-nums">480</span>
                </div>
                <div aria-hidden="true" className="mt-2 h-2 rounded-full bg-neutral-100">
                  <div className="h-full w-full rounded-full bg-neutral-300 forced-colors:bg-[CanvasText]" />
                </div>
              </li>
              <li>
                <div className="flex items-start justify-between gap-3 text-sm">
                  <span><span className="mr-2 text-neutral-500">2.</span>Next contributor</span>
                  <span className="font-medium tabular-nums">320</span>
                </div>
                <div aria-hidden="true" className="mt-2 h-2 rounded-full bg-neutral-100">
                  <div className="h-full w-2/3 rounded-full bg-neutral-300 forced-colors:bg-[CanvasText]" />
                </div>
              </li>
              <li>
                <div className="flex items-start justify-between gap-3 text-sm">
                  <span><span className="mr-2 text-neutral-500">3.</span>Recurring entry</span>
                  <span className="font-medium tabular-nums">240</span>
                </div>
                <div aria-hidden="true" className="mt-2 h-2 rounded-full bg-neutral-100">
                  <div className="h-full w-1/2 rounded-full bg-neutral-300 forced-colors:bg-[CanvasText]" />
                </div>
              </li>
              <li>
                <div className="flex items-start justify-between gap-3 text-sm">
                  <span><span className="mr-2 text-neutral-500">4.</span>Other source</span>
                  <span className="font-medium tabular-nums">160</span>
                </div>
                <div aria-hidden="true" className="mt-2 h-2 rounded-full bg-neutral-100">
                  <div className="h-full w-1/3 rounded-full bg-neutral-300 forced-colors:bg-[CanvasText]" />
                </div>
              </li>
              <li>
                <div className="flex items-start justify-between gap-3 text-sm">
                  <span><span className="mr-2 text-neutral-500">5.</span>Remaining group</span>
                  <span className="font-medium tabular-nums">80</span>
                </div>
                <div aria-hidden="true" className="mt-2 h-2 rounded-full bg-neutral-100">
                  <div className="h-full w-1/6 rounded-full bg-neutral-300 forced-colors:bg-[CanvasText]" />
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
