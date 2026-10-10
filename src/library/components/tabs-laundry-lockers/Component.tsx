export default function TabsLaundryLockers() {
  return (
    <section
      aria-label="Rinsepost laundry locker orders"
      className="group w-72 sm:w-[336px]  border border-slate-300 bg-white p-5 text-slate-900"
    >
      <header className="flex items-baseline justify-between">
        <h2 className="text-base font-semibold">Rinsepost</h2>
        <span className="text-[10px] text-slate-600">ASH COURT</span>
      </header>
      <fieldset className="mt-4 flex gap-3">
        <legend className="sr-only">Choose laundry order status</legend>
        <label
          id="tabs-laundry-lockers-ready-label"
          className="flex h-14 flex-1 cursor-pointer flex-col justify-center gap-1 border-b-2 border-slate-500 px-2 text-left hover:bg-sky-50 has-checked:border-slate-900 has-checked:bg-slate-50 forced-colors:has-checked:underline has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-slate-900"
        >
          <input
            id="tabs-laundry-lockers-ready"
            type="radio"
            name="tabs-laundry-lockers-view"
            value="ready"
            defaultChecked
            aria-controls="tabs-laundry-lockers-ready-panel"
            className="sr-only focus-visible:outline-hidden"
          />
          <span className="text-xs font-semibold">Ready to collect</span>
          <span className="text-[10px] text-slate-600">2 bags</span>
        </label>
        <label
          id="tabs-laundry-lockers-washing-label"
          className="flex h-14 flex-1 cursor-pointer flex-col justify-center gap-1 border-b-2 border-slate-500 px-2 text-left hover:bg-sky-50 has-checked:border-slate-900 has-checked:bg-slate-50 forced-colors:has-checked:underline has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-slate-900"
        >
          <input
            id="tabs-laundry-lockers-washing"
            type="radio"
            name="tabs-laundry-lockers-view"
            value="washing"
            aria-controls="tabs-laundry-lockers-washing-panel"
            className="sr-only focus-visible:outline-hidden"
          />
          <span className="text-xs font-semibold">In the wash</span>
          <span className="text-[10px] text-slate-600">1 bag</span>
        </label>
      </fieldset>
      <section
        id="tabs-laundry-lockers-ready-panel"
        aria-labelledby="tabs-laundry-lockers-ready-label"
        className="hidden group-has-[#tabs-laundry-lockers-ready:checked]:block"
      >
        <p className="mt-5 text-[10px] font-medium tracking-widest text-slate-600 uppercase">Collection locker</p>
        <div className="mt-2 flex items-center justify-between">
          <h3 className="text-[56px] leading-none font-light tracking-tight">B·17</h3>
          <svg
            viewBox="0 0 40 56"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
            className="h-14 w-10 text-slate-600"
          >
            <path d="M5 3H35V53H5ZM5 19H35M5 36H35M20 3V53M14 10V13M26 10V13M14 26V29M26 26V29M14 43V46M26 43V46"></path>
          </svg>
        </div>
        <p className="mt-3 text-xs">Order RP-1048 · Folded &amp; packed</p>
        <p className="mt-5 border-t border-slate-200 pt-3 text-[11px] leading-5 text-slate-600">Scan your collection receipt at the kiosk. Open today until 21:00.</p>
      </section>
      <section
        id="tabs-laundry-lockers-washing-panel"
        aria-labelledby="tabs-laundry-lockers-washing-label"
        className="hidden group-has-[#tabs-laundry-lockers-washing:checked]:block"
      >
        <p className="mt-5 text-[10px] font-medium tracking-widest text-slate-600 uppercase">Order in progress</p>
        <div className="mt-2 flex items-center justify-between">
          <h3 className="text-[56px] leading-none font-light tracking-tight">1049</h3>
          <svg
            viewBox="0 0 40 56"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
            className="h-14 w-10 text-slate-600"
          >
            <path d="M5 3H35V53H5ZM5 19H35M5 36H35M20 3V53M14 10V13M26 10V13M14 26V29M26 26V29M14 43V46M26 43V46"></path>
          </svg>
        </div>
        <p className="mt-3 text-xs">Order RP-1049 · Delicates cycle</p>
        <p className="mt-5 border-t border-slate-200 pt-3 text-[11px] leading-5 text-slate-600">Expected tomorrow after 16:00. We will send your collection receipt when ready.</p>
      </section>
    </section>
  )
}
