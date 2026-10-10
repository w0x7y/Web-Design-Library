// Fonts: Newsreader (https://fonts.google.com/specimen/Newsreader)
export default function DropdownsWineVintages() {
  return (
    <div className="w-72 sm:w-80 rounded-sm bg-rose-950 p-5 text-rose-50 font-['Newsreader',ui-serif,Georgia,serif]">
      <p className="mb-4 text-xs tracking-[0.15em] uppercase">Caskline / The cellar</p>
      <details open className="group">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 [&::-webkit-details-marker]:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current border-y border-rose-200/40 py-3">
          <span className="text-[26px] leading-8">Browse by vintage</span>
          <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4 shrink-0 group-open:rotate-180">
            <path d="m4 6 4 4 4-4" />
          </svg>
        </summary>
        <ul role="list" className="mt-2">
          <li>
            <a href="#caskline-2022" className="flex items-center gap-4 border-b border-rose-200/20 py-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current hover:bg-rose-900">
              <span className="w-16 shrink-0 text-[32px] leading-none tabular-nums">2022</span>
              <span><span className="block text-sm">Terrace red</span><span className="block text-xs text-rose-200">18 bottles · cellar 04</span></span>
            </a>
          </li>
          <li>
            <a href="#caskline-2020" className="flex items-center gap-4 border-b border-rose-200/20 py-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current hover:bg-rose-900">
              <span className="w-16 shrink-0 text-[32px] leading-none tabular-nums">2020</span>
              <span><span className="block text-sm">North slope reserve</span><span className="block text-xs text-rose-200">6 bottles · cellar 02</span></span>
            </a>
          </li>
          <li>
            <a href="#caskline-2018" className="flex items-center gap-4 border-b border-rose-200/20 py-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current hover:bg-rose-900">
              <span className="w-16 shrink-0 text-[32px] leading-none tabular-nums">2018</span>
              <span><span className="block text-sm">Estate selection</span><span className="block text-xs text-rose-200">3 bottles · cellar 01</span></span>
            </a>
          </li>
        </ul>
        <p className="mt-3 text-xs italic text-rose-200">Stored at 12°C. Ready when you are.</p>
      </details>
    </div>
  )
}
