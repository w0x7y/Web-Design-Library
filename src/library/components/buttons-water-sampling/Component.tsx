// Fonts: IBM Plex Sans (https://fonts.google.com/specimen/IBM+Plex+Sans)
export default function ButtonsWaterSampling() {
  return (
    <section
      aria-label="Clearwell water sampling actions"
      className="rounded-lg border border-slate-300 bg-white text-slate-900 w-72 sm:w-[24rem] font-['IBM_Plex_Sans',ui-sans-serif,system-ui,sans-serif]"
    >
      <div className="flex items-center justify-between border-b border-slate-300 px-5 py-3">
        <p className="text-sm font-semibold text-cyan-900">Clearwell</p>
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-5 text-cyan-900"
        >
          <path d="M7 2h6M8 2v6l-4 7a2 2 0 0 0 2 3h8a2 2 0 0 0 2-3l-4-7V2M6 12h8" />
        </svg>
      </div>
      <div className="p-5">
        <p className="text-xs font-medium text-slate-600">Drinking-water panel</p>
        <h2 className="mt-1 text-2xl font-semibold">Sample WS-2048</h2>
        <p className="mt-1 text-xs text-slate-600">Microbiology + dissolved metals</p>
        <button
          type="button"
          className="mt-5 flex h-11 w-full items-center justify-center rounded-md bg-cyan-900 px-3 text-sm font-semibold text-white hover:bg-cyan-800 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-900"
        >Request a sample kit</button>
        <div className="mt-3 flex">
          <button
            type="button"
            className="h-10 flex-1 rounded-l-md border border-slate-500 text-xs font-medium hover:bg-slate-100 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-900"
          >Print bottle label</button>
          <button
            type="button"
            className="h-10 flex-1 rounded-r-md border-y border-r border-slate-500 text-xs font-medium hover:bg-slate-100 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-900"
          >Email the lab</button>
        </div>
        <p className="mt-3 text-xs text-slate-600">Includes bottles and return courier.</p>
      </div>
    </section>
  )
}
