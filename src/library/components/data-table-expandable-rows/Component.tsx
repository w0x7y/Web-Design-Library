export default function DataTableExpandableRows() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Item details</h2>
        <p className="mt-3 text-base text-neutral-600">Expand a record to review supporting information and actions.</p>
        <div className="mt-8 rounded-lg border border-neutral-200">
          <div
            aria-hidden="true"
            className="grid grid-cols-[1rem_minmax(0,1fr)_5rem] items-center gap-3 md:grid-cols-[1rem_minmax(0,2fr)_minmax(0,1.2fr)_minmax(0,1fr)_5rem] rounded-t-lg bg-neutral-50 px-4 py-3 text-sm font-medium text-neutral-600"
          >
            <span />
            <span>Name</span>
            <span className="hidden md:block">Owner</span>
            <span className="hidden md:block">Updated</span>
            <span className="text-right">Amount</span>
          </div>
          <ul role="list">
            <li className="border-t border-neutral-200">
              <details className="group">
                <summary className="grid grid-cols-[1rem_minmax(0,1fr)_5rem] items-center gap-3 md:grid-cols-[1rem_minmax(0,2fr)_minmax(0,1.2fr)_minmax(0,1fr)_5rem] cursor-pointer list-none px-4 py-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-4 shrink-0 transition-transform group-open:rotate-90"
                  >
                    <path d="m9 6 6 6-6 6" />
                  </svg>
                  <span className="text-sm font-medium">
                    <span className="sr-only">Name: </span>Item 001
                  </span>
                  <span className="hidden text-sm text-neutral-600 md:block">
                    <span className="sr-only">Owner: </span>Alex Rivera
                  </span>
                  <span className="hidden text-sm text-neutral-600 md:block">
                    <span className="sr-only">Updated: </span>Mar 14, 2026
                  </span>
                  <span className="text-right text-sm tabular-nums">
                    <span className="sr-only">Amount: </span>$240.00
                  </span>
                </summary>
                <div className="border-t border-neutral-200 bg-neutral-50 p-6">
                  <dl className="grid gap-6 sm:grid-cols-2">
                    <div className="min-w-0 md:hidden">
                      <dt className="text-sm text-neutral-500">Owner</dt>
                      <dd className="mt-1 text-sm font-medium">Alex Rivera</dd>
                    </div>
                    <div className="min-w-0 md:hidden">
                      <dt className="text-sm text-neutral-500">Updated</dt>
                      <dd className="mt-1 text-sm font-medium">Mar 14, 2026</dd>
                    </div>
                    <div className="min-w-0 ">
                      <dt className="text-sm text-neutral-500">Reference</dt>
                      <dd className="mt-1 text-sm font-medium">001</dd>
                    </div>
                    <div className="min-w-0 ">
                      <dt className="text-sm text-neutral-500">Status</dt>
                      <dd className="mt-1 text-sm font-medium">
                        <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                          Active
                        </span>
                      </dd>
                    </div>
                    <div className="min-w-0 ">
                      <dt className="text-sm text-neutral-500">Created</dt>
                      <dd className="mt-1 text-sm font-medium">Mar 01, 2026</dd>
                    </div>
                    <div className="min-w-0 ">
                      <dt className="text-sm text-neutral-500">Units</dt>
                      <dd className="mt-1 text-sm font-medium">12</dd>
                    </div>
                  </dl>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="#"
                      aria-label="View Item 001"
                      className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    >
                      View record
                    </a>
                    <a
                      href="#"
                      aria-label="Download Item 001"
                      className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </details>
            </li>
            <li className="border-t border-neutral-200">
              <details className="group" open>
                <summary className="grid grid-cols-[1rem_minmax(0,1fr)_5rem] items-center gap-3 md:grid-cols-[1rem_minmax(0,2fr)_minmax(0,1.2fr)_minmax(0,1fr)_5rem] cursor-pointer list-none px-4 py-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-4 shrink-0 transition-transform group-open:rotate-90"
                  >
                    <path d="m9 6 6 6-6 6" />
                  </svg>
                  <span className="text-sm font-medium">
                    <span className="sr-only">Name: </span>Item 002
                  </span>
                  <span className="hidden text-sm text-neutral-600 md:block">
                    <span className="sr-only">Owner: </span>Jordan Lee
                  </span>
                  <span className="hidden text-sm text-neutral-600 md:block">
                    <span className="sr-only">Updated: </span>Mar 13, 2026
                  </span>
                  <span className="text-right text-sm tabular-nums">
                    <span className="sr-only">Amount: </span>$160.00
                  </span>
                </summary>
                <div className="border-t border-neutral-200 bg-neutral-50 p-6">
                  <dl className="grid gap-6 sm:grid-cols-2">
                    <div className="min-w-0 md:hidden">
                      <dt className="text-sm text-neutral-500">Owner</dt>
                      <dd className="mt-1 text-sm font-medium">Jordan Lee</dd>
                    </div>
                    <div className="min-w-0 md:hidden">
                      <dt className="text-sm text-neutral-500">Updated</dt>
                      <dd className="mt-1 text-sm font-medium">Mar 13, 2026</dd>
                    </div>
                    <div className="min-w-0 ">
                      <dt className="text-sm text-neutral-500">Reference</dt>
                      <dd className="mt-1 text-sm font-medium">002</dd>
                    </div>
                    <div className="min-w-0 ">
                      <dt className="text-sm text-neutral-500">Status</dt>
                      <dd className="mt-1 text-sm font-medium">
                        <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                          Pending
                        </span>
                      </dd>
                    </div>
                    <div className="min-w-0 ">
                      <dt className="text-sm text-neutral-500">Created</dt>
                      <dd className="mt-1 text-sm font-medium">Mar 01, 2026</dd>
                    </div>
                    <div className="min-w-0 ">
                      <dt className="text-sm text-neutral-500">Units</dt>
                      <dd className="mt-1 text-sm font-medium">8</dd>
                    </div>
                  </dl>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="#"
                      aria-label="View Item 002"
                      className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    >
                      View record
                    </a>
                    <a
                      href="#"
                      aria-label="Download Item 002"
                      className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </details>
            </li>
            <li className="border-t border-neutral-200">
              <details className="group">
                <summary className="grid grid-cols-[1rem_minmax(0,1fr)_5rem] items-center gap-3 md:grid-cols-[1rem_minmax(0,2fr)_minmax(0,1.2fr)_minmax(0,1fr)_5rem] cursor-pointer list-none px-4 py-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-4 shrink-0 transition-transform group-open:rotate-90"
                  >
                    <path d="m9 6 6 6-6 6" />
                  </svg>
                  <span className="text-sm font-medium">
                    <span className="sr-only">Name: </span>Item 003
                  </span>
                  <span className="hidden text-sm text-neutral-600 md:block">
                    <span className="sr-only">Owner: </span>Sam Taylor
                  </span>
                  <span className="hidden text-sm text-neutral-600 md:block">
                    <span className="sr-only">Updated: </span>Mar 12, 2026
                  </span>
                  <span className="text-right text-sm tabular-nums">
                    <span className="sr-only">Amount: </span>$200.00
                  </span>
                </summary>
                <div className="border-t border-neutral-200 bg-neutral-50 p-6">
                  <dl className="grid gap-6 sm:grid-cols-2">
                    <div className="min-w-0 md:hidden">
                      <dt className="text-sm text-neutral-500">Owner</dt>
                      <dd className="mt-1 text-sm font-medium">Sam Taylor</dd>
                    </div>
                    <div className="min-w-0 md:hidden">
                      <dt className="text-sm text-neutral-500">Updated</dt>
                      <dd className="mt-1 text-sm font-medium">Mar 12, 2026</dd>
                    </div>
                    <div className="min-w-0 ">
                      <dt className="text-sm text-neutral-500">Reference</dt>
                      <dd className="mt-1 text-sm font-medium">003</dd>
                    </div>
                    <div className="min-w-0 ">
                      <dt className="text-sm text-neutral-500">Status</dt>
                      <dd className="mt-1 text-sm font-medium">
                        <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                          Active
                        </span>
                      </dd>
                    </div>
                    <div className="min-w-0 ">
                      <dt className="text-sm text-neutral-500">Created</dt>
                      <dd className="mt-1 text-sm font-medium">Mar 01, 2026</dd>
                    </div>
                    <div className="min-w-0 ">
                      <dt className="text-sm text-neutral-500">Units</dt>
                      <dd className="mt-1 text-sm font-medium">10</dd>
                    </div>
                  </dl>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="#"
                      aria-label="View Item 003"
                      className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    >
                      View record
                    </a>
                    <a
                      href="#"
                      aria-label="Download Item 003"
                      className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </details>
            </li>
            <li className="border-t border-neutral-200">
              <details className="group">
                <summary className="grid grid-cols-[1rem_minmax(0,1fr)_5rem] items-center gap-3 md:grid-cols-[1rem_minmax(0,2fr)_minmax(0,1.2fr)_minmax(0,1fr)_5rem] cursor-pointer list-none px-4 py-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-4 shrink-0 transition-transform group-open:rotate-90"
                  >
                    <path d="m9 6 6 6-6 6" />
                  </svg>
                  <span className="text-sm font-medium">
                    <span className="sr-only">Name: </span>Item 004
                  </span>
                  <span className="hidden text-sm text-neutral-600 md:block">
                    <span className="sr-only">Owner: </span>Casey Morgan
                  </span>
                  <span className="hidden text-sm text-neutral-600 md:block">
                    <span className="sr-only">Updated: </span>Mar 11, 2026
                  </span>
                  <span className="text-right text-sm tabular-nums">
                    <span className="sr-only">Amount: </span>$120.00
                  </span>
                </summary>
                <div className="border-t border-neutral-200 bg-neutral-50 p-6">
                  <dl className="grid gap-6 sm:grid-cols-2">
                    <div className="min-w-0 md:hidden">
                      <dt className="text-sm text-neutral-500">Owner</dt>
                      <dd className="mt-1 text-sm font-medium">Casey Morgan</dd>
                    </div>
                    <div className="min-w-0 md:hidden">
                      <dt className="text-sm text-neutral-500">Updated</dt>
                      <dd className="mt-1 text-sm font-medium">Mar 11, 2026</dd>
                    </div>
                    <div className="min-w-0 ">
                      <dt className="text-sm text-neutral-500">Reference</dt>
                      <dd className="mt-1 text-sm font-medium">004</dd>
                    </div>
                    <div className="min-w-0 ">
                      <dt className="text-sm text-neutral-500">Status</dt>
                      <dd className="mt-1 text-sm font-medium">
                        <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                          Archived
                        </span>
                      </dd>
                    </div>
                    <div className="min-w-0 ">
                      <dt className="text-sm text-neutral-500">Created</dt>
                      <dd className="mt-1 text-sm font-medium">Mar 01, 2026</dd>
                    </div>
                    <div className="min-w-0 ">
                      <dt className="text-sm text-neutral-500">Units</dt>
                      <dd className="mt-1 text-sm font-medium">6</dd>
                    </div>
                  </dl>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="#"
                      aria-label="View Item 004"
                      className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    >
                      View record
                    </a>
                    <a
                      href="#"
                      aria-label="Download Item 004"
                      className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </details>
            </li>
            <li className="border-t border-neutral-200">
              <details className="group">
                <summary className="grid grid-cols-[1rem_minmax(0,1fr)_5rem] items-center gap-3 md:grid-cols-[1rem_minmax(0,2fr)_minmax(0,1.2fr)_minmax(0,1fr)_5rem] cursor-pointer list-none px-4 py-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-4 shrink-0 transition-transform group-open:rotate-90"
                  >
                    <path d="m9 6 6 6-6 6" />
                  </svg>
                  <span className="text-sm font-medium">
                    <span className="sr-only">Name: </span>Item 005
                  </span>
                  <span className="hidden text-sm text-neutral-600 md:block">
                    <span className="sr-only">Owner: </span>Riley Chen
                  </span>
                  <span className="hidden text-sm text-neutral-600 md:block">
                    <span className="sr-only">Updated: </span>Mar 10, 2026
                  </span>
                  <span className="text-right text-sm tabular-nums">
                    <span className="sr-only">Amount: </span>$300.00
                  </span>
                </summary>
                <div className="border-t border-neutral-200 bg-neutral-50 p-6">
                  <dl className="grid gap-6 sm:grid-cols-2">
                    <div className="min-w-0 md:hidden">
                      <dt className="text-sm text-neutral-500">Owner</dt>
                      <dd className="mt-1 text-sm font-medium">Riley Chen</dd>
                    </div>
                    <div className="min-w-0 md:hidden">
                      <dt className="text-sm text-neutral-500">Updated</dt>
                      <dd className="mt-1 text-sm font-medium">Mar 10, 2026</dd>
                    </div>
                    <div className="min-w-0 ">
                      <dt className="text-sm text-neutral-500">Reference</dt>
                      <dd className="mt-1 text-sm font-medium">005</dd>
                    </div>
                    <div className="min-w-0 ">
                      <dt className="text-sm text-neutral-500">Status</dt>
                      <dd className="mt-1 text-sm font-medium">
                        <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                          Active
                        </span>
                      </dd>
                    </div>
                    <div className="min-w-0 ">
                      <dt className="text-sm text-neutral-500">Created</dt>
                      <dd className="mt-1 text-sm font-medium">Mar 01, 2026</dd>
                    </div>
                    <div className="min-w-0 ">
                      <dt className="text-sm text-neutral-500">Units</dt>
                      <dd className="mt-1 text-sm font-medium">15</dd>
                    </div>
                  </dl>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="#"
                      aria-label="View Item 005"
                      className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    >
                      View record
                    </a>
                    <a
                      href="#"
                      aria-label="Download Item 005"
                      className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
