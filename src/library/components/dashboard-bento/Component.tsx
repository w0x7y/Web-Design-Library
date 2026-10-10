export default function DashboardBento() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Overview title</h1>
            <p className="mt-2 text-sm text-neutral-500">Summary for the current period</p>
          </div>
          <a href="#" className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">New item</a>
        </header>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:auto-rows-[minmax(160px,auto)] lg:grid-cols-4">
          <div className="min-w-0 rounded-lg border border-neutral-200 bg-white p-6 sm:col-span-2 lg:row-span-2">
            <h2 className="text-base font-semibold">Activity over time</h2>
            <p className="mt-4 text-4xl font-semibold tracking-tight">1,284</p>
            <p className="mt-2 text-sm text-neutral-600">Items in the current period</p>
            <svg aria-hidden="true" viewBox="0 0 240 128" fill="none" stroke="currentColor" strokeWidth="1.5" preserveAspectRatio="none" className="mt-6 h-44 w-full">
              <path d="M4 16h232M4 48h232M4 80h232M4 112h232" className="text-neutral-200" />
              <path d="m4 98 21-15 21 8 21-26 21 13 21-28 21 8 21-22 21 8 21-21 21 9 21-18" className="text-neutral-600" />
            </svg>
            <p className="sr-only">Illustrative line trend. Current period total: 1,284 items.</p>
            <div className="mt-3 flex justify-between text-xs text-neutral-500">
              <span>Oct 1</span>
              <span>Oct 10</span>
            </div>
          </div>
          <div className="min-w-0 rounded-lg border border-neutral-200 bg-white p-6 lg:col-start-3 lg:row-start-1">
            <h2 className="text-base font-semibold">Active members</h2>
            <p className="mt-4 text-3xl font-semibold tracking-tight">248</p>
            <p className="mt-2 text-xs text-neutral-500">Up 4.1% this period</p>
          </div>
          <div className="min-w-0 rounded-lg border border-neutral-200 bg-white p-6 lg:col-start-3 lg:row-start-2">
            <h2 className="text-base font-semibold">Open tasks</h2>
            <p className="mt-4 text-3xl font-semibold tracking-tight">36</p>
            <p className="mt-2 text-xs text-neutral-500">12 ready for review</p>
          </div>
          <div className="min-w-0 rounded-lg border border-neutral-200 bg-white p-6 sm:col-span-2 lg:col-span-1 lg:col-start-4 lg:row-span-2 lg:row-start-1">
            <h2 className="text-base font-semibold">Recent activity</h2>
            <ul role="list" className="mt-6 space-y-5">
              <li className="flex items-start gap-3">
                <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">AR</span>
                <div className="min-w-0">
                  <p className="text-sm font-medium">Alex Rivera</p>
                  <p className="mt-1 text-xs text-neutral-500">Updated item · <time dateTime="2026-10-10T09:41:00Z">09:41</time></p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">SL</span>
                <div className="min-w-0">
                  <p className="text-sm font-medium">Sam Lee</p>
                  <p className="mt-1 text-xs text-neutral-500">Added entry · <time dateTime="2026-10-10T09:26:00Z">09:26</time></p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">JM</span>
                <div className="min-w-0">
                  <p className="text-sm font-medium">Jordan Morgan</p>
                  <p className="mt-1 text-xs text-neutral-500">Shared document · <time dateTime="2026-10-10T09:12:00Z">09:12</time></p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">CK</span>
                <div className="min-w-0">
                  <p className="text-sm font-medium">Casey Kim</p>
                  <p className="mt-1 text-xs text-neutral-500">Completed task · <time dateTime="2026-10-10T08:54:00Z">08:54</time></p>
                </div>
              </li>
            </ul>
          </div>
          <div className="min-w-0 rounded-lg border border-neutral-200 bg-white p-6 sm:col-span-2 lg:col-start-1 lg:row-start-3">
            <h2 className="text-base font-semibold">Progress toward goals</h2>
            <div className="mt-5 space-y-4">
              <div>
                <div className="flex items-center justify-between gap-3 text-sm">
                  <span>Primary goal</span>
                  <span className="text-neutral-600">75%</span>
                </div>
                <div role="progressbar" aria-label="Primary goal" aria-valuemin={0} aria-valuemax={100} aria-valuenow={75} className="mt-2 h-2 overflow-hidden rounded-full bg-neutral-200 forced-colors:outline forced-colors:outline-[CanvasText]">
                  <div aria-hidden="true" className="h-full w-3/4 rounded-full bg-neutral-900 forced-colors:bg-[CanvasText]" />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between gap-3 text-sm">
                  <span>Secondary goal</span>
                  <span className="text-neutral-600">50%</span>
                </div>
                <div role="progressbar" aria-label="Secondary goal" aria-valuemin={0} aria-valuemax={100} aria-valuenow={50} className="mt-2 h-2 overflow-hidden rounded-full bg-neutral-200 forced-colors:outline forced-colors:outline-[CanvasText]">
                  <div aria-hidden="true" className="h-full w-1/2 rounded-full bg-neutral-900 forced-colors:bg-[CanvasText]" />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between gap-3 text-sm">
                  <span>Current milestone</span>
                  <span className="text-neutral-600">60%</span>
                </div>
                <div role="progressbar" aria-label="Current milestone" aria-valuemin={0} aria-valuemax={100} aria-valuenow={60} className="mt-2 h-2 overflow-hidden rounded-full bg-neutral-200 forced-colors:outline forced-colors:outline-[CanvasText]">
                  <div aria-hidden="true" className="h-full w-3/5 rounded-full bg-neutral-900 forced-colors:bg-[CanvasText]" />
                </div>
              </div>
            </div>
          </div>
          <div className="min-w-0 rounded-lg border border-neutral-200 bg-white p-6 sm:col-span-2 lg:col-start-3 lg:row-start-3">
            <div className="grid items-center gap-5 sm:grid-cols-[128px_minmax(0,1fr)]">
              <div role="img" aria-label="Image placeholder: announcement illustration" className="flex aspect-[4/3] items-center justify-center rounded-lg bg-neutral-100 text-neutral-400">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="9" cy="9" r="2" />
                  <path d="m21 15-5-5L5 21" />
                </svg>
              </div>
              <div>
                <h2 className="text-base font-semibold">Announcement title</h2>
                <p className="mt-2 text-sm text-pretty text-neutral-600">A short line explaining what changed and why it matters.</p>
                <a href="#" className="mt-4 inline-block text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
