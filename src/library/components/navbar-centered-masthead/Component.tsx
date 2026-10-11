export default function NavbarCenteredMasthead() {
  return (
    <header className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-10 items-center justify-end gap-6 sm:justify-between">
          <p className="hidden text-sm text-neutral-500 sm:block">
            <time dateTime="2026-10-10">Oct 10, 2026</time>
          </p>
          <nav aria-label="Account navigation" className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Subscribe
            </a>
            <a
              href="#"
              className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Sign in
            </a>
          </nav>
        </div>
        <div className="py-8 text-center">
          <a
            href="#"
            aria-label="Logo home"
            className="inline-flex shrink-0 items-center gap-2 font-semibold text-neutral-900 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-3xl tracking-tight sm:text-4xl"
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
          <p className="mt-2 text-sm text-neutral-600">One-line descriptor for the content and its audience</p>
        </div>
        <nav aria-label="Topics" className="border-y border-neutral-200 py-4">
          <ul role="list" className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            <li>
              <a
                href="#"
                aria-current="page"
                className="text-sm font-semibold text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Latest
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Topics
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Guides
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Stories
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Events
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
                Help
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
