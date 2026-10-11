export default function StatCardFigureDelta() {
  return (
    <article className="w-72 rounded-lg border border-neutral-200 bg-white p-6 text-neutral-900 sm:w-80">
      <dl>
        <dt className="text-sm font-medium text-neutral-500">Metric label</dt>
        <dd className="mt-2 text-4xl font-semibold tracking-tight tabular-nums">$48,290</dd>
      </dl>
      <p className="mt-3 flex flex-wrap items-center gap-2 text-xs text-neutral-500">
        <span className="inline-flex items-center gap-1 rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium text-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-3 shrink-0"><path d="m7 10 5-5 5 5M12 5v14" /></svg>Up 12.4%</span>
        <span>vs last period</span>
      </p>
      <footer className="mt-5 border-t border-neutral-200 pt-4">
        <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">View report<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="M5 12h14m-5-5 5 5-5 5" /></svg></a>
      </footer>
    </article>
  )
}

