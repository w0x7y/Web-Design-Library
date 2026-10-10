export default function FooterCenteredLinks() {
  return (
    <footer className="border-t border-neutral-200 bg-white text-neutral-900">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12 text-center">
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
        <nav aria-label="Footer navigation">
          <ul role="list" className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            <li>
              <a
                href="#"
                className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Product
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Docs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <nav aria-label="Social profiles" className="flex flex-wrap items-center gap-5">
          <a
            href="#"
            aria-label="Community profile"
            className="text-neutral-900 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
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
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 4a4 4 0 0 1 0 8M22 21v-2a4 4 0 0 0-3-3.9" />
              <circle cx="9" cy="7" r="4" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Updates feed"
            className="text-neutral-900 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
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
              <path d="M4 4a16 16 0 0 1 16 16M4 10a10 10 0 0 1 10 10" />
              <circle cx="4" cy="20" r="1" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Video channel"
            className="text-neutral-900 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
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
              <path d="M3 5h18v14H3zM10 9l5 3-5 3z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Source repository"
            className="text-neutral-900 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
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
              <path d="m8 8-4 4 4 4m8-8 4 4-4 4m-3-11-2 14" />
            </svg>
          </a>
        </nav>
        <p className="text-sm text-neutral-500">© 2026 Site name</p>
      </div>
    </footer>
  )
}
