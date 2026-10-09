export default function DropdownsShippingSelector() {
  return (
    <details
      open
      className="group w-72 rounded-xl border border-stone-300 bg-stone-50 p-5 text-stone-900"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 [&::-webkit-details-marker]:hidden">
        <span>
          <span className="block text-[9px] tracking-widest text-stone-600 uppercase">
            A good thing is on its way
          </span>
          <span className="mt-1 block font-serif text-xl">Choose delivery</span>
        </span>
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="size-4 shrink-0 group-open:rotate-180"
        >
          <path d="m4 6 4 4 4-4" />
        </svg>
      </summary>
      <fieldset className="mt-5 space-y-2">
        <legend className="sr-only">Shipping method</legend>
        <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-stone-300 bg-white p-3 has-checked:border-emerald-800 has-checked:bg-emerald-50">
          <input
            type="radio"
            name="dropdowns-shipping-selector-method"
            value="standard"
            defaultChecked
            className="size-4 shrink-0 accent-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          />
          <span className="flex-1">
            <span className="block text-xs font-semibold">Standard</span>
            <span className="mt-1 block text-[10px] text-stone-600">
              3–5 working days
            </span>
          </span>
          <span className="text-xs font-semibold">Free</span>
        </label>
        <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-stone-300 bg-white p-3 has-checked:border-emerald-800 has-checked:bg-emerald-50">
          <input
            type="radio"
            name="dropdowns-shipping-selector-method"
            value="express"
            className="size-4 shrink-0 accent-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          />
          <span className="flex-1">
            <span className="block text-xs font-semibold">Express</span>
            <span className="mt-1 block text-[10px] text-stone-600">
              1–2 working days
            </span>
          </span>
          <span className="text-xs font-semibold">$8</span>
        </label>
        <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-stone-300 bg-white p-3 has-checked:border-emerald-800 has-checked:bg-emerald-50">
          <input
            type="radio"
            name="dropdowns-shipping-selector-method"
            value="pickup"
            className="size-4 shrink-0 accent-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          />
          <span className="flex-1">
            <span className="block text-xs font-semibold">
              Store collection
            </span>
            <span className="mt-1 block text-[10px] text-stone-600">
              Ready tomorrow after 10
            </span>
          </span>
          <span className="text-xs font-semibold">Free</span>
        </label>
      </fieldset>
      <p className="mt-4 text-[10px] leading-4 text-stone-600">
        Orders are packed with care, Monday to Friday.
      </p>
    </details>
  )
}
