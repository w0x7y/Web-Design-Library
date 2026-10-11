export default function DataTableAuditLog() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <header className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Account audit log
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-pretty text-neutral-600">
              Review recent events and the people responsible.
            </p>
          </div>
          <a
            href="#"
            className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            Download log
          </a>
        </header>
        <p className="mt-8 border-y border-neutral-200 py-3 text-sm font-semibold">
          <time dateTime="2026-10-11">11 Oct 2026</time>
        </p>
        <table className="w-full table-fixed text-left">
          <caption className="sr-only">
            Account events for 11 October 2026
          </caption>
          <thead className="bg-neutral-50">
            <tr>
              <th
                scope="col"
                className="px-3 py-3 text-left text-sm font-medium w-20"
              >
                Time
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-left text-sm font-medium hidden w-1/3 sm:table-cell"
              >
                Actor
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-left text-sm font-medium "
              >
                Event
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-neutral-200">
              <td className="px-3 py-4 text-xs text-neutral-500">
                <time dateTime="2026-10-11T09:41:00">09:41</time>
              </td>
              <td className="hidden px-3 py-4 text-sm text-neutral-600 sm:table-cell">
                Alex Rivera
              </td>
              <th
                scope="row"
                className="px-3 py-4 text-left text-sm font-medium"
              >
                Record updated
                <span className="mt-1 block text-xs font-normal text-neutral-500">
                  <span className="sm:hidden">Alex Rivera: </span>Changed a
                  record field.
                </span>
              </th>
            </tr>
            <tr className="border-t border-neutral-200">
              <td className="px-3 py-4 text-xs text-neutral-500">
                <time dateTime="2026-10-11T09:36:00">09:36</time>
              </td>
              <td className="hidden px-3 py-4 text-sm text-neutral-600 sm:table-cell">
                Jordan Lee
              </td>
              <th
                scope="row"
                className="px-3 py-4 text-left text-sm font-medium"
              >
                Member invited
                <span className="mt-1 block text-xs font-normal text-neutral-500">
                  <span className="sm:hidden">Jordan Lee: </span>Added a
                  workspace invitation.
                </span>
              </th>
            </tr>
            <tr className="border-t border-neutral-200">
              <td className="px-3 py-4 text-xs text-neutral-500">
                <time dateTime="2026-10-11T09:24:00">09:24</time>
              </td>
              <td className="hidden px-3 py-4 text-sm text-neutral-600 sm:table-cell">
                Alex Rivera
              </td>
              <th
                scope="row"
                className="px-3 py-4 text-left text-sm font-medium"
              >
                Report exported
                <span className="mt-1 block text-xs font-normal text-neutral-500">
                  <span className="sm:hidden">Alex Rivera: </span>Requested a
                  record download.
                </span>
              </th>
            </tr>
            <tr className="border-t border-neutral-200">
              <td className="px-3 py-4 text-xs text-neutral-500">
                <time dateTime="2026-10-11T09:12:00">09:12</time>
              </td>
              <td className="hidden px-3 py-4 text-sm text-neutral-600 sm:table-cell">
                Sam Taylor
              </td>
              <th
                scope="row"
                className="px-3 py-4 text-left text-sm font-medium"
              >
                Settings changed
                <span className="mt-1 block text-xs font-normal text-neutral-500">
                  <span className="sm:hidden">Sam Taylor: </span>Updated an
                  account preference.
                </span>
              </th>
            </tr>
          </tbody>
        </table>
        <p className="mt-6 text-sm text-neutral-500">
          4 events in this reporting day
        </p>
      </div>
    </section>
  )
}
