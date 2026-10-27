export default function DashboardServiceStatus() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <header className="flex flex-wrap items-center justify-between gap-6">
          <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">System status</h1>
          <a
            href="#"
            className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            Subscribe to updates
          </a>
        </header>
        <div className="mt-8 flex flex-col gap-4 rounded-lg border border-neutral-900 bg-neutral-900 p-6 text-white sm:flex-row sm:items-center">
          <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-md bg-white/10">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
              <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
          </span>
          <div className="min-w-0 flex-1">
            <h2 className="text-lg font-semibold">Degraded performance on one service</h2>
            <p className="mt-1 text-sm text-neutral-300">Short summary of the current impact and when the next update is due.</p>
          </div>
          <p className="text-sm text-neutral-300">
            Updated <time dateTime="2026-10-26T09:41:00Z">09:41 UTC</time>
          </p>
        </div>
        <div className="mt-12 grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <section aria-labelledby="dashboard-service-status-services">
            <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
              <h2 id="dashboard-service-status-services" className="text-lg font-semibold">Services</h2>
              <ul role="list" aria-label="Uptime legend" className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-neutral-500">
                <li className="flex items-center gap-2">
                  <span aria-hidden="true" className="flex h-4 items-end">
                    <span className="h-4 w-1.5 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                  </span>
                  Operational
                </li>
                <li className="flex items-center gap-2">
                  <span aria-hidden="true" className="flex h-4 items-end">
                    <span className="h-2.5 w-1.5 rounded-sm bg-neutral-600 forced-colors:bg-[CanvasText]"></span>
                  </span>
                  Degraded
                </li>
                <li className="flex items-center gap-2">
                  <span aria-hidden="true" className="flex h-4 items-end">
                    <span className="h-1 w-1.5 rounded-sm bg-neutral-900 forced-colors:bg-[CanvasText]"></span>
                  </span>
                  Outage
                </li>
              </ul>
            </div>
            <ul role="list" className="mt-4 divide-y divide-neutral-200 rounded-lg border border-neutral-200">
            <li className="p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                <h3 className="text-base font-semibold">Web application</h3>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4">
                    <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  Operational
                </span>
              </div>
              <div role="img" aria-label="Web application, last 30 days: 29 days operational, 1 degraded" className="mt-4 flex h-8 items-end gap-0.5 sm:gap-1">
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-5 flex-1 rounded-sm bg-neutral-600 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
              </div>
              <p className="mt-2 flex justify-between gap-4 text-xs text-neutral-500">
                <span>30 days ago</span>
                <span className="font-medium text-neutral-900">99.98% uptime</span>
                <span>Today</span>
              </p>
            </li>
            <li className="p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                <h3 className="text-base font-semibold">Public API</h3>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-900 bg-neutral-900 px-2.5 py-0.5 text-xs font-medium text-white">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4">
                    <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                  </svg>
                  Degraded
                </span>
              </div>
              <div role="img" aria-label="Public API, last 30 days: 28 days operational, 1 degraded, 1 with an outage" className="mt-4 flex h-8 items-end gap-0.5 sm:gap-1">
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-2 flex-1 rounded-sm bg-neutral-900 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-5 flex-1 rounded-sm bg-neutral-600 forced-colors:bg-[CanvasText]"></span>
              </div>
              <p className="mt-2 flex justify-between gap-4 text-xs text-neutral-500">
                <span>30 days ago</span>
                <span className="font-medium text-neutral-900">99.71% uptime</span>
                <span>Today</span>
              </p>
            </li>
            <li className="p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                <h3 className="text-base font-semibold">Background jobs</h3>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4">
                    <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  Operational
                </span>
              </div>
              <div role="img" aria-label="Background jobs, last 30 days: 30 days operational" className="mt-4 flex h-8 items-end gap-0.5 sm:gap-1">
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
              </div>
              <p className="mt-2 flex justify-between gap-4 text-xs text-neutral-500">
                <span>30 days ago</span>
                <span className="font-medium text-neutral-900">100% uptime</span>
                <span>Today</span>
              </p>
            </li>
            <li className="p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                <h3 className="text-base font-semibold">Email delivery</h3>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4">
                    <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  Operational
                </span>
              </div>
              <div role="img" aria-label="Email delivery, last 30 days: 28 days operational, 2 degraded" className="mt-4 flex h-8 items-end gap-0.5 sm:gap-1">
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-5 flex-1 rounded-sm bg-neutral-600 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-5 flex-1 rounded-sm bg-neutral-600 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
                <span className="h-8 flex-1 rounded-sm bg-neutral-300 forced-colors:bg-[CanvasText]"></span>
              </div>
              <p className="mt-2 flex justify-between gap-4 text-xs text-neutral-500">
                <span>30 days ago</span>
                <span className="font-medium text-neutral-900">99.92% uptime</span>
                <span>Today</span>
              </p>
            </li>
            </ul>
          </section>
          <section aria-labelledby="dashboard-service-status-incidents">
            <h2 id="dashboard-service-status-incidents" className="text-lg font-semibold">Recent incidents</h2>
            <ol role="list" className="mt-4 border-b border-neutral-200">
              <li className="border-t border-neutral-200 py-5">
                <div className="flex items-center justify-between gap-4">
                  <time dateTime="2026-10-26T08:52:00Z" className="text-sm text-neutral-500">Oct 26, 08:52</time>
                  <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">Monitoring</span>
                </div>
                <h3 className="mt-2 text-base font-semibold">Slower responses from the public API</h3>
                <p className="mt-1 text-sm text-neutral-600">A fix is in place and response times are returning to normal.</p>
              </li>
              <li className="border-t border-neutral-200 py-5">
                <div className="flex items-center justify-between gap-4">
                  <time dateTime="2026-10-19T14:10:00Z" className="text-sm text-neutral-500">Oct 19, 14:10</time>
                  <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">Resolved</span>
                </div>
                <h3 className="mt-2 text-base font-semibold">Delayed email delivery</h3>
                <p className="mt-1 text-sm text-neutral-600">Queued messages were sent within 40 minutes of the delay.</p>
              </li>
              <li className="border-t border-neutral-200 py-5">
                <div className="flex items-center justify-between gap-4">
                  <time dateTime="2026-10-14T02:30:00Z" className="text-sm text-neutral-500">Oct 14, 02:30</time>
                  <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">Resolved</span>
                </div>
                <h3 className="mt-2 text-base font-semibold">Public API unavailable during maintenance</h3>
                <p className="mt-1 text-sm text-neutral-600">Requests failed for 12 minutes while a database update finished.</p>
              </li>
            </ol>
            <p className="mt-5 text-sm">
              <a
                href="#"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                View all incidents
              </a>
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}
