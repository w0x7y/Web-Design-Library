// Fonts: Manrope (https://fonts.google.com/specimen/Manrope)
export default function DataTableTrialEnrolment() {
  return (
    <section className="bg-white text-blue-950 font-['Manrope',ui-sans-serif,system-ui,sans-serif] px-5 py-12 md:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-wrap items-start justify-between gap-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-slate-600">Cohortlane / Site recruitment</p>
            <h2 className="mt-3 text-[2rem] leading-[1.15] font-semibold tracking-[-0.035em] md:text-[2.75rem]">Recruitment, by site</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">Study CL-208 · October reporting window. Aggregate site counts only.</p>
          </div>
          <a href="#" className="inline-flex items-center justify-center border border-slate-200 px-4 py-2 text-sm font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Export site report</a>
        </header>
        <div className="grid gap-8 lg:grid-cols-[16rem_minmax(0,1fr)]">
          <aside className="rounded-2xl bg-sky-50 p-6">
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-slate-600">CL-208 / Phase II</p>
            <h3 className="mt-4 text-xl font-semibold">Adult sleep study</h3>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">Four research centres. One shared recruitment target.</p>
            <p className="mt-4 text-5xl font-semibold tracking-tight tabular-nums">100</p>
            <p className="mt-1 block text-xs font-normal text-slate-600">of 160 participants enrolled</p>
            <hr className="my-6 border-t border-slate-200" />
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-slate-600">Next review</p>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">14 October 2026</p>
            <a href="#" className="font-semibold underline underline-offset-4 hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Study overview</a>
          </aside>
          <div>
            <table role="table" className="block w-full text-left text-sm md:table">
              <caption className="sr-only">Cohortlane study CL-208 recruitment by research site; counts contain no participant identifiers</caption>
              <thead role="rowgroup" className="sr-only md:not-sr-only md:table-header-group">
                <tr role="row">
                  <th scope="col" role="columnheader" className="border-b border-slate-200 px-4 py-3 text-xs font-medium text-slate-600">Site</th>
                  <th scope="col" role="columnheader" className="border-b border-slate-200 px-4 py-3 text-xs font-medium text-slate-600">Screened</th>
                  <th scope="col" role="columnheader" className="border-b border-slate-200 px-4 py-3 text-xs font-medium text-slate-600">Enrolled / target</th>
                  <th scope="col" role="columnheader" className="border-b border-slate-200 px-4 py-3 text-xs font-medium text-slate-600">Recruitment</th>
                </tr>
              </thead>
              <tbody role="rowgroup" className="grid gap-3 md:table-row-group">
                <tr role="row" className="grid grid-cols-2 border-b border-slate-200 pb-3 md:table-row md:pb-0">
                  <th scope="row" role="rowheader" className="col-span-2 block min-w-0 px-3 py-3 text-left font-semibold align-middle md:table-cell md:px-4 md:py-5">
                    <div className="block min-w-0 break-words tabular-nums">
                      <span>
                        <span>Bristol Research Unit</span>
                        <span className="mt-1 block text-xs font-normal text-slate-600">GB-014 · Dr. A. Finch</span>
                      </span>
                    </div>
                  </th>
                  <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                    <span aria-hidden="true" className="mb-1 block text-xs font-normal text-slate-600 md:hidden">Screened</span>
                    <div className="block min-w-0 break-words tabular-nums">48</div>
                  </td>
                  <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                    <span aria-hidden="true" className="mb-1 block text-xs font-normal text-slate-600 md:hidden">Enrolled / target</span>
                    <div className="block min-w-0 break-words tabular-nums">
                      <div>
                        <div className="block min-w-0 break-words tabular-nums">30 / 40</div>
                        <span aria-hidden="true" className="mt-2 block h-1.5 w-32 overflow-hidden rounded-full bg-slate-200">
                          <span aria-hidden="true" className="block h-full bg-blue-700 w-3/4"></span>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                    <span aria-hidden="true" className="mb-1 block text-xs font-normal text-slate-600 md:hidden">Recruitment</span>
                    <div className="block min-w-0 break-words tabular-nums">
                      <span className="inline-flex border border-slate-200 px-2 py-1 text-xs font-medium text-blue-700">Open</span>
                    </div>
                  </td>
                </tr>
                <tr role="row" className="grid grid-cols-2 border-b border-slate-200 pb-3 md:table-row md:pb-0">
                  <th scope="row" role="rowheader" className="col-span-2 block min-w-0 px-3 py-3 text-left font-semibold align-middle md:table-cell md:px-4 md:py-5">
                    <div className="block min-w-0 break-words tabular-nums">
                      <span>
                        <span>Ghent Study Centre</span>
                        <span className="mt-1 block text-xs font-normal text-slate-600">BE-008 · Dr. S. Vermeulen</span>
                      </span>
                    </div>
                  </th>
                  <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                    <span aria-hidden="true" className="mb-1 block text-xs font-normal text-slate-600 md:hidden">Screened</span>
                    <div className="block min-w-0 break-words tabular-nums">62</div>
                  </td>
                  <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                    <span aria-hidden="true" className="mb-1 block text-xs font-normal text-slate-600 md:hidden">Enrolled / target</span>
                    <div className="block min-w-0 break-words tabular-nums">
                      <div>
                        <div className="block min-w-0 break-words tabular-nums">40 / 40</div>
                        <span aria-hidden="true" className="mt-2 block h-1.5 w-32 overflow-hidden rounded-full bg-slate-200">
                          <span aria-hidden="true" className="block h-full bg-blue-700 w-full"></span>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                    <span aria-hidden="true" className="mb-1 block text-xs font-normal text-slate-600 md:hidden">Recruitment</span>
                    <div className="block min-w-0 break-words tabular-nums">
                      <span className="inline-flex border border-slate-200 px-2 py-1 text-xs font-medium">Target reached</span>
                    </div>
                  </td>
                </tr>
                <tr role="row" className="grid grid-cols-2 border-b border-slate-200 pb-3 md:table-row md:pb-0">
                  <th scope="row" role="rowheader" className="col-span-2 block min-w-0 px-3 py-3 text-left font-semibold align-middle md:table-cell md:px-4 md:py-5">
                    <div className="block min-w-0 break-words tabular-nums">
                      <span>
                        <span>Lyon Clinical Campus</span>
                        <span className="mt-1 block text-xs font-normal text-slate-600">FR-021 · Dr. M. Rey</span>
                      </span>
                    </div>
                  </th>
                  <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                    <span aria-hidden="true" className="mb-1 block text-xs font-normal text-slate-600 md:hidden">Screened</span>
                    <div className="block min-w-0 break-words tabular-nums">31</div>
                  </td>
                  <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                    <span aria-hidden="true" className="mb-1 block text-xs font-normal text-slate-600 md:hidden">Enrolled / target</span>
                    <div className="block min-w-0 break-words tabular-nums">
                      <div>
                        <div className="block min-w-0 break-words tabular-nums">20 / 40</div>
                        <span aria-hidden="true" className="mt-2 block h-1.5 w-32 overflow-hidden rounded-full bg-slate-200">
                          <span aria-hidden="true" className="block h-full bg-blue-700 w-1/2"></span>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                    <span aria-hidden="true" className="mb-1 block text-xs font-normal text-slate-600 md:hidden">Recruitment</span>
                    <div className="block min-w-0 break-words tabular-nums">
                      <span className="inline-flex border border-slate-200 px-2 py-1 text-xs font-medium text-blue-700">Open</span>
                    </div>
                  </td>
                </tr>
                <tr role="row" className="grid grid-cols-2 border-b border-slate-200 pb-3 md:table-row md:pb-0">
                  <th scope="row" role="rowheader" className="col-span-2 block min-w-0 px-3 py-3 text-left font-semibold align-middle md:table-cell md:px-4 md:py-5">
                    <div className="block min-w-0 break-words tabular-nums">
                      <span>
                        <span>Utrecht Health Institute</span>
                        <span className="mt-1 block text-xs font-normal text-slate-600">NL-006 · Dr. T. van Dijk</span>
                      </span>
                    </div>
                  </th>
                  <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                    <span aria-hidden="true" className="mb-1 block text-xs font-normal text-slate-600 md:hidden">Screened</span>
                    <div className="block min-w-0 break-words tabular-nums">19</div>
                  </td>
                  <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                    <span aria-hidden="true" className="mb-1 block text-xs font-normal text-slate-600 md:hidden">Enrolled / target</span>
                    <div className="block min-w-0 break-words tabular-nums">
                      <div>
                        <div className="block min-w-0 break-words tabular-nums">10 / 40</div>
                        <span aria-hidden="true" className="mt-2 block h-1.5 w-32 overflow-hidden rounded-full bg-slate-200">
                          <span aria-hidden="true" className="block h-full bg-blue-700 w-1/4"></span>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                    <span aria-hidden="true" className="mb-1 block text-xs font-normal text-slate-600 md:hidden">Recruitment</span>
                    <div className="block min-w-0 break-words tabular-nums">
                      <span className="inline-flex border border-slate-200 px-2 py-1 text-xs font-medium text-blue-700">Open</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <footer className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <p>Screened 160 · Enrolled 100</p>
              <p>Snapshot 10 Oct, 09:00</p>
            </footer>
          </div>
        </div>
      </div>
    </section>
  )
}
