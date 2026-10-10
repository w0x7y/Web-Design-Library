// Fonts: DM Sans (https://fonts.google.com/specimen/DM+Sans)
export default function TabsFossilTrays() {
  return (
    <section
      aria-label="Stratum Desk fossil preparation trays"
      className="group w-72 sm:w-[352px] font-['DM_Sans',ui-sans-serif,system-ui,sans-serif] border border-stone-300 bg-white p-5 text-stone-900"
    >
      <p className="text-[10px] font-medium tracking-widest text-stone-600 uppercase">Stratum Desk / preparation lab</p>
      <h2 className="mt-2 text-xl font-medium tracking-tight">On the bench</h2>
      <fieldset className="mt-4 flex gap-2">
        <legend className="sr-only">Choose fossil preparation tray</legend>
        <label
          id="tabs-fossil-trays-eight-label"
          className="flex h-8 cursor-pointer items-center border border-stone-400 px-2 text-[11px] font-medium hover:bg-stone-100 has-checked:border-stone-800 has-checked:bg-stone-800 has-checked:text-white forced-colors:has-checked:underline has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-stone-900"
        >
          <input
            id="tabs-fossil-trays-eight"
            type="radio"
            name="tabs-fossil-trays-view"
            value="eight"
            defaultChecked
            aria-controls="tabs-fossil-trays-eight-panel"
            className="sr-only focus-visible:outline-hidden"
          />
          Tray 08
        </label>
        <label
          id="tabs-fossil-trays-twelve-label"
          className="flex h-8 cursor-pointer items-center border border-stone-400 px-2 text-[11px] font-medium hover:bg-stone-100 has-checked:border-stone-800 has-checked:bg-stone-800 has-checked:text-white forced-colors:has-checked:underline has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-stone-900"
        >
          <input
            id="tabs-fossil-trays-twelve"
            type="radio"
            name="tabs-fossil-trays-view"
            value="twelve"
            aria-controls="tabs-fossil-trays-twelve-panel"
            className="sr-only focus-visible:outline-hidden"
          />
          Tray 12
        </label>
      </fieldset>
      <section
        id="tabs-fossil-trays-eight-panel"
        aria-labelledby="tabs-fossil-trays-eight-label"
        className="hidden group-has-[#tabs-fossil-trays-eight:checked]:block"
      >
        <div className="mt-5 grid grid-cols-[72px_minmax(0,1fr)] items-center gap-4">
          <svg
            viewBox="0 0 80 80"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            aria-hidden="true"
            className="size-[72px] text-stone-600"
          >
            <path d="M66 43C66 18 22 8 14 34S30 72 51 62 68 30 46 24 23 42 35 51 55 43 47 35 35 38 40 43M14 34 26 35M19 53 29 46M36 65 38 53M57 59 49 49M65 40 54 39M58 23 50 30M38 17 38 27"></path>
          </svg>
          <div>
            <p className="text-[10px] text-stone-600">SD / 2026 / 018</p>
            <h3 className="mt-1 text-sm font-semibold">Ammonite whorl</h3>
            <p className="mt-1 text-[11px] text-stone-600">Lower Jurassic</p>
          </div>
        </div>
        <p className="mt-5 border-t border-stone-200 pt-4 text-xs leading-5 text-stone-600">Matrix removal complete. Photograph before consolidant treatment.</p>
      </section>
      <section
        id="tabs-fossil-trays-twelve-panel"
        aria-labelledby="tabs-fossil-trays-twelve-label"
        className="hidden group-has-[#tabs-fossil-trays-twelve:checked]:block"
      >
        <div className="mt-5 grid grid-cols-[72px_minmax(0,1fr)] items-center gap-4">
          <svg
            viewBox="0 0 80 80"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            aria-hidden="true"
            className="size-[72px] text-stone-600"
          >
            <path d="M14 30 64 20 68 40 19 51ZM21 31 24 45M31 28 34 43M41 26 45 40M51 24 55 38M60 22 65 36M19 51 28 59 68 48 68 40"></path>
          </svg>
          <div>
            <p className="text-[10px] text-stone-600">SD / 2026 / 023</p>
            <h3 className="mt-1 text-sm font-semibold">Belemnite fragment</h3>
            <p className="mt-1 text-[11px] text-stone-600">Lower Jurassic</p>
          </div>
        </div>
        <p className="mt-5 border-t border-stone-200 pt-4 text-xs leading-5 text-stone-600">Dry brushing complete. Record surface detail before final storage.</p>
      </section>
    </section>
  )
}
