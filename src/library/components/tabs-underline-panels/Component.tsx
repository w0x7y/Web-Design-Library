export default function TabsUnderlinePanels() {
  return (
    <div className="group w-72 bg-white text-neutral-900 sm:w-[28rem]">
      <div role="radiogroup" aria-label="Content view" className="flex border-b border-neutral-200 sm:gap-6">
        <label id="tabs-underline-panels-overview-label" className="-mb-px flex h-10 flex-1 cursor-pointer items-center justify-center border-b-2 border-transparent px-1 text-sm font-medium text-neutral-500 transition-colors hover:border-neutral-300 hover:text-neutral-700 has-[:checked]:border-neutral-900 has-[:checked]:text-neutral-900 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900 sm:flex-none sm:px-0">
          <input id="tabs-underline-panels-overview" type="radio" name="tabs-underline-panels" aria-controls="tabs-underline-panels-overview-panel" defaultChecked className="sr-only focus-visible:outline-hidden" />
          Overview
        </label>
        <label id="tabs-underline-panels-details-label" className="-mb-px flex h-10 flex-1 cursor-pointer items-center justify-center border-b-2 border-transparent px-1 text-sm font-medium text-neutral-500 transition-colors hover:border-neutral-300 hover:text-neutral-700 has-[:checked]:border-neutral-900 has-[:checked]:text-neutral-900 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900 sm:flex-none sm:px-0">
          <input id="tabs-underline-panels-details" type="radio" name="tabs-underline-panels" aria-controls="tabs-underline-panels-details-panel" className="sr-only focus-visible:outline-hidden" />
          Details
        </label>
        <label id="tabs-underline-panels-activity-label" className="-mb-px flex h-10 flex-1 cursor-pointer items-center justify-center border-b-2 border-transparent px-1 text-sm font-medium text-neutral-500 transition-colors hover:border-neutral-300 hover:text-neutral-700 has-[:checked]:border-neutral-900 has-[:checked]:text-neutral-900 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900 sm:flex-none sm:px-0">
          <input id="tabs-underline-panels-activity" type="radio" name="tabs-underline-panels" aria-controls="tabs-underline-panels-activity-panel" className="sr-only focus-visible:outline-hidden" />
          Activity
        </label>
      </div>
      <section id="tabs-underline-panels-overview-panel" aria-labelledby="tabs-underline-panels-overview-label" className="mt-4 hidden group-has-[#tabs-underline-panels-overview:checked]:block">
        <h2 className="text-base font-semibold">Panel heading</h2>
        <p className="mt-2 text-sm text-pretty text-neutral-600">Describe the selected view and the information readers should notice first.</p>
        <dl className="mt-4 text-sm">
          <div className="flex justify-between gap-4 border-b border-neutral-200 py-2 last:border-b-0">
            <dt className="text-neutral-500">Status</dt>
            <dd className="font-medium text-neutral-900">Active</dd>
          </div>
          <div className="flex justify-between gap-4 border-b border-neutral-200 py-2 last:border-b-0">
            <dt className="text-neutral-500">Items</dt>
            <dd className="font-medium text-neutral-900">24</dd>
          </div>
          <div className="flex justify-between gap-4 border-b border-neutral-200 py-2 last:border-b-0">
            <dt className="text-neutral-500">Updated</dt>
            <dd className="font-medium text-neutral-900">Mar 14</dd>
          </div>
        </dl>
      </section>
      <section id="tabs-underline-panels-details-panel" aria-labelledby="tabs-underline-panels-details-label" className="mt-4 hidden group-has-[#tabs-underline-panels-details:checked]:block">
        <h2 className="text-base font-semibold">Detail heading</h2>
        <p className="mt-2 text-sm text-pretty text-neutral-600">Explain the scope of these details and how to interpret the values below.</p>
        <dl className="mt-4 text-sm">
          <div className="flex justify-between gap-4 border-b border-neutral-200 py-2 last:border-b-0">
            <dt className="text-neutral-500">Owner</dt>
            <dd className="font-medium text-neutral-900">Alex Rivera</dd>
          </div>
          <div className="flex justify-between gap-4 border-b border-neutral-200 py-2 last:border-b-0">
            <dt className="text-neutral-500">Access</dt>
            <dd className="font-medium text-neutral-900">Shared</dd>
          </div>
          <div className="flex justify-between gap-4 border-b border-neutral-200 py-2 last:border-b-0">
            <dt className="text-neutral-500">Created</dt>
            <dd className="font-medium text-neutral-900">Mar 10</dd>
          </div>
        </dl>
      </section>
      <section id="tabs-underline-panels-activity-panel" aria-labelledby="tabs-underline-panels-activity-label" className="mt-4 hidden group-has-[#tabs-underline-panels-activity:checked]:block">
        <h2 className="text-base font-semibold">Activity heading</h2>
        <p className="mt-2 text-sm text-pretty text-neutral-600">Summarize recent changes and give each entry a clear label and value.</p>
        <dl className="mt-4 text-sm">
          <div className="flex justify-between gap-4 border-b border-neutral-200 py-2 last:border-b-0">
            <dt className="text-neutral-500">Added</dt>
            <dd className="font-medium text-neutral-900">12 items</dd>
          </div>
          <div className="flex justify-between gap-4 border-b border-neutral-200 py-2 last:border-b-0">
            <dt className="text-neutral-500">Reviewed</dt>
            <dd className="font-medium text-neutral-900">8 items</dd>
          </div>
          <div className="flex justify-between gap-4 border-b border-neutral-200 py-2 last:border-b-0">
            <dt className="text-neutral-500">Pending</dt>
            <dd className="font-medium text-neutral-900">4 items</dd>
          </div>
        </dl>
      </section>
    </div>
  )
}
