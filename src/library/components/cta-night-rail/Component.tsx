// Fonts: Manrope (https://fonts.google.com/specimen/Manrope)
export default function CtaNightRail() {
  return (
    <section className="bg-slate-950 text-slate-100 font-['Manrope',ui-sans-serif,system-ui,sans-serif] antialiased">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-16">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-700 pb-6">
          <p className="text-lg font-bold tracking-tight">Lumen Rail</p>
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-200">
            Night service / From €89
          </p>
        </div>
        <div className="grid gap-8 py-10 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-200">
              Depart 21:15
            </p>
            <p className="text-[2.5rem] leading-[1.1] font-semibold tracking-tight sm:text-[3.5rem]">
              Amsterdam
            </p>
            <p className="mt-3 text-sm text-slate-300">Centraal station</p>
          </div>
          <div className="flex items-center gap-4 text-sm text-cyan-200">
            <span aria-hidden="true" className="h-px w-12 bg-cyan-200"></span>
            <p>One good night</p>
            <span aria-hidden="true" className="h-px w-12 bg-cyan-200"></span>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-200">
              Arrive 08:40
            </p>
            <p className="text-[2.5rem] leading-[1.1] font-semibold tracking-tight sm:text-[3.5rem]">
              Innsbruck
            </p>
            <p className="mt-3 text-sm text-slate-300">Hauptbahnhof</p>
          </div>
        </div>
        <div className="grid gap-6 border-t border-slate-700 pt-7 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <h2 className="max-w-xl text-2xl leading-snug font-medium">
              Trade the airport queue for a window seat.
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-6 text-slate-300">
              A made-up bed, breakfast on board and the Alps by morning. Book a
              berth on our new winter route.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex min-h-12 w-fit items-center justify-center gap-3 rounded-lg bg-cyan-200 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Find a sleeper
          </a>
        </div>
      </div>
    </section>
  )
}
