export default function DataTableSidebarFilters() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <header className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Items</h2>
            <p className="mt-3 text-sm text-neutral-500">24 results</p>
          </div>
          <a
            href="#"
            className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            Export
          </a>
        </header>
        <div className="mt-8 grid items-start gap-8 lg:grid-cols-[16rem_minmax(0,1fr)]">
          <aside aria-label="Item filters" className="min-w-0">
            <form role="search">
              <label htmlFor="data-table-sidebar-filters-search" className="block text-sm font-medium">
                Search items
              </label>
              <input
                id="data-table-sidebar-filters-search"
                type="search"
                name="search"
                placeholder="Search by name"
                className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              />
            </form>
            <div className="mt-6 grid items-start gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <details className="group rounded-lg border border-neutral-200 bg-white p-4" open>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
                  Status
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-4 shrink-0 transition-transform group-open:rotate-180"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </summary>
                <div className="mt-4 space-y-3">
                  <label className="flex cursor-pointer items-start gap-3 text-sm">
                    <input
                      name="status"
                      type="checkbox"
                      value="Active"
                      defaultChecked
                      className="mt-0.5 size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    />
                    <span className="min-w-0 flex-1">Active</span>
                    <span className="shrink-0 text-xs tabular-nums text-neutral-500">24</span>
                  </label>
                  <label className="flex cursor-pointer items-start gap-3 text-sm">
                    <input
                      name="status"
                      type="checkbox"
                      value="Pending"
                      className="mt-0.5 size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    />
                    <span className="min-w-0 flex-1">Pending</span>
                    <span className="shrink-0 text-xs tabular-nums text-neutral-500">12</span>
                  </label>
                  <label className="flex cursor-pointer items-start gap-3 text-sm">
                    <input
                      name="status"
                      type="checkbox"
                      value="Archived"
                      className="mt-0.5 size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    />
                    <span className="min-w-0 flex-1">Archived</span>
                    <span className="shrink-0 text-xs tabular-nums text-neutral-500">4</span>
                  </label>
                </div>
              </details>
              <details className="group rounded-lg border border-neutral-200 bg-white p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
                  Owner
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-4 shrink-0 transition-transform group-open:rotate-180"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </summary>
                <div className="mt-4 space-y-3">
                  <label className="flex cursor-pointer items-start gap-3 text-sm">
                    <input
                      name="owner"
                      type="checkbox"
                      value="Alex Rivera"
                      defaultChecked
                      className="mt-0.5 size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    />
                    <span className="min-w-0 flex-1">Alex Rivera</span>
                    <span className="shrink-0 text-xs tabular-nums text-neutral-500">24</span>
                  </label>
                  <label className="flex cursor-pointer items-start gap-3 text-sm">
                    <input
                      name="owner"
                      type="checkbox"
                      value="Jordan Lee"
                      className="mt-0.5 size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    />
                    <span className="min-w-0 flex-1">Jordan Lee</span>
                    <span className="shrink-0 text-xs tabular-nums text-neutral-500">10</span>
                  </label>
                  <label className="flex cursor-pointer items-start gap-3 text-sm">
                    <input
                      name="owner"
                      type="checkbox"
                      value="Sam Taylor"
                      className="mt-0.5 size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    />
                    <span className="min-w-0 flex-1">Sam Taylor</span>
                    <span className="shrink-0 text-xs tabular-nums text-neutral-500">6</span>
                  </label>
                </div>
              </details>
              <details className="group rounded-lg border border-neutral-200 bg-white p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
                  Date
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-4 shrink-0 transition-transform group-open:rotate-180"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </summary>
                <div className="mt-4 space-y-3">
                  <label className="flex cursor-pointer items-start gap-3 text-sm">
                    <input
                      name="date"
                      type="checkbox"
                      value="Today"
                      className="mt-0.5 size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    />
                    <span className="min-w-0 flex-1">Today</span>
                    <span className="shrink-0 text-xs tabular-nums text-neutral-500">4</span>
                  </label>
                  <label className="flex cursor-pointer items-start gap-3 text-sm">
                    <input
                      name="date"
                      type="checkbox"
                      value="This week"
                      className="mt-0.5 size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    />
                    <span className="min-w-0 flex-1">This week</span>
                    <span className="shrink-0 text-xs tabular-nums text-neutral-500">12</span>
                  </label>
                  <label className="flex cursor-pointer items-start gap-3 text-sm">
                    <input
                      name="date"
                      type="checkbox"
                      value="This month"
                      className="mt-0.5 size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    />
                    <span className="min-w-0 flex-1">This month</span>
                    <span className="shrink-0 text-xs tabular-nums text-neutral-500">24</span>
                  </label>
                </div>
              </details>
            </div>
            <a
              href="#"
              className="mt-6 inline-block text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Clear filters
            </a>
          </aside>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm text-neutral-500">Applied filters</span>
              <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium gap-2">
                Active
                <a
                  href="#"
                  aria-label="Remove Active filter"
                  className="rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-3"
                  >
                    <path d="m6 6 12 12M6 18 18 6" />
                  </svg>
                </a>
              </span>
              <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium gap-2">
                Alex Rivera
                <a
                  href="#"
                  aria-label="Remove Alex Rivera filter"
                  className="rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-3"
                  >
                    <path d="m6 6 12 12M6 18 18 6" />
                  </svg>
                </a>
              </span>
            </div>
            <div
              role="region"
              tabIndex={0}
              aria-label="Filtered items table"
              className="mt-4 min-w-0 overflow-x-auto rounded-lg border border-neutral-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              <table className="w-full min-w-[36rem]">
                <caption className="sr-only">Filtered items with owner, status, date and amount</caption>
                <thead className="bg-neutral-50">
                  <tr>
                    <th scope="col" className="px-4 py-3 text-left text-sm font-medium text-neutral-600">
                      Name
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-sm font-medium text-neutral-600">
                      Owner
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-sm font-medium text-neutral-600">
                      Status
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-sm font-medium text-neutral-600">
                      Date
                    </th>
                    <th scope="col" className="px-4 py-3 text-right text-sm font-medium text-neutral-600">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-neutral-200">
                    <th scope="row" className="px-4 py-4 text-left text-sm font-medium">
                      Item 001
                    </th>
                    <td className="px-4 py-4 text-sm text-neutral-600">Alex Rivera</td>
                    <td className="px-4 py-4">
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Active
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-neutral-600">Mar 14, 2026</td>
                    <td className="px-4 py-4 text-right text-sm tabular-nums">$240.00</td>
                  </tr>
                  <tr className="border-t border-neutral-200">
                    <th scope="row" className="px-4 py-4 text-left text-sm font-medium">
                      Item 002
                    </th>
                    <td className="px-4 py-4 text-sm text-neutral-600">Alex Rivera</td>
                    <td className="px-4 py-4">
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Active
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-neutral-600">Mar 13, 2026</td>
                    <td className="px-4 py-4 text-right text-sm tabular-nums">$160.00</td>
                  </tr>
                  <tr className="border-t border-neutral-200">
                    <th scope="row" className="px-4 py-4 text-left text-sm font-medium">
                      Item 003
                    </th>
                    <td className="px-4 py-4 text-sm text-neutral-600">Alex Rivera</td>
                    <td className="px-4 py-4">
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Active
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-neutral-600">Mar 12, 2026</td>
                    <td className="px-4 py-4 text-right text-sm tabular-nums">$200.00</td>
                  </tr>
                  <tr className="border-t border-neutral-200">
                    <th scope="row" className="px-4 py-4 text-left text-sm font-medium">
                      Item 004
                    </th>
                    <td className="px-4 py-4 text-sm text-neutral-600">Alex Rivera</td>
                    <td className="px-4 py-4">
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Active
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-neutral-600">Mar 11, 2026</td>
                    <td className="px-4 py-4 text-right text-sm tabular-nums">$120.00</td>
                  </tr>
                  <tr className="border-t border-neutral-200">
                    <th scope="row" className="px-4 py-4 text-left text-sm font-medium">
                      Item 005
                    </th>
                    <td className="px-4 py-4 text-sm text-neutral-600">Alex Rivera</td>
                    <td className="px-4 py-4">
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Active
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-neutral-600">Mar 10, 2026</td>
                    <td className="px-4 py-4 text-right text-sm tabular-nums">$300.00</td>
                  </tr>
                  <tr className="border-t border-neutral-200">
                    <th scope="row" className="px-4 py-4 text-left text-sm font-medium">
                      Item 006
                    </th>
                    <td className="px-4 py-4 text-sm text-neutral-600">Alex Rivera</td>
                    <td className="px-4 py-4">
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Active
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-sm text-neutral-600">Mar 09, 2026</td>
                    <td className="px-4 py-4 text-right text-sm tabular-nums">$180.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-neutral-500">Showing 1–6 of 24</p>
          </div>
        </div>
      </div>
    </section>
  )
}
