// Fonts: Space Grotesk (https://fonts.google.com/specimen/Space+Grotesk)
export default function DataTableParkingPermits() {
  return (
    <section className="bg-orange-50 text-red-950 font-['Space_Grotesk',ui-sans-serif,system-ui,sans-serif] px-5 py-12 md:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 grid border-2 border-red-950 md:grid-cols-[10rem_1fr]">
          <div className="flex flex-col justify-center border-b-2 border-red-950 bg-orange-300 p-6 md:border-r-2 md:border-b-0">
            <p>ZONE</p>
            <p className="text-6xl font-bold tracking-tight">C2</p>
          </div>
          <div className="p-6">
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-red-900">Baystamp / Civic parking</p>
            <h2 className="mt-3 text-[2rem] leading-[1.15] font-semibold tracking-[-0.035em] md:text-[2.75rem]">Resident permit register</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-red-900">Canal ward. Vehicles authorised for resident bays, 07:00–19:00.</p>
          </div>
        </header>
        <div className="border-2 border-red-950 p-3 md:p-5">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold uppercase">
            <p>REGISTER / OCTOBER 2026</p>
            <a href="#baystamp-restrictions" className="font-semibold underline underline-offset-4 hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Zone restrictions</a>
          </div>
          <table role="table" className="block w-full text-left text-sm md:table">
            <caption className="sr-only">Baystamp Canal ward zone C2 parking permit register</caption>
            <thead role="rowgroup" className="sr-only md:not-sr-only md:table-header-group">
              <tr role="row">
                <th scope="col" role="columnheader" className="border-b border-red-950 px-4 py-3 text-xs font-medium text-red-900">Registration</th>
                <th scope="col" role="columnheader" className="border-b border-red-950 px-4 py-3 text-xs font-medium text-red-900">Permit</th>
                <th scope="col" role="columnheader" className="border-b border-red-950 px-4 py-3 text-xs font-medium text-red-900">Valid until</th>
                <th scope="col" role="columnheader" className="border-b border-red-950 px-4 py-3 text-xs font-medium text-red-900">Allocation</th>
              </tr>
            </thead>
            <tbody role="rowgroup" className="grid gap-3 md:table-row-group">
              <tr role="row" className="grid grid-cols-2 border-b border-red-950 pb-3 md:table-row md:pb-0">
                <th scope="row" role="rowheader" className="col-span-2 block min-w-0 px-3 py-3 text-left font-semibold align-middle md:table-cell md:px-4 md:py-5">
                  <div className="block min-w-0 break-words tabular-nums">
                    <span className="inline-block border-2 border-red-950 bg-white px-3 py-1 text-lg font-bold tracking-wide">BK26 HMR</span>
                  </div>
                </th>
                <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                  <span aria-hidden="true" className="mb-1 block text-xs font-normal text-red-900 md:hidden">Permit</span>
                  <div className="block min-w-0 break-words tabular-nums">
                    <span>
                      <span>C2-01482</span>
                      <span className="mt-1 block text-xs font-normal text-red-900">Resident · Annual</span>
                    </span>
                  </div>
                </td>
                <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                  <span aria-hidden="true" className="mb-1 block text-xs font-normal text-red-900 md:hidden">Valid until</span>
                  <div className="block min-w-0 break-words tabular-nums">30 Sep 2027</div>
                </td>
                <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                  <span aria-hidden="true" className="mb-1 block text-xs font-normal text-red-900 md:hidden">Allocation</span>
                  <div className="block min-w-0 break-words tabular-nums">
                    <span className="inline-flex border border-red-950 px-2 py-1 text-xs font-medium">Active</span>
                  </div>
                </td>
              </tr>
              <tr role="row" className="grid grid-cols-2 border-b border-red-950 pb-3 md:table-row md:pb-0">
                <th scope="row" role="rowheader" className="col-span-2 block min-w-0 px-3 py-3 text-left font-semibold align-middle md:table-cell md:px-4 md:py-5">
                  <div className="block min-w-0 break-words tabular-nums">
                    <span className="inline-block border-2 border-red-950 bg-white px-3 py-1 text-lg font-bold tracking-wide">LD74 KPN</span>
                  </div>
                </th>
                <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                  <span aria-hidden="true" className="mb-1 block text-xs font-normal text-red-900 md:hidden">Permit</span>
                  <div className="block min-w-0 break-words tabular-nums">
                    <span>
                      <span>C2-01473</span>
                      <span className="mt-1 block text-xs font-normal text-red-900">Resident · Annual</span>
                    </span>
                  </div>
                </td>
                <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                  <span aria-hidden="true" className="mb-1 block text-xs font-normal text-red-900 md:hidden">Valid until</span>
                  <div className="block min-w-0 break-words tabular-nums">31 Dec 2026</div>
                </td>
                <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                  <span aria-hidden="true" className="mb-1 block text-xs font-normal text-red-900 md:hidden">Allocation</span>
                  <div className="block min-w-0 break-words tabular-nums">
                    <span className="inline-flex border border-red-950 px-2 py-1 text-xs font-medium">Active</span>
                  </div>
                </td>
              </tr>
              <tr role="row" className="grid grid-cols-2 border-b border-red-950 pb-3 md:table-row md:pb-0">
                <th scope="row" role="rowheader" className="col-span-2 block min-w-0 px-3 py-3 text-left font-semibold align-middle md:table-cell md:px-4 md:py-5">
                  <div className="block min-w-0 break-words tabular-nums">
                    <span className="inline-block border-2 border-red-950 bg-white px-3 py-1 text-lg font-bold tracking-wide">RF19 DLS</span>
                  </div>
                </th>
                <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                  <span aria-hidden="true" className="mb-1 block text-xs font-normal text-red-900 md:hidden">Permit</span>
                  <div className="block min-w-0 break-words tabular-nums">
                    <span>
                      <span>C2-01461</span>
                      <span className="mt-1 block text-xs font-normal text-red-900">Visitor · 30 days</span>
                    </span>
                  </div>
                </td>
                <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                  <span aria-hidden="true" className="mb-1 block text-xs font-normal text-red-900 md:hidden">Valid until</span>
                  <div className="block min-w-0 break-words tabular-nums">18 Oct 2026</div>
                </td>
                <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                  <span aria-hidden="true" className="mb-1 block text-xs font-normal text-red-900 md:hidden">Allocation</span>
                  <div className="block min-w-0 break-words tabular-nums">
                    <span className="inline-flex border border-red-950 px-2 py-1 text-xs font-medium">Expires in 8 days</span>
                  </div>
                </td>
              </tr>
              <tr role="row" className="grid grid-cols-2 border-b border-red-950 pb-3 md:table-row md:pb-0">
                <th scope="row" role="rowheader" className="col-span-2 block min-w-0 px-3 py-3 text-left font-semibold align-middle md:table-cell md:px-4 md:py-5">
                  <div className="block min-w-0 break-words tabular-nums">
                    <span className="inline-block border-2 border-red-950 bg-white px-3 py-1 text-lg font-bold tracking-wide">WM22 BTV</span>
                  </div>
                </th>
                <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                  <span aria-hidden="true" className="mb-1 block text-xs font-normal text-red-900 md:hidden">Permit</span>
                  <div className="block min-w-0 break-words tabular-nums">
                    <span>
                      <span>C2-01440</span>
                      <span className="mt-1 block text-xs font-normal text-red-900">Resident · Annual</span>
                    </span>
                  </div>
                </td>
                <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                  <span aria-hidden="true" className="mb-1 block text-xs font-normal text-red-900 md:hidden">Valid until</span>
                  <div className="block min-w-0 break-words tabular-nums">31 Oct 2026</div>
                </td>
                <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                  <span aria-hidden="true" className="mb-1 block text-xs font-normal text-red-900 md:hidden">Allocation</span>
                  <div className="block min-w-0 break-words tabular-nums">
                    <span className="inline-flex border border-red-950 px-2 py-1 text-xs font-medium">Renewal due</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <details>
            <summary id="baystamp-restrictions" className="cursor-pointer text-sm font-medium hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">C2 / Parking restrictions</summary>
            <p className="mt-3 max-w-sm text-xs leading-5 text-red-900">Permit holders may use marked resident bays within Canal ward. Loading-only bays and accessible bays have separate restrictions. This register is example data.</p>
          </details>
        </div>
        <footer className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-red-900">
          <p>4 permits shown · Vehicle identifiers are examples.</p>
          <p>Ward office · Register revision 12</p>
        </footer>
      </div>
    </section>
  )
}
