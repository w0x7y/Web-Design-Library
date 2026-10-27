export default function EmptyStateAllCaughtUp() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <div className="text-center">
          <span aria-hidden="true" className="mx-auto flex size-10 items-center justify-center rounded-md bg-neutral-100 text-neutral-900">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
              <path d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </span>
          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">All caught up</h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-pretty text-neutral-600">Every item in this queue is done. New items appear here as soon as they arrive.</p>
        </div>
        <div className="mt-10 rounded-lg border border-neutral-200 bg-white">
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-b border-neutral-200 px-6 py-4">
            <h2 className="text-base font-semibold">Recently completed</h2>
            <a href="#" className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">View all completed</a>
          </div>
          <ul role="list" className="divide-y divide-neutral-200">
            <li className="flex items-start gap-3 px-6 py-4">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 text-neutral-400">
                <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">Title of the most recent completed item</p>
                <p className="mt-1 text-xs text-neutral-500">Done by you</p>
              </div>
              <time dateTime="2026-10-26T09:40" className="shrink-0 text-sm text-neutral-500 tabular-nums">09:40</time>
            </li>
            <li className="flex items-start gap-3 px-6 py-4">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 text-neutral-400">
                <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">Title of an earlier completed item</p>
                <p className="mt-1 text-xs text-neutral-500">Done by Alex Rivera</p>
              </div>
              <time dateTime="2026-10-26T09:12" className="shrink-0 text-sm text-neutral-500 tabular-nums">09:12</time>
            </li>
            <li className="flex items-start gap-3 px-6 py-4">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 text-neutral-400">
                <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">Title of the oldest item shown</p>
                <p className="mt-1 text-xs text-neutral-500">Closed by an automation rule</p>
              </div>
              <time dateTime="2026-10-26T08:55" className="shrink-0 text-sm text-neutral-500 tabular-nums">08:55</time>
            </li>
          </ul>
        </div>
        <nav aria-labelledby="empty-state-all-caught-up-queues" className="mt-10">
          <h2 id="empty-state-all-caught-up-queues" className="text-sm font-medium text-neutral-500">Other queues</h2>
          <ul role="list" className="mt-3 grid gap-3 sm:grid-cols-3">
            <li>
              <a href="#" className="flex items-center justify-between gap-3 rounded-md border border-neutral-300 bg-white px-4 py-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
                Assigned to me{" "}
                <span className="text-neutral-500 tabular-nums">4 open</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-between gap-3 rounded-md border border-neutral-300 bg-white px-4 py-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
                Mentions{" "}
                <span className="text-neutral-500 tabular-nums">2 open</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-between gap-3 rounded-md border border-neutral-300 bg-white px-4 py-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
                Waiting on others{" "}
                <span className="text-neutral-500 tabular-nums">7 open</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  )
}
