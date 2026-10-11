export default function StatCardBarChart() {
  return (
    <article className="w-72 rounded-lg border border-neutral-200 bg-white p-6 text-neutral-900 sm:w-80">
      <dl>
        <dt className="flex items-center justify-between gap-3 text-sm font-medium text-neutral-500"><span>Metric label</span><span className="text-xs font-normal">Jun</span></dt>
        <dd className="mt-3 text-3xl font-semibold tracking-tight tabular-nums">48,290</dd>
      </dl>
      <p className="mt-2 flex items-center gap-1 text-xs text-neutral-600"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-3 shrink-0"><path d="m7 10 5-5 5 5M12 5v14" /></svg>Up 25.0% vs May</p>
      <figure className="mt-6">
        <div aria-hidden="true" className="grid grid-cols-6 gap-2">
          <div className="text-center"><div className="flex h-20 items-end"><div className="h-8 w-full rounded-t-md bg-neutral-200"></div></div><p className="mt-2 text-xs text-neutral-500">Jan</p></div>
          <div className="text-center"><div className="flex h-20 items-end"><div className="h-10 w-full rounded-t-md bg-neutral-200"></div></div><p className="mt-2 text-xs text-neutral-500">Feb</p></div>
          <div className="text-center"><div className="flex h-20 items-end"><div className="h-14 w-full rounded-t-md bg-neutral-200"></div></div><p className="mt-2 text-xs text-neutral-500">Mar</p></div>
          <div className="text-center"><div className="flex h-20 items-end"><div className="h-12 w-full rounded-t-md bg-neutral-200"></div></div><p className="mt-2 text-xs text-neutral-500">Apr</p></div>
          <div className="text-center"><div className="flex h-20 items-end"><div className="h-16 w-full rounded-t-md bg-neutral-200"></div></div><p className="mt-2 text-xs text-neutral-500">May</p></div>
          <div className="text-center"><div className="flex h-20 items-end"><div className="h-20 w-full rounded-t-md bg-neutral-900"></div></div><p className="mt-2 text-xs text-neutral-500">Jun</p></div>
        </div>
        <figcaption className="sr-only">Monthly totals: Jan 19,316; Feb 24,145; Mar 33,803; Apr 28,974; May 38,632; Jun 48,290.</figcaption>
      </figure>
      <p className="mt-5 border-t border-neutral-200 pt-3 text-xs text-neutral-500">Chart note: monthly totals</p>
    </article>
  )
}

