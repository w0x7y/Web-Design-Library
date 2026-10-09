export default function StatCardCustomerRetention() {
  return (
    <article className="w-72 rounded-xl border border-indigo-200 bg-indigo-50 p-5 text-indigo-950 sm:w-80">
      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-indigo-700">
        Customer success
      </p>
      <h2 className="mt-2 text-sm font-semibold">90-day retention</h2>
      <div className="mt-4 flex items-baseline gap-3">
        <p className="text-4xl font-semibold tracking-tight tabular-nums">
          91.4<span className="text-xl">%</span>
        </p>
        <span className="rounded-full bg-white px-2 py-1 text-[10px] font-semibold text-indigo-800">
          ↑ 3.1 points
        </span>
      </div>
      <dl className="mt-6 space-y-4 text-xs">
        <div className="grid grid-cols-2 gap-x-3">
          <dt>Teams</dt>
          <dd className="text-right font-semibold">96%</dd>
          <dd
            aria-hidden="true"
            className="col-span-2 mt-2 h-1.5 rounded-full bg-indigo-200"
          >
            <div className="h-1.5 w-[96%] rounded-full bg-indigo-700" />
          </dd>
        </div>
        <div className="grid grid-cols-2 gap-x-3">
          <dt>Individuals</dt>
          <dd className="text-right font-semibold">87%</dd>
          <dd
            aria-hidden="true"
            className="col-span-2 mt-2 h-1.5 rounded-full bg-indigo-200"
          >
            <div className="h-1.5 w-[87%] rounded-full bg-indigo-400" />
          </dd>
        </div>
      </dl>
      <p className="mt-5 border-t border-indigo-200 pt-3 text-[11px] leading-5 text-indigo-800">
        Based on 2,840 customers who joined in July. Up from 88.3% in the
        previous cohort.
      </p>
    </article>
  )
}
