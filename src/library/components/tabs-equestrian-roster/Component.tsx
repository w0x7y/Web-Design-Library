// Fonts: Manrope (https://fonts.google.com/specimen/Manrope)
export default function TabsEquestrianRoster() {
  return (
    <section
      aria-label="Canterdesk equestrian arena assignments"
      className="group w-72 sm:w-[352px] font-['Manrope',ui-sans-serif,system-ui,sans-serif] rounded-xl border border-slate-300 bg-white text-slate-900"
    >
      <header className="rounded-t-xl bg-sky-950 px-4 py-3 text-white">
        <p className="text-[10px] font-semibold tracking-widest uppercase">Canterdesk / yard roster</p>
        <h2 className="mt-1 text-lg font-bold">Saturday schooling</h2>
      </header>
      <fieldset className="mx-4 flex border-b border-slate-200">
        <legend className="sr-only">Choose riding arena</legend>
        <label
          id="tabs-equestrian-roster-indoor-label"
          className="flex h-11 flex-1 cursor-pointer items-center justify-center border-b-2 border-transparent text-xs font-semibold text-slate-600 hover:bg-sky-50 has-checked:border-sky-800 has-checked:text-sky-900 forced-colors:has-checked:underline has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-sky-900"
        >
          <input
            id="tabs-equestrian-roster-indoor"
            type="radio"
            name="tabs-equestrian-roster-view"
            value="indoor"
            defaultChecked
            aria-controls="tabs-equestrian-roster-indoor-panel"
            className="sr-only focus-visible:outline-hidden"
          />
          Indoor school
        </label>
        <label
          id="tabs-equestrian-roster-outdoor-label"
          className="flex h-11 flex-1 cursor-pointer items-center justify-center border-b-2 border-transparent text-xs font-semibold text-slate-600 hover:bg-sky-50 has-checked:border-sky-800 has-checked:text-sky-900 forced-colors:has-checked:underline has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-sky-900"
        >
          <input
            id="tabs-equestrian-roster-outdoor"
            type="radio"
            name="tabs-equestrian-roster-view"
            value="outdoor"
            aria-controls="tabs-equestrian-roster-outdoor-panel"
            className="sr-only focus-visible:outline-hidden"
          />
          Outdoor arena
        </label>
      </fieldset>
      <section
        id="tabs-equestrian-roster-indoor-panel"
        aria-labelledby="tabs-equestrian-roster-indoor-label"
        className="hidden group-has-[#tabs-equestrian-roster-indoor:checked]:block p-4"
      >
        <p className="text-xs font-semibold">09:00 · Flatwork</p>
        <ul role="list" className="mt-3 grid gap-3">
          <li className="grid grid-cols-[1fr_auto] items-center gap-2 border border-slate-200 p-3">
            <div>
              <p className="text-sm font-bold">Juniper</p>
              <p className="mt-1 text-[11px] text-slate-600">Mara Ellis</p>
            </div>
            <span className="text-[10px] font-semibold text-sky-900">Stall 04</span>
          </li>
          <li className="grid grid-cols-[1fr_auto] items-center gap-2 border border-slate-200 p-3">
            <div>
              <p className="text-sm font-bold">Oslo</p>
              <p className="mt-1 text-[11px] text-slate-600">Toby Finch</p>
            </div>
            <span className="text-[10px] font-semibold text-sky-900">Stall 07</span>
          </li>
        </ul>
      </section>
      <section
        id="tabs-equestrian-roster-outdoor-panel"
        aria-labelledby="tabs-equestrian-roster-outdoor-label"
        className="hidden group-has-[#tabs-equestrian-roster-outdoor:checked]:block p-4"
      >
        <p className="text-xs font-semibold">10:30 · Pole work</p>
        <ul role="list" className="mt-3 grid gap-3">
          <li className="grid grid-cols-[1fr_auto] items-center gap-2 border border-slate-200 p-3">
            <div>
              <p className="text-sm font-bold">Clover</p>
              <p className="mt-1 text-[11px] text-slate-600">Nina West</p>
            </div>
            <span className="text-[10px] font-semibold text-sky-900">Stall 02</span>
          </li>
          <li className="grid grid-cols-[1fr_auto] items-center gap-2 border border-slate-200 p-3">
            <div>
              <p className="text-sm font-bold">Bramble</p>
              <p className="mt-1 text-[11px] text-slate-600">Alex Shah</p>
            </div>
            <span className="text-[10px] font-semibold text-sky-900">Stall 09</span>
          </li>
        </ul>
      </section>
    </section>
  )
}
