export default function TogglesModelHandoff() {
  return (
    <section
      aria-labelledby="toggles-model-handoff-title"
      className="w-72 rounded-2xl border border-amber-700 bg-linear-to-br from-amber-50 to-orange-200 p-5 text-amber-950 sm:w-80"
    >
      <p className="text-[10px] font-semibold tracking-[0.12em] text-amber-900 uppercase">SCALEWORK / MODEL STUDIO</p>
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
          <path d="M4 35l20 9 20-9-20-9-20 9Z"></path>
          <path d="M12 31V17l12-7 12 7v14l-12 7-12-7ZM12 17l12 7 12-7M24 24v14M18 14l12 7M17 26v5M31 26v5"></path>
        </svg>
        <div>
          <h2 id="toggles-model-handoff-title" className="text-xl leading-6 font-semibold">Hand off the model.</h2>
          <p className="mt-1 text-xs text-amber-900">M-031 / pavilion at 1:100</p>
        </div>
      </div>
      <div className="mt-5 space-y-4 rounded-xl border border-amber-900/40 bg-white/70 p-4 backdrop-blur-sm">
        <div className="flex items-center justify-between gap-4">
          <div>
            <label htmlFor="toggles-model-handoff-gallery" className="block cursor-pointer text-xs font-semibold">Client gallery</label>
            <p id="toggles-model-handoff-gallery-hint" className="mt-1 text-xs leading-4 text-amber-900">Views of the finished model.</p>
          </div>
          <input
            id="toggles-model-handoff-gallery"
            name="toggles-model-handoff-gallery"
            type="checkbox"
            role="switch"
            defaultChecked
            aria-describedby="toggles-model-handoff-gallery-hint"
            className="relative h-6 w-11 shrink-0 cursor-pointer appearance-none rounded-full border-2 border-amber-800 bg-white after:absolute after:top-0.5 after:left-0.5 after:size-4 after:rounded-full after:bg-amber-800 after:content-[''] checked:border-amber-900 checked:bg-amber-900 checked:after:translate-x-5 checked:after:bg-white hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-900 forced-colors:border-[ButtonText] forced-colors:after:bg-[CanvasText] forced-colors:checked:after:bg-[CanvasText]"
          />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div>
            <label htmlFor="toggles-model-handoff-archive" className="block cursor-pointer text-xs font-semibold">Build archive</label>
            <p id="toggles-model-handoff-archive-hint" className="mt-1 text-xs leading-4 text-amber-900">Keep the drawings and cut files.</p>
          </div>
          <input
            id="toggles-model-handoff-archive"
            name="toggles-model-handoff-archive"
            type="checkbox"
            role="switch"
            aria-describedby="toggles-model-handoff-archive-hint"
            className="relative h-6 w-11 shrink-0 cursor-pointer appearance-none rounded-full border-2 border-amber-800 bg-white after:absolute after:top-0.5 after:left-0.5 after:size-4 after:rounded-full after:bg-amber-800 after:content-[''] checked:border-amber-900 checked:bg-amber-900 checked:after:translate-x-5 checked:after:bg-white hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-900 forced-colors:border-[ButtonText] forced-colors:after:bg-[CanvasText] forced-colors:checked:after:bg-[CanvasText]"
          />
        </div>
      </div>
      <p className="mt-4 text-[11px] leading-4 text-amber-900">Choose where the handoff files are shared.</p>
    </section>
  )
}
