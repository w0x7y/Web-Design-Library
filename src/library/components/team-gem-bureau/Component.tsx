// Fonts: IBM Plex Sans
export default function TeamGemBureau() {
  return (
    <section
      aria-labelledby="team-gem-bureau-title"
      className="bg-white text-sky-950 font-['IBM_Plex_Sans',ui-sans-serif,system-ui,sans-serif] antialiased"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-24">
        <header className="grid gap-6 border-b border-sky-950 pb-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <p
              className="text-[0.75rem] leading-[1.5] font-semibold uppercase tracking-[0.16em] text-sky-800"
            >
              Facetmark / Independent gem bureau
            </p>
            <h2
              id="team-gem-bureau-title"
              className="mt-4 text-[2.25rem] leading-[1.1] tracking-[-0.035em] text-balance sm:text-[3.5rem] font-medium"
            >
              The evidence has a name.
            </h2>
          </div>
          <p
            className="mt-5 max-w-xl text-[1rem] leading-[1.75] text-slate-600"
          >
            Your report is signed by a specialist, not a sales desk. Meet the people who look twice before making a call.
          </p>
        </header>
        <ul role="list" className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <li className="grid gap-6 sm:grid-cols-[9rem_1fr]">
            <img
              src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&q=80"
              alt="Anika Sethi, coloured stone specialist"
              width={400}
              height={600}
              className="h-64 w-full object-cover sm:h-56"
            />
            <div className="flex flex-col items-start">
              <p
                className="text-[0.75rem] leading-[1.5] font-medium uppercase tracking-[0.08em] text-sky-800"
              >
                Coloured stone identification
              </p>
              <h3 className="mt-3 text-[1.75rem] leading-[1.2] font-medium">Dr. Anika Sethi</h3>
              <p
                className="mt-4 text-[0.875rem] leading-[1.75] text-slate-600"
              >
                Raman spectroscopy, inclusions and origin evidence. Anika signs every coloured stone report.
              </p>
              <a
                href="mailto:sethi@example.com"
                className="mt-6 inline-flex items-center gap-2 text-[0.875rem] leading-[1.5] font-semibold text-sky-900 hover:text-sky-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
              >
                <span>Ask Sethi</span>
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
          </li>
          <li className="grid gap-6 sm:grid-cols-[9rem_1fr]">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
              alt="Daniel Cho, diamond verification specialist"
              width={400}
              height={600}
              className="h-64 w-full object-cover sm:h-56"
            />
            <div className="flex flex-col items-start">
              <p className="text-[0.75rem] leading-[1.5] font-medium uppercase tracking-[0.08em] text-sky-800">Diamond verification</p>
              <h3 className="mt-3 text-[1.75rem] leading-[1.2] font-medium">Daniel Cho</h3>
              <p
                className="mt-4 text-[0.875rem] leading-[1.75] text-slate-600"
              >
                Natural or laboratory-grown. Daniel checks the growth signature before a stone enters the trade.
              </p>
              <a
                href="mailto:cho@example.com"
                className="mt-6 inline-flex items-center gap-2 text-[0.875rem] leading-[1.5] font-semibold text-sky-900 hover:text-sky-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
              >
                <span>Ask Cho</span>
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
          </li>
        </ul>
        <p
          className="mt-10 border-t border-slate-200 pt-5 text-[0.75rem] leading-[1.6] text-slate-600"
        >
          Independent since 2014. No buying, selling or valuation commissions.
        </p>
      </div>
    </section>
  )
}
