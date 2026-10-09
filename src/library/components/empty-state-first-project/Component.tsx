export default function EmptyStateFirstProject() {
  return (
    <section className="w-72 rounded-xl border border-stone-200 bg-white p-6 text-stone-950">
      <div className="flex size-16 items-center justify-center rounded-xl bg-stone-100">
        <svg
          className="size-12"
          viewBox="0 0 48 48"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M6 14h14l4 6h18v20H6V14Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M24 27v8m-4-4h8" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
      <h2 className="mt-5 text-xl font-semibold tracking-tight">
        Every project starts here.
      </h2>
      <p className="mt-3 text-sm leading-6 text-stone-600">
        Give your first idea a place to grow. Add a project, then invite your
        team.
      </p>
      <button
        className="mt-6 w-full rounded-lg bg-stone-950 px-4 py-3 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950"
        type="button"
      >
        Create a project
      </button>
    </section>
  )
}
