// Fonts: Manrope (https://fonts.google.com/specimen/Manrope)
export default function TogglesInsectMonitoring() {
  return (
    <section
      aria-labelledby="toggles-insect-monitoring-title"
      className="w-72 rounded-xl border border-slate-300 bg-white font-['Manrope',ui-sans-serif,system-ui,sans-serif] text-slate-900 sm:w-80"
    >
      <div className="border-b border-slate-200 px-4 py-3">
        <p className="text-[10px] font-semibold tracking-[0.12em] text-slate-600 uppercase">ENTOVIA / SITE 08</p>
        <h2 id="toggles-insect-monitoring-title" className="mt-1 text-lg font-semibold">Trap alerts</h2>
        <p className="text-xs text-slate-600">West food hall · 4 monitored traps</p>
      </div>
      <div className="grid grid-cols-2 gap-3 p-4">
        <div className="rounded-lg border border-slate-300 bg-slate-50 p-3 has-checked:border-sky-700 has-checked:bg-sky-50">
          <div className="flex items-center justify-between gap-2">
            <p id="toggles-insect-monitoring-store-hint" className="text-[10px] font-semibold text-slate-600">Trap T-11</p>
            <input
              id="toggles-insect-monitoring-store"
              name="toggles-insect-monitoring-store"
              type="checkbox"
              defaultChecked
              aria-describedby="toggles-insect-monitoring-store-hint"
              className="size-5 shrink-0 cursor-pointer accent-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-800"
            />
          </div>
          <label htmlFor="toggles-insect-monitoring-store" className="mt-3 block cursor-pointer text-xs font-semibold">Dry store</label>
        </div>
        <div className="rounded-lg border border-slate-300 bg-slate-50 p-3 has-checked:border-sky-700 has-checked:bg-sky-50">
          <div className="flex items-center justify-between gap-2">
            <p id="toggles-insect-monitoring-prep-hint" className="text-[10px] font-semibold text-slate-600">Trap T-12</p>
            <input
              id="toggles-insect-monitoring-prep"
              name="toggles-insect-monitoring-prep"
              type="checkbox"
              defaultChecked
              aria-describedby="toggles-insect-monitoring-prep-hint"
              className="size-5 shrink-0 cursor-pointer accent-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-800"
            />
          </div>
          <label htmlFor="toggles-insect-monitoring-prep" className="mt-3 block cursor-pointer text-xs font-semibold">Prep room</label>
        </div>
        <div className="rounded-lg border border-slate-300 bg-slate-50 p-3 has-checked:border-sky-700 has-checked:bg-sky-50">
          <div className="flex items-center justify-between gap-2">
            <p id="toggles-insect-monitoring-door-hint" className="text-[10px] font-semibold text-slate-600">Trap T-13</p>
            <input
              id="toggles-insect-monitoring-door"
              name="toggles-insect-monitoring-door"
              type="checkbox"
              aria-describedby="toggles-insect-monitoring-door-hint"
              className="size-5 shrink-0 cursor-pointer accent-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-800"
            />
          </div>
          <label htmlFor="toggles-insect-monitoring-door" className="mt-3 block cursor-pointer text-xs font-semibold">Goods door</label>
        </div>
        <div className="rounded-lg border border-slate-300 bg-slate-50 p-3 has-checked:border-sky-700 has-checked:bg-sky-50">
          <div className="flex items-center justify-between gap-2">
            <p id="toggles-insect-monitoring-waste-hint" className="text-[10px] font-semibold text-slate-600">Trap T-14</p>
            <input
              id="toggles-insect-monitoring-waste"
              name="toggles-insect-monitoring-waste"
              type="checkbox"
              defaultChecked
              aria-describedby="toggles-insect-monitoring-waste-hint"
              className="size-5 shrink-0 cursor-pointer accent-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-800"
            />
          </div>
          <label htmlFor="toggles-insect-monitoring-waste" className="mt-3 block cursor-pointer text-xs font-semibold">Waste bay</label>
        </div>
      </div>
      <p className="border-t border-slate-200 px-4 py-3 text-[11px] leading-4 text-slate-600">Email the site team when activity is logged.</p>
    </section>
  )
}
