// Fonts: IBM Plex Sans
export default function StatCardSchoolBusFleet() {
  return (
    <article className="w-72 rounded-xl border border-slate-700 bg-slate-950 p-5 font-['IBM_Plex_Sans',ui-sans-serif,system-ui,sans-serif] text-slate-100 sm:w-[22rem]">
      <header className="flex justify-between text-[10px] font-medium tracking-widest text-slate-300">
        <p>ROUTE NEST</p>
        <span>EAST DEPOT</span>
      </header>
      <div className="mt-5 flex items-center gap-4">
        <p className="flex items-baseline text-5xl leading-none font-semibold tracking-tight tabular-nums">22<span className="text-xl font-normal text-slate-300">/24</span></p>
        <h2 className="text-xs leading-5 text-slate-300">Buses checked<br />for school runs</h2>
      </div>
      <dl className="mt-5 border-t border-slate-700 pt-3 text-xs">
        <div className="flex justify-between gap-3 py-1.5">
          <dt>Town buses</dt>
          <dd className="font-medium text-lime-200"><span aria-hidden="true">✓ </span>18 checked</dd>
        </div>
        <div className="flex justify-between gap-3 py-1.5">
          <dt>Village buses</dt>
          <dd className="font-medium text-lime-200"><span aria-hidden="true">✓ </span>4 checked</dd>
        </div>
      </dl>
      <div className="mt-4 flex items-center gap-4 rounded-lg bg-lime-200 p-3 text-slate-950">
        <p className="flex items-baseline gap-1 text-[32px] leading-none font-semibold tabular-nums">4<span className="text-xs font-normal">days</span></p>
        <p className="text-[10px] leading-4">Until depot check<br /><time dateTime="2026-10-14">14 October 2026</time></p>
      </div>
      <details className="mt-4">
        <summary className="cursor-pointer text-xs hover:text-lime-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-200">Next depot check</summary>
        <p className="mt-2 text-[10px] text-slate-300">Bus SB-23 · T. Morgan · 06:15</p>
      </details>
    </article>
  )
}
