export default function EmptyStateCenteredIcon() {
  return (
    <div className="w-72 rounded-lg border border-neutral-200 bg-white p-6 text-neutral-900 sm:w-96 text-center">
      <span aria-hidden="true" className="mx-auto flex size-12 items-center justify-center rounded-md bg-neutral-100 text-neutral-900">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
          <path d="M3 7V5h6l2 2h10v13H3V7M12 11v6M9 14h6" />
        </svg>
      </span>
      <h2 className="mt-4 text-base font-semibold">Title for the empty list</h2>
      <p className="mt-2 text-sm text-pretty text-neutral-600">Describe what belongs here and how to begin.</p>
      <div className="mt-5 flex flex-col items-center gap-3">
        <a href="#" className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Create your first item</a>
        <a href="#" className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Import from a file</a>
      </div>
    </div>
  )
}
