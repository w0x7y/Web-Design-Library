// Fonts: IBM Plex Sans (https://fonts.google.com/specimen/IBM+Plex+Sans)
export default function ButtonsPeatFieldwork() {
  return (
    <section
      aria-label="Moorback peat restoration fieldwork actions"
      className="rounded-lg border border-slate-300 bg-white text-slate-900 w-72 sm:w-[24rem] font-['IBM_Plex_Sans',ui-sans-serif,system-ui,sans-serif]"
    >
      <div className="flex items-center justify-between border-b border-slate-300 px-5 py-3">
        <p className="text-sm font-semibold text-emerald-900">Moorback Project</p>
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-5 text-emerald-900"
        >
          <path d="M2 12h16M2 15h16M2 18h16M10 12V5m0 4C5 9 4 5 4 3c4 0 6 2 6 6Zm0-2c0-4 3-5 6-5 0 3-2 5-6 5Z" />
        </svg>
      </div>
      <div className="p-5">
        <p className="text-xs font-medium text-slate-600">Peat restoration site</p>
        <h2 className="mt-1 text-2xl font-semibold">Moor plot P-18</h2>
        <p className="mt-1 text-xs text-slate-600">Drain blocking + water-level checks</p>
        <button
          type="button"
          className="mt-5 flex h-11 w-full items-center justify-center rounded-md bg-emerald-900 px-3 text-sm font-semibold text-white hover:bg-emerald-800 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-900"
        >Plan a field visit</button>
        <div className="mt-3 flex">
          <button
            type="button"
            className="h-10 flex-1 rounded-l-md border border-slate-500 text-xs font-medium hover:bg-slate-100 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-900"
          >Print plot map</button>
          <button
            type="button"
            className="h-10 flex-1 rounded-r-md border-y border-r border-slate-500 text-xs font-medium hover:bg-slate-100 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-900"
          >Contact ranger</button>
        </div>
        <p className="mt-3 text-xs text-slate-600">Bring boots and the plot survey sheet.</p>
      </div>
    </section>
  )
}
