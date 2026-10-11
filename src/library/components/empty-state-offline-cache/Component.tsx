export default function EmptyStateOfflineCache() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
              Offline
            </span>
            <div className="mt-4">
              <div>
                <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                  Live content is unavailable
                </h1>
                <p className="mt-4 max-w-2xl text-lg text-pretty text-neutral-600">
                  Explain that the connection is interrupted and updates are
                  paused.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Try reconnecting
              </a>
            </div>
            <p className="mt-4 text-sm text-neutral-500">
              Last synced at <time dateTime="2026-10-11T09:20:00">09:20</time>.
            </p>
          </div>
          <aside className="min-w-0 rounded-lg border border-neutral-200 bg-white p-6">
            <h2 className="text-lg font-semibold">Saved content</h2>
            <p className="mt-2 text-sm text-neutral-600">
              These copies are available while offline.
            </p>
            <ul role="list" className="mt-4">
              <li className="flex flex-wrap items-center justify-between gap-4 border-t border-neutral-200 py-4">
                <div>
                  <h3 className="text-sm font-semibold">Record label</h3>
                  <p className="mt-1 text-xs text-neutral-500">Saved 09:20</p>
                </div>
                <a
                  href="#"
                  aria-label="Open saved copy of record label"
                  className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  Open saved copy
                </a>
              </li>
              <li className="flex flex-wrap items-center justify-between gap-4 border-t border-neutral-200 py-4">
                <div>
                  <h3 className="text-sm font-semibold">Collection label</h3>
                  <p className="mt-1 text-xs text-neutral-500">Saved 08:45</p>
                </div>
                <a
                  href="#"
                  aria-label="Open saved copy of collection label"
                  className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  Open saved copy
                </a>
              </li>
            </ul>
            <p className="mt-4 text-sm text-neutral-500">
              Changes may be unavailable until reconnection.
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}
