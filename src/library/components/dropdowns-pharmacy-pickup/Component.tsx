// Fonts: IBM Plex Sans (https://fonts.google.com/specimen/IBM+Plex+Sans)
export default function DropdownsPharmacyPickup() {
  return (
    <div className="w-72 sm:w-80 rounded-xl border border-teal-800 bg-white p-4 text-zinc-900 font-['IBM_Plex_Sans',ui-sans-serif,system-ui,sans-serif]">
      <p className="mb-3 flex items-center justify-between text-[11px] font-semibold text-teal-800"><span>MORROW DOSE</span><span className="font-normal text-zinc-600">Westgate pharmacy</span></p>
      <details open className="group">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 [&::-webkit-details-marker]:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current rounded-md bg-teal-50 p-3">
          <span><span className="block text-sm font-semibold">Collect your prescription</span><span className="mt-0.5 block text-xs text-zinc-600">Today, 10 October</span></span>
          <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4 shrink-0 group-open:rotate-180">
            <path d="m4 6 4 4 4-4" />
          </svg>
        </summary>
        <fieldset aria-describedby="dropdowns-pharmacy-pickup-note" className="mt-4">
          <legend className="sr-only">Collection time</legend>
          <p className="mb-2 text-xs font-medium">Choose a collection time</p>
          <div className="grid grid-cols-3 gap-2">
            <label className="flex cursor-pointer flex-col items-center gap-2 rounded-md border border-zinc-300 px-1 py-3 text-xs has-checked:border-teal-800 has-checked:bg-teal-50 hover:bg-zinc-50">
              <input type="radio" name="dropdowns-pharmacy-pickup-time" value="12:30" aria-label="Collect at 12:30" className="size-3.5 accent-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current" />
              <span>12:30</span>
            </label>
            <label className="flex cursor-pointer flex-col items-center gap-2 rounded-md border border-zinc-300 px-1 py-3 text-xs has-checked:border-teal-800 has-checked:bg-teal-50 hover:bg-zinc-50">
              <input type="radio" name="dropdowns-pharmacy-pickup-time" value="13:00" aria-label="Collect at 13:00" defaultChecked className="size-3.5 accent-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current" />
              <span>13:00</span>
            </label>
            <label className="flex cursor-pointer flex-col items-center gap-2 rounded-md border border-zinc-300 px-1 py-3 text-xs has-checked:border-teal-800 has-checked:bg-teal-50 hover:bg-zinc-50">
              <input type="radio" name="dropdowns-pharmacy-pickup-time" value="13:30" aria-label="Collect at 13:30" className="size-3.5 accent-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current" />
              <span>13:30</span>
            </label>
          </div>
        </fieldset>
        <p id="dropdowns-pharmacy-pickup-note" className="mt-4 border-t border-zinc-200 pt-3 text-xs leading-5 text-zinc-600">Bring your collection code. We will hold your order for 7 days.</p>
      </details>
    </div>
  )
}
