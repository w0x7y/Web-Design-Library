export default function StatCardProgressTarget() {
  return (
    <article className="w-72 rounded-lg border border-neutral-200 bg-white p-6 text-neutral-900 sm:w-80">
      <dl>
        <dt className="flex items-center justify-between gap-3 text-sm font-medium text-neutral-500"><span>Metric label</span><span className="text-xs font-normal">This month</span></dt>
        <dd className="mt-4 flex items-baseline gap-2"><span className="text-3xl font-semibold tracking-tight tabular-nums">7,420</span><span className="text-xs text-neutral-500">/ 10,000 target</span></dd>
      </dl>
      <div role="progressbar" aria-label="Metric target progress" aria-valuemin={0} aria-valuemax={10000} aria-valuenow={7420} aria-valuetext="7,420 of 10,000, 74.2 percent" className="mt-5 h-2 overflow-hidden rounded-full bg-neutral-200">
        <div className="h-full w-[74.2%] rounded-full bg-neutral-900"></div>
      </div>
      <p className="mt-2 flex justify-between text-xs tabular-nums text-neutral-500"><span>0</span><span>10,000</span></p>
      <footer className="mt-5 flex justify-between gap-3 border-t border-neutral-200 pt-4 text-xs text-neutral-600"><span>2,580 to go</span><span>9 days left</span></footer>
    </article>
  )
}

