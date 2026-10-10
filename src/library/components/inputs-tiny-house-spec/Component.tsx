// Fonts: IBM Plex Sans (https://fonts.google.com/specimen/IBM+Plex+Sans)
export default function InputsTinyHouseSpec() {
  return (
    <section
      className="w-72 rounded-xl border-t-4 border-teal-800 bg-slate-50 p-5 font-['IBM_Plex_Sans',ui-sans-serif,system-ui,sans-serif] text-slate-950 sm:w-[22rem]"
      aria-label="Nestframe tiny-house specification"
    >
      <p className="text-[10px] font-semibold tracking-widest text-teal-800 uppercase">Nestframe / Tiny homes</p>
      <h2 className="mt-1 text-xl font-semibold">Plan your small space</h2>
      <div className="mt-4 grid grid-cols-[1fr_1rem_1fr] items-end gap-2">
        <div>
          <label className="block text-xs font-medium" htmlFor="inputs-tiny-house-spec-shell">Shell</label>
          <select
            className="mt-2 block h-10 w-full min-w-0 rounded-md border border-slate-500 bg-white px-2 text-sm leading-[normal] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
            id="inputs-tiny-house-spec-shell"
            name="shell"
          >
            <option value="cedar">Cedar</option>
            <option value="spruce">Spruce</option>
            <option value="pine">Pine</option>
          </select>
        </div>
        <span className="flex h-10 items-center text-base text-teal-800" aria-hidden="true">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4">
            <path d="M2 8h12m-4-4 4 4-4 4" />
          </svg>
        </span>
        <div>
          <label className="block text-xs font-medium" htmlFor="inputs-tiny-house-spec-layout">Layout</label>
          <select
            className="mt-2 block h-10 w-full min-w-0 rounded-md border border-slate-500 bg-white px-2 text-sm leading-[normal] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
            id="inputs-tiny-house-spec-layout"
            name="layout"
          >
            <option value="loft">Loft</option>
            <option value="open">Open plan</option>
            <option value="bunks">Bunks</option>
          </select>
        </div>
      </div>
      <div className="mt-4">
        <label className="block text-xs font-medium" htmlFor="inputs-tiny-house-spec-area">Floor area (m²)</label>
        <input
          className="mt-2 block h-10 w-full min-w-0 rounded-md border border-slate-500 bg-white px-2 text-sm leading-[normal] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
          id="inputs-tiny-house-spec-area"
          name="floor-area"
          type="number"
          min={1}
          step={1}
          defaultValue="24"
          aria-describedby="inputs-tiny-house-spec-hint"
        />
        <p
          className="mt-2 text-[11px] leading-4 text-slate-600"
          id="inputs-tiny-house-spec-hint"
        >Internal floor area, excluding the deck.</p>
      </div>
    </section>
  )
}
