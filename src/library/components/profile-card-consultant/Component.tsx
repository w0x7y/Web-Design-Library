export default function ProfileCardConsultant() {
  return (
    <article className="w-72 rounded-2xl border border-stone-200 bg-white p-4 text-stone-950 sm:w-80">
      <div className="flex items-start justify-between gap-3">
        <div
          aria-hidden="true"
          className="flex size-12 items-center justify-center rounded-xl bg-orange-100 text-xl font-semibold text-orange-900"
        >
          AN
        </div>
        <p className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-800">
          <span
            aria-hidden="true"
            className="size-1.5 rounded-full bg-emerald-600"
          />
          Available
        </p>
      </div>
      <h2 className="mt-3 text-xl font-semibold tracking-tight">Amara Nwosu</h2>
      <p className="mt-1 text-xs text-stone-600">
        Independent product strategist
      </p>
      <p className="mt-3 border-l-2 border-orange-400 pl-3 text-sm leading-5 text-stone-700">
        Helping small teams find the next useful thing to build.
      </p>
      <ul
        role="list"
        className="mt-3 flex flex-wrap gap-1.5 text-xs text-stone-700"
      >
        <li className="rounded-md bg-stone-100 px-2 py-1">Discovery</li>
        <li className="rounded-md bg-stone-100 px-2 py-1">Product direction</li>
      </ul>
      <a
        href="#book-amara"
        className="mt-4 flex h-9 items-center justify-between rounded-lg bg-stone-950 px-3 text-sm font-medium text-white hover:bg-stone-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950"
      >
        Book a conversation
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="size-4"
        >
          <path d="M4 10h12m-5-5 5 5-5 5" />
        </svg>
      </a>
    </article>
  )
}
