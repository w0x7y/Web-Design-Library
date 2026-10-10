// Fonts: Bricolage Grotesque
export default function TeamPuzzleDesk() {
  return (
    <section
      aria-labelledby="team-puzzle-desk-title"
      className="bg-fuchsia-50 text-fuchsia-950 font-['Bricolage_Grotesque',ui-sans-serif,system-ui,sans-serif] antialiased"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-24">
        <header className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p
              className="text-[0.75rem] leading-[1.5] font-semibold uppercase tracking-[0.16em] text-fuchsia-800"
            >
              Gridwink / The people behind the clues
            </p>
            <h2
              id="team-puzzle-desk-title"
              className="mt-4 text-[2.25rem] leading-[1.1] tracking-[-0.035em] text-balance sm:text-[3.5rem] font-bold"
            >
              Our favourite four-letter word? Team.
            </h2>
          </div>
          <div>
            <p
              className="mt-5 max-w-xl text-[1rem] leading-[1.75] text-fuchsia-900"
            >
              A constructor, an editor, a checker and a mini obsessive. Every puzzle gets all four sets of eyes.
            </p>
            <a
              href="#gridwink-daily"
              className="mt-5 inline-flex items-center gap-3 rounded-full border-2 border-fuchsia-950 px-5 py-3 text-[0.875rem] leading-[1.5] font-bold hover:bg-fuchsia-950 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
            >
              <span>Try today's puzzle</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4 shrink-0"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </div>
        </header>
        <ul role="list" className="mt-10 grid gap-4 md:grid-cols-2">
          <li className="border-2 border-fuchsia-950 p-6">
            <div className="flex items-center gap-4">
              <span
                className="grid size-16 shrink-0 place-items-center border-2 border-fuchsia-950 bg-yellow-200 text-[2.5rem] leading-[1] font-bold"
              >
                J
              </span>
              <div>
                <h3 className="text-[1.375rem] leading-[1.2] font-bold">Jo Medina</h3>
                <p className="mt-1 text-[0.75rem] leading-[1.5]">Crossword constructor</p>
              </div>
            </div>
            <p className="mt-6 text-[1rem] leading-[1.6]">A small victory, in four letters.</p>
            <p
              className="mt-4 border-t border-dashed border-fuchsia-950 pt-4 text-[0.75rem] leading-[1.5] font-bold tracking-[0.14em]"
            >
              DONE
            </p>
          </li>
          <li className="border-2 border-fuchsia-950 p-6">
            <div className="flex items-center gap-4">
              <span
                className="grid size-16 shrink-0 place-items-center border-2 border-fuchsia-950 bg-fuchsia-100 text-[2.5rem] leading-[1] font-bold"
              >
                R
              </span>
              <div>
                <h3 className="text-[1.375rem] leading-[1.2] font-bold">Rafi Moore</h3>
                <p className="mt-1 text-[0.75rem] leading-[1.5]">Puzzle editor</p>
              </div>
            </div>
            <p className="mt-6 text-[1rem] leading-[1.6]">What a good clue leaves you with.</p>
            <p
              className="mt-4 border-t border-dashed border-fuchsia-950 pt-4 text-[0.75rem] leading-[1.5] font-bold tracking-[0.14em]"
            >
              AHA
            </p>
          </li>
          <li className="border-2 border-fuchsia-950 p-6">
            <div className="flex items-center gap-4">
              <span
                className="grid size-16 shrink-0 place-items-center border-2 border-fuchsia-950 bg-white text-[2.5rem] leading-[1] font-bold"
              >
                S
              </span>
              <div>
                <h3 className="text-[1.375rem] leading-[1.2] font-bold">Sana Park</h3>
                <p className="mt-1 text-[0.75rem] leading-[1.5]">Fact checker</p>
              </div>
            </div>
            <p className="mt-6 text-[1rem] leading-[1.6]">The thing we check, twice.</p>
            <p
              className="mt-4 border-t border-dashed border-fuchsia-950 pt-4 text-[0.75rem] leading-[1.5] font-bold tracking-[0.14em]"
            >
              EVERYTHING
            </p>
          </li>
          <li className="border-2 border-fuchsia-950 p-6">
            <div className="flex items-center gap-4">
              <span
                className="grid size-16 shrink-0 place-items-center border-2 border-fuchsia-950 bg-orange-100 text-[2.5rem] leading-[1] font-bold"
              >
                T
              </span>
              <div>
                <h3 className="text-[1.375rem] leading-[1.2] font-bold">Theo Okoye</h3>
                <p className="mt-1 text-[0.75rem] leading-[1.5]">Mini puzzles</p>
              </div>
            </div>
            <p className="mt-6 text-[1rem] leading-[1.6]">Five minutes, one pencil, no rush.</p>
            <p
              className="mt-4 border-t border-dashed border-fuchsia-950 pt-4 text-[0.75rem] leading-[1.5] font-bold tracking-[0.14em]"
            >
              THE DAILY MINI
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}
