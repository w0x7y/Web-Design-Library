export default function TogglesSegmentedControl() {
  return (
    <div className="grid w-72 gap-5 text-neutral-900 sm:w-80">
      <fieldset>
        <legend className="text-xs text-neutral-500">Time range</legend>
        <div className="mt-2 grid grid-cols-4 rounded-lg bg-neutral-100 p-1">
          <label className="relative flex h-8 cursor-pointer items-center justify-center rounded-md px-3 text-sm font-medium text-neutral-600 transition-colors has-checked:bg-white has-checked:text-neutral-900 has-checked:shadow-sm has-enabled:hover:text-neutral-900 has-disabled:cursor-not-allowed has-disabled:opacity-50 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900 forced-colors:border forced-colors:border-transparent forced-colors:has-checked:border-[Highlight] forced-colors:has-checked:underline forced-colors:has-checked:underline-offset-4">
            <input type="radio" name="toggles-segmented-control-range" value="day" className="sr-only focus-visible:outline-hidden" />
            Day
          </label>
          <label className="relative flex h-8 cursor-pointer items-center justify-center rounded-md px-3 text-sm font-medium text-neutral-600 transition-colors has-checked:bg-white has-checked:text-neutral-900 has-checked:shadow-sm has-enabled:hover:text-neutral-900 has-disabled:cursor-not-allowed has-disabled:opacity-50 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900 forced-colors:border forced-colors:border-transparent forced-colors:has-checked:border-[Highlight] forced-colors:has-checked:underline forced-colors:has-checked:underline-offset-4">
            <input type="radio" name="toggles-segmented-control-range" value="week" defaultChecked className="sr-only focus-visible:outline-hidden" />
            Week
          </label>
          <label className="relative flex h-8 cursor-pointer items-center justify-center rounded-md px-3 text-sm font-medium text-neutral-600 transition-colors has-checked:bg-white has-checked:text-neutral-900 has-checked:shadow-sm has-enabled:hover:text-neutral-900 has-disabled:cursor-not-allowed has-disabled:opacity-50 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900 forced-colors:border forced-colors:border-transparent forced-colors:has-checked:border-[Highlight] forced-colors:has-checked:underline forced-colors:has-checked:underline-offset-4">
            <input type="radio" name="toggles-segmented-control-range" value="month" className="sr-only focus-visible:outline-hidden" />
            Month
          </label>
          <label className="relative flex h-8 cursor-pointer items-center justify-center rounded-md px-3 text-sm font-medium text-neutral-600 transition-colors has-checked:bg-white has-checked:text-neutral-900 has-checked:shadow-sm has-enabled:hover:text-neutral-900 has-disabled:cursor-not-allowed has-disabled:opacity-50 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900 forced-colors:border forced-colors:border-transparent forced-colors:has-checked:border-[Highlight] forced-colors:has-checked:underline forced-colors:has-checked:underline-offset-4">
            <input type="radio" name="toggles-segmented-control-range" value="year" disabled className="sr-only focus-visible:outline-hidden" />
            Year
          </label>
        </div>
      </fieldset>
      <fieldset>
        <legend className="text-xs text-neutral-500">View</legend>
        <div className="mt-2 inline-grid grid-cols-2 gap-1 rounded-lg bg-neutral-100 p-1">
          <label className="group relative flex size-8 cursor-pointer items-center justify-center rounded-md text-neutral-600 transition-colors has-checked:bg-white has-checked:text-neutral-900 has-checked:shadow-sm hover:text-neutral-900 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900 forced-colors:border forced-colors:border-transparent forced-colors:has-checked:border-[Highlight]">
            <input type="radio" name="toggles-segmented-control-view" value="list" defaultChecked className="sr-only focus-visible:outline-hidden" />
            <span className="sr-only">List view</span>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="M9 5h12M9 12h12M9 19h12M3 5h.01M3 12h.01M3 19h.01" /></svg>
            <span aria-hidden="true" className="absolute right-0.5 bottom-0.5 hidden size-1.5 rounded-full forced-colors:block forced-colors:bg-[CanvasText] forced-colors:opacity-0 forced-colors:group-has-checked:opacity-100" />
        </label>
          <label className="group relative flex size-8 cursor-pointer items-center justify-center rounded-md text-neutral-600 transition-colors has-checked:bg-white has-checked:text-neutral-900 has-checked:shadow-sm hover:text-neutral-900 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900 forced-colors:border forced-colors:border-transparent forced-colors:has-checked:border-[Highlight]">
            <input type="radio" name="toggles-segmented-control-view" value="grid" className="sr-only focus-visible:outline-hidden" />
            <span className="sr-only">Grid view</span>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>
            <span aria-hidden="true" className="absolute right-0.5 bottom-0.5 hidden size-1.5 rounded-full forced-colors:block forced-colors:bg-[CanvasText] forced-colors:opacity-0 forced-colors:group-has-checked:opacity-100" />
        </label>
        </div>
      </fieldset>
      <fieldset>
        <legend className="text-xs text-neutral-500">Formatting</legend>
        <div className="mt-2 flex">
          <label className="group relative flex size-9 cursor-pointer items-center justify-center border border-neutral-300 bg-white text-neutral-900 transition-colors rounded-l-md has-checked:bg-neutral-900 has-checked:text-white hover:bg-neutral-50 has-checked:hover:bg-neutral-700 has-[:focus-visible]:z-10 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900 forced-colors:border-[ButtonText] forced-colors:has-checked:bg-[Highlight] forced-colors:has-checked:text-[HighlightText]">
            <input type="checkbox" name="toggles-segmented-control-format" value="bold" defaultChecked className="sr-only focus-visible:outline-hidden" />
            <span className="sr-only">Bold</span>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="M6 4h7a4 4 0 0 1 0 8H6Zm0 8h8a4 4 0 0 1 0 8H6Z" /></svg>
            <span aria-hidden="true" className="absolute right-0.5 bottom-0.5 hidden size-1.5 rounded-full forced-colors:block forced-colors:bg-[CanvasText] forced-colors:opacity-0 forced-colors:group-has-checked:opacity-100" />
        </label>
          <label className="group relative flex size-9 cursor-pointer items-center justify-center border border-neutral-300 bg-white text-neutral-900 transition-colors -ml-px has-checked:bg-neutral-900 has-checked:text-white hover:bg-neutral-50 has-checked:hover:bg-neutral-700 has-[:focus-visible]:z-10 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900 forced-colors:border-[ButtonText] forced-colors:has-checked:bg-[Highlight] forced-colors:has-checked:text-[HighlightText]">
            <input type="checkbox" name="toggles-segmented-control-format" value="italic" className="sr-only focus-visible:outline-hidden" />
            <span className="sr-only">Italic</span>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="M10 4h9M5 20h9M15 4 9 20" /></svg>
            <span aria-hidden="true" className="absolute right-0.5 bottom-0.5 hidden size-1.5 rounded-full forced-colors:block forced-colors:bg-[CanvasText] forced-colors:opacity-0 forced-colors:group-has-checked:opacity-100" />
        </label>
          <label className="group relative flex size-9 cursor-pointer items-center justify-center border border-neutral-300 bg-white text-neutral-900 transition-colors -ml-px rounded-r-md has-checked:bg-neutral-900 has-checked:text-white hover:bg-neutral-50 has-checked:hover:bg-neutral-700 has-[:focus-visible]:z-10 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900 forced-colors:border-[ButtonText] forced-colors:has-checked:bg-[Highlight] forced-colors:has-checked:text-[HighlightText]">
            <input type="checkbox" name="toggles-segmented-control-format" value="underline" defaultChecked className="sr-only focus-visible:outline-hidden" />
            <span className="sr-only">Underline</span>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="M6 4v7a6 6 0 0 0 12 0V4M4 21h16" /></svg>
            <span aria-hidden="true" className="absolute right-0.5 bottom-0.5 hidden size-1.5 rounded-full forced-colors:block forced-colors:bg-[CanvasText] forced-colors:opacity-0 forced-colors:group-has-checked:opacity-100" />
        </label>
        </div>
      </fieldset>
    </div>
  )
}

