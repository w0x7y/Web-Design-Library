export default function DataTableAvailabilityGrid() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Team availability
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-pretty text-neutral-600">
            Compare open days before choosing a shared meeting time.
          </p>
        </div>
        <table className="mt-8 w-full table-fixed text-left">
          <caption className="sr-only">
            Team availability from Monday 12 to Wednesday 14 October
          </caption>
          <thead className="bg-neutral-50">
            <tr>
              <th
                scope="col"
                className="px-3 py-3 text-left text-sm font-medium w-1/3"
              >
                Member
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-left text-sm font-medium text-center px-1"
              >
                Mon 12
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-left text-sm font-medium text-center px-1"
              >
                Tue 13
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-left text-sm font-medium text-center px-1"
              >
                Wed 14
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-neutral-200">
              <th
                scope="row"
                className="px-3 py-4 text-sm text-left font-medium "
              >
                Alex Rivera
              </th>
              <td className="px-1 py-4 text-center text-xs font-medium text-neutral-900">
                Free
              </td>
              <td className="px-1 py-4 text-center text-xs text-neutral-500">
                Busy
              </td>
              <td className="px-1 py-4 text-center text-xs font-medium text-neutral-900">
                Free
              </td>
            </tr>
            <tr className="border-t border-neutral-200">
              <th
                scope="row"
                className="px-3 py-4 text-sm text-left font-medium "
              >
                Jordan Lee
              </th>
              <td className="px-1 py-4 text-center text-xs text-neutral-500">
                Busy
              </td>
              <td className="px-1 py-4 text-center text-xs font-medium text-neutral-900">
                Free
              </td>
              <td className="px-1 py-4 text-center text-xs font-medium text-neutral-900">
                Free
              </td>
            </tr>
            <tr className="border-t border-neutral-200">
              <th
                scope="row"
                className="px-3 py-4 text-sm text-left font-medium "
              >
                Sam Taylor
              </th>
              <td className="px-1 py-4 text-center text-xs font-medium text-neutral-900">
                Free
              </td>
              <td className="px-1 py-4 text-center text-xs font-medium text-neutral-900">
                Free
              </td>
              <td className="px-1 py-4 text-center text-xs text-neutral-500">
                Busy
              </td>
            </tr>
          </tbody>
        </table>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">
            Free: open day · Busy: unavailable
          </p>
          <a
            href="#"
            className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            Open full schedule
          </a>
        </div>
      </div>
    </section>
  )
}
