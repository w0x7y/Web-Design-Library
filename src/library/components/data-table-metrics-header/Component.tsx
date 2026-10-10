export default function DataTableMetricsHeader() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <header className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Activity summary</h2>
            <p className="mt-3 text-base text-neutral-600">
              A short explanation of the figures and the reporting period.
            </p>
          </div>
          <a
            href="#"
            className="shrink-0 text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            View report
          </a>
        </header>
        <dl className="mt-8 grid rounded-lg border border-neutral-200 sm:grid-cols-3">
          <div className="border-b border-neutral-200 p-6 last:border-0 sm:border-r sm:border-b-0">
            <dt className="text-sm text-neutral-500">Total amount</dt>
            <dd className="mt-2 text-3xl font-semibold tracking-tight tabular-nums">$1,020</dd>
            <p className="mt-2 text-sm text-neutral-500">12% higher than the previous period</p>
          </div>
          <div className="border-b border-neutral-200 p-6 last:border-0 sm:border-r sm:border-b-0">
            <dt className="text-sm text-neutral-500">Total units</dt>
            <dd className="mt-2 text-3xl font-semibold tracking-tight tabular-nums">51</dd>
            <p className="mt-2 text-sm text-neutral-500">6 more than the previous period</p>
          </div>
          <div className="border-b border-neutral-200 p-6 last:border-0 sm:border-r sm:border-b-0">
            <dt className="text-sm text-neutral-500">Active records</dt>
            <dd className="mt-2 text-3xl font-semibold tracking-tight tabular-nums">5</dd>
            <p className="mt-2 text-sm text-neutral-500">1 more than the previous period</p>
          </div>
        </dl>
        <div
          role="region"
          tabIndex={0}
          aria-label="Activity totals table"
          className="mt-8 min-w-0 overflow-x-auto rounded-lg border border-neutral-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
        >
          <table className="w-full min-w-[42rem]">
            <caption className="sr-only">Activity by record, with unit and amount totals</caption>
            <thead className="bg-neutral-50">
              <tr>
                <th
                  scope="col"
                  className="sticky left-0 bg-white px-4 py-3 text-left text-sm font-medium text-neutral-600 md:static"
                >
                  Name
                </th>
                <th scope="col" className="px-4 py-3 text-right text-sm font-medium text-neutral-600">
                  Units
                </th>
                <th scope="col" className="px-4 py-3 text-right text-sm font-medium text-neutral-600">
                  Completed
                </th>
                <th scope="col" className="px-4 py-3 text-right text-sm font-medium text-neutral-600">
                  Pending
                </th>
                <th scope="col" className="px-4 py-3 text-right text-sm font-medium text-neutral-600">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-neutral-200">
                <th scope="row" className="sticky left-0 bg-white px-4 py-4 text-left text-sm font-medium md:static">
                  Item 001
                </th>
                <td className="px-4 py-4 text-right text-sm tabular-nums">12</td>
                <td className="px-4 py-4 text-right text-sm tabular-nums">10</td>
                <td className="px-4 py-4 text-right text-sm tabular-nums">2</td>
                <td className="px-4 py-4 text-right text-sm tabular-nums">$240.00</td>
              </tr>
              <tr className="border-t border-neutral-200">
                <th scope="row" className="sticky left-0 bg-white px-4 py-4 text-left text-sm font-medium md:static">
                  Item 002
                </th>
                <td className="px-4 py-4 text-right text-sm tabular-nums">8</td>
                <td className="px-4 py-4 text-right text-sm tabular-nums">6</td>
                <td className="px-4 py-4 text-right text-sm tabular-nums">2</td>
                <td className="px-4 py-4 text-right text-sm tabular-nums">$160.00</td>
              </tr>
              <tr className="border-t border-neutral-200">
                <th scope="row" className="sticky left-0 bg-white px-4 py-4 text-left text-sm font-medium md:static">
                  Item 003
                </th>
                <td className="px-4 py-4 text-right text-sm tabular-nums">10</td>
                <td className="px-4 py-4 text-right text-sm tabular-nums">8</td>
                <td className="px-4 py-4 text-right text-sm tabular-nums">2</td>
                <td className="px-4 py-4 text-right text-sm tabular-nums">$200.00</td>
              </tr>
              <tr className="border-t border-neutral-200">
                <th scope="row" className="sticky left-0 bg-white px-4 py-4 text-left text-sm font-medium md:static">
                  Item 004
                </th>
                <td className="px-4 py-4 text-right text-sm tabular-nums">6</td>
                <td className="px-4 py-4 text-right text-sm tabular-nums">4</td>
                <td className="px-4 py-4 text-right text-sm tabular-nums">2</td>
                <td className="px-4 py-4 text-right text-sm tabular-nums">$120.00</td>
              </tr>
              <tr className="border-t border-neutral-200">
                <th scope="row" className="sticky left-0 bg-white px-4 py-4 text-left text-sm font-medium md:static">
                  Item 005
                </th>
                <td className="px-4 py-4 text-right text-sm tabular-nums">15</td>
                <td className="px-4 py-4 text-right text-sm tabular-nums">14</td>
                <td className="px-4 py-4 text-right text-sm tabular-nums">1</td>
                <td className="px-4 py-4 text-right text-sm tabular-nums">$300.00</td>
              </tr>
            </tbody>
            <tfoot className="border-t border-neutral-300 bg-neutral-50">
              <tr>
                <th scope="row" className="sticky left-0 bg-white px-4 py-4 text-left text-sm font-semibold md:static">
                  Total
                </th>
                <td className="px-4 py-4 text-right text-sm font-semibold tabular-nums">51</td>
                <td className="px-4 py-4 text-right text-sm font-semibold tabular-nums">42</td>
                <td className="px-4 py-4 text-right text-sm font-semibold tabular-nums">9</td>
                <td className="px-4 py-4 text-right text-sm font-semibold tabular-nums">$1,020.00</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <p className="mt-4 text-sm text-neutral-500">Updated Mar 14</p>
      </div>
    </section>
  )
}
