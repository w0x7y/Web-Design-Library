// Fonts: Space Mono (https://fonts.google.com/specimen/Space+Mono)
export default function NavbarCycleService() {
  return (
    <header className="border-y-2 border-black bg-yellow-100 font-['Space_Mono',ui-monospace,monospace] text-black">
      <div className="mx-auto grid max-w-7xl border-x-2 border-black md:grid-cols-[1fr_1fr_auto]">
        <div className="border-b-2 border-black p-6 md:border-r-2 md:border-b-0">
          <a href="#" className="flex w-fit items-center gap-4 text-2xl font-bold leading-none hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">
            <svg aria-hidden="true" viewBox="0 0 40 40" className="size-10 shrink-0">
              <path d="M0 0h20v20H0zM20 20h20v20H20z" fill="currentColor" />
              <path d="M20 0h20v20H20zM0 20h20v20H0z" className="fill-orange-600" />
            </svg>
            <span>SPOKE<br />WORKS</span>
          </a>
          <p className="mt-4 text-xs">Bicycle repair / Bristol BS3</p>
        </div>
        <nav aria-label="Bicycle workshop" className="grid grid-cols-2 content-center gap-4 border-b-2 border-black p-6 text-sm md:border-r-2 md:border-b-0">
          <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Tune-ups</a>
          <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Repairs</a>
          <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">The mechanics</a>
          <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Find the shop</a>
        </nav>
        <a href="#" className="flex flex-col justify-center bg-black p-6 text-yellow-100 hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"><span className="text-xs">BENCH SPACE THIS WEEK</span><span className="mt-4 text-lg font-bold">Book a repair</span></a>
      </div>
    </header>
  )
}
