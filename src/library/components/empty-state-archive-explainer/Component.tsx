export default function EmptyStateArchiveExplainer() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
              Archive
            </span>
            <div className="mt-4">
              <div>
                <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                  No archived items
                </h1>
                <p className="mt-4 max-w-2xl text-lg text-pretty text-neutral-600">
                  Explain that archived records appear here after removal from
                  the active view.
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Browse active items
              </a>
              <a
                href="#"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Learn about archiving
              </a>
            </div>
          </div>
          <aside className="rounded-lg bg-neutral-50 p-6">
            <h2 className="text-lg font-semibold">Retention overview</h2>
            <dl className="mt-6 divide-y divide-neutral-200">
              <div className="py-4">
                <dt className="text-sm font-medium">Archive period</dt>
                <dd className="mt-2 text-sm text-neutral-600">
                  30 days before permanent removal.
                </dd>
              </div>
              <div className="py-4">
                <dt className="text-sm font-medium">Restore access</dt>
                <dd className="mt-2 text-sm text-neutral-600">
                  Explain which roles can restore an item.
                </dd>
              </div>
              <div className="py-4">
                <dt className="text-sm font-medium">Permanent removal</dt>
                <dd className="mt-2 text-sm text-neutral-600">
                  Describe the final deletion step.
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  )
}
