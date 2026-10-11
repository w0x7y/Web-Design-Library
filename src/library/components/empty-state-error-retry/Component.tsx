export default function EmptyStateErrorRetry() {
  return (
    <div className="w-72 rounded-lg border border-neutral-200 bg-white p-6 text-neutral-900 sm:w-96">
      <p className="flex items-center gap-2 text-sm font-medium text-neutral-500">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 text-neutral-900"><path d="M12 3 2 21h20L12 3M12 9v5M12 17h.01" /></svg>
        Couldn&apos;t load
      </p>
      <h2 className="mt-4 text-base font-semibold">Title for the load error</h2>
      <p className="mt-2 text-sm text-pretty text-neutral-600">Explain the problem and how a retry may help.</p>
      <div className="mt-5 grid grid-cols-2 gap-2">
        <button type="button" className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Try again</button>
        <a href="#" className="whitespace-nowrap inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Status page</a>
      </div>
      <details className="mt-4">
        <summary className="cursor-pointer text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Technical details</summary>
        <div className="mt-2 rounded-md bg-neutral-50 p-3 font-mono text-xs text-neutral-600">
          <p>ERROR_503</p>
          <p>
            <time dateTime="2026-10-10T09:41:00Z">2026-10-10 09:41 UTC</time>
          </p>
        </div>
      </details>
    </div>
  )
}
