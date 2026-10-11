export default function FooterCtaBand() {
  return (
    <footer className="border-t border-neutral-200 bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 py-16 text-center sm:py-24">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Headline that makes the final invitation clear
            </h2>
            <p className="mt-4 text-lg text-pretty text-neutral-600">
              One sentence that connects the main outcome to this final action.
            </p>
          </div>
          <div className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
            <a
              href="#"
              className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Primary action
            </a>
            <a
              href="#"
              className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Secondary action
            </a>
          </div>
        </div>
        <div className="grid gap-8 border-t border-neutral-200 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
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
            <p className="mt-4 max-w-xs text-sm text-neutral-600">
              A short statement that explains the purpose of this site.
            </p>
          </div>
          <nav aria-labelledby="footer-cta-band-product">
            <h2 id="footer-cta-band-product" className="text-sm font-semibold">
              Product
            </h2>
            <ul role="list" className="mt-4 grid gap-3">
              <li>
                <a
                  href="#"
                  className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  Overview
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  Features
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
                  Integrations
                </a>
              </li>
            </ul>
          </nav>
          <nav aria-labelledby="footer-cta-band-resources">
            <h2 id="footer-cta-band-resources" className="text-sm font-semibold">
              Resources
            </h2>
            <ul role="list" className="mt-4 grid gap-3">
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
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  Updates
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  Community
                </a>
              </li>
            </ul>
          </nav>
          <nav aria-labelledby="footer-cta-band-company">
            <h2 id="footer-cta-band-company" className="text-sm font-semibold">
              Company
            </h2>
            <ul role="list" className="mt-4 grid gap-3">
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
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  Partners
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-col gap-4 border-t border-neutral-200 py-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-neutral-500">© 2026 Site name</p>
          <nav aria-label="Legal navigation" className="flex flex-wrap gap-x-6 gap-y-3">
            <a
              href="#"
              className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Terms
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
