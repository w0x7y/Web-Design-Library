export default function StatCardReleaseHealth() {
  return (
    <article className="w-72 rounded-2xl border border-slate-200 bg-white p-5 text-slate-900 sm:w-80">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold">Release health</h2>
        <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-medium text-emerald-800">
          On track
        </span>
      </div>
      <div className="mt-5 flex items-center gap-5">
        <div className="relative size-24 shrink-0">
          <svg
            aria-hidden="true"
            viewBox="0 0 100 100"
            className="size-24 -rotate-90"
            fill="none"
            strokeWidth="8"
          >
            <circle cx="50" cy="50" r="42" stroke="#e2e8f0" />
            <circle
              cx="50"
              cy="50"
              r="42"
              stroke="#059669"
              strokeDasharray="260 264"
              strokeLinecap="round"
            />
          </svg>
          <p className="absolute inset-0 flex items-center justify-center text-xl font-semibold tabular-nums">
            98.6<span className="text-xs">%</span>
          </p>
        </div>
        <div>
          <p className="text-xs text-slate-600">Successful builds</p>
          <p className="mt-2 text-xs font-semibold text-emerald-800">
            ↑ 1.2 percentage points
          </p>
          <p className="mt-1 text-[11px] text-slate-500">
            vs. previous 30 days
          </p>
        </div>
      </div>
      <dl className="mt-5 grid grid-cols-2 gap-4 border-t border-slate-200 pt-4">
        <div>
          <dt className="text-xs text-slate-500">Passed</dt>
          <dd className="mt-1 text-xl font-semibold">706</dd>
        </div>
        <div>
          <dt className="text-xs text-slate-500">Failed</dt>
          <dd className="mt-1 text-xl font-semibold">10</dd>
        </div>
      </dl>
      <a
        aria-label="View build report: Release health"
        href="#release-health-report"
        className="mt-5 inline-flex items-center gap-2 rounded-sm text-xs font-medium text-blue-700 hover:text-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
      >
        View build report{' '}
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="inline-block size-3.5 align-[-0.125em]"
        >
          <path d="M5 15 15 5M5 5h10v10" />
        </svg>
      </a>
    </article>
  )
}
