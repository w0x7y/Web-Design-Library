export default function NavbarSplitMenuPanel() {
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
            Contact
          </a>
        </div>
        <nav
          aria-label="Expanded site navigation"
          className="mt-6 grid gap-8 border-t border-neutral-200 pt-6 md:grid-cols-2"
        >
          <div>
            <p className="text-sm font-medium text-neutral-500">Explore</p>
            <ul role="list" className="mt-4 space-y-4">
              <li>
                <a
                  href="#"
                  className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-lg"
                >
                  Product overview
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-lg"
                >
                  Capabilities
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-lg"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium text-neutral-500">Resources</p>
            <ul role="list" className="mt-4 grid gap-4 sm:grid-cols-2">
              <li>
                <a
                  href="#"
                  className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm"
                >
                  Guides
                </a>
                <p className="text-sm text-neutral-600 mt-1">
                  Short destination description.
                </p>
              </li>
              <li>
                <a
                  href="#"
                  className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm"
                >
                  Examples
                </a>
                <p className="text-sm text-neutral-600 mt-1">
                  Short destination description.
                </p>
              </li>
              <li>
                <a
                  href="#"
                  className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm"
                >
                  Support
                </a>
                <p className="text-sm text-neutral-600 mt-1">
                  Short destination description.
                </p>
              </li>
              <li>
                <a
                  href="#"
                  className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm"
                >
                  Updates
                </a>
                <p className="text-sm text-neutral-600 mt-1">
                  Short destination description.
                </p>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}
