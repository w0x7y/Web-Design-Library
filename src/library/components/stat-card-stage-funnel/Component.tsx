export default function StatCardStageFunnel() {
  return (
    <article className="w-72 rounded-lg border border-neutral-200 bg-white p-6 text-neutral-900 sm:w-80">
      <h3 className="text-sm font-medium text-neutral-500">Conversion through stages</h3>
      <p className="mt-2 text-3xl font-semibold tracking-tight">18.5%<span className="ml-2 text-xs font-normal text-neutral-500">overall</span></p>
      <ol role="list" className="mt-6 grid gap-4">
        <li>
          <div className="flex justify-between gap-3 text-xs">
            <span className="text-neutral-600">Started</span>
            <span className="font-semibold tabular-nums">1,284</span>
          </div>
          <div aria-hidden="true" className="mt-2 h-3 rounded-full border border-neutral-200 bg-neutral-100">
            <div className="h-full w-full rounded-full bg-neutral-900"></div>
          </div>
        </li>
        <li>
          <div className="flex justify-between gap-3 text-xs">
            <span className="text-neutral-600">Qualified</span>
            <span className="font-semibold tabular-nums">642</span>
          </div>
          <div aria-hidden="true" className="mt-2 h-3 rounded-full border border-neutral-200 bg-neutral-100">
            <div className="h-full w-1/2 rounded-full bg-neutral-900"></div>
          </div>
        </li>
        <li>
          <div className="flex justify-between gap-3 text-xs">
            <span className="text-neutral-600">Completed</span>
            <span className="font-semibold tabular-nums">238</span>
          </div>
          <div aria-hidden="true" className="mt-2 h-3 rounded-full border border-neutral-200 bg-neutral-100">
            <div className="h-full w-[18.5%] rounded-full bg-neutral-900"></div>
          </div>
        </li>
      </ol>
      <p className="mt-5 text-xs text-neutral-500">Three sequential stages in the same period</p>
    </article>
  )
}
