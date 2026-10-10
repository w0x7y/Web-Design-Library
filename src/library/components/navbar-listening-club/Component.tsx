// Fonts: Bricolage Grotesque (https://fonts.google.com/specimen/Bricolage+Grotesque)
export default function NavbarListeningClub() {
  return (
    <header className="relative isolate bg-teal-950 font-['Bricolage_Grotesque',ui-sans-serif,system-ui,sans-serif] text-teal-50">
      <svg aria-hidden="true" viewBox="0 0 600 240" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="2" className="absolute top-0 right-0 -z-10 h-full w-1/2 text-teal-700">
        <path d="M0 240 240 0M80 240 320 0M160 240 400 0M240 240 480 0M320 240 560 0M400 240 640 0" />
      </svg>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-8 p-6">
        <a href="#" className="block w-fit hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">
          <svg aria-hidden="true" viewBox="0 0 64 32" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="h-8 w-16 text-rose-200">
            <path d="M2 13v6M12 7v18M22 2v28M32 10v12M42 5v22M52 10v12M62 14v4" />
          </svg>
          <span className="mt-2 block text-4xl font-bold tracking-tight">soft signal</span>
          <span className="mt-2 block text-xs">Records. Good company. A room to listen.</span>
        </a>
        <nav aria-label="Listening club" className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
          <a href="#" className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">The sessions</a>
          <a href="#" className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Our sound system</a>
          <a href="#" className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">The room</a>
          <a href="#" className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Membership</a>
        </nav>
        <div className="w-full rounded-3xl border border-white/30 bg-white/10 p-5 backdrop-blur-md md:ml-auto md:w-72">
          <p className="text-xs text-rose-200">SIDE B / WEDNESDAY 28 OCT</p>
          <p className="mt-2 text-lg font-medium">Alice Coltrane, on record</p>
          <a href="#" className="mt-4 inline-flex min-h-11 items-center rounded-full bg-rose-200 px-5 text-sm font-semibold text-teal-950 hover:bg-rose-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Save a seat</a>
        </div>
      </div>
    </header>
  )
}
