// Fonts: Fraunces (https://fonts.google.com/specimen/Fraunces)
export default function DataTableCropYields() {
  return (
    <section className="bg-lime-50 text-green-950 font-['Fraunces',ui-sans-serif,system-ui,sans-serif] px-5 py-12 md:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 grid items-end gap-8 lg:grid-cols-[1fr_28rem]">
          <div>
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-green-800">Acrefolio / Field records</p>
            <h2 className="mt-3 text-[2.5rem] leading-[1.1] font-normal tracking-[-0.04em] md:text-[3.5rem]">What the fields gave.</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-green-800">Harvest 2026. Measured yields across the South Vale holding.</p>
          </div>
          <figure>
            <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80" alt="Harvested crop field with rows of stubble at sunset" width={1600} height={900} className="aspect-[2/1] w-full object-cover" />
            <figcaption className="mt-1 block text-xs font-normal text-green-800">South Vale · Field survey, September</figcaption>
          </figure>
        </header>
        <div className="mb-5 flex flex-wrap justify-between gap-3 border-y border-green-950 py-4 text-sm">
          <p>SEASON 2026 / FINAL WEIGH-IN</p>
          <a href="#" className="font-semibold underline underline-offset-4 hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Download field ledger</a>
        </div>
        <table role="table" className="block w-full text-left text-sm md:table">
          <caption className="sr-only">Acrefolio harvest 2026 crop yield measurements, including field areas and dry grain weights</caption>
          <thead role="rowgroup" className="sr-only md:not-sr-only md:table-header-group">
            <tr role="row">
              <th scope="col" role="columnheader" className="border-b border-green-300 px-4 py-3 text-xs font-medium text-green-800">Field / crop</th>
              <th scope="col" role="columnheader" className="border-b border-green-300 px-4 py-3 text-xs font-medium text-green-800">Area</th>
              <th scope="col" role="columnheader" className="border-b border-green-300 px-4 py-3 text-xs font-medium text-green-800">Harvested</th>
              <th scope="col" role="columnheader" className="border-b border-green-300 px-4 py-3 text-xs font-medium text-green-800">Yield</th>
              <th scope="col" role="columnheader" className="border-b border-green-300 px-4 py-3 text-xs font-medium text-green-800">Against plan</th>
            </tr>
          </thead>
          <tbody role="rowgroup" className="grid gap-3 md:table-row-group">
            <tr role="row" className="grid grid-cols-2 border-b border-green-300 pb-3 md:table-row md:pb-0">
              <th scope="row" role="rowheader" className="col-span-2 block min-w-0 px-3 py-3 text-left font-semibold align-middle md:table-cell md:px-4 md:py-5">
                <div className="block min-w-0 break-words tabular-nums">
                  <span>
                    <span>Long Acre</span>
                    <span className="mt-1 block text-xs font-normal text-green-800">Winter wheat · West block</span>
                  </span>
                </div>
              </th>
              <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                <span aria-hidden="true" className="mb-1 block text-xs font-normal text-green-800 md:hidden">Area</span>
                <div className="block min-w-0 break-words tabular-nums">18.4 ha</div>
              </td>
              <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                <span aria-hidden="true" className="mb-1 block text-xs font-normal text-green-800 md:hidden">Harvested</span>
                <div className="block min-w-0 break-words tabular-nums">143.5 t</div>
              </td>
              <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                <span aria-hidden="true" className="mb-1 block text-xs font-normal text-green-800 md:hidden">Yield</span>
                <div className="block min-w-0 break-words tabular-nums">
                  <span className="text-2xl font-medium tabular-nums">7.8 t/ha</span>
                </div>
              </td>
              <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                <span aria-hidden="true" className="mb-1 block text-xs font-normal text-green-800 md:hidden">Against plan</span>
                <div className="block min-w-0 break-words tabular-nums">+4.0%</div>
              </td>
            </tr>
            <tr role="row" className="grid grid-cols-2 border-b border-green-300 pb-3 md:table-row md:pb-0">
              <th scope="row" role="rowheader" className="col-span-2 block min-w-0 px-3 py-3 text-left font-semibold align-middle md:table-cell md:px-4 md:py-5">
                <div className="block min-w-0 break-words tabular-nums">
                  <span>
                    <span>Fox Meadow</span>
                    <span className="mt-1 block text-xs font-normal text-green-800">Spring barley · East block</span>
                  </span>
                </div>
              </th>
              <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                <span aria-hidden="true" className="mb-1 block text-xs font-normal text-green-800 md:hidden">Area</span>
                <div className="block min-w-0 break-words tabular-nums">12.0 ha</div>
              </td>
              <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                <span aria-hidden="true" className="mb-1 block text-xs font-normal text-green-800 md:hidden">Harvested</span>
                <div className="block min-w-0 break-words tabular-nums">72.0 t</div>
              </td>
              <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                <span aria-hidden="true" className="mb-1 block text-xs font-normal text-green-800 md:hidden">Yield</span>
                <div className="block min-w-0 break-words tabular-nums">
                  <span className="text-2xl font-medium tabular-nums">6.0 t/ha</span>
                </div>
              </td>
              <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                <span aria-hidden="true" className="mb-1 block text-xs font-normal text-green-800 md:hidden">Against plan</span>
                <div className="block min-w-0 break-words tabular-nums">−2.0%</div>
              </td>
            </tr>
            <tr role="row" className="grid grid-cols-2 border-b border-green-300 pb-3 md:table-row md:pb-0">
              <th scope="row" role="rowheader" className="col-span-2 block min-w-0 px-3 py-3 text-left font-semibold align-middle md:table-cell md:px-4 md:py-5">
                <div className="block min-w-0 break-words tabular-nums">
                  <span>
                    <span>Lower Ridge</span>
                    <span className="mt-1 block text-xs font-normal text-green-800">Oilseed rape · North block</span>
                  </span>
                </div>
              </th>
              <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                <span aria-hidden="true" className="mb-1 block text-xs font-normal text-green-800 md:hidden">Area</span>
                <div className="block min-w-0 break-words tabular-nums">9.6 ha</div>
              </td>
              <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                <span aria-hidden="true" className="mb-1 block text-xs font-normal text-green-800 md:hidden">Harvested</span>
                <div className="block min-w-0 break-words tabular-nums">35.5 t</div>
              </td>
              <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                <span aria-hidden="true" className="mb-1 block text-xs font-normal text-green-800 md:hidden">Yield</span>
                <div className="block min-w-0 break-words tabular-nums">
                  <span className="text-2xl font-medium tabular-nums">3.7 t/ha</span>
                </div>
              </td>
              <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                <span aria-hidden="true" className="mb-1 block text-xs font-normal text-green-800 md:hidden">Against plan</span>
                <div className="block min-w-0 break-words tabular-nums">+5.7%</div>
              </td>
            </tr>
            <tr role="row" className="grid grid-cols-2 border-b border-green-300 pb-3 md:table-row md:pb-0">
              <th scope="row" role="rowheader" className="col-span-2 block min-w-0 px-3 py-3 text-left font-semibold align-middle md:table-cell md:px-4 md:py-5">
                <div className="block min-w-0 break-words tabular-nums">
                  <span>
                    <span>Home Field</span>
                    <span className="mt-1 block text-xs font-normal text-green-800">Winter oats · South block</span>
                  </span>
                </div>
              </th>
              <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                <span aria-hidden="true" className="mb-1 block text-xs font-normal text-green-800 md:hidden">Area</span>
                <div className="block min-w-0 break-words tabular-nums">8.0 ha</div>
              </td>
              <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                <span aria-hidden="true" className="mb-1 block text-xs font-normal text-green-800 md:hidden">Harvested</span>
                <div className="block min-w-0 break-words tabular-nums">48.0 t</div>
              </td>
              <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                <span aria-hidden="true" className="mb-1 block text-xs font-normal text-green-800 md:hidden">Yield</span>
                <div className="block min-w-0 break-words tabular-nums">
                  <span className="text-2xl font-medium tabular-nums">6.0 t/ha</span>
                </div>
              </td>
              <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                <span aria-hidden="true" className="mb-1 block text-xs font-normal text-green-800 md:hidden">Against plan</span>
                <div className="block min-w-0 break-words tabular-nums">+1.7%</div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="mt-5 grid gap-4 border-t-2 border-green-950 pt-5 sm:grid-cols-2">
          <p>48.0 hectares harvested</p>
          <p>299.0 tonnes brought in</p>
        </div>
        <footer className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-green-800">
          <p>Weights corrected to agreed dry matter.</p>
          <p>Recorded by Maren Holt · 10 October</p>
        </footer>
      </div>
    </section>
  )
}
