export default function NavbarDeveloperStatus() {
  return (
    <header className="bg-zinc-950 text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 py-5 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="font-mono text-xl font-bold hover:text-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span className="text-emerald-300">/</span> relay
            </a>
            <span className="rounded border border-zinc-700 px-2 py-1 font-mono text-xs text-zinc-400">
              v2.8 docs
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <form
              action="#"
              method="get"
              className="flex w-full gap-2 sm:w-auto"
            >
              <label
                htmlFor="navbar-developer-status-search"
                className="sr-only"
              >
                Search documentation
              </label>
              <input
                id="navbar-developer-status-search"
                type="search"
                name="q"
                placeholder="Search documentation"
                className="h-10 min-w-0 flex-1 rounded-md border border-zinc-700 bg-zinc-900 px-3 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-60 leading-[normal]"
              />
              <button
                type="submit"
                className="h-10 rounded-md border border-zinc-700 px-3 text-xs hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Search
              </button>
            </form>
            <p className="flex items-center gap-2 text-xs text-zinc-300">
              <span
                aria-hidden="true"
                className="size-2 rounded-full bg-emerald-300"
              />
              All systems operational
            </p>
          </div>
        </div>
        <nav
          aria-label="Documentation"
          className="border-t border-zinc-800 py-4"
        >
          <ul role="list" className="flex flex-wrap gap-x-7 gap-y-4 text-sm">
            <li>
              <a
                href="#"
                className="font-semibold text-emerald-300 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Overview
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-zinc-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Quickstart
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-zinc-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                API reference
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-zinc-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Examples
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-zinc-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Changelog
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
