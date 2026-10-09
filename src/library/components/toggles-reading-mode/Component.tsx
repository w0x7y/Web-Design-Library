export default function TogglesReadingMode() {
  return (
    <section
      aria-label="Reading preferences"
      className="w-72 rounded-lg border border-stone-300 bg-stone-50 p-5 text-stone-900"
    >
      <p className="text-[10px] tracking-[0.15em] text-stone-600 uppercase">
        Make room to read
      </p>
      <blockquote className="mt-4 border-l-2 border-emerald-800 pl-3 font-serif text-lg leading-7">
        “The afternoon belonged to the garden, and the garden asked for
        nothing.”
      </blockquote>
      <div className="mt-5 border-t border-stone-300">
        <div className="flex items-center justify-between gap-3 py-3">
          <div>
            <label
              htmlFor="toggles-reading-mode-spacing"
              className="text-xs font-semibold"
            >
              Generous spacing
            </label>
            <p
              id="toggles-reading-mode-spacing-hint"
              className="mt-0.5 text-[10px] text-stone-600"
            >
              A little more breathing room.
            </p>
          </div>
          <input
            id="toggles-reading-mode-spacing"
            type="checkbox"
            name="toggles-reading-mode-spacing"
            defaultChecked
            aria-describedby="toggles-reading-mode-spacing-hint"
            className="relative h-5 w-9 shrink-0 cursor-pointer appearance-none rounded-full border-2 border-stone-400 bg-stone-200 after:absolute after:top-0.5 after:left-0.5 after:size-3 after:rounded-full after:bg-stone-600 after:content-[''] checked:border-emerald-800 checked:bg-emerald-800 checked:after:translate-x-4 checked:after:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 forced-colors:border-[ButtonText] forced-colors:after:bg-[CanvasText]"
          />
        </div>
        <div className="flex items-center justify-between gap-3 border-t border-stone-300 py-3">
          <div>
            <label
              htmlFor="toggles-reading-mode-notes"
              className="text-xs font-semibold"
            >
              Margin notes
            </label>
            <p
              id="toggles-reading-mode-notes-hint"
              className="mt-0.5 text-[10px] text-stone-600"
            >
              Show the author's annotations.
            </p>
          </div>
          <input
            id="toggles-reading-mode-notes"
            type="checkbox"
            name="toggles-reading-mode-notes"
            aria-describedby="toggles-reading-mode-notes-hint"
            className="relative h-5 w-9 shrink-0 cursor-pointer appearance-none rounded-full border-2 border-stone-400 bg-stone-200 after:absolute after:top-0.5 after:left-0.5 after:size-3 after:rounded-full after:bg-stone-600 after:content-[''] checked:border-emerald-800 checked:bg-emerald-800 checked:after:translate-x-4 checked:after:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 forced-colors:border-[ButtonText] forced-colors:after:bg-[CanvasText]"
          />
        </div>
      </div>
      <p className="mt-2 text-[10px] text-stone-600">
        Your reading setup, at your own pace.
      </p>
    </section>
  )
}
