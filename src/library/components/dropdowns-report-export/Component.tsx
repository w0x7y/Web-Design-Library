export default function DropdownsReportExport() {
  return (
    <details
      open
      className="group w-72 border-2 border-black bg-white p-4 text-black"
    >
      <summary className="flex h-11 cursor-pointer list-none items-center justify-between gap-3 border-2 border-black bg-lime-300 px-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 [&::-webkit-details-marker]:hidden">
        <span className="text-sm font-black uppercase">Export report</span>
        <span
          aria-hidden="true"
          className="font-mono text-lg group-open:rotate-180"
        >
          ↓
        </span>
      </summary>
      <p className="mt-4 font-mono text-[9px] uppercase">
        Q3 performance / 2026
      </p>
      <div className="mt-3 border-t-2 border-black">
        <button
          type="button"
          className="flex h-11 w-full items-center justify-between border-b border-black px-2 text-xs hover:bg-lime-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
        >
          <span className="font-mono font-bold">.PDF</span>
          <span className="flex items-center gap-2">
            Print-ready document
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="size-3 shrink-0"
            >
              <path d="M4 12 12 4M4 4h8v8" />
            </svg>
          </span>
        </button>
        <button
          type="button"
          className="flex h-11 w-full items-center justify-between border-b border-black px-2 text-xs hover:bg-lime-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
        >
          <span className="font-mono font-bold">.CSV</span>
          <span className="flex items-center gap-2">
            Spreadsheet data
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="size-3 shrink-0"
            >
              <path d="M4 12 12 4M4 4h8v8" />
            </svg>
          </span>
        </button>
        <button
          type="button"
          className="flex h-11 w-full items-center justify-between border-b-2 border-black px-2 text-xs hover:bg-lime-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
        >
          <span className="font-mono font-bold">.PNG</span>
          <span className="flex items-center gap-2">
            Presentation image
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="size-3 shrink-0"
            >
              <path d="M4 12 12 4M4 4h8v8" />
            </svg>
          </span>
        </button>
      </div>
      <label className="mt-4 flex cursor-pointer items-center gap-2.5 text-[10px]">
        <input
          type="checkbox"
          name="dropdowns-report-export-source"
          className="size-4 shrink-0 accent-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
        />
        Include source data in download
      </label>
      <p className="mt-3 font-mono text-[9px] text-stone-600">
        Last generated: 10 OCT 2026
      </p>
    </details>
  )
}
