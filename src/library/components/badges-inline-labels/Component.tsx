export default function BadgesInlineLabels() {
  return (
    <div className="w-72 rounded-lg border border-neutral-200 bg-white text-neutral-900 sm:w-[26rem]">
      <div className="p-4">
        <h2 className="flex flex-wrap items-center gap-2 text-base font-semibold">
          Feature name
          <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">Beta</span>
        </h2>
        <p className="mt-1 text-sm text-neutral-600">One sentence that explains what the feature does.</p>
      </div>
      <nav aria-label="Feature sections" className="border-t border-neutral-200 px-4">
        <ul role="list" className="flex flex-wrap gap-x-5">
          <li>
            <a href="#" aria-current="page" className="inline-flex h-11 items-center border-b-2 border-neutral-900 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Overview</a>
          </li>
          <li>
            <a href="#" className="inline-flex h-11 items-center gap-1.5 border-b-2 border-transparent text-sm text-neutral-600 transition-colors hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
              Reports
              <span className="inline-flex items-center rounded-full border border-neutral-900 bg-neutral-900 px-1.5 text-xs font-medium text-white">New</span>
            </a>
          </li>
          <li>
            <a href="#" className="inline-flex h-11 items-center border-b-2 border-transparent text-sm text-neutral-600 transition-colors hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Settings</a>
          </li>
        </ul>
      </nav>
      <div className="flex items-center justify-between gap-3 border-t border-neutral-200 p-4">
        <div className="min-w-0">
          <p className="flex flex-wrap items-center gap-2 text-sm font-medium">
            Option name
            <span className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-700">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-3"><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
              Pro
            </span>
          </p>
          <p className="mt-0.5 text-xs text-neutral-500">Short note on what the plan unlocks</p>
        </div>
        <a href="#" className="shrink-0 text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Upgrade</a>
      </div>
    </div>
  )
}
