export default function FooterContactHours() {
  return (
    <footer className="bg-white text-neutral-900">
      <div className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium text-neutral-500">Phone</p>
            <a
              href="tel:+15550102000"
              className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-1 inline-block"
            >
              +1 (555) 010-2000
            </a>
          </div>
          <a
            href="#"
            className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            Book a visit
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 py-16 sm:grid-cols-2 sm:py-24 lg:grid-cols-3">
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
            <address className="mt-4 text-sm not-italic text-neutral-600">
              Street address line
              <br />
              Locality and postal code
              <br />
              Country
            </address>
            <p className="mt-4 max-w-xs text-sm text-neutral-500">
              A short access note for people planning their visit.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold">Opening hours</h2>
            <dl className="mt-4 max-w-xs">
              <div className="flex justify-between gap-4 border-b border-neutral-200 py-2 text-sm">
                <dt className="font-medium">Monday</dt>
                <dd className="text-neutral-600">09:00–17:00</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-neutral-200 py-2 text-sm">
                <dt className="font-medium">Tuesday</dt>
                <dd className="text-neutral-600">09:00–17:00</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-neutral-200 py-2 text-sm">
                <dt className="font-medium">Wednesday</dt>
                <dd className="text-neutral-600">09:00–17:00</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-neutral-200 py-2 text-sm">
                <dt className="font-medium">Thursday</dt>
                <dd className="text-neutral-600">09:00–17:00</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-neutral-200 py-2 text-sm">
                <dt className="font-medium">Friday</dt>
                <dd className="text-neutral-600">09:00–17:00</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-neutral-200 py-2 text-sm">
                <dt className="font-medium">Saturday</dt>
                <dd className="text-neutral-600">10:00–14:00</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-neutral-200 py-2 text-sm">
                <dt className="font-medium">Sunday</dt>
                <dd className="text-neutral-600">Closed</dd>
              </div>
            </dl>
          </div>
          <nav aria-labelledby="footer-contact-hours-directory">
            <h2 id="footer-contact-hours-directory" className="text-sm font-semibold">
              Directory
            </h2>
            <ul role="list" className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3">
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
                  Guides
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  Visit
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
                  Help
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  Contact
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
