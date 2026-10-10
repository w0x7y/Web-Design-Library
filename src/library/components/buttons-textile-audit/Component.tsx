// Fonts: DM Sans (https://fonts.google.com/specimen/DM+Sans)
export default function ButtonsTextileAudit() {
  return (
    <section
      aria-label="Selvedge Check textile certification actions"
      className="rounded-xl bg-neutral-900 p-5 text-neutral-100 w-72 sm:w-[24rem] font-['DM_Sans',ui-sans-serif,system-ui,sans-serif]"
    >
      <p className="text-xs font-semibold tracking-wider text-emerald-200 uppercase">Selvedge Check</p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight">Trace every thread.</h2>
      <div className="mt-4 flex items-center justify-between border-y border-neutral-500 py-2 text-xs text-neutral-300">
        <span>SCT-108 · Cotton twill</span>
        <span className="font-medium text-emerald-200">Ready</span>
      </div>
      <button
        type="button"
        className="mt-4 flex h-11 w-full items-center justify-between rounded-md bg-emerald-200 px-3 text-sm font-semibold text-neutral-950 hover:bg-emerald-100 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200"
      >
        <span>Start supplier audit</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4"
        >
          <path d="M3 8h10M9 4l4 4-4 4" />
        </svg>
      </button>
      <details className="mt-3">
        <summary
          className="flex h-10 items-center justify-between rounded-md px-1 text-xs hover:bg-neutral-800 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200"
        >
          <span>Supporting documents</span>
          <span aria-label="2 documents" className="rounded border border-neutral-500 px-2 py-0.5 text-emerald-200">2</span>
        </summary>
        <ul role="list" className="flex flex-col gap-2 border-t border-neutral-500 pt-3 pb-1">
          <li>
            <a
              href="#fibre-declaration"
              className="text-xs text-emerald-200 underline underline-offset-4 hover:text-white cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200"
            >Fibre declaration.pdf</a>
          </li>
          <li>
            <a
              href="#mill-certificate"
              className="text-xs text-emerald-200 underline underline-offset-4 hover:text-white cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200"
            >Mill certificate.pdf</a>
          </li>
        </ul>
      </details>
    </section>
  )
}
