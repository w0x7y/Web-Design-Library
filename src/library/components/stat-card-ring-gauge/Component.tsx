export default function StatCardRingGauge() {
  return (
    <article className="w-72 rounded-lg border border-neutral-200 bg-white p-6 text-neutral-900 sm:w-80">
      <header className="flex items-center justify-between gap-3">
        <h2 className="text-sm font-medium text-neutral-500">Metric label</h2>
        <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">On track</span>
      </header>
      <div className="mt-3 flex items-center gap-4">
        <div className="relative size-24 shrink-0">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-24 -rotate-90">
            <circle cx="12" cy="12" r="10" className="text-neutral-200" />
            <circle cx="12" cy="12" r="10" pathLength="100" strokeDasharray="98 100" className="text-neutral-900" />
          </svg>
          <p className="absolute inset-0 flex items-center justify-center text-2xl font-semibold tabular-nums">98%</p>
        </div>
        <div className="min-w-0">
          <p className="text-sm text-neutral-600">Comparison summary</p>
          <p className="mt-2 flex items-center gap-1 text-xs font-medium"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-3 shrink-0"><path d="m7 10 5-5 5 5M12 5v14" /></svg>Up 2 points</p>
          <p className="mt-1 text-xs text-neutral-500">vs previous period</p>
        </div>
      </div>
      <footer className="mt-3 border-t border-neutral-200 pt-2">
        <dl className="grid grid-cols-2 gap-4">
          <div className="flex flex-col"><dt className="order-2 text-xs text-neutral-500">Passed</dt><dd className="text-lg font-semibold tabular-nums">1,184</dd></div>
          <div className="flex flex-col"><dt className="order-2 text-xs text-neutral-500">Failed</dt><dd className="text-lg font-semibold tabular-nums">26</dd></div>
        </dl>
        <a href="#" className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">View report<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="M5 12h14m-5-5 5 5-5 5" /></svg></a>
      </footer>
    </article>
  )
}

