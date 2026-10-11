export default function SettingsIntegrationDirectory() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Connected services
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-pretty text-neutral-600">
            Review what each connection can access before enabling it.
          </p>
        </div>
        <ul role="list" className="mt-10 grid gap-6 md:grid-cols-3">
          <li className="min-w-0 rounded-lg border border-neutral-200 bg-white p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-base font-semibold">Calendar provider</h2>
              <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                Connected
              </span>
            </div>
            <p className="mt-4 text-sm text-neutral-600">
              Explain the events shared with this connection.
            </p>
            <dl className="mt-6 space-y-3">
              <div>
                <dt className="text-xs text-neutral-500">Access scope</dt>
                <dd className="mt-1 text-sm">Read calendar events</dd>
              </div>
            </dl>
            <div className="mt-6">
              <a
                href="#"
                aria-label="Manage calendar provider"
                className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Manage connection
              </a>
            </div>
          </li>
          <li className="min-w-0 rounded-lg border border-neutral-200 bg-white p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-base font-semibold">Storage provider</h2>
              <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                Available
              </span>
            </div>
            <p className="mt-4 text-sm text-neutral-600">
              Explain the documents accessible after connecting.
            </p>
            <dl className="mt-6 space-y-3">
              <div>
                <dt className="text-xs text-neutral-500">Access scope</dt>
                <dd className="mt-1 text-sm">Read selected files</dd>
              </div>
            </dl>
            <div className="mt-6">
              <a
                href="#"
                aria-label="Connect storage provider"
                className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Connect
              </a>
            </div>
          </li>
          <li className="min-w-0 rounded-lg border border-neutral-200 bg-white p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-base font-semibold">Messaging provider</h2>
              <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                Available
              </span>
            </div>
            <p className="mt-4 text-sm text-neutral-600">
              Explain which updates this connection can deliver.
            </p>
            <dl className="mt-6 space-y-3">
              <div>
                <dt className="text-xs text-neutral-500">Access scope</dt>
                <dd className="mt-1 text-sm">Send account updates</dd>
              </div>
            </dl>
            <div className="mt-6">
              <a
                href="#"
                aria-label="Connect messaging provider"
                className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Connect
              </a>
            </div>
          </li>
        </ul>
        <p className="mt-6 text-sm text-neutral-600">
          Short note about revoking access and removing shared information.
        </p>
      </div>
    </section>
  )
}
