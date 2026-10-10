// Fonts: Newsreader
export default function TeamAtlasOffice() {
  return (
    <section
      aria-labelledby="team-atlas-office-title"
      className="bg-stone-50 text-stone-950 font-['Newsreader',ui-sans-serif,system-ui,sans-serif] antialiased"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-24">
        <header className="max-w-3xl">
          <p
            className="text-[0.75rem] leading-[1.5] font-semibold uppercase tracking-[0.16em] text-red-800"
          >
            Contourline / The atlas office
          </p>
          <h2
            id="team-atlas-office-title"
            className="mt-4 text-[2.25rem] leading-[1.1] tracking-[-0.035em] text-balance sm:text-[4rem] font-normal"
          >
            A map is only as good as its makers.
          </h2>
          <p
            className="mt-5 max-w-xl text-[1rem] leading-[1.75] text-stone-700"
          >
            We draw walking maps by hand, check them on foot and leave room for the stories a satellite cannot see.
          </p>
        </header>
        <ul role="list" className="mt-10 grid gap-4 lg:grid-cols-[1.2fr_1fr]">
          <li className="bg-stone-100 p-8">
            <div className="flex items-center justify-between border-b border-stone-300 pb-6">
              <span className="text-[4rem] leading-[1] text-red-800">N</span>
              <p className="text-right text-[0.875rem] leading-[1.5] text-stone-600">51° 27′ N</p>
            </div>
            <h3 className="mt-8 text-[2rem] leading-[1.2]">Lotte Jensen</h3>
            <p className="mt-2 text-[1rem] leading-[1.5] text-red-800">Terrain cartographer</p>
            <p
              className="mt-5 max-w-md text-[1.125rem] leading-[1.6] text-stone-700"
            >
              Every contour is a decision. Lotte draws the paths, elevations and landforms that make our walking maps readable.
            </p>
            <a
              href="#contourline-lotte"
              className="mt-8 inline-block text-[1rem] leading-[1.5] underline underline-offset-4 hover:text-red-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
            >
              Lotte's field notes
            </a>
          </li>
          <li className="bg-red-50 p-8">
            <div className="flex items-center justify-between border-b border-stone-300 pb-6">
              <span className="text-[4rem] leading-[1] text-red-800">E</span>
              <p className="text-right text-[0.875rem] leading-[1.5] text-stone-600">02° 35′ W</p>
            </div>
            <h3 className="mt-8 text-[2rem] leading-[1.2]">Malik Rowe</h3>
            <p className="mt-2 text-[1rem] leading-[1.5] text-red-800">Place-name researcher</p>
            <p
              className="mt-5 max-w-md text-[1.125rem] leading-[1.6] text-stone-700"
            >
              Malik talks to local historians and residents so names on the map match the names people actually use.
            </p>
            <a
              href="#contourline-malik"
              className="mt-8 inline-block text-[1rem] leading-[1.5] underline underline-offset-4 hover:text-red-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
            >
              Malik's field notes
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
