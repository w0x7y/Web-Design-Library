export default function EmptyStateMediaSide() {
  return (
    <div className="flex w-72 flex-col rounded-lg border border-neutral-200 bg-white p-6 text-neutral-900 sm:w-[38rem] sm:flex-row sm:items-center sm:gap-7 sm:p-8">
      <div role="img" aria-label="Image placeholder: illustration of the next step" className="mx-auto flex aspect-square h-32 w-32 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-400 sm:mx-0 sm:size-40">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-5-5L5 21" />
        </svg>
      </div>
      <div className="mt-2 min-w-0 flex-1 text-center sm:mt-0 sm:text-left">
        <h2 className="text-base font-semibold">Title for the empty space</h2>
        <p className="mt-1 text-sm text-neutral-600">A line about the next step.</p>
        <div className="mt-2 flex flex-col items-center gap-2 sm:mt-4 sm:flex-row sm:flex-wrap sm:gap-3">
          <a href="#" className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Create item</a>
          <a href="#" className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Learn more</a>
        </div>
      </div>
    </div>
  )
}
