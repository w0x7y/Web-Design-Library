// Fonts: Newsreader (https://fonts.google.com/specimen/Newsreader)
export default function InputsCostumeMeasures() {
  return (
    <section
      className="w-72 bg-rose-950 p-6 font-['Newsreader',ui-sans-serif,system-ui,sans-serif] text-rose-100 scheme-dark sm:w-[22rem]"
      aria-label="Velvet Ledger fitting measurements"
    >
      <p className="text-[11px] tracking-widest text-rose-200 uppercase">Velvet Ledger / Wardrobe hire</p>
      <h2 className="mt-1 text-3xl">Made to fit.</h2>
      <div className="mt-5 grid grid-cols-2 gap-4">
        <div>
          <label className="block text-base" htmlFor="inputs-costume-measures-chest">Chest</label>
          <div className="flex items-baseline border-b border-rose-300">
            <input
              className="h-11 min-w-0 flex-1 text-2xl leading-[normal] tabular-nums focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
              id="inputs-costume-measures-chest"
              name="chest"
              type="number"
              min={20}
              max={200}
              step={0.5}
              defaultValue="94"
              aria-describedby="inputs-costume-measures-chest-unit"
            />
            <span className="text-xs text-rose-200" id="inputs-costume-measures-chest-unit">cm</span>
          </div>
        </div>
        <div>
          <label className="block text-base" htmlFor="inputs-costume-measures-waist">Waist</label>
          <div className="flex items-baseline border-b border-rose-300">
            <input
              className="h-11 min-w-0 flex-1 text-2xl leading-[normal] tabular-nums focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
              id="inputs-costume-measures-waist"
              name="waist"
              type="number"
              min={20}
              max={200}
              step={0.5}
              defaultValue="76"
              aria-describedby="inputs-costume-measures-waist-unit"
            />
            <span className="text-xs text-rose-200" id="inputs-costume-measures-waist-unit">cm</span>
          </div>
        </div>
      </div>
      <div className="mt-5 flex items-baseline justify-between gap-2">
        <label className="block text-base" htmlFor="inputs-costume-measures-notes">Fitting notes</label>
        <span className="text-xs text-rose-200" id="inputs-costume-measures-hint">Optional</span>
      </div>
      <textarea
        className="mt-2 block h-16 w-full resize-none border border-rose-300 bg-rose-900 p-2 text-base leading-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
        id="inputs-costume-measures-notes"
        name="notes"
        aria-describedby="inputs-costume-measures-hint"
        defaultValue="Allow room for a shirt under the jacket."
      />
    </section>
  )
}
