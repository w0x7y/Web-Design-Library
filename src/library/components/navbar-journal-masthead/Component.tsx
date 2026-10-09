export default function NavbarJournalMasthead() {
  return (
    <header className="bg-white text-stone-950">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap justify-between gap-3 border-b border-stone-200 py-4 font-mono text-xs text-stone-600">
          <p>Saturday, 10 October 2026</p>
          <p>Independent since 2014</p>
        </div>
        <div className="py-8 text-center">
          <a
            href="#"
            className="inline-block font-serif text-4xl tracking-tight hover:text-orange-800 sm:text-5xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
          >
            The Considered Life
          </a>
          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-stone-600">
            Ideas for a slower, more curious world
          </p>
        </div>
        <div className="flex flex-col gap-5 border-y border-stone-950 py-4 md:flex-row md:items-center md:justify-between">
          <nav aria-label="Journal topics">
            <ul role="list" className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
                >
                  Latest
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
                >
                  Culture
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
                >
                  Places
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
                >
                  People
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
                >
                  The archive
                </a>
              </li>
            </ul>
          </nav>
          <a
            href="#"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-orange-800 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
          >
            Become a reader{' '}
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
      </div>
    </header>
  )
}
