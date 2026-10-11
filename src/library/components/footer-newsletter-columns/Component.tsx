export default function FooterNewsletterColumns() {
  return (
    <footer className="border-t border-neutral-200 bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 py-16 sm:py-24 lg:grid-cols-2 lg:items-end">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-balance">Headline for the newsletter signup</h2>
            <p className="mt-3 max-w-lg text-base text-neutral-600">
              One sentence that explains what readers receive and why it is useful.
            </p>
          </div>
          <form action="#" method="get">
            <label htmlFor="footer-newsletter-columns-email" className="block text-sm font-medium">
              Email
            </label>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
              <input
                id="footer-newsletter-columns-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="name@example.com"
                aria-describedby="footer-newsletter-columns-hint"
                className="h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              />
              <button
                type="submit"
                className="shrink-0 inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Subscribe
              </button>
            </div>
            <p id="footer-newsletter-columns-hint" className="mt-3 text-sm text-neutral-500">
              State the email frequency and how to unsubscribe.
            </p>
          </form>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 border-t border-neutral-200 py-12 md:grid-cols-4">
          <nav aria-labelledby="footer-newsletter-columns-product">
            <h2 id="footer-newsletter-columns-product" className="text-sm font-semibold">
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
          <nav aria-labelledby="footer-newsletter-columns-resources">
            <h2 id="footer-newsletter-columns-resources" className="text-sm font-semibold">
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
          <nav aria-labelledby="footer-newsletter-columns-company">
            <h2 id="footer-newsletter-columns-company" className="text-sm font-semibold">
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
          <nav aria-labelledby="footer-newsletter-columns-support">
            <h2 id="footer-newsletter-columns-support" className="text-sm font-semibold">
              Support
            </h2>
            <ul role="list" className="mt-4 grid gap-3">
              <li>
                <a
                  href="#"
                  className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  Help center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  Contact support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  Status
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  Accessibility
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
            <a
              href="#"
              className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Cookies
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
