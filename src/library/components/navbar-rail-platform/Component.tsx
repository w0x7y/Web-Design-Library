// Fonts: IBM Plex Sans (https://fonts.google.com/specimen/IBM+Plex+Sans)
export default function NavbarRailPlatform() {
  return (
    <header className="border-b border-blue-200 bg-sky-50 font-['IBM_Plex_Sans',ui-sans-serif,system-ui,sans-serif] text-blue-950">
      <div className="mx-auto grid max-w-7xl items-center gap-6 p-6 md:grid-cols-2 lg:grid-cols-[1fr_1.4fr_1fr]">
        <div>
          <a href="#" className="flex w-fit items-center gap-3 text-2xl font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">
            <svg aria-hidden="true" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" className="size-8">
              <path d="M9 3v26M23 3v26M9 8h14M9 16h14M9 24h14" />
            </svg>
            Northline
          </a>
          <p className="mt-2 text-xs">Regional rail / The northern counties</p>
        </div>
        <nav aria-label="Rail travel">
          <ul role="list" className="grid grid-cols-2 gap-x-6 gap-y-3">
            <li>
              <a href="#" className="flex items-start gap-2 text-sm font-medium hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"><span className="pt-0.5 text-xs text-blue-700">01</span>Plan a journey</a>
            </li>
            <li>
              <a href="#" className="flex items-start gap-2 text-sm font-medium hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"><span className="pt-0.5 text-xs text-blue-700">02</span>Our stations</a>
            </li>
            <li>
              <a href="#" className="flex items-start gap-2 text-sm font-medium hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"><span className="pt-0.5 text-xs text-blue-700">03</span>Live departures</a>
            </li>
            <li>
              <a href="#" className="flex items-start gap-2 text-sm font-medium hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"><span className="pt-0.5 text-xs text-blue-700">04</span>Travel support</a>
            </li>
          </ul>
        </nav>
        <div className="rounded-lg bg-blue-950 p-4 text-white md:col-span-2 lg:col-span-1">
          <p className="mb-3 text-sm">Your next stop starts here.</p>
          <a href="#" className="flex min-h-11 items-center justify-between gap-4 rounded bg-white px-4 text-sm font-semibold text-blue-950 hover:bg-sky-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Find tickets
            <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4">
              <path d="M4 12 12 4M4 4h8v8" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  )
}
