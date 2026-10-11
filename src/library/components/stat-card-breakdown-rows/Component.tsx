export default function StatCardBreakdownRows() {
  return (
    <article className="w-72 rounded-lg border border-neutral-200 bg-white p-6 text-neutral-900 sm:w-80">
      <header className="flex items-center justify-between gap-4">
        <dl><dt className="text-sm font-medium text-neutral-500">Metric label</dt><dd className="mt-1 text-4xl font-semibold tracking-tight tabular-nums">1,284</dd></dl>
        <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5"><path d="M4 6h16M4 12h10M4 18h6" /></svg></span>
      </header>
      <ul role="list" className="mt-2 grid gap-2">
        <li><p className="flex justify-between gap-3 text-xs text-neutral-600"><span>First group</span><span className="font-medium tabular-nums text-neutral-900">642 · 50%</span></p><div aria-hidden="true" className="mt-1 h-1.5 overflow-hidden rounded-full bg-neutral-100"><div className="h-full w-1/2 rounded-full bg-neutral-900"></div></div></li>
        <li><p className="flex justify-between gap-3 text-xs text-neutral-600"><span>Second group</span><span className="font-medium tabular-nums text-neutral-900">385 · 30%</span></p><div aria-hidden="true" className="mt-1 h-1.5 overflow-hidden rounded-full bg-neutral-100"><div className="h-full w-[30%] rounded-full bg-neutral-900"></div></div></li>
        <li><p className="flex justify-between gap-3 text-xs text-neutral-600"><span>Remaining group</span><span className="font-medium tabular-nums text-neutral-900">257 · 20%</span></p><div aria-hidden="true" className="mt-1 h-1.5 overflow-hidden rounded-full bg-neutral-100"><div className="h-full w-1/5 rounded-full bg-neutral-900"></div></div></li>
      </ul>
      <details className="group mt-3 border-t border-neutral-200 pt-2">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">How this is counted<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0 transition-transform group-open:rotate-180"><path d="m6 9 6 6 6-6" /></svg></summary>
        <p className="mt-2 text-xs text-neutral-600">Each item is counted once.</p>
      </details>
    </article>
  )
}

