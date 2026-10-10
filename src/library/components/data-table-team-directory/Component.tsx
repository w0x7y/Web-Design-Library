export default function DataTableTeamDirectory() {
  return (
    <section className="bg-white text-teal-950 px-6 py-10 sm:px-12">
      <div className="mx-auto max-w-5xl">
        <header className="flex flex-wrap items-start justify-between gap-5">
          <div className="grid gap-2">
            <h2 className="text-3xl font-semibold tracking-tight">
              People in your workspace
            </h2>
            <p className="max-w-xl text-sm leading-6 text-teal-700">
              Roles and access for the team behind the work.
            </p>
          </div>
          <a
            className="self-start text-sm font-medium underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
            href="#"
          >
            Invite a teammate
          </a>
        </header>
        <div className="my-7">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-teal-50 px-3 py-1 text-xs text-teal-800">
              3 active members
            </span>
            <p className="text-xs text-teal-700">2 seats available</p>
          </div>
        </div>
        <table role="table" className="block w-full text-left text-sm md:table">
          <caption className="sr-only">Workspace members table</caption>
          <thead role="rowgroup" className="sr-only md:not-sr-only md:table-header-group">
            <tr role="row">
              <th
                className="border-b border-teal-100 px-4 py-3 text-xs font-medium text-teal-700"
                role="columnheader"
                scope="col"
              >
                Member
              </th>
              <th
                className="border-b border-teal-100 px-4 py-3 text-xs font-medium text-teal-700"
                role="columnheader"
                scope="col"
              >
                Role
              </th>
              <th
                className="border-b border-teal-100 px-4 py-3 text-xs font-medium text-teal-700"
                role="columnheader"
                scope="col"
              >
                Joined
              </th>
              <th
                className="border-b border-teal-100 px-4 py-3 text-xs font-medium text-teal-700"
                role="columnheader"
                scope="col"
              >
                Access
              </th>
            </tr>
          </thead>
          <tbody role="rowgroup" className="grid gap-3 md:table-row-group">
            <tr role="row" className="grid rounded-lg border border-teal-100 p-3 md:table-row md:border-0 md:p-0">
              <th
                className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-teal-100 md:px-4 md:py-4 font-medium"
                role="rowheader"
                scope="row"
              >
                <span aria-hidden="true" className="shrink-0 text-xs font-normal text-teal-700 md:hidden">
                  Member
                </span>
                <span className="min-w-0 break-words">Alex Rivera</span>
              </th>
              <td role="cell" className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-teal-100 md:px-4 md:py-4 font-normal">
                <span aria-hidden="true" className="shrink-0 text-xs font-normal text-teal-700 md:hidden">
                  Role
                </span>
                <span className="min-w-0 break-words">Owner</span>
              </td>
              <td role="cell" className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-teal-100 md:px-4 md:py-4 font-normal">
                <span aria-hidden="true" className="shrink-0 text-xs font-normal text-teal-700 md:hidden">
                  Joined
                </span>
                <span className="min-w-0 break-words"><time dateTime="2026-10-02">Oct 2</time></span>
              </td>
              <td role="cell" className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-teal-100 md:px-4 md:py-4 font-normal">
                <span aria-hidden="true" className="shrink-0 text-xs font-normal text-teal-700 md:hidden">
                  Access
                </span>
                <span className="min-w-0 break-words">Full workspace</span>
              </td>
            </tr>
            <tr role="row" className="grid rounded-lg border border-teal-100 p-3 md:table-row md:border-0 md:p-0">
              <th
                className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-teal-100 md:px-4 md:py-4 font-medium"
                role="rowheader"
                scope="row"
              >
                <span aria-hidden="true" className="shrink-0 text-xs font-normal text-teal-700 md:hidden">
                  Member
                </span>
                <span className="min-w-0 break-words">Maya Chen</span>
              </th>
              <td role="cell" className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-teal-100 md:px-4 md:py-4 font-normal">
                <span aria-hidden="true" className="shrink-0 text-xs font-normal text-teal-700 md:hidden">
                  Role
                </span>
                <span className="min-w-0 break-words">Designer</span>
              </td>
              <td role="cell" className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-teal-100 md:px-4 md:py-4 font-normal">
                <span aria-hidden="true" className="shrink-0 text-xs font-normal text-teal-700 md:hidden">
                  Joined
                </span>
                <span className="min-w-0 break-words"><time dateTime="2026-10-04">Oct 4</time></span>
              </td>
              <td role="cell" className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-teal-100 md:px-4 md:py-4 font-normal">
                <span aria-hidden="true" className="shrink-0 text-xs font-normal text-teal-700 md:hidden">
                  Access
                </span>
                <span className="min-w-0 break-words">Projects only</span>
              </td>
            </tr>
            <tr role="row" className="grid rounded-lg border border-teal-100 p-3 md:table-row md:border-0 md:p-0">
              <th
                className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-teal-100 md:px-4 md:py-4 font-medium"
                role="rowheader"
                scope="row"
              >
                <span aria-hidden="true" className="shrink-0 text-xs font-normal text-teal-700 md:hidden">
                  Member
                </span>
                <span className="min-w-0 break-words">Sam Okafor</span>
              </th>
              <td role="cell" className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-teal-100 md:px-4 md:py-4 font-normal">
                <span aria-hidden="true" className="shrink-0 text-xs font-normal text-teal-700 md:hidden">
                  Role
                </span>
                <span className="min-w-0 break-words">Guest</span>
              </td>
              <td role="cell" className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-teal-100 md:px-4 md:py-4 font-normal">
                <span aria-hidden="true" className="shrink-0 text-xs font-normal text-teal-700 md:hidden">
                  Joined
                </span>
                <span className="min-w-0 break-words"><time dateTime="2026-10-08">Oct 8</time></span>
              </td>
              <td role="cell" className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-teal-100 md:px-4 md:py-4 font-normal">
                <span aria-hidden="true" className="shrink-0 text-xs font-normal text-teal-700 md:hidden">
                  Access
                </span>
                <span className="min-w-0 break-words">One project</span>
              </td>
            </tr>
          </tbody>
        </table>
        <footer className="mt-5 flex flex-wrap items-center justify-between gap-4 text-xs text-teal-700">
          <p>Showing all 3 records</p>
          <p>Updated October 10, 2026</p>
        </footer>
      </div>
    </section>
  )
}
