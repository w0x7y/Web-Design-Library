export default function StatCardSparklineTiles() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h2 className="text-lg font-semibold">Last 30 days</h2>
          <p className="text-sm text-neutral-500">Compared with the previous 30 days</p>
        </header>
        <dl className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="min-w-0 rounded-lg border border-neutral-200 bg-white p-6">
            <dt className="text-sm font-medium text-neutral-500">Total activity</dt>
            <dd className="mt-2 flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
              <span className="text-3xl font-semibold tracking-tight tabular-nums">12,480</span>
              <span className="inline-flex items-center gap-1 rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-3 shrink-0">
                  <path d="m7 10 5-5 5 5M12 5v14" />
                </svg>
                <span className="sr-only">Up </span>8.2%
              </span>
            </dd>
            <dd className="mt-4">
              <svg role="img" aria-label="30-day trend: rising" viewBox="0 0 124 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" preserveAspectRatio="none" className="h-10 w-full">
                <polyline vectorEffect="non-scaling-stroke" points="2,32 12,30 22,33 32,26 42,28 52,22 62,24 72,18 82,20 92,13 102,15 112,9 122,6" />
              </svg>
            </dd>
          </div>
          <div className="min-w-0 rounded-lg border border-neutral-200 bg-white p-6">
            <dt className="text-sm font-medium text-neutral-500">Active people</dt>
            <dd className="mt-2 flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
              <span className="text-3xl font-semibold tracking-tight tabular-nums">2,418</span>
              <span className="inline-flex items-center gap-1 rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-3 shrink-0">
                  <path d="m7 10 5-5 5 5M12 5v14" />
                </svg>
                <span className="sr-only">Up </span>6.0%
              </span>
            </dd>
            <dd className="mt-4">
              <svg role="img" aria-label="30-day trend: gradual rise" viewBox="0 0 124 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" preserveAspectRatio="none" className="h-10 w-full">
                <polyline vectorEffect="non-scaling-stroke" points="2,26 12,28 22,24 32,25 42,20 52,23 62,19 72,21 82,16 92,18 102,14 112,15 122,12" />
              </svg>
            </dd>
          </div>
          <div className="min-w-0 rounded-lg border border-neutral-200 bg-white p-6">
            <dt className="text-sm font-medium text-neutral-500">Completion rate</dt>
            <dd className="mt-2 flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
              <span className="text-3xl font-semibold tracking-tight tabular-nums">64.2%</span>
              <span className="inline-flex items-center gap-1 rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-3 shrink-0">
                  <path d="m7 10 5-5 5 5M12 5v14" />
                </svg>
                <span className="sr-only">Up </span>1.8 pt
              </span>
            </dd>
            <dd className="mt-4">
              <svg role="img" aria-label="30-day trend: mostly flat" viewBox="0 0 124 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" preserveAspectRatio="none" className="h-10 w-full">
                <polyline vectorEffect="non-scaling-stroke" points="2,22 12,20 22,24 32,18 42,21 52,17 62,22 72,16 82,19 92,15 102,18 112,14 122,13" />
              </svg>
            </dd>
          </div>
          <div className="min-w-0 rounded-lg border border-neutral-200 bg-white p-6">
            <dt className="text-sm font-medium text-neutral-500">Average time</dt>
            <dd className="mt-2 flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
              <span className="text-3xl font-semibold tracking-tight tabular-nums">3m 12s</span>
              <span className="inline-flex items-center gap-1 rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-3 shrink-0">
                  <path d="m7 14 5 5 5-5M12 19V5" />
                </svg>
                <span className="sr-only">Down </span>4.1%
              </span>
            </dd>
            <dd className="mt-4">
              <svg role="img" aria-label="30-day trend: falling" viewBox="0 0 124 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" preserveAspectRatio="none" className="h-10 w-full">
                <polyline vectorEffect="non-scaling-stroke" points="2,10 12,14 22,11 32,16 42,13 52,19 62,17 72,22 82,20 92,25 102,23 112,28 122,30" />
              </svg>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
