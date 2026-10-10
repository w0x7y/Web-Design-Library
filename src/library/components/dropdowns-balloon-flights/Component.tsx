// Fonts: Manrope (https://fonts.google.com/specimen/Manrope)
export default function DropdownsBalloonFlights() {
  return (
    <div className="w-72 sm:w-80 rounded-3xl bg-linear-to-br from-sky-100 to-amber-100 p-4 text-sky-950 font-['Manrope',ui-sans-serif,system-ui,sans-serif]">
      <p className="mb-3 flex items-center justify-between text-xs font-bold"><span>ALOFT VALE</span><span className="text-[10px] font-medium">Dawn departures</span></p>
      <img src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=800&q=80" alt="Colourful hot-air balloons rising into a turquoise sky" width={800} height={1200} className="mb-3 h-20 w-full rounded-xl object-cover object-[center_42%]" />
      <details open className="group rounded-xl border border-white bg-white/60 p-3 backdrop-blur-xl">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 [&::-webkit-details-marker]:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current text-sm font-semibold">
          <span>Choose a launch field</span>
          <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4 shrink-0 group-open:rotate-180">
            <path d="m4 6 4 4 4-4" />
          </svg>
        </summary>
        <div className="mt-3 grid gap-2">
          <a href="#aloft-east-meadow" className="flex items-center justify-between rounded-lg border border-sky-800/30 bg-white/50 px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current hover:bg-white">
            <span><span className="block text-xs font-semibold">East meadow</span><span className="mt-0.5 block text-[10px] text-sky-800">06:15 departure · 4 places</span></span><span aria-hidden="true" className="text-lg">↗</span>
          </a>
          <a href="#aloft-mill-farm" className="flex items-center justify-between rounded-lg border border-sky-800/30 bg-white/50 px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current hover:bg-white">
            <span><span className="block text-xs font-semibold">Mill farm</span><span className="mt-0.5 block text-[10px] text-sky-800">06:40 departure · 2 places</span></span><span aria-hidden="true" className="text-lg">↗</span>
          </a>
        </div>
        <p className="mt-3 text-[10px] text-sky-800">Flight confirmation at 18:00 the day before.</p>
      </details>
    </div>
  )
}
