// Fonts: DM Mono (https://fonts.google.com/specimen/DM+Mono)
export default function DataTableAirSensors() {
  return (
    <section className="bg-[linear-gradient(120deg,#022c22_0%,#134e4a_55%,#164e63_100%)] text-teal-50 font-['DM_Mono',ui-sans-serif,system-ui,sans-serif] px-5 py-12 md:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-wrap items-start justify-between gap-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-teal-200">Breathmesh / Neighbourhood sensors</p>
            <h2 className="mt-3 text-[2rem] leading-[1.15] font-semibold tracking-[-0.035em] md:text-[2.75rem]">A reading of the neighbourhood.</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-teal-200">Live sensor sample · 10 October 2026 · Readings in µg/m³</p>
          </div>
          <a href="#" className="inline-flex items-center justify-center border border-teal-700 px-4 py-2 text-sm font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Download readings</a>
        </header>
        <div className="min-w-0 rounded-3xl border border-white/25 bg-white/5 p-4 backdrop-blur-xl md:p-8">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-teal-700 pb-5 text-xs">
            <p>NETWORK / CENTRAL DISTRICT</p>
            <p>3 REPORTING · 1 OFFLINE</p>
          </div>
          <table role="table" className="block w-full text-left text-sm md:table">
            <caption className="sr-only">Breathmesh air-quality sensor readings. PM2.5 and PM10 measurements are in micrograms per cubic metre.</caption>
            <thead role="rowgroup" className="sr-only md:not-sr-only md:table-header-group">
              <tr role="row">
                <th scope="col" role="columnheader" className="border-b border-teal-700 px-4 py-3 text-xs font-medium text-teal-200">Sensor</th>
                <th scope="col" role="columnheader" className="border-b border-teal-700 px-4 py-3 text-xs font-medium text-teal-200">PM2.5</th>
                <th scope="col" role="columnheader" className="border-b border-teal-700 px-4 py-3 text-xs font-medium text-teal-200">PM10</th>
                <th scope="col" role="columnheader" className="border-b border-teal-700 px-4 py-3 text-xs font-medium text-teal-200">Signal</th>
                <th scope="col" role="columnheader" className="border-b border-teal-700 px-4 py-3 text-xs font-medium text-teal-200">Last seen</th>
              </tr>
            </thead>
            <tbody role="rowgroup" className="grid gap-3 md:table-row-group">
              <tr role="row" className="grid grid-cols-2 border-b border-teal-700 pb-3 md:table-row md:pb-0">
                <th scope="row" role="rowheader" className="col-span-2 block min-w-0 px-3 py-3 text-left font-semibold align-middle md:table-cell md:px-4 md:py-5">
                  <div className="block min-w-0 break-words tabular-nums">
                    <span>
                      <span>Market Square</span>
                      <span className="mt-1 block text-xs font-normal text-teal-200">BM-041 · Street level</span>
                    </span>
                  </div>
                </th>
                <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                  <span aria-hidden="true" className="mb-1 block text-xs font-normal text-teal-200 md:hidden">PM2.5</span>
                  <div className="block min-w-0 break-words tabular-nums">
                    <span className="text-3xl font-medium tracking-tight tabular-nums">8.4</span>
                  </div>
                </td>
                <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                  <span aria-hidden="true" className="mb-1 block text-xs font-normal text-teal-200 md:hidden">PM10</span>
                  <div className="block min-w-0 break-words tabular-nums">16.2</div>
                </td>
                <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                  <span aria-hidden="true" className="mb-1 block text-xs font-normal text-teal-200 md:hidden">Signal</span>
                  <div className="block min-w-0 break-words tabular-nums">
                    <div className="flex flex-wrap items-center gap-3">
                      <div aria-hidden="true" className="flex items-end gap-1">
                        <span className="h-2 w-1 bg-teal-200"></span>
                        <span className="h-3 w-1 bg-teal-200"></span>
                        <span className="h-4 w-1 bg-teal-200"></span>
                        <span className="h-5 w-1 bg-teal-200"></span>
                      </div>
                      <span>Strong</span>
                    </div>
                  </div>
                </td>
                <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                  <span aria-hidden="true" className="mb-1 block text-xs font-normal text-teal-200 md:hidden">Last seen</span>
                  <div className="block min-w-0 break-words tabular-nums">09:42</div>
                </td>
              </tr>
              <tr role="row" className="grid grid-cols-2 border-b border-teal-700 pb-3 md:table-row md:pb-0">
                <th scope="row" role="rowheader" className="col-span-2 block min-w-0 px-3 py-3 text-left font-semibold align-middle md:table-cell md:px-4 md:py-5">
                  <div className="block min-w-0 break-words tabular-nums">
                    <span>
                      <span>East Primary</span>
                      <span className="mt-1 block text-xs font-normal text-teal-200">BM-026 · Courtyard</span>
                    </span>
                  </div>
                </th>
                <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                  <span aria-hidden="true" className="mb-1 block text-xs font-normal text-teal-200 md:hidden">PM2.5</span>
                  <div className="block min-w-0 break-words tabular-nums">
                    <span className="text-3xl font-medium tracking-tight tabular-nums">6.1</span>
                  </div>
                </td>
                <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                  <span aria-hidden="true" className="mb-1 block text-xs font-normal text-teal-200 md:hidden">PM10</span>
                  <div className="block min-w-0 break-words tabular-nums">12.8</div>
                </td>
                <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                  <span aria-hidden="true" className="mb-1 block text-xs font-normal text-teal-200 md:hidden">Signal</span>
                  <div className="block min-w-0 break-words tabular-nums">
                    <div className="flex flex-wrap items-center gap-3">
                      <div aria-hidden="true" className="flex items-end gap-1">
                        <span className="h-2 w-1 bg-teal-200"></span>
                        <span className="h-3 w-1 bg-teal-200"></span>
                        <span className="h-4 w-1 bg-teal-200"></span>
                        <span className="h-5 w-1 bg-teal-200"></span>
                      </div>
                      <span>Strong</span>
                    </div>
                  </div>
                </td>
                <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                  <span aria-hidden="true" className="mb-1 block text-xs font-normal text-teal-200 md:hidden">Last seen</span>
                  <div className="block min-w-0 break-words tabular-nums">09:42</div>
                </td>
              </tr>
              <tr role="row" className="grid grid-cols-2 border-b border-teal-700 pb-3 md:table-row md:pb-0">
                <th scope="row" role="rowheader" className="col-span-2 block min-w-0 px-3 py-3 text-left font-semibold align-middle md:table-cell md:px-4 md:py-5">
                  <div className="block min-w-0 break-words tabular-nums">
                    <span>
                      <span>Ring Road West</span>
                      <span className="mt-1 block text-xs font-normal text-teal-200">BM-018 · Roadside</span>
                    </span>
                  </div>
                </th>
                <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                  <span aria-hidden="true" className="mb-1 block text-xs font-normal text-teal-200 md:hidden">PM2.5</span>
                  <div className="block min-w-0 break-words tabular-nums">
                    <span className="text-3xl font-medium tracking-tight tabular-nums">19.7</span>
                  </div>
                </td>
                <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                  <span aria-hidden="true" className="mb-1 block text-xs font-normal text-teal-200 md:hidden">PM10</span>
                  <div className="block min-w-0 break-words tabular-nums">28.4</div>
                </td>
                <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                  <span aria-hidden="true" className="mb-1 block text-xs font-normal text-teal-200 md:hidden">Signal</span>
                  <div className="block min-w-0 break-words tabular-nums">
                    <div className="flex flex-wrap items-center gap-3">
                      <div aria-hidden="true" className="flex items-end gap-1">
                        <span className="h-2 w-1 bg-teal-200"></span>
                        <span className="h-3 w-1 bg-teal-200"></span>
                      </div>
                      <span>Fair</span>
                    </div>
                  </div>
                </td>
                <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                  <span aria-hidden="true" className="mb-1 block text-xs font-normal text-teal-200 md:hidden">Last seen</span>
                  <div className="block min-w-0 break-words tabular-nums">09:41</div>
                </td>
              </tr>
              <tr role="row" className="grid grid-cols-2 border-b border-teal-700 pb-3 md:table-row md:pb-0">
                <th scope="row" role="rowheader" className="col-span-2 block min-w-0 px-3 py-3 text-left font-semibold align-middle md:table-cell md:px-4 md:py-5">
                  <div className="block min-w-0 break-words tabular-nums">
                    <span>
                      <span>Riverside Walk</span>
                      <span className="mt-1 block text-xs font-normal text-teal-200">BM-033 · Footpath</span>
                    </span>
                  </div>
                </th>
                <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                  <span aria-hidden="true" className="mb-1 block text-xs font-normal text-teal-200 md:hidden">PM2.5</span>
                  <div className="block min-w-0 break-words tabular-nums">
                    <span className="text-3xl font-medium tracking-tight tabular-nums">—</span>
                  </div>
                </td>
                <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                  <span aria-hidden="true" className="mb-1 block text-xs font-normal text-teal-200 md:hidden">PM10</span>
                  <div className="block min-w-0 break-words tabular-nums">—</div>
                </td>
                <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                  <span aria-hidden="true" className="mb-1 block text-xs font-normal text-teal-200 md:hidden">Signal</span>
                  <div className="block min-w-0 break-words tabular-nums">
                    <span className="inline-flex border border-teal-700 px-2 py-1 text-xs font-medium">Offline</span>
                  </div>
                </td>
                <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                  <span aria-hidden="true" className="mb-1 block text-xs font-normal text-teal-200 md:hidden">Last seen</span>
                  <div className="block min-w-0 break-words tabular-nums">08:17</div>
                </td>
              </tr>
            </tbody>
          </table>
          <hr className="my-6 border-t border-teal-700" />
          <details>
            <summary className="cursor-pointer text-sm font-medium hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">BM-018 / Calibration record</summary>
            <p className="mt-3 max-w-sm text-xs leading-5 text-teal-200">Ring Road West was last calibrated on 1 October. Sample interval is 60 seconds. Riverside Walk has not reported since 08:17; missing values are shown with a dash.</p>
          </details>
        </div>
        <footer className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-teal-200">
          <p>Example telemetry · 60-second sampling</p>
          <p>Next synchronisation · 09:43</p>
        </footer>
      </div>
    </section>
  )
}
