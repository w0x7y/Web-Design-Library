export default function DataTableInlineEdit() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Edit record values
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-pretty text-neutral-600">
            Update the field values for each record in place.
          </p>
        </div>
        <form className="mt-8">
          <table className="w-full table-fixed text-left">
            <caption className="sr-only">
              Editable names and counts for three records
            </caption>
            <thead className="bg-neutral-50">
              <tr>
                <th
                  scope="col"
                  className="px-3 py-3 text-left text-sm font-medium w-1/2"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-3 py-3 text-left text-sm font-medium w-1/4"
                >
                  Count
                </th>
                <th
                  scope="col"
                  className="px-3 py-3 text-left text-sm font-medium w-1/4"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-neutral-200">
                <td className="p-2">
                  <label
                    htmlFor="data-table-inline-edit-name-1"
                    className="sr-only"
                  >
                    Name for record 1
                  </label>
                  <input
                    id="data-table-inline-edit-name-1"
                    name="name-1"
                    type="text"
                    defaultValue="Item label"
                    className="h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  />
                </td>
                <td className="p-2">
                  <label
                    htmlFor="data-table-inline-edit-count-1"
                    className="sr-only"
                  >
                    Count for record 1
                  </label>
                  <input
                    id="data-table-inline-edit-count-1"
                    name="count-1"
                    type="number"
                    min={0}
                    defaultValue="24"
                    className="h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white px-1 sm:px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  />
                </td>
                <td className="p-2">
                  <button
                    type="submit"
                    name="record"
                    value="1"
                    aria-label="Save record 1"
                    className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 w-full"
                  >
                    Save
                  </button>
                </td>
              </tr>
              <tr className="border-t border-neutral-200">
                <td className="p-2">
                  <label
                    htmlFor="data-table-inline-edit-name-2"
                    className="sr-only"
                  >
                    Name for record 2
                  </label>
                  <input
                    id="data-table-inline-edit-name-2"
                    name="name-2"
                    type="text"
                    defaultValue="Entry label"
                    className="h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  />
                </td>
                <td className="p-2">
                  <label
                    htmlFor="data-table-inline-edit-count-2"
                    className="sr-only"
                  >
                    Count for record 2
                  </label>
                  <input
                    id="data-table-inline-edit-count-2"
                    name="count-2"
                    type="number"
                    min={0}
                    defaultValue="18"
                    className="h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white px-1 sm:px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  />
                </td>
                <td className="p-2">
                  <button
                    type="submit"
                    name="record"
                    value="2"
                    aria-label="Save record 2"
                    className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 w-full"
                  >
                    Save
                  </button>
                </td>
              </tr>
              <tr className="border-t border-neutral-200">
                <td className="p-2">
                  <label
                    htmlFor="data-table-inline-edit-name-3"
                    className="sr-only"
                  >
                    Name for record 3
                  </label>
                  <input
                    id="data-table-inline-edit-name-3"
                    name="name-3"
                    type="text"
                    defaultValue="Record label"
                    className="h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  />
                </td>
                <td className="p-2">
                  <label
                    htmlFor="data-table-inline-edit-count-3"
                    className="sr-only"
                  >
                    Count for record 3
                  </label>
                  <input
                    id="data-table-inline-edit-count-3"
                    name="count-3"
                    type="number"
                    min={0}
                    defaultValue="12"
                    className="h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white px-1 sm:px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  />
                </td>
                <td className="p-2">
                  <button
                    type="submit"
                    name="record"
                    value="3"
                    aria-label="Save record 3"
                    className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 w-full"
                  >
                    Save
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="mt-6 text-sm text-neutral-600">
            Short note explaining how each row is saved.
          </p>
        </form>
      </div>
    </section>
  )
}
