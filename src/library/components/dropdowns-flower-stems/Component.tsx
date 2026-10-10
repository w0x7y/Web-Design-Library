// Fonts: Fraunces (https://fonts.google.com/specimen/Fraunces)
export default function DropdownsFlowerStems() {
  return (
    <div className="w-72 sm:w-80 rounded-lg border border-rose-300 bg-rose-50 p-4 text-rose-950 font-['Fraunces',ui-serif,Georgia,serif]">
      <div className="mb-4 flex items-center gap-4">
        <img src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&q=80" alt="A hand-tied bouquet of pale roses, pink flowers and eucalyptus foliage" width={800} height={1200} className="h-24 w-20 shrink-0 rounded-t-full object-cover" />
        <div>
          <p className="mb-1 text-[10px] tracking-wide uppercase">Wholesale flowers</p>
          <p className="text-2xl leading-7">Stemfolio</p>
          <p className="mt-2 text-xs text-rose-800">Market cut / 10 Oct</p>
        </div>
      </div>
      <details open className="group border-t border-rose-300 pt-3">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 [&::-webkit-details-marker]:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current text-base font-medium">
          <span>Choose stem length</span>
          <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4 shrink-0 group-open:rotate-180">
            <path d="m4 6 4 4 4-4" />
          </svg>
        </summary>
        <fieldset aria-describedby="dropdowns-flower-stems-note" className="mt-3 grid grid-cols-3 gap-2">
          <legend className="sr-only">Stem length</legend>
          <label className="flex cursor-pointer flex-col items-start gap-2 rounded-sm border border-rose-300 bg-white p-2 has-checked:border-rose-900 has-checked:bg-rose-100">
            <input type="radio" name="dropdowns-flower-stems-length" value="40" aria-label="40 centimetre stems" className="size-3.5 accent-rose-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current" /><span className="text-xl leading-6 tabular-nums">40<span className="text-[10px]"> cm</span></span>
          </label>
          <label className="flex cursor-pointer flex-col items-start gap-2 rounded-sm border border-rose-300 bg-white p-2 has-checked:border-rose-900 has-checked:bg-rose-100">
            <input type="radio" name="dropdowns-flower-stems-length" value="60" aria-label="60 centimetre stems" defaultChecked className="size-3.5 accent-rose-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current" /><span className="text-xl leading-6 tabular-nums">60<span className="text-[10px]"> cm</span></span>
          </label>
          <label className="flex cursor-pointer flex-col items-start gap-2 rounded-sm border border-rose-300 bg-white p-2 has-checked:border-rose-900 has-checked:bg-rose-100">
            <input type="radio" name="dropdowns-flower-stems-length" value="80" aria-label="80 centimetre stems" className="size-3.5 accent-rose-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current" /><span className="text-xl leading-6 tabular-nums">80<span className="text-[10px]"> cm</span></span>
          </label>
        </fieldset>
        <p id="dropdowns-flower-stems-note" className="mt-3 text-xs leading-5 text-rose-800">Sold in bunches of 10 stems. Length is measured below the flower head.</p>
      </details>
    </div>
  )
}
