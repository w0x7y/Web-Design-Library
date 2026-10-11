export default function FooterLargeLinks() {
  return (
    <footer className="border-t border-neutral-200 bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 pt-16 sm:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div>
            <a
              href="#"
              aria-label="Logo home"
              className="inline-flex items-center gap-2 font-semibold text-neutral-900 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-6"
              >
                <rect x="4" y="4" width="16" height="16" rx="3" />
                <path d="M4 12h16M12 4v16" />
              </svg>
              Logo
            </a>
            <p className="mt-4 max-w-xs text-base text-neutral-600">
              One sentence that describes the purpose of this site and its community.
            </p>
            <p className="mt-8 text-5xl font-semibold tracking-tight">1,284</p>
            <p className="mt-2 text-sm text-neutral-500">members</p>
          </div>
          <ol role="list">
            <li className="border-t border-neutral-200">
              <a
                href="#"
                className="group grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-6 gap-y-3 py-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 sm:grid-cols-[7rem_minmax(0,1fr)_auto]"
              >
                <span aria-hidden="true" className="col-span-2 font-mono text-sm text-neutral-500 sm:col-span-1">
                  01
                </span>
                <span className="min-w-0">
                  <span className="block text-2xl font-semibold tracking-tight group-hover:text-neutral-600">
                    Explore the main offering
                  </span>
                  <span className="mt-2 block text-base text-neutral-600">
                    A short description of the products and options available here.
                  </span>
                </span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-6 self-center transition-transform group-hover:translate-x-1"
                >
                  <path d="M4 12h16m-6-6 6 6-6 6" />
                </svg>
              </a>
            </li>
            <li className="border-t border-neutral-200">
              <a
                href="#"
                className="group grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-6 gap-y-3 py-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 sm:grid-cols-[7rem_minmax(0,1fr)_auto]"
              >
                <span aria-hidden="true" className="col-span-2 font-mono text-sm text-neutral-500 sm:col-span-1">
                  02
                </span>
                <span className="min-w-0">
                  <span className="block text-2xl font-semibold tracking-tight group-hover:text-neutral-600">
                    Browse the resource library
                  </span>
                  <span className="mt-2 block text-base text-neutral-600">
                    A sentence that explains the guides and references readers will find.
                  </span>
                </span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-6 self-center transition-transform group-hover:translate-x-1"
                >
                  <path d="M4 12h16m-6-6 6 6-6 6" />
                </svg>
              </a>
            </li>
            <li className="border-t border-neutral-200">
              <a
                href="#"
                className="group grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-6 gap-y-3 py-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 sm:grid-cols-[7rem_minmax(0,1fr)_auto]"
              >
                <span aria-hidden="true" className="col-span-2 font-mono text-sm text-neutral-500 sm:col-span-1">
                  03
                </span>
                <span className="min-w-0">
                  <span className="block text-2xl font-semibold tracking-tight group-hover:text-neutral-600">
                    Start a conversation
                  </span>
                  <span className="mt-2 block text-base text-neutral-600">
                    A clear invitation for people who need help with their next step.
                  </span>
                </span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-6 self-center transition-transform group-hover:translate-x-1"
                >
                  <path d="M4 12h16m-6-6 6 6-6 6" />
                </svg>
              </a>
            </li>
          </ol>
        </div>
        <div className="flex flex-col gap-4 border-t border-neutral-200 py-6 md:flex-row md:items-center md:justify-between mt-12">
          <p className="text-sm text-neutral-500">© 2026 Site name</p>
          <nav aria-label="Legal navigation" className="flex flex-wrap gap-x-6 gap-y-3">
            <a
              href="#"
              className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Terms
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
