export default function DataTableStackedCards() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <header className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Members</h2>
            <p className="mt-3 text-base text-neutral-600">
              Describe who appears in this directory and how access is managed.
            </p>
          </div>
          <a
            href="#"
            className="shrink-0 text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            Manage access
          </a>
        </header>
        <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-b border-neutral-200 pb-6 text-sm">
          <div className="flex gap-2">
            <dt className="text-neutral-500">Members</dt>
            <dd className="font-medium tabular-nums">5</dd>
          </div>
          <div className="flex gap-2">
            <dt className="text-neutral-500">Active</dt>
            <dd className="font-medium tabular-nums">3</dd>
          </div>
          <div className="flex gap-2">
            <dt className="text-neutral-500">Roles</dt>
            <dd className="font-medium tabular-nums">2</dd>
          </div>
        </dl>
        <table role="table" className="mt-6 block w-full md:table">
          <caption className="sr-only">Member directory with roles, status and last activity</caption>
          <thead role="rowgroup" className="sr-only bg-neutral-50 md:not-sr-only md:table-header-group">
            <tr role="row">
              <th role="columnheader" scope="col" className="px-4 py-3 text-left text-sm font-medium text-neutral-600">
                Name
              </th>
              <th role="columnheader" scope="col" className="px-4 py-3 text-left text-sm font-medium text-neutral-600">
                Role
              </th>
              <th role="columnheader" scope="col" className="px-4 py-3 text-left text-sm font-medium text-neutral-600">
                Status
              </th>
              <th role="columnheader" scope="col" className="px-4 py-3 text-left text-sm font-medium text-neutral-600">
                Last active
              </th>
              <th role="columnheader" scope="col" className="px-4 py-3 text-left text-sm font-medium text-neutral-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody role="rowgroup" className="block md:table-row-group">
            <tr
              role="row"
              className="mb-4 grid gap-3 rounded-lg border border-neutral-200 bg-white p-4 last:mb-0 md:mb-0 md:table-row md:rounded-none md:border-x-0 md:border-b-0 md:p-0"
            >
              <th role="rowheader" scope="row" className="block pb-2 text-left md:table-cell md:px-4 md:py-4">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600"
                  >
                    AR
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-medium">Alex Rivera</span>
                    <span className="mt-1 block break-all text-xs font-normal text-neutral-500">name@example.com</span>
                  </span>
                </div>
              </th>
              <td
                role="cell"
                className="grid grid-cols-[6rem_minmax(0,1fr)] items-center gap-3 text-sm md:table-cell md:px-4 md:py-4"
              >
                <span aria-hidden="true" className="text-neutral-500 md:hidden">
                  Role
                </span>
                <span>Admin</span>
              </td>
              <td
                role="cell"
                className="grid grid-cols-[6rem_minmax(0,1fr)] items-center gap-3 text-sm md:table-cell md:px-4 md:py-4"
              >
                <span aria-hidden="true" className="text-neutral-500 md:hidden">
                  Status
                </span>
                <span>
                  <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                    Active
                  </span>
                </span>
              </td>
              <td
                role="cell"
                className="grid grid-cols-[6rem_minmax(0,1fr)] items-center gap-3 text-sm md:table-cell md:px-4 md:py-4"
              >
                <span aria-hidden="true" className="text-neutral-500 md:hidden">
                  Last active
                </span>
                <span>Mar 14</span>
              </td>
              <td
                role="cell"
                className="grid grid-cols-[6rem_minmax(0,1fr)] items-center gap-3 text-sm md:table-cell md:px-4 md:py-4"
              >
                <span aria-hidden="true" className="text-neutral-500 md:hidden">
                  Actions
                </span>
                <span>
                  <a
                    href="#"
                    aria-label="Edit Alex Rivera"
                    className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  >
                    Edit
                  </a>
                </span>
              </td>
            </tr>
            <tr
              role="row"
              className="mb-4 grid gap-3 rounded-lg border border-neutral-200 bg-white p-4 last:mb-0 md:mb-0 md:table-row md:rounded-none md:border-x-0 md:border-b-0 md:p-0"
            >
              <th role="rowheader" scope="row" className="block pb-2 text-left md:table-cell md:px-4 md:py-4">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600"
                  >
                    JL
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-medium">Jordan Lee</span>
                    <span className="mt-1 block break-all text-xs font-normal text-neutral-500">
                      jordan@example.com
                    </span>
                  </span>
                </div>
              </th>
              <td
                role="cell"
                className="grid grid-cols-[6rem_minmax(0,1fr)] items-center gap-3 text-sm md:table-cell md:px-4 md:py-4"
              >
                <span aria-hidden="true" className="text-neutral-500 md:hidden">
                  Role
                </span>
                <span>Member</span>
              </td>
              <td
                role="cell"
                className="grid grid-cols-[6rem_minmax(0,1fr)] items-center gap-3 text-sm md:table-cell md:px-4 md:py-4"
              >
                <span aria-hidden="true" className="text-neutral-500 md:hidden">
                  Status
                </span>
                <span>
                  <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                    Invited
                  </span>
                </span>
              </td>
              <td
                role="cell"
                className="grid grid-cols-[6rem_minmax(0,1fr)] items-center gap-3 text-sm md:table-cell md:px-4 md:py-4"
              >
                <span aria-hidden="true" className="text-neutral-500 md:hidden">
                  Last active
                </span>
                <span>Mar 13</span>
              </td>
              <td
                role="cell"
                className="grid grid-cols-[6rem_minmax(0,1fr)] items-center gap-3 text-sm md:table-cell md:px-4 md:py-4"
              >
                <span aria-hidden="true" className="text-neutral-500 md:hidden">
                  Actions
                </span>
                <span>
                  <a
                    href="#"
                    aria-label="Edit Jordan Lee"
                    className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  >
                    Edit
                  </a>
                </span>
              </td>
            </tr>
            <tr
              role="row"
              className="mb-4 grid gap-3 rounded-lg border border-neutral-200 bg-white p-4 last:mb-0 md:mb-0 md:table-row md:rounded-none md:border-x-0 md:border-b-0 md:p-0"
            >
              <th role="rowheader" scope="row" className="block pb-2 text-left md:table-cell md:px-4 md:py-4">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600"
                  >
                    ST
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-medium">Sam Taylor</span>
                    <span className="mt-1 block break-all text-xs font-normal text-neutral-500">sam@example.com</span>
                  </span>
                </div>
              </th>
              <td
                role="cell"
                className="grid grid-cols-[6rem_minmax(0,1fr)] items-center gap-3 text-sm md:table-cell md:px-4 md:py-4"
              >
                <span aria-hidden="true" className="text-neutral-500 md:hidden">
                  Role
                </span>
                <span>Member</span>
              </td>
              <td
                role="cell"
                className="grid grid-cols-[6rem_minmax(0,1fr)] items-center gap-3 text-sm md:table-cell md:px-4 md:py-4"
              >
                <span aria-hidden="true" className="text-neutral-500 md:hidden">
                  Status
                </span>
                <span>
                  <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                    Active
                  </span>
                </span>
              </td>
              <td
                role="cell"
                className="grid grid-cols-[6rem_minmax(0,1fr)] items-center gap-3 text-sm md:table-cell md:px-4 md:py-4"
              >
                <span aria-hidden="true" className="text-neutral-500 md:hidden">
                  Last active
                </span>
                <span>Mar 12</span>
              </td>
              <td
                role="cell"
                className="grid grid-cols-[6rem_minmax(0,1fr)] items-center gap-3 text-sm md:table-cell md:px-4 md:py-4"
              >
                <span aria-hidden="true" className="text-neutral-500 md:hidden">
                  Actions
                </span>
                <span>
                  <a
                    href="#"
                    aria-label="Edit Sam Taylor"
                    className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  >
                    Edit
                  </a>
                </span>
              </td>
            </tr>
            <tr
              role="row"
              className="mb-4 grid gap-3 rounded-lg border border-neutral-200 bg-white p-4 last:mb-0 md:mb-0 md:table-row md:rounded-none md:border-x-0 md:border-b-0 md:p-0"
            >
              <th role="rowheader" scope="row" className="block pb-2 text-left md:table-cell md:px-4 md:py-4">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600"
                  >
                    CM
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-medium">Casey Morgan</span>
                    <span className="mt-1 block break-all text-xs font-normal text-neutral-500">casey@example.com</span>
                  </span>
                </div>
              </th>
              <td
                role="cell"
                className="grid grid-cols-[6rem_minmax(0,1fr)] items-center gap-3 text-sm md:table-cell md:px-4 md:py-4"
              >
                <span aria-hidden="true" className="text-neutral-500 md:hidden">
                  Role
                </span>
                <span>Member</span>
              </td>
              <td
                role="cell"
                className="grid grid-cols-[6rem_minmax(0,1fr)] items-center gap-3 text-sm md:table-cell md:px-4 md:py-4"
              >
                <span aria-hidden="true" className="text-neutral-500 md:hidden">
                  Status
                </span>
                <span>
                  <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                    Suspended
                  </span>
                </span>
              </td>
              <td
                role="cell"
                className="grid grid-cols-[6rem_minmax(0,1fr)] items-center gap-3 text-sm md:table-cell md:px-4 md:py-4"
              >
                <span aria-hidden="true" className="text-neutral-500 md:hidden">
                  Last active
                </span>
                <span>Mar 11</span>
              </td>
              <td
                role="cell"
                className="grid grid-cols-[6rem_minmax(0,1fr)] items-center gap-3 text-sm md:table-cell md:px-4 md:py-4"
              >
                <span aria-hidden="true" className="text-neutral-500 md:hidden">
                  Actions
                </span>
                <span>
                  <a
                    href="#"
                    aria-label="Edit Casey Morgan"
                    className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  >
                    Edit
                  </a>
                </span>
              </td>
            </tr>
            <tr
              role="row"
              className="mb-4 grid gap-3 rounded-lg border border-neutral-200 bg-white p-4 last:mb-0 md:mb-0 md:table-row md:rounded-none md:border-x-0 md:border-b-0 md:p-0"
            >
              <th role="rowheader" scope="row" className="block pb-2 text-left md:table-cell md:px-4 md:py-4">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600"
                  >
                    RC
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-medium">Riley Chen</span>
                    <span className="mt-1 block break-all text-xs font-normal text-neutral-500">riley@example.com</span>
                  </span>
                </div>
              </th>
              <td
                role="cell"
                className="grid grid-cols-[6rem_minmax(0,1fr)] items-center gap-3 text-sm md:table-cell md:px-4 md:py-4"
              >
                <span aria-hidden="true" className="text-neutral-500 md:hidden">
                  Role
                </span>
                <span>Admin</span>
              </td>
              <td
                role="cell"
                className="grid grid-cols-[6rem_minmax(0,1fr)] items-center gap-3 text-sm md:table-cell md:px-4 md:py-4"
              >
                <span aria-hidden="true" className="text-neutral-500 md:hidden">
                  Status
                </span>
                <span>
                  <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                    Active
                  </span>
                </span>
              </td>
              <td
                role="cell"
                className="grid grid-cols-[6rem_minmax(0,1fr)] items-center gap-3 text-sm md:table-cell md:px-4 md:py-4"
              >
                <span aria-hidden="true" className="text-neutral-500 md:hidden">
                  Last active
                </span>
                <span>Mar 10</span>
              </td>
              <td
                role="cell"
                className="grid grid-cols-[6rem_minmax(0,1fr)] items-center gap-3 text-sm md:table-cell md:px-4 md:py-4"
              >
                <span aria-hidden="true" className="text-neutral-500 md:hidden">
                  Actions
                </span>
                <span>
                  <a
                    href="#"
                    aria-label="Edit Riley Chen"
                    className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  >
                    Edit
                  </a>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="mt-6 text-sm text-neutral-500">5 members</p>
      </div>
    </section>
  )
}
