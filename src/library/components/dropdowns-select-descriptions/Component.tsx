export default function DropdownsSelectDescriptions() {
  return (
    <div className="group relative h-64 w-72 text-neutral-900 sm:w-80">
      <p id="dropdowns-select-descriptions-label" className="text-sm font-medium">Plan</p>
      <details open className="group mt-2">
        <summary aria-labelledby="dropdowns-select-descriptions-label dropdowns-select-descriptions-value" className="flex h-10 cursor-pointer list-none items-center justify-between gap-3 rounded-md border border-neutral-300 bg-white px-3 text-sm transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
          <span id="dropdowns-select-descriptions-value">
            <span className="hidden group-has-[#dropdowns-select-descriptions-individual:checked]:inline">Individual</span>
            <span className="hidden group-has-[#dropdowns-select-descriptions-team:checked]:inline">Team</span>
            <span className="hidden group-has-[#dropdowns-select-descriptions-enterprise:checked]:inline">Enterprise</span>
          </span>
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0 transition-transform group-open:rotate-180"><path d="m6 9 6 6 6-6" /></svg>
        </summary>
        <div className="absolute top-[68px] left-0 mt-1 w-full rounded-md border border-neutral-200 bg-white p-1 shadow-lg">
          <fieldset>
            <legend className="sr-only">Choose a plan</legend>
            <label className="flex cursor-pointer items-center justify-between gap-3 rounded-md px-3 py-2 font-medium text-neutral-900 transition-colors hover:bg-neutral-100 has-[:checked]:font-semibold has-[:focus-visible]:outline-2 has-[:focus-visible]:-outline-offset-2 has-[:focus-visible]:outline-neutral-900">
              <input id="dropdowns-select-descriptions-individual" type="radio" aria-labelledby="dropdowns-select-descriptions-individual-title" name="dropdowns-select-descriptions" aria-describedby="dropdowns-select-descriptions-individual-description" defaultChecked className="peer sr-only focus-visible:outline-hidden" />
              <span>
                <span id="dropdowns-select-descriptions-individual-title" className="block text-sm">Individual</span>
                <span id="dropdowns-select-descriptions-individual-description" className="block text-xs font-normal text-neutral-500">For one person</span>
              </span>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0 opacity-0 peer-checked:opacity-100"><path d="m5 12 4 4L19 6" /></svg>
            </label>
            <label className="flex cursor-pointer items-center justify-between gap-3 rounded-md px-3 py-2 font-medium text-neutral-900 transition-colors hover:bg-neutral-100 has-[:checked]:font-semibold has-[:focus-visible]:outline-2 has-[:focus-visible]:-outline-offset-2 has-[:focus-visible]:outline-neutral-900">
              <input id="dropdowns-select-descriptions-team" type="radio" aria-labelledby="dropdowns-select-descriptions-team-title" name="dropdowns-select-descriptions" aria-describedby="dropdowns-select-descriptions-team-description" className="peer sr-only focus-visible:outline-hidden" />
              <span>
                <span id="dropdowns-select-descriptions-team-title" className="block text-sm">Team</span>
                <span id="dropdowns-select-descriptions-team-description" className="block text-xs font-normal text-neutral-500">For shared access</span>
              </span>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0 opacity-0 peer-checked:opacity-100"><path d="m5 12 4 4L19 6" /></svg>
            </label>
            <label className="flex cursor-not-allowed items-center justify-between gap-3 rounded-md px-3 py-2 font-medium text-neutral-600 opacity-50">
              <input id="dropdowns-select-descriptions-enterprise" type="radio" aria-labelledby="dropdowns-select-descriptions-enterprise-title" name="dropdowns-select-descriptions" aria-describedby="dropdowns-select-descriptions-enterprise-description" disabled className="peer sr-only focus-visible:outline-hidden" />
              <span>
                <span id="dropdowns-select-descriptions-enterprise-title" className="block text-sm">Enterprise</span>
                <span id="dropdowns-select-descriptions-enterprise-description" className="block text-xs font-normal text-neutral-500">For advanced support</span>
              </span>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0 opacity-0 peer-checked:opacity-100"><path d="m5 12 4 4L19 6" /></svg>
            </label>
          </fieldset>
        </div>
      </details>
    </div>
  )
}
