// Fonts: Syne (https://fonts.google.com/specimen/Syne)
export default function DropdownsKiteConfigurator() {
  return (
    <div className="w-72 sm:w-80 rounded-2xl bg-linear-to-br from-rose-950 to-orange-950 p-5 text-orange-50 scheme-dark font-['Syne',ui-sans-serif,system-ui,sans-serif]">
      <p className="mb-4 flex items-center justify-between text-xs font-bold"><span>WINDPATCH</span><span className="text-[10px] font-normal text-orange-200">Made for wind</span></p>
      <details open className="group">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 [&::-webkit-details-marker]:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current border-b border-orange-200/40 pb-3 text-xl font-semibold">
          <span>Canopy fabric</span>
          <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4 shrink-0 group-open:rotate-180">
            <path d="m4 6 4 4 4-4" />
          </svg>
        </summary>
        <fieldset className="mt-4 grid grid-cols-3 gap-2">
          <legend className="sr-only">Kite fabric colour</legend>
          <label className="flex cursor-pointer flex-col items-center gap-2 rounded-xl border border-orange-200/40 py-3 has-checked:border-orange-200 has-checked:bg-white/10">
            <svg aria-hidden="true" viewBox="0 0 40 48" fill="none" className="h-12 w-10 text-yellow-200">
              <path d="M20 2 37 18 20 40 3 18Z" fill="currentColor" />
              <path d="M20 2v38M3 18h34M20 40l-3 5 5 1" stroke="currentColor" strokeWidth="1.5" />
              <path d="M20 3v35M5 18h30" stroke="#351019" strokeWidth="1" />
            </svg>
            <span className="flex items-center gap-1.5 text-[10px]">
              <input type="radio" name="dropdowns-kite-configurator-fabric" value="citron" aria-label="Citron fabric" defaultChecked className="size-3 accent-orange-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current" /><span>Citron</span></span>
          </label>
          <label className="flex cursor-pointer flex-col items-center gap-2 rounded-xl border border-orange-200/40 py-3 has-checked:border-orange-200 has-checked:bg-white/10">
            <svg aria-hidden="true" viewBox="0 0 40 48" fill="none" className="h-12 w-10 text-orange-400">
              <path d="M20 2 37 18 20 40 3 18Z" fill="currentColor" />
              <path d="M20 2v38M3 18h34M20 40l-3 5 5 1" stroke="currentColor" strokeWidth="1.5" />
              <path d="M20 3v35M5 18h30" stroke="#351019" strokeWidth="1" />
            </svg>
            <span className="flex items-center gap-1.5 text-[10px]">
              <input type="radio" name="dropdowns-kite-configurator-fabric" value="ember" aria-label="Ember fabric" className="size-3 accent-orange-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current" /><span>Ember</span></span>
          </label>
          <label className="flex cursor-pointer flex-col items-center gap-2 rounded-xl border border-orange-200/40 py-3 has-checked:border-orange-200 has-checked:bg-white/10">
            <svg aria-hidden="true" viewBox="0 0 40 48" fill="none" className="h-12 w-10 text-sky-100">
              <path d="M20 2 37 18 20 40 3 18Z" fill="currentColor" />
              <path d="M20 2v38M3 18h34M20 40l-3 5 5 1" stroke="currentColor" strokeWidth="1.5" />
              <path d="M20 3v35M5 18h30" stroke="#351019" strokeWidth="1" />
            </svg>
            <span className="flex items-center gap-1.5 text-[10px]">
              <input type="radio" name="dropdowns-kite-configurator-fabric" value="cloud" aria-label="Cloud fabric" className="size-3 accent-orange-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current" /><span>Cloud</span></span>
          </label>
        </fieldset>
        <div className="mt-4 flex items-center justify-between gap-3">
          <label htmlFor="dropdowns-kite-configurator-span" className="text-xs">Wing span</label>
          <select id="dropdowns-kite-configurator-span" name="wing-span" className="h-9 w-28 rounded-md border border-orange-200 bg-rose-950 px-2 text-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">
            <option value="1.2">1.2 metres</option>
            <option value="1.6">1.6 metres</option>
          </select>
        </div>
        <p className="mt-4 text-[10px] text-orange-200">Ripstop nylon / 40 g/m² / Reinforced seams</p>
      </details>
    </div>
  )
}
