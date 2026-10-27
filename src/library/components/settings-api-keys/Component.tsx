export default function SettingsApiKeys() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <header className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">API keys</h1>
            <p className="mt-4 max-w-2xl text-lg text-pretty text-neutral-600">
              Keys let scripts and services call the API on behalf of this workspace.
            </p>
          </div>
          <button
            type="button"
            className="inline-flex h-11 shrink-0 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            Create key
          </button>
        </header>
        <div className="mt-10 rounded-lg border border-neutral-200 bg-neutral-50 p-6">
          <h2 className="flex items-center gap-2 text-base font-semibold">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-5 shrink-0"
            >
              <path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4M21 2l-9.6 9.6" />
              <circle cx="7.5" cy="15.5" r="5.5" />
            </svg>
            New key created
          </h2>
          <p id="settings-api-keys-secret-hint" className="mt-2 text-sm text-neutral-600">
            Copy this key now and store it somewhere safe. It will not be shown again.
          </p>
          <label htmlFor="settings-api-keys-secret" className="mt-4 block text-sm font-medium">
            Deploy pipeline key
          </label>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
            <input
              id="settings-api-keys-secret"
              name="secret"
              type="text"
              readOnly
              defaultValue="key_7Hq2Lm9Xc4Rt8Vb1Nz6Wd3Ys5Pk0Ja7d3f"
              aria-describedby="settings-api-keys-secret-hint"
              className="h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white px-3 font-mono text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 sm:flex-1"
            />
            <button
              type="button"
              className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4"
              >
                <path d="M8 10a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2zM4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2" />
              </svg>
              Copy key
            </button>
          </div>
        </div>
        <div className="mt-12">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="text-lg font-semibold">Active keys</h2>
            <p className="text-sm text-neutral-500">3 keys</p>
          </div>
          <div className="mt-4 lg:overflow-hidden lg:rounded-lg lg:border lg:border-neutral-200">
            <div
              aria-hidden="true"
              className="hidden bg-neutral-50 px-6 py-3 text-sm font-medium text-neutral-600 lg:grid lg:grid-cols-[minmax(0,1fr)_10rem_8rem_7rem_7rem_6rem] lg:gap-6"
            >
              <span>Name</span>
              <span>Key</span>
              <span>Scope</span>
              <span>Created</span>
              <span>Last used</span>
            </div>
            <ul role="list" className="grid gap-4 lg:gap-0">
              <li className="grid gap-4 rounded-lg border border-neutral-200 p-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-x-6 sm:p-6 lg:grid-cols-[minmax(0,1fr)_10rem_8rem_7rem_7rem_6rem] lg:rounded-none lg:border-x-0 lg:border-b-0 lg:px-6 lg:py-4">
                <h3 className="min-w-0 text-sm font-semibold">Deploy pipeline</h3>
                <dl className="grid gap-2 text-sm sm:col-span-2 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-4 md:grid-cols-4 lg:col-span-4 lg:grid-cols-subgrid">
                  <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-start sm:justify-start sm:gap-1">
                    <dt className="text-neutral-500 lg:sr-only">Key</dt>
                    <dd>
                      <code className="font-mono">
                        <span aria-hidden="true">key_••••••••</span>
                        <span className="sr-only">ending in </span>7d3f
                      </code>
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-start sm:justify-start sm:gap-1">
                    <dt className="text-neutral-500 lg:sr-only">Scope</dt>
                    <dd>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Read and write
                      </span>
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-start sm:justify-start sm:gap-1">
                    <dt className="text-neutral-500 lg:sr-only">Created</dt>
                    <dd className="text-neutral-600">Today</dd>
                  </div>
                  <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-start sm:justify-start sm:gap-1">
                    <dt className="text-neutral-500 lg:sr-only">Last used</dt>
                    <dd className="text-neutral-600">Never</dd>
                  </div>
                </dl>
                <button
                  type="button"
                  aria-label="Revoke Deploy pipeline key"
                  className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 sm:col-start-2 sm:row-start-1 lg:col-start-6 lg:justify-self-end"
                >
                  Revoke
                </button>
              </li>
              <li className="grid gap-4 rounded-lg border border-neutral-200 p-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-x-6 sm:p-6 lg:grid-cols-[minmax(0,1fr)_10rem_8rem_7rem_7rem_6rem] lg:rounded-none lg:border-x-0 lg:border-b-0 lg:px-6 lg:py-4">
                <h3 className="min-w-0 text-sm font-semibold">Production server</h3>
                <dl className="grid gap-2 text-sm sm:col-span-2 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-4 md:grid-cols-4 lg:col-span-4 lg:grid-cols-subgrid">
                  <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-start sm:justify-start sm:gap-1">
                    <dt className="text-neutral-500 lg:sr-only">Key</dt>
                    <dd>
                      <code className="font-mono">
                        <span aria-hidden="true">key_••••••••</span>
                        <span className="sr-only">ending in </span>4f2a
                      </code>
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-start sm:justify-start sm:gap-1">
                    <dt className="text-neutral-500 lg:sr-only">Scope</dt>
                    <dd>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Read and write
                      </span>
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-start sm:justify-start sm:gap-1">
                    <dt className="text-neutral-500 lg:sr-only">Created</dt>
                    <dd className="text-neutral-600">Mar 14, 2026</dd>
                  </div>
                  <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-start sm:justify-start sm:gap-1">
                    <dt className="text-neutral-500 lg:sr-only">Last used</dt>
                    <dd className="text-neutral-600">2 hours ago</dd>
                  </div>
                </dl>
                <button
                  type="button"
                  aria-label="Revoke Production server key"
                  className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 sm:col-start-2 sm:row-start-1 lg:col-start-6 lg:justify-self-end"
                >
                  Revoke
                </button>
              </li>
              <li className="grid gap-4 rounded-lg border border-neutral-200 p-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-x-6 sm:p-6 lg:grid-cols-[minmax(0,1fr)_10rem_8rem_7rem_7rem_6rem] lg:rounded-none lg:border-x-0 lg:border-b-0 lg:px-6 lg:py-4">
                <h3 className="min-w-0 text-sm font-semibold">Analytics export</h3>
                <dl className="grid gap-2 text-sm sm:col-span-2 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-4 md:grid-cols-4 lg:col-span-4 lg:grid-cols-subgrid">
                  <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-start sm:justify-start sm:gap-1">
                    <dt className="text-neutral-500 lg:sr-only">Key</dt>
                    <dd>
                      <code className="font-mono">
                        <span aria-hidden="true">key_••••••••</span>
                        <span className="sr-only">ending in </span>9c1e
                      </code>
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-start sm:justify-start sm:gap-1">
                    <dt className="text-neutral-500 lg:sr-only">Scope</dt>
                    <dd>
                      <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                        Read only
                      </span>
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-start sm:justify-start sm:gap-1">
                    <dt className="text-neutral-500 lg:sr-only">Created</dt>
                    <dd className="text-neutral-600">Feb 2, 2026</dd>
                  </div>
                  <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-start sm:justify-start sm:gap-1">
                    <dt className="text-neutral-500 lg:sr-only">Last used</dt>
                    <dd className="text-neutral-600">Yesterday</dd>
                  </div>
                </dl>
                <button
                  type="button"
                  aria-label="Revoke Analytics export key"
                  className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 sm:col-start-2 sm:row-start-1 lg:col-start-6 lg:justify-self-end"
                >
                  Revoke
                </button>
              </li>
            </ul>
          </div>
          <p className="mt-6 text-sm text-pretty text-neutral-500">
            Revoking a key blocks every request that uses it right away.{' '}
            <a
              href="#"
              className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Read the authentication guide
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
