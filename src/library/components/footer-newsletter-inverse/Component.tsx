export default function FooterNewsletterInverse() {
  return (
    <footer className="bg-emerald-950 text-white">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-6">
        <div className="grid gap-8 border-b border-emerald-800 pb-12 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-widest text-lime-200">
              A note for your Sunday
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Stay curious.
              <br />
              We will write.
            </h2>
          </div>
          <form action="#" method="get">
            <label
              htmlFor="footer-newsletter-inverse-email"
              className="mb-3 block text-sm text-emerald-200"
            >
              Your email address
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="footer-newsletter-inverse-email"
                type="email"
                name="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                aria-describedby="footer-newsletter-inverse-hint"
                className="h-12 min-w-0 flex-1 rounded-lg border border-emerald-700 px-4 text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white leading-[normal] [filter:opacity(1)]"
              />
              <button
                type="submit"
                className="h-12 shrink-0 rounded-lg bg-lime-200 px-6 text-sm font-semibold text-emerald-950 hover:bg-lime-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Subscribe
              </button>
            </div>
            <p
              id="footer-newsletter-inverse-hint"
              className="mt-3 text-xs leading-relaxed text-emerald-200"
            >
              One thoughtful email each week. Unsubscribe in a click.
            </p>
          </form>
        </div>
        <div className="flex flex-col gap-8 py-10 md:flex-row md:justify-between">
          <div>
            <a
              href="#"
              className="inline-block font-serif text-3xl hover:text-lime-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              The Considered Life
            </a>
            <p className="mt-3 text-sm text-emerald-200">
              An independent journal about paying attention.
            </p>
          </div>
          <nav aria-label="Footer">
            <ul role="list" className="flex flex-wrap gap-x-6 gap-y-4 text-sm">
              <li>
                <a
                  href="#"
                  className="text-emerald-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Read the journal
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-emerald-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-emerald-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Contribute
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-emerald-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-wrap justify-between gap-4 border-t border-emerald-800 pt-5 text-xs text-emerald-200">
          <p>© 2026 The Considered Life</p>
          <div className="flex gap-5">
            <a
              href="#"
              className="hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Privacy
            </a>
            <a
              href="#"
              className="hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
