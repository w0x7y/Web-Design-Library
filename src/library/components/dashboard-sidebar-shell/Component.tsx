export default function DashboardSidebarShell() {
  return (
    <section className="grid bg-white text-neutral-900 lg:grid-cols-[240px_minmax(0,1fr)]">
      <aside className="flex min-w-0 flex-col border-b border-neutral-200 bg-neutral-50 p-6 lg:border-r lg:border-b-0">
        <div className="flex items-center gap-2 font-semibold"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-6"><path d="M4 4h7v7H4V4M13 4h7v7h-7V4M4 13h7v7H4v-7M13 13h7v7h-7v-7" /></svg>Logo</div>
        <div role="region" aria-label="Main navigation" tabIndex={0} className="mt-6 overflow-x-auto p-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 lg:overflow-visible">
          <nav aria-label="Dashboard navigation" className="flex gap-2 lg:flex-col">
            <a href="#" aria-current="page" className="flex shrink-0 items-center gap-3 rounded-md border px-3 py-2 text-sm transition-colors border-neutral-300 bg-white font-semibold forced-colors:border-[ButtonText] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5"><path d="M3 3h7v7H3V3M14 3h7v7h-7V3M3 14h7v7H3v-7M14 14h7v7h-7v-7" /></svg>Overview</a>
            <a href="#" className="flex shrink-0 items-center gap-3 rounded-md border px-3 py-2 text-sm transition-colors border-transparent text-neutral-600 hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5"><path d="M5 3h14v18H5V3M9 7h6M9 11h6M9 15h4" /></svg>Reports</a>
            <a href="#" className="flex shrink-0 items-center gap-3 rounded-md border px-3 py-2 text-sm transition-colors border-transparent text-neutral-600 hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5"><path d="M3 12h4l3-7 4 14 3-7h4" /></svg>Activity</a>
            <a href="#" className="flex shrink-0 items-center gap-3 rounded-md border px-3 py-2 text-sm transition-colors border-transparent text-neutral-600 hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5"><path d="M3 7h18v14H3V7M3 7l3-4h12l3 4M9 11h6" /></svg>Items</a>
            <a href="#" className="flex shrink-0 items-center gap-3 rounded-md border px-3 py-2 text-sm transition-colors border-transparent text-neutral-600 hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M17 4a4 4 0 0 1 0 7M22 21v-2a4 4 0 0 0-3-4" /></svg>Members</a>
            <a href="#" className="flex shrink-0 items-center gap-3 rounded-md border px-3 py-2 text-sm transition-colors border-transparent text-neutral-600 hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5"><path d="M4 7h16M4 17h16M8 4v6M16 14v6" /></svg>Settings</a>
          </nav>
        </div>
        <div className="mt-8 hidden lg:block">
          <p className="px-3 text-xs font-medium text-neutral-500">Projects</p>
          <nav aria-label="Projects" className="mt-3 space-y-1">
            <a href="#" className="block rounded-md px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Project label</a>
            <a href="#" className="block rounded-md px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Pinned project</a>
            <a href="#" className="block rounded-md px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Shared project</a>
          </nav>
        </div>
        <div className="mt-auto hidden items-center gap-3 pt-8 lg:flex">
          <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">AR</span>
          <div>
            <p className="text-sm font-medium">Alex Rivera</p>
            <p className="text-xs text-neutral-500">Account label</p>
          </div>
        </div>
      </aside>
      <div className="min-w-0">
        <header className="flex flex-wrap items-center gap-3 border-b border-neutral-200 p-6">
          <div className="relative min-w-0 max-w-md flex-1 basis-full sm:basis-0">
            <label htmlFor="dashboard-sidebar-shell-search" className="sr-only">Search dashboard</label>
            <span className="pointer-events-none absolute top-2.5 left-3 text-neutral-500">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                <path d="M21 21l-5-5M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0" />
              </svg>
            </span>
            <input id="dashboard-sidebar-shell-search" type="search" placeholder="Search items" aria-describedby="dashboard-sidebar-shell-search-hint" className="h-10 w-full rounded-md border border-neutral-300 bg-white px-3 pl-10 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" />
            <p id="dashboard-sidebar-shell-search-hint" className="sr-only">Search by item name or keyword.</p>
          </div>
          <button type="button" aria-label="Notifications" className="inline-flex size-11 shrink-0 items-center justify-center rounded-md border border-neutral-300 bg-white text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
              <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" />
            </svg>
          </button>
          <div className="flex items-center gap-2">
            <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">AR</span>
            <span className="text-sm font-medium">Alex Rivera</span>
          </div>
        </header>
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Overview title</h1>
              <p className="mt-2 text-sm text-neutral-500">Oct 1–10, 2026</p>
            </div>
            <a href="#" className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">New report</a>
          </div>
          <dl className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="min-w-0 rounded-lg border border-neutral-200 bg-white p-6">
              <dt className="text-sm text-neutral-500">Total items</dt>
              <dd className="mt-2 text-3xl font-semibold tracking-tight">1,284<span className="ml-1 text-sm font-normal text-neutral-500"></span></dd>
              <dd className="mt-3 flex items-center gap-1 text-xs text-neutral-600">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0">
                  <path d="m7 14 5-5 5 5M12 9v10" />
                </svg>
                <span><span className="sr-only">Up </span>8.2% vs previous</span>
              </dd>
            </div>
            <div className="min-w-0 rounded-lg border border-neutral-200 bg-white p-6">
              <dt className="text-sm text-neutral-500">Active members</dt>
              <dd className="mt-2 text-3xl font-semibold tracking-tight">248<span className="ml-1 text-sm font-normal text-neutral-500"></span></dd>
              <dd className="mt-3 flex items-center gap-1 text-xs text-neutral-600">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0">
                  <path d="m7 14 5-5 5 5M12 9v10" />
                </svg>
                <span><span className="sr-only">Up </span>4.1% vs previous</span>
              </dd>
            </div>
            <div className="min-w-0 rounded-lg border border-neutral-200 bg-white p-6">
              <dt className="text-sm text-neutral-500">Open tasks</dt>
              <dd className="mt-2 text-3xl font-semibold tracking-tight">36<span className="ml-1 text-sm font-normal text-neutral-500"></span></dd>
              <dd className="mt-3 flex items-center gap-1 text-xs text-neutral-600">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0">
                  <path d="m7 10 5 5 5-5M12 15V5" />
                </svg>
                <span><span className="sr-only">Down </span>2.4% vs previous</span>
              </dd>
            </div>
            <div className="min-w-0 rounded-lg border border-neutral-200 bg-white p-6">
              <dt className="text-sm text-neutral-500">Completion</dt>
              <dd className="mt-2 text-3xl font-semibold tracking-tight">98.4<span className="ml-1 text-sm font-normal text-neutral-500">%</span></dd>
              <dd className="mt-3 flex items-center gap-1 text-xs text-neutral-600">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0">
                  <path d="m7 14 5-5 5 5M12 9v10" />
                </svg>
                <span><span className="sr-only">Up </span>1.2% vs previous</span>
              </dd>
            </div>
          </dl>
          <div className="mt-6 min-w-0 rounded-lg border border-neutral-200 bg-white p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-base font-semibold">Activity trend</h2>
              <p className="flex items-center gap-2 text-xs text-neutral-500"><span aria-hidden="true" className="size-2 rounded-full border border-neutral-500 bg-neutral-300" />Items per period</p>
            </div>
            <p className="mt-2 text-sm text-neutral-600">Total: 1,284 items in this period.</p>
            <svg aria-hidden="true" viewBox="0 0 240 128" fill="none" stroke="currentColor" strokeWidth="1.5" preserveAspectRatio="none" className="mt-6 h-48 w-full">
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
            <p className="sr-only">Twelve illustrative bars for the current period. Total: 1,284 items.</p>
            <div className="mt-3 flex justify-between text-xs text-neutral-500">
              <span>Oct 1</span>
              <span>Oct 5</span>
              <span>Oct 10</span>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-base font-semibold">Recent activity</h2>
            <div role="region" aria-label="Recent activity table" tabIndex={0} className="mt-4 overflow-x-auto rounded-lg border border-neutral-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
              <table className="w-full min-w-[32rem] text-left text-sm">
                <caption className="sr-only">Five recent changes and their status</caption>
                <thead className="bg-neutral-50 text-xs text-neutral-500">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-medium">Item</th>
                    <th scope="col" className="px-4 py-3 font-medium">Person</th>
                    <th scope="col" className="px-4 py-3 font-medium">Status</th>
                    <th scope="col" className="px-4 py-3 font-medium">Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-neutral-200">
                    <td className="px-4 py-3 font-medium">Created item</td>
                    <td className="px-4 py-3 text-neutral-600">Alex Rivera</td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">Created</span>
                    </td>
                    <td className="px-4 py-3 text-neutral-500">
                      <time dateTime="2026-10-10T09:41:00Z">09:41</time>
                    </td>
                  </tr>
                  <tr className="border-t border-neutral-200">
                    <td className="px-4 py-3 font-medium">Updated entry</td>
                    <td className="px-4 py-3 text-neutral-600">Sam Lee</td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">Updated</span>
                    </td>
                    <td className="px-4 py-3 text-neutral-500">
                      <time dateTime="2026-10-10T09:26:00Z">09:26</time>
                    </td>
                  </tr>
                  <tr className="border-t border-neutral-200">
                    <td className="px-4 py-3 font-medium">Shared document</td>
                    <td className="px-4 py-3 text-neutral-600">Jordan Morgan</td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">Shared</span>
                    </td>
                    <td className="px-4 py-3 text-neutral-500">
                      <time dateTime="2026-10-10T09:12:00Z">09:12</time>
                    </td>
                  </tr>
                  <tr className="border-t border-neutral-200">
                    <td className="px-4 py-3 font-medium">Assigned task</td>
                    <td className="px-4 py-3 text-neutral-600">Casey Kim</td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">Assigned</span>
                    </td>
                    <td className="px-4 py-3 text-neutral-500">
                      <time dateTime="2026-10-10T08:54:00Z">08:54</time>
                    </td>
                  </tr>
                  <tr className="border-t border-neutral-200">
                    <td className="px-4 py-3 font-medium">Reviewed item</td>
                    <td className="px-4 py-3 text-neutral-600">Alex Rivera</td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">Reviewed</span>
                    </td>
                    <td className="px-4 py-3 text-neutral-500">
                      <time dateTime="2026-10-10T08:32:00Z">08:32</time>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
