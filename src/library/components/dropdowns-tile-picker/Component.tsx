export default function DropdownsTilePicker() {
  return (
    <div className="group relative h-64 w-72 text-neutral-900 sm:w-80">
      <p id="dropdowns-tile-picker-label" className="text-sm font-medium">Time</p>
      <details open className="group mt-2">
        <summary aria-labelledby="dropdowns-tile-picker-label dropdowns-tile-picker-value" aria-describedby="dropdowns-tile-picker-note" className="flex h-10 cursor-pointer list-none items-center gap-2 rounded-md border border-neutral-300 bg-white px-3 text-sm transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
          <span id="dropdowns-tile-picker-value" className="flex-1 tabular-nums">
            <span className="hidden group-has-[#dropdowns-tile-picker-0900:checked]:inline">09:00</span>
            <span className="hidden group-has-[#dropdowns-tile-picker-0930:checked]:inline">09:30</span>
            <span className="hidden group-has-[#dropdowns-tile-picker-1000:checked]:inline">10:00</span>
            <span className="hidden group-has-[#dropdowns-tile-picker-1030:checked]:inline">10:30</span>
            <span className="hidden group-has-[#dropdowns-tile-picker-1100:checked]:inline">11:00</span>
            <span className="hidden group-has-[#dropdowns-tile-picker-1130:checked]:inline">11:30</span>
          </span>
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0 transition-transform group-open:rotate-180"><path d="m6 9 6 6 6-6" /></svg>
        </summary>
        <div className="absolute top-[68px] left-0 mt-1 w-full rounded-md border border-neutral-200 bg-white p-3 shadow-lg">
          <p className="text-xs text-neutral-500">Today, Mar 14</p>
          <fieldset className="mt-3">
            <legend className="sr-only">Choose a time</legend>
            <div className="grid grid-cols-3 gap-2">
              <label className="flex h-10 cursor-pointer items-center justify-center rounded-md border border-neutral-300 bg-white text-sm tabular-nums text-neutral-900 transition-colors hover:bg-neutral-50 has-[:checked]:border-neutral-900 has-[:checked]:bg-neutral-900 has-[:checked]:font-medium has-[:checked]:text-white has-[:focus-visible]:outline-2 has-[:focus-visible]:-outline-offset-2 has-[:focus-visible]:outline-neutral-900 forced-colors:has-[:checked]:border-[Highlight] forced-colors:has-[:checked]:bg-[Highlight] forced-colors:has-[:checked]:text-[HighlightText]">
                <input id="dropdowns-tile-picker-0900" type="radio" name="dropdowns-tile-picker" aria-describedby="dropdowns-tile-picker-note" defaultChecked className="sr-only focus-visible:outline-hidden" />
                09:00
              </label>
              <label className="flex h-10 cursor-pointer items-center justify-center rounded-md border border-neutral-300 bg-white text-sm tabular-nums text-neutral-900 transition-colors hover:bg-neutral-50 has-[:checked]:border-neutral-900 has-[:checked]:bg-neutral-900 has-[:checked]:font-medium has-[:checked]:text-white has-[:focus-visible]:outline-2 has-[:focus-visible]:-outline-offset-2 has-[:focus-visible]:outline-neutral-900 forced-colors:has-[:checked]:border-[Highlight] forced-colors:has-[:checked]:bg-[Highlight] forced-colors:has-[:checked]:text-[HighlightText]">
                <input id="dropdowns-tile-picker-0930" type="radio" name="dropdowns-tile-picker" aria-describedby="dropdowns-tile-picker-note" className="sr-only focus-visible:outline-hidden" />
                09:30
              </label>
              <label className="flex h-10 cursor-pointer items-center justify-center rounded-md border border-neutral-300 bg-white text-sm tabular-nums text-neutral-900 transition-colors hover:bg-neutral-50 has-[:checked]:border-neutral-900 has-[:checked]:bg-neutral-900 has-[:checked]:font-medium has-[:checked]:text-white has-[:focus-visible]:outline-2 has-[:focus-visible]:-outline-offset-2 has-[:focus-visible]:outline-neutral-900 forced-colors:has-[:checked]:border-[Highlight] forced-colors:has-[:checked]:bg-[Highlight] forced-colors:has-[:checked]:text-[HighlightText]">
                <input id="dropdowns-tile-picker-1000" type="radio" name="dropdowns-tile-picker" aria-describedby="dropdowns-tile-picker-note" className="sr-only focus-visible:outline-hidden" />
                10:00
              </label>
              <label className="flex h-10 cursor-pointer items-center justify-center rounded-md border border-neutral-300 bg-white text-sm tabular-nums text-neutral-900 transition-colors hover:bg-neutral-50 has-[:checked]:border-neutral-900 has-[:checked]:bg-neutral-900 has-[:checked]:font-medium has-[:checked]:text-white has-[:focus-visible]:outline-2 has-[:focus-visible]:-outline-offset-2 has-[:focus-visible]:outline-neutral-900 forced-colors:has-[:checked]:border-[Highlight] forced-colors:has-[:checked]:bg-[Highlight] forced-colors:has-[:checked]:text-[HighlightText]">
                <input id="dropdowns-tile-picker-1030" type="radio" name="dropdowns-tile-picker" aria-describedby="dropdowns-tile-picker-note" className="sr-only focus-visible:outline-hidden" />
                10:30
              </label>
              <label className="flex h-10 cursor-pointer items-center justify-center rounded-md border border-neutral-300 bg-white text-sm tabular-nums text-neutral-900 transition-colors hover:bg-neutral-50 has-[:checked]:border-neutral-900 has-[:checked]:bg-neutral-900 has-[:checked]:font-medium has-[:checked]:text-white has-[:focus-visible]:outline-2 has-[:focus-visible]:-outline-offset-2 has-[:focus-visible]:outline-neutral-900 forced-colors:has-[:checked]:border-[Highlight] forced-colors:has-[:checked]:bg-[Highlight] forced-colors:has-[:checked]:text-[HighlightText]">
                <input id="dropdowns-tile-picker-1100" type="radio" name="dropdowns-tile-picker" aria-describedby="dropdowns-tile-picker-note" className="sr-only focus-visible:outline-hidden" />
                11:00
              </label>
              <label className="flex h-10 cursor-not-allowed items-center justify-center rounded-md border border-neutral-300 bg-white text-sm tabular-nums text-neutral-600 line-through opacity-50">
                <input id="dropdowns-tile-picker-1130" type="radio" name="dropdowns-tile-picker" aria-describedby="dropdowns-tile-picker-note" disabled className="sr-only focus-visible:outline-hidden" />
                11:30
              </label>
            </div>
          </fieldset>
          <p id="dropdowns-tile-picker-note" className="mt-3 text-xs text-neutral-500">Times use your local zone.</p>
        </div>
      </details>
    </div>
  )
}
