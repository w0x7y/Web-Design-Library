export default function DataTableGroupedHeaders() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Monthly volume by record</h2>
        <p className="mt-4 max-w-2xl text-lg text-pretty text-neutral-600">
          Months are grouped by quarter. Record names stay pinned while the figures scroll sideways.
        </p>
        <div
          role="region"
          tabIndex={0}
          aria-label="Monthly volume table"
          className="mt-8 overflow-x-auto rounded-lg border border-neutral-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
        >
          <table className="w-max min-w-full border-separate border-spacing-0">
            <caption className="sr-only">Units per record for each month, grouped by quarter, with yearly totals</caption>
            <colgroup>
              <col />
            </colgroup>
            <colgroup span={3} />
            <colgroup span={3} />
            <colgroup span={3} />
            <colgroup span={3} />
            <colgroup>
              <col />
            </colgroup>
            <thead className="bg-neutral-50 text-sm text-neutral-600">
              <tr>
                <th
                  rowSpan={2}
                  scope="col"
                  className="sticky left-0 z-10 w-36 border-r border-b border-neutral-200 bg-neutral-50 px-4 py-3 text-left align-bottom font-medium sm:w-48"
                >
                  Record
                </th>
                <th colSpan={3} scope="colgroup" className="border-b border-neutral-200 px-3 py-3 text-center font-medium">
                  Q1
                </th>
                <th colSpan={3} scope="colgroup" className="border-b border-l border-neutral-200 px-3 py-3 text-center font-medium">
                  Q2
                </th>
                <th colSpan={3} scope="colgroup" className="border-b border-l border-neutral-200 px-3 py-3 text-center font-medium">
                  Q3
                </th>
                <th colSpan={3} scope="colgroup" className="border-b border-l border-neutral-200 px-3 py-3 text-center font-medium">
                  Q4
                </th>
                <th rowSpan={2} scope="col" className="border-b border-l border-neutral-200 px-4 py-3 text-right align-bottom font-medium">
                  Total
                </th>
              </tr>
              <tr>
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, index) => (
                  <th
                    key={month}
                    scope="col"
                    className={
                      index > 0 && index % 3 === 0
                        ? 'border-b border-l border-neutral-200 px-3 py-3 text-right font-medium'
                        : 'border-b border-neutral-200 px-3 py-3 text-right font-medium'
                    }
                  >
                    {month}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Record label', id: 'ID 0012', months: [45, 61, 39, 40, 42, 59, 39, 68, 49, 38, 41, 63], total: 584 },
                { name: 'Item label', id: 'ID 0027', months: [46, 57, 47, 69, 45, 49, 56, 45, 67, 45, 56, 44], total: 626 },
                { name: 'Entry label', id: 'ID 0031', months: [59, 69, 77, 60, 58, 70, 62, 57, 63, 74, 57, 55], total: 761 },
                { name: 'Account label', id: 'ID 0045', months: [55, 65, 83, 79, 72, 81, 81, 75, 71, 67, 63, 67], total: 859 },
                { name: 'Collection label', id: 'ID 0058', months: [40, 52, 42, 49, 39, 25, 28, 53, 47, 31, 42, 30], total: 478 },
                { name: 'Segment label', id: 'ID 0063', months: [73, 49, 51, 67, 68, 69, 78, 76, 51, 52, 64, 77], total: 775 },
              ].map((record) => (
                <tr key={record.id}>
                  <th
                    scope="row"
                    className="sticky left-0 z-10 border-r border-b border-neutral-200 bg-white px-4 py-3 text-left font-normal"
                  >
                    <span className="block text-sm font-medium">{record.name}</span>
                    <span className="block text-xs text-neutral-500">{record.id}</span>
                  </th>
                  {record.months.map((value, index) => (
                    <td
                      key={index}
                      className={
                        index > 0 && index % 3 === 0
                          ? 'border-b border-l border-neutral-200 px-3 py-3 text-right text-sm text-neutral-600 tabular-nums'
                          : 'border-b border-neutral-200 px-3 py-3 text-right text-sm text-neutral-600 tabular-nums'
                      }
                    >
                      {value}
                    </td>
                  ))}
                  <td className="border-b border-l border-neutral-200 px-4 py-3 text-right text-sm font-medium tabular-nums">
                    {record.total}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-neutral-50 text-sm font-semibold">
              <tr>
                <th scope="row" className="sticky left-0 z-10 border-r border-neutral-200 bg-neutral-50 px-4 py-3 text-left font-semibold">
                  All records
                </th>
                {[318, 353, 339, 364, 324, 353, 344, 374, 348, 307, 323, 336].map((value, index) => (
                  <td
                    key={index}
                    className={
                      index > 0 && index % 3 === 0
                        ? 'border-l border-neutral-200 px-3 py-3 text-right tabular-nums'
                        : 'px-3 py-3 text-right tabular-nums'
                    }
                  >
                    {value}
                  </td>
                ))}
                <td className="border-l border-neutral-200 px-4 py-3 text-right tabular-nums">4,083</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">Units per month, January to December 2026</p>
          <a
            href="#"
            className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            Download CSV
          </a>
        </div>
      </div>
    </section>
  )
}
