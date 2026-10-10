// Fonts: Space Grotesk (https://fonts.google.com/specimen/Space+Grotesk)
export default function NavbarObservatoryNight() {
  return (
    <header className="bg-linear-to-r from-neutral-950 via-orange-950 to-amber-950 font-['Space_Grotesk',ui-sans-serif,system-ui,sans-serif] text-amber-50">
      <div className="mx-auto max-w-7xl p-6">
        <div className="grid items-start gap-8 md:grid-cols-3">
          <a href="#" className="flex w-fit items-center gap-3 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">
            <svg aria-hidden="true" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-10 shrink-0">
              <ellipse cx="20" cy="20" rx="17" ry="7" transform="rotate(-35 20 20)" />
              <path d="M20 2v36M2 20h36" />
            </svg>
            <span><span className="block text-2xl font-semibold">Lowlight</span><span className="block text-xs tracking-wider uppercase">Public observatory</span></span>
          </a>
          <nav aria-label="Observatory" className="grid grid-cols-2 gap-4 text-sm">
            <a href="#" className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">The telescopes</a>
            <a href="#" className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Night walks</a>
            <a href="#" className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Sky calendar</a>
            <a href="#" className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Getting here</a>
          </nav>
          <div className="border-t border-orange-300 pt-3">
            <p className="text-xs text-amber-200">NEXT PUBLIC SESSION / 21 OCT</p>
            <a href="#" className="mt-3 block text-lg font-medium hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Reserve the 20:30 session</a>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-4 text-xs text-amber-200" aria-label="Observatory coordinates and conditions">
          <p className="border-l border-amber-200 pl-3">54.12° N</p>
          <p className="border-l border-amber-200 pl-3">02.46° W</p>
          <p className="border-l border-amber-200 pl-3">420m elevation</p>
          <p className="border-l border-amber-200 pl-3">Dark sky reserve</p>
        </div>
      </div>
    </header>
  )
}
