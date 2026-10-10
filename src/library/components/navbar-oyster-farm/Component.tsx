// Fonts: IBM Plex Sans (https://fonts.google.com/specimen/IBM+Plex+Sans)
export default function NavbarOysterFarm() {
  return (
    <header className="border-b border-blue-200 bg-sky-50 font-['IBM_Plex_Sans',ui-sans-serif,system-ui,sans-serif] text-blue-950">
      <div className="mx-auto grid max-w-7xl items-center gap-6 p-6 md:grid-cols-2 lg:grid-cols-[1fr_1.4fr_1fr]">
        <div>
          <a href="#" className="flex w-fit items-center gap-3 text-2xl font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">
            <svg aria-hidden="true" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" className="size-8">
              <path d="M6 23C1 18 4 8 11 5c6-4 14 0 17 7 3 8-6 17-14 16-4 0-6-2-8-5ZM8 20c0-6 4-11 9-12M12 23c0-6 4-10 9-12M16 25c0-5 4-9 9-10" />
            </svg>
            Tidemark
          </a>
          <p className="mt-2 text-xs">Estuary oysters / Mersea Island</p>
        </div>
        <nav aria-label="Oyster farm">
          <ul role="list" className="grid grid-cols-2 gap-x-6 gap-y-3">
            <li>
              <a href="#" className="flex items-start gap-2 text-sm font-medium hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"><span className="pt-0.5 text-xs text-blue-700">01</span>Our oysters</a>
            </li>
            <li>
              <a href="#" className="flex items-start gap-2 text-sm font-medium hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"><span className="pt-0.5 text-xs text-blue-700">02</span>The growing beds</a>
            </li>
            <li>
              <a href="#" className="flex items-start gap-2 text-sm font-medium hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"><span className="pt-0.5 text-xs text-blue-700">03</span>Harvest notes</a>
            </li>
            <li>
              <a href="#" className="flex items-start gap-2 text-sm font-medium hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"><span className="pt-0.5 text-xs text-blue-700">04</span>Farm visits</a>
            </li>
          </ul>
        </nav>
        <div className="rounded-lg bg-blue-950 p-4 text-white md:col-span-2 lg:col-span-1">
          <p className="mb-3 text-sm">Harvested to your order.</p>
          <a href="#" className="flex min-h-11 items-center justify-between gap-4 rounded bg-white px-4 text-sm font-semibold text-blue-950 hover:bg-sky-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Order a dozen
            <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4">
              <path d="M4 12 12 4M4 4h8v8" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  )
}
