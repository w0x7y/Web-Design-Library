export default function StatCardStackedDistribution() {
  return (
    <article className="w-72 rounded-lg border border-neutral-200 bg-white p-6 text-neutral-900 sm:w-80">
      <dl>
        <dt className="flex items-center justify-between gap-3 text-sm font-medium text-neutral-500"><span>Total by category</span><span className="text-xs font-normal">Oct 2026</span></dt>
        <dd className="mt-2 text-3xl font-semibold tracking-tight tabular-nums">1,284<span className="ml-1 text-sm font-normal tracking-normal text-neutral-500">items</span></dd>
      </dl>
      <div aria-hidden="true" className="mt-5 flex h-3 divide-x-2 divide-white overflow-hidden rounded-full forced-colors:border">
        <div className="w-[45%] bg-neutral-900"></div>
        <div className="w-[30%] bg-neutral-600"></div>
        <div className="w-[15%] bg-neutral-400"></div>
        <div className="w-[10%] bg-neutral-300"></div>
      </div>
      <ul role="list" className="mt-4 grid gap-2 text-sm">
        <li className="flex items-center gap-2"><span aria-hidden="true" className="size-2.5 shrink-0 rounded-full bg-neutral-900 forced-colors:border"></span><span className="flex-1 text-neutral-600">First category</span><span className="font-medium tabular-nums">578</span><span className="w-10 text-right text-neutral-500 tabular-nums">45%</span></li>
        <li className="flex items-center gap-2"><span aria-hidden="true" className="size-2.5 shrink-0 rounded-full bg-neutral-600 forced-colors:border"></span><span className="flex-1 text-neutral-600">Second category</span><span className="font-medium tabular-nums">385</span><span className="w-10 text-right text-neutral-500 tabular-nums">30%</span></li>
        <li className="flex items-center gap-2"><span aria-hidden="true" className="size-2.5 shrink-0 rounded-full bg-neutral-400 forced-colors:border"></span><span className="flex-1 text-neutral-600">Third category</span><span className="font-medium tabular-nums">193</span><span className="w-10 text-right text-neutral-500 tabular-nums">15%</span></li>
        <li className="flex items-center gap-2"><span aria-hidden="true" className="size-2.5 shrink-0 rounded-full bg-neutral-300 forced-colors:border"></span><span className="flex-1 text-neutral-600">Other</span><span className="font-medium tabular-nums">128</span><span className="w-10 text-right text-neutral-500 tabular-nums">10%</span></li>
      </ul>
      <p className="mt-4 border-t border-neutral-200 pt-3 text-xs text-neutral-500">Shares round to the nearest whole percent.</p>
    </article>
  )
}
