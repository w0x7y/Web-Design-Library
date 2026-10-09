export default function CtaMigrationChecklist() {
  return (
    <section className="bg-blue-950 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-sky-300">
            Your next workspace is ready
          </p>
          <h2 className="mt-5 text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
            Bring the work.
            <br />
            Leave the busywork.
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-blue-200">
            Move your team to Compass with a guided import and a person to help
            with the details. Your existing work comes with you.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-5">
            <a
              href="#"
              className="inline-flex min-h-12 items-center gap-3 rounded-lg bg-sky-300 px-5 font-semibold text-blue-950 hover:bg-sky-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Plan my move{' '}
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
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </a>
            <a
              href="#"
              className="text-sm text-blue-200 hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              See supported imports
            </a>
          </div>
        </div>
        <ol
          role="list"
          className="space-y-6 rounded-2xl border border-blue-800 bg-blue-900/50 p-6 sm:p-8"
        >
          <li className="flex gap-4">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-blue-700 text-xs text-sky-300">
              1
            </span>
            <div>
              <h3 className="text-sm font-semibold">Import your projects</h3>
              <p className="mt-2 text-sm leading-relaxed text-blue-200">
                Tasks, files and comments keep their original context.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-blue-700 text-xs text-sky-300">
              2
            </span>
            <div>
              <h3 className="text-sm font-semibold">Invite your people</h3>
              <p className="mt-2 text-sm leading-relaxed text-blue-200">
                Set roles, permissions and a shared starting point.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-blue-700 text-xs text-sky-300">
              3
            </span>
            <div>
              <h3 className="text-sm font-semibold">Start your first week</h3>
              <p className="mt-2 text-sm leading-relaxed text-blue-200">
                We walk your team through the essentials together.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  )
}
