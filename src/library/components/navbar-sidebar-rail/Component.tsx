export default function NavbarSidebarRail() {
  return (
    <header className="border-b border-neutral-200 bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-6 grid gap-8 md:grid-cols-[12rem_minmax(0,1fr)]">
        <nav
          aria-label="Workspace navigation"
          className="flex flex-col gap-6 border-b border-neutral-200 pb-6 md:border-b-0 md:border-r md:pr-6 md:pb-0"
        >
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
          <ul role="list" className="space-y-2">
            <li>
              <a
                href="#"
                aria-current="page"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 block py-2"
              >
                Overview
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 block py-2"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 block py-2"
              >
                Activity
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 block py-2"
              >
                Members
              </a>
            </li>
          </ul>
          <a
            href="#"
            className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            Settings
          </a>
        </nav>
        <div className="min-w-0">
          <p className="text-sm font-medium text-neutral-500">Workspace</p>
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl mt-3">
            Current page heading
          </h2>
          <p className="text-base text-neutral-600 mt-4">
            Short context for the page reached through this navigation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#"
              className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              New project
            </a>
            <a
              href="#"
              className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              View activity
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
