export default function ButtonsHierarchy() {
  return (
    <div className="grid w-72 gap-3 text-neutral-900 sm:w-[36rem] sm:grid-cols-3">
      <button type="button" className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Primary action</button>
      <button type="button" className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Secondary action</button>
      <button type="button" className="inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-medium text-neutral-900 underline underline-offset-4 transition-colors hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Tertiary action</button>
      <button type="button" className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5"><path d="M3 6h18M9 6V4h6v2M5 6l1 14h12l1-14M10 10v6M14 10v6" /></svg>
        Delete item
      </button>
      <button type="button" aria-label="More actions" className="inline-flex size-11 items-center justify-center justify-self-center rounded-md border border-neutral-300 bg-white text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5"><circle cx="5" cy="12" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /></svg>
      </button>
      <button type="button" disabled className="inline-flex h-11 cursor-not-allowed items-center justify-center rounded-md bg-neutral-100 px-5 text-sm font-medium text-neutral-600">Unavailable action</button>
      <button type="button" disabled aria-busy="true" className="inline-flex h-11 cursor-wait items-center justify-center gap-2 rounded-md bg-neutral-900 px-5 text-sm font-medium text-white">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="size-5 animate-spin"><path d="M12 3a9 9 0 1 1-9 9" /></svg>
        Loading action
      </button>
    </div>
  )
}
