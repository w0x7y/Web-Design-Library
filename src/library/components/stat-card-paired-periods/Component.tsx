export default function StatCardPairedPeriods() {
  return (
    <article className="w-72 rounded-lg border border-neutral-200 bg-white p-6 text-neutral-900 sm:w-96">
      <h3 className="text-sm font-medium text-neutral-500">Metric comparison</h3>
      <dl className="mt-5 grid grid-cols-2 gap-5">
        <div>
          <dt className="text-xs text-neutral-500">Current period</dt>
          <dd className="mt-2 text-3xl font-semibold tracking-tight tabular-nums">1,284</dd>
        </div>
        <div className="border-l border-neutral-200 pl-5">
          <dt className="text-xs text-neutral-500">Previous period</dt>
          <dd className="mt-2 text-3xl font-semibold tracking-tight tabular-nums">1,120</dd>
        </div>
      </dl>
      <div className="mt-6 border-t border-neutral-200 pt-4">
        <p className="text-sm font-semibold">+164 this period</p>
        <p className="mt-1 text-xs text-neutral-500">Compared with the preceding 30 days</p>
      </div>
    </article>
  )
}
