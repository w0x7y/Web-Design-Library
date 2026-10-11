export default function DashboardResourceCapacity() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <header className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Capacity overview
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-pretty text-neutral-600">
              Review weekly allocation before assigning more work.
            </p>
          </div>
          <p className="text-sm text-neutral-500">Week of 12 Oct</p>
        </header>
        <dl className="mt-8 grid gap-6 rounded-lg bg-neutral-50 p-6 sm:grid-cols-3">
          <div>
            <dt className="text-sm text-neutral-500">Available hours</dt>
            <dd className="mt-2 text-3xl font-semibold tabular-nums">120</dd>
          </div>
          <div>
            <dt className="text-sm text-neutral-500">Allocated hours</dt>
            <dd className="mt-2 text-3xl font-semibold tabular-nums">60</dd>
          </div>
          <div>
            <dt className="text-sm text-neutral-500">Remaining hours</dt>
            <dd className="mt-2 text-3xl font-semibold tabular-nums">60</dd>
          </div>
        </dl>
        <section className="mt-8">
          <h2 className="text-lg font-semibold">Member allocation</h2>
          <ul role="list" className="mt-4">
            <li className="grid items-center gap-4 border-t border-neutral-200 py-6 sm:grid-cols-[10rem_minmax(0,1fr)_auto]">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600"
                >
                  AR
                </span>
                <div>
                  <h3 className="text-sm font-semibold">Alex Rivera</h3>
                  <p className="mt-1 text-xs text-neutral-500">Role label</p>
                </div>
              </div>
              <div>
                <div
                  role="meter"
                  aria-label="Alex Rivera allocation"
                  aria-valuemin={0}
                  aria-valuemax={40}
                  aria-valuenow={30}
                  className="h-3 rounded-full bg-neutral-100"
                >
                  <div className="h-full w-3/4 rounded-full bg-neutral-900" />
                </div>
                <p className="mt-2 text-xs text-neutral-500">
                  30 of 40 hours allocated
                </p>
              </div>
              <p className="text-sm font-semibold tabular-nums">10h free</p>
            </li>
            <li className="grid items-center gap-4 border-t border-neutral-200 py-6 sm:grid-cols-[10rem_minmax(0,1fr)_auto]">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600"
                >
                  JL
                </span>
                <div>
                  <h3 className="text-sm font-semibold">Jordan Lee</h3>
                  <p className="mt-1 text-xs text-neutral-500">Role label</p>
                </div>
              </div>
              <div>
                <div
                  role="meter"
                  aria-label="Jordan Lee allocation"
                  aria-valuemin={0}
                  aria-valuemax={40}
                  aria-valuenow={20}
                  className="h-3 rounded-full bg-neutral-100"
                >
                  <div className="h-full w-1/2 rounded-full bg-neutral-900" />
                </div>
                <p className="mt-2 text-xs text-neutral-500">
                  20 of 40 hours allocated
                </p>
              </div>
              <p className="text-sm font-semibold tabular-nums">20h free</p>
            </li>
            <li className="grid items-center gap-4 border-t border-neutral-200 py-6 sm:grid-cols-[10rem_minmax(0,1fr)_auto]">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600"
                >
                  ST
                </span>
                <div>
                  <h3 className="text-sm font-semibold">Sam Taylor</h3>
                  <p className="mt-1 text-xs text-neutral-500">Role label</p>
                </div>
              </div>
              <div>
                <div
                  role="meter"
                  aria-label="Sam Taylor allocation"
                  aria-valuemin={0}
                  aria-valuemax={40}
                  aria-valuenow={10}
                  className="h-3 rounded-full bg-neutral-100"
                >
                  <div className="h-full w-1/4 rounded-full bg-neutral-900" />
                </div>
                <p className="mt-2 text-xs text-neutral-500">
                  10 of 40 hours allocated
                </p>
              </div>
              <p className="text-sm font-semibold tabular-nums">30h free</p>
            </li>
          </ul>
        </section>
        <p className="mt-6 text-sm">
          <a
            href="#"
            className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            Open allocation planner
          </a>
        </p>
      </div>
    </section>
  )
}
