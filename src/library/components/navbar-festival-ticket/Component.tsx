export default function NavbarFestivalTicket() {
  return (
    <header className="bg-lime-50 text-emerald-950">
      <div className="bg-lime-200 px-6 py-3 text-center text-xs font-semibold">
        Early bird tickets are here. Bring your curious friends.
      </div>
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 py-6 md:flex-row md:items-center md:justify-between">
          <a
            href="#"
            className="w-fit text-3xl leading-[0.9] font-black tracking-tight hover:text-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
          >
            SIDE
            <br />
            QUEST
          </a>
          <nav
            aria-label="Festival"
            className="flex flex-wrap items-center gap-6 text-sm font-semibold"
          >
            <a
              href="#"
              className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            >
              The lineup
            </a>
            <a
              href="#"
              className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            >
              Workshops
            </a>
            <a
              href="#"
              className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            >
              Good to know
            </a>
            <a
              href="#"
              className="inline-flex min-h-11 items-center gap-4 rounded-full bg-orange-700 px-5 text-white hover:bg-orange-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            >
              Get tickets{' '}
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
          </nav>
        </div>
        <div className="flex flex-col gap-2 border-t border-emerald-950 py-4 font-mono text-xs sm:flex-row sm:justify-between">
          <p>12–13 June 2027 / Two days of making things</p>
          <p>The Old Tram Depot, Manchester</p>
        </div>
      </div>
    </header>
  )
}
