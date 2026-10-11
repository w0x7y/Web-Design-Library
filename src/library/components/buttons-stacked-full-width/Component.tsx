export default function ButtonsStackedFullWidth() {
  return (
    <div className="w-72 rounded-lg border border-neutral-200 bg-white p-5 text-neutral-900 sm:w-80">
      <h2 className="text-base font-semibold">Action group title</h2>
      <p className="mt-1 text-sm text-neutral-500">Short supporting context</p>
      <div className="mt-4 grid gap-2">
        <button type="button" className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Primary action</button>
        <div className="grid grid-cols-2 gap-2">
          <button type="button" className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="M12 5v14M5 12h14" /></svg>Add</button>
          <button type="button" className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="M12 16V3m-4 4 4-4 4 4M5 12v8h14v-8" /></svg>Export</button>
        </div>
      </div>
      <div className="mt-4 text-center">
        <a href="#" className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Tertiary action</a>
      </div>
      <p className="mt-3 text-center text-xs text-neutral-500">Short action guidance</p>
    </div>
  )
}

