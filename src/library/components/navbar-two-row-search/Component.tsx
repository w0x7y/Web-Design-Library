export default function NavbarTwoRowSearch() {
  return (
    <header className="bg-white text-neutral-900">
      <div className="bg-neutral-900 text-white">
        <p className="mx-auto flex min-h-10 max-w-6xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-6 py-2 text-center text-sm">
          Short announcement that highlights a useful update
          <a
            href="#"
            className="font-medium underline underline-offset-4 hover:text-neutral-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Read more
          </a>
        </p>
      </div>
      <div className="mx-auto grid max-w-6xl grid-cols-2 items-center gap-4 px-6 py-5 md:grid-cols-[auto_minmax(0,1fr)_auto] md:gap-8">
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
        <form
          action="#"
          method="get"
          role="search"
          className="col-span-2 row-start-2 flex w-full max-w-xl items-center gap-2 md:col-span-1 md:col-start-2 md:row-start-1 md:justify-self-center"
        >
          <label htmlFor="navbar-two-row-search-query" className="sr-only">
            Search destinations
          </label>
          <input
            id="navbar-two-row-search-query"
            name="q"
            type="search"
            placeholder="Search destinations"
            aria-describedby="navbar-two-row-search-hint"
            className="h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          />
          <button
            type="submit"
            aria-label="Submit search"
            className="flex size-10 shrink-0 items-center justify-center rounded-md border border-neutral-300 bg-white hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
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
              <path d="m16 16 4 4" />
            </svg>
          </button>
          <p id="navbar-two-row-search-hint" className="sr-only">
            Search by destination name or keyword.
          </p>
        </form>
        <nav aria-label="Utility navigation" className="flex items-center justify-end gap-4 md:col-start-3">
          <a
            href="#"
            className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            Account
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            Cart{' '}
            <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
              2
            </span>
          </a>
        </nav>
      </div>
      <nav aria-label="Categories" className="border-t border-neutral-200">
        <ul role="list" className="mx-auto flex max-w-6xl flex-wrap gap-x-8 gap-y-3 px-6 py-4">
          <li>
            <a
              href="#"
              className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Product
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Collections
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
              New
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Popular
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
        </ul>
      </nav>
    </header>
  )
}
