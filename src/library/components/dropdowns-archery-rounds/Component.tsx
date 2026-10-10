export default function DropdownsArcheryRounds() {
  return (
    <div className="w-72 sm:w-80 rounded-lg border border-green-800 bg-stone-50 p-4 text-green-950">
      <div className="mb-4 flex items-center justify-between border-b border-green-800/30 pb-3">
        <p className="text-sm font-semibold">ARROWCOUNT</p>
        <p className="text-[10px] text-green-800">Club league / 2026</p>
      </div>
      <details open className="group">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 [&::-webkit-details-marker]:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current text-lg font-semibold">
          <span>Round directory</span>
          <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4 shrink-0 group-open:rotate-180">
            <path d="m4 6 4 4 4-4" />
          </svg>
        </summary>
        <div className="mt-3 grid gap-2">
          <details open name="dropdowns-archery-rounds-format" className="group/round rounded-md border border-green-800/40 bg-white">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 [&::-webkit-details-marker]:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current p-3 text-xs font-semibold">
              <span>Indoor · 18 metres</span>
              <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-3.5 shrink-0 group-open/round:rotate-180">
                <path d="m4 6 4 4 4-4" />
              </svg>
            </summary>
            <ul role="list" className="mx-3 mb-3 border-l-2 border-green-800">
              <li>
                <a href="#arrowcount-indoor-recurve" className="flex items-center justify-between gap-2 py-2 pl-3 text-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current hover:bg-green-50">
                  <span>Recurve qualifier</span><span className="text-[10px] text-green-800">60 arrows</span>
                </a>
              </li>
              <li>
                <a href="#arrowcount-indoor-barebow" className="flex items-center justify-between gap-2 py-2 pl-3 text-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current hover:bg-green-50">
                  <span>Barebow qualifier</span><span className="text-[10px] text-green-800">60 arrows</span>
                </a>
              </li>
            </ul>
          </details>
          <details name="dropdowns-archery-rounds-format" className="group/round rounded-md border border-green-800/40 bg-white">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 [&::-webkit-details-marker]:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current p-3 text-xs font-semibold">
              <span>Outdoor · 50 metres</span>
              <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-3.5 shrink-0 group-open/round:rotate-180">
                <path d="m4 6 4 4 4-4" />
              </svg>
            </summary>
            <ul role="list" className="mx-3 mb-3 border-l-2 border-green-800">
              <li>
                <a href="#arrowcount-outdoor-compound" className="flex items-center justify-between gap-2 py-2 pl-3 text-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current hover:bg-green-50">
                  <span>Compound ranking</span><span className="text-[10px] text-green-800">72 arrows</span>
                </a>
              </li>
              <li>
                <a href="#arrowcount-outdoor-barebow" className="flex items-center justify-between gap-2 py-2 pl-3 text-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current hover:bg-green-50">
                  <span>Barebow ranking</span><span className="text-[10px] text-green-800">72 arrows</span>
                </a>
              </li>
            </ul>
          </details>
        </div>
        <p className="mt-3 flex items-center justify-between rounded-sm bg-amber-100 px-3 py-2 text-[10px] text-green-900"><span>October series</span><span>Scorecards close 18:00</span></p>
      </details>
    </div>
  )
}
