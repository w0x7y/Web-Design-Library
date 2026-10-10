// Fonts: IBM Plex Sans
export default function BadgesColdChain() {
  return (
    <section aria-label="Cryospan refrigerated sample handling badges" className="w-72 rounded-xl border border-slate-600 bg-slate-900 p-5 font-['IBM_Plex_Sans',ui-sans-serif,system-ui,sans-serif] text-slate-100 sm:w-[22rem]">
      <h2 className="text-xs font-semibold tracking-wide">Cryospan / Sample transit</h2>
      <p aria-label="Required temperature range: 2 to 8 degrees Celsius" className="mt-4 flex items-end justify-between gap-2 rounded-md bg-cyan-200 p-3 text-slate-950"><span className="text-4xl leading-none font-semibold tracking-tight tabular-nums">2–8°</span><span className="pb-1 text-xs">Celsius / Range</span></p>
      <p className="mt-3 rounded-md border border-cyan-300 px-3 py-2 text-xs font-semibold text-cyan-200">Cold chain intact</p>
      <ol role="list" className="mt-5 flex flex-col gap-2">
        <li className="flex items-center gap-3 border-l-2 border-slate-500 py-1 pl-3 text-xs"><span aria-hidden="true" className="font-semibold text-cyan-200 tabular-nums">01</span>Logger attached</li>
        <li className="flex items-center gap-3 border-l-2 border-slate-500 py-1 pl-3 text-xs"><span aria-hidden="true" className="font-semibold text-cyan-200 tabular-nums">02</span>Seal intact</li>
        <li className="flex items-center gap-3 border-l-2 border-slate-500 py-1 pl-3 text-xs"><span aria-hidden="true" className="font-semibold text-cyan-200 tabular-nums">03</span>Receipt signed</li>
      </ol>
      <p className="mt-4 border-t border-slate-600 pt-3 text-xs text-slate-300">CS-1048 · Last scan 11:42 UTC</p>
    </section>
  )
}
