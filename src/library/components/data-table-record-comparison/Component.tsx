export default function DataTableRecordComparison() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Compare selected records
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-pretty text-neutral-600">
            Describe the attributes that matter when comparing these entries.
          </p>
        </div>
        <table className="mt-8 w-full table-fixed text-left">
          <caption className="sr-only">
            Attribute comparison of two selected records
          </caption>
          <thead>
            <tr>
              <th
                scope="col"
                className="w-1/3 px-3 py-4 text-left text-sm font-medium"
              >
                Attribute
              </th>
              <th
                scope="col"
                className="px-3 py-4 text-left text-sm font-semibold"
              >
                Record label
                <p className="mt-2 font-normal">
                  <a
                    href="#"
                    aria-label="Open first record"
                    className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  >
                    Open record
                  </a>
                </p>
              </th>
              <th
                scope="col"
                className="px-3 py-4 text-left text-sm font-semibold"
              >
                Entry label
                <p className="mt-2 font-normal">
                  <a
                    href="#"
                    className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  >
                    Open entry
                  </a>
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-neutral-200">
              <th
                scope="row"
                className="px-3 py-4 text-sm text-left font-medium "
              >
                Owner
              </th>
              <td className="px-3 py-4 text-sm text-neutral-600 ">
                Alex Rivera
              </td>
              <td className="px-3 py-4 text-sm text-neutral-600 ">
                Jordan Lee
              </td>
            </tr>
            <tr className="border-t border-neutral-200">
              <th
                scope="row"
                className="px-3 py-4 text-sm text-left font-medium "
              >
                Status
              </th>
              <td className="px-3 py-4 text-sm text-neutral-600 ">Active</td>
              <td className="px-3 py-4 text-sm text-neutral-600 ">Review</td>
            </tr>
            <tr className="border-t border-neutral-200">
              <th
                scope="row"
                className="px-3 py-4 text-sm text-left font-medium "
              >
                Created
              </th>
              <td className="px-3 py-4 text-sm text-neutral-600 ">Mar 14</td>
              <td className="px-3 py-4 text-sm text-neutral-600 ">Mar 12</td>
            </tr>
            <tr className="border-t border-neutral-200">
              <th
                scope="row"
                className="px-3 py-4 text-sm text-left font-medium "
              >
                Items
              </th>
              <td className="px-3 py-4 text-sm text-neutral-600 ">24</td>
              <td className="px-3 py-4 text-sm text-neutral-600 ">18</td>
            </tr>
            <tr className="border-t border-neutral-200">
              <th
                scope="row"
                className="px-3 py-4 text-sm text-left font-medium "
              >
                Completion
              </th>
              <td className="px-3 py-4 text-sm text-neutral-600 ">84%</td>
              <td className="px-3 py-4 text-sm text-neutral-600 ">68%</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-6 text-sm text-neutral-500">
          Short note describing the comparison scope.
        </p>
      </div>
    </section>
  )
}
