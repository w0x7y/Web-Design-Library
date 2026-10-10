// Fonts: Space Grotesk (https://fonts.google.com/specimen/Space+Grotesk)
export default function TabsSnowmakingZones() {
  return (
    <section
      aria-label="Pisteform snowmaking circuit readings"
      className="group w-72 sm:w-[352px] font-['Space_Grotesk',ui-sans-serif,system-ui,sans-serif] relative rounded-2xl border border-teal-700 bg-linear-to-br from-emerald-950 via-teal-950 to-teal-800 p-4 text-white"
    >
      <svg
        viewBox="0 0 300 144"
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-4 top-24 h-36 w-[calc(100%-2rem)] text-teal-400/40"
      >
        <path d="M0 35C55-20 95 90 160 30S240 0 300 55M0 60C55 5 95 115 160 55S240 25 300 80M0 85C55 30 95 140 160 80S240 50 300 105" fill="none" stroke="currentColor" strokeWidth="12"></path>
      </svg>
      <div className="relative">
        <header className="flex items-baseline justify-between">
          <h2 className="text-lg font-medium">Pisteform</h2>
          <span className="text-[10px] text-teal-100">SNOW SYSTEMS</span>
        </header>
        <fieldset className="mt-4 flex gap-2">
          <legend className="sr-only">Choose snowmaking zone</legend>
          <label
            id="tabs-snowmaking-zones-north-label"
            className="flex h-10 flex-1 cursor-pointer items-center justify-center rounded-lg border border-teal-500 text-xs font-medium hover:bg-white/10 has-checked:border-teal-200 has-checked:bg-white/20 forced-colors:has-checked:underline has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-teal-100"
          >
            <input
              id="tabs-snowmaking-zones-north"
              type="radio"
              name="tabs-snowmaking-zones-view"
              value="north"
              defaultChecked
              aria-controls="tabs-snowmaking-zones-north-panel"
              className="sr-only focus-visible:outline-hidden"
            />
            North loop
          </label>
          <label
            id="tabs-snowmaking-zones-bowl-label"
            className="flex h-10 flex-1 cursor-pointer items-center justify-center rounded-lg border border-teal-500 text-xs font-medium hover:bg-white/10 has-checked:border-teal-200 has-checked:bg-white/20 forced-colors:has-checked:underline has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-teal-100"
          >
            <input
              id="tabs-snowmaking-zones-bowl"
              type="radio"
              name="tabs-snowmaking-zones-view"
              value="bowl"
              aria-controls="tabs-snowmaking-zones-bowl-panel"
              className="sr-only focus-visible:outline-hidden"
            />
            Bowl loop
          </label>
        </fieldset>
        <section
          id="tabs-snowmaking-zones-north-panel"
          aria-labelledby="tabs-snowmaking-zones-north-label"
          className="hidden group-has-[#tabs-snowmaking-zones-north:checked]:block mt-3 rounded-xl border border-white/30 bg-white/10 p-4 backdrop-blur-sm"
        >
          <h3 className="text-sm font-medium">North loop / Pump 02</h3>
          <svg viewBox="0 0 200 56" aria-hidden="true" className="mt-3 h-14 w-full text-teal-200">
            <path d="M20 28H75V12H175V44H75V28M125 12V44" stroke="currentColor" strokeWidth="2" fill="none"></path>
            <rect x="9" y="18" width="20" height="20" rx="3" fill="#ccfbf1"></rect>
            <path d="m17 23 7 5-7 5" fill="none" stroke="#134e4a" strokeWidth="2"></path>
            <circle cx="125" cy="12" r="4" fill="#ccfbf1"></circle>
            <circle cx="175" cy="28" r="4" fill="#ccfbf1"></circle>
            <circle cx="125" cy="44" r="4" fill="#ccfbf1"></circle>
          </svg>
          <dl className="mt-3 grid grid-cols-2 gap-4">
            <div>
              <dt className="text-[10px] text-teal-100">Water flow</dt>
              <dd className="mt-1 text-xl font-medium">18 L/s</dd>
            </div>
            <div>
              <dt className="text-[10px] text-teal-100">Guns running</dt>
              <dd className="mt-1 text-xl font-medium">6 of 8</dd>
            </div>
          </dl>
          <p className="mt-3 border-t border-white/30 pt-3 text-[11px] text-teal-100">Pressure stable · 24 bar</p>
        </section>
        <section
          id="tabs-snowmaking-zones-bowl-panel"
          aria-labelledby="tabs-snowmaking-zones-bowl-label"
          className="hidden group-has-[#tabs-snowmaking-zones-bowl:checked]:block mt-3 rounded-xl border border-white/30 bg-white/10 p-4 backdrop-blur-sm"
        >
          <h3 className="text-sm font-medium">Bowl loop / Pump 03</h3>
          <svg viewBox="0 0 200 56" aria-hidden="true" className="mt-3 h-14 w-full text-teal-200">
            <path d="M20 28H75V12H175V44H75V28M125 12V44" stroke="currentColor" strokeWidth="2" fill="none"></path>
            <rect x="9" y="18" width="20" height="20" rx="3" fill="#ccfbf1"></rect>
            <path d="m17 23 7 5-7 5" fill="none" stroke="#134e4a" strokeWidth="2"></path>
            <circle cx="125" cy="12" r="4" fill="#ccfbf1"></circle>
            <circle cx="175" cy="28" r="4" fill="#ccfbf1"></circle>
            <circle cx="125" cy="44" r="4" fill="#ccfbf1"></circle>
          </svg>
          <dl className="mt-3 grid grid-cols-2 gap-4">
            <div>
              <dt className="text-[10px] text-teal-100">Water flow</dt>
              <dd className="mt-1 text-xl font-medium">22 L/s</dd>
            </div>
            <div>
              <dt className="text-[10px] text-teal-100">Guns running</dt>
              <dd className="mt-1 text-xl font-medium">8 of 10</dd>
            </div>
          </dl>
          <p className="mt-3 border-t border-white/30 pt-3 text-[11px] text-teal-100">Pressure stable · 26 bar</p>
        </section>
      </div>
    </section>
  )
}
