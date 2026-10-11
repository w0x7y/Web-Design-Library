export default function DataTableGroupedSections() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Grouped record overview
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-pretty text-neutral-600">
            Describe how records are organized into their reporting groups.
          </p>
        </div>
        <table className="mt-8 w-full table-fixed text-left">
          <caption className="sr-only">
            Records grouped by reporting period
          </caption>
          <thead className="bg-neutral-50">
            <tr>
              <th
                scope="col"
                className="px-3 py-3 text-left text-sm font-medium w-1/2"
              >
                Record
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-left text-sm font-medium "
              >
                Status
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-left text-sm font-medium text-right"
              >
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-neutral-200">
              <th
                colSpan={3}
                scope="rowgroup"
                className="px-3 py-3 text-left text-xs font-semibold text-neutral-500"
              >
                Current period
              </th>
            </tr>
            <tr className="border-t border-neutral-200">
              <th
                scope="row"
                className="px-3 py-4 text-sm text-left font-medium "
              >
                Item label
              </th>
              <td className="px-3 py-4 text-sm text-neutral-600 ">Active</td>
              <td className="px-3 py-4 text-sm text-neutral-600 text-right tabular-nums">
                1,240
              </td>
            </tr>
            <tr className="border-t border-neutral-200">
              <th
                scope="row"
                className="px-3 py-4 text-sm text-left font-medium "
              >
                Entry label
              </th>
              <td className="px-3 py-4 text-sm text-neutral-600 ">Active</td>
              <td className="px-3 py-4 text-sm text-neutral-600 text-right tabular-nums">
                820
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="border-t border-neutral-200">
              <th
                colSpan={3}
                scope="rowgroup"
                className="px-3 py-3 text-left text-xs font-semibold text-neutral-500"
              >
                Previous period
              </th>
            </tr>
            <tr className="border-t border-neutral-200">
              <th
                scope="row"
                className="px-3 py-4 text-sm text-left font-medium "
              >
                Record label
              </th>
              <td className="px-3 py-4 text-sm text-neutral-600 ">Archived</td>
              <td className="px-3 py-4 text-sm text-neutral-600 text-right tabular-nums">
                680
              </td>
            </tr>
            <tr className="border-t border-neutral-200">
              <th
                scope="row"
                className="px-3 py-4 text-sm text-left font-medium "
              >
                Collection label
              </th>
              <td className="px-3 py-4 text-sm text-neutral-600 ">Archived</td>
              <td className="px-3 py-4 text-sm text-neutral-600 text-right tabular-nums">
                430
              </td>
            </tr>
          </tbody>
        </table>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">4 records across 2 groups</p>
          <a
            href="#"
            className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            Export grouped records
          </a>
        </div>
      </div>
    </section>
  )
}
