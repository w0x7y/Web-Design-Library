export default function DashboardGoalTracker() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Goal progress
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-pretty text-neutral-600">
            Review target completion and the next scheduled checkpoint.
          </p>
        </div>
        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <section>
            <h2 className="text-lg font-semibold">Current goals</h2>
            <ul role="list" className="mt-4">
              <li className="border-t border-neutral-200 py-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base font-semibold">Goal title</h3>
                    <p className="mt-1 text-sm text-neutral-600">
                      Owner: Alex Rivera
                    </p>
                  </div>
                  <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                    On track
                  </span>
                </div>
                <div
                  role="meter"
                  aria-label="Goal title progress"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={75}
                  className="mt-5 h-2 rounded-full bg-neutral-100"
                >
                  <div className="h-full w-3/4 rounded-full bg-neutral-900" />
                </div>
                <div className="mt-3 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-sm text-neutral-500">75% complete</p>
                  <p className="text-sm">
                    <a
                      href="#"
                      aria-label="View goal title"
                      className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    >
                      View goal
                    </a>
                  </p>
                </div>
              </li>
              <li className="border-t border-neutral-200 py-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base font-semibold">Target title</h3>
                    <p className="mt-1 text-sm text-neutral-600">
                      Owner: Jordan Lee
                    </p>
                  </div>
                  <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                    Needs review
                  </span>
                </div>
                <div
                  role="meter"
                  aria-label="Target title progress"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={50}
                  className="mt-5 h-2 rounded-full bg-neutral-100"
                >
                  <div className="h-full w-1/2 rounded-full bg-neutral-900" />
                </div>
                <div className="mt-3 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-sm text-neutral-500">50% complete</p>
                  <p className="text-sm">
                    <a
                      href="#"
                      aria-label="View target title"
                      className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    >
                      View goal
                    </a>
                  </p>
                </div>
              </li>
              <li className="border-t border-neutral-200 py-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base font-semibold">Objective title</h3>
                    <p className="mt-1 text-sm text-neutral-600">
                      Owner: Sam Taylor
                    </p>
                  </div>
                  <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                    On track
                  </span>
                </div>
                <div
                  role="meter"
                  aria-label="Objective title progress"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={25}
                  className="mt-5 h-2 rounded-full bg-neutral-100"
                >
                  <div className="h-full w-1/4 rounded-full bg-neutral-900" />
                </div>
                <div className="mt-3 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-sm text-neutral-500">25% complete</p>
                  <p className="text-sm">
                    <a
                      href="#"
                      aria-label="View objective title"
                      className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    >
                      View goal
                    </a>
                  </p>
                </div>
              </li>
            </ul>
          </section>
          <aside className="rounded-lg bg-neutral-50 p-6">
            <h2 className="text-base font-semibold">Review period</h2>
            <p className="mt-4 text-3xl font-semibold tracking-tight">
              Oct–Dec
            </p>
            <dl className="mt-6 space-y-4">
              <div>
                <dt className="text-sm text-neutral-500">Next review</dt>
                <dd className="mt-1 text-sm font-medium">
                  <time dateTime="2026-11-01">1 Nov 2026</time>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-neutral-500">Goals in scope</dt>
                <dd className="mt-1 text-sm font-medium">3 goals</dd>
              </div>
            </dl>
            <div className="mt-6">
              <a
                href="#"
                className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Prepare review
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
