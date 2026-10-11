export default function StatCardBenchmarkRange() {
  return (
    <article className="w-72 rounded-lg border border-neutral-200 bg-white p-6 text-neutral-900 sm:w-80">
      <h3 className="text-sm font-medium text-neutral-500">Metric against benchmark</h3>
      <p className="mt-2 text-4xl font-semibold tracking-tight tabular-nums">72<span className="ml-2 text-base font-normal text-neutral-600">points</span></p>
      <div role="img" aria-label="Current score 72 on a range from 0 to 100; benchmark 60" className="relative mt-8 h-3 rounded-full border border-neutral-300 bg-neutral-100">
        <span aria-hidden="true" className="absolute inset-y-0 left-0 w-[72%] rounded-full bg-neutral-900"></span>
        <span aria-hidden="true" className="absolute -top-2 left-[60%] h-7 border-l border-neutral-900"></span>
      </div>
      <div className="mt-3 flex justify-between text-xs text-neutral-500">
        <span>0</span>
        <span>100</span>
      </div>
      <dl className="mt-5 grid grid-cols-2 gap-4 border-t border-neutral-200 pt-4">
        <div>
          <dt className="text-xs text-neutral-500">Benchmark</dt>
          <dd className="mt-1 text-sm font-semibold">60 points</dd>
        </div>
        <div>
          <dt className="text-xs text-neutral-500">Above benchmark</dt>
          <dd className="mt-1 text-sm font-semibold">12 points</dd>
        </div>
      </dl>
    </article>
  )
}
