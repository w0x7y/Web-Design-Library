export default function FooterArtisanSignature() {
  return (
    <footer className="bg-stone-100 text-stone-950">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-6">
        <div className="flex flex-col gap-8 border-b border-stone-300 pb-12 md:flex-row md:items-end md:justify-between">
          <p className="max-w-xl font-serif text-4xl leading-tight sm:text-5xl">
            Good things take
            <br />a thoughtful hand.
          </p>
          <a
            href="#"
            className="inline-flex w-fit items-center gap-5 border-b border-orange-800 pb-2 text-sm text-orange-800 hover:text-stone-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
          >
            Visit the studio{' '}
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
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </a>
        </div>
        <div className="grid gap-8 py-10 md:grid-cols-3">
          <div>
            <a
              href="#"
              className="inline-block font-serif text-3xl italic hover:text-orange-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            >
              Morrow Studio
            </a>
            <p className="mt-3 max-w-xs text-sm text-stone-600">
              Useful objects, made slowly
              <br />
              and kept for a long time.
            </p>
          </div>
          <address className="text-sm leading-relaxed text-stone-600 not-italic">
            <p className="mb-2 text-xs uppercase tracking-wider text-stone-950">
              Find us
            </p>
            14 Foundry Lane
            <br />
            Bath, BA1 2AB
            <br />
            Tuesday–Saturday, 10am–5pm
          </address>
          <nav aria-label="Footer">
            <ul role="list" className="grid grid-cols-2 gap-4 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
                >
                  The collection
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
                >
                  Our process
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
                >
                  Care guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-wrap justify-between gap-4 border-t border-stone-300 pt-5 text-xs text-stone-600">
          <p>© 2026 Morrow Studio</p>
          <div className="flex flex-wrap gap-5">
            <a
              href="#"
              className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            >
              Privacy
            </a>
            <a
              href="#"
              className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            >
              Terms
            </a>
            <a
              href="#"
              className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
