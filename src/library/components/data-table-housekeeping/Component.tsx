// Fonts: DM Sans (https://fonts.google.com/specimen/DM+Sans)
export default function DataTableHousekeeping() {
  return (
    <section className="bg-stone-50 text-stone-900 font-['DM_Sans',ui-sans-serif,system-ui,sans-serif] px-5 py-12 md:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-wrap items-start justify-between gap-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-stone-600">Stillhaven / Rooms division</p>
            <h2 className="mt-3 text-[2rem] leading-[1.15] font-semibold tracking-[-0.035em] md:text-[2.75rem]">Rooms, ready for arrival.</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-stone-600">Saturday morning · 10 October · Check-in begins at 15:00</p>
          </div>
          <a href="#" className="inline-flex items-center justify-center border border-stone-300 px-4 py-2 text-sm font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Print floor sheet</a>
        </header>
        <div className="grid gap-8 lg:grid-cols-[16rem_minmax(0,1fr)]">
          <aside className="min-w-0">
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80" alt="Pool and loungers beside a wooden lodge with steep thatched roofs" width={1600} height={1067} className="aspect-[4/3] w-full rounded-xl object-cover" />
            <h3 className="mt-5 text-xl font-medium">Stillhaven House</h3>
            <p className="mt-1 block text-xs font-normal text-stone-600">24 rooms · Courtyard property</p>
            <hr className="my-6 border-t border-stone-300" />
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-stone-600">Today’s priority</p>
            <p className="mt-3 max-w-xl text-sm leading-6 text-stone-600">Four early arrivals on the second floor. Finish inspections before noon.</p>
            <details>
              <summary className="cursor-pointer text-sm font-medium hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Floor handover</summary>
              <p className="mt-3 max-w-sm text-xs leading-5 text-stone-600">Room 204 needs a second cot. Room 211 has a late checkout agreed for 13:00.</p>
            </details>
          </aside>
          <div className="min-w-0 rounded-xl border border-stone-300 bg-white p-3 md:p-5">
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-stone-600">SECOND FLOOR / 09:40</p>
            <table role="table" className="block w-full text-left text-sm md:table">
              <caption className="sr-only">Stillhaven second-floor housekeeping and room readiness</caption>
              <thead role="rowgroup" className="sr-only md:not-sr-only md:table-header-group">
                <tr role="row">
                  <th scope="col" role="columnheader" className="border-b border-stone-300 px-4 py-3 text-xs font-medium text-stone-600">Room</th>
                  <th scope="col" role="columnheader" className="border-b border-stone-300 px-4 py-3 text-xs font-medium text-stone-600">Service</th>
                  <th scope="col" role="columnheader" className="border-b border-stone-300 px-4 py-3 text-xs font-medium text-stone-600">Assigned to</th>
                  <th scope="col" role="columnheader" className="border-b border-stone-300 px-4 py-3 text-xs font-medium text-stone-600">Readiness</th>
                </tr>
              </thead>
              <tbody role="rowgroup" className="grid gap-3 md:table-row-group">
                <tr role="row" className="grid grid-cols-2 border-b border-stone-300 pb-3 md:table-row md:pb-0">
                  <th scope="row" role="rowheader" className="col-span-2 block min-w-0 px-3 py-3 text-left font-semibold align-middle md:table-cell md:px-4 md:py-5">
                    <div className="block min-w-0 break-words tabular-nums">
                      <span className="text-2xl font-medium tabular-nums">201</span>
                    </div>
                  </th>
                  <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                    <span aria-hidden="true" className="mb-1 block text-xs font-normal text-stone-600 md:hidden">Service</span>
                    <div className="block min-w-0 break-words tabular-nums">Departure clean</div>
                  </td>
                  <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                    <span aria-hidden="true" className="mb-1 block text-xs font-normal text-stone-600 md:hidden">Assigned to</span>
                    <div className="block min-w-0 break-words tabular-nums">Rosa Mendes</div>
                  </td>
                  <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                    <span aria-hidden="true" className="mb-1 block text-xs font-normal text-stone-600 md:hidden">Readiness</span>
                    <div className="block min-w-0 break-words tabular-nums">
                      <span className="inline-flex rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-800">Ready</span>
                    </div>
                  </td>
                </tr>
                <tr role="row" className="grid grid-cols-2 border-b border-stone-300 pb-3 md:table-row md:pb-0">
                  <th scope="row" role="rowheader" className="col-span-2 block min-w-0 px-3 py-3 text-left font-semibold align-middle md:table-cell md:px-4 md:py-5">
                    <div className="block min-w-0 break-words tabular-nums">
                      <span className="text-2xl font-medium tabular-nums">204</span>
                    </div>
                  </th>
                  <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                    <span aria-hidden="true" className="mb-1 block text-xs font-normal text-stone-600 md:hidden">Service</span>
                    <div className="block min-w-0 break-words tabular-nums">Departure + cot</div>
                  </td>
                  <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                    <span aria-hidden="true" className="mb-1 block text-xs font-normal text-stone-600 md:hidden">Assigned to</span>
                    <div className="block min-w-0 break-words tabular-nums">Eli Novak</div>
                  </td>
                  <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                    <span aria-hidden="true" className="mb-1 block text-xs font-normal text-stone-600 md:hidden">Readiness</span>
                    <div className="block min-w-0 break-words tabular-nums">
                      <span className="inline-flex rounded-full border border-stone-400 px-3 py-1 text-xs font-medium">Inspection due</span>
                    </div>
                  </td>
                </tr>
                <tr role="row" className="grid grid-cols-2 border-b border-stone-300 pb-3 md:table-row md:pb-0">
                  <th scope="row" role="rowheader" className="col-span-2 block min-w-0 px-3 py-3 text-left font-semibold align-middle md:table-cell md:px-4 md:py-5">
                    <div className="block min-w-0 break-words tabular-nums">
                      <span className="text-2xl font-medium tabular-nums">208</span>
                    </div>
                  </th>
                  <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                    <span aria-hidden="true" className="mb-1 block text-xs font-normal text-stone-600 md:hidden">Service</span>
                    <div className="block min-w-0 break-words tabular-nums">Stayover</div>
                  </td>
                  <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                    <span aria-hidden="true" className="mb-1 block text-xs font-normal text-stone-600 md:hidden">Assigned to</span>
                    <div className="block min-w-0 break-words tabular-nums">Rosa Mendes</div>
                  </td>
                  <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                    <span aria-hidden="true" className="mb-1 block text-xs font-normal text-stone-600 md:hidden">Readiness</span>
                    <div className="block min-w-0 break-words tabular-nums">
                      <span className="inline-flex rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-800">Ready</span>
                    </div>
                  </td>
                </tr>
                <tr role="row" className="grid grid-cols-2 border-b border-stone-300 pb-3 md:table-row md:pb-0">
                  <th scope="row" role="rowheader" className="col-span-2 block min-w-0 px-3 py-3 text-left font-semibold align-middle md:table-cell md:px-4 md:py-5">
                    <div className="block min-w-0 break-words tabular-nums">
                      <span className="text-2xl font-medium tabular-nums">211</span>
                    </div>
                  </th>
                  <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                    <span aria-hidden="true" className="mb-1 block text-xs font-normal text-stone-600 md:hidden">Service</span>
                    <div className="block min-w-0 break-words tabular-nums">Late checkout</div>
                  </td>
                  <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                    <span aria-hidden="true" className="mb-1 block text-xs font-normal text-stone-600 md:hidden">Assigned to</span>
                    <div className="block min-w-0 break-words tabular-nums">Mika Berg</div>
                  </td>
                  <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                    <span aria-hidden="true" className="mb-1 block text-xs font-normal text-stone-600 md:hidden">Readiness</span>
                    <div className="block min-w-0 break-words tabular-nums">
                      <span className="inline-flex rounded-full border border-stone-400 px-3 py-1 text-xs font-medium">Waiting for guest</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <footer className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-600">
              <p>2 rooms ready · 1 inspection due</p>
              <p>Floor lead · Ana Costa</p>
            </footer>
          </div>
        </div>
      </div>
    </section>
  )
}
