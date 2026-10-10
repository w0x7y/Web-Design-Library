// Fonts: IBM Plex Sans
export default function StatCardLiftInspection() {
  return (
    <article className="w-72 rounded-xl border border-slate-700 bg-slate-950 p-5 font-['IBM_Plex_Sans',ui-sans-serif,system-ui,sans-serif] text-slate-100 sm:w-[22rem]">
      <header className="flex justify-between text-[10px] font-medium tracking-widest text-slate-300">
        <p>LEVELMARK</p>
        <span>ASH COURT</span>
      </header>
      <div className="mt-5 flex items-center gap-4">
        <p className="flex items-baseline text-5xl leading-none font-semibold tracking-tight tabular-nums">18<span className="text-xl font-normal text-slate-300">/20</span></p>
        <h2 className="text-xs leading-5 text-slate-300">Lifts inspected<br />this quarter</h2>
      </div>
      <dl className="mt-5 border-t border-slate-700 pt-3 text-xs">
        <div className="flex justify-between gap-3 py-1.5">
          <dt>Passenger lifts</dt>
          <dd className="font-medium text-lime-200"><span aria-hidden="true">✓ </span>14 signed</dd>
        </div>
        <div className="flex justify-between gap-3 py-1.5">
          <dt>Service lifts</dt>
          <dd className="font-medium text-lime-200"><span aria-hidden="true">✓ </span>4 signed</dd>
        </div>
      </dl>
      <div className="mt-4 flex items-center gap-4 rounded-lg bg-lime-200 p-3 text-slate-950">
        <p className="flex items-baseline gap-1 text-[32px] leading-none font-semibold tabular-nums">3<span className="text-xs font-normal">days</span></p>
        <p className="text-[10px] leading-4">Until next inspection<br /><time dateTime="2026-10-13">13 October 2026</time></p>
      </div>
      <details className="mt-4">
        <summary className="cursor-pointer text-xs hover:text-lime-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-200">Upcoming inspection</summary>
        <p className="mt-2 text-[10px] text-slate-300">Lift AC-19 · N. Adeyemi · 09:30</p>
      </details>
    </article>
  )
}
