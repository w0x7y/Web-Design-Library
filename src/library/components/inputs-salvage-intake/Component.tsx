// Fonts: IBM Plex Mono (https://fonts.google.com/specimen/IBM+Plex+Mono)
export default function InputsSalvageIntake() {
  return (
    <section
      className="w-72 bg-neutral-950 p-5 font-['IBM_Plex_Mono',ui-sans-serif,system-ui,sans-serif] text-neutral-100 scheme-dark sm:w-[22rem]"
      aria-label="Reclaimant salvage intake"
    >
      <header className="border-l-4 border-orange-300 pl-3">
        <p className="text-[10px] text-orange-300">RECLAIMANT / SITE 08</p>
        <h2 className="text-xl font-bold">RECOVERY TICKET</h2>
      </header>
      <label
        className="mt-4 block text-[10px] tracking-wide uppercase"
        htmlFor="inputs-salvage-intake-item"
      >Item description</label>
      <input
        className="mt-2 block h-10 w-full min-w-0 border border-neutral-500 bg-neutral-900 px-2 text-xs leading-[normal] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
        id="inputs-salvage-intake-item"
        name="item"
        type="text"
        defaultValue="Cast-iron radiator"
      />
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label
            className="mt-4 block text-[10px] tracking-wide uppercase"
            htmlFor="inputs-salvage-intake-material"
          >Material</label>
          <select
            className="mt-2 block h-10 w-full min-w-0 border border-neutral-500 bg-neutral-900 px-2 text-xs leading-[normal] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
            id="inputs-salvage-intake-material"
            name="material"
          >
            <option value="iron">Cast iron</option>
            <option value="timber">Timber</option>
            <option value="stone">Stone</option>
          </select>
        </div>
        <div>
          <label
            className="mt-4 block text-[10px] tracking-wide uppercase"
            htmlFor="inputs-salvage-intake-quantity"
          >Units</label>
          <input
            className="mt-2 block h-10 w-full min-w-0 border border-neutral-500 bg-neutral-900 px-2 text-xs leading-[normal] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
            id="inputs-salvage-intake-quantity"
            name="quantity"
            type="number"
            min={1}
            max={9999}
            step={1}
            defaultValue="6"
            aria-describedby="inputs-salvage-intake-note"
          />
        </div>
      </div>
      <p
        className="mt-5 border-t border-dashed border-neutral-500 pt-3 text-[10px] text-orange-200"
        id="inputs-salvage-intake-note"
      >Count intact units only. Assess on site.</p>
    </section>
  )
}
