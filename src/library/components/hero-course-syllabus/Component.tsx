export default function HeroCourseSyllabus() {
  return (
    <section className="bg-amber-50 text-blue-950">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">
            Small Hours School / Course 04
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-tight tracking-tight sm:text-6xl">
            A better eye
            <br />
            for everyday design.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-blue-900">
            Learn to notice spacing, type and color. Then turn those
            observations into work that feels considered.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-flex min-h-12 items-center gap-4 rounded-lg bg-blue-950 px-6 font-medium text-white hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            >
              Join the next class{' '}
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5"
              >
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </a>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold">
              AM
            </span>
            <div>
              <p className="text-sm font-semibold">Taught by Ada Morris</p>
              <p className="text-xs text-blue-900">
                Designer and educator, 12 years in practice
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-blue-200 bg-white p-6 sm:p-8">
          <div className="flex justify-between gap-3 border-b border-blue-100 pb-5">
            <h2 className="text-xl font-semibold">What we will cover</h2>
            <span className="shrink-0 text-xs text-blue-700">4 chapters</span>
          </div>
          <ol role="list" className="divide-y divide-blue-100">
            <li className="flex gap-4 py-5">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 font-mono text-xs">
                01
              </span>
              <div className="min-w-0">
                <h3 className="font-semibold">Looking with intention</h3>
                <p className="mt-1 text-sm text-blue-900">
                  Build a daily practice of noticing.
                </p>
              </div>
            </li>
            <li className="flex gap-4 py-5">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 font-mono text-xs">
                02
              </span>
              <div className="min-w-0">
                <h3 className="font-semibold">Type that carries the idea</h3>
                <p className="mt-1 text-sm text-blue-900">
                  Hierarchy, rhythm and readable details.
                </p>
              </div>
            </li>
            <li className="flex gap-4 py-5">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 font-mono text-xs">
                03
              </span>
              <div className="min-w-0">
                <h3 className="font-semibold">Color with a reason</h3>
                <p className="mt-1 text-sm text-blue-900">
                  A small palette that works together.
                </p>
              </div>
            </li>
            <li className="flex gap-4 py-5">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 font-mono text-xs">
                04
              </span>
              <div className="min-w-0">
                <h3 className="font-semibold">Making it your own</h3>
                <p className="mt-1 text-sm text-blue-900">
                  A final project, with personal feedback.
                </p>
              </div>
            </li>
          </ol>
          <p className="border-t border-blue-100 pt-5 text-xs text-blue-900">
            6 weeks · Live on Thursdays · Recordings included
          </p>
        </div>
      </div>
    </section>
  )
}
