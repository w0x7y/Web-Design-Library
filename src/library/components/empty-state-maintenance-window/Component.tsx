export default function EmptyStateMaintenanceWindow() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
            Scheduled maintenance
          </span>
          <div className="mt-6">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                Content will return shortly
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-pretty text-neutral-600">
                Explain which account features are temporarily unavailable.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#"
              className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Check service status
            </a>
            <a
              href="#"
              className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Contact support
            </a>
          </div>
        </div>
        <dl className="mt-12 grid gap-6 border-y border-neutral-200 py-8 text-center sm:grid-cols-3">
          <div>
            <dt className="text-sm text-neutral-500">Started</dt>
            <dd className="mt-3 text-xl font-semibold">
              <time dateTime="2026-10-11T09:00:00Z">09:00 UTC</time>
            </dd>
          </div>
          <div>
            <dt className="text-sm text-neutral-500">Expected return</dt>
            <dd className="mt-3 text-xl font-semibold">
              <time dateTime="2026-10-11T10:00:00Z">10:00 UTC</time>
            </dd>
          </div>
          <div>
            <dt className="text-sm text-neutral-500">Affected area</dt>
            <dd className="mt-3 text-xl font-semibold">Account content</dd>
          </div>
        </dl>
        <p className="mt-6 text-center text-sm text-neutral-600">
          Short note about access to saved information during this window.
        </p>
      </div>
    </section>
  )
}
