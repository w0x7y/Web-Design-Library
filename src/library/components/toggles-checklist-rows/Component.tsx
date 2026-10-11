export default function TogglesChecklistRows() {
  return (
    <fieldset className="w-72 rounded-lg border border-neutral-200 bg-white p-4 text-neutral-900 sm:w-[28rem]"><legend className="px-1 text-sm font-semibold">Select items</legend>
    <ul className="mt-2" role="list"><li className="border-t border-neutral-200 py-3 first:border-t-0 first:pt-0 last:pb-0"><label className="flex cursor-pointer items-start gap-3"><input className="size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-0.5" id="toggles-checklist-rows-first" name="items" value="first" type="checkbox" aria-describedby="toggles-checklist-rows-first-hint" defaultChecked />
    <span className="block min-w-0 flex-1"><span className="block text-sm font-medium text-neutral-900">First item title</span>
    <span className="block mt-1 text-xs text-neutral-500" id="toggles-checklist-rows-first-hint">Short reason to select it.</span></span>
    <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium text-neutral-900 shrink-0 px-2">Required</span></label></li>
    <li className="border-t border-neutral-200 py-3 first:border-t-0 first:pt-0 last:pb-0"><label className="flex cursor-pointer items-start gap-3"><input className="size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-0.5" id="toggles-checklist-rows-second" name="items" value="second" type="checkbox" aria-describedby="toggles-checklist-rows-second-hint"  />
    <span className="block min-w-0 flex-1"><span className="block text-sm font-medium text-neutral-900">Second item title</span>
    <span className="block mt-1 text-xs text-neutral-500" id="toggles-checklist-rows-second-hint">Explain the optional choice.</span></span>
    <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium text-neutral-900 shrink-0 px-2">Optional</span></label></li>
    <li className="border-t border-neutral-200 py-3 first:border-t-0 first:pt-0 last:pb-0"><label className="flex cursor-pointer items-start gap-3"><input className="size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-0.5" id="toggles-checklist-rows-third" name="items" value="third" type="checkbox" aria-describedby="toggles-checklist-rows-third-hint" defaultChecked />
    <span className="block min-w-0 flex-1"><span className="block text-sm font-medium text-neutral-900">Third item title</span>
    <span className="block mt-1 text-xs text-neutral-500" id="toggles-checklist-rows-third-hint">Describe this separate item.</span></span>
    <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium text-neutral-900 shrink-0 px-2">Optional</span></label></li></ul></fieldset>
  )
}
