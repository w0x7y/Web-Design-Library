export default function StatCardJoinedTrio() {
  return (
    <section aria-label="Three metric summary" className="w-72 overflow-hidden rounded-lg border border-neutral-200 bg-white text-neutral-900 md:w-[40rem]">
      <header className="flex items-center justify-between gap-3 border-b border-neutral-200 px-6 py-4">
        <h2 className="text-sm font-medium">Last 7 days</h2>
        <p className="text-xs text-neutral-500">Mar 08 - 14</p>
      </header>
      <ul role="list" className="grid md:grid-cols-3">
        <li className="relative flex items-center justify-between gap-3 px-6 py-4 hover:bg-neutral-50 md:block md:border-t-0 md:p-6">
          <dl><dt><a href="#" className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 after:absolute after:inset-0">Metric one</a></dt><dd className="mt-1 text-3xl font-semibold tracking-tight tabular-nums md:mt-2">1,284</dd></dl>
          <p className="inline-flex shrink-0 items-center gap-1 rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium md:mt-4"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-3 shrink-0"><path d="m7 10 5-5 5 5M12 5v14" /></svg>Up 4.1%</p>
        </li>
        <li className="relative flex items-center justify-between gap-3 border-t border-neutral-200 px-6 py-4 hover:bg-neutral-50 md:block md:border-t-0 md:p-6 md:border-l">
          <dl><dt><a href="#" className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 after:absolute after:inset-0">Metric two</a></dt><dd className="mt-1 text-3xl font-semibold tracking-tight tabular-nums md:mt-2">742</dd></dl>
          <p className="inline-flex shrink-0 items-center gap-1 rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium md:mt-4"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-3 shrink-0"><path d="m7 14 5 5 5-5M12 19V5" /></svg>Down 2%</p>
        </li>
        <li className="relative flex items-center justify-between gap-3 border-t border-neutral-200 px-6 py-4 hover:bg-neutral-50 md:block md:border-t-0 md:p-6 md:border-l">
          <dl><dt><a href="#" className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 after:absolute after:inset-0">Metric three</a></dt><dd className="mt-1 text-3xl font-semibold tracking-tight tabular-nums md:mt-2">98%</dd></dl>
          <p className="inline-flex shrink-0 items-center gap-1 rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium md:mt-4"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-3 shrink-0"><path d="m7 10 5-5 5 5M12 5v14" /></svg>Up 1 point</p>
        </li>
      </ul>
    </section>
  )
}

