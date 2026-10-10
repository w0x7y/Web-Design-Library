export default function NavbarDropdownMenus() {
  return (
    <section className="min-h-[31rem] bg-neutral-50 text-neutral-900 md:min-h-[25rem]">
      <header className="border-b border-neutral-200 bg-white">
        <div className="relative mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 px-6">
          <div className="flex h-16 items-center">
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
          </div>
          <nav
            aria-label="Main navigation"
            className="order-3 flex min-h-14 w-full flex-wrap items-center gap-x-4 gap-y-1 pb-3 md:order-none md:w-auto md:flex-nowrap md:gap-6 md:pb-0"
          >
            <details name="navbar-dropdown-menus-group" open className="group md:relative">
              <summary className="flex h-11 cursor-pointer list-none items-center gap-2 rounded-md text-sm font-medium hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
                Product
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-5 shrink-0 transition-transform group-open:rotate-180"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <ul
                role="list"
                className="absolute inset-x-6 top-full z-10 mt-2 rounded-lg border border-neutral-200 bg-white p-2 shadow-lg md:inset-x-auto md:left-0 md:w-72"
              >
                <li>
                  <a
                    href="#"
                    className="block rounded-md p-3 hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  >
                    <span className="block text-base font-semibold">Overview</span>
                    <span className="mt-1 block text-sm text-neutral-600">Introduce the main offering</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block rounded-md p-3 hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  >
                    <span className="block text-base font-semibold">Features</span>
                    <span className="mt-1 block text-sm text-neutral-600">Explore core capabilities</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block rounded-md p-3 hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  >
                    <span className="block text-base font-semibold">Integrations</span>
                    <span className="mt-1 block text-sm text-neutral-600">Connect existing tools</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block rounded-md p-3 hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  >
                    <span className="block text-base font-semibold">Security</span>
                    <span className="mt-1 block text-sm text-neutral-600">Review access and protection</span>
                  </a>
                </li>
              </ul>
            </details>
            <a
              href="#"
              className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Pricing
            </a>
            <details name="navbar-dropdown-menus-group" className="group md:relative">
              <summary className="flex h-11 cursor-pointer list-none items-center gap-2 rounded-md text-sm font-medium hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
                Resources
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-5 shrink-0 transition-transform group-open:rotate-180"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <ul
                role="list"
                className="absolute inset-x-6 top-full z-10 mt-2 rounded-lg border border-neutral-200 bg-white p-2 shadow-lg md:inset-x-auto md:left-0 md:w-72"
              >
                <li>
                  <a
                    href="#"
                    className="block rounded-md p-3 hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  >
                    <span className="block text-base font-semibold">Guides</span>
                    <span className="mt-1 block text-sm text-neutral-600">Learn the first steps</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block rounded-md p-3 hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  >
                    <span className="block text-base font-semibold">Documentation</span>
                    <span className="mt-1 block text-sm text-neutral-600">Find reference examples</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block rounded-md p-3 hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  >
                    <span className="block text-base font-semibold">Updates</span>
                    <span className="mt-1 block text-sm text-neutral-600">Read release information</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block rounded-md p-3 hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  >
                    <span className="block text-base font-semibold">Support</span>
                    <span className="mt-1 block text-sm text-neutral-600">Get help with a question</span>
                  </a>
                </li>
              </ul>
            </details>
            <a
              href="#"
              className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              About
            </a>
          </nav>
          <a
            href="#"
            className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            Get started
          </a>
        </div>
      </header>
    </section>
  )
}
