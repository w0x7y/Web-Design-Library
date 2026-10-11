export default function TabsSelectorCards() {
  return (
    <div className="group w-72 text-neutral-900 sm:w-[28rem]"><div className="grid grid-cols-2 gap-3" role="radiogroup" aria-label="Content presentation"><label className="min-h-28 p-3 cursor-pointer rounded-md border border-neutral-300 bg-white text-sm text-neutral-600 hover:bg-neutral-50 has-[:checked]:border-neutral-900 has-[:checked]:font-medium has-[:checked]:text-neutral-900 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900 forced-colors:has-[:checked]:border-[Highlight] has-[:checked]:[&_svg:last-child]:opacity-100" id="tabs-selector-cards-preview-label"><input className="sr-only focus-visible:outline-hidden" id="tabs-selector-cards-preview" name="tabs-selector-cards" value="preview" type="radio" aria-controls="tabs-selector-cards-preview-panel" defaultChecked />
    <span className="flex items-center justify-between"><svg className="size-5" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H5v18h14V8ZM14 3v5h5M8 12h8M8 16h6" /></svg>
    <svg className="size-4 opacity-0" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 4 4L19 6" /></svg></span>
    <span className="mt-3 block font-semibold">Preview</span>
    <span className="mt-1 block text-xs text-neutral-500">Read the full explanation</span></label>
    <label className="min-h-28 p-3 cursor-pointer rounded-md border border-neutral-300 bg-white text-sm text-neutral-600 hover:bg-neutral-50 has-[:checked]:border-neutral-900 has-[:checked]:font-medium has-[:checked]:text-neutral-900 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900 forced-colors:has-[:checked]:border-[Highlight] has-[:checked]:[&_svg:last-child]:opacity-100" id="tabs-selector-cards-summary-label"><input className="sr-only focus-visible:outline-hidden" id="tabs-selector-cards-summary" name="tabs-selector-cards" value="summary" type="radio" aria-controls="tabs-selector-cards-summary-panel"  />
    <span className="flex items-center justify-between"><svg className="size-5" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 6h13M8 12h13M8 18h13M3 6h1M3 12h1M3 18h1" /></svg>
    <svg className="size-4 opacity-0" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 4 4L19 6" /></svg></span>
    <span className="mt-3 block font-semibold">Summary</span>
    <span className="mt-1 block text-xs text-neutral-500">Scan the key values</span></label></div>
    <section className="mt-3 rounded-lg border border-neutral-200 bg-neutral-50 p-4 hidden group-has-[#tabs-selector-cards-preview:checked]:block" id="tabs-selector-cards-preview-panel" aria-labelledby="tabs-selector-cards-preview-label"><h2 className="text-base font-semibold">Preview heading</h2>
    <p className="mt-2 text-sm text-pretty text-neutral-600">Describe the selected content and its main purpose.</p></section>
    <section className="mt-3 rounded-lg border border-neutral-200 bg-neutral-50 p-4 hidden group-has-[#tabs-selector-cards-summary:checked]:block" id="tabs-selector-cards-summary-panel" aria-labelledby="tabs-selector-cards-summary-label"><h2 className="text-base font-semibold">Summary heading</h2>
    <dl className="mt-3 grid grid-cols-2 gap-3"><div><dt className="text-xs text-neutral-500">Items</dt>
    <dd className="mt-1 text-sm font-medium">24</dd></div>
    <div><dt className="text-xs text-neutral-500">Updated</dt>
    <dd className="mt-1 text-sm font-medium">Oct 11</dd></div></dl></section></div>
  )
}
