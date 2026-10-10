export default function DataTableInvoiceLedger() {
  return (
    <section className="bg-white text-zinc-950 px-6 py-10 sm:px-12">
      <div className="mx-auto max-w-5xl">
        <header className="flex flex-wrap items-start justify-between gap-5">
          <div className="grid gap-2">
            <h2 className="text-3xl font-semibold tracking-tight">Invoices</h2>
            <p className="max-w-xl text-sm leading-6 text-zinc-600">
              A clear record of what’s paid and what’s due.
            </p>
          </div>
          <a
            className="self-start text-sm font-medium underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
            href="#"
          >
            Create invoice
          </a>
        </header>
        <div className="my-7">
          <div className="grid min-w-0 gap-2">
            <p className="text-xs font-medium opacity-70">Outstanding</p>
            <p className="text-3xl font-semibold tracking-tight tabular-nums">
              $920.00
            </p>
            <p className="text-xs opacity-70">1 invoice awaiting payment</p>
          </div>
        </div>
        <table role="table" className="block w-full text-left text-sm md:table">
          <caption className="sr-only">Invoice ledger</caption>
          <thead role="rowgroup" className="sr-only md:not-sr-only md:table-header-group">
            <tr role="row">
              <th
                className="border-b border-zinc-200 px-4 py-3 text-xs font-medium text-zinc-600"
                role="columnheader"
                scope="col"
              >
                Invoice
              </th>
              <th
                className="border-b border-zinc-200 px-4 py-3 text-xs font-medium text-zinc-600"
                role="columnheader"
                scope="col"
              >
                Customer
              </th>
              <th
                className="border-b border-zinc-200 px-4 py-3 text-xs font-medium text-zinc-600"
                role="columnheader"
                scope="col"
              >
                Amount
              </th>
              <th
                className="border-b border-zinc-200 px-4 py-3 text-xs font-medium text-zinc-600"
                role="columnheader"
                scope="col"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody role="rowgroup" className="grid gap-3 md:table-row-group">
            <tr role="row" className="grid rounded-lg border border-zinc-200 p-3 md:table-row md:border-0 md:p-0">
              <th
                className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-zinc-200 md:px-4 md:py-4 font-medium"
                role="rowheader"
                scope="row"
              >
                <span aria-hidden="true" className="shrink-0 text-xs font-normal text-zinc-600 md:hidden">
                  Invoice
                </span>
                <span className="min-w-0 break-words">INV-1048</span>
              </th>
              <td role="cell" className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-zinc-200 md:px-4 md:py-4 font-normal">
                <span aria-hidden="true" className="shrink-0 text-xs font-normal text-zinc-600 md:hidden">
                  Customer
                </span>
                <span className="min-w-0 break-words">Studio North</span>
              </td>
              <td role="cell" className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-zinc-200 md:px-4 md:py-4 font-normal">
                <span aria-hidden="true" className="shrink-0 text-xs font-normal text-zinc-600 md:hidden">
                  Amount
                </span>
                <span className="min-w-0 break-words tabular-nums">$1,840.00</span>
              </td>
              <td role="cell" className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-zinc-200 md:px-4 md:py-4 font-normal">
                <span aria-hidden="true" className="shrink-0 text-xs font-normal text-zinc-600 md:hidden">
                  Status
                </span>
                <span className="min-w-0 break-words">
                  <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs text-emerald-900">
                    Paid
                  </span>
                </span>
              </td>
            </tr>
            <tr role="row" className="grid rounded-lg border border-zinc-200 p-3 md:table-row md:border-0 md:p-0">
              <th
                className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-zinc-200 md:px-4 md:py-4 font-medium"
                role="rowheader"
                scope="row"
              >
                <span aria-hidden="true" className="shrink-0 text-xs font-normal text-zinc-600 md:hidden">
                  Invoice
                </span>
                <span className="min-w-0 break-words">INV-1049</span>
              </th>
              <td role="cell" className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-zinc-200 md:px-4 md:py-4 font-normal">
                <span aria-hidden="true" className="shrink-0 text-xs font-normal text-zinc-600 md:hidden">
                  Customer
                </span>
                <span className="min-w-0 break-words">Common Ground</span>
              </td>
              <td role="cell" className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-zinc-200 md:px-4 md:py-4 font-normal">
                <span aria-hidden="true" className="shrink-0 text-xs font-normal text-zinc-600 md:hidden">
                  Amount
                </span>
                <span className="min-w-0 break-words tabular-nums">$920.00</span>
              </td>
              <td role="cell" className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-zinc-200 md:px-4 md:py-4 font-normal">
                <span aria-hidden="true" className="shrink-0 text-xs font-normal text-zinc-600 md:hidden">
                  Status
                </span>
                <span className="min-w-0 break-words">
                  <span className="rounded-full bg-amber-100 px-2 py-1 text-xs text-amber-900">
                    Due Oct 21
                  </span>
                </span>
              </td>
            </tr>
            <tr role="row" className="grid rounded-lg border border-zinc-200 p-3 md:table-row md:border-0 md:p-0">
              <th
                className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-zinc-200 md:px-4 md:py-4 font-medium"
                role="rowheader"
                scope="row"
              >
                <span aria-hidden="true" className="shrink-0 text-xs font-normal text-zinc-600 md:hidden">
                  Invoice
                </span>
                <span className="min-w-0 break-words">INV-1050</span>
              </th>
              <td role="cell" className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-zinc-200 md:px-4 md:py-4 font-normal">
                <span aria-hidden="true" className="shrink-0 text-xs font-normal text-zinc-600 md:hidden">
                  Customer
                </span>
                <span className="min-w-0 break-words">Field School</span>
              </td>
              <td role="cell" className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-zinc-200 md:px-4 md:py-4 font-normal">
                <span aria-hidden="true" className="shrink-0 text-xs font-normal text-zinc-600 md:hidden">
                  Amount
                </span>
                <span className="min-w-0 break-words tabular-nums">$2,400.00</span>
              </td>
              <td role="cell" className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-zinc-200 md:px-4 md:py-4 font-normal">
                <span aria-hidden="true" className="shrink-0 text-xs font-normal text-zinc-600 md:hidden">
                  Status
                </span>
                <span className="min-w-0 break-words">
                  <span className="inline-flex rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-700">
                    Draft
                  </span>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <footer className="mt-5 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-600">
          <p>Showing all 3 records</p>
          <p>Updated October 10, 2026</p>
        </footer>
      </div>
    </section>
  )
}
