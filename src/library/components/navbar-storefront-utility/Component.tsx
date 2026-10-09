export default function NavbarStorefrontUtility() {
  return (
    <header className="bg-stone-50 text-emerald-950">
      <div className="bg-emerald-950 px-5 py-3 text-center text-xs text-white">
        Made for everyday living. Free shipping over $75.
      </div>
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="#"
            className="w-fit font-serif text-3xl tracking-tight hover:text-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
          >
            Gather &amp; Co.
          </a>
          <div className="flex flex-wrap items-center gap-5 text-sm">
            <a
              href="#"
              className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            >
              Our story
            </a>
            <a
              href="#"
              className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            >
              Account
            </a>
            <a
              href="#"
              className="rounded-full border border-stone-300 px-4 py-2 hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            >
              Bag <span className="ml-2 text-xs">(2)</span>
            </a>
          </div>
        </div>
        <nav
          aria-label="Shop categories"
          className="border-t border-stone-200 py-4"
        >
          <ul role="list" className="flex flex-wrap gap-x-8 gap-y-4 text-sm">
            <li>
              <a
                href="#"
                className="font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
              >
                New arrivals
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
              >
                Kitchen
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
              >
                Textiles
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
              >
                Objects
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
              >
                Gifts under $50
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
