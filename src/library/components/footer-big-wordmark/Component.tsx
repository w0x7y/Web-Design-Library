export default function FooterBigWordmark() {
  return (
    <footer className="overflow-hidden bg-neutral-950 text-white">
      <div className="mx-auto max-w-6xl px-6 pt-16 sm:pt-24">
        <div className="grid border-l border-t border-neutral-800 sm:grid-cols-2 lg:grid-cols-4">
          <div className="border-b border-r border-neutral-800 p-6 sm:col-span-2">
            <a
              href="#"
              aria-label="Logo home"
              className="inline-flex items-center gap-2 font-semibold text-white hover:text-neutral-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Closing line that invites the next step
            </h2>
            <p className="mt-4 max-w-md text-base text-neutral-300">
              One sentence that gives the final invitation a clear purpose.
            </p>
            <a
              href="#"
              className="text-sm font-medium text-neutral-300 underline underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white mt-6 inline-block"
            >
              Start a conversation
            </a>
          </div>
          <nav aria-labelledby="footer-big-wordmark-links" className="border-b border-r border-neutral-800 p-6">
            <h2 id="footer-big-wordmark-links" className="text-sm font-semibold">
              Explore
            </h2>
            <ul role="list" className="mt-4 grid gap-3">
              <li>
                <a
                  href="#"
                  className="text-sm font-medium text-neutral-300 underline underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Product
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-medium text-neutral-300 underline underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-medium text-neutral-300 underline underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Resources
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-medium text-neutral-300 underline underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="border-b border-r border-neutral-800 p-6">
            <h2 className="text-sm font-semibold">Contact</h2>
            <address className="mt-4 text-sm not-italic text-neutral-300">
              Street address line
              <br />
              Locality and postal code
              <br />
              Country
            </address>
            <a
              href="mailto:name@example.com"
              className="text-sm font-medium text-neutral-300 underline underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white mt-6 inline-block break-all"
            >
              name@example.com
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-neutral-800 py-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-neutral-300">© 2026 Site name</p>
          <nav aria-label="Legal navigation" className="flex flex-wrap gap-x-6 gap-y-3">
            <a
              href="#"
              className="text-sm font-medium text-neutral-300 underline underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm font-medium text-neutral-300 underline underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Terms
            </a>
          </nav>
        </div>
        <p
          aria-hidden="true"
          className="-mb-[0.15em] text-center text-[18vw] leading-none font-semibold tracking-tight"
        >
          Logo
        </p>
      </div>
    </footer>
  )
}
