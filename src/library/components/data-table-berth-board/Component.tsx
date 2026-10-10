// Fonts: IBM Plex Mono (https://fonts.google.com/specimen/IBM+Plex+Mono)
export default function DataTableBerthBoard() {
  return (
    <section className="bg-slate-950 text-amber-50 font-['IBM_Plex_Mono',ui-sans-serif,system-ui,sans-serif] px-5 py-12 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 grid border-2 border-amber-300 md:grid-cols-[1fr_14rem]">
          <div className="p-6">
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-slate-300">Quayframe / Container operations</p>
            <h2 className="mt-3 text-[2rem] leading-[1.15] font-semibold tracking-[-0.035em] md:text-[2.75rem]">Berth allocation</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">East terminal. Day shift, Saturday 10 October.</p>
          </div>
          <div className="flex flex-col justify-center bg-amber-300 p-6 text-slate-950">
            <p>SHIFT / 01</p>
            <p className="mt-4 text-5xl font-semibold tracking-tight tabular-nums">06:00</p>
            <p className="mt-1 block text-xs font-normal text-slate-800">All times local · UTC +2</p>
          </div>
        </div>
        <div className="mb-5 flex flex-wrap gap-x-8 gap-y-3 border-y border-slate-600 py-3 text-xs">
          <p>4 BERTHS ASSIGNED</p>
          <p>1,840 MOVES PLANNED</p>
          <a href="#quayframe-handover" className="font-semibold underline underline-offset-4 hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Open shift handover</a>
        </div>
        <table role="table" className="block w-full text-left text-sm md:table">
          <caption className="sr-only">Quayframe east terminal berth assignments for the day shift</caption>
          <thead role="rowgroup" className="sr-only md:not-sr-only md:table-header-group">
            <tr role="row">
              <th scope="col" role="columnheader" className="border-b border-slate-600 px-4 py-3 text-xs font-medium text-slate-300">Berth</th>
              <th scope="col" role="columnheader" className="border-b border-slate-600 px-4 py-3 text-xs font-medium text-slate-300">Vessel</th>
              <th scope="col" role="columnheader" className="border-b border-slate-600 px-4 py-3 text-xs font-medium text-slate-300">Arrival / departure</th>
              <th scope="col" role="columnheader" className="border-b border-slate-600 px-4 py-3 text-xs font-medium text-slate-300">Cranes</th>
              <th scope="col" role="columnheader" className="border-b border-slate-600 px-4 py-3 text-xs font-medium text-slate-300">Position</th>
            </tr>
          </thead>
          <tbody role="rowgroup" className="grid gap-3 md:table-row-group">
            <tr role="row" className="grid grid-cols-2 border-b border-slate-600 pb-3 md:table-row md:pb-0">
              <th scope="row" role="rowheader" className="col-span-2 block min-w-0 px-3 py-3 text-left font-semibold align-middle md:table-cell md:px-4 md:py-5">
                <div className="block min-w-0 break-words tabular-nums">
                  <span className="text-2xl font-semibold text-amber-300">B-01</span>
                </div>
              </th>
              <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                <span aria-hidden="true" className="mb-1 block text-xs font-normal text-slate-300 md:hidden">Vessel</span>
                <div className="block min-w-0 break-words tabular-nums">
                  <span>
                    <span>MV Alder Crown</span>
                    <span className="mt-1 block text-xs font-normal text-slate-300">IMO 9384216 · 294 m</span>
                  </span>
                </div>
              </td>
              <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                <span aria-hidden="true" className="mb-1 block text-xs font-normal text-slate-300 md:hidden">Arrival / departure</span>
                <div className="block min-w-0 break-words tabular-nums">06:00 / 14:30</div>
              </td>
              <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                <span aria-hidden="true" className="mb-1 block text-xs font-normal text-slate-300 md:hidden">Cranes</span>
                <div className="block min-w-0 break-words tabular-nums">QC 02 + 03</div>
              </td>
              <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                <span aria-hidden="true" className="mb-1 block text-xs font-normal text-slate-300 md:hidden">Position</span>
                <div className="block min-w-0 break-words tabular-nums">
                  <span className="inline-flex border border-slate-600 px-2 py-1 text-xs font-medium text-amber-300">Alongside</span>
                </div>
              </td>
            </tr>
            <tr role="row" className="grid grid-cols-2 border-b border-slate-600 pb-3 md:table-row md:pb-0">
              <th scope="row" role="rowheader" className="col-span-2 block min-w-0 px-3 py-3 text-left font-semibold align-middle md:table-cell md:px-4 md:py-5">
                <div className="block min-w-0 break-words tabular-nums">
                  <span className="text-2xl font-semibold text-amber-300">B-02</span>
                </div>
              </th>
              <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                <span aria-hidden="true" className="mb-1 block text-xs font-normal text-slate-300 md:hidden">Vessel</span>
                <div className="block min-w-0 break-words tabular-nums">
                  <span>
                    <span>MV North Kestrel</span>
                    <span className="mt-1 block text-xs font-normal text-slate-300">IMO 9462187 · 248 m</span>
                  </span>
                </div>
              </td>
              <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                <span aria-hidden="true" className="mb-1 block text-xs font-normal text-slate-300 md:hidden">Arrival / departure</span>
                <div className="block min-w-0 break-words tabular-nums">08:15 / 17:00</div>
              </td>
              <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                <span aria-hidden="true" className="mb-1 block text-xs font-normal text-slate-300 md:hidden">Cranes</span>
                <div className="block min-w-0 break-words tabular-nums">QC 05</div>
              </td>
              <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                <span aria-hidden="true" className="mb-1 block text-xs font-normal text-slate-300 md:hidden">Position</span>
                <div className="block min-w-0 break-words tabular-nums">
                  <span className="inline-flex border border-slate-600 px-2 py-1 text-xs font-medium">Discharging</span>
                </div>
              </td>
            </tr>
            <tr role="row" className="grid grid-cols-2 border-b border-slate-600 pb-3 md:table-row md:pb-0">
              <th scope="row" role="rowheader" className="col-span-2 block min-w-0 px-3 py-3 text-left font-semibold align-middle md:table-cell md:px-4 md:py-5">
                <div className="block min-w-0 break-words tabular-nums">
                  <span className="text-2xl font-semibold text-amber-300">B-03</span>
                </div>
              </th>
              <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                <span aria-hidden="true" className="mb-1 block text-xs font-normal text-slate-300 md:hidden">Vessel</span>
                <div className="block min-w-0 break-words tabular-nums">
                  <span>
                    <span>MV Halcyon Bay</span>
                    <span className="mt-1 block text-xs font-normal text-slate-300">IMO 9517408 · 316 m</span>
                  </span>
                </div>
              </td>
              <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                <span aria-hidden="true" className="mb-1 block text-xs font-normal text-slate-300 md:hidden">Arrival / departure</span>
                <div className="block min-w-0 break-words tabular-nums">11:00 / 20:45</div>
              </td>
              <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                <span aria-hidden="true" className="mb-1 block text-xs font-normal text-slate-300 md:hidden">Cranes</span>
                <div className="block min-w-0 break-words tabular-nums">QC 07 + 08</div>
              </td>
              <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                <span aria-hidden="true" className="mb-1 block text-xs font-normal text-slate-300 md:hidden">Position</span>
                <div className="block min-w-0 break-words tabular-nums">
                  <span className="inline-flex border border-slate-600 px-2 py-1 text-xs font-medium">Pilot booked</span>
                </div>
              </td>
            </tr>
            <tr role="row" className="grid grid-cols-2 border-b border-slate-600 pb-3 md:table-row md:pb-0">
              <th scope="row" role="rowheader" className="col-span-2 block min-w-0 px-3 py-3 text-left font-semibold align-middle md:table-cell md:px-4 md:py-5">
                <div className="block min-w-0 break-words tabular-nums">
                  <span className="text-2xl font-semibold text-amber-300">B-04</span>
                </div>
              </th>
              <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                <span aria-hidden="true" className="mb-1 block text-xs font-normal text-slate-300 md:hidden">Vessel</span>
                <div className="block min-w-0 break-words tabular-nums">
                  <span>
                    <span>MV Sable Point</span>
                    <span className="mt-1 block text-xs font-normal text-slate-300">IMO 9621853 · 226 m</span>
                  </span>
                </div>
              </td>
              <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                <span aria-hidden="true" className="mb-1 block text-xs font-normal text-slate-300 md:hidden">Arrival / departure</span>
                <div className="block min-w-0 break-words tabular-nums">15:30 / 23:00</div>
              </td>
              <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                <span aria-hidden="true" className="mb-1 block text-xs font-normal text-slate-300 md:hidden">Cranes</span>
                <div className="block min-w-0 break-words tabular-nums">QC 10</div>
              </td>
              <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                <span aria-hidden="true" className="mb-1 block text-xs font-normal text-slate-300 md:hidden">Position</span>
                <div className="block min-w-0 break-words tabular-nums">
                  <span className="inline-flex border border-slate-600 px-2 py-1 text-xs font-medium">Approaching</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <details className="min-w-0 border border-slate-600 p-4 md:p-6">
          <summary id="quayframe-handover" className="cursor-pointer text-sm font-medium hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Shift handover notes</summary>
          <p className="mt-3 max-w-sm text-xs leading-5 text-slate-300">B-03 remains clear until the pilot confirms approach. Crane QC 08 returns from inspection at 10:30.</p>
        </details>
        <footer className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
          <p>PLAN REVISION 07</p>
          <p>Updated 05:42 by Lina Moreau</p>
        </footer>
      </div>
    </section>
  )
}
