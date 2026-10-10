export default function DataTablePriorityColumns() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
        <header className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Ranked records</h2>
            <p className="mt-3 text-sm text-neutral-500">12 records · Updated Mar 14</p>
          </div>
          <nav
            aria-label="Reporting range"
            className="flex flex-wrap gap-1 rounded-lg border border-neutral-200 bg-neutral-50 p-1"
          >
            <a
              href="#"
              aria-current="page"
              className="inline-flex h-10 items-center justify-center rounded-md border border-neutral-900 bg-neutral-900 text-white hover:bg-neutral-700 px-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Week
            </a>
            <a
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-transparent text-neutral-600 hover:bg-white px-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Month
            </a>
            <a
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-transparent text-neutral-600 hover:bg-white px-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              All
            </a>
          </nav>
        </header>
        <div
          role="region"
          tabIndex={0}
          aria-label="Ranked records table"
          className="mt-8 h-96 overflow-auto rounded-lg border border-neutral-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
        >
          <table className="w-full table-fixed md:table-auto">
            <caption className="sr-only">Ranks, points, counts, totals, rates and five recent statuses</caption>
            <thead className="sticky top-0 z-10 bg-neutral-50">
              <tr>
                <th
                  scope="col"
                  className="w-9 px-2 py-2 text-left text-sm font-medium text-neutral-600 md:w-auto md:px-3"
                >
                  <span aria-label="Rank">#</span>
                </th>
                <th scope="col" className="px-2 py-2 text-left text-sm font-medium text-neutral-600 md:px-3">
                  Name
                </th>
                <th
                  scope="col"
                  className="w-9 px-2 py-2 text-right text-sm font-medium text-neutral-600 md:w-auto md:px-3"
                >
                  <span className="md:hidden">Pts</span>
                  <span className="hidden md:inline">Points</span>
                </th>
                <th
                  scope="col"
                  className="w-9 px-2 py-2 text-right text-sm font-medium text-neutral-600 md:w-auto md:px-3"
                >
                  <span className="md:hidden">Qty</span>
                  <span className="hidden md:inline">Count</span>
                </th>
                <th
                  scope="col"
                  className="w-14 px-2 py-2 text-right text-sm font-medium text-neutral-600 md:w-auto md:px-3"
                >
                  Total
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-2 text-right text-sm font-medium text-neutral-600 md:table-cell"
                >
                  Rate
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-2 text-left text-sm font-medium text-neutral-600 md:table-cell"
                >
                  Recent
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-neutral-200 hover:bg-neutral-50">
                <td className="px-2 py-2 text-sm tabular-nums text-neutral-500 md:px-3">1</td>
                <th scope="row" className="px-2 py-2 text-left text-sm font-medium md:px-3">
                  <span className="flex min-w-0 items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="flex size-6 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-xs font-medium text-neutral-600"
                    >
                      AR
                    </span>
                    <span className="min-w-0 wrap-anywhere">Alex Rivera</span>
                  </span>
                </th>
                <td className="px-2 py-2 text-right text-sm tabular-nums md:px-3">98</td>
                <td className="px-2 py-2 text-right text-sm tabular-nums md:px-3">24</td>
                <td className="px-2 py-2 text-right text-sm tabular-nums md:px-3">1,284</td>
                <td className="hidden px-3 py-2 text-right text-sm tabular-nums md:table-cell">96%</td>
                <td className="hidden px-3 py-2 md:table-cell">
                  <ul
                    role="list"
                    aria-label="Recent statuses for Alex Rivera"
                    className="flex flex-wrap items-start gap-1"
                  >
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Done
                      </span>
                    </li>
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Done
                      </span>
                    </li>
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Open
                      </span>
                    </li>
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Done
                      </span>
                    </li>
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Done
                      </span>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr className="border-t border-neutral-200 hover:bg-neutral-50">
                <td className="px-2 py-2 text-sm tabular-nums text-neutral-500 md:px-3">2</td>
                <th scope="row" className="px-2 py-2 text-left text-sm font-medium md:px-3">
                  <span className="flex min-w-0 items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="flex size-6 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-xs font-medium text-neutral-600"
                    >
                      JL
                    </span>
                    <span className="min-w-0 wrap-anywhere">Jordan Lee</span>
                  </span>
                </th>
                <td className="px-2 py-2 text-right text-sm tabular-nums md:px-3">95</td>
                <td className="px-2 py-2 text-right text-sm tabular-nums md:px-3">23</td>
                <td className="px-2 py-2 text-right text-sm tabular-nums md:px-3">1,216</td>
                <td className="hidden px-3 py-2 text-right text-sm tabular-nums md:table-cell">95%</td>
                <td className="hidden px-3 py-2 md:table-cell">
                  <ul
                    role="list"
                    aria-label="Recent statuses for Jordan Lee"
                    className="flex flex-wrap items-start gap-1"
                  >
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Done
                      </span>
                    </li>
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Open
                      </span>
                    </li>
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Done
                      </span>
                    </li>
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Done
                      </span>
                    </li>
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Hold
                      </span>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr className="border-t border-neutral-200 hover:bg-neutral-50">
                <td className="px-2 py-2 text-sm tabular-nums text-neutral-500 md:px-3">3</td>
                <th scope="row" className="px-2 py-2 text-left text-sm font-medium md:px-3">
                  <span className="flex min-w-0 items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="flex size-6 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-xs font-medium text-neutral-600"
                    >
                      ST
                    </span>
                    <span className="min-w-0 wrap-anywhere">Sam Taylor</span>
                  </span>
                </th>
                <td className="px-2 py-2 text-right text-sm tabular-nums md:px-3">92</td>
                <td className="px-2 py-2 text-right text-sm tabular-nums md:px-3">22</td>
                <td className="px-2 py-2 text-right text-sm tabular-nums md:px-3">1,148</td>
                <td className="hidden px-3 py-2 text-right text-sm tabular-nums md:table-cell">94%</td>
                <td className="hidden px-3 py-2 md:table-cell">
                  <ul
                    role="list"
                    aria-label="Recent statuses for Sam Taylor"
                    className="flex flex-wrap items-start gap-1"
                  >
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Open
                      </span>
                    </li>
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Done
                      </span>
                    </li>
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Done
                      </span>
                    </li>
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Done
                      </span>
                    </li>
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Done
                      </span>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr className="border-t border-neutral-200 hover:bg-neutral-50">
                <td className="px-2 py-2 text-sm tabular-nums text-neutral-500 md:px-3">4</td>
                <th scope="row" className="px-2 py-2 text-left text-sm font-medium md:px-3">
                  <span className="flex min-w-0 items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="flex size-6 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-xs font-medium text-neutral-600"
                    >
                      CM
                    </span>
                    <span className="min-w-0 wrap-anywhere">Casey Morgan</span>
                  </span>
                </th>
                <td className="px-2 py-2 text-right text-sm tabular-nums md:px-3">89</td>
                <td className="px-2 py-2 text-right text-sm tabular-nums md:px-3">21</td>
                <td className="px-2 py-2 text-right text-sm tabular-nums md:px-3">1,080</td>
                <td className="hidden px-3 py-2 text-right text-sm tabular-nums md:table-cell">93%</td>
                <td className="hidden px-3 py-2 md:table-cell">
                  <ul
                    role="list"
                    aria-label="Recent statuses for Casey Morgan"
                    className="flex flex-wrap items-start gap-1"
                  >
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Done
                      </span>
                    </li>
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Done
                      </span>
                    </li>
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Open
                      </span>
                    </li>
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Done
                      </span>
                    </li>
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Done
                      </span>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr className="border-t border-neutral-200 hover:bg-neutral-50">
                <td className="px-2 py-2 text-sm tabular-nums text-neutral-500 md:px-3">5</td>
                <th scope="row" className="px-2 py-2 text-left text-sm font-medium md:px-3">
                  <span className="flex min-w-0 items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="flex size-6 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-xs font-medium text-neutral-600"
                    >
                      RC
                    </span>
                    <span className="min-w-0 wrap-anywhere">Riley Chen</span>
                  </span>
                </th>
                <td className="px-2 py-2 text-right text-sm tabular-nums md:px-3">86</td>
                <td className="px-2 py-2 text-right text-sm tabular-nums md:px-3">20</td>
                <td className="px-2 py-2 text-right text-sm tabular-nums md:px-3">1,012</td>
                <td className="hidden px-3 py-2 text-right text-sm tabular-nums md:table-cell">92%</td>
                <td className="hidden px-3 py-2 md:table-cell">
                  <ul
                    role="list"
                    aria-label="Recent statuses for Riley Chen"
                    className="flex flex-wrap items-start gap-1"
                  >
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Done
                      </span>
                    </li>
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Open
                      </span>
                    </li>
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Done
                      </span>
                    </li>
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Done
                      </span>
                    </li>
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Hold
                      </span>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr className="border-t border-neutral-200 hover:bg-neutral-50">
                <td className="px-2 py-2 text-sm tabular-nums text-neutral-500 md:px-3">6</td>
                <th scope="row" className="px-2 py-2 text-left text-sm font-medium md:px-3">
                  <span className="flex min-w-0 items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="flex size-6 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-xs font-medium text-neutral-600"
                    >
                      MB
                    </span>
                    <span className="min-w-0 wrap-anywhere">Morgan Blake</span>
                  </span>
                </th>
                <td className="px-2 py-2 text-right text-sm tabular-nums md:px-3">83</td>
                <td className="px-2 py-2 text-right text-sm tabular-nums md:px-3">19</td>
                <td className="px-2 py-2 text-right text-sm tabular-nums md:px-3">944</td>
                <td className="hidden px-3 py-2 text-right text-sm tabular-nums md:table-cell">91%</td>
                <td className="hidden px-3 py-2 md:table-cell">
                  <ul
                    role="list"
                    aria-label="Recent statuses for Morgan Blake"
                    className="flex flex-wrap items-start gap-1"
                  >
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Open
                      </span>
                    </li>
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Done
                      </span>
                    </li>
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Done
                      </span>
                    </li>
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Done
                      </span>
                    </li>
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Done
                      </span>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr className="border-t border-neutral-200 hover:bg-neutral-50">
                <td className="px-2 py-2 text-sm tabular-nums text-neutral-500 md:px-3">7</td>
                <th scope="row" className="px-2 py-2 text-left text-sm font-medium md:px-3">
                  <span className="flex min-w-0 items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="flex size-6 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-xs font-medium text-neutral-600"
                    >
                      JP
                    </span>
                    <span className="min-w-0 wrap-anywhere">Jamie Park</span>
                  </span>
                </th>
                <td className="px-2 py-2 text-right text-sm tabular-nums md:px-3">80</td>
                <td className="px-2 py-2 text-right text-sm tabular-nums md:px-3">18</td>
                <td className="px-2 py-2 text-right text-sm tabular-nums md:px-3">876</td>
                <td className="hidden px-3 py-2 text-right text-sm tabular-nums md:table-cell">90%</td>
                <td className="hidden px-3 py-2 md:table-cell">
                  <ul
                    role="list"
                    aria-label="Recent statuses for Jamie Park"
                    className="flex flex-wrap items-start gap-1"
                  >
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Done
                      </span>
                    </li>
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Done
                      </span>
                    </li>
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Open
                      </span>
                    </li>
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Done
                      </span>
                    </li>
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Done
                      </span>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr className="border-t border-neutral-200 hover:bg-neutral-50">
                <td className="px-2 py-2 text-sm tabular-nums text-neutral-500 md:px-3">8</td>
                <th scope="row" className="px-2 py-2 text-left text-sm font-medium md:px-3">
                  <span className="flex min-w-0 items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="flex size-6 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-xs font-medium text-neutral-600"
                    >
                      TR
                    </span>
                    <span className="min-w-0 wrap-anywhere">Taylor Reed</span>
                  </span>
                </th>
                <td className="px-2 py-2 text-right text-sm tabular-nums md:px-3">77</td>
                <td className="px-2 py-2 text-right text-sm tabular-nums md:px-3">17</td>
                <td className="px-2 py-2 text-right text-sm tabular-nums md:px-3">808</td>
                <td className="hidden px-3 py-2 text-right text-sm tabular-nums md:table-cell">89%</td>
                <td className="hidden px-3 py-2 md:table-cell">
                  <ul
                    role="list"
                    aria-label="Recent statuses for Taylor Reed"
                    className="flex flex-wrap items-start gap-1"
                  >
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Done
                      </span>
                    </li>
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Open
                      </span>
                    </li>
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Done
                      </span>
                    </li>
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Done
                      </span>
                    </li>
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Hold
                      </span>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr className="border-t border-neutral-200 hover:bg-neutral-50">
                <td className="px-2 py-2 text-sm tabular-nums text-neutral-500 md:px-3">9</td>
                <th scope="row" className="px-2 py-2 text-left text-sm font-medium md:px-3">
                  <span className="flex min-w-0 items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="flex size-6 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-xs font-medium text-neutral-600"
                    >
                      DE
                    </span>
                    <span className="min-w-0 wrap-anywhere">Drew Ellis</span>
                  </span>
                </th>
                <td className="px-2 py-2 text-right text-sm tabular-nums md:px-3">74</td>
                <td className="px-2 py-2 text-right text-sm tabular-nums md:px-3">16</td>
                <td className="px-2 py-2 text-right text-sm tabular-nums md:px-3">740</td>
                <td className="hidden px-3 py-2 text-right text-sm tabular-nums md:table-cell">88%</td>
                <td className="hidden px-3 py-2 md:table-cell">
                  <ul
                    role="list"
                    aria-label="Recent statuses for Drew Ellis"
                    className="flex flex-wrap items-start gap-1"
                  >
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Open
                      </span>
                    </li>
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Done
                      </span>
                    </li>
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Done
                      </span>
                    </li>
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Done
                      </span>
                    </li>
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Done
                      </span>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr className="border-t border-neutral-200 hover:bg-neutral-50">
                <td className="px-2 py-2 text-sm tabular-nums text-neutral-500 md:px-3">10</td>
                <th scope="row" className="px-2 py-2 text-left text-sm font-medium md:px-3">
                  <span className="flex min-w-0 items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="flex size-6 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-xs font-medium text-neutral-600"
                    >
                      AQ
                    </span>
                    <span className="min-w-0 wrap-anywhere">Avery Quinn</span>
                  </span>
                </th>
                <td className="px-2 py-2 text-right text-sm tabular-nums md:px-3">71</td>
                <td className="px-2 py-2 text-right text-sm tabular-nums md:px-3">15</td>
                <td className="px-2 py-2 text-right text-sm tabular-nums md:px-3">672</td>
                <td className="hidden px-3 py-2 text-right text-sm tabular-nums md:table-cell">87%</td>
                <td className="hidden px-3 py-2 md:table-cell">
                  <ul
                    role="list"
                    aria-label="Recent statuses for Avery Quinn"
                    className="flex flex-wrap items-start gap-1"
                  >
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Done
                      </span>
                    </li>
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Done
                      </span>
                    </li>
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Open
                      </span>
                    </li>
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Done
                      </span>
                    </li>
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Done
                      </span>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr className="border-t border-neutral-200 hover:bg-neutral-50">
                <td className="px-2 py-2 text-sm tabular-nums text-neutral-500 md:px-3">11</td>
                <th scope="row" className="px-2 py-2 text-left text-sm font-medium md:px-3">
                  <span className="flex min-w-0 items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="flex size-6 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-xs font-medium text-neutral-600"
                    >
                      CG
                    </span>
                    <span className="min-w-0 wrap-anywhere">Cameron Gray</span>
                  </span>
                </th>
                <td className="px-2 py-2 text-right text-sm tabular-nums md:px-3">68</td>
                <td className="px-2 py-2 text-right text-sm tabular-nums md:px-3">14</td>
                <td className="px-2 py-2 text-right text-sm tabular-nums md:px-3">604</td>
                <td className="hidden px-3 py-2 text-right text-sm tabular-nums md:table-cell">86%</td>
                <td className="hidden px-3 py-2 md:table-cell">
                  <ul
                    role="list"
                    aria-label="Recent statuses for Cameron Gray"
                    className="flex flex-wrap items-start gap-1"
                  >
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Done
                      </span>
                    </li>
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Open
                      </span>
                    </li>
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Done
                      </span>
                    </li>
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Done
                      </span>
                    </li>
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Hold
                      </span>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr className="border-t border-neutral-200 hover:bg-neutral-50">
                <td className="px-2 py-2 text-sm tabular-nums text-neutral-500 md:px-3">12</td>
                <th scope="row" className="px-2 py-2 text-left text-sm font-medium md:px-3">
                  <span className="flex min-w-0 items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="flex size-6 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-xs font-medium text-neutral-600"
                    >
                      RL
                    </span>
                    <span className="min-w-0 wrap-anywhere">Robin Lane</span>
                  </span>
                </th>
                <td className="px-2 py-2 text-right text-sm tabular-nums md:px-3">65</td>
                <td className="px-2 py-2 text-right text-sm tabular-nums md:px-3">13</td>
                <td className="px-2 py-2 text-right text-sm tabular-nums md:px-3">536</td>
                <td className="hidden px-3 py-2 text-right text-sm tabular-nums md:table-cell">85%</td>
                <td className="hidden px-3 py-2 md:table-cell">
                  <ul
                    role="list"
                    aria-label="Recent statuses for Robin Lane"
                    className="flex flex-wrap items-start gap-1"
                  >
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Open
                      </span>
                    </li>
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Done
                      </span>
                    </li>
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Done
                      </span>
                    </li>
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Done
                      </span>
                    </li>
                    <li>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Done
                      </span>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
