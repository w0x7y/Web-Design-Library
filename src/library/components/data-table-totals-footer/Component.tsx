export default function DataTableTotalsFooter() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <header className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Line item summary
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-pretty text-neutral-600">
              Explain the scope of the amounts listed below.
            </p>
          </div>
          <p className="text-sm text-neutral-500">Reference 00124</p>
        </header>
        <table className="mt-8 w-full table-fixed text-left">
          <caption className="sr-only">
            Line items, quantities and amounts with totals
          </caption>
          <thead className="bg-neutral-50">
            <tr>
              <th
                scope="col"
                className="px-3 py-3 text-left text-sm font-medium w-1/2"
              >
                Description
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-left text-sm font-medium text-right"
              >
                Qty
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-left text-sm font-medium text-right"
              >
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-neutral-200">
              <th
                scope="row"
                className="px-3 py-4 text-sm text-left font-medium "
              >
                Line item label
              </th>
              <td className="px-3 py-4 text-sm text-neutral-600 text-right tabular-nums">
                2
              </td>
              <td className="px-3 py-4 text-sm text-neutral-600 text-right tabular-nums">
                $240
              </td>
            </tr>
            <tr className="border-t border-neutral-200">
              <th
                scope="row"
                className="px-3 py-4 text-sm text-left font-medium "
              >
                Add-on label
              </th>
              <td className="px-3 py-4 text-sm text-neutral-600 text-right tabular-nums">
                1
              </td>
              <td className="px-3 py-4 text-sm text-neutral-600 text-right tabular-nums">
                $60
              </td>
            </tr>
            <tr className="border-t border-neutral-200">
              <th
                scope="row"
                className="px-3 py-4 text-sm text-left font-medium "
              >
                Service label
              </th>
              <td className="px-3 py-4 text-sm text-neutral-600 text-right tabular-nums">
                3
              </td>
              <td className="px-3 py-4 text-sm text-neutral-600 text-right tabular-nums">
                $90
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="border-t border-neutral-200">
              <th
                colSpan={2}
                scope="row"
                className="px-3 py-3 text-right text-sm font-medium"
              >
                Subtotal
              </th>
              <td className="px-3 py-3 text-right text-sm tabular-nums">
                $390
              </td>
            </tr>
            <tr>
              <th
                colSpan={2}
                scope="row"
                className="px-3 py-3 text-right text-sm font-medium"
              >
                Adjustment
              </th>
              <td className="px-3 py-3 text-right text-sm tabular-nums">
                -$20
              </td>
            </tr>
            <tr className="border-t border-neutral-200 bg-neutral-50">
              <th
                colSpan={2}
                scope="row"
                className="px-3 py-4 text-right text-base font-semibold"
              >
                Total
              </th>
              <td className="px-3 py-4 text-right text-base font-semibold tabular-nums">
                $370
              </td>
            </tr>
          </tfoot>
        </table>
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="#"
            className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            Download summary
          </a>
          <a
            href="#"
            className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            View source records
          </a>
        </div>
      </div>
    </section>
  )
}
