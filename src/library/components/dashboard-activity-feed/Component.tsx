export default function DashboardActivityFeed() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Activity title</h1>
          <nav aria-label="Activity filters" className="flex flex-wrap gap-2">
            <a href="#" aria-current="true" className="border-b px-2 py-2 text-sm font-medium hover:text-neutral-900 border-neutral-900 text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">All</a>
            <a href="#" className="border-b px-2 py-2 text-sm font-medium hover:text-neutral-900 border-transparent text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Comments</a>
            <a href="#" className="border-b px-2 py-2 text-sm font-medium hover:text-neutral-900 border-transparent text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Changes</a>
          </nav>
        </header>
        <section aria-labelledby="dashboard-activity-feed-today" className="mt-8">
          <h2 id="dashboard-activity-feed-today" className="text-base font-semibold">Today</h2>
          <ol role="list" className="mt-5">
            <li className="relative pb-6">
              <span aria-hidden="true" className="absolute top-8 bottom-0 left-4 w-px bg-neutral-200" />
              <div className="flex items-start gap-4">
                <span aria-hidden="true" className="relative flex size-8 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-xs font-medium text-neutral-600">AR</span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <p className="text-sm text-neutral-600"><span className="font-medium text-neutral-900">Alex Rivera</span> commented on <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Item name</a>.</p>
                    <time dateTime="2026-10-10T09:41:00Z" className="shrink-0 text-xs text-neutral-500">09:41</time>
                  </div>
                  <blockquote className="mt-3 rounded-lg bg-neutral-50 p-4 text-sm text-pretty text-neutral-600">
                    <p>Quoted comment that adds context to the change.</p>
                  </blockquote>
                </div>
              </div>
            </li>
            <li className="relative pb-6">
              <span aria-hidden="true" className="absolute top-8 bottom-0 left-4 w-px bg-neutral-200" />
              <div className="flex items-start gap-4">
                <span aria-hidden="true" className="relative flex size-8 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-xs font-medium text-neutral-600">SL</span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <p className="text-sm text-neutral-600"><span className="font-medium text-neutral-900">Sam Lee</span> attached a file to <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Document title</a>.</p>
                    <time dateTime="2026-10-10T09:26:00Z" className="shrink-0 text-xs text-neutral-500">09:26</time>
                  </div>
                  <a href="#" className="mt-3 inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-white p-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0"><path d="M14 2H6v20h12V6l-4-4M14 2v5h5" /></svg>File name.pdf</a>
                </div>
              </div>
            </li>
            <li className="relative pb-6">
              <span aria-hidden="true" className="absolute top-8 bottom-0 left-4 w-px bg-neutral-200" />
              <div className="flex items-start gap-4">
                <span aria-hidden="true" className="relative flex size-8 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-xs font-medium text-neutral-600">JM</span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <p className="text-sm text-neutral-600"><span className="font-medium text-neutral-900">Jordan Morgan</span> updated <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Entry title</a>.</p>
                    <time dateTime="2026-10-10T09:12:00Z" className="shrink-0 text-xs text-neutral-500">09:12</time>
                  </div>
                </div>
              </div>
            </li>
            <li className="relative pb-0">
              <div className="flex items-start gap-4">
                <span aria-hidden="true" className="relative flex size-8 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-xs font-medium text-neutral-600">CK</span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <p className="text-sm text-neutral-600"><span className="font-medium text-neutral-900">Casey Kim</span> completed <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Task name</a>.</p>
                    <time dateTime="2026-10-10T08:54:00Z" className="shrink-0 text-xs text-neutral-500">08:54</time>
                  </div>
                </div>
              </div>
            </li>
          </ol>
        </section>
        <section aria-labelledby="dashboard-activity-feed-yesterday" className="mt-8">
          <h2 id="dashboard-activity-feed-yesterday" className="text-base font-semibold">Yesterday</h2>
          <ol role="list" className="mt-5">
            <li className="relative pb-6">
              <span aria-hidden="true" className="absolute top-8 bottom-0 left-4 w-px bg-neutral-200" />
              <div className="flex items-start gap-4">
                <span aria-hidden="true" className="relative flex size-8 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-xs font-medium text-neutral-600">SL</span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <p className="text-sm text-neutral-600"><span className="font-medium text-neutral-900">Sam Lee</span> created <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">New item title</a>.</p>
                    <time dateTime="2026-10-09T16:35:00Z" className="shrink-0 text-xs text-neutral-500">16:35</time>
                  </div>
                </div>
              </div>
            </li>
            <li className="relative pb-6">
              <span aria-hidden="true" className="absolute top-8 bottom-0 left-4 w-px bg-neutral-200" />
              <div className="flex items-start gap-4">
                <span aria-hidden="true" className="relative flex size-8 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-xs font-medium text-neutral-600">AR</span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <p className="text-sm text-neutral-600"><span className="font-medium text-neutral-900">Alex Rivera</span> shared <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Group name</a>.</p>
                    <time dateTime="2026-10-09T14:20:00Z" className="shrink-0 text-xs text-neutral-500">14:20</time>
                  </div>
                </div>
              </div>
            </li>
            <li className="relative pb-0">
              <div className="flex items-start gap-4">
                <span aria-hidden="true" className="relative flex size-8 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-xs font-medium text-neutral-600">JM</span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <p className="text-sm text-neutral-600"><span className="font-medium text-neutral-900">Jordan Morgan</span> changed the status of <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Review item</a>.</p>
                    <time dateTime="2026-10-09T11:08:00Z" className="shrink-0 text-xs text-neutral-500">11:08</time>
                  </div>
                </div>
              </div>
            </li>
          </ol>
        </section>
        <a href="#" className="mt-6 inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Load older activity</a>
      </div>
    </section>
  )
}
