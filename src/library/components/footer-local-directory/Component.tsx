export default function FooterLocalDirectory() {
  return (
    <footer className="bg-slate-50 text-slate-950">
      <div className="border-y border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-medium text-slate-600">
              A question before your visit?
            </p>
            <a
              href="tel:+442079460284"
              className="mt-2 inline-block text-3xl font-semibold tracking-tight hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            >
              020 7946 0284
            </a>
          </div>
          <a
            href="#"
            className="inline-flex min-h-12 w-fit items-center gap-3 rounded-lg bg-blue-700 px-5 text-sm font-semibold text-white hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
          >
            Book an appointment{' '}
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
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 py-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <a
              href="#"
              className="inline-block text-2xl font-semibold tracking-tight hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            >
              North Street Practice
            </a>
            <address className="mt-4 text-sm leading-relaxed text-slate-600 not-italic">
              42 North Street
              <br />
              London, N1 8AJ
            </address>
            <p className="mt-3 text-sm text-slate-600">
              Step-free access from the street.
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Opening hours
            </h2>
            <dl className="mt-5 space-y-3 text-sm">
              <div className="flex max-w-xs justify-between gap-5">
                <dt className="text-slate-600">Monday–Friday</dt>
                <dd>8:00–18:00</dd>
              </div>
              <div className="flex max-w-xs justify-between gap-5">
                <dt className="text-slate-600">Saturday</dt>
                <dd>9:00–13:00</dd>
              </div>
              <div className="flex max-w-xs justify-between gap-5">
                <dt className="text-slate-600">Sunday</dt>
                <dd>Closed</dd>
              </div>
            </dl>
          </div>
          <nav aria-label="Practice information">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Useful information
            </h2>
            <ul role="list" className="mt-5 grid grid-cols-2 gap-4 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-blue-700 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
                >
                  Our services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-700 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
                >
                  Meet the team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-700 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
                >
                  New patients
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-700 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
                >
                  Fees
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-700 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
                >
                  Access guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-700 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
                >
                  Feedback
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-wrap justify-between gap-4 border-t border-slate-200 py-5 text-xs text-slate-600">
          <p>© 2026 North Street Practice</p>
          <div className="flex flex-wrap gap-5">
            <a
              href="#"
              className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            >
              Privacy notice
            </a>
            <a
              href="#"
              className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            >
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
