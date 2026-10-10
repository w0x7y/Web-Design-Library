export default function NavbarSeedCatalog() {
  return (
    <header className="border-b border-green-200 bg-green-50 text-green-950">
      <div className="mx-auto grid max-w-7xl gap-6 p-6 md:grid-cols-[15rem_1fr]">
        <div className="md:border-r md:border-green-200 md:pr-6">
          <a href="#" className="flex w-fit items-center gap-2 text-2xl font-medium tracking-tight hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6 shrink-0">
              <path d="M5 19C3 8 9 4 20 4c0 11-4 17-15 15ZM5 19 16 8" />
            </svg>
            common acre
          </a>
          <p className="mt-3 text-xs">A community seed bank<br />277 varieties, saved by growers</p>
        </div>
        <div>
          <nav aria-label="Seed bank" className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Browse the seeds</a>
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Saving seed</a>
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Grower network</a>
          </nav>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border border-green-700 bg-white p-3">
            <p className="text-sm">Spring 2027 seed list<span className="mt-1 block text-xs text-green-800">Open-pollinated. Regionally grown.</span></p>
            <a href="#" className="text-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Download catalog <span className="ml-2 text-xs text-green-800">PDF / 1.8 MB</span></a>
          </div>
        </div>
      </div>
    </header>
  )
}
