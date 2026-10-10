export default function EmptyStatePermission() {
  return (
    <div className="w-72 rounded-lg border border-neutral-200 bg-white p-6 text-left text-neutral-900 sm:w-96">
      <span aria-hidden="true" className="flex size-10 items-center justify-center rounded-md bg-neutral-100 text-neutral-900">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
          <path d="M7 10V7a5 5 0 0 1 10 0v3M5 10h14v11H5V10M12 14v3" />
        </svg>
      </span>
      <h2 className="mt-3 text-base font-semibold">You need access</h2>
      <p className="mt-2 text-sm text-pretty text-neutral-600">Explain who can grant access to this item.</p>
      <div className="mt-4 flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
        <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">AR</span>
        <div className="min-w-0">
          <p className="text-sm font-medium">Alex Rivera</p>
          <p className="text-xs text-neutral-500">Owner</p>
          <p className="break-words text-xs text-neutral-500">name@example.com</p>
        </div>
      </div>
      <a href="#" className="mt-4 w-full inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Request access</a>
      <div className="mt-3 text-sm">
        <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Switch account</a>
      </div>
    </div>
  )
}
