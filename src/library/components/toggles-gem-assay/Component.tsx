export default function TogglesGemAssay() {
  return (
    <section
      aria-labelledby="toggles-gem-assay-title"
      className="w-72 rounded-2xl border border-amber-700 bg-linear-to-br from-amber-50 to-orange-200 p-5 text-amber-950 sm:w-80"
    >
      <p className="text-[10px] font-semibold tracking-[0.12em] text-amber-900 uppercase">FACETPATH / GEM LABORATORY</p>
      <div className="mt-4 flex items-center gap-3">
        <svg
          aria-hidden="true"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinejoin="round"
          className="size-12 shrink-0 text-amber-900"
        >
          <path d="M12 9h24l9 12-21 23L3 21 12 9Z"></path>
          <path d="M3 21h42M12 9l5 12 7 23 7-23 5-12M17 21l7-12 7 12"></path>
        </svg>
        <div>
          <h2 id="toggles-gem-assay-title" className="text-xl leading-6 font-semibold">Release the report.</h2>
          <p className="mt-1 text-xs text-amber-900">F-0821 / unmounted sapphire</p>
        </div>
      </div>
      <div className="mt-5 space-y-4 rounded-xl border border-amber-900/40 bg-white/70 p-4 backdrop-blur-sm">
        <div className="flex items-center justify-between gap-4">
          <div>
            <label htmlFor="toggles-gem-assay-portal" className="block cursor-pointer text-xs font-semibold">Client portal</label>
            <p id="toggles-gem-assay-portal-hint" className="mt-1 text-xs leading-4 text-amber-900">Result and specimen images.</p>
          </div>
          <input
            id="toggles-gem-assay-portal"
            name="toggles-gem-assay-portal"
            type="checkbox"
            role="switch"
            defaultChecked
            aria-describedby="toggles-gem-assay-portal-hint"
            className="relative h-6 w-11 shrink-0 cursor-pointer appearance-none rounded-full border-2 border-amber-800 bg-white after:absolute after:top-0.5 after:left-0.5 after:size-4 after:rounded-full after:bg-amber-800 after:content-[''] checked:border-amber-900 checked:bg-amber-900 checked:after:translate-x-5 checked:after:bg-white hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-900 forced-colors:border-[ButtonText] forced-colors:after:bg-[CanvasText] forced-colors:checked:after:bg-[CanvasText]"
          />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div>
            <label htmlFor="toggles-gem-assay-insurer" className="block cursor-pointer text-xs font-semibold">Insurer copy</label>
            <p id="toggles-gem-assay-insurer-hint" className="mt-1 text-xs leading-4 text-amber-900">Send to the named assessor.</p>
          </div>
          <input
            id="toggles-gem-assay-insurer"
            name="toggles-gem-assay-insurer"
            type="checkbox"
            role="switch"
            aria-describedby="toggles-gem-assay-insurer-hint"
            className="relative h-6 w-11 shrink-0 cursor-pointer appearance-none rounded-full border-2 border-amber-800 bg-white after:absolute after:top-0.5 after:left-0.5 after:size-4 after:rounded-full after:bg-amber-800 after:content-[''] checked:border-amber-900 checked:bg-amber-900 checked:after:translate-x-5 checked:after:bg-white hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-900 forced-colors:border-[ButtonText] forced-colors:after:bg-[CanvasText] forced-colors:checked:after:bg-[CanvasText]"
          />
        </div>
      </div>
      <p className="mt-4 text-[11px] leading-4 text-amber-900">Sharing follows the choices above.</p>
    </section>
  )
}
