export default function TogglesDeliveryDays() {
  return (
    <fieldset className="w-72 rounded-3xl border border-orange-200 bg-orange-50 p-5 text-orange-950">
      <legend className="sr-only">Bakery delivery days</legend>
      <p className="text-[10px] font-semibold tracking-widest uppercase">
        The morning loaf
      </p>
      <h2 className="mt-1 text-xl font-bold">Your bread days</h2>
      <p className="mt-2 text-xs leading-5 text-orange-800">
        Pick the mornings you'd like something fresh at your door.
      </p>
      <div className="mt-5 grid grid-cols-4 gap-2">
        <label className="flex h-14 cursor-pointer flex-col items-center justify-center rounded-xl border border-orange-200 bg-white text-xs font-semibold has-checked:border-orange-800 has-checked:bg-orange-800 has-checked:text-white has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-slate-900">
          <input
            type="checkbox"
            name="toggles-delivery-days-mon"
            defaultChecked
            className="peer sr-only focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          />
          Mon
          <span
            aria-hidden="true"
            className="mt-1 text-[10px] opacity-0 peer-checked:opacity-100"
          >
            ✓
          </span>
        </label>
        <label className="flex h-14 cursor-pointer flex-col items-center justify-center rounded-xl border border-orange-200 bg-white text-xs font-semibold has-checked:border-orange-800 has-checked:bg-orange-800 has-checked:text-white has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-slate-900">
          <input
            type="checkbox"
            name="toggles-delivery-days-tue"
            className="peer sr-only focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          />
          Tue
          <span
            aria-hidden="true"
            className="mt-1 text-[10px] opacity-0 peer-checked:opacity-100"
          >
            ✓
          </span>
        </label>
        <label className="flex h-14 cursor-pointer flex-col items-center justify-center rounded-xl border border-orange-200 bg-white text-xs font-semibold has-checked:border-orange-800 has-checked:bg-orange-800 has-checked:text-white has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-slate-900">
          <input
            type="checkbox"
            name="toggles-delivery-days-wed"
            defaultChecked
            className="peer sr-only focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          />
          Wed
          <span
            aria-hidden="true"
            className="mt-1 text-[10px] opacity-0 peer-checked:opacity-100"
          >
            ✓
          </span>
        </label>
        <label className="flex h-14 cursor-pointer flex-col items-center justify-center rounded-xl border border-orange-200 bg-white text-xs font-semibold has-checked:border-orange-800 has-checked:bg-orange-800 has-checked:text-white has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-slate-900">
          <input
            type="checkbox"
            name="toggles-delivery-days-thu"
            className="peer sr-only focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          />
          Thu
          <span
            aria-hidden="true"
            className="mt-1 text-[10px] opacity-0 peer-checked:opacity-100"
          >
            ✓
          </span>
        </label>
        <label className="flex h-14 cursor-pointer flex-col items-center justify-center rounded-xl border border-orange-200 bg-white text-xs font-semibold has-checked:border-orange-800 has-checked:bg-orange-800 has-checked:text-white has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-slate-900">
          <input
            type="checkbox"
            name="toggles-delivery-days-fri"
            defaultChecked
            className="peer sr-only focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          />
          Fri
          <span
            aria-hidden="true"
            className="mt-1 text-[10px] opacity-0 peer-checked:opacity-100"
          >
            ✓
          </span>
        </label>
        <label className="flex h-14 cursor-pointer flex-col items-center justify-center rounded-xl border border-orange-200 bg-white text-xs font-semibold has-checked:border-orange-800 has-checked:bg-orange-800 has-checked:text-white has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-slate-900">
          <input
            type="checkbox"
            name="toggles-delivery-days-sat"
            className="peer sr-only focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          />
          Sat
          <span
            aria-hidden="true"
            className="mt-1 text-[10px] opacity-0 peer-checked:opacity-100"
          >
            ✓
          </span>
        </label>
        <label className="flex h-14 cursor-pointer flex-col items-center justify-center rounded-xl border border-orange-200 bg-white text-xs font-semibold has-checked:border-orange-800 has-checked:bg-orange-800 has-checked:text-white has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-slate-900">
          <input
            type="checkbox"
            name="toggles-delivery-days-sun"
            className="peer sr-only focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          />
          Sun
          <span
            aria-hidden="true"
            className="mt-1 text-[10px] opacity-0 peer-checked:opacity-100"
          >
            ✓
          </span>
        </label>
      </div>
      <p className="mt-4 text-[10px] text-orange-800">
        Delivered between 07:00 and 09:00.
      </p>
    </fieldset>
  )
}
