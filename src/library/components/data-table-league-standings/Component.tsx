// Fonts: Bricolage Grotesque (https://fonts.google.com/specimen/Bricolage+Grotesque)
export default function DataTableLeagueStandings() {
  return (
    <section className="bg-blue-950 text-yellow-50 font-['Bricolage_Grotesque',ui-sans-serif,system-ui,sans-serif] px-5 py-12 md:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 grid gap-8 md:grid-cols-[1fr_14rem]">
          <div>
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-blue-200">Rallyrack / Saturday league</p>
            <h2 className="mt-3 text-[2rem] leading-[1.15] font-semibold tracking-[-0.035em] md:text-[2.75rem]">The race to the playoffs.</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-blue-200">City volleyball · Division A · Season 2026</p>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-blue-200">
              <a href="#" className="font-semibold underline underline-offset-4 hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">View match schedule</a>
            </div>
          </div>
          <div className="rounded-[2rem] bg-yellow-300 p-6 text-blue-950">
            <p>ROUND</p>
            <p className="text-[5rem] leading-none font-bold tracking-[-0.06em]">08</p>
            <p>of 12 played</p>
          </div>
        </header>
        <table role="table" className="w-full text-left text-sm">
          <caption className="sr-only">Rallyrack city volleyball league standings after eight rounds. W means win and L means loss.</caption>
          <thead role="rowgroup">
            <tr>
              <th scope="col" className="px-2 py-3 text-xs font-medium text-blue-200 md:px-4">Rank</th>
              <th scope="col" className="px-2 py-3 text-xs font-medium text-blue-200 md:px-4">Club</th>
              <th scope="col" className="px-2 py-3 text-xs font-medium text-blue-200 md:px-4">W–L</th>
              <th scope="col" className="px-2 py-3 text-xs font-medium text-blue-200 md:px-4">Pts</th>
              <th scope="col" className="hidden px-4 py-3 text-xs font-medium text-blue-200 md:table-cell">Last five</th>
            </tr>
          </thead>
          <tbody role="rowgroup">
            <tr role="row" className="border-b border-blue-700">
              <td role="cell" className="px-2 py-5 font-normal tabular-nums md:px-4">
                <span className="text-xl font-bold text-yellow-300 md:text-3xl">1</span>
              </td>
              <th scope="row" role="rowheader" className="px-2 py-5 font-semibold md:px-4">Eastbank Falcons</th>
              <td role="cell" className="px-2 py-5 font-normal tabular-nums md:px-4">7–1</td>
              <td role="cell" className="px-2 py-5 font-normal tabular-nums md:px-4">
                <span className="text-2xl font-bold tabular-nums">21</span>
              </td>
              <td role="cell" className="hidden px-4 py-5 md:table-cell">
                <div className="flex gap-1">
                  <span aria-label="Win" className="grid size-6 place-items-center rounded-md bg-yellow-300 text-xs font-semibold text-blue-950">W</span>
                  <span aria-label="Win" className="grid size-6 place-items-center rounded-md bg-yellow-300 text-xs font-semibold text-blue-950">W</span>
                  <span aria-label="Win" className="grid size-6 place-items-center rounded-md bg-yellow-300 text-xs font-semibold text-blue-950">W</span>
                  <span aria-label="Loss" className="grid size-6 place-items-center rounded-md border border-blue-200 text-xs">L</span>
                  <span aria-label="Win" className="grid size-6 place-items-center rounded-md bg-yellow-300 text-xs font-semibold text-blue-950">W</span>
                </div>
              </td>
            </tr>
            <tr role="row" className="border-b border-blue-700">
              <td role="cell" className="px-2 py-5 font-normal tabular-nums md:px-4">
                <span className="text-xl font-bold text-yellow-300 md:text-3xl">2</span>
              </td>
              <th scope="row" role="rowheader" className="px-2 py-5 font-semibold md:px-4">Juniper Rockets</th>
              <td role="cell" className="px-2 py-5 font-normal tabular-nums md:px-4">6–2</td>
              <td role="cell" className="px-2 py-5 font-normal tabular-nums md:px-4">
                <span className="text-2xl font-bold tabular-nums">18</span>
              </td>
              <td role="cell" className="hidden px-4 py-5 md:table-cell">
                <div className="flex gap-1">
                  <span aria-label="Win" className="grid size-6 place-items-center rounded-md bg-yellow-300 text-xs font-semibold text-blue-950">W</span>
                  <span aria-label="Loss" className="grid size-6 place-items-center rounded-md border border-blue-200 text-xs">L</span>
                  <span aria-label="Win" className="grid size-6 place-items-center rounded-md bg-yellow-300 text-xs font-semibold text-blue-950">W</span>
                  <span aria-label="Win" className="grid size-6 place-items-center rounded-md bg-yellow-300 text-xs font-semibold text-blue-950">W</span>
                  <span aria-label="Win" className="grid size-6 place-items-center rounded-md bg-yellow-300 text-xs font-semibold text-blue-950">W</span>
                </div>
              </td>
            </tr>
            <tr role="row" className="border-b border-blue-700">
              <td role="cell" className="px-2 py-5 font-normal tabular-nums md:px-4">
                <span className="text-xl font-bold text-yellow-300 md:text-3xl">3</span>
              </td>
              <th scope="row" role="rowheader" className="px-2 py-5 font-semibold md:px-4">Dockside Comets</th>
              <td role="cell" className="px-2 py-5 font-normal tabular-nums md:px-4">5–3</td>
              <td role="cell" className="px-2 py-5 font-normal tabular-nums md:px-4">
                <span className="text-2xl font-bold tabular-nums">15</span>
              </td>
              <td role="cell" className="hidden px-4 py-5 md:table-cell">
                <div className="flex gap-1">
                  <span aria-label="Loss" className="grid size-6 place-items-center rounded-md border border-blue-200 text-xs">L</span>
                  <span aria-label="Win" className="grid size-6 place-items-center rounded-md bg-yellow-300 text-xs font-semibold text-blue-950">W</span>
                  <span aria-label="Win" className="grid size-6 place-items-center rounded-md bg-yellow-300 text-xs font-semibold text-blue-950">W</span>
                  <span aria-label="Loss" className="grid size-6 place-items-center rounded-md border border-blue-200 text-xs">L</span>
                  <span aria-label="Win" className="grid size-6 place-items-center rounded-md bg-yellow-300 text-xs font-semibold text-blue-950">W</span>
                </div>
              </td>
            </tr>
            <tr role="row" className="border-b border-blue-700">
              <td role="cell" className="px-2 py-5 font-normal tabular-nums md:px-4">
                <span className="text-xl font-bold text-yellow-300 md:text-3xl">4</span>
              </td>
              <th scope="row" role="rowheader" className="px-2 py-5 font-semibold md:px-4">Westvale Foxes</th>
              <td role="cell" className="px-2 py-5 font-normal tabular-nums md:px-4">4–4</td>
              <td role="cell" className="px-2 py-5 font-normal tabular-nums md:px-4">
                <span className="text-2xl font-bold tabular-nums">12</span>
              </td>
              <td role="cell" className="hidden px-4 py-5 md:table-cell">
                <div className="flex gap-1">
                  <span aria-label="Win" className="grid size-6 place-items-center rounded-md bg-yellow-300 text-xs font-semibold text-blue-950">W</span>
                  <span aria-label="Win" className="grid size-6 place-items-center rounded-md bg-yellow-300 text-xs font-semibold text-blue-950">W</span>
                  <span aria-label="Loss" className="grid size-6 place-items-center rounded-md border border-blue-200 text-xs">L</span>
                  <span aria-label="Loss" className="grid size-6 place-items-center rounded-md border border-blue-200 text-xs">L</span>
                  <span aria-label="Win" className="grid size-6 place-items-center rounded-md bg-yellow-300 text-xs font-semibold text-blue-950">W</span>
                </div>
              </td>
            </tr>
            <tr role="row" className="border-b border-blue-700">
              <td role="cell" className="px-2 py-5 font-normal tabular-nums md:px-4">
                <span className="text-xl font-bold text-yellow-300 md:text-3xl">5</span>
              </td>
              <th scope="row" role="rowheader" className="px-2 py-5 font-semibold md:px-4">Cedar Street Owls</th>
              <td role="cell" className="px-2 py-5 font-normal tabular-nums md:px-4">3–5</td>
              <td role="cell" className="px-2 py-5 font-normal tabular-nums md:px-4">
                <span className="text-2xl font-bold tabular-nums">9</span>
              </td>
              <td role="cell" className="hidden px-4 py-5 md:table-cell">
                <div className="flex gap-1">
                  <span aria-label="Loss" className="grid size-6 place-items-center rounded-md border border-blue-200 text-xs">L</span>
                  <span aria-label="Loss" className="grid size-6 place-items-center rounded-md border border-blue-200 text-xs">L</span>
                  <span aria-label="Win" className="grid size-6 place-items-center rounded-md bg-yellow-300 text-xs font-semibold text-blue-950">W</span>
                  <span aria-label="Loss" className="grid size-6 place-items-center rounded-md border border-blue-200 text-xs">L</span>
                  <span aria-label="Win" className="grid size-6 place-items-center rounded-md bg-yellow-300 text-xs font-semibold text-blue-950">W</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <footer className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-blue-200">
          <p>Top four qualify. Three points per win.</p>
          <p>Updated after 9 October matches</p>
        </footer>
      </div>
    </section>
  )
}
