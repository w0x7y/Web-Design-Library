export default function StatCardActivityCalendar() {
  return (
    <article className="w-72 rounded-lg border border-neutral-200 bg-white p-6 text-neutral-900 sm:w-80">
      <header className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-sm font-medium text-neutral-500">Activity this month</h3>
          <p className="mt-1 text-3xl font-semibold tracking-tight tabular-nums">24<span className="ml-2 text-sm font-normal text-neutral-600">active days</span></p>
        </div>
        <span className="text-xs text-neutral-500">Oct 2026</span>
      </header>
      <div role="img" aria-label="Calendar heatmap: activity recorded on 24 of 28 days" className="mt-5 grid grid-cols-7 gap-1">
        <span aria-hidden="true" className="aspect-square rounded-md border border-neutral-200 bg-neutral-900"></span>
        <span aria-hidden="true" className="aspect-square rounded-md border border-neutral-200 bg-neutral-300"></span>
        <span aria-hidden="true" className="aspect-square rounded-md border border-neutral-200 bg-neutral-300"></span>
        <span aria-hidden="true" className="aspect-square rounded-md border border-neutral-200 bg-neutral-600"></span>
        <span aria-hidden="true" className="aspect-square rounded-md border border-neutral-200 bg-neutral-900"></span>
        <span aria-hidden="true" className="aspect-square rounded-md border border-neutral-200 bg-neutral-100"></span>
        <span aria-hidden="true" className="aspect-square rounded-md border border-neutral-200 bg-neutral-600"></span>
        <span aria-hidden="true" className="aspect-square rounded-md border border-neutral-200 bg-neutral-300"></span>
        <span aria-hidden="true" className="aspect-square rounded-md border border-neutral-200 bg-neutral-900"></span>
        <span aria-hidden="true" className="aspect-square rounded-md border border-neutral-200 bg-neutral-600"></span>
        <span aria-hidden="true" className="aspect-square rounded-md border border-neutral-200 bg-neutral-300"></span>
        <span aria-hidden="true" className="aspect-square rounded-md border border-neutral-200 bg-neutral-300"></span>
        <span aria-hidden="true" className="aspect-square rounded-md border border-neutral-200 bg-neutral-100"></span>
        <span aria-hidden="true" className="aspect-square rounded-md border border-neutral-200 bg-neutral-300"></span>
        <span aria-hidden="true" className="aspect-square rounded-md border border-neutral-200 bg-neutral-300"></span>
        <span aria-hidden="true" className="aspect-square rounded-md border border-neutral-200 bg-neutral-600"></span>
        <span aria-hidden="true" className="aspect-square rounded-md border border-neutral-200 bg-neutral-900"></span>
        <span aria-hidden="true" className="aspect-square rounded-md border border-neutral-200 bg-neutral-300"></span>
        <span aria-hidden="true" className="aspect-square rounded-md border border-neutral-200 bg-neutral-600"></span>
        <span aria-hidden="true" className="aspect-square rounded-md border border-neutral-200 bg-neutral-100"></span>
        <span aria-hidden="true" className="aspect-square rounded-md border border-neutral-200 bg-neutral-900"></span>
        <span aria-hidden="true" className="aspect-square rounded-md border border-neutral-200 bg-neutral-600"></span>
        <span aria-hidden="true" className="aspect-square rounded-md border border-neutral-200 bg-neutral-300"></span>
        <span aria-hidden="true" className="aspect-square rounded-md border border-neutral-200 bg-neutral-300"></span>
        <span aria-hidden="true" className="aspect-square rounded-md border border-neutral-200 bg-neutral-900"></span>
        <span aria-hidden="true" className="aspect-square rounded-md border border-neutral-200 bg-neutral-300"></span>
        <span aria-hidden="true" className="aspect-square rounded-md border border-neutral-200 bg-neutral-100"></span>
        <span aria-hidden="true" className="aspect-square rounded-md border border-neutral-200 bg-neutral-600"></span>
      </div>
      <p className="mt-4 text-xs text-neutral-500">Each square represents one day. Darker means more activity.</p>
    </article>
  )
}
