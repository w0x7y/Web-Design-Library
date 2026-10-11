export default function StatCardIconInline() {
  return (
    <article className="flex w-72 items-center gap-3 rounded-lg border border-neutral-200 bg-white p-6 text-neutral-900 sm:w-[22rem]">
      <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-900">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5"><path d="M4 19V9m8 10V5m8 14v-7" /></svg>
      </span>
      <dl className="min-w-0 flex-1">
        <dt className="truncate text-sm font-medium text-neutral-500">Metric label</dt>
        <dd className="mt-1 text-2xl font-semibold tracking-tight tabular-nums">1,284</dd>
      </dl>
      <p className="inline-flex shrink-0 items-center gap-1 rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-3 shrink-0"><path d="m7 10 5-5 5 5M12 5v14" /></svg>Up 4.1%</p>
    </article>
  )
}

