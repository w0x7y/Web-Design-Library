// Fonts: Familjen Grotesk
export default function TeamLightingCrew() {
  return (
    <section
      aria-labelledby="team-lighting-crew-title"
      className="bg-linear-to-r from-orange-950 via-rose-950 to-stone-950 text-amber-50 font-['Familjen_Grotesk',ui-sans-serif,system-ui,sans-serif] antialiased"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <header>
            <p
              className="text-[0.75rem] leading-[1.5] font-semibold uppercase tracking-[0.16em] text-amber-200"
            >
              Cuebeam / Theatre lighting
            </p>
            <h2
              id="team-lighting-crew-title"
              className="mt-4 text-[2.25rem] leading-[1.1] tracking-[-0.035em] text-balance sm:text-[4rem] font-medium"
            >
              The people behind the light.
            </h2>
            <p
              className="mt-5 max-w-xl text-[1rem] leading-[1.75] text-orange-100"
            >
              From the first sketch to the last blackout, our four-person crew carries the whole lighting plan.
            </p>
            <div aria-hidden="true" className="mt-10 grid h-24 grid-cols-4 gap-2">
              <span className="rounded-t-full bg-amber-200/70" />
              <span className="mt-4 rounded-t-full bg-orange-300/70" />
              <span className="mt-8 rounded-t-full bg-rose-300/70" />
              <span className="mt-12 rounded-t-full bg-amber-50/70" />
            </div>
            <p className="mt-3 text-[0.75rem] leading-[1.5] text-amber-200">Four disciplines. One cue sheet.</p>
          </header>
          <div className="border border-amber-100/40 bg-black/10 p-6 sm:p-8">
            <div
              className="flex flex-wrap items-center justify-between gap-3 pb-6 text-[0.75rem] leading-[1.5] uppercase tracking-[0.1em] text-amber-200"
            >
              <p>Company credits</p>
              <p>2026 / Touring crew</p>
            </div>
            <dl>
              <div className="grid gap-2 border-t border-amber-100/30 py-5 sm:grid-cols-[1fr_1.2fr] sm:gap-6">
                <dt className="text-[0.75rem] leading-[1.6] font-medium uppercase tracking-[0.1em] text-amber-200">Lighting design</dt>
                <dd>
                  <p className="text-[1.5rem] leading-[1.25] font-medium">Serena Ito</p>
                  <p className="mt-2 text-[0.875rem] leading-[1.7] text-orange-100">Colour, contrast and the cue story.</p>
                </dd>
              </div>
              <div className="grid gap-2 border-t border-amber-100/30 py-5 sm:grid-cols-[1fr_1.2fr] sm:gap-6">
                <dt className="text-[0.75rem] leading-[1.6] font-medium uppercase tracking-[0.1em] text-amber-200">Console programming</dt>
                <dd>
                  <p className="text-[1.5rem] leading-[1.25] font-medium">Finn Adler</p>
                  <p className="mt-2 text-[0.875rem] leading-[1.7] text-orange-100">Every fade timed to the performance.</p>
                </dd>
              </div>
              <div className="grid gap-2 border-t border-amber-100/30 py-5 sm:grid-cols-[1fr_1.2fr] sm:gap-6">
                <dt className="text-[0.75rem] leading-[1.6] font-medium uppercase tracking-[0.1em] text-amber-200">Rigging &amp; power</dt>
                <dd>
                  <p className="text-[1.5rem] leading-[1.25] font-medium">Amina Yusuf</p>
                  <p className="mt-2 text-[0.875rem] leading-[1.7] text-orange-100">The overhead plan and a safe load.</p>
                </dd>
              </div>
              <div className="grid gap-2 border-t border-amber-100/30 py-5 sm:grid-cols-[1fr_1.2fr] sm:gap-6">
                <dt className="text-[0.75rem] leading-[1.6] font-medium uppercase tracking-[0.1em] text-amber-200">Touring production</dt>
                <dd>
                  <p className="text-[1.5rem] leading-[1.25] font-medium">Tomás Reed</p>
                  <p className="mt-2 text-[0.875rem] leading-[1.7] text-orange-100">The same show, in a different room.</p>
                </dd>
              </div>
            </dl>
            <a
              href="mailto:production@example.com"
              className="mt-5 inline-flex items-center gap-3 border-b border-amber-200 pb-2 text-[0.875rem] leading-[1.5] font-medium text-amber-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
            >
              <span>Talk through your production</span>
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
