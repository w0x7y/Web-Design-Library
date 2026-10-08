export default function ButtonsMinimal() {
  return (
    <div className="flex flex-col gap-6">
      {/* Small */}
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          className="inline-flex h-8 items-center justify-center gap-1.5 rounded-md bg-zinc-950 px-3 text-[0.8125rem] font-medium text-white shadow-xs transition-colors hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
        >
          Publish
        </button>
        <button
          type="button"
          className="inline-flex h-8 items-center justify-center gap-1.5 rounded-md border border-zinc-200 bg-white px-3 text-[0.8125rem] font-medium text-zinc-950 shadow-xs transition-colors hover:border-zinc-300 hover:bg-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
        >
          Save draft
        </button>
        <button
          type="button"
          className="inline-flex h-8 items-center justify-center gap-1.5 rounded-md px-3 text-[0.8125rem] font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
        >
          Discard
        </button>
        <button
          type="button"
          aria-label="More options"
          className="inline-flex size-8 items-center justify-center rounded-md border border-zinc-200 bg-white text-zinc-600 shadow-xs transition-colors hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
        >
          <svg aria-hidden="true" viewBox="0 0 16 16" fill="currentColor" className="size-4">
            <circle cx="3.5" cy="8" r="1.25" />
            <circle cx="8" cy="8" r="1.25" />
            <circle cx="12.5" cy="8" r="1.25" />
          </svg>
        </button>
        <button
          type="button"
          disabled
          className="inline-flex h-8 items-center justify-center gap-1.5 rounded-md cursor-wait bg-zinc-800 px-3 text-[0.8125rem] font-medium text-white shadow-xs"
        >
          <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" className="size-3.5 animate-spin">
            <circle cx="8" cy="8" r="6" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2" />
            <path d="M14 8a6 6 0 0 0-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          Publishing…
        </button>
      </div>
      {/* Medium */}
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          className="inline-flex h-9 items-center justify-center gap-2 rounded-lg bg-zinc-950 px-4 text-sm font-medium text-white shadow-xs transition-colors hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
        >
          Publish
        </button>
        <button
          type="button"
          className="inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 text-sm font-medium text-zinc-950 shadow-xs transition-colors hover:border-zinc-300 hover:bg-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
        >
          Save draft
        </button>
        <button
          type="button"
          className="inline-flex h-9 items-center justify-center gap-2 rounded-lg px-4 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
        >
          Discard
        </button>
        <button
          type="button"
          aria-label="More options"
          className="inline-flex size-9 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-600 shadow-xs transition-colors hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
        >
          <svg aria-hidden="true" viewBox="0 0 16 16" fill="currentColor" className="size-4">
            <circle cx="3.5" cy="8" r="1.25" />
            <circle cx="8" cy="8" r="1.25" />
            <circle cx="12.5" cy="8" r="1.25" />
          </svg>
        </button>
        <button
          type="button"
          disabled
          className="inline-flex h-9 items-center justify-center gap-2 rounded-lg cursor-wait bg-zinc-800 px-4 text-sm font-medium text-white shadow-xs"
        >
          <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" className="size-4 animate-spin">
            <circle cx="8" cy="8" r="6" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2" />
            <path d="M14 8a6 6 0 0 0-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          Publishing…
        </button>
      </div>
      {/* Large */}
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-[0.625rem] bg-zinc-950 px-5 text-[0.9375rem] font-medium text-white shadow-xs transition-colors hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
        >
          Publish
        </button>
        <button
          type="button"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-[0.625rem] border border-zinc-200 bg-white px-5 text-[0.9375rem] font-medium text-zinc-950 shadow-xs transition-colors hover:border-zinc-300 hover:bg-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
        >
          Save draft
        </button>
        <button
          type="button"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-[0.625rem] px-5 text-[0.9375rem] font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
        >
          Discard
        </button>
        <button
          type="button"
          aria-label="More options"
          className="inline-flex size-11 items-center justify-center rounded-[0.625rem] border border-zinc-200 bg-white text-zinc-600 shadow-xs transition-colors hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
        >
          <svg aria-hidden="true" viewBox="0 0 16 16" fill="currentColor" className="size-5">
            <circle cx="3.5" cy="8" r="1.25" />
            <circle cx="8" cy="8" r="1.25" />
            <circle cx="12.5" cy="8" r="1.25" />
          </svg>
        </button>
        <button
          type="button"
          disabled
          className="inline-flex h-11 items-center justify-center gap-2 rounded-[0.625rem] cursor-wait bg-zinc-800 px-5 text-[0.9375rem] font-medium text-white shadow-xs"
        >
          <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" className="size-4.5 animate-spin">
            <circle cx="8" cy="8" r="6" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2" />
            <path d="M14 8a6 6 0 0 0-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          Publishing…
        </button>
      </div>
    </div>
  )
}
