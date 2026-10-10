export default function EmptyStateFirstRunChecklist() {
  return (
    <div className="w-72 rounded-lg border border-neutral-200 bg-white p-5 text-neutral-900 sm:w-96">
      <p className="text-sm font-medium text-neutral-500">Get started · 1 of 3 done</p>
      <div role="progressbar" aria-label="Setup completion" aria-valuemin={0} aria-valuemax={3} aria-valuenow={1} aria-valuetext="1 of 3 steps completed" className="mt-2 h-1 overflow-hidden rounded-full bg-neutral-200 forced-colors:outline forced-colors:outline-[CanvasText]">
        <div aria-hidden="true" className="h-full w-1/3 bg-neutral-900 forced-colors:bg-[CanvasText]" />
      </div>
      <h2 className="mt-4 text-base font-semibold">Title for the setup steps</h2>
      <p className="mt-1 text-sm text-neutral-600">A short guide to setup.</p>
      <ol role="list" className="mt-4">
        <li>
          <a href="#" className="flex items-center gap-2 rounded-md p-2 text-sm transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
            <span aria-hidden="true" className="flex size-6 shrink-0 items-center justify-center rounded-full border border-neutral-300 text-xs font-medium">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-3.5">
                <path d="m5 12 4 4L19 6" />
              </svg>
            </span>
            <span className="min-w-0 flex-1">Profile details</span>
            <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">Done</span>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0 text-neutral-400">
              <path d="m9 5 7 7-7 7" />
            </svg>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center gap-2 rounded-md p-2 text-sm transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
            <span aria-hidden="true" className="flex size-6 shrink-0 items-center justify-center rounded-full border border-neutral-300 text-xs font-medium">2</span>
            <span className="min-w-0 flex-1">Add first item</span>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0 text-neutral-400">
              <path d="m9 5 7 7-7 7" />
            </svg>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center gap-2 rounded-md p-2 text-sm transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
            <span aria-hidden="true" className="flex size-6 shrink-0 items-center justify-center rounded-full border border-neutral-300 text-xs font-medium">3</span>
            <span className="min-w-0 flex-1">Invite members</span>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0 text-neutral-400">
              <path d="m9 5 7 7-7 7" />
            </svg>
          </a>
        </li>
      </ol>
    </div>
  )
}
