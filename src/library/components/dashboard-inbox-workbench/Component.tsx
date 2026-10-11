export default function DashboardInboxWorkbench() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Request inbox
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-pretty text-neutral-600">
            Review incoming work and open the next item to act on.
          </p>
        </div>
        <dl className="mt-6 flex flex-wrap gap-6 text-sm">
          <div className="flex gap-2">
            <dt className="text-neutral-500">Open</dt>
            <dd className="font-semibold">12</dd>
          </div>
          <div className="flex gap-2">
            <dt className="text-neutral-500">Assigned</dt>
            <dd className="font-semibold">8</dd>
          </div>
          <div className="flex gap-2">
            <dt className="text-neutral-500">Waiting</dt>
            <dd className="font-semibold">4</dd>
          </div>
        </dl>
        <div className="mt-8 grid items-start gap-8 lg:grid-cols-[20rem_minmax(0,1fr)]">
          <nav aria-label="Inbox requests">
            <ul role="list" className="space-y-3">
              <li>
                <a
                  href="#"
                  aria-current="true"
                  className="block rounded-lg border border-neutral-900 bg-neutral-50 p-4 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  <span className="flex items-start justify-between gap-3">
                    <span className="text-sm font-semibold">Request title</span>
                    <time
                      dateTime="2026-10-11T09:41:00"
                      className="text-xs text-neutral-500"
                    >
                      09:41
                    </time>
                  </span>
                  <span className="mt-2 block text-xs text-neutral-500">
                    Alex Rivera
                  </span>
                  <span className="mt-2 block text-sm text-neutral-600">
                    Short preview of the request contents.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block rounded-lg border border-neutral-200 bg-white p-4 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  <span className="flex items-start justify-between gap-3">
                    <span className="text-sm font-semibold">Review title</span>
                    <time
                      dateTime="2026-10-11T09:25:00"
                      className="text-xs text-neutral-500"
                    >
                      09:25
                    </time>
                  </span>
                  <span className="mt-2 block text-xs text-neutral-500">
                    Jordan Lee
                  </span>
                  <span className="mt-2 block text-sm text-neutral-600">
                    Short preview of the request contents.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block rounded-lg border border-neutral-200 bg-white p-4 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  <span className="flex items-start justify-between gap-3">
                    <span className="text-sm font-semibold">Update title</span>
                    <time
                      dateTime="2026-10-11T09:12:00"
                      className="text-xs text-neutral-500"
                    >
                      09:12
                    </time>
                  </span>
                  <span className="mt-2 block text-xs text-neutral-500">
                    Sam Taylor
                  </span>
                  <span className="mt-2 block text-sm text-neutral-600">
                    Short preview of the request contents.
                  </span>
                </a>
              </li>
            </ul>
          </nav>
          <article className="min-w-0 rounded-lg border border-neutral-200 bg-white p-6">
            <header className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold">Request title</h2>
                <p className="mt-2 text-sm text-neutral-500">
                  Alex Rivera · 09:41
                </p>
              </div>
              <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                Open
              </span>
            </header>
            <p className="mt-8 text-base text-neutral-600">
              A short message explains the requested outcome and the context
              needed to review it.
            </p>
            <dl className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <dt className="text-sm text-neutral-500">Owner</dt>
                <dd className="mt-1 text-sm font-medium">Alex Rivera</dd>
              </div>
              <div>
                <dt className="text-sm text-neutral-500">Due date</dt>
                <dd className="mt-1 text-sm font-medium">
                  <time dateTime="2026-10-14">14 Oct 2026</time>
                </dd>
              </div>
            </dl>
            <footer className="mt-8 flex flex-wrap gap-3 border-t border-neutral-200 pt-6">
              <a
                href="#"
                className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Review request
              </a>
              <a
                href="#"
                className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Assign owner
              </a>
            </footer>
          </article>
        </div>
      </div>
    </section>
  )
}
