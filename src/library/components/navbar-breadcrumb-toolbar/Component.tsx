export default function NavbarBreadcrumbToolbar() {
  return (
    <header className="border-b border-neutral-200 bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <nav aria-label="Breadcrumb" className="min-w-0 text-sm">
            <ol role="list" className="flex flex-wrap items-center gap-2">
              <li>
                <a
                  href="#"
                  className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  Workspace
                </a>
              </li>
              <li aria-hidden="true" className="text-neutral-500">
                /
              </li>
              <li>
                <a
                  href="#"
                  className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  Projects
                </a>
              </li>
              <li aria-hidden="true" className="text-neutral-500">
                /
              </li>
              <li aria-current="page" className="font-semibold">
                Current project
              </li>
            </ol>
          </nav>
          <div className="flex flex-wrap items-center gap-3">
            <details className="relative">
              <summary className="cursor-pointer rounded-md border border-neutral-300 px-3 py-2 text-sm font-medium hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
                Sections
              </summary>
              <nav
                aria-label="Project sections"
                className="absolute left-0 z-10 mt-2 w-44 rounded-lg border border-neutral-200 bg-white p-3 shadow-sm"
              >
                <ul role="list" className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm"
                    >
                      Overview
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm"
                    >
                      Files
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm"
                    >
                      Members
                    </a>
                  </li>
                </ul>
              </nav>
            </details>
            <button
              type="button"
              className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Share project
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
