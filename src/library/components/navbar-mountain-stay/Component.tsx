// Fonts: DM Sans (https://fonts.google.com/specimen/DM+Sans)
export default function NavbarMountainStay() {
  return (
    <header className="relative isolate bg-cyan-50 p-5 pb-20 font-['DM_Sans',ui-sans-serif,system-ui,sans-serif] text-teal-950 sm:p-8 sm:pb-24">
      <img
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80"
        alt="Layered Alpine peaks in clear morning light"
        width="1600"
        height="1067"
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-b from-black/40 to-transparent"></div>
      <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-xl border border-white bg-white/90 p-6 backdrop-blur-xl md:flex-row md:flex-wrap md:items-start">
        <div>
          <a href="#" className="text-2xl font-semibold tracking-tight hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Bracken House</a>
          <p className="mt-2 text-xs">The Dolomites / A six-room mountain lodge</p>
        </div>
        <nav aria-label="Mountain lodge" className="flex flex-wrap items-start gap-5 pt-2 text-sm">
          <details>
            <summary className="flex cursor-pointer list-none items-center gap-2 [&::-webkit-details-marker]:hidden hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Stay with us
              <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-3.5">
                <path d="M8 3v10M3 8h10" />
              </svg>
            </summary>
            <div className="mt-3 border-t border-teal-700 pt-2">
              <a href="#" className="block py-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">The ridge rooms</a>
              <a href="#" className="block py-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">The garden suite</a>
            </div>
          </details>
          <a href="#" className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">At the table</a>
          <a href="#" className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Out on foot</a>
        </nav>
        <div className="md:ml-auto">
          <p className="mb-2 text-xs">Winter bookings are open</p>
          <a href="#" className="inline-flex min-h-11 items-center rounded bg-teal-950 px-5 text-sm font-medium text-white hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Find your room</a>
        </div>
      </div>
    </header>
  )
}
