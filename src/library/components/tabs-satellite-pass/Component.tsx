// Fonts: IBM Plex Sans (https://fonts.google.com/specimen/IBM+Plex+Sans)
export default function TabsSatellitePass() {
  return (
    <section
      aria-label="Downbeam satellite communication pass"
      className="group w-72 sm:w-[352px] font-['IBM_Plex_Sans',ui-sans-serif,system-ui,sans-serif] rounded-xl border border-amber-700 bg-linear-to-b from-zinc-950 via-amber-950 to-stone-900 p-5 text-amber-50"
    >
      <header className="flex items-baseline justify-between border-b border-amber-700 pb-3">
        <h2 className="text-base font-semibold">Downbeam</h2>
        <span className="text-[10px] text-amber-200">GROUND / 07</span>
      </header>
      <section
        id="tabs-satellite-pass-sband-panel"
        aria-labelledby="tabs-satellite-pass-sband-label"
        className="hidden group-has-[#tabs-satellite-pass-sband:checked]:block"
      >
        <div className="mt-5 flex items-baseline justify-between gap-2">
          <h3 className="text-2xl font-medium">S-band</h3>
          <span className="text-xs text-amber-200">2.24 GHz</span>
        </div>
        <svg viewBox="0 0 240 80" aria-hidden="true" className="mt-3 h-20 w-full">
          <path d="M0 62H240M0 30H240M40 8V72M120 8V72M200 8V72" fill="none" stroke="#92400e" strokeWidth="1"></path>
          <path d="M16 62Q120-35 224 62L224 70H16Z" fill="#fcd34d" fillOpacity="0.12"></path>
          <path d="M16 62Q120-35 224 62" fill="none" stroke="#fcd34d" strokeWidth="2"></path>
          <circle cx="120" cy="14" r="4" fill="#fde68a"></circle>
        </svg>
        <div className="mt-2 flex justify-between text-[11px] text-amber-100">
          <span>18:04 → 18:12 UTC</span>
          <span>64° peak</span>
        </div>
        <p className="mt-4 text-xs text-amber-100">Command uplink scheduled · DB-24</p>
      </section>
      <section
        id="tabs-satellite-pass-xband-panel"
        aria-labelledby="tabs-satellite-pass-xband-label"
        className="hidden group-has-[#tabs-satellite-pass-xband:checked]:block"
      >
        <div className="mt-5 flex items-baseline justify-between gap-2">
          <h3 className="text-2xl font-medium">X-band</h3>
          <span className="text-xs text-amber-200">8.12 GHz</span>
        </div>
        <svg viewBox="0 0 240 80" aria-hidden="true" className="mt-3 h-20 w-full">
          <path d="M0 62H240M0 30H240M40 8V72M120 8V72M200 8V72" fill="none" stroke="#92400e" strokeWidth="1"></path>
          <path d="M16 62Q120-35 224 62L224 70H16Z" fill="#fcd34d" fillOpacity="0.12"></path>
          <path d="M16 62Q120-35 224 62" fill="none" stroke="#fcd34d" strokeWidth="2"></path>
          <circle cx="120" cy="14" r="4" fill="#fde68a"></circle>
        </svg>
        <div className="mt-2 flex justify-between text-[11px] text-amber-100">
          <span>18:05 → 18:11 UTC</span>
          <span>64° peak</span>
        </div>
        <p className="mt-4 text-xs text-amber-100">Payload downlink reserved · DB-24</p>
      </section>
      <fieldset className="mt-4 flex gap-4">
        <legend className="sr-only">Choose satellite radio band</legend>
        <label
          id="tabs-satellite-pass-sband-label"
          className="flex h-10 flex-1 cursor-pointer items-center justify-center border-b-2 border-amber-600 text-xs font-semibold hover:text-amber-200 has-checked:border-amber-200 has-checked:text-amber-200 forced-colors:has-checked:underline has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-amber-100"
        >
          <input
            id="tabs-satellite-pass-sband"
            type="radio"
            name="tabs-satellite-pass-view"
            value="sband"
            defaultChecked
            aria-controls="tabs-satellite-pass-sband-panel"
            className="sr-only focus-visible:outline-hidden"
          />
          Command / S
        </label>
        <label
          id="tabs-satellite-pass-xband-label"
          className="flex h-10 flex-1 cursor-pointer items-center justify-center border-b-2 border-amber-600 text-xs font-semibold hover:text-amber-200 has-checked:border-amber-200 has-checked:text-amber-200 forced-colors:has-checked:underline has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-amber-100"
        >
          <input
            id="tabs-satellite-pass-xband"
            type="radio"
            name="tabs-satellite-pass-view"
            value="xband"
            aria-controls="tabs-satellite-pass-xband-panel"
            className="sr-only focus-visible:outline-hidden"
          />
          Payload / X
        </label>
      </fieldset>
    </section>
  )
}
