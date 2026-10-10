export default function DataTableInventoryStock() {
  return (
    <section className="bg-slate-50 text-slate-950 px-6 py-10 sm:px-12">
      <div className="mx-auto max-w-5xl">
        <header className="flex flex-wrap items-start justify-between gap-5">
          <div className="grid gap-2">
            <h2 className="text-3xl font-semibold tracking-tight">
              Stock room
            </h2>
            <p className="max-w-xl text-sm leading-6 text-slate-600">
              Available units, reserved orders and reorder signals.
            </p>
          </div>
          <a
            className="self-start text-sm font-medium underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
            href="#"
          >
            Add stock
          </a>
        </header>
        <div className="my-7">
          <div className="grid gap-5 sm:grid-cols-3">
            <div className="grid min-w-0 gap-2">
              <p className="text-xs font-medium opacity-70">Active items</p>
              <p className="text-3xl font-semibold tracking-tight tabular-nums">
                24
              </p>
              <p className="text-xs opacity-70">Across 3 collections</p>
            </div>
            <div className="grid min-w-0 gap-2">
              <p className="text-xs font-medium opacity-70">Units reserved</p>
              <p className="text-3xl font-semibold tracking-tight tabular-nums">
                48
              </p>
              <p className="text-xs opacity-70">Ready to fulfill</p>
            </div>
            <div className="grid min-w-0 gap-2">
              <p className="text-xs font-medium opacity-70">Low-stock items</p>
              <p className="text-3xl font-semibold tracking-tight tabular-nums">
                2
              </p>
              <p className="text-xs opacity-70">Review this week</p>
            </div>
          </div>
        </div>
        <table role="table" className="block w-full text-left text-sm md:table">
          <caption className="sr-only">Inventory stock table</caption>
          <thead role="rowgroup" className="sr-only md:not-sr-only md:table-header-group">
            <tr role="row">
              <th
                className="border-b border-slate-200 px-4 py-3 text-xs font-medium text-slate-600"
                role="columnheader"
                scope="col"
              >
                Item
              </th>
              <th
                className="border-b border-slate-200 px-4 py-3 text-xs font-medium text-slate-600"
                role="columnheader"
                scope="col"
              >
                SKU
              </th>
              <th
                className="border-b border-slate-200 px-4 py-3 text-xs font-medium text-slate-600"
                role="columnheader"
                scope="col"
              >
                Available
              </th>
              <th
                className="border-b border-slate-200 px-4 py-3 text-xs font-medium text-slate-600"
                role="columnheader"
                scope="col"
              >
                Stock
              </th>
            </tr>
          </thead>
          <tbody role="rowgroup" className="grid gap-3 md:table-row-group">
            <tr role="row" className="grid rounded-lg border border-slate-200 p-3 md:table-row md:border-0 md:p-0">
              <th
                className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-slate-200 md:px-4 md:py-4 font-medium"
                role="rowheader"
                scope="row"
              >
                <span aria-hidden="true" className="shrink-0 text-xs font-normal text-slate-600 md:hidden">
                  Item
                </span>
                <span className="min-w-0 break-words">Canvas tote</span>
              </th>
              <td role="cell" className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-slate-200 md:px-4 md:py-4 font-normal">
                <span aria-hidden="true" className="shrink-0 text-xs font-normal text-slate-600 md:hidden">
                  SKU
                </span>
                <span className="min-w-0 break-words">CT-104</span>
              </td>
              <td role="cell" className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-slate-200 md:px-4 md:py-4 font-normal">
                <span aria-hidden="true" className="shrink-0 text-xs font-normal text-slate-600 md:hidden">
                  Available
                </span>
                <span className="min-w-0 break-words tabular-nums">128</span>
              </td>
              <td role="cell" className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-slate-200 md:px-4 md:py-4 font-normal">
                <span aria-hidden="true" className="shrink-0 text-xs font-normal text-slate-600 md:hidden">
                  Stock
                </span>
                <span className="min-w-0 break-words">
                  <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs text-emerald-900">
                    In stock
                  </span>
                </span>
              </td>
            </tr>
            <tr role="row" className="grid rounded-lg border border-slate-200 p-3 md:table-row md:border-0 md:p-0">
              <th
                className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-slate-200 md:px-4 md:py-4 font-medium"
                role="rowheader"
                scope="row"
              >
                <span aria-hidden="true" className="shrink-0 text-xs font-normal text-slate-600 md:hidden">
                  Item
                </span>
                <span className="min-w-0 break-words">Desk notebook</span>
              </th>
              <td role="cell" className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-slate-200 md:px-4 md:py-4 font-normal">
                <span aria-hidden="true" className="shrink-0 text-xs font-normal text-slate-600 md:hidden">
                  SKU
                </span>
                <span className="min-w-0 break-words">DN-208</span>
              </td>
              <td role="cell" className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-slate-200 md:px-4 md:py-4 font-normal">
                <span aria-hidden="true" className="shrink-0 text-xs font-normal text-slate-600 md:hidden">
                  Available
                </span>
                <span className="min-w-0 break-words tabular-nums">12</span>
              </td>
              <td role="cell" className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-slate-200 md:px-4 md:py-4 font-normal">
                <span aria-hidden="true" className="shrink-0 text-xs font-normal text-slate-600 md:hidden">
                  Stock
                </span>
                <span className="min-w-0 break-words">
                  <span className="rounded-full bg-orange-100 px-2 py-1 text-xs text-orange-900">
                    Reorder
                  </span>
                </span>
              </td>
            </tr>
            <tr role="row" className="grid rounded-lg border border-slate-200 p-3 md:table-row md:border-0 md:p-0">
              <th
                className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-slate-200 md:px-4 md:py-4 font-medium"
                role="rowheader"
                scope="row"
              >
                <span aria-hidden="true" className="shrink-0 text-xs font-normal text-slate-600 md:hidden">
                  Item
                </span>
                <span className="min-w-0 break-words">Enamel cup</span>
              </th>
              <td role="cell" className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-slate-200 md:px-4 md:py-4 font-normal">
                <span aria-hidden="true" className="shrink-0 text-xs font-normal text-slate-600 md:hidden">
                  SKU
                </span>
                <span className="min-w-0 break-words">EC-016</span>
              </td>
              <td role="cell" className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-slate-200 md:px-4 md:py-4 font-normal">
                <span aria-hidden="true" className="shrink-0 text-xs font-normal text-slate-600 md:hidden">
                  Available
                </span>
                <span className="min-w-0 break-words tabular-nums">64</span>
              </td>
              <td role="cell" className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-slate-200 md:px-4 md:py-4 font-normal">
                <span aria-hidden="true" className="shrink-0 text-xs font-normal text-slate-600 md:hidden">
                  Stock
                </span>
                <span className="min-w-0 break-words">
                  <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs text-emerald-900">
                    In stock
                  </span>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <footer className="mt-5 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
          <p>Showing 3 of 24 items</p>
          <p>Updated October 10, 2026</p>
        </footer>
      </div>
    </section>
  )
}
