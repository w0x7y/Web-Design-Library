export default function DataTableTreeRows() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Spending by group</h2>
        <p className="mt-4 max-w-2xl text-lg text-pretty text-neutral-600">
          Open a group to see the subgroups and line items behind its totals.
        </p>
        <div className="mt-8 rounded-lg border border-neutral-200">
          <div
            aria-hidden="true"
            className="grid grid-cols-[minmax(0,1fr)_5rem] items-center gap-x-4 rounded-t-lg bg-neutral-50 px-4 py-3 text-sm font-medium text-neutral-600 sm:grid-cols-[minmax(0,1fr)_6rem_6rem_6rem]"
          >
            <span>Name</span>
            <span className="hidden text-right sm:block">Budget</span>
            <span className="text-right">Spent</span>
            <span className="hidden text-right sm:block">Remaining</span>
          </div>
          <ul role="list">
            <li className="border-t border-neutral-200">
              <details className="group/group" open>
                <summary className="grid cursor-pointer list-none grid-cols-[minmax(0,1fr)_5rem] items-center gap-x-4 px-4 py-3 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 sm:grid-cols-[minmax(0,1fr)_6rem_6rem_6rem] [&::-webkit-details-marker]:hidden">
                  <span className="flex min-w-0 items-center gap-2">
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0 text-neutral-500 transition-transform group-open/group:rotate-90">
                      <path d="m9 6 6 6-6 6" />
                    </svg>
                    <span className="flex min-w-0 flex-wrap items-baseline gap-x-2">
                      <span className="text-sm font-semibold">Group label</span>
                      <span className="text-xs text-neutral-500">2 subgroups</span>
                    </span>
                  </span>
                  <span className="hidden text-right text-sm font-semibold tabular-nums sm:block"><span className="sr-only">Budget: </span>$20,500</span>
                  <span className="text-right text-sm font-semibold tabular-nums"><span className="sr-only">Spent: </span>$15,000</span>
                  <span className="hidden text-right text-sm font-semibold tabular-nums sm:block"><span className="sr-only">Remaining: </span>$5,500</span>
                </summary>
                <ul role="list">
                  <li className="border-t border-neutral-200">
                    <details className="group/subgroup" open>
                      <summary className="grid cursor-pointer list-none grid-cols-[minmax(0,1fr)_5rem] items-center gap-x-4 px-4 py-3 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 sm:grid-cols-[minmax(0,1fr)_6rem_6rem_6rem] [&::-webkit-details-marker]:hidden">
                        <span className="flex min-w-0 items-center gap-2 pl-4 sm:pl-6">
                          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0 text-neutral-500 transition-transform group-open/subgroup:rotate-90">
                            <path d="m9 6 6 6-6 6" />
                          </svg>
                          <span className="flex min-w-0 flex-wrap items-baseline gap-x-2">
                            <span className="text-sm font-medium">Subgroup label</span>
                            <span className="text-xs text-neutral-500">3 items</span>
                          </span>
                        </span>
                        <span className="hidden text-right text-sm font-medium tabular-nums sm:block"><span className="sr-only">Budget: </span>$12,500</span>
                        <span className="text-right text-sm font-medium tabular-nums"><span className="sr-only">Spent: </span>$9,300</span>
                        <span className="hidden text-right text-sm font-medium tabular-nums sm:block"><span className="sr-only">Remaining: </span>$3,200</span>
                      </summary>
                      <ul role="list">
                        <li className="grid grid-cols-[minmax(0,1fr)_5rem] items-center gap-x-4 border-t border-neutral-200 px-4 py-3 text-sm sm:grid-cols-[minmax(0,1fr)_6rem_6rem_6rem]">
                          <span className="min-w-0 pl-14 sm:pl-18">Line item label</span>
                          <span className="hidden text-right text-neutral-600 tabular-nums sm:block"><span className="sr-only">Budget: </span>$6,000</span>
                          <span className="text-right text-neutral-600 tabular-nums"><span className="sr-only">Spent: </span>$4,250</span>
                          <span className="hidden text-right text-neutral-600 tabular-nums sm:block"><span className="sr-only">Remaining: </span>$1,750</span>
                        </li>
                        <li className="grid grid-cols-[minmax(0,1fr)_5rem] items-center gap-x-4 border-t border-neutral-200 px-4 py-3 text-sm sm:grid-cols-[minmax(0,1fr)_6rem_6rem_6rem]">
                          <span className="min-w-0 pl-14 sm:pl-18">Second line item</span>
                          <span className="hidden text-right text-neutral-600 tabular-nums sm:block"><span className="sr-only">Budget: </span>$4,500</span>
                          <span className="text-right text-neutral-600 tabular-nums"><span className="sr-only">Spent: </span>$3,900</span>
                          <span className="hidden text-right text-neutral-600 tabular-nums sm:block"><span className="sr-only">Remaining: </span>$600</span>
                        </li>
                        <li className="grid grid-cols-[minmax(0,1fr)_5rem] items-center gap-x-4 border-t border-neutral-200 px-4 py-3 text-sm sm:grid-cols-[minmax(0,1fr)_6rem_6rem_6rem]">
                          <span className="min-w-0 pl-14 sm:pl-18">Third line item</span>
                          <span className="hidden text-right text-neutral-600 tabular-nums sm:block"><span className="sr-only">Budget: </span>$2,000</span>
                          <span className="text-right text-neutral-600 tabular-nums"><span className="sr-only">Spent: </span>$1,150</span>
                          <span className="hidden text-right text-neutral-600 tabular-nums sm:block"><span className="sr-only">Remaining: </span>$850</span>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li className="border-t border-neutral-200">
                    <details className="group/subgroup">
                      <summary className="grid cursor-pointer list-none grid-cols-[minmax(0,1fr)_5rem] items-center gap-x-4 px-4 py-3 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 sm:grid-cols-[minmax(0,1fr)_6rem_6rem_6rem] [&::-webkit-details-marker]:hidden">
                        <span className="flex min-w-0 items-center gap-2 pl-4 sm:pl-6">
                          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0 text-neutral-500 transition-transform group-open/subgroup:rotate-90">
                            <path d="m9 6 6 6-6 6" />
                          </svg>
                          <span className="flex min-w-0 flex-wrap items-baseline gap-x-2">
                            <span className="text-sm font-medium">Second subgroup label</span>
                            <span className="text-xs text-neutral-500">2 items</span>
                          </span>
                        </span>
                        <span className="hidden text-right text-sm font-medium tabular-nums sm:block"><span className="sr-only">Budget: </span>$8,000</span>
                        <span className="text-right text-sm font-medium tabular-nums"><span className="sr-only">Spent: </span>$5,700</span>
                        <span className="hidden text-right text-sm font-medium tabular-nums sm:block"><span className="sr-only">Remaining: </span>$2,300</span>
                      </summary>
                      <ul role="list">
                        <li className="grid grid-cols-[minmax(0,1fr)_5rem] items-center gap-x-4 border-t border-neutral-200 px-4 py-3 text-sm sm:grid-cols-[minmax(0,1fr)_6rem_6rem_6rem]">
                          <span className="min-w-0 pl-14 sm:pl-18">Line item label</span>
                          <span className="hidden text-right text-neutral-600 tabular-nums sm:block"><span className="sr-only">Budget: </span>$5,000</span>
                          <span className="text-right text-neutral-600 tabular-nums"><span className="sr-only">Spent: </span>$3,600</span>
                          <span className="hidden text-right text-neutral-600 tabular-nums sm:block"><span className="sr-only">Remaining: </span>$1,400</span>
                        </li>
                        <li className="grid grid-cols-[minmax(0,1fr)_5rem] items-center gap-x-4 border-t border-neutral-200 px-4 py-3 text-sm sm:grid-cols-[minmax(0,1fr)_6rem_6rem_6rem]">
                          <span className="min-w-0 pl-14 sm:pl-18">Second line item</span>
                          <span className="hidden text-right text-neutral-600 tabular-nums sm:block"><span className="sr-only">Budget: </span>$3,000</span>
                          <span className="text-right text-neutral-600 tabular-nums"><span className="sr-only">Spent: </span>$2,100</span>
                          <span className="hidden text-right text-neutral-600 tabular-nums sm:block"><span className="sr-only">Remaining: </span>$900</span>
                        </li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </details>
            </li>
            <li className="border-t border-neutral-200">
              <details className="group/group">
                <summary className="grid cursor-pointer list-none grid-cols-[minmax(0,1fr)_5rem] items-center gap-x-4 px-4 py-3 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 sm:grid-cols-[minmax(0,1fr)_6rem_6rem_6rem] [&::-webkit-details-marker]:hidden">
                  <span className="flex min-w-0 items-center gap-2">
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0 text-neutral-500 transition-transform group-open/group:rotate-90">
                      <path d="m9 6 6 6-6 6" />
                    </svg>
                    <span className="flex min-w-0 flex-wrap items-baseline gap-x-2">
                      <span className="text-sm font-semibold">Second group label</span>
                      <span className="text-xs text-neutral-500">2 subgroups</span>
                    </span>
                  </span>
                  <span className="hidden text-right text-sm font-semibold tabular-nums sm:block"><span className="sr-only">Budget: </span>$14,000</span>
                  <span className="text-right text-sm font-semibold tabular-nums"><span className="sr-only">Spent: </span>$9,800</span>
                  <span className="hidden text-right text-sm font-semibold tabular-nums sm:block"><span className="sr-only">Remaining: </span>$4,200</span>
                </summary>
                <ul role="list">
                  <li className="border-t border-neutral-200">
                    <details className="group/subgroup">
                      <summary className="grid cursor-pointer list-none grid-cols-[minmax(0,1fr)_5rem] items-center gap-x-4 px-4 py-3 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 sm:grid-cols-[minmax(0,1fr)_6rem_6rem_6rem] [&::-webkit-details-marker]:hidden">
                        <span className="flex min-w-0 items-center gap-2 pl-4 sm:pl-6">
                          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0 text-neutral-500 transition-transform group-open/subgroup:rotate-90">
                            <path d="m9 6 6 6-6 6" />
                          </svg>
                          <span className="flex min-w-0 flex-wrap items-baseline gap-x-2">
                            <span className="text-sm font-medium">Subgroup label</span>
                            <span className="text-xs text-neutral-500">2 items</span>
                          </span>
                        </span>
                        <span className="hidden text-right text-sm font-medium tabular-nums sm:block"><span className="sr-only">Budget: </span>$8,000</span>
                        <span className="text-right text-sm font-medium tabular-nums"><span className="sr-only">Spent: </span>$5,600</span>
                        <span className="hidden text-right text-sm font-medium tabular-nums sm:block"><span className="sr-only">Remaining: </span>$2,400</span>
                      </summary>
                      <ul role="list">
                        <li className="grid grid-cols-[minmax(0,1fr)_5rem] items-center gap-x-4 border-t border-neutral-200 px-4 py-3 text-sm sm:grid-cols-[minmax(0,1fr)_6rem_6rem_6rem]">
                          <span className="min-w-0 pl-14 sm:pl-18">Line item label</span>
                          <span className="hidden text-right text-neutral-600 tabular-nums sm:block"><span className="sr-only">Budget: </span>$5,000</span>
                          <span className="text-right text-neutral-600 tabular-nums"><span className="sr-only">Spent: </span>$3,500</span>
                          <span className="hidden text-right text-neutral-600 tabular-nums sm:block"><span className="sr-only">Remaining: </span>$1,500</span>
                        </li>
                        <li className="grid grid-cols-[minmax(0,1fr)_5rem] items-center gap-x-4 border-t border-neutral-200 px-4 py-3 text-sm sm:grid-cols-[minmax(0,1fr)_6rem_6rem_6rem]">
                          <span className="min-w-0 pl-14 sm:pl-18">Second line item</span>
                          <span className="hidden text-right text-neutral-600 tabular-nums sm:block"><span className="sr-only">Budget: </span>$3,000</span>
                          <span className="text-right text-neutral-600 tabular-nums"><span className="sr-only">Spent: </span>$2,100</span>
                          <span className="hidden text-right text-neutral-600 tabular-nums sm:block"><span className="sr-only">Remaining: </span>$900</span>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li className="border-t border-neutral-200">
                    <details className="group/subgroup">
                      <summary className="grid cursor-pointer list-none grid-cols-[minmax(0,1fr)_5rem] items-center gap-x-4 px-4 py-3 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 sm:grid-cols-[minmax(0,1fr)_6rem_6rem_6rem] [&::-webkit-details-marker]:hidden">
                        <span className="flex min-w-0 items-center gap-2 pl-4 sm:pl-6">
                          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0 text-neutral-500 transition-transform group-open/subgroup:rotate-90">
                            <path d="m9 6 6 6-6 6" />
                          </svg>
                          <span className="flex min-w-0 flex-wrap items-baseline gap-x-2">
                            <span className="text-sm font-medium">Second subgroup label</span>
                            <span className="text-xs text-neutral-500">1 item</span>
                          </span>
                        </span>
                        <span className="hidden text-right text-sm font-medium tabular-nums sm:block"><span className="sr-only">Budget: </span>$6,000</span>
                        <span className="text-right text-sm font-medium tabular-nums"><span className="sr-only">Spent: </span>$4,200</span>
                        <span className="hidden text-right text-sm font-medium tabular-nums sm:block"><span className="sr-only">Remaining: </span>$1,800</span>
                      </summary>
                      <ul role="list">
                        <li className="grid grid-cols-[minmax(0,1fr)_5rem] items-center gap-x-4 border-t border-neutral-200 px-4 py-3 text-sm sm:grid-cols-[minmax(0,1fr)_6rem_6rem_6rem]">
                          <span className="min-w-0 pl-14 sm:pl-18">Line item label</span>
                          <span className="hidden text-right text-neutral-600 tabular-nums sm:block"><span className="sr-only">Budget: </span>$6,000</span>
                          <span className="text-right text-neutral-600 tabular-nums"><span className="sr-only">Spent: </span>$4,200</span>
                          <span className="hidden text-right text-neutral-600 tabular-nums sm:block"><span className="sr-only">Remaining: </span>$1,800</span>
                        </li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </details>
            </li>
            <li className="border-t border-neutral-200">
              <details className="group/group">
                <summary className="grid cursor-pointer list-none grid-cols-[minmax(0,1fr)_5rem] items-center gap-x-4 px-4 py-3 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 sm:grid-cols-[minmax(0,1fr)_6rem_6rem_6rem] [&::-webkit-details-marker]:hidden">
                  <span className="flex min-w-0 items-center gap-2">
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0 text-neutral-500 transition-transform group-open/group:rotate-90">
                      <path d="m9 6 6 6-6 6" />
                    </svg>
                    <span className="flex min-w-0 flex-wrap items-baseline gap-x-2">
                      <span className="text-sm font-semibold">Third group label</span>
                      <span className="text-xs text-neutral-500">2 items</span>
                    </span>
                  </span>
                  <span className="hidden text-right text-sm font-semibold tabular-nums sm:block"><span className="sr-only">Budget: </span>$9,500</span>
                  <span className="text-right text-sm font-semibold tabular-nums"><span className="sr-only">Spent: </span>$8,100</span>
                  <span className="hidden text-right text-sm font-semibold tabular-nums sm:block"><span className="sr-only">Remaining: </span>$1,400</span>
                </summary>
                <ul role="list">
                  <li className="grid grid-cols-[minmax(0,1fr)_5rem] items-center gap-x-4 border-t border-neutral-200 px-4 py-3 text-sm sm:grid-cols-[minmax(0,1fr)_6rem_6rem_6rem]">
                    <span className="min-w-0 pl-10 sm:pl-12">Line item label</span>
                    <span className="hidden text-right text-neutral-600 tabular-nums sm:block"><span className="sr-only">Budget: </span>$6,000</span>
                    <span className="text-right text-neutral-600 tabular-nums"><span className="sr-only">Spent: </span>$5,300</span>
                    <span className="hidden text-right text-neutral-600 tabular-nums sm:block"><span className="sr-only">Remaining: </span>$700</span>
                  </li>
                  <li className="grid grid-cols-[minmax(0,1fr)_5rem] items-center gap-x-4 border-t border-neutral-200 px-4 py-3 text-sm sm:grid-cols-[minmax(0,1fr)_6rem_6rem_6rem]">
                    <span className="min-w-0 pl-10 sm:pl-12">Second line item</span>
                    <span className="hidden text-right text-neutral-600 tabular-nums sm:block"><span className="sr-only">Budget: </span>$3,500</span>
                    <span className="text-right text-neutral-600 tabular-nums"><span className="sr-only">Spent: </span>$2,800</span>
                    <span className="hidden text-right text-neutral-600 tabular-nums sm:block"><span className="sr-only">Remaining: </span>$700</span>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
          <div className="grid grid-cols-[minmax(0,1fr)_5rem] items-center gap-x-4 rounded-b-lg border-t border-neutral-200 bg-neutral-50 px-4 py-3 text-sm font-semibold sm:grid-cols-[minmax(0,1fr)_6rem_6rem_6rem]">
            <span>Total</span>
            <span className="hidden text-right tabular-nums sm:block"><span className="sr-only">Budget: </span>$44,000</span>
            <span className="text-right tabular-nums"><span className="sr-only">Spent: </span>$32,900</span>
            <span className="hidden text-right tabular-nums sm:block"><span className="sr-only">Remaining: </span>$11,100</span>
          </div>
        </div>
      </div>
    </section>
  )
}
