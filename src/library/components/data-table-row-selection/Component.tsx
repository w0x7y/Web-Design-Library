export default function DataTableRowSelection() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Items for review</h2>
        <p className="mt-3 text-base text-neutral-600">Select records to review them or apply an action together.</p>
        <div className="group mt-8 min-w-0 rounded-lg border border-neutral-200">
          <div className="invisible flex flex-wrap items-center justify-between gap-4 border-b border-neutral-200 p-4 group-has-[:checked]:visible">
            <p className="text-sm font-medium">Bulk actions for selected rows</p>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                aria-label="Archive selected rows"
                className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Archive
              </button>
              <button
                type="button"
                aria-label="Assign selected rows"
                className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Assign
              </button>
              <button
                type="button"
                aria-label="Delete selected rows"
                className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Delete
              </button>
            </div>
          </div>
          <div
            role="region"
            tabIndex={0}
            aria-label="Selectable items table"
            className="min-w-0 overflow-x-auto rounded-b-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            <table className="w-full min-w-[28rem] md:min-w-[48rem]">
              <caption className="sr-only">Selectable records with owners, statuses, dates and amounts</caption>
              <thead className="bg-neutral-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-medium text-neutral-600 ">
                    Selection
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-medium text-neutral-600 ">
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-sm font-medium text-neutral-600 hidden md:table-cell"
                  >
                    Owner
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-sm font-medium text-neutral-600 ">
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-sm font-medium text-neutral-600 hidden md:table-cell"
                  >
                    Date
                  </th>
                  <th scope="col" className="px-4 py-3 text-right text-sm font-medium text-neutral-600 text-right">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-neutral-200 has-[:checked]:bg-neutral-50">
                  <td className="px-4 py-4">
                    <input
                      type="checkbox"
                      name="selected"
                      value="001"
                      defaultChecked
                      aria-label="Select Item 001"
                      className="size-4 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    />
                  </td>
                  <th scope="row" className="whitespace-nowrap px-4 py-4 text-left text-sm font-medium">
                    Item 001
                  </th>
                  <td className="hidden px-4 py-4 text-sm text-neutral-600 md:table-cell">Alex Rivera</td>
                  <td className="px-4 py-4">
                    <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                      Active
                    </span>
                  </td>
                  <td className="hidden whitespace-nowrap px-4 py-4 text-sm text-neutral-600 md:table-cell">
                    Mar 14, 2026
                  </td>
                  <td className="px-4 py-4 text-right text-sm tabular-nums">$240.00</td>
                </tr>
                <tr className="border-t border-neutral-200 has-[:checked]:bg-neutral-50">
                  <td className="px-4 py-4">
                    <input
                      type="checkbox"
                      name="selected"
                      value="002"
                      aria-label="Select Item 002"
                      className="size-4 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    />
                  </td>
                  <th scope="row" className="whitespace-nowrap px-4 py-4 text-left text-sm font-medium">
                    Item 002
                  </th>
                  <td className="hidden px-4 py-4 text-sm text-neutral-600 md:table-cell">Jordan Lee</td>
                  <td className="px-4 py-4">
                    <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                      Pending
                    </span>
                  </td>
                  <td className="hidden whitespace-nowrap px-4 py-4 text-sm text-neutral-600 md:table-cell">
                    Mar 13, 2026
                  </td>
                  <td className="px-4 py-4 text-right text-sm tabular-nums">$160.00</td>
                </tr>
                <tr className="border-t border-neutral-200 has-[:checked]:bg-neutral-50">
                  <td className="px-4 py-4">
                    <input
                      type="checkbox"
                      name="selected"
                      value="003"
                      aria-label="Select Item 003"
                      className="size-4 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    />
                  </td>
                  <th scope="row" className="whitespace-nowrap px-4 py-4 text-left text-sm font-medium">
                    Item 003
                  </th>
                  <td className="hidden px-4 py-4 text-sm text-neutral-600 md:table-cell">Sam Taylor</td>
                  <td className="px-4 py-4">
                    <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                      Active
                    </span>
                  </td>
                  <td className="hidden whitespace-nowrap px-4 py-4 text-sm text-neutral-600 md:table-cell">
                    Mar 12, 2026
                  </td>
                  <td className="px-4 py-4 text-right text-sm tabular-nums">$200.00</td>
                </tr>
                <tr className="border-t border-neutral-200 has-[:checked]:bg-neutral-50">
                  <td className="px-4 py-4">
                    <input
                      type="checkbox"
                      name="selected"
                      value="004"
                      aria-label="Select Item 004"
                      className="size-4 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    />
                  </td>
                  <th scope="row" className="whitespace-nowrap px-4 py-4 text-left text-sm font-medium">
                    Item 004
                  </th>
                  <td className="hidden px-4 py-4 text-sm text-neutral-600 md:table-cell">Casey Morgan</td>
                  <td className="px-4 py-4">
                    <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                      Archived
                    </span>
                  </td>
                  <td className="hidden whitespace-nowrap px-4 py-4 text-sm text-neutral-600 md:table-cell">
                    Mar 11, 2026
                  </td>
                  <td className="px-4 py-4 text-right text-sm tabular-nums">$120.00</td>
                </tr>
                <tr className="border-t border-neutral-200 has-[:checked]:bg-neutral-50">
                  <td className="px-4 py-4">
                    <input
                      type="checkbox"
                      name="selected"
                      value="005"
                      aria-label="Select Item 005"
                      className="size-4 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    />
                  </td>
                  <th scope="row" className="whitespace-nowrap px-4 py-4 text-left text-sm font-medium">
                    Item 005
                  </th>
                  <td className="hidden px-4 py-4 text-sm text-neutral-600 md:table-cell">Riley Chen</td>
                  <td className="px-4 py-4">
                    <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                      Active
                    </span>
                  </td>
                  <td className="hidden whitespace-nowrap px-4 py-4 text-sm text-neutral-600 md:table-cell">
                    Mar 10, 2026
                  </td>
                  <td className="px-4 py-4 text-right text-sm tabular-nums">$300.00</td>
                </tr>
                <tr className="border-t border-neutral-200 has-[:checked]:bg-neutral-50">
                  <td className="px-4 py-4">
                    <input
                      type="checkbox"
                      name="selected"
                      value="006"
                      aria-label="Select Item 006"
                      className="size-4 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    />
                  </td>
                  <th scope="row" className="whitespace-nowrap px-4 py-4 text-left text-sm font-medium">
                    Item 006
                  </th>
                  <td className="hidden px-4 py-4 text-sm text-neutral-600 md:table-cell">Morgan Blake</td>
                  <td className="px-4 py-4">
                    <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                      Pending
                    </span>
                  </td>
                  <td className="hidden whitespace-nowrap px-4 py-4 text-sm text-neutral-600 md:table-cell">
                    Mar 09, 2026
                  </td>
                  <td className="px-4 py-4 text-right text-sm tabular-nums">$180.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
