export default function SettingsSessionList() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Signed-in devices
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-pretty text-neutral-600">
            Review the devices that currently have account access.
          </p>
        </div>
        <ul
          role="list"
          className="mt-8 divide-y divide-neutral-200 border-y border-neutral-200"
        >
          <li className="grid items-center gap-4 py-6 sm:grid-cols-[minmax(0,1fr)_auto]">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-base font-semibold">Desktop browser</h2>
                <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                  Current session
                </span>
              </div>
              <p className="mt-2 text-sm text-neutral-600">
                Browser and operating-system summary.
              </p>
              <p className="mt-1 text-sm text-neutral-500">Last active: Now</p>
            </div>
            <a
              href="#"
              aria-label="Review desktop browser session"
              className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Review session
            </a>
          </li>
          <li className="grid items-center gap-4 py-6 sm:grid-cols-[minmax(0,1fr)_auto]">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-base font-semibold">Mobile browser</h2>
              </div>
              <p className="mt-2 text-sm text-neutral-600">
                Device and operating-system summary.
              </p>
              <p className="mt-1 text-sm text-neutral-500">
                Last active: 2 hours ago
              </p>
            </div>
            <a
              href="#"
              aria-label="Revoke mobile browser session"
              className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Revoke session
            </a>
          </li>
          <li className="grid items-center gap-4 py-6 sm:grid-cols-[minmax(0,1fr)_auto]">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-base font-semibold">Tablet browser</h2>
              </div>
              <p className="mt-2 text-sm text-neutral-600">
                Device and operating-system summary.
              </p>
              <p className="mt-1 text-sm text-neutral-500">
                Last active: Mar 14
              </p>
            </div>
            <a
              href="#"
              aria-label="Revoke tablet browser session"
              className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Revoke session
            </a>
          </li>
        </ul>
        <aside className="mt-8 flex flex-wrap items-center justify-between gap-6 rounded-lg bg-neutral-50 p-6">
          <div>
            <h2 className="text-base font-semibold">Account security</h2>
            <p className="mt-2 text-sm text-neutral-600">
              Short advice for an unrecognized session.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            Review security settings
          </a>
        </aside>
      </div>
    </section>
  )
}
