export default function FooterFestivalArchive() {
  return (
    <footer className="bg-orange-100 text-orange-950">
      <div className="mx-auto max-w-6xl px-6 pt-14 pb-6">
        <div className="grid gap-10 pb-12 lg:grid-cols-3">
          <div>
            <a
              href="#"
              className="inline-block text-4xl font-black tracking-tight hover:text-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            >
              SIDE QUEST
            </a>
            <p className="mt-4 text-xl font-bold">12–13 June 2027</p>
            <p className="mt-2 text-sm">
              The Old Tram Depot
              <br />
              Manchester, UK
            </p>
          </div>
          <nav aria-label="Festival information">
            <p className="text-xs font-bold uppercase tracking-wider text-orange-800">
              For your visit
            </p>
            <ul role="list" className="mt-5 grid grid-cols-2 gap-4 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
                >
                  The lineup
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
                >
                  Getting here
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
                >
                  Access guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
                >
                  Code of conduct
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
                >
                  Past editions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              See you on the side quest.
            </h2>
            <p className="mt-3 text-sm leading-relaxed">
              First news, fresh workshops and the occasional good idea. Get the
              festival notes in your inbox.
            </p>
            <a
              href="#"
              className="mt-5 inline-flex min-h-12 items-center gap-3 rounded-full bg-emerald-950 px-5 text-sm font-semibold text-white hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            >
              Send me the good stuff{' '}
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
        <div className="flex flex-wrap justify-between gap-4 border-t border-orange-300 pt-5 text-xs">
          <p>© 2026 Side Quest / Made with a little mischief.</p>
          <div className="flex flex-wrap gap-5">
            <a
              href="#"
              className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            >
              Instagram
            </a>
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
              Ticket terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
