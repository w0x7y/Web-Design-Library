export default function BadgesGroupedCounters() {
  return (
    <ul className="grid w-72 grid-cols-3 rounded-lg border border-neutral-200 bg-white text-neutral-900 sm:w-[26rem]" role="list" aria-label="Collection totals"><li className="flex flex-col items-center border-r border-neutral-200 p-3 last:border-r-0"><span className="text-xl font-semibold tabular-nums text-neutral-900">48</span>
    <p className="mt-1 text-center text-xs text-neutral-500">All items</p>
    <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium text-neutral-900 mt-2">Total</span></li>
    <li className="flex flex-col items-center border-r border-neutral-200 p-3 last:border-r-0"><span className="text-xl font-semibold tabular-nums text-neutral-900">32</span>
    <p className="mt-1 text-center text-xs text-neutral-500">Ready items</p>
    <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium text-neutral-900 mt-2">Ready</span></li>
    <li className="flex flex-col items-center border-r border-neutral-200 p-3 last:border-r-0"><span className="text-xl font-semibold tabular-nums text-neutral-900">16</span>
    <p className="mt-1 text-center text-xs text-neutral-500">Pending items</p>
    <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium text-neutral-900 mt-2">Pending</span></li></ul>
  )
}
