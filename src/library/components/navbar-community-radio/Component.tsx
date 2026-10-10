// Fonts: Bricolage Grotesque (https://fonts.google.com/specimen/Bricolage+Grotesque)
export default function NavbarCommunityRadio() {
  return (
    <header className="relative isolate bg-teal-950 font-['Bricolage_Grotesque',ui-sans-serif,system-ui,sans-serif] text-teal-50">
      <svg aria-hidden="true" viewBox="0 0 600 240" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="2" className="absolute top-0 right-0 -z-10 h-full w-1/2 text-teal-700">
        <path d="M0 240 240 0M80 240 320 0M160 240 400 0M240 240 480 0M320 240 560 0M400 240 640 0" />
      </svg>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-8 p-6">
        <a href="#" className="block w-fit hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">
          <svg aria-hidden="true" viewBox="0 0 64 32" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="h-8 w-16 text-rose-200">
            <path d="M32 3 25 28h14L32 3ZM22 28h20M18 7c-6 5-6 13 0 18M46 7c6 5 6 13 0 18M10 3C0 11 0 25 10 31M54 3c10 8 10 22 0 28" />
          </svg>
          <span className="mt-2 block text-4xl font-bold tracking-tight">quay radio</span>
          <span className="mt-2 block text-xs">Community voices / 104.8 FM &amp; online</span>
        </a>
        <nav aria-label="Community radio" className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
          <a href="#" className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Programme guide</a>
          <a href="#" className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Show archive</a>
          <a href="#" className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Join the station</a>
          <a href="#" className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Support us</a>
        </nav>
        <div className="w-full rounded-3xl border border-white/30 bg-white/10 p-5 backdrop-blur-md md:ml-auto md:w-72">
          <p className="text-xs text-rose-200">ON AIR / THU 29 OCT / 18:00</p>
          <p className="mt-2 text-lg font-medium">Harbour voices with Jo</p>
          <a href="#" className="mt-4 inline-flex min-h-11 items-center rounded-full bg-rose-200 px-5 text-sm font-semibold text-teal-950 hover:bg-rose-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-200">Listen live</a>
        </div>
      </div>
    </header>
  )
}
