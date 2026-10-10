// Fonts: Manrope (https://fonts.google.com/specimen/Manrope)
export default function TogglesKeeperTraining() {
  return (
    <section
      aria-labelledby="toggles-keeper-training-title"
      className="w-72 rounded-xl border border-slate-300 bg-white font-['Manrope',ui-sans-serif,system-ui,sans-serif] text-slate-900 sm:w-80"
    >
      <div className="border-b border-slate-200 px-4 py-3">
        <p className="text-[10px] font-semibold tracking-[0.12em] text-slate-600 uppercase">KEEPERSCHOOL / COHORT 09</p>
        <h2 id="toggles-keeper-training-title" className="mt-1 text-lg font-semibold">Your training plan</h2>
        <p className="text-xs text-slate-600">4 supervised practical modules</p>
      </div>
      <div className="grid grid-cols-2 gap-3 p-4">
        <div className="rounded-lg border border-slate-300 bg-slate-50 p-3 has-checked:border-sky-700 has-checked:bg-sky-50">
          <div className="flex items-center justify-between gap-2">
            <p id="toggles-keeper-training-feeding-hint" className="text-[10px] font-semibold text-slate-600">Unit K-01</p>
            <input
              id="toggles-keeper-training-feeding"
              name="toggles-keeper-training-feeding"
              type="checkbox"
              defaultChecked
              aria-describedby="toggles-keeper-training-feeding-hint"
              className="size-5 shrink-0 cursor-pointer accent-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-800"
            />
          </div>
          <label htmlFor="toggles-keeper-training-feeding" className="mt-3 block cursor-pointer text-xs font-semibold">Feeding</label>
        </div>
        <div className="rounded-lg border border-slate-300 bg-slate-50 p-3 has-checked:border-sky-700 has-checked:bg-sky-50">
          <div className="flex items-center justify-between gap-2">
            <p id="toggles-keeper-training-enrichment-hint" className="text-[10px] font-semibold text-slate-600">Unit K-02</p>
            <input
              id="toggles-keeper-training-enrichment"
              name="toggles-keeper-training-enrichment"
              type="checkbox"
              defaultChecked
              aria-describedby="toggles-keeper-training-enrichment-hint"
              className="size-5 shrink-0 cursor-pointer accent-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-800"
            />
          </div>
          <label htmlFor="toggles-keeper-training-enrichment" className="mt-3 block cursor-pointer text-xs font-semibold">Enrichment</label>
        </div>
        <div className="rounded-lg border border-slate-300 bg-slate-50 p-3 has-checked:border-sky-700 has-checked:bg-sky-50">
          <div className="flex items-center justify-between gap-2">
            <p id="toggles-keeper-training-records-hint" className="text-[10px] font-semibold text-slate-600">Unit K-03</p>
            <input
              id="toggles-keeper-training-records"
              name="toggles-keeper-training-records"
              type="checkbox"
              aria-describedby="toggles-keeper-training-records-hint"
              className="size-5 shrink-0 cursor-pointer accent-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-800"
            />
          </div>
          <label htmlFor="toggles-keeper-training-records" className="mt-3 block cursor-pointer text-xs font-semibold">Care records</label>
        </div>
        <div className="rounded-lg border border-slate-300 bg-slate-50 p-3 has-checked:border-sky-700 has-checked:bg-sky-50">
          <div className="flex items-center justify-between gap-2">
            <p id="toggles-keeper-training-entry-hint" className="text-[10px] font-semibold text-slate-600">Unit K-04</p>
            <input
              id="toggles-keeper-training-entry"
              name="toggles-keeper-training-entry"
              type="checkbox"
              defaultChecked
              aria-describedby="toggles-keeper-training-entry-hint"
              className="size-5 shrink-0 cursor-pointer accent-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-800"
            />
          </div>
          <label htmlFor="toggles-keeper-training-entry" className="mt-3 block cursor-pointer text-xs font-semibold">Safe entry</label>
        </div>
      </div>
      <p className="border-t border-slate-200 px-4 py-3 text-[11px] leading-4 text-slate-600">Include selected modules in your training plan.</p>
    </section>
  )
}
