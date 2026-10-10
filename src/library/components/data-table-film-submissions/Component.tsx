// Fonts: Syne (https://fonts.google.com/specimen/Syne)
export default function DataTableFilmSubmissions() {
  return (
    <section className="bg-rose-50 text-red-950 font-['Syne',ui-sans-serif,system-ui,sans-serif] px-5 py-12 md:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-wrap items-center justify-between gap-8">
          <div>
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-red-900">Spliceweek / The short film festival</p>
            <h2 className="mt-3 text-[2rem] leading-[1.15] font-semibold tracking-[-0.035em] md:text-[2.75rem]">Next up in the screening room.</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-red-900">Selection round two. Four films waiting for the programme meeting.</p>
          </div>
          <div className="grid size-28 place-items-center rounded-full border-2 border-red-950 text-center">
            <p className="text-sm font-bold leading-5">12–15 NOV / EDITION 06</p>
          </div>
        </header>
        <div className="min-w-0 rounded-[1.5rem] border-2 border-red-950 bg-white p-4 md:p-8">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b-2 border-red-950 pb-5 text-sm font-semibold">
            <p>SHORT FILMS / ROUND 02</p>
            <a href="#" className="font-semibold underline underline-offset-4 hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Selection criteria</a>
          </div>
          <table role="table" className="block w-full text-left text-sm md:table">
            <caption className="sr-only">Spliceweek short-film festival submissions in the second selection round</caption>
            <thead role="rowgroup" className="sr-only md:not-sr-only md:table-header-group">
              <tr role="row">
                <th scope="col" role="columnheader" className="border-b border-rose-300 px-4 py-3 text-xs font-medium text-red-900">Film / director</th>
                <th scope="col" role="columnheader" className="border-b border-rose-300 px-4 py-3 text-xs font-medium text-red-900">Country</th>
                <th scope="col" role="columnheader" className="border-b border-rose-300 px-4 py-3 text-xs font-medium text-red-900">Runtime</th>
                <th scope="col" role="columnheader" className="border-b border-rose-300 px-4 py-3 text-xs font-medium text-red-900">Selection</th>
              </tr>
            </thead>
            <tbody role="rowgroup" className="grid gap-3 md:table-row-group">
              <tr role="row" className="grid grid-cols-2 border-b border-rose-300 pb-3 md:table-row md:pb-0">
                <th scope="row" role="rowheader" className="col-span-2 block min-w-0 px-3 py-3 text-left font-semibold align-middle md:table-cell md:px-4 md:py-5">
                  <div className="block min-w-0 break-words tabular-nums">
                    <div className="flex items-center gap-4">
                      <span aria-hidden="true" className="flex h-14 w-10 shrink-0 items-center justify-center border-x-4 border-dashed border-red-950 bg-rose-200 text-xs font-bold">01</span>
                      <span>
                        <span>The Orchard at Noon</span>
                        <span className="mt-1 block text-xs font-normal text-red-900">Lea Martel · SW-2614</span>
                      </span>
                    </div>
                  </div>
                </th>
                <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                  <span aria-hidden="true" className="mb-1 block text-xs font-normal text-red-900 md:hidden">Country</span>
                  <div className="block min-w-0 break-words tabular-nums">France</div>
                </td>
                <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                  <span aria-hidden="true" className="mb-1 block text-xs font-normal text-red-900 md:hidden">Runtime</span>
                  <div className="block min-w-0 break-words tabular-nums">18 min</div>
                </td>
                <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                  <span aria-hidden="true" className="mb-1 block text-xs font-normal text-red-900 md:hidden">Selection</span>
                  <div className="block min-w-0 break-words tabular-nums">
                    <span className="inline-flex rounded-full bg-red-900 px-3 py-1 text-xs font-semibold text-rose-50">Shortlisted</span>
                  </div>
                </td>
              </tr>
              <tr role="row" className="grid grid-cols-2 border-b border-rose-300 pb-3 md:table-row md:pb-0">
                <th scope="row" role="rowheader" className="col-span-2 block min-w-0 px-3 py-3 text-left font-semibold align-middle md:table-cell md:px-4 md:py-5">
                  <div className="block min-w-0 break-words tabular-nums">
                    <div className="flex items-center gap-4">
                      <span aria-hidden="true" className="flex h-14 w-10 shrink-0 items-center justify-center border-x-4 border-dashed border-red-950 bg-rose-200 text-xs font-bold">02</span>
                      <span>
                        <span>Two Floors Apart</span>
                        <span className="mt-1 block text-xs font-normal text-red-900">Aamir Khan · SW-2598</span>
                      </span>
                    </div>
                  </div>
                </th>
                <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                  <span aria-hidden="true" className="mb-1 block text-xs font-normal text-red-900 md:hidden">Country</span>
                  <div className="block min-w-0 break-words tabular-nums">United Kingdom</div>
                </td>
                <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                  <span aria-hidden="true" className="mb-1 block text-xs font-normal text-red-900 md:hidden">Runtime</span>
                  <div className="block min-w-0 break-words tabular-nums">14 min</div>
                </td>
                <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                  <span aria-hidden="true" className="mb-1 block text-xs font-normal text-red-900 md:hidden">Selection</span>
                  <div className="block min-w-0 break-words tabular-nums">
                    <span className="inline-flex border border-rose-300 px-2 py-1 text-xs font-medium">Second viewing</span>
                  </div>
                </td>
              </tr>
              <tr role="row" className="grid grid-cols-2 border-b border-rose-300 pb-3 md:table-row md:pb-0">
                <th scope="row" role="rowheader" className="col-span-2 block min-w-0 px-3 py-3 text-left font-semibold align-middle md:table-cell md:px-4 md:py-5">
                  <div className="block min-w-0 break-words tabular-nums">
                    <div className="flex items-center gap-4">
                      <span aria-hidden="true" className="flex h-14 w-10 shrink-0 items-center justify-center border-x-4 border-dashed border-red-950 bg-rose-200 text-xs font-bold">03</span>
                      <span>
                        <span>A Small Distance</span>
                        <span className="mt-1 block text-xs font-normal text-red-900">Sofia Duarte · SW-2581</span>
                      </span>
                    </div>
                  </div>
                </th>
                <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                  <span aria-hidden="true" className="mb-1 block text-xs font-normal text-red-900 md:hidden">Country</span>
                  <div className="block min-w-0 break-words tabular-nums">Portugal</div>
                </td>
                <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                  <span aria-hidden="true" className="mb-1 block text-xs font-normal text-red-900 md:hidden">Runtime</span>
                  <div className="block min-w-0 break-words tabular-nums">22 min</div>
                </td>
                <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                  <span aria-hidden="true" className="mb-1 block text-xs font-normal text-red-900 md:hidden">Selection</span>
                  <div className="block min-w-0 break-words tabular-nums">
                    <span className="inline-flex rounded-full bg-red-900 px-3 py-1 text-xs font-semibold text-rose-50">Shortlisted</span>
                  </div>
                </td>
              </tr>
              <tr role="row" className="grid grid-cols-2 border-b border-rose-300 pb-3 md:table-row md:pb-0">
                <th scope="row" role="rowheader" className="col-span-2 block min-w-0 px-3 py-3 text-left font-semibold align-middle md:table-cell md:px-4 md:py-5">
                  <div className="block min-w-0 break-words tabular-nums">
                    <div className="flex items-center gap-4">
                      <span aria-hidden="true" className="flex h-14 w-10 shrink-0 items-center justify-center border-x-4 border-dashed border-red-950 bg-rose-200 text-xs font-bold">04</span>
                      <span>
                        <span>Light on the Landing</span>
                        <span className="mt-1 block text-xs font-normal text-red-900">Jonas Mikkelsen · SW-2567</span>
                      </span>
                    </div>
                  </div>
                </th>
                <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                  <span aria-hidden="true" className="mb-1 block text-xs font-normal text-red-900 md:hidden">Country</span>
                  <div className="block min-w-0 break-words tabular-nums">Denmark</div>
                </td>
                <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                  <span aria-hidden="true" className="mb-1 block text-xs font-normal text-red-900 md:hidden">Runtime</span>
                  <div className="block min-w-0 break-words tabular-nums">11 min</div>
                </td>
                <td role="cell" className="block min-w-0 px-3 py-3 font-normal align-middle md:table-cell md:px-4 md:py-5">
                  <span aria-hidden="true" className="mb-1 block text-xs font-normal text-red-900 md:hidden">Selection</span>
                  <div className="block min-w-0 break-words tabular-nums">
                    <span className="inline-flex border border-rose-300 px-2 py-1 text-xs font-medium">Panel discussion</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <details className="mt-6 rounded-xl bg-rose-100 p-5">
            <summary className="cursor-pointer text-sm font-medium hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Programme note / The Orchard at Noon</summary>
            <p className="mt-3 max-w-sm text-xs leading-5 text-red-900">Two reviewers recommended the film for the afternoon programme. Confirm the English subtitle file before the 14 October selection meeting.</p>
          </details>
        </div>
        <footer className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-red-900">
          <p>Films, directors and submission references are examples.</p>
          <p>Programme meeting · 14 October</p>
        </footer>
      </div>
    </section>
  )
}
