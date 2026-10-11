export default function TabsCenteredMetric() {
  return (
    <div className="group w-72 rounded-lg border border-neutral-200 bg-white p-5 text-neutral-900 sm:w-96"><h2 className="text-base font-semibold text-center">Collection summary</h2>
    <div className="mt-3 flex justify-center gap-1" role="radiogroup" aria-label="Metric period"><label className="flex h-9 items-center justify-center rounded-md border border-transparent px-3 text-sm text-neutral-500 hover:bg-neutral-50 has-[:checked]:border-neutral-300 has-[:checked]:font-medium has-[:checked]:text-neutral-900 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900 forced-colors:has-[:checked]:border-[Highlight]" id="tabs-centered-metric-week-label"><input className="sr-only focus-visible:outline-hidden" id="tabs-centered-metric-week" name="tabs-centered-metric" value="week" type="radio" aria-controls="tabs-centered-metric-week-panel" defaultChecked />
    Week</label>
    <label className="flex h-9 items-center justify-center rounded-md border border-transparent px-3 text-sm text-neutral-500 hover:bg-neutral-50 has-[:checked]:border-neutral-300 has-[:checked]:font-medium has-[:checked]:text-neutral-900 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900 forced-colors:has-[:checked]:border-[Highlight]" id="tabs-centered-metric-month-label"><input className="sr-only focus-visible:outline-hidden" id="tabs-centered-metric-month" name="tabs-centered-metric" value="month" type="radio" aria-controls="tabs-centered-metric-month-panel"  />
    Month</label>
    <label className="flex h-9 items-center justify-center rounded-md border border-transparent px-3 text-sm text-neutral-500 hover:bg-neutral-50 has-[:checked]:border-neutral-300 has-[:checked]:font-medium has-[:checked]:text-neutral-900 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900 forced-colors:has-[:checked]:border-[Highlight]" id="tabs-centered-metric-year-label"><input className="sr-only focus-visible:outline-hidden" id="tabs-centered-metric-year" name="tabs-centered-metric" value="year" type="radio" aria-controls="tabs-centered-metric-year-panel"  />
    Year</label></div>
    <section className="mt-5 border-t border-neutral-200 pt-5 text-center hidden group-has-[#tabs-centered-metric-week:checked]:block" id="tabs-centered-metric-week-panel" aria-labelledby="tabs-centered-metric-week-label"><p className="text-4xl font-semibold tracking-tight tabular-nums text-neutral-900">48</p>
    <p className="mt-2 text-sm font-medium text-neutral-900">Items in this period</p>
    <p className="mt-2 text-sm text-neutral-600">Explain the weekly total.</p></section>
    <section className="mt-5 border-t border-neutral-200 pt-5 text-center hidden group-has-[#tabs-centered-metric-month:checked]:block" id="tabs-centered-metric-month-panel" aria-labelledby="tabs-centered-metric-month-label"><p className="text-4xl font-semibold tracking-tight tabular-nums text-neutral-900">192</p>
    <p className="mt-2 text-sm font-medium text-neutral-900">Items in this period</p>
    <p className="mt-2 text-sm text-neutral-600">Explain the monthly total.</p></section>
    <section className="mt-5 border-t border-neutral-200 pt-5 text-center hidden group-has-[#tabs-centered-metric-year:checked]:block" id="tabs-centered-metric-year-panel" aria-labelledby="tabs-centered-metric-year-label"><p className="text-4xl font-semibold tracking-tight tabular-nums text-neutral-900">2,304</p>
    <p className="mt-2 text-sm font-medium text-neutral-900">Items in this period</p>
    <p className="mt-2 text-sm text-neutral-600">Explain the yearly total.</p></section></div>
  )
}
