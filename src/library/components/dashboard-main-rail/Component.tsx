export default function DashboardMainRail() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-200 pb-6">
          <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Overview title</h1>
          <p className="text-sm text-neutral-500">Saturday, Oct 10, 2026</p>
        </header>
        <div className="mt-8 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <aside className="order-1 min-w-0 rounded-lg bg-neutral-50 p-6 lg:order-2">
            <h2 className="text-sm font-medium text-neutral-500">Summary label</h2>
            <p className="mt-3 text-5xl font-semibold tracking-tight">24</p>
            <p className="mt-2 text-sm text-neutral-600">Items planned for today</p>
            <dl className="mt-6 grid grid-cols-2 gap-4">
              <div>
                <dt className="text-xs text-neutral-500">Completed</dt>
                <dd className="mt-1 text-sm font-medium">18</dd>
              </div>
              <div>
                <dt className="text-xs text-neutral-500">Remaining</dt>
                <dd className="mt-1 text-sm font-medium">6</dd>
              </div>
              <div>
                <dt className="text-xs text-neutral-500">In review</dt>
                <dd className="mt-1 text-sm font-medium">4</dd>
              </div>
              <div>
                <dt className="text-xs text-neutral-500">Capacity</dt>
                <dd className="mt-1 text-sm font-medium">32</dd>
              </div>
            </dl>
            <details className="mt-6 border-t border-neutral-200 pt-4">
              <summary className="cursor-pointer text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">More context</summary>
              <p className="mt-3 text-sm text-pretty text-neutral-600">A short note explaining how the summary is calculated and which items need attention before the next scheduled step.</p>
            </details>
          </aside>
          <div className="order-2 min-w-0 lg:order-1">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-base font-semibold">Schedule</h2>
              <a href="#" className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Filter schedule</a>
            </div>
            <ol role="list" className="mt-5">
              <li className="grid grid-cols-[56px_minmax(0,1fr)] items-start gap-x-4 gap-y-2 border-t border-neutral-200 py-5 sm:grid-cols-[56px_minmax(0,1fr)_auto]">
                <time dateTime="2026-10-10T09:00:00Z" className="row-span-2 text-sm text-neutral-500 sm:row-span-1">09:00</time>
                <div>
                  <h3 className="text-base font-semibold">First scheduled item</h3>
                  <p className="mt-1 text-xs text-neutral-500">Short context for the item</p>
                </div>
                <div className="col-start-2 sm:col-start-auto">
                  <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">Ready</span>
                </div>
              </li>
              <li className="grid grid-cols-[56px_minmax(0,1fr)] items-start gap-x-4 gap-y-2 border-t border-neutral-200 py-5 sm:grid-cols-[56px_minmax(0,1fr)_auto]">
                <time dateTime="2026-10-10T10:30:00Z" className="row-span-2 text-sm text-neutral-500 sm:row-span-1">10:30</time>
                <div>
                  <h3 className="text-base font-semibold">Next appointment title</h3>
                  <p className="mt-1 text-xs text-neutral-500">Supporting detail for this slot</p>
                </div>
                <div className="col-start-2 sm:col-start-auto">
                  <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">Pending</span>
                </div>
              </li>
              <li className="grid grid-cols-[56px_minmax(0,1fr)] items-start gap-x-4 gap-y-2 border-t border-neutral-200 py-5 sm:grid-cols-[56px_minmax(0,1fr)_auto]">
                <time dateTime="2026-10-10T12:00:00Z" className="row-span-2 text-sm text-neutral-500 sm:row-span-1">12:00</time>
                <div>
                  <h3 className="text-base font-semibold">Midday entry name</h3>
                  <p className="mt-1 text-xs text-neutral-500">A note about the next step</p>
                </div>
                <div className="col-start-2 sm:col-start-auto">
                  <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">Ready</span>
                </div>
              </li>
              <li className="grid grid-cols-[56px_minmax(0,1fr)] items-start gap-x-4 gap-y-2 border-t border-neutral-200 py-5 sm:grid-cols-[56px_minmax(0,1fr)_auto]">
                <time dateTime="2026-10-10T14:00:00Z" className="row-span-2 text-sm text-neutral-500 sm:row-span-1">14:00</time>
                <div>
                  <h3 className="text-base font-semibold">Review session title</h3>
                  <p className="mt-1 text-xs text-neutral-500">Context for the review</p>
                </div>
                <div className="col-start-2 sm:col-start-auto">
                  <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">In review</span>
                </div>
              </li>
              <li className="grid grid-cols-[56px_minmax(0,1fr)] items-start gap-x-4 gap-y-2 border-t border-neutral-200 py-5 sm:grid-cols-[56px_minmax(0,1fr)_auto]">
                <time dateTime="2026-10-10T16:30:00Z" className="row-span-2 text-sm text-neutral-500 sm:row-span-1">16:30</time>
                <div>
                  <h3 className="text-base font-semibold">Final scheduled item</h3>
                  <p className="mt-1 text-xs text-neutral-500">Closing detail for the day</p>
                </div>
                <div className="col-start-2 sm:col-start-auto">
                  <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">Pending</span>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
