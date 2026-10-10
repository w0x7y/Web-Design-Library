export default function TogglesCheckboxNested() {
  return (
    <fieldset aria-describedby="toggles-checkbox-nested-hint" className="w-72 text-neutral-900 sm:w-80">
      <legend className="text-sm font-semibold">Option group title</legend>
      <p id="toggles-checkbox-nested-hint" className="mt-1 text-sm text-neutral-500">Short selection guidance</p>
      <div className="mt-4 grid gap-4">
        <div className="group">
          <div className="flex items-start gap-3">
            <input id="toggles-checkbox-nested-parent" type="checkbox" defaultChecked aria-describedby="toggles-checkbox-nested-parent-hint" className="mt-0.5 size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" />
            <div>
              <label htmlFor="toggles-checkbox-nested-parent" className="cursor-pointer text-sm font-medium">Parent option</label>
              <p id="toggles-checkbox-nested-parent-hint" className="text-sm text-neutral-500">Description of the parent</p>
            </div>
          </div>
          <div className="mt-2 hidden space-y-2 pl-7 group-has-[#toggles-checkbox-nested-parent:checked]:block">
            <label className="flex items-start gap-3 text-sm">
              <input type="checkbox" defaultChecked className="mt-0.5 size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" />
              Child option
            </label>
            <label className="flex items-start gap-3 text-sm">
              <input type="checkbox" className="mt-0.5 size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" />
              Related child option
            </label>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <input id="toggles-checkbox-nested-independent" type="checkbox" aria-describedby="toggles-checkbox-nested-independent-hint" className="mt-0.5 size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" />
          <div>
            <label htmlFor="toggles-checkbox-nested-independent" className="cursor-pointer text-sm font-medium">Independent option</label>
            <p id="toggles-checkbox-nested-independent-hint" className="text-sm text-neutral-500">Description of this option</p>
          </div>
        </div>
        <div className="flex items-start gap-3 opacity-50">
          <input id="toggles-checkbox-nested-disabled" type="checkbox" disabled aria-describedby="toggles-checkbox-nested-disabled-hint" className="mt-0.5 size-4 shrink-0 cursor-not-allowed accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" />
          <div>
            <label htmlFor="toggles-checkbox-nested-disabled" className="cursor-not-allowed text-sm font-medium">Unavailable option</label>
            <p id="toggles-checkbox-nested-disabled-hint" className="text-sm text-neutral-500">Reason this option is disabled</p>
          </div>
        </div>
      </div>
    </fieldset>
  )
}

