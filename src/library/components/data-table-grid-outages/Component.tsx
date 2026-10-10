// Fonts: Archivo (https://fonts.google.com/specimen/Archivo)
export default function DataTableGridOutages() {
  return (
    <section className="bg-[linear-gradient(135deg,#1c1917_0%,#431407_100%)] text-orange-50 font-['Archivo',ui-sans-serif,system-ui,sans-serif] px-5 py-12 md:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-wrap items-start justify-between gap-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-stone-300">Switchline / Control room</p>
            <h2 className="mt-3 text-[2rem] leading-[1.15] font-semibold tracking-[-0.035em] md:text-[2.75rem]">Active interruptions</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-stone-300">West service area · Saturday, 10 October.</p>
          </div>
          <a href="#" className="inline-flex items-center justify-center border border-stone-600 px-4 py-2 text-sm font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Download incident log</a>
        </header>
        <div className="rounded-2xl border border-white/20 bg-white/5 p-4 backdrop-blur-xl md:p-8">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-6 border-b border-stone-600 pb-6">
            <div>
              <p className="text-xs font-semibold tracking-[0.12em] uppercase text-stone-300">Customers without supply</p>
              <p className="text-[4rem] leading-none font-semibold tracking-[-0.06em] text-orange-300 tabular-nums">376</p>
            </div>
            <div>
              <span className="inline-flex border border-stone-600 px-2 py-1 text-xs font-medium text-orange-300">3 active incidents</span>
              <p className="mt-1 block text-xs font-normal text-stone-300">Latest crew update · 09:24</p>
            </div>
          </div>
          <table role="table" className="block w-full text-left text-sm md:table">
            <caption className="sr-only">Switchline active power-grid outages and estimated restoration times</caption>
            <thead role="rowgroup" className="sr-only md:not-sr-only md:table-header-group">
              <tr role="row">
                <th scope="col" role="columnheader" className="border-b border-stone-600 px-4 py-3 text-xs font-medium text-stone-300">Feeder</th>
                <th scope="col" role="columnheader" className="border-b border-stone-600 px-4 py-3 text-xs font-medium text-stone-300">Area</th>
                <th scope="col" role="columnheader" className="border-b border-stone-600 px-4 py-3 text-xs font-medium text-stone-300">Customers</th>
                <th scope="col" role="columnheader" className="border-b border-stone-600 px-4 py-3 text-xs font-medium text-stone-300">Crew / ETA</th>
              </tr>
            </thead>
            <tbody role="rowgroup" className="grid gap-3 md:table-row-group">
              <tr role="row" className="grid grid-cols-2 border-b border-stone-600 pb-3 md:table-row md:pb-0">
                <th scope="row" role="rowheader" className="col-span-2 block min-w-0 px-3 py-3 text-left font-semibold align-middle md:table-cell md:px-4 md:py-5">
                  <div className="block min-w-0 break-words tabular-nums">
                    <span>
                      <span>SW-214</span>
                      <span className="mt-1 block text-xs font-normal text-stone-300">Unplanned · 08:16</span>
                    </span>
                  </div>
                </th>
                <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                  <span aria-hidden="true" className="mb-1 block text-xs font-normal text-stone-300 md:hidden">Area</span>
                  <div className="block min-w-0 break-words tabular-nums">Northgate</div>
                </td>
                <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                  <span aria-hidden="true" className="mb-1 block text-xs font-normal text-stone-300 md:hidden">Customers</span>
                  <div className="block min-w-0 break-words tabular-nums">248</div>
                </td>
                <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                  <span aria-hidden="true" className="mb-1 block text-xs font-normal text-stone-300 md:hidden">Crew / ETA</span>
                  <div className="block min-w-0 break-words tabular-nums">
                    <span>
                      <span>Crew Delta</span>
                      <span className="mt-1 block text-xs font-normal text-stone-300">Restore by 11:30</span>
                    </span>
                  </div>
                </td>
              </tr>
              <tr role="row" className="grid grid-cols-2 border-b border-stone-600 pb-3 md:table-row md:pb-0">
                <th scope="row" role="rowheader" className="col-span-2 block min-w-0 px-3 py-3 text-left font-semibold align-middle md:table-cell md:px-4 md:py-5">
                  <div className="block min-w-0 break-words tabular-nums">
                    <span>
                      <span>SW-087</span>
                      <span className="mt-1 block text-xs font-normal text-stone-300">Unplanned · 08:43</span>
                    </span>
                  </div>
                </th>
                <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                  <span aria-hidden="true" className="mb-1 block text-xs font-normal text-stone-300 md:hidden">Area</span>
                  <div className="block min-w-0 break-words tabular-nums">Wren Park</div>
                </td>
                <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                  <span aria-hidden="true" className="mb-1 block text-xs font-normal text-stone-300 md:hidden">Customers</span>
                  <div className="block min-w-0 break-words tabular-nums">92</div>
                </td>
                <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                  <span aria-hidden="true" className="mb-1 block text-xs font-normal text-stone-300 md:hidden">Crew / ETA</span>
                  <div className="block min-w-0 break-words tabular-nums">
                    <span>
                      <span>Crew Echo</span>
                      <span className="mt-1 block text-xs font-normal text-stone-300">Restore by 10:45</span>
                    </span>
                  </div>
                </td>
              </tr>
              <tr role="row" className="grid grid-cols-2 border-b border-stone-600 pb-3 md:table-row md:pb-0">
                <th scope="row" role="rowheader" className="col-span-2 block min-w-0 px-3 py-3 text-left font-semibold align-middle md:table-cell md:px-4 md:py-5">
                  <div className="block min-w-0 break-words tabular-nums">
                    <span>
                      <span>SW-302</span>
                      <span className="mt-1 block text-xs font-normal text-stone-300">Planned · 07:00</span>
                    </span>
                  </div>
                </th>
                <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                  <span aria-hidden="true" className="mb-1 block text-xs font-normal text-stone-300 md:hidden">Area</span>
                  <div className="block min-w-0 break-words tabular-nums">Millbank</div>
                </td>
                <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                  <span aria-hidden="true" className="mb-1 block text-xs font-normal text-stone-300 md:hidden">Customers</span>
                  <div className="block min-w-0 break-words tabular-nums">36</div>
                </td>
                <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                  <span aria-hidden="true" className="mb-1 block text-xs font-normal text-stone-300 md:hidden">Crew / ETA</span>
                  <div className="block min-w-0 break-words tabular-nums">
                    <span>
                      <span>Crew Bravo</span>
                      <span className="mt-1 block text-xs font-normal text-stone-300">Restore by 12:00</span>
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <details className="mt-6 min-w-0 border border-stone-600 p-4 md:p-6">
          <summary className="cursor-pointer text-sm font-medium hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">SW-214 / Crew update</summary>
          <p className="mt-3 max-w-sm text-xs leading-5 text-stone-300">Cable fault isolated on Northgate feeder. Crew Delta is replacing the joint; the next assessment is due at 10:15. Restoration times are estimates.</p>
        </details>
        <footer className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-300">
          <p>Telemetry refreshed 09:26</p>
          <p>Control desk · West area</p>
        </footer>
      </div>
    </section>
  )
}
