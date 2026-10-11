export default function DashboardFunnelStages() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Process conversion
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-pretty text-neutral-600">
            Explain the period and process represented by these stage counts.
          </p>
        </div>
        <ol
          role="list"
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          <li className="min-w-0 rounded-lg border border-neutral-200 p-6">
            <p className="text-xs font-mono text-neutral-500">01</p>
            <h2 className="mt-3 text-base font-semibold">Started</h2>
            <p className="mt-6 text-3xl font-semibold tracking-tight tabular-nums">
              1,200
            </p>
            <p className="mt-2 text-sm text-neutral-600">100% of entries</p>
            <div
              role="meter"
              aria-label="Started retention"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={100}
              className="mt-6 h-2 rounded-full bg-neutral-100"
            >
              <div className="h-full w-full rounded-full bg-neutral-900" />
            </div>
          </li>
          <li className="min-w-0 rounded-lg border border-neutral-200 p-6">
            <p className="text-xs font-mono text-neutral-500">02</p>
            <h2 className="mt-3 text-base font-semibold">Qualified</h2>
            <p className="mt-6 text-3xl font-semibold tracking-tight tabular-nums">
              900
            </p>
            <p className="mt-2 text-sm text-neutral-600">75% retained</p>
            <div
              role="meter"
              aria-label="Qualified retention"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={75}
              className="mt-6 h-2 rounded-full bg-neutral-100"
            >
              <div className="h-full w-3/4 rounded-full bg-neutral-900" />
            </div>
          </li>
          <li className="min-w-0 rounded-lg border border-neutral-200 p-6">
            <p className="text-xs font-mono text-neutral-500">03</p>
            <h2 className="mt-3 text-base font-semibold">Reviewed</h2>
            <p className="mt-6 text-3xl font-semibold tracking-tight tabular-nums">
              600
            </p>
            <p className="mt-2 text-sm text-neutral-600">50% retained</p>
            <div
              role="meter"
              aria-label="Reviewed retention"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={50}
              className="mt-6 h-2 rounded-full bg-neutral-100"
            >
              <div className="h-full w-1/2 rounded-full bg-neutral-900" />
            </div>
          </li>
          <li className="min-w-0 rounded-lg border border-neutral-200 p-6">
            <p className="text-xs font-mono text-neutral-500">04</p>
            <h2 className="mt-3 text-base font-semibold">Completed</h2>
            <p className="mt-6 text-3xl font-semibold tracking-tight tabular-nums">
              300
            </p>
            <p className="mt-2 text-sm text-neutral-600">25% retained</p>
            <div
              role="meter"
              aria-label="Completed retention"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={25}
              className="mt-6 h-2 rounded-full bg-neutral-100"
            >
              <div className="h-full w-1/4 rounded-full bg-neutral-900" />
            </div>
          </li>
        </ol>
        <aside className="mt-8 flex flex-wrap items-center justify-between gap-6 rounded-lg bg-neutral-50 p-6">
          <div>
            <h2 className="text-base font-semibold">Overall completion</h2>
            <p className="mt-2 text-sm text-neutral-600">
              300 of 1,200 entries completed the process.
            </p>
          </div>
          <p className="text-3xl font-semibold tracking-tight tabular-nums">
            25%
          </p>
        </aside>
        <p className="mt-6 text-sm">
          <a
            href="#"
            className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            View stage records
          </a>
        </p>
      </div>
    </section>
  )
}
