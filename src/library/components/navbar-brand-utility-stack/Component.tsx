export default function NavbarBrandUtilityStack() {
  return (
    <header className="border-b border-neutral-200 bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-6">
        <div className="grid gap-6 md:grid-cols-[14rem_minmax(0,1fr)]">
          <div className="space-y-3">
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
            <p className="text-sm text-neutral-600">
              One-line identity descriptor.
            </p>
          </div>
          <div className="space-y-5">
            <nav
              aria-label="Utility navigation"
              className="flex flex-wrap justify-start gap-4 border-b border-neutral-200 pb-4 text-sm md:justify-end"
            >
              <a
                href="#"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Help
              </a>
              <a
                href="#"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Account
              </a>
              <a
                href="#"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Contact
              </a>
            </nav>
            <nav
              aria-label="Main navigation"
              className="flex flex-wrap items-center gap-4 text-sm md:justify-end"
            >
              <a
                href="#"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Product
              </a>
              <a
                href="#"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Solutions
              </a>
              <a
                href="#"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Pricing
              </a>
              <a
                href="#"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Docs
              </a>
              <a
                href="#"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                About
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
