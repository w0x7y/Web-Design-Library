export default function NavbarLinksActions() {
  return (
    <header className="min-h-[25rem] border-b border-neutral-200 bg-white text-neutral-900 lg:min-h-0">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center gap-2">
          <a
            href="#"
            aria-label="Logo home"
            className="inline-flex shrink-0 items-center gap-2 font-semibold text-neutral-900 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
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
          <nav aria-label="Main navigation" className="ml-8 hidden items-center gap-6 lg:flex">
            <a
              href="#"
              aria-current="page"
              className="text-sm font-semibold text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Product
            </a>{' '}
            <a
              href="#"
              className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Solutions
            </a>{' '}
            <a
              href="#"
              className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Pricing
            </a>{' '}
            <a
              href="#"
              className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Docs
            </a>{' '}
            <a
              href="#"
              className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              About
            </a>
          </nav>
          <div className="ml-auto flex items-center gap-2 sm:gap-4">
            <a
              href="#"
              className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 hidden lg:inline-flex"
            >
              Log in
            </a>
            <a
              href="#"
              className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Get started
            </a>
            <details open className="group lg:hidden">
              <summary
                aria-label="Toggle navigation menu"
                className="flex size-10 cursor-pointer list-none items-center justify-center rounded-md border border-neutral-300 hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-5 group-open:hidden"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="hidden size-5 group-open:block"
                >
                  <path d="m6 6 12 12M18 6 6 18" />
                </svg>
              </summary>
              <nav
                aria-label="Mobile navigation"
                className="absolute inset-x-0 top-16 border-t border-neutral-200 bg-white p-6"
              >
                <ul role="list">
                  <li>
                    <a
                      href="#"
                      aria-current="page"
                      className="text-sm font-semibold text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 flex min-h-11 items-center"
                    >
                      Product
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 flex min-h-11 items-center"
                    >
                      Solutions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 flex min-h-11 items-center"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 flex min-h-11 items-center"
                    >
                      Docs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 flex min-h-11 items-center"
                    >
                      About
                    </a>
                  </li>
                </ul>
                <a
                  href="#"
                  className="mt-4 w-full inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  Log in
                </a>
              </nav>
            </details>
          </div>
        </div>
      </div>
    </header>
  )
}
