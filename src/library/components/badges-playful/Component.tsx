// Fonts: Fredoka (https://fonts.google.com/specimen/Fredoka)
export default function BadgesPlayful() {
  return (
    <div className="flex w-72 flex-col gap-5 rounded-[1.75rem] bg-orange-50 p-5 font-['Fredoka',ui-rounded,system-ui,sans-serif] text-indigo-950 antialiased sm:w-[36rem] sm:gap-6 sm:p-7">
      {/* Status stickers */}
      <ul role="list" className="flex flex-wrap items-center gap-2">
        <li className="inline-flex h-8 items-center gap-1.5 rounded-full border-2 border-indigo-950 bg-lime-300 pr-3.5 pl-2.5 text-[0.9375rem] font-semibold">
          <svg aria-hidden="true" viewBox="0 0 16 16" fill="currentColor" className="size-4">
            <path d="M8 14s-6-3.5-6-8.1A3.2 3.2 0 0 1 8 4.2a3.2 3.2 0 0 1 6 1.7C14 10.5 8 14 8 14Z" />
          </svg>
          Available
        </li>
        <li className="inline-flex h-8 items-center gap-1.5 rounded-full border-2 border-indigo-950 bg-amber-300 pr-3.5 pl-2.5 text-[0.9375rem] font-semibold">
          <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4">
            <circle cx="8" cy="8" r="6" />
            <path d="M8 5v3l2 1.5" />
          </svg>
          Reserved
        </li>
        <li className="inline-flex h-8 -rotate-3 items-center gap-1.5 rounded-full border-2 border-indigo-950 bg-pink-300 pr-3.5 pl-2.5 text-[0.9375rem] font-semibold">
          <svg aria-hidden="true" viewBox="0 0 16 16" fill="currentColor" className="size-4">
            <path d="M7.4 1.9a1 1 0 0 1 1.2 0l5.5 4.4a1 1 0 0 1 .4.8V13a1.5 1.5 0 0 1-1.5 1.5H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H3A1.5 1.5 0 0 1 1.5 13V7.1a1 1 0 0 1 .4-.8l5.5-4.4Z" />
          </svg>
          Adopted!
        </li>
        <li className="inline-flex h-8 items-center gap-1.5 rounded-full border-2 border-indigo-950 bg-sky-300 pr-3.5 pl-2.5 text-[0.9375rem] font-semibold">
          <svg aria-hidden="true" viewBox="0 0 16 16" fill="currentColor" className="size-4">
            <path d="M6.5 2h3a.5.5 0 0 1 .5.5V6h3.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H10v3.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V10H2.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5H6V2.5a.5.5 0 0 1 .5-.5Z" />
          </svg>
          Vet care
        </li>
      </ul>

      {/* Trait tags */}
      <ul role="list" className="flex flex-wrap gap-1.5">
        <li className="inline-flex h-7 items-center gap-1 rounded-full bg-white pr-2.5 pl-2 text-[0.8125rem] font-medium ring-2 ring-indigo-950/15">
          <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" className="size-3.5 text-violet-600">
            <circle cx="8" cy="8" r="6" />
            <path d="M5.75 9.5a2.6 2.6 0 0 0 4.5 0M6 6.25v.5M10 6.25v.5" />
          </svg>
          Good with kids
        </li>
        <li className="inline-flex h-7 items-center gap-1 rounded-full bg-white pr-2.5 pl-2 text-[0.8125rem] font-medium ring-2 ring-indigo-950/15">
          <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="size-3.5 text-violet-600">
            <path d="M2.75 13.25V3l3.5 2.75h3.5L13.25 3v10.25Z" />
          </svg>
          Cat-friendly
        </li>
        <li className="inline-flex h-7 items-center gap-1 rounded-full bg-white pr-2.5 pl-2 text-[0.8125rem] font-medium ring-2 ring-indigo-950/15">
          <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-3.5 text-violet-600">
            <path d="m3 8.5 3 3 7-7.5" />
          </svg>
          House-trained
        </li>
        <li className="inline-flex h-7 items-center gap-1 rounded-full bg-white pr-2.5 pl-2 text-[0.8125rem] font-medium ring-2 ring-indigo-950/15">
          <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="size-3.5 text-violet-600">
            <path d="M2.5 3h4.5L2.5 9H7M9 8h4.5L9 13h4.5" />
          </svg>
          Snores a little
        </li>
      </ul>

      {/* Counter, sticker, live dot and removable filter */}
      <ul role="list" className="flex flex-wrap items-center gap-2.5">
        <li className="inline-flex h-8 items-center gap-2 rounded-full bg-indigo-950 pr-1 pl-3.5 text-sm font-semibold text-white">
          New arrivals
          <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-pink-300 px-1.5 text-[0.8125rem] font-bold text-indigo-950 tabular-nums">
            12
          </span>
        </li>
        <li className="relative grid size-14 rotate-12 place-items-center">
          <svg aria-hidden="true" viewBox="0 0 56 56" className="absolute inset-0 size-full fill-yellow-300 stroke-indigo-950 stroke-2" strokeLinejoin="round">
            <path d="M28 1.5 33.6 7.2 41.3 5.1 43.2 12.8 50.9 14.8 48.8 22.4 54.5 28 48.8 33.6 50.9 41.3 43.2 43.2 41.3 50.9 33.6 48.8 28 54.5 22.4 48.8 14.8 50.9 12.8 43.2 5.1 41.3 7.2 33.6 1.5 28 7.2 22.4 5.1 14.7 12.8 12.8 14.7 5.1 22.4 7.2Z" />
          </svg>
          <span className="relative text-xs font-bold tracking-wide uppercase">New</span>
        </li>
        <li className="inline-flex h-7 items-center gap-2 rounded-full bg-green-100 pr-3 pl-2.5 text-sm font-medium text-green-900">
          <span aria-hidden="true" className="relative flex size-2.5">
            <span className="absolute inset-0 rounded-full bg-green-500 opacity-75 motion-safe:animate-ping" />
            <span className="relative size-2.5 rounded-full bg-green-600" />
          </span>
          Open for visits
        </li>
        <li className="inline-flex h-8 items-center gap-1 rounded-full border-2 border-indigo-950 bg-violet-200 pr-0.5 pl-3 text-sm font-semibold has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-950">
          Dogs
          <button
            type="button"
            aria-label="Remove filter: Dogs"
            className="inline-flex size-6 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-indigo-950 hover:text-white focus-visible:bg-indigo-950 focus-visible:text-white focus-visible:outline-hidden"
          >
            <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="size-3.5">
              <path d="m4.5 4.5 7 7m0-7-7 7" />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  )
}
