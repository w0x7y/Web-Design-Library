export default function FeaturesBeforeAfter() {
  return (
    <section className="bg-slate-50 text-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">
            One place for the whole project
          </p>
          <h2 className="mt-4 text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
            Less chasing.
            <br />
            More moving forward.
          </h2>
          <p className="mt-5 text-slate-600">
            Compass keeps decisions, tasks and context together, so the next
            step is always clear.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              The usual way
            </p>
            <h3 className="mt-3 text-2xl font-semibold">
              Work scattered everywhere
            </h3>
            <ul role="list" className="mt-8 space-y-6 text-slate-600">
              <li className="flex gap-3">
                <span aria-hidden="true" className="text-slate-500">
                  ×
                </span>
                Decisions buried in message threads
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="text-slate-500">
                  ×
                </span>
                Three versions of the same document
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="text-slate-500">
                  ×
                </span>
                Status meetings to find the status
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="text-slate-500">
                  ×
                </span>
                New teammates missing the backstory
              </li>
            </ul>
          </div>
          <div className="rounded-2xl bg-blue-950 p-6 text-white sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-sky-300">
              The Compass way
            </p>
            <h3 className="mt-3 text-2xl font-semibold">
              A shared place to make progress
            </h3>
            <ul role="list" className="mt-8 space-y-6 text-blue-100">
              <li className="flex gap-3">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-5 shrink-0 text-sky-300"
                >
                  <path d="m5 12 4 4L19 6" />
                </svg>
                Decisions attached to the work
              </li>
              <li className="flex gap-3">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-5 shrink-0 text-sky-300"
                >
                  <path d="m5 12 4 4L19 6" />
                </svg>
                One document, with a clear history
              </li>
              <li className="flex gap-3">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-5 shrink-0 text-sky-300"
                >
                  <path d="m5 12 4 4L19 6" />
                </svg>
                A project view that stays up to date
              </li>
              <li className="flex gap-3">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-5 shrink-0 text-sky-300"
                >
                  <path d="m5 12 4 4L19 6" />
                </svg>
                Everything a new teammate needs
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
