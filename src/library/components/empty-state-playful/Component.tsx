// Fonts: Grandstander (https://fonts.google.com/specimen/Grandstander)
export default function EmptyStatePlayful() {
  return (
    <section
      aria-labelledby="empty-state-playful-title"
      className="group w-72 rounded-[1.75rem] bg-blue-700 p-6 text-center font-['Grandstander',ui-sans-serif,system-ui,sans-serif] text-white antialiased sm:flex sm:w-[38rem] sm:items-center sm:gap-7 sm:p-8 sm:text-left"
    >
      {/* An empty games shelf: two dice, a meeple and a dashed slot where the first box will go */}
      <svg aria-hidden="true" viewBox="0 0 200 150" className="mx-auto h-32 w-auto shrink-0 overflow-visible sm:mx-0 sm:h-40">
        <rect x="6" y="128" width="188" height="8" rx="4" className="fill-blue-900" />
        <rect x="138" y="52" width="46" height="72" rx="6" fill="none" strokeWidth="2" strokeDasharray="6 5" className="stroke-blue-200" />
        <path d="M161 80v16m-8-8h16" fill="none" strokeWidth="2.5" strokeLinecap="round" className="stroke-blue-200" />
        <g className="origin-center transition-[rotate] duration-300 ease-out [transform-box:fill-box] motion-safe:group-hover:-rotate-6">
          <g transform="rotate(-5 48 100)">
            <rect x="20" y="72" width="56" height="56" rx="12" className="fill-yellow-300" />
            <g className="fill-blue-950">
              <circle cx="32" cy="84" r="5.5" />
              <circle cx="64" cy="84" r="5.5" />
              <circle cx="48" cy="100" r="5.5" />
              <circle cx="32" cy="116" r="5.5" />
              <circle cx="64" cy="116" r="5.5" />
            </g>
          </g>
        </g>
        <g className="origin-center transition-[rotate,translate] duration-300 ease-out [transform-box:fill-box] motion-safe:group-hover:-translate-y-2 motion-safe:group-hover:rotate-12">
          <g transform="rotate(14 51 53)">
            <rect x="34" y="36" width="34" height="34" rx="8" className="fill-red-400" />
            <g className="fill-white">
              <circle cx="42" cy="44" r="3.5" />
              <circle cx="51" cy="53" r="3.5" />
              <circle cx="60" cy="62" r="3.5" />
            </g>
          </g>
        </g>
        <g transform="translate(88 74)" strokeWidth="3" strokeLinejoin="round" className="fill-pink-300 stroke-pink-300">
          <circle cx="18" cy="8" r="8" />
          <path d="M12 15h12l11 6v6h-9l5 25H21l-3-12-3 12H5l5-25H1v-6Z" />
        </g>
        <path d="M120 20c1 5 2 6 7 7-5 1-6 2-7 7-1-5-2-6-7-7 5-1 6-2 7-7Z" className="fill-yellow-300" />
        <path d="M186 28c.6 3 1.2 3.6 4 4-2.8.4-3.4 1-4 4-.6-3-1.2-3.6-4-4 2.8-.4 3.4-1 4-4Z" className="fill-white" />
        <circle cx="14" cy="56" r="3" className="fill-pink-300" />
      </svg>

      <div>
        <h2 id="empty-state-playful-title" className="mt-4 text-2xl leading-tight font-bold sm:mt-0">
          Your shelf is empty
        </h2>
        <p className="mt-2 text-[0.9375rem] text-pretty text-blue-100">Add the games you own and we&rsquo;ll pick one for game night.</p>
        <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:gap-5">
          <a
            href="#"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-yellow-300 px-5 text-[0.9375rem] font-bold whitespace-nowrap text-blue-950 transition-[translate,background-color] hover:bg-yellow-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300 motion-safe:hover:-translate-y-0.5"
          >
            <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" className="size-4">
              <path d="M8 3v10M3 8h10" />
            </svg>
            Add a game
          </a>
          <a
            href="#"
            className="rounded-sm text-[0.9375rem] font-semibold whitespace-nowrap underline decoration-yellow-300 decoration-2 underline-offset-4 transition-colors hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300"
          >
            Scan a barcode
          </a>
        </div>
      </div>
    </section>
  )
}
