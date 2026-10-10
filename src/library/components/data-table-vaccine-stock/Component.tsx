// Fonts: IBM Plex Sans (https://fonts.google.com/specimen/IBM+Plex+Sans)
export default function DataTableVaccineStock() {
  return (
    <section className="bg-cyan-50 text-cyan-950 font-['IBM_Plex_Sans',ui-sans-serif,system-ui,sans-serif] px-5 py-12 md:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-wrap items-start justify-between gap-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-cyan-800">Dosekeeper / Clinic supply</p>
            <h2 className="mt-3 text-[2rem] leading-[1.15] font-semibold tracking-[-0.035em] md:text-[2.75rem]">Stock for the next clinic.</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-cyan-800">Central supply store · Lot-level stock, ordered by expiry.</p>
          </div>
          <a href="#" className="inline-flex items-center justify-center border border-cyan-200 px-4 py-2 text-sm font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Export lot list</a>
        </header>
        <div className="grid gap-8 lg:grid-cols-[16rem_minmax(0,1fr)]">
          <aside className="rounded-lg border border-cyan-300 bg-white p-6">
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-cyan-800">Store / Fridge 02</p>
            <p className="mt-4 text-[3.5rem] leading-none font-semibold tracking-tight tabular-nums">4.2°C</p>
            <p className="mt-1 block text-xs font-normal text-cyan-800">Latest logger reading · 08:55</p>
            <hr className="my-6 border-t border-cyan-200" />
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-cyan-800">Available doses</p>
            <p className="mt-4 text-5xl font-semibold tracking-tight tabular-nums">620</p>
            <p className="mt-3 max-w-xl text-sm leading-6 text-cyan-800">Counted at 09:00 by Salma Aziz.</p>
            <hr className="my-6 border-t border-cyan-200" />
            <details>
              <summary className="cursor-pointer text-sm font-medium hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Temperature log</summary>
              <p className="mt-3 max-w-sm text-xs leading-5 text-cyan-800">Fridge 02 was checked at 08:55. The store record includes logger ID DK-02-781 and the daily opening count.</p>
            </details>
          </aside>
          <div className="min-w-0 rounded-lg bg-white p-3 md:p-6">
            <p className="mb-4 border-l-4 border-amber-700 bg-amber-50 p-4 text-sm text-amber-950">Use the October lot first. 120 influenza doses expire this month.</p>
            <table role="table" className="block w-full text-left text-sm md:table">
              <caption className="sr-only">Dosekeeper clinic vaccine stock by lot, available doses and expiry</caption>
              <thead role="rowgroup" className="sr-only md:not-sr-only md:table-header-group">
                <tr role="row">
                  <th scope="col" role="columnheader" className="border-b border-cyan-200 px-4 py-3 text-xs font-medium text-cyan-800">Vaccine / lot</th>
                  <th scope="col" role="columnheader" className="border-b border-cyan-200 px-4 py-3 text-xs font-medium text-cyan-800">Doses</th>
                  <th scope="col" role="columnheader" className="border-b border-cyan-200 px-4 py-3 text-xs font-medium text-cyan-800">Expiry</th>
                  <th scope="col" role="columnheader" className="border-b border-cyan-200 px-4 py-3 text-xs font-medium text-cyan-800">Stock note</th>
                </tr>
              </thead>
              <tbody role="rowgroup" className="grid gap-3 md:table-row-group">
                <tr role="row" className="grid grid-cols-2 border-b border-cyan-200 pb-3 md:table-row md:pb-0">
                  <th scope="row" role="rowheader" className="col-span-2 block min-w-0 px-3 py-3 text-left font-semibold align-middle md:table-cell md:px-4 md:py-5">
                    <div className="block min-w-0 break-words tabular-nums">
                      <span>
                        <span>Influenza, inactivated</span>
                        <span className="mt-1 block text-xs font-normal text-cyan-800">Lot FL-26-081</span>
                      </span>
                    </div>
                  </th>
                  <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                    <span aria-hidden="true" className="mb-1 block text-xs font-normal text-cyan-800 md:hidden">Doses</span>
                    <div className="block min-w-0 break-words tabular-nums">120</div>
                  </td>
                  <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                    <span aria-hidden="true" className="mb-1 block text-xs font-normal text-cyan-800 md:hidden">Expiry</span>
                    <div className="block min-w-0 break-words tabular-nums">31 Oct 2026</div>
                  </td>
                  <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                    <span aria-hidden="true" className="mb-1 block text-xs font-normal text-cyan-800 md:hidden">Stock note</span>
                    <div className="block min-w-0 break-words tabular-nums">
                      <span className="inline-flex rounded border border-amber-700 bg-amber-50 px-2 py-1 text-xs font-semibold text-amber-950">Use first</span>
                    </div>
                  </td>
                </tr>
                <tr role="row" className="grid grid-cols-2 border-b border-cyan-200 pb-3 md:table-row md:pb-0">
                  <th scope="row" role="rowheader" className="col-span-2 block min-w-0 px-3 py-3 text-left font-semibold align-middle md:table-cell md:px-4 md:py-5">
                    <div className="block min-w-0 break-words tabular-nums">
                      <span>
                        <span>Hepatitis B</span>
                        <span className="mt-1 block text-xs font-normal text-cyan-800">Lot HB-25-416</span>
                      </span>
                    </div>
                  </th>
                  <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                    <span aria-hidden="true" className="mb-1 block text-xs font-normal text-cyan-800 md:hidden">Doses</span>
                    <div className="block min-w-0 break-words tabular-nums">180</div>
                  </td>
                  <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                    <span aria-hidden="true" className="mb-1 block text-xs font-normal text-cyan-800 md:hidden">Expiry</span>
                    <div className="block min-w-0 break-words tabular-nums">30 Apr 2027</div>
                  </td>
                  <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                    <span aria-hidden="true" className="mb-1 block text-xs font-normal text-cyan-800 md:hidden">Stock note</span>
                    <div className="block min-w-0 break-words tabular-nums">
                      <span className="inline-flex border border-cyan-200 px-2 py-1 text-xs font-medium">Available</span>
                    </div>
                  </td>
                </tr>
                <tr role="row" className="grid grid-cols-2 border-b border-cyan-200 pb-3 md:table-row md:pb-0">
                  <th scope="row" role="rowheader" className="col-span-2 block min-w-0 px-3 py-3 text-left font-semibold align-middle md:table-cell md:px-4 md:py-5">
                    <div className="block min-w-0 break-words tabular-nums">
                      <span>
                        <span>MMR</span>
                        <span className="mt-1 block text-xs font-normal text-cyan-800">Lot MM-26-102</span>
                      </span>
                    </div>
                  </th>
                  <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                    <span aria-hidden="true" className="mb-1 block text-xs font-normal text-cyan-800 md:hidden">Doses</span>
                    <div className="block min-w-0 break-words tabular-nums">80</div>
                  </td>
                  <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                    <span aria-hidden="true" className="mb-1 block text-xs font-normal text-cyan-800 md:hidden">Expiry</span>
                    <div className="block min-w-0 break-words tabular-nums">31 May 2027</div>
                  </td>
                  <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                    <span aria-hidden="true" className="mb-1 block text-xs font-normal text-cyan-800 md:hidden">Stock note</span>
                    <div className="block min-w-0 break-words tabular-nums">
                      <span className="inline-flex border border-cyan-200 px-2 py-1 text-xs font-medium">Available</span>
                    </div>
                  </td>
                </tr>
                <tr role="row" className="grid grid-cols-2 border-b border-cyan-200 pb-3 md:table-row md:pb-0">
                  <th scope="row" role="rowheader" className="col-span-2 block min-w-0 px-3 py-3 text-left font-semibold align-middle md:table-cell md:px-4 md:py-5">
                    <div className="block min-w-0 break-words tabular-nums">
                      <span>
                        <span>Td booster</span>
                        <span className="mt-1 block text-xs font-normal text-cyan-800">Lot TD-26-307</span>
                      </span>
                    </div>
                  </th>
                  <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                    <span aria-hidden="true" className="mb-1 block text-xs font-normal text-cyan-800 md:hidden">Doses</span>
                    <div className="block min-w-0 break-words tabular-nums">240</div>
                  </td>
                  <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                    <span aria-hidden="true" className="mb-1 block text-xs font-normal text-cyan-800 md:hidden">Expiry</span>
                    <div className="block min-w-0 break-words tabular-nums">31 Jul 2027</div>
                  </td>
                  <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                    <span aria-hidden="true" className="mb-1 block text-xs font-normal text-cyan-800 md:hidden">Stock note</span>
                    <div className="block min-w-0 break-words tabular-nums">
                      <span className="inline-flex border border-cyan-200 px-2 py-1 text-xs font-medium">Available</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <footer className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-cyan-800">
              <p>4 lots · Example inventory data</p>
              <p>Stock reconciliation · 10 October</p>
            </footer>
          </div>
        </div>
      </div>
    </section>
  )
}
