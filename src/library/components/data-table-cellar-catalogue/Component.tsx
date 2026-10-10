// Fonts: Instrument Serif (https://fonts.google.com/specimen/Instrument+Serif)
export default function DataTableCellarCatalogue() {
  return (
    <section className="bg-rose-950 text-rose-50 font-['Instrument_Serif',ui-sans-serif,system-ui,sans-serif] px-5 py-12 md:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-wrap items-start justify-between gap-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-rose-200">Terroir Index / Private cellar</p>
            <h2 className="mt-3 text-[3rem] leading-none font-normal tracking-tight md:text-[4.5rem]">The cellar, by vintage.</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-rose-200">A considered record of what is resting, and what is ready.</p>
          </div>
          <a href="#" className="inline-flex items-center justify-center border border-rose-700 px-4 py-2 text-sm font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Print cellar list</a>
        </header>
        <div className="mb-6 flex flex-wrap items-end justify-between gap-6 border-y border-rose-700 py-5">
          <p>TERROIR INDEX / COLLECTION No. 04</p>
          <p>36 bottles · 4 selections</p>
        </div>
        <table role="table" className="block w-full text-left text-base md:table">
          <caption className="sr-only">Terroir Index private cellar inventory by vintage, rack and collection window</caption>
          <thead role="rowgroup" className="sr-only md:not-sr-only md:table-header-group">
            <tr role="row">
              <th scope="col" role="columnheader" className="border-b border-rose-700 px-4 py-3 text-xs font-medium text-rose-200">Vintage / wine</th>
              <th scope="col" role="columnheader" className="border-b border-rose-700 px-4 py-3 text-xs font-medium text-rose-200">Bottles</th>
              <th scope="col" role="columnheader" className="border-b border-rose-700 px-4 py-3 text-xs font-medium text-rose-200">Rack</th>
              <th scope="col" role="columnheader" className="border-b border-rose-700 px-4 py-3 text-xs font-medium text-rose-200">Cellar window</th>
              <th scope="col" role="columnheader" className="border-b border-rose-700 px-4 py-3 text-xs font-medium text-rose-200">Notes</th>
            </tr>
          </thead>
          <tbody role="rowgroup" className="grid gap-3 md:table-row-group">
            <tr role="row" className="grid grid-cols-2 border-b border-rose-700 pb-3 md:table-row md:pb-0">
              <th scope="row" role="rowheader" className="col-span-2 block min-w-0 px-3 py-3 text-left font-semibold align-middle md:table-cell md:px-4 md:py-5">
                <div className="block min-w-0 break-words tabular-nums">
                  <div className="flex items-center gap-5">
                    <span className="text-4xl font-normal tabular-nums text-amber-200">2019</span>
                    <div>
                      <span className="text-xl font-normal">Les Roches Hautes</span>
                      <span className="mt-1 block text-xs font-normal text-rose-200">Loire · Cabernet franc</span>
                    </div>
                  </div>
                </div>
              </th>
              <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                <span aria-hidden="true" className="mb-1 block text-xs font-normal text-rose-200 md:hidden">Bottles</span>
                <div className="block min-w-0 break-words tabular-nums">
                  <span className="text-3xl font-normal tabular-nums">12</span>
                </div>
              </td>
              <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                <span aria-hidden="true" className="mb-1 block text-xs font-normal text-rose-200 md:hidden">Rack</span>
                <div className="block min-w-0 break-words tabular-nums">A / 03</div>
              </td>
              <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                <span aria-hidden="true" className="mb-1 block text-xs font-normal text-rose-200 md:hidden">Cellar window</span>
                <div className="block min-w-0 break-words tabular-nums">2026–2031</div>
              </td>
              <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                <span aria-hidden="true" className="mb-1 block text-xs font-normal text-rose-200 md:hidden">Notes</span>
                <div className="block min-w-0 break-words tabular-nums">
                  <details>
                    <summary aria-label="Cellar note for Les Roches Hautes" className="cursor-pointer text-sm font-medium hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Cellar note</summary>
                    <p className="mt-3 max-w-sm text-xs leading-5 text-rose-200">Acquired March 2023. Twelve bottles in original cases. Review the cellar window at the next annual inventory.</p>
                  </details>
                </div>
              </td>
            </tr>
            <tr role="row" className="grid grid-cols-2 border-b border-rose-700 pb-3 md:table-row md:pb-0">
              <th scope="row" role="rowheader" className="col-span-2 block min-w-0 px-3 py-3 text-left font-semibold align-middle md:table-cell md:px-4 md:py-5">
                <div className="block min-w-0 break-words tabular-nums">
                  <div className="flex items-center gap-5">
                    <span className="text-4xl font-normal tabular-nums text-amber-200">2021</span>
                    <div>
                      <span className="text-xl font-normal">Domaine du Coteau</span>
                      <span className="mt-1 block text-xs font-normal text-rose-200">Burgundy · Chardonnay</span>
                    </div>
                  </div>
                </div>
              </th>
              <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                <span aria-hidden="true" className="mb-1 block text-xs font-normal text-rose-200 md:hidden">Bottles</span>
                <div className="block min-w-0 break-words tabular-nums">
                  <span className="text-3xl font-normal tabular-nums">6</span>
                </div>
              </td>
              <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                <span aria-hidden="true" className="mb-1 block text-xs font-normal text-rose-200 md:hidden">Rack</span>
                <div className="block min-w-0 break-words tabular-nums">B / 02</div>
              </td>
              <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                <span aria-hidden="true" className="mb-1 block text-xs font-normal text-rose-200 md:hidden">Cellar window</span>
                <div className="block min-w-0 break-words tabular-nums">2026–2029</div>
              </td>
              <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                <span aria-hidden="true" className="mb-1 block text-xs font-normal text-rose-200 md:hidden">Notes</span>
                <div className="block min-w-0 break-words tabular-nums">
                  <details>
                    <summary aria-label="Cellar note for Domaine du Coteau" className="cursor-pointer text-sm font-medium hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Cellar note</summary>
                    <p className="mt-3 max-w-sm text-xs leading-5 text-rose-200">Acquired November 2024. Six bottles on the lower shelf. Keep the producer sheet with the case record.</p>
                  </details>
                </div>
              </td>
            </tr>
            <tr role="row" className="grid grid-cols-2 border-b border-rose-700 pb-3 md:table-row md:pb-0">
              <th scope="row" role="rowheader" className="col-span-2 block min-w-0 px-3 py-3 text-left font-semibold align-middle md:table-cell md:px-4 md:py-5">
                <div className="block min-w-0 break-words tabular-nums">
                  <div className="flex items-center gap-5">
                    <span className="text-4xl font-normal tabular-nums text-amber-200">2018</span>
                    <div>
                      <span className="text-xl font-normal">Colle di Sera</span>
                      <span className="mt-1 block text-xs font-normal text-rose-200">Piedmont · Nebbiolo</span>
                    </div>
                  </div>
                </div>
              </th>
              <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                <span aria-hidden="true" className="mb-1 block text-xs font-normal text-rose-200 md:hidden">Bottles</span>
                <div className="block min-w-0 break-words tabular-nums">
                  <span className="text-3xl font-normal tabular-nums">10</span>
                </div>
              </td>
              <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                <span aria-hidden="true" className="mb-1 block text-xs font-normal text-rose-200 md:hidden">Rack</span>
                <div className="block min-w-0 break-words tabular-nums">C / 01</div>
              </td>
              <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                <span aria-hidden="true" className="mb-1 block text-xs font-normal text-rose-200 md:hidden">Cellar window</span>
                <div className="block min-w-0 break-words tabular-nums">2027–2036</div>
              </td>
              <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                <span aria-hidden="true" className="mb-1 block text-xs font-normal text-rose-200 md:hidden">Notes</span>
                <div className="block min-w-0 break-words tabular-nums">
                  <details>
                    <summary aria-label="Cellar note for Colle di Sera" className="cursor-pointer text-sm font-medium hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Cellar note</summary>
                    <p className="mt-3 max-w-sm text-xs leading-5 text-rose-200">Acquired June 2022. Two bottles were moved to the tasting shelf; ten remain in this rack.</p>
                  </details>
                </div>
              </td>
            </tr>
            <tr role="row" className="grid grid-cols-2 border-b border-rose-700 pb-3 md:table-row md:pb-0">
              <th scope="row" role="rowheader" className="col-span-2 block min-w-0 px-3 py-3 text-left font-semibold align-middle md:table-cell md:px-4 md:py-5">
                <div className="block min-w-0 break-words tabular-nums">
                  <div className="flex items-center gap-5">
                    <span className="text-4xl font-normal tabular-nums text-amber-200">2022</span>
                    <div>
                      <span className="text-xl font-normal">Vale das Pedras</span>
                      <span className="mt-1 block text-xs font-normal text-rose-200">Douro · White blend</span>
                    </div>
                  </div>
                </div>
              </th>
              <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                <span aria-hidden="true" className="mb-1 block text-xs font-normal text-rose-200 md:hidden">Bottles</span>
                <div className="block min-w-0 break-words tabular-nums">
                  <span className="text-3xl font-normal tabular-nums">8</span>
                </div>
              </td>
              <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                <span aria-hidden="true" className="mb-1 block text-xs font-normal text-rose-200 md:hidden">Rack</span>
                <div className="block min-w-0 break-words tabular-nums">B / 04</div>
              </td>
              <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                <span aria-hidden="true" className="mb-1 block text-xs font-normal text-rose-200 md:hidden">Cellar window</span>
                <div className="block min-w-0 break-words tabular-nums">2026–2028</div>
              </td>
              <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                <span aria-hidden="true" className="mb-1 block text-xs font-normal text-rose-200 md:hidden">Notes</span>
                <div className="block min-w-0 break-words tabular-nums">
                  <details>
                    <summary aria-label="Cellar note for Vale das Pedras" className="cursor-pointer text-sm font-medium hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Cellar note</summary>
                    <p className="mt-3 max-w-sm text-xs leading-5 text-rose-200">Acquired September 2025. Eight bottles share one case. Inventory seal checked in October.</p>
                  </details>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <footer className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-rose-200">
          <p>Inventory checked 10 October 2026</p>
          <p>All selections and producers are fictional.</p>
        </footer>
      </div>
    </section>
  )
}
