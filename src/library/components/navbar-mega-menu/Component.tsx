export default function NavbarMegaMenu() {
  return (
    <section className="min-h-[64rem] bg-neutral-50 text-neutral-900 sm:min-h-[60rem] lg:min-h-[28rem]">
      <header className="border-b border-neutral-200 bg-white">
        <div className="relative mx-auto flex h-16 max-w-6xl items-center gap-8 px-6">
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
          <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
            <details open className="group">
              <summary className="flex h-11 cursor-pointer list-none items-center gap-2 rounded-md text-sm font-medium hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
                Products
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
              <div className="absolute inset-x-6 top-full z-10 mt-2 grid grid-cols-12 gap-6 rounded-lg border border-neutral-200 bg-white p-6 shadow-lg">
                <ul role="list" className="col-span-8 grid grid-cols-2 content-start gap-3">
                  <li>
                    <a
                      href="#"
                      className="flex items-start gap-3 rounded-md p-3 hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    >
                      <span
                        aria-hidden="true"
                        className="flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-900"
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
                          <path d="M4 4h16v16H4zM4 10h16M10 10v10" />
                        </svg>
                      </span>
                      <span className="min-w-0">
                        <span className="block text-base font-semibold">Overview</span>
                        <span className="mt-1 block text-sm text-neutral-600">A summary of the main offering</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-start gap-3 rounded-md p-3 hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    >
                      <span
                        aria-hidden="true"
                        className="flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-900"
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
                      </span>
                      <span className="min-w-0">
                        <span className="block text-base font-semibold">Collaboration</span>
                        <span className="mt-1 block text-sm text-neutral-600">Ways to work together in one place</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-start gap-3 rounded-md p-3 hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    >
                      <span
                        aria-hidden="true"
                        className="flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-900"
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
                          <path d="m13 2-9 12h7l-1 8 10-12h-7z" />
                        </svg>
                      </span>
                      <span className="min-w-0">
                        <span className="block text-base font-semibold">Automation</span>
                        <span className="mt-1 block text-sm text-neutral-600">
                          Steps that can run without repetition
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-start gap-3 rounded-md p-3 hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    >
                      <span
                        aria-hidden="true"
                        className="flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-900"
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
                          <path d="M4 20h16M7 16V9M12 16V4M17 16v-5" />
                        </svg>
                      </span>
                      <span className="min-w-0">
                        <span className="block text-base font-semibold">Reporting</span>
                        <span className="mt-1 block text-sm text-neutral-600">
                          Figures that explain recent progress
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-start gap-3 rounded-md p-3 hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    >
                      <span
                        aria-hidden="true"
                        className="flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-900"
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
                          <path d="M8 3v4M16 3v4M6 7h12v4a6 6 0 0 1-12 0zM12 17v4" />
                        </svg>
                      </span>
                      <span className="min-w-0">
                        <span className="block text-base font-semibold">Integrations</span>
                        <span className="mt-1 block text-sm text-neutral-600">
                          Connections to existing tools and data
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-start gap-3 rounded-md p-3 hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    >
                      <span
                        aria-hidden="true"
                        className="flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-900"
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
                          <path d="m12 3 8 4v5c0 5-8 9-8 9s-8-4-8-9V7zM8 12l3 3 5-5" />
                        </svg>
                      </span>
                      <span className="min-w-0">
                        <span className="block text-base font-semibold">Security</span>
                        <span className="mt-1 block text-sm text-neutral-600">Controls for access and protection</span>
                      </span>
                    </a>
                  </li>
                </ul>
                <article className="col-span-4">
                  <div
                    role="img"
                    aria-label="Image placeholder: featured resource preview"
                    className="flex aspect-video items-center justify-center rounded-lg bg-neutral-100 text-neutral-400"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-10"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="9" cy="9" r="2" />
                      <path d="m21 15-5-5L5 21" />
                    </svg>
                  </div>
                  <h2 className="mt-4 text-base font-semibold">Featured resource title</h2>
                  <p className="mt-2 text-sm text-neutral-600">
                    A short sentence that explains what this resource helps readers do.
                  </p>
                  <a
                    href="#"
                    className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-4 inline-block"
                  >
                    Read guide
                  </a>
                </article>
              </div>
            </details>
            <a
              href="#"
              className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Docs
            </a>
            <a
              href="#"
              className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              About
            </a>
          </nav>
          <div className="ml-auto hidden items-center gap-4 lg:flex">
            <a
              href="#"
              className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Log in
            </a>
            <a
              href="#"
              className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Get started
            </a>
          </div>
          <details open className="group ml-auto lg:hidden">
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
              className="absolute inset-x-6 top-full mt-2 rounded-lg border border-neutral-200 bg-white p-6 shadow-lg"
            >
              <h2 className="text-sm font-semibold">Products</h2>
              <ul role="list" className="mt-4">
                <li>
                  <a
                    href="#"
                    className="flex items-start gap-3 rounded-md p-3 hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  >
                    <span
                      aria-hidden="true"
                      className="flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-900"
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
                        <path d="M4 4h16v16H4zM4 10h16M10 10v10" />
                      </svg>
                    </span>
                    <span className="min-w-0">
                      <span className="block text-base font-semibold">Overview</span>
                      <span className="mt-1 block text-sm text-neutral-600">A summary of the main offering</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-start gap-3 rounded-md p-3 hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  >
                    <span
                      aria-hidden="true"
                      className="flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-900"
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
                    </span>
                    <span className="min-w-0">
                      <span className="block text-base font-semibold">Collaboration</span>
                      <span className="mt-1 block text-sm text-neutral-600">Ways to work together in one place</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-start gap-3 rounded-md p-3 hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  >
                    <span
                      aria-hidden="true"
                      className="flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-900"
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
                        <path d="m13 2-9 12h7l-1 8 10-12h-7z" />
                      </svg>
                    </span>
                    <span className="min-w-0">
                      <span className="block text-base font-semibold">Automation</span>
                      <span className="mt-1 block text-sm text-neutral-600">Steps that can run without repetition</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-start gap-3 rounded-md p-3 hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  >
                    <span
                      aria-hidden="true"
                      className="flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-900"
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
                        <path d="M4 20h16M7 16V9M12 16V4M17 16v-5" />
                      </svg>
                    </span>
                    <span className="min-w-0">
                      <span className="block text-base font-semibold">Reporting</span>
                      <span className="mt-1 block text-sm text-neutral-600">Figures that explain recent progress</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-start gap-3 rounded-md p-3 hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  >
                    <span
                      aria-hidden="true"
                      className="flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-900"
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
                        <path d="M8 3v4M16 3v4M6 7h12v4a6 6 0 0 1-12 0zM12 17v4" />
                      </svg>
                    </span>
                    <span className="min-w-0">
                      <span className="block text-base font-semibold">Integrations</span>
                      <span className="mt-1 block text-sm text-neutral-600">
                        Connections to existing tools and data
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-start gap-3 rounded-md p-3 hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  >
                    <span
                      aria-hidden="true"
                      className="flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-900"
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
                        <path d="m12 3 8 4v5c0 5-8 9-8 9s-8-4-8-9V7zM8 12l3 3 5-5" />
                      </svg>
                    </span>
                    <span className="min-w-0">
                      <span className="block text-base font-semibold">Security</span>
                      <span className="mt-1 block text-sm text-neutral-600">Controls for access and protection</span>
                    </span>
                  </a>
                </li>
              </ul>
              <ul role="list" className="mt-4 border-t border-neutral-200 pt-4">
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
              <div className="mt-4 grid gap-3">
                <a
                  href="#"
                  className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  Log in
                </a>
                <a
                  href="#"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  Get started
                </a>
              </div>
            </nav>
          </details>
        </div>
      </header>
    </section>
  )
}
