export default function NavbarAppTabs() {
  return (
    <header className="min-h-72 bg-white text-neutral-900">
      <div className="mx-auto max-w-7xl px-6">
        <nav aria-label="Breadcrumb" className="py-3">
          <ol role="list" className="flex flex-wrap items-center gap-2 text-xs text-neutral-500">
            <li>
              <a
                href="#"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Workspace
              </a>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <a
                href="#"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Projects
              </a>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">Current project</li>
          </ol>
        </nav>
        <div className="flex h-14 items-center justify-between gap-3 border-y border-neutral-200">
          <div className="flex min-w-0 items-center gap-3">
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
            <p className="max-w-24 truncate text-sm font-medium sm:max-w-64">Project name</p>
            <span className="hidden items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium sm:inline-flex">
              Active
            </span>
          </div>
          <div className="flex shrink-0 items-center gap-1">
            <a
              href="#"
              aria-label="Search workspace"
              className="flex size-10 items-center justify-center rounded-md hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
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
                <circle cx="10.5" cy="10.5" r="6.5" />
                <path d="M16 16l4 4" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="View notifications"
              className="flex size-10 items-center justify-center rounded-md hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
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
                <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" />
              </svg>
            </a>
            <details open className="relative">
              <summary
                aria-label="Account menu for Alex Rivera"
                className="flex size-10 cursor-pointer list-none items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden"
              >
                <span
                  aria-hidden="true"
                  className="flex size-10 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600"
                >
                  AR
                </span>
              </summary>
              <nav
                aria-label="Account navigation"
                className="absolute right-0 top-full z-10 mt-2 w-48 rounded-lg border border-neutral-200 bg-white p-2 shadow-lg"
              >
                <ul role="list">
                  <li>
                    <a
                      href="#"
                      className="flex min-h-11 items-center rounded-md px-3 text-sm font-medium hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    >
                      Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex min-h-11 items-center rounded-md px-3 text-sm font-medium hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    >
                      Preferences
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex min-h-11 items-center rounded-md px-3 text-sm font-medium hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </nav>
            </details>
          </div>
        </div>
        <nav aria-label="Project navigation" className="pt-2">
          <div
            role="region"
            tabIndex={0}
            aria-label="Scrollable project navigation"
            className="overflow-x-auto py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            <ul role="list" className="flex min-w-max gap-1 border-b border-neutral-200">
              <li>
                <a
                  href="#"
                  aria-current="page"
                  className="block border-b-2 border-neutral-900 font-semibold px-3 py-4 text-sm hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  Overview
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block border-b-2 border-transparent font-medium px-3 py-4 text-sm hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  Activity
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block border-b-2 border-transparent font-medium px-3 py-4 text-sm hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  Files
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block border-b-2 border-transparent font-medium px-3 py-4 text-sm hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  Members
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block border-b-2 border-transparent font-medium px-3 py-4 text-sm hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  Settings
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}
