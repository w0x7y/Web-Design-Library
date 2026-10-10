export default function DataTableToolbarPagination() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <header className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Items</h2>
            <p className="mt-3 text-base text-neutral-600">A short summary of the records and their current status.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#"
              className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Export
            </a>
            <a
              href="#"
              className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              New item
            </a>
          </div>
        </header>
        <nav aria-label="Item status" className="mt-8 flex flex-wrap gap-x-6 border-b border-neutral-200">
          <a
            href="#"
            aria-current="page"
            className="inline-flex items-center gap-2 border-b-2 border-neutral-900 text-neutral-900 pb-4 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            All
            <span className="sr-only sm:not-sr-only">
              <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                64
              </span>
            </span>
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 border-b-2 border-transparent text-neutral-600 hover:text-neutral-900 pb-4 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            Active
            <span className="sr-only sm:not-sr-only">
              <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                48
              </span>
            </span>
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 border-b-2 border-transparent text-neutral-600 hover:text-neutral-900 pb-4 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            Pending
            <span className="sr-only sm:not-sr-only">
              <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                12
              </span>
            </span>
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 border-b-2 border-transparent text-neutral-600 hover:text-neutral-900 pb-4 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            Archived
            <span className="sr-only sm:not-sr-only">
              <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                4
              </span>
            </span>
          </a>
        </nav>
        <form role="search" className="mt-6 flex flex-col gap-3 sm:flex-row">
          <div className="relative min-w-0 flex-1">
            <label htmlFor="data-table-toolbar-pagination-search" className="sr-only">
              Search items
            </label>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-neutral-500"
            >
              <path d="M21 21l-5-5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0" />
            </svg>
            <input
              id="data-table-toolbar-pagination-search"
              name="search"
              type="search"
              placeholder="Search items"
              className="h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 pl-10"
            />
          </div>
          <div>
            <label htmlFor="data-table-toolbar-pagination-status" className="sr-only">
              Status
            </label>
            <select
              id="data-table-toolbar-pagination-status"
              name="status"
              className="h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 sm:w-40"
            >
              <option>All statuses</option>
              <option>Active</option>
              <option>Pending</option>
              <option>Archived</option>
            </select>
          </div>
          <button
            type="button"
            className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            More filters
          </button>
        </form>
        <div
          role="region"
          tabIndex={0}
          aria-label="Items table"
          className="mt-6 min-w-0 overflow-x-auto rounded-lg border border-neutral-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
        >
          <table className="w-full min-w-[52rem]">
            <caption className="sr-only">Item identities, dates, units, amounts and statuses</caption>
            <thead className="bg-neutral-50">
              <tr>
                <th scope="col" className="px-4 py-3 text-left text-sm font-medium text-neutral-600">
                  <a
                    href="#"
                    aria-label="Sort by id"
                    className="inline-flex items-center gap-2 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  >
                    ID
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-4 shrink-0"
                    >
                      <path d="m8 14 4-4 4 4" />
                    </svg>
                  </a>
                </th>
                <th scope="col" className="px-4 py-3 text-left text-sm font-medium text-neutral-600">
                  <a
                    href="#"
                    aria-label="Sort by name"
                    className="inline-flex items-center gap-2 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  >
                    Name
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-4 shrink-0"
                    >
                      <path d="m8 14 4-4 4 4" />
                    </svg>
                  </a>
                </th>
                <th
                  scope="col"
                  aria-sort="descending"
                  className="px-4 py-3 text-left text-sm font-medium text-neutral-600"
                >
                  <a
                    href="#"
                    aria-label="Sort by date"
                    className="inline-flex items-center gap-2 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  >
                    Date
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-4 shrink-0"
                    >
                      <path d="m8 10 4 4 4-4" />
                    </svg>
                  </a>
                </th>
                <th scope="col" className="px-4 py-3 text-right text-sm font-medium text-neutral-600">
                  <a
                    href="#"
                    aria-label="Sort by units"
                    className="inline-flex items-center gap-2 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  >
                    Units
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-4 shrink-0"
                    >
                      <path d="m8 14 4-4 4 4" />
                    </svg>
                  </a>
                </th>
                <th scope="col" className="px-4 py-3 text-right text-sm font-medium text-neutral-600">
                  <a
                    href="#"
                    aria-label="Sort by amount"
                    className="inline-flex items-center gap-2 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  >
                    Amount
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-4 shrink-0"
                    >
                      <path d="m8 14 4-4 4 4" />
                    </svg>
                  </a>
                </th>
                <th scope="col" className="px-4 py-3 text-left text-sm font-medium text-neutral-600">
                  <a
                    href="#"
                    aria-label="Sort by status"
                    className="inline-flex items-center gap-2 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  >
                    Status
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-4 shrink-0"
                    >
                      <path d="m8 14 4-4 4 4" />
                    </svg>
                  </a>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-neutral-200 hover:bg-neutral-50">
                <td className="px-4 py-4 text-sm">
                  <a
                    href="#"
                    aria-label="View item 001"
                    className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  >
                    001
                  </a>
                </td>
                <th scope="row" className="px-4 py-4 text-left">
                  <span className="block text-sm font-medium">Alex Rivera</span>
                  <span className="mt-1 block text-xs font-normal text-neutral-500">name@example.com</span>
                </th>
                <td className="whitespace-nowrap px-4 py-4 text-sm text-neutral-600">Mar 14, 2026</td>
                <td className="px-4 py-4 text-right text-sm tabular-nums">12</td>
                <td className="px-4 py-4 text-right text-sm tabular-nums">$240.00</td>
                <td className="px-4 py-4">
                  <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                    Active
                  </span>
                </td>
              </tr>
              <tr className="border-t border-neutral-200 hover:bg-neutral-50">
                <td className="px-4 py-4 text-sm">
                  <a
                    href="#"
                    aria-label="View item 002"
                    className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  >
                    002
                  </a>
                </td>
                <th scope="row" className="px-4 py-4 text-left">
                  <span className="block text-sm font-medium">Jordan Lee</span>
                  <span className="mt-1 block text-xs font-normal text-neutral-500">jordan@example.com</span>
                </th>
                <td className="whitespace-nowrap px-4 py-4 text-sm text-neutral-600">Mar 13, 2026</td>
                <td className="px-4 py-4 text-right text-sm tabular-nums">8</td>
                <td className="px-4 py-4 text-right text-sm tabular-nums">$160.00</td>
                <td className="px-4 py-4">
                  <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                    Pending
                  </span>
                </td>
              </tr>
              <tr className="border-t border-neutral-200 hover:bg-neutral-50">
                <td className="px-4 py-4 text-sm">
                  <a
                    href="#"
                    aria-label="View item 003"
                    className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  >
                    003
                  </a>
                </td>
                <th scope="row" className="px-4 py-4 text-left">
                  <span className="block text-sm font-medium">Sam Taylor</span>
                  <span className="mt-1 block text-xs font-normal text-neutral-500">sam@example.com</span>
                </th>
                <td className="whitespace-nowrap px-4 py-4 text-sm text-neutral-600">Mar 12, 2026</td>
                <td className="px-4 py-4 text-right text-sm tabular-nums">10</td>
                <td className="px-4 py-4 text-right text-sm tabular-nums">$200.00</td>
                <td className="px-4 py-4">
                  <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                    Active
                  </span>
                </td>
              </tr>
              <tr className="border-t border-neutral-200 hover:bg-neutral-50">
                <td className="px-4 py-4 text-sm">
                  <a
                    href="#"
                    aria-label="View item 004"
                    className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  >
                    004
                  </a>
                </td>
                <th scope="row" className="px-4 py-4 text-left">
                  <span className="block text-sm font-medium">Casey Morgan</span>
                  <span className="mt-1 block text-xs font-normal text-neutral-500">casey@example.com</span>
                </th>
                <td className="whitespace-nowrap px-4 py-4 text-sm text-neutral-600">Mar 11, 2026</td>
                <td className="px-4 py-4 text-right text-sm tabular-nums">6</td>
                <td className="px-4 py-4 text-right text-sm tabular-nums">$120.00</td>
                <td className="px-4 py-4">
                  <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                    Archived
                  </span>
                </td>
              </tr>
              <tr className="border-t border-neutral-200 hover:bg-neutral-50">
                <td className="px-4 py-4 text-sm">
                  <a
                    href="#"
                    aria-label="View item 005"
                    className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  >
                    005
                  </a>
                </td>
                <th scope="row" className="px-4 py-4 text-left">
                  <span className="block text-sm font-medium">Riley Chen</span>
                  <span className="mt-1 block text-xs font-normal text-neutral-500">riley@example.com</span>
                </th>
                <td className="whitespace-nowrap px-4 py-4 text-sm text-neutral-600">Mar 10, 2026</td>
                <td className="px-4 py-4 text-right text-sm tabular-nums">15</td>
                <td className="px-4 py-4 text-right text-sm tabular-nums">$300.00</td>
                <td className="px-4 py-4">
                  <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                    Active
                  </span>
                </td>
              </tr>
              <tr className="border-t border-neutral-200 hover:bg-neutral-50">
                <td className="px-4 py-4 text-sm">
                  <a
                    href="#"
                    aria-label="View item 006"
                    className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  >
                    006
                  </a>
                </td>
                <th scope="row" className="px-4 py-4 text-left">
                  <span className="block text-sm font-medium">Morgan Blake</span>
                  <span className="mt-1 block text-xs font-normal text-neutral-500">morgan@example.com</span>
                </th>
                <td className="whitespace-nowrap px-4 py-4 text-sm text-neutral-600">Mar 09, 2026</td>
                <td className="px-4 py-4 text-right text-sm tabular-nums">9</td>
                <td className="px-4 py-4 text-right text-sm tabular-nums">$180.00</td>
                <td className="px-4 py-4">
                  <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                    Pending
                  </span>
                </td>
              </tr>
              <tr className="border-t border-neutral-200 hover:bg-neutral-50">
                <td className="px-4 py-4 text-sm">
                  <a
                    href="#"
                    aria-label="View item 007"
                    className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  >
                    007
                  </a>
                </td>
                <th scope="row" className="px-4 py-4 text-left">
                  <span className="block text-sm font-medium">Jamie Park</span>
                  <span className="mt-1 block text-xs font-normal text-neutral-500">jamie@example.com</span>
                </th>
                <td className="whitespace-nowrap px-4 py-4 text-sm text-neutral-600">Mar 08, 2026</td>
                <td className="px-4 py-4 text-right text-sm tabular-nums">5</td>
                <td className="px-4 py-4 text-right text-sm tabular-nums">$100.00</td>
                <td className="px-4 py-4">
                  <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                    Active
                  </span>
                </td>
              </tr>
              <tr className="border-t border-neutral-200 hover:bg-neutral-50">
                <td className="px-4 py-4 text-sm">
                  <a
                    href="#"
                    aria-label="View item 008"
                    className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  >
                    008
                  </a>
                </td>
                <th scope="row" className="px-4 py-4 text-left">
                  <span className="block text-sm font-medium">Taylor Reed</span>
                  <span className="mt-1 block text-xs font-normal text-neutral-500">taylor@example.com</span>
                </th>
                <td className="whitespace-nowrap px-4 py-4 text-sm text-neutral-600">Mar 07, 2026</td>
                <td className="px-4 py-4 text-right text-sm tabular-nums">7</td>
                <td className="px-4 py-4 text-right text-sm tabular-nums">$140.00</td>
                <td className="px-4 py-4">
                  <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                    Active
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <footer className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-neutral-500">Showing 1–8 of 64</p>
          <nav aria-label="Pagination" className="flex flex-wrap items-center gap-1">
            <button
              type="button"
              disabled
              aria-label="Previous page"
              className="inline-flex h-9 cursor-not-allowed items-center justify-center gap-2 rounded-md border border-neutral-300 bg-white px-2 text-sm text-neutral-500 sm:px-3"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4 shrink-0"
              >
                <path d="m14 7-5 5 5 5" />
              </svg>
              <span className="sr-only sm:not-sr-only">Previous</span>
            </button>
            <a
              href="#"
              aria-label="Page 1"
              aria-current="page"
              className="inline-flex size-9 items-center justify-center rounded-md border text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 border-neutral-900 bg-neutral-900 text-white hover:bg-neutral-700"
            >
              1
            </a>
            <a
              href="#"
              aria-label="Page 2"
              className="inline-flex size-9 items-center justify-center rounded-md border text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 border-neutral-300 bg-white hover:bg-neutral-50"
            >
              2
            </a>
            <a
              href="#"
              aria-label="Page 3"
              className="inline-flex size-9 items-center justify-center rounded-md border text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 border-neutral-300 bg-white hover:bg-neutral-50"
            >
              3
            </a>
            <span aria-hidden="true" className="px-1 text-sm text-neutral-500">
              …
            </span>
            <a
              href="#"
              aria-label="Page 8"
              className="inline-flex size-9 items-center justify-center rounded-md border text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 border-neutral-300 bg-white hover:bg-neutral-50"
            >
              8
            </a>
            <a
              href="#"
              aria-label="Next page"
              className="inline-flex h-9 items-center justify-center gap-2 rounded-md border border-neutral-300 bg-white px-2 text-sm font-medium transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 sm:px-3"
            >
              <span className="sr-only sm:not-sr-only">Next</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4 shrink-0"
              >
                <path d="m10 7 5 5-5 5" />
              </svg>
            </a>
          </nav>
        </footer>
      </div>
    </section>
  )
}
