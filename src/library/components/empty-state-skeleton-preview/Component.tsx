export default function EmptyStateSkeletonPreview() {
  return (
    <div className="w-72 rounded-lg border border-neutral-200 bg-white p-6 text-neutral-900 sm:w-96">
      <div aria-hidden="true" className="grid gap-2">
        <div className="flex items-center gap-3">
          <span className="size-8 shrink-0 rounded-md bg-neutral-100" />
          <div className="flex-1 space-y-2">
            <div className="h-2 w-3/5 rounded-full bg-neutral-100" />
            <div className="h-2 w-2/5 rounded-full bg-neutral-100" />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="size-8 shrink-0 rounded-md bg-neutral-100" />
          <div className="flex-1 space-y-2">
            <div className="h-2 w-3/5 rounded-full bg-neutral-100" />
            <div className="h-2 w-2/5 rounded-full bg-neutral-100" />
          </div>
        </div>
        <div className="flex h-8 items-center justify-center rounded-md border border-dashed border-neutral-300 text-neutral-400">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </div>
      </div>
      <h2 className="mt-4 text-base font-semibold">Title for the future list</h2>
      <p className="mt-2 text-sm text-pretty text-neutral-600">Explain what these rows will hold once an item is added.</p>
      <a href="#" className="mt-5 w-full inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Add first item</a>
    </div>
  )
}
