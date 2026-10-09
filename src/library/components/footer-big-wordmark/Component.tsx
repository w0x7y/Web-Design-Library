// Fonts: Big Shoulders (https://fonts.google.com/specimen/Big+Shoulders)
export default function FooterBigWordmark() {
  return (
    <footer className="overflow-hidden bg-neutral-950 font-['Big_Shoulders',ui-sans-serif,system-ui,sans-serif] text-neutral-100 antialiased">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4">
        <div className="px-4 py-10 sm:col-span-2 sm:px-6 lg:px-8 lg:py-12">
          <h2 className="max-w-md text-[2.5rem] leading-[0.92] font-extrabold uppercase sm:text-5xl">
            Line-up drops every Monday at noon
          </h2>
          <form action="#" className="mt-8 max-w-lg">
            <label htmlFor="footer-big-wordmark-email" className="text-sm font-bold tracking-[0.08em] uppercase">
              Email address
            </label>
            <div className="mt-2 flex">
              <input
                id="footer-big-wordmark-email"
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className="h-14 min-w-0 flex-1 border-2 border-r-0 border-neutral-100 px-4 text-xl font-semibold placeholder:text-neutral-400 focus-visible:bg-neutral-100 focus-visible:text-neutral-950 focus-visible:outline-hidden focus-visible:placeholder:text-neutral-600"
              />
              <button
                type="submit"
                className="h-14 shrink-0 cursor-pointer border-2 border-neutral-100 bg-lime-300 px-6 text-xl font-black tracking-[0.04em] text-neutral-950 uppercase transition-colors hover:bg-white focus-visible:outline-2 focus-visible:-outline-offset-6 focus-visible:outline-neutral-950"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>

        <nav aria-labelledby="footer-big-wordmark-club" className="border-t-2 border-neutral-100 px-4 py-10 sm:px-6 lg:border-t-0 lg:border-l-2 lg:px-8 lg:py-12">
          <h2 id="footer-big-wordmark-club" className="text-sm font-bold tracking-[0.08em] text-neutral-400 uppercase">
            Club
          </h2>
          <ul role="list" className="mt-4 space-y-1 text-3xl leading-tight font-bold uppercase">
            <li><a href="#" className="-mx-1 px-1 hover:bg-lime-300 hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300">This week</a></li>
            <li><a href="#" className="-mx-1 px-1 hover:bg-lime-300 hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300">Tickets</a></li>
            <li><a href="#" className="-mx-1 px-1 hover:bg-lime-300 hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300">Residents</a></li>
            <li><a href="#" className="-mx-1 px-1 hover:bg-lime-300 hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300">Room hire</a></li>
            <li><a href="#" className="-mx-1 px-1 hover:bg-lime-300 hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300">Press kit</a></li>
          </ul>
        </nav>

        <div className="border-t-2 border-neutral-100 px-4 py-10 sm:border-l-2 sm:px-6 lg:border-t-0 lg:px-8 lg:py-12">
          <h2 className="text-sm font-bold tracking-[0.08em] text-neutral-400 uppercase">Visit</h2>
          <address className="mt-4 text-2xl leading-tight font-bold not-italic uppercase">
            Lagerhalle 3
            <br />
            Am Flutgraben 4
            <br />
            12435 Berlin
          </address>
          <dl className="mt-6 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-lg font-medium">
            <dt className="font-bold uppercase">Thu</dt>
            <dd>23:00 to 06:00</dd>
            <dt className="font-bold uppercase">Fri, Sat</dt>
            <dd>23:00 until Sunday</dd>
          </dl>
          <p className="mt-6 max-w-xs text-lg leading-snug font-medium text-neutral-400">Awareness team on every floor, every night.</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 border-y-2 border-neutral-100 px-4 py-5 text-sm font-bold tracking-[0.08em] uppercase sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>© 2026 Sublevel e.V.</p>
        <nav aria-label="Legal and social">
          <ul role="list" className="flex flex-wrap gap-x-6 gap-y-2">
            <li><a href="#" className="-mx-1 px-1 hover:bg-lime-300 hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300">Imprint</a></li>
            <li><a href="#" className="-mx-1 px-1 hover:bg-lime-300 hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300">Privacy</a></li>
            <li><a href="#" className="-mx-1 px-1 hover:bg-lime-300 hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300">House rules</a></li>
            <li><a href="#" className="-mx-1 px-1 hover:bg-lime-300 hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300">Instagram</a></li>
            <li><a href="#" className="-mx-1 px-1 hover:bg-lime-300 hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300">SoundCloud</a></li>
          </ul>
        </nav>
      </div>

      {/* The wordmark is sized in container units, so it spans the footer at any width. Its glyph box rises above
          the paragraph, so it ignores the pointer to keep the links above it clickable. */}
      <div className="@container px-4 sm:px-6 lg:px-8">
        <p aria-hidden="true" className="pointer-events-none pt-[3cqw] text-[29.4cqw] leading-[0.81] font-black tracking-[-0.02em] uppercase select-none">
          Sublevel
        </p>
      </div>
    </footer>
  )
}
