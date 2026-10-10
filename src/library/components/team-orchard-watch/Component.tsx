// Fonts: IBM Plex Mono
export default function TeamOrchardWatch() {
  return (
    <section
      aria-labelledby="team-orchard-watch-title"
      className="bg-lime-300 text-stone-950 font-['IBM_Plex_Mono',ui-sans-serif,system-ui,sans-serif] antialiased"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-24">
        <header className="grid gap-8 border-t-2 border-stone-950 pt-6 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <div>
            <p
              className="text-[0.75rem] leading-[1.5] font-semibold uppercase tracking-[0.16em] text-stone-950"
            >
              Leafsignal / Orchard pest monitoring
            </p>
            <h2
              id="team-orchard-watch-title"
              className="mt-4 text-[2.25rem] leading-[1.1] tracking-[-0.035em] text-balance sm:text-[3rem] font-medium"
            >
              Eyes in the orchard. Facts in the field.
            </h2>
          </div>
          <div>
            <p
              className="mt-5 max-w-xl text-[1rem] leading-[1.75] text-stone-800"
            >
              A field scientist and a data specialist. One shared record, from the first trap check to the grower briefing.
            </p>
            <p className="mt-6 border-l-4 border-stone-950 pl-4 text-[0.75rem] leading-[1.8]">WEST SUSSEX / APPLE &amp; PEAR BLOCKS</p>
          </div>
        </header>
        <ul role="list" className="mt-10 grid items-start gap-6 md:grid-cols-2">
          <li className="border-2 border-stone-950 p-6 bg-lime-300 text-stone-950">
            <div className="flex items-start justify-between gap-4">
              <p className="text-[3rem] leading-[1] font-medium tracking-[-0.08em]">F-01</p>
              <span className="border border-current px-2 py-1 text-[0.625rem] leading-[1.5] uppercase">TEAM FILE</span>
            </div>
            <h3 className="mt-10 text-[1.5rem] leading-[1.2] font-semibold">Pia Mensah</h3>
            <p className="mt-3 text-[0.75rem] leading-[1.6] uppercase tracking-[0.08em]">Field entomologist</p>
            <p
              className="mt-5 border-t border-current pt-5 text-[0.875rem] leading-[1.8]"
            >
              Pia walks the blocks, counts the traps and records the insects worth a closer look.
            </p>
          </li>
          <li className="border-2 border-stone-950 p-6 bg-stone-950 text-lime-300 md:mt-12">
            <div className="flex items-start justify-between gap-4">
              <p className="text-[3rem] leading-[1] font-medium tracking-[-0.08em]">D-02</p>
              <span className="border border-current px-2 py-1 text-[0.625rem] leading-[1.5] uppercase">TEAM FILE</span>
            </div>
            <h3 className="mt-10 text-[1.5rem] leading-[1.2] font-semibold">Gareth Kim</h3>
            <p className="mt-3 text-[0.75rem] leading-[1.6] uppercase tracking-[0.08em]">Crop data analyst</p>
            <p
              className="mt-5 border-t border-current pt-5 text-[0.875rem] leading-[1.8]"
            >
              Gareth turns the trap counts into a field note growers can act on before the next round.
            </p>
          </li>
        </ul>
        <a
          href="mailto:rounds@example.com"
          className="mt-8 inline-flex items-center gap-3 border-b-2 border-stone-950 py-2 text-[0.875rem] leading-[1.5] font-semibold hover:bg-stone-950 hover:text-lime-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
        >
          <span>Meet us on a monitoring round</span>
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
    </section>
  )
}
