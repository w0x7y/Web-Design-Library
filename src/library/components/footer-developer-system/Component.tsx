export default function FooterDeveloperSystem() {
  return (
    <footer className="bg-zinc-950 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800 py-5">
          <p className="flex items-center gap-2 font-mono text-xs text-zinc-400">
            <span
              aria-hidden="true"
              className="size-2 rounded-full bg-emerald-300"
            />
            All systems operational
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-xs text-emerald-300 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            View status{' '}
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4"
            >
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </a>
        </div>
        <div className="grid gap-10 py-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <a
              href="#"
              className="inline-block font-mono text-2xl font-semibold hover:text-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span className="text-emerald-300">/</span> relay
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-400">
              Reliable messages for the products people rely on. Built for the
              details after the first request.
            </p>
            <p className="mt-6 font-mono text-xs text-zinc-400">
              Made for developers. Run by people.
            </p>
          </div>
          <nav aria-label="Build resources">
            <h2 className="font-mono text-xs uppercase tracking-wider text-zinc-400">
              Build
            </h2>
            <ul role="list" className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-zinc-400 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-zinc-400 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  API reference
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-zinc-400 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Quickstart
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-zinc-400 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Changelog
                </a>
              </li>
            </ul>
          </nav>
          <nav aria-label="Company">
            <h2 className="font-mono text-xs uppercase tracking-wider text-zinc-400">
              Company
            </h2>
            <ul role="list" className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-zinc-400 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-zinc-400 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Customers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-zinc-400 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-zinc-400 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Trust center
                </a>
              </li>
            </ul>
          </nav>
          <nav aria-label="Community">
            <h2 className="font-mono text-xs uppercase tracking-wider text-zinc-400">
              Connect
            </h2>
            <ul role="list" className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-zinc-400 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-zinc-400 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-zinc-400 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Engineering blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-zinc-400 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Contact support
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-wrap justify-between gap-4 border-t border-zinc-800 py-5 text-xs text-zinc-400">
          <p>© 2026 Relay Technologies</p>
          <div className="flex flex-wrap gap-5">
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
              Terms
            </a>
            <a
              href="#"
              className="hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              DPA
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
