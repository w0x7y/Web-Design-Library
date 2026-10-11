export default function NavbarCategoryTileStrip() {
  return (
    <header className="border-b border-neutral-200 bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
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
          <a
            href="#"
            className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            Account
          </a>
        </div>
        <nav aria-label="Category navigation" className="mt-6">
          <ul role="list" className="grid grid-cols-2 gap-3 md:grid-cols-4">
            <li>
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg border border-neutral-200 p-4 text-sm font-medium hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
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
                  <rect x="4" y="4" width="16" height="16" rx="3" />
                  <path d="M4 12h16M12 4v16" />
                </svg>
                Category one
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg border border-neutral-200 p-4 text-sm font-medium hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
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
                  <rect x="4" y="4" width="16" height="16" rx="3" />
                  <path d="M4 12h16M12 4v16" />
                </svg>
                Category two
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg border border-neutral-200 p-4 text-sm font-medium hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
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
                  <rect x="4" y="4" width="16" height="16" rx="3" />
                  <path d="M4 12h16M12 4v16" />
                </svg>
                Category three
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg border border-neutral-200 p-4 text-sm font-medium hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
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
                  <rect x="4" y="4" width="16" height="16" rx="3" />
                  <path d="M4 12h16M12 4v16" />
                </svg>
                Category four
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
