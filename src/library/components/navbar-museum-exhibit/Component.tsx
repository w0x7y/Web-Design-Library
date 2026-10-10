// Fonts: Newsreader (https://fonts.google.com/specimen/Newsreader)
export default function NavbarMuseumExhibit() {
  return (
    <header className="border-b border-rose-300 bg-amber-50 text-rose-950">
      <div className="mx-auto grid max-w-7xl items-center gap-8 p-6 md:grid-cols-2 lg:grid-cols-[0.9fr_1.4fr_1fr]">
        <div>
          <a href="#" className="inline-block font-['Newsreader',ui-serif,Georgia,serif] text-4xl leading-none hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Morrow<br />Museum</a>
          <p className="mt-3 max-w-56 text-xs">Art, architecture, everyday life. Est. 1968.</p>
        </div>
        <a href="#" className="flex items-center gap-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">
          <img
            src="https://images.unsplash.com/photo-1524230572899-a752b3835840?w=1600&q=80"
            alt="Curving white arcade and sculptural staircase"
            width="1600"
            height="2133"
            className="size-24 shrink-0 object-cover"
          />
          <div>
            <p className="mb-2 text-xs tracking-wider uppercase">On view now</p>
            <p className="font-['Newsreader',ui-serif,Georgia,serif] text-2xl">Rooms for living</p>
            <p className="mt-2 text-xs">10 Oct 2026 – 17 Jan 2027</p>
          </div>
        </a>
        <nav aria-label="Museum visitors" className="flex flex-wrap items-center gap-5 text-sm md:col-span-2 lg:col-span-1">
          <a href="#" className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">What’s on</a>
          <a href="#" className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">The collection</a>
          <a href="#" className="inline-flex min-h-11 items-center gap-2 border border-rose-950 px-4 hover:bg-rose-950 hover:text-amber-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Plan your visit
            <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4">
              <path d="M4 12 12 4M4 4h8v8" />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  )
}
