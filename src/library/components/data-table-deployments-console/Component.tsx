export default function DataTableDeploymentsConsole() {
  return (
    <section className="bg-neutral-950 font-mono text-neutral-100 px-6 py-10 sm:px-12">
      <div className="mx-auto max-w-5xl">
        <header className="flex flex-wrap items-start justify-between gap-5">
          <div className="grid gap-2">
            <h2 className="text-3xl font-semibold tracking-tight">
              Deployments
            </h2>
            <p className="max-w-xl text-sm leading-6 text-neutral-400">
              Recent releases across your environments.
            </p>
          </div>
          <a
            className="self-start text-sm font-medium underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
            href="#"
          >
            View build logs
          </a>
        </header>
        <div className="my-7">
          <div className="flex flex-wrap gap-4 border-b border-neutral-700 pb-4 text-xs">
            <p className="text-lime-300">REGION / EU WEST</p>
            <p className="text-neutral-400">UPTIME / 99.98%</p>
          </div>
        </div>
        <table className="block w-full text-left text-sm md:table">
          <caption className="sr-only">Deployment activity table</caption>
          <thead className="hidden md:table-header-group">
            <tr>
              <th
                className="border-b border-neutral-700 px-4 py-3 text-xs font-medium text-neutral-400"
                scope="col"
              >
                Release
              </th>
              <th
                className="border-b border-neutral-700 px-4 py-3 text-xs font-medium text-neutral-400"
                scope="col"
              >
                Environment
              </th>
              <th
                className="border-b border-neutral-700 px-4 py-3 text-xs font-medium text-neutral-400"
                scope="col"
              >
                Commit
              </th>
              <th
                className="border-b border-neutral-700 px-4 py-3 text-xs font-medium text-neutral-400"
                scope="col"
              >
                Result
              </th>
            </tr>
          </thead>
          <tbody className="grid gap-3 md:table-row-group">
            <tr className="grid rounded-lg border border-neutral-700 p-3 md:table-row md:border-0 md:p-0">
              <th
                className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-neutral-700 md:px-4 md:py-4 font-medium"
                scope="row"
              >
                <span className="shrink-0 text-xs font-normal text-neutral-400 md:hidden">
                  Release
                </span>
                <span className="min-w-0 break-words">v2.14.0</span>
              </th>
              <td className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-neutral-700 md:px-4 md:py-4 font-normal">
                <span className="shrink-0 text-xs font-normal text-neutral-400 md:hidden">
                  Environment
                </span>
                <span className="min-w-0 break-words">Production</span>
              </td>
              <td className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-neutral-700 md:px-4 md:py-4 font-normal">
                <span className="shrink-0 text-xs font-normal text-neutral-400 md:hidden">
                  Commit
                </span>
                <span className="min-w-0 break-words">a37f12c</span>
              </td>
              <td className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-neutral-700 md:px-4 md:py-4 font-normal">
                <span className="shrink-0 text-xs font-normal text-neutral-400 md:hidden">
                  Result
                </span>
                <span className="min-w-0 break-words">
                  <span className="rounded border border-lime-300/40 px-2 py-1 text-xs text-lime-300">
                    Healthy
                  </span>
                </span>
              </td>
            </tr>
            <tr className="grid rounded-lg border border-neutral-700 p-3 md:table-row md:border-0 md:p-0">
              <th
                className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-neutral-700 md:px-4 md:py-4 font-medium"
                scope="row"
              >
                <span className="shrink-0 text-xs font-normal text-neutral-400 md:hidden">
                  Release
                </span>
                <span className="min-w-0 break-words">v2.15.0-rc</span>
              </th>
              <td className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-neutral-700 md:px-4 md:py-4 font-normal">
                <span className="shrink-0 text-xs font-normal text-neutral-400 md:hidden">
                  Environment
                </span>
                <span className="min-w-0 break-words">Preview</span>
              </td>
              <td className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-neutral-700 md:px-4 md:py-4 font-normal">
                <span className="shrink-0 text-xs font-normal text-neutral-400 md:hidden">
                  Commit
                </span>
                <span className="min-w-0 break-words">b18ad50</span>
              </td>
              <td className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-neutral-700 md:px-4 md:py-4 font-normal">
                <span className="shrink-0 text-xs font-normal text-neutral-400 md:hidden">
                  Result
                </span>
                <span className="min-w-0 break-words">
                  <span className="rounded border border-cyan-300/40 px-2 py-1 text-xs text-cyan-300">
                    Building
                  </span>
                </span>
              </td>
            </tr>
            <tr className="grid rounded-lg border border-neutral-700 p-3 md:table-row md:border-0 md:p-0">
              <th
                className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-neutral-700 md:px-4 md:py-4 font-medium"
                scope="row"
              >
                <span className="shrink-0 text-xs font-normal text-neutral-400 md:hidden">
                  Release
                </span>
                <span className="min-w-0 break-words">v2.13.2</span>
              </th>
              <td className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-neutral-700 md:px-4 md:py-4 font-normal">
                <span className="shrink-0 text-xs font-normal text-neutral-400 md:hidden">
                  Environment
                </span>
                <span className="min-w-0 break-words">Production</span>
              </td>
              <td className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-neutral-700 md:px-4 md:py-4 font-normal">
                <span className="shrink-0 text-xs font-normal text-neutral-400 md:hidden">
                  Commit
                </span>
                <span className="min-w-0 break-words">913ef0d</span>
              </td>
              <td className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-neutral-700 md:px-4 md:py-4 font-normal">
                <span className="shrink-0 text-xs font-normal text-neutral-400 md:hidden">
                  Result
                </span>
                <span className="min-w-0 break-words">
                  <span className="rounded border border-lime-300/40 px-2 py-1 text-xs text-lime-300">
                    Healthy
                  </span>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <footer className="mt-5 flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-400">
          <p>Showing all 3 records</p>
          <p>Updated October 10, 2026</p>
        </footer>
      </div>
    </section>
  )
}
