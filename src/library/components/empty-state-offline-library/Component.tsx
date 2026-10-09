export default function EmptyStateOfflineLibrary() {
  return (
    <section className="w-72 rounded-xl bg-slate-950 p-6 text-slate-100">
      <div className="flex items-center gap-3 text-cyan-300">
        <svg
          className="size-12"
          viewBox="0 0 48 48"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M8 18a24 24 0 0 1 32 0M14 26a15 15 0 0 1 20 0M20 33a6 6 0 0 1 8 0"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="24" cy="40" r="2" fill="currentColor" />
        </svg>
        <p className="font-mono text-[10px] tracking-widest">
          CONNECTION PAUSED
        </p>
      </div>
      <h2 className="mt-5 text-xl font-semibold tracking-tight">
        Your saved work is here.
      </h2>
      <p className="mt-3 text-sm leading-6 text-slate-400">
        We can’t reach the server right now. You can still open the items you
        saved.
      </p>
      <div className="mt-6 grid gap-3">
        <button
          className="rounded-lg bg-cyan-200 px-4 py-3 text-sm font-semibold text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          type="button"
        >
          Open saved items
        </button>
        <button
          className="rounded-lg border border-slate-600 px-4 py-2.5 text-xs font-medium text-slate-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          type="button"
        >
          Try again
        </button>
      </div>
    </section>
  )
}
