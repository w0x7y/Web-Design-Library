// Fonts: Manrope
export default function TeamCultureLab() {
  return (
    <section
      aria-labelledby="team-culture-lab-title"
      className="bg-linear-to-br from-emerald-950 via-emerald-900 to-lime-950 text-white font-['Manrope',ui-sans-serif,system-ui,sans-serif] antialiased"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <header>
            <p
              className="text-[0.75rem] leading-[1.5] font-semibold uppercase tracking-[0.16em] text-lime-200"
            >
              Culturehouse / Food fermentation
            </p>
            <h2
              id="team-culture-lab-title"
              className="mt-4 text-[2.25rem] leading-[1.1] tracking-[-0.035em] text-balance sm:text-[3.5rem] font-medium"
            >
              A living culture. A curious crew.
            </h2>
            <p
              className="mt-5 max-w-xl text-[1rem] leading-[1.75] text-emerald-100"
            >
              We turn small batches into repeatable recipes. The people at the bench taste, measure and start again.
            </p>
            <aside className="mt-10 max-w-sm rounded-2xl border border-amber-200/40 bg-amber-200/10 p-5">
              <p className="text-[0.75rem] leading-[1.5] uppercase tracking-[0.1em] text-amber-200">On the bench / CF-042</p>
              <p className="mt-3 text-[1.25rem] leading-[1.4]">Cultured oat, day six</p>
              <p
                className="mt-2 text-[0.875rem] leading-[1.6] text-emerald-100"
              >
                Mina and Nora are comparing two starters for a softer finish.
              </p>
            </aside>
          </header>
          <div className="rounded-3xl border border-white/30 bg-white/10 p-6 backdrop-blur-xl sm:p-8">
            <div className="flex justify-between gap-3 border-b border-white/20 pb-4 text-[0.75rem] leading-[1.5] text-lime-100">
              <p>The culture team</p>
              <p>Copenhagen</p>
            </div>
            <ul role="list">
              <li className="flex items-start gap-4 border-b border-white/20 py-5 last:border-b-0">
                <span
                  className="grid size-12 shrink-0 place-items-center rounded-xl border border-lime-200/40 text-[0.875rem] leading-[1.5] font-semibold text-lime-200"
                >
                  ML
                </span>
                <div>
                  <h3 className="text-[1.125rem] leading-[1.4] font-semibold">Mina Lau</h3>
                  <p className="mt-1 text-[0.875rem] leading-[1.5] text-lime-100">Fermentation lead</p>
                  <p className="mt-3 text-[0.75rem] leading-[1.5] text-emerald-100">Starter cultures / Batch design</p>
                </div>
              </li>
              <li className="flex items-start gap-4 border-b border-white/20 py-5 last:border-b-0">
                <span
                  className="grid size-12 shrink-0 place-items-center rounded-xl border border-lime-200/40 text-[0.875rem] leading-[1.5] font-semibold text-lime-200"
                >
                  AE
                </span>
                <div>
                  <h3 className="text-[1.125rem] leading-[1.4] font-semibold">Amir Elbaz</h3>
                  <p className="mt-1 text-[0.875rem] leading-[1.5] text-lime-100">Food microbiologist</p>
                  <p className="mt-3 text-[0.75rem] leading-[1.5] text-emerald-100">Strain health / Safety testing</p>
                </div>
              </li>
              <li className="flex items-start gap-4 border-b border-white/20 py-5 last:border-b-0">
                <span
                  className="grid size-12 shrink-0 place-items-center rounded-xl border border-lime-200/40 text-[0.875rem] leading-[1.5] font-semibold text-lime-200"
                >
                  NP
                </span>
                <div>
                  <h3 className="text-[1.125rem] leading-[1.4] font-semibold">Nora Price</h3>
                  <p className="mt-1 text-[0.875rem] leading-[1.5] text-lime-100">Sensory researcher</p>
                  <p className="mt-3 text-[0.75rem] leading-[1.5] text-emerald-100">Texture / Flavour panels</p>
                </div>
              </li>
            </ul>
            <a
              href="mailto:bench@example.com"
              className="mt-5 inline-flex items-center gap-3 rounded-lg border border-lime-200 px-4 py-3 text-[0.875rem] leading-[1.5] font-semibold text-lime-100 hover:bg-lime-200 hover:text-emerald-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
            >
              <span>Arrange a bench visit</span>
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
        </div>
      </div>
    </section>
  )
}
