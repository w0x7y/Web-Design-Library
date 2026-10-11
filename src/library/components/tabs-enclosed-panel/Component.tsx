export default function TabsEnclosedPanel() {
  return (
    <div className="group w-72 bg-white text-neutral-900 sm:w-[28rem]">
      <div role="radiogroup" aria-label="Record view" className="flex">
        <label id="tabs-enclosed-panel-overview-label" className="relative -mb-px -ml-px flex h-10 cursor-pointer items-center justify-center rounded-t-md border border-neutral-200 bg-neutral-50 px-4 text-sm text-neutral-600 transition-colors first:ml-0 hover:bg-white hover:text-neutral-900 has-[:checked]:z-10 has-[:checked]:border-b-white has-[:checked]:bg-white has-[:checked]:font-medium has-[:checked]:text-neutral-900 has-[:focus-visible]:z-20 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900 forced-colors:has-[:checked]:border-b-[Canvas]">
          <input id="tabs-enclosed-panel-overview" type="radio" name="tabs-enclosed-panel" aria-controls="tabs-enclosed-panel-overview-panel" defaultChecked className="sr-only focus-visible:outline-hidden" />
          Overview
        </label>
        <label id="tabs-enclosed-panel-details-label" className="relative -mb-px -ml-px flex h-10 cursor-pointer items-center justify-center rounded-t-md border border-neutral-200 bg-neutral-50 px-4 text-sm text-neutral-600 transition-colors first:ml-0 hover:bg-white hover:text-neutral-900 has-[:checked]:z-10 has-[:checked]:border-b-white has-[:checked]:bg-white has-[:checked]:font-medium has-[:checked]:text-neutral-900 has-[:focus-visible]:z-20 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900 forced-colors:has-[:checked]:border-b-[Canvas]">
          <input id="tabs-enclosed-panel-details" type="radio" name="tabs-enclosed-panel" aria-controls="tabs-enclosed-panel-details-panel" className="sr-only focus-visible:outline-hidden" />
          Details
        </label>
        <label id="tabs-enclosed-panel-notes-label" className="relative -mb-px -ml-px flex h-10 cursor-pointer items-center justify-center rounded-t-md border border-neutral-200 bg-neutral-50 px-4 text-sm text-neutral-600 transition-colors first:ml-0 hover:bg-white hover:text-neutral-900 has-[:checked]:z-10 has-[:checked]:border-b-white has-[:checked]:bg-white has-[:checked]:font-medium has-[:checked]:text-neutral-900 has-[:focus-visible]:z-20 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900 forced-colors:has-[:checked]:border-b-[Canvas]">
          <input id="tabs-enclosed-panel-notes" type="radio" name="tabs-enclosed-panel" aria-controls="tabs-enclosed-panel-notes-panel" className="sr-only focus-visible:outline-hidden" />
          Notes
        </label>
      </div>
      <div className="rounded-b-lg rounded-tr-lg border border-neutral-200 bg-white p-4">
        <section id="tabs-enclosed-panel-overview-panel" aria-labelledby="tabs-enclosed-panel-overview-label" className="hidden group-has-[#tabs-enclosed-panel-overview:checked]:block">
          <h2 className="text-base font-semibold">Panel heading</h2>
          <p className="mt-2 text-sm text-pretty text-neutral-600">Describe this content group and the next step readers can take from it.</p>
          <a href="#" className="mt-6 inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Secondary action</a>
        </section>
        <section id="tabs-enclosed-panel-details-panel" aria-labelledby="tabs-enclosed-panel-details-label" className="hidden group-has-[#tabs-enclosed-panel-details:checked]:block">
          <h2 className="text-base font-semibold">Detail heading</h2>
          <p className="mt-2 text-sm text-pretty text-neutral-600">Explain the supporting information and where readers can inspect it more closely.</p>
          <a href="#" className="mt-6 inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Review details</a>
        </section>
        <section id="tabs-enclosed-panel-notes-panel" aria-labelledby="tabs-enclosed-panel-notes-label" className="hidden group-has-[#tabs-enclosed-panel-notes:checked]:block">
          <h2 className="text-base font-semibold">Note heading</h2>
          <p className="mt-2 text-sm text-pretty text-neutral-600">Use a short note to explain the context that belongs with this record.</p>
          <a href="#" className="mt-6 inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">View notes</a>
        </section>
      </div>
    </div>
  )
}
