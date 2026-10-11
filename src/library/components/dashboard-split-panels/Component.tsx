export default function DashboardSplitPanels() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-200 pb-6">
          <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Overview title</h1>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-sm text-neutral-500">Oct 4–10, 2026</p>
            <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">Updated</span>
          </div>
        </header>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="min-w-0 rounded-lg border border-neutral-200 bg-white p-6">
            <h2 className="text-base font-semibold">Weekly activity</h2>
            <p className="mt-4 text-sm text-neutral-500">Headline metric</p>
            <p className="mt-2 text-3xl font-semibold tracking-tight">1,284 <span className="text-sm font-normal text-neutral-500">items</span></p>
            <svg aria-hidden="true" viewBox="0 0 240 128" fill="none" stroke="currentColor" strokeWidth="1.5" preserveAspectRatio="none" className="mt-6 h-32 w-full">
              <path d="M4 16h232M4 48h232M4 80h232M4 112h232" className="text-neutral-200" />
              <rect x="8" y="78" width="26" height="42" rx="2" fill="currentColor" stroke="none" className="text-neutral-300" />
              <rect x="40" y="46" width="26" height="74" rx="2" fill="currentColor" stroke="none" className="text-neutral-300" />
              <rect x="72" y="60" width="26" height="60" rx="2" fill="currentColor" stroke="none" className="text-neutral-300" />
              <rect x="104" y="29" width="26" height="91" rx="2" fill="currentColor" stroke="none" className="text-neutral-300" />
              <rect x="136" y="42" width="26" height="78" rx="2" fill="currentColor" stroke="none" className="text-neutral-300" />
              <rect x="168" y="15" width="26" height="105" rx="2" fill="currentColor" stroke="none" className="text-neutral-300" />
              <rect x="200" y="24" width="26" height="96" rx="2" fill="currentColor" stroke="none" className="text-neutral-500" />
            </svg>
            <p className="sr-only">Seven illustrative daily bars. Total weekly activity: 1,284 items.</p>
            <div className="mt-3 grid grid-cols-7 text-center text-xs text-neutral-500">
              <span>Sun</span>
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
            </div>
          </div>
          <div className="min-w-0 rounded-lg border border-neutral-200 bg-white p-6">
            <h2 className="text-base font-semibold">Current items</h2>
            <ul role="list" className="mt-6">
              <li className="grid grid-cols-[40px_minmax(0,1fr)] items-center gap-x-3 gap-y-2 border-t border-neutral-200 py-4 sm:grid-cols-[40px_minmax(0,1fr)_auto]">
                <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-900 row-span-2 sm:row-span-1">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                    <path d="M5 4h14v16H5V4M9 8h6M9 12h6" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-medium">Priority item</p>
                  <p className="mt-1 text-xs text-neutral-500">Supporting item detail</p>
                </div>
                <div className="col-start-2 sm:col-start-auto">
                  <span className="text-sm font-medium tabular-nums">128</span>
                </div>
              </li>
              <li className="grid grid-cols-[40px_minmax(0,1fr)] items-center gap-x-3 gap-y-2 border-t border-neutral-200 py-4 sm:grid-cols-[40px_minmax(0,1fr)_auto]">
                <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-900 row-span-2 sm:row-span-1">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                    <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M12 7v5l3 2" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-medium">Pending entry</p>
                  <p className="mt-1 text-xs text-neutral-500">Context for this entry</p>
                </div>
                <div className="col-start-2 sm:col-start-auto">
                  <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">Pending</span>
                </div>
              </li>
              <li className="grid grid-cols-[40px_minmax(0,1fr)] items-center gap-x-3 gap-y-2 border-t border-neutral-200 py-4 sm:grid-cols-[40px_minmax(0,1fr)_auto]">
                <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-900 row-span-2 sm:row-span-1">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                    <path d="m5 12 4 4L19 6" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-medium">Completed group</p>
                  <p className="mt-1 text-xs text-neutral-500">Summary of the group</p>
                </div>
                <div className="col-start-2 sm:col-start-auto">
                  <span className="text-sm font-medium tabular-nums">96</span>
                </div>
              </li>
              <li className="grid grid-cols-[40px_minmax(0,1fr)] items-center gap-x-3 gap-y-2 border-t border-neutral-200 py-4 sm:grid-cols-[40px_minmax(0,1fr)_auto]">
                <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-900 row-span-2 sm:row-span-1">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                    <path d="M3 12s3-7 9-7 9 7 9 7-3 7-9 7-9-7-9-7M12 9v6" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-medium">Review task</p>
                  <p className="mt-1 text-xs text-neutral-500">Next review detail</p>
                </div>
                <div className="col-start-2 sm:col-start-auto">
                  <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">In review</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <footer className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-neutral-200 pt-4">
          <p className="text-sm text-neutral-500">Summary for the selected period</p>
          <a href="#" className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">View report</a>
        </footer>
      </div>
    </section>
  )
}
