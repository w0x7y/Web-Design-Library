export default function TogglesCheckboxTileGrid() {
  return (
    <fieldset aria-describedby="toggles-checkbox-tile-grid-hint toggles-checkbox-tile-grid-note" className="w-72 text-neutral-900 sm:w-[28rem]">
      <legend className="text-sm font-semibold">Choose days</legend>
      <p id="toggles-checkbox-tile-grid-hint" className="mt-1 text-sm text-neutral-500">Select every day that applies</p>
      <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-7">
        <label className="group relative flex h-14 cursor-pointer flex-col items-center justify-center gap-1 rounded-md border border-neutral-300 bg-white text-sm font-medium text-neutral-900 transition-colors has-checked:border-neutral-900 has-checked:bg-neutral-900 has-checked:text-white has-enabled:hover:bg-neutral-50 has-checked:has-enabled:hover:bg-neutral-700 has-disabled:cursor-not-allowed has-disabled:opacity-50 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900 forced-colors:border-[ButtonText] forced-colors:has-checked:bg-[Highlight] forced-colors:has-checked:text-[HighlightText]">
          <input type="checkbox" name="toggles-checkbox-tile-grid-days" value="monday" aria-label="Monday" defaultChecked className="sr-only focus-visible:outline-hidden" />
          <span aria-hidden="true">Mon</span>
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-3.5 opacity-0 group-has-checked:opacity-100"><path d="m5 12 4 4L19 6" /></svg>
        </label>
        <label className="group relative flex h-14 cursor-pointer flex-col items-center justify-center gap-1 rounded-md border border-neutral-300 bg-white text-sm font-medium text-neutral-900 transition-colors has-checked:border-neutral-900 has-checked:bg-neutral-900 has-checked:text-white has-enabled:hover:bg-neutral-50 has-checked:has-enabled:hover:bg-neutral-700 has-disabled:cursor-not-allowed has-disabled:opacity-50 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900 forced-colors:border-[ButtonText] forced-colors:has-checked:bg-[Highlight] forced-colors:has-checked:text-[HighlightText]">
          <input type="checkbox" name="toggles-checkbox-tile-grid-days" value="tuesday" aria-label="Tuesday" className="sr-only focus-visible:outline-hidden" />
          <span aria-hidden="true">Tue</span>
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-3.5 opacity-0 group-has-checked:opacity-100"><path d="m5 12 4 4L19 6" /></svg>
        </label>
        <label className="group relative flex h-14 cursor-pointer flex-col items-center justify-center gap-1 rounded-md border border-neutral-300 bg-white text-sm font-medium text-neutral-900 transition-colors has-checked:border-neutral-900 has-checked:bg-neutral-900 has-checked:text-white has-enabled:hover:bg-neutral-50 has-checked:has-enabled:hover:bg-neutral-700 has-disabled:cursor-not-allowed has-disabled:opacity-50 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900 forced-colors:border-[ButtonText] forced-colors:has-checked:bg-[Highlight] forced-colors:has-checked:text-[HighlightText]">
          <input type="checkbox" name="toggles-checkbox-tile-grid-days" value="wednesday" aria-label="Wednesday" defaultChecked className="sr-only focus-visible:outline-hidden" />
          <span aria-hidden="true">Wed</span>
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-3.5 opacity-0 group-has-checked:opacity-100"><path d="m5 12 4 4L19 6" /></svg>
        </label>
        <label className="group relative flex h-14 cursor-pointer flex-col items-center justify-center gap-1 rounded-md border border-neutral-300 bg-white text-sm font-medium text-neutral-900 transition-colors has-checked:border-neutral-900 has-checked:bg-neutral-900 has-checked:text-white has-enabled:hover:bg-neutral-50 has-checked:has-enabled:hover:bg-neutral-700 has-disabled:cursor-not-allowed has-disabled:opacity-50 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900 forced-colors:border-[ButtonText] forced-colors:has-checked:bg-[Highlight] forced-colors:has-checked:text-[HighlightText]">
          <input type="checkbox" name="toggles-checkbox-tile-grid-days" value="thursday" aria-label="Thursday" className="sr-only focus-visible:outline-hidden" />
          <span aria-hidden="true">Thu</span>
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-3.5 opacity-0 group-has-checked:opacity-100"><path d="m5 12 4 4L19 6" /></svg>
        </label>
        <label className="group relative flex h-14 cursor-pointer flex-col items-center justify-center gap-1 rounded-md border border-neutral-300 bg-white text-sm font-medium text-neutral-900 transition-colors has-checked:border-neutral-900 has-checked:bg-neutral-900 has-checked:text-white has-enabled:hover:bg-neutral-50 has-checked:has-enabled:hover:bg-neutral-700 has-disabled:cursor-not-allowed has-disabled:opacity-50 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900 forced-colors:border-[ButtonText] forced-colors:has-checked:bg-[Highlight] forced-colors:has-checked:text-[HighlightText]">
          <input type="checkbox" name="toggles-checkbox-tile-grid-days" value="friday" aria-label="Friday" defaultChecked className="sr-only focus-visible:outline-hidden" />
          <span aria-hidden="true">Fri</span>
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-3.5 opacity-0 group-has-checked:opacity-100"><path d="m5 12 4 4L19 6" /></svg>
        </label>
        <label className="group relative flex h-14 cursor-pointer flex-col items-center justify-center gap-1 rounded-md border border-neutral-300 bg-white text-sm font-medium text-neutral-900 transition-colors has-checked:border-neutral-900 has-checked:bg-neutral-900 has-checked:text-white has-enabled:hover:bg-neutral-50 has-checked:has-enabled:hover:bg-neutral-700 has-disabled:cursor-not-allowed has-disabled:opacity-50 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900 forced-colors:border-[ButtonText] forced-colors:has-checked:bg-[Highlight] forced-colors:has-checked:text-[HighlightText]">
          <input type="checkbox" name="toggles-checkbox-tile-grid-days" value="saturday" aria-label="Saturday" className="sr-only focus-visible:outline-hidden" />
          <span aria-hidden="true">Sat</span>
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-3.5 opacity-0 group-has-checked:opacity-100"><path d="m5 12 4 4L19 6" /></svg>
        </label>
        <label className="group relative flex h-14 cursor-pointer flex-col items-center justify-center gap-1 rounded-md border border-neutral-300 bg-white text-sm font-medium text-neutral-900 transition-colors has-checked:border-neutral-900 has-checked:bg-neutral-900 has-checked:text-white has-enabled:hover:bg-neutral-50 has-checked:has-enabled:hover:bg-neutral-700 has-disabled:cursor-not-allowed has-disabled:opacity-50 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900 forced-colors:border-[ButtonText] forced-colors:has-checked:bg-[Highlight] forced-colors:has-checked:text-[HighlightText]">
          <input type="checkbox" name="toggles-checkbox-tile-grid-days" value="sunday" aria-label="Sunday" disabled className="sr-only focus-visible:outline-hidden" />
          <span aria-hidden="true">Sun</span>
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-3.5 opacity-0 group-has-checked:opacity-100"><path d="m5 12 4 4L19 6" /></svg>
        </label>
      </div>
      <p id="toggles-checkbox-tile-grid-note" className="mt-3 text-xs text-neutral-500">Short schedule guidance</p>
    </fieldset>
  )
}

