// Fonts: Archivo
export default function TeamFencingClub() {
  return (
    <section
      aria-labelledby="team-fencing-club-title"
      className="bg-slate-950 text-slate-100 font-['Archivo',ui-sans-serif,system-ui,sans-serif] antialiased"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-24">
        <header className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <p className="text-[0.75rem] leading-[1.5] font-semibold uppercase tracking-[0.16em] text-sky-200">Pointworks / Fencing club</p>
            <h2
              id="team-fencing-club-title"
              className="mt-4 text-[2.25rem] leading-[1.1] tracking-[-0.035em] text-balance sm:text-[3.5rem] font-medium"
            >
              Good footwork starts with good coaching.
            </h2>
          </div>
          <p
            className="mt-5 max-w-xl text-[1rem] leading-[1.75] text-slate-300"
          >
            Four coaches, two weapons, room for your first lesson. Our team helps you find your distance and your next move.
          </p>
        </header>
        <div className="mt-10 flex items-center gap-3 text-[0.625rem] leading-[1.5] uppercase tracking-[0.12em] text-sky-200">
          <span>En garde</span>
          <span aria-hidden="true" className="h-px flex-1 bg-sky-200/40" />
          <span>Allez</span>
        </div>
        <ul role="list" className="mt-6 border-b border-slate-600">
          <li className="grid gap-8 border-t border-slate-600 py-8 md:grid-cols-[1fr_2fr]">
            <div>
              <h3 className="text-[2.5rem] leading-[1.1] font-medium">Foil</h3>
              <p className="mt-3 max-w-xs text-[0.875rem] leading-[1.7] text-slate-300">Timing, distance and a clear intention.</p>
            </div>
            <ul role="list" className="grid gap-6 sm:grid-cols-2">
              <li className="border-l border-sky-200/40 pl-5">
                <h4 className="text-[1.25rem] leading-[1.3] font-medium">Clara Voss</h4>
                <p className="mt-2 text-[0.875rem] leading-[1.5] text-slate-300">Head coach / Foil</p>
                <p className="mt-5 text-[0.75rem] leading-[1.5] text-sky-200">Wednesday adults</p>
              </li>
              <li className="border-l border-sky-200/40 pl-5">
                <h4 className="text-[1.25rem] leading-[1.3] font-medium">Yusuf Khan</h4>
                <p className="mt-2 text-[0.875rem] leading-[1.5] text-slate-300">Youth coach / Foil</p>
                <p className="mt-5 text-[0.75rem] leading-[1.5] text-sky-200">Saturday juniors</p>
              </li>
            </ul>
          </li>
          <li className="grid gap-8 border-t border-slate-600 py-8 md:grid-cols-[1fr_2fr]">
            <div>
              <h3 className="text-[2.5rem] leading-[1.1] font-medium">Épée</h3>
              <p className="mt-3 max-w-xs text-[0.875rem] leading-[1.7] text-slate-300">Patience, point control and the second touch.</p>
            </div>
            <ul role="list" className="grid gap-6 sm:grid-cols-2">
              <li className="border-l border-sky-200/40 pl-5">
                <h4 className="text-[1.25rem] leading-[1.3] font-medium">Marek Lee</h4>
                <p className="mt-2 text-[0.875rem] leading-[1.5] text-slate-300">Competition coach / Épée</p>
                <p className="mt-5 text-[0.75rem] leading-[1.5] text-sky-200">Tuesday squad</p>
              </li>
              <li className="border-l border-sky-200/40 pl-5">
                <h4 className="text-[1.25rem] leading-[1.3] font-medium">Alice Moreau</h4>
                <p className="mt-2 text-[0.875rem] leading-[1.5] text-slate-300">Club coach / Épée</p>
                <p className="mt-5 text-[0.75rem] leading-[1.5] text-sky-200">Sunday beginners</p>
              </li>
            </ul>
          </li>
        </ul>
        <footer className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-[0.875rem] leading-[1.5] text-slate-300">West Hall, Bristol / All kit provided for beginners</p>
          <a
            href="#pointworks-first-lesson"
            className="inline-flex items-center gap-3 text-[0.875rem] leading-[1.5] font-medium text-sky-200 underline underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
          >
            <span>Book a first lesson</span>
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
        </footer>
      </div>
    </section>
  )
}
