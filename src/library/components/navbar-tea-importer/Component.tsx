export default function NavbarTeaImporter() {
  return (
    <header className="border-b border-green-200 bg-green-50 text-green-950">
      <div className="mx-auto grid max-w-7xl gap-6 p-6 md:grid-cols-[15rem_1fr]">
        <div className="md:border-r md:border-green-200 md:pr-6">
          <a href="#" className="flex w-fit items-center gap-2 text-2xl font-medium tracking-tight hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6 shrink-0">
              <path d="M4 9h12v6a6 6 0 0 1-12 0V9ZM16 10h2a3 3 0 0 1 0 6h-2M3 22h15M7 6V2M12 6V2" />
            </svg>
            leaf passage
          </a>
          <p className="mt-3 text-xs">Independent tea importers<br />42 teas, bought at the source</p>
        </div>
        <div>
          <nav aria-label="Tea importer" className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Explore the teas</a>
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Brewing guides</a>
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Our producers</a>
          </nav>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border border-green-700 bg-white p-3">
            <p className="text-sm">Autumn 2026 tea arrivals<span className="mt-1 block text-xs text-green-800">Single gardens. Harvest dates on every bag.</span></p>
            <a href="#" className="text-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Download tea list <span className="ml-2 text-xs text-green-800">PDF / 1.2 MB</span></a>
          </div>
        </div>
      </div>
    </header>
  )
}
