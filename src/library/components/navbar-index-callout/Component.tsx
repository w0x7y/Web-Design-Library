export default function NavbarIndexCallout() {
  return (
    <header className="border-b border-neutral-200 bg-white text-neutral-900">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-8 md:grid-cols-3 lg:grid-cols-12">
        <div className="lg:col-span-3">
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
          <p className="mt-4 max-w-xs text-sm text-neutral-600">
            A short descriptor that explains the purpose of this site.
          </p>
        </div>
        <nav aria-label="Site index" className="grid grid-cols-2 gap-6 md:col-span-2 lg:col-span-6">
          <ul role="list">
            <li>
              <a
                href="#"
                className="flex items-center justify-between gap-2 border-b border-neutral-200 py-3 text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Product
                <span aria-hidden="true" className="font-mono text-xs text-neutral-500">
                  01
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-between gap-2 border-b border-neutral-200 py-3 text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Pricing
                <span aria-hidden="true" className="font-mono text-xs text-neutral-500">
                  02
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-between gap-2 border-b border-neutral-200 py-3 text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Docs
                <span aria-hidden="true" className="font-mono text-xs text-neutral-500">
                  03
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-between gap-2 border-b border-neutral-200 py-3 text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                About
                <span aria-hidden="true" className="font-mono text-xs text-neutral-500">
                  04
                </span>
              </a>
            </li>
          </ul>
          <ul role="list">
            <li>
              <a
                href="#"
                className="flex items-center justify-between gap-2 border-b border-neutral-200 py-3 text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Guides
                <span aria-hidden="true" className="font-mono text-xs text-neutral-500">
                  05
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-between gap-2 border-b border-neutral-200 py-3 text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Stories
                <span aria-hidden="true" className="font-mono text-xs text-neutral-500">
                  06
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-between gap-2 border-b border-neutral-200 py-3 text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Events
                <span aria-hidden="true" className="font-mono text-xs text-neutral-500">
                  07
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-between gap-2 border-b border-neutral-200 py-3 text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Help
                <span aria-hidden="true" className="font-mono text-xs text-neutral-500">
                  08
                </span>
              </a>
            </li>
          </ul>
        </nav>
        <aside className="rounded-lg border border-neutral-200 bg-neutral-50 p-6 md:col-span-3 lg:col-span-3">
          <p className="text-sm font-medium text-neutral-500">Callout label</p>
          <h2 className="mt-2 text-base font-semibold">Title for the highlighted destination</h2>
          <a
            href="#"
            className="mt-6 inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            Explore more
          </a>
        </aside>
      </div>
    </header>
  )
}
