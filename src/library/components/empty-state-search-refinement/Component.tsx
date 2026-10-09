export default function EmptyStateSearchRefinement() {
  return (
    <section className="w-72 bg-slate-50 p-6 text-slate-950">
      <div className="flex items-center gap-4">
        <span className="text-slate-500">
          <svg
            className="size-12"
            viewBox="0 0 48 48"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="21"
              cy="21"
              r="12"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path d="m30 30 11 11" stroke="currentColor" strokeWidth="2" />
          </svg>
        </span>
        <span className="rounded-full border border-slate-300 px-3 py-1 text-xs text-slate-600">
          0 results
        </span>
      </div>
      <h2 className="mt-5 text-lg font-semibold">Nothing for “atlas”.</h2>
      <ul
        className="mt-4 grid gap-2 text-xs leading-5 text-slate-600"
        role="list"
      >
        <li>Check for a spelling mistake.</li>
        <li>Try a broader search term.</li>
        <li>Remove a filter to see more.</li>
      </ul>
      <div className="mt-6 flex flex-wrap gap-3">
        <button
          className="rounded-lg bg-blue-700 px-3 py-2.5 text-xs font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950"
          type="button"
        >
          Clear filters
        </button>
        <a
          className="self-center text-xs font-semibold underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
          href="#"
        >
          Browse all
        </a>
      </div>
    </section>
  )
}
