export default function DataTableAdmissionsReview() {
  return (
    <section className="bg-white text-neutral-950 px-5 py-12 md:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-wrap items-start justify-between gap-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-neutral-600">Meridian Gate / Undergraduate intake</p>
            <h2 className="mt-3 text-[2rem] leading-[1.15] font-semibold tracking-[-0.035em] md:text-[2.75rem]">A place for the next class.</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-600">Autumn 2027 intake · Faculty review workspace</p>
          </div>
          <a href="#" className="inline-flex items-center justify-center border border-neutral-200 px-4 py-2 text-sm font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Review guidelines</a>
        </header>
        <div className="grid gap-10 lg:grid-cols-[12rem_minmax(0,1fr)]">
          <nav aria-label="Admission faculties" className="flex flex-wrap gap-3 text-sm lg:flex-col lg:gap-5">
            <a href="#" aria-current="page" className="font-semibold underline underline-offset-4 hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">All faculties · 248</a>
            <a href="#" className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Architecture · 64</a>
            <a href="#" className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Engineering · 92</a>
            <a href="#" className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Humanities · 57</a>
            <a href="#" className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Sciences · 35</a>
          </nav>
          <div>
            <div className="mb-4 flex flex-wrap justify-between gap-3 border-b border-neutral-950 pb-4 text-sm">
              <p>Awaiting faculty decision</p>
              <p>4 applications shown</p>
            </div>
            <table role="table" className="block w-full text-left text-sm md:table">
              <caption className="sr-only">Meridian Gate undergraduate applications awaiting faculty decisions</caption>
              <thead role="rowgroup" className="sr-only md:not-sr-only md:table-header-group">
                <tr role="row">
                  <th scope="col" role="columnheader" className="border-b border-neutral-200 px-4 py-3 text-xs font-medium text-neutral-600">Applicant</th>
                  <th scope="col" role="columnheader" className="border-b border-neutral-200 px-4 py-3 text-xs font-medium text-neutral-600">Programme</th>
                  <th scope="col" role="columnheader" className="border-b border-neutral-200 px-4 py-3 text-xs font-medium text-neutral-600">Materials</th>
                  <th scope="col" role="columnheader" className="border-b border-neutral-200 px-4 py-3 text-xs font-medium text-neutral-600">Review</th>
                </tr>
              </thead>
              <tbody role="rowgroup" className="grid gap-3 md:table-row-group">
                <tr role="row" className="grid grid-cols-2 border-b border-neutral-200 pb-3 md:table-row md:pb-0">
                  <th scope="row" role="rowheader" className="col-span-2 block min-w-0 px-3 py-3 text-left font-semibold align-middle md:table-cell md:px-4 md:py-5">
                    <div className="block min-w-0 break-words tabular-nums">
                      <label className="flex items-start gap-3">
                        <input type="checkbox" aria-label="Select application MG-27041 from Nora Castillo" className="size-4 cursor-pointer accent-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current" />
                        <span>
                          <span>Nora Castillo</span>
                          <span className="mt-1 block text-xs font-normal text-neutral-600">MG-27041</span>
                        </span>
                      </label>
                    </div>
                  </th>
                  <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                    <span aria-hidden="true" className="mb-1 block text-xs font-normal text-neutral-600 md:hidden">Programme</span>
                    <div className="block min-w-0 break-words tabular-nums">Architecture BSc</div>
                  </td>
                  <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                    <span aria-hidden="true" className="mb-1 block text-xs font-normal text-neutral-600 md:hidden">Materials</span>
                    <div className="block min-w-0 break-words tabular-nums">Complete</div>
                  </td>
                  <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                    <span aria-hidden="true" className="mb-1 block text-xs font-normal text-neutral-600 md:hidden">Review</span>
                    <div className="block min-w-0 break-words tabular-nums">
                      <span className="inline-flex border border-neutral-200 px-2 py-1 text-xs font-medium">Portfolio review</span>
                    </div>
                  </td>
                </tr>
                <tr role="row" className="grid grid-cols-2 border-b border-neutral-200 pb-3 md:table-row md:pb-0">
                  <th scope="row" role="rowheader" className="col-span-2 block min-w-0 px-3 py-3 text-left font-semibold align-middle md:table-cell md:px-4 md:py-5">
                    <div className="block min-w-0 break-words tabular-nums">
                      <label className="flex items-start gap-3">
                        <input type="checkbox" aria-label="Select application MG-27038 from Elias Okafor" className="size-4 cursor-pointer accent-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current" />
                        <span>
                          <span>Elias Okafor</span>
                          <span className="mt-1 block text-xs font-normal text-neutral-600">MG-27038</span>
                        </span>
                      </label>
                    </div>
                  </th>
                  <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                    <span aria-hidden="true" className="mb-1 block text-xs font-normal text-neutral-600 md:hidden">Programme</span>
                    <div className="block min-w-0 break-words tabular-nums">Mechanical engineering</div>
                  </td>
                  <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                    <span aria-hidden="true" className="mb-1 block text-xs font-normal text-neutral-600 md:hidden">Materials</span>
                    <div className="block min-w-0 break-words tabular-nums">Complete</div>
                  </td>
                  <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                    <span aria-hidden="true" className="mb-1 block text-xs font-normal text-neutral-600 md:hidden">Review</span>
                    <div className="block min-w-0 break-words tabular-nums">
                      <span className="inline-flex border border-neutral-200 px-2 py-1 text-xs font-medium">Faculty review</span>
                    </div>
                  </td>
                </tr>
                <tr role="row" className="grid grid-cols-2 border-b border-neutral-200 pb-3 md:table-row md:pb-0">
                  <th scope="row" role="rowheader" className="col-span-2 block min-w-0 px-3 py-3 text-left font-semibold align-middle md:table-cell md:px-4 md:py-5">
                    <div className="block min-w-0 break-words tabular-nums">
                      <label className="flex items-start gap-3">
                        <input type="checkbox" aria-label="Select application MG-27033 from Mina Park" className="size-4 cursor-pointer accent-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current" />
                        <span>
                          <span>Mina Park</span>
                          <span className="mt-1 block text-xs font-normal text-neutral-600">MG-27033</span>
                        </span>
                      </label>
                    </div>
                  </th>
                  <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                    <span aria-hidden="true" className="mb-1 block text-xs font-normal text-neutral-600 md:hidden">Programme</span>
                    <div className="block min-w-0 break-words tabular-nums">History BA</div>
                  </td>
                  <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                    <span aria-hidden="true" className="mb-1 block text-xs font-normal text-neutral-600 md:hidden">Materials</span>
                    <div className="block min-w-0 break-words tabular-nums">1 reference due</div>
                  </td>
                  <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                    <span aria-hidden="true" className="mb-1 block text-xs font-normal text-neutral-600 md:hidden">Review</span>
                    <div className="block min-w-0 break-words tabular-nums">
                      <span className="inline-flex border border-neutral-200 px-2 py-1 text-xs font-medium">Awaiting document</span>
                    </div>
                  </td>
                </tr>
                <tr role="row" className="grid grid-cols-2 border-b border-neutral-200 pb-3 md:table-row md:pb-0">
                  <th scope="row" role="rowheader" className="col-span-2 block min-w-0 px-3 py-3 text-left font-semibold align-middle md:table-cell md:px-4 md:py-5">
                    <div className="block min-w-0 break-words tabular-nums">
                      <label className="flex items-start gap-3">
                        <input type="checkbox" aria-label="Select application MG-27029 from Theo Raman" className="size-4 cursor-pointer accent-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current" />
                        <span>
                          <span>Theo Raman</span>
                          <span className="mt-1 block text-xs font-normal text-neutral-600">MG-27029</span>
                        </span>
                      </label>
                    </div>
                  </th>
                  <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                    <span aria-hidden="true" className="mb-1 block text-xs font-normal text-neutral-600 md:hidden">Programme</span>
                    <div className="block min-w-0 break-words tabular-nums">Environmental science</div>
                  </td>
                  <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                    <span aria-hidden="true" className="mb-1 block text-xs font-normal text-neutral-600 md:hidden">Materials</span>
                    <div className="block min-w-0 break-words tabular-nums">Complete</div>
                  </td>
                  <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                    <span aria-hidden="true" className="mb-1 block text-xs font-normal text-neutral-600 md:hidden">Review</span>
                    <div className="block min-w-0 break-words tabular-nums">
                      <span className="inline-flex border border-neutral-200 px-2 py-1 text-xs font-medium">Faculty review</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <footer className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-600">
              <p>Selection stays in this preview.</p>
              <p>Example applicant records</p>
            </footer>
          </div>
        </div>
      </div>
    </section>
  )
}
