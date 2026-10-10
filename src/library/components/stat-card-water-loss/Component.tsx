// Fonts: Manrope
export default function StatCardWaterLoss() {
  return (
    <article className="w-72 rounded-xl border border-blue-200 bg-white p-6 font-['Manrope',ui-sans-serif,system-ui,sans-serif] text-blue-950 sm:w-80">
      <header className="flex justify-between text-[10px] font-semibold tracking-widest text-cyan-700">
        <p>MEREWORKS</p>
        <time dateTime="2026-10-10">10 OCT</time>
      </header>
      <h2 className="mt-6 text-sm font-semibold">Water loss avoided</h2>
      <p className="mt-2 flex items-baseline gap-3 text-[60px] leading-none font-semibold tracking-tight tabular-nums">42<span className="text-base font-normal tracking-normal">m³ / day</span></p>
      <p className="mt-5 rounded-lg bg-cyan-50 p-3 text-xs text-cyan-900">Leak isolated on Alder Street at 08:40.</p>
      <dl className="mt-5 grid grid-cols-2 gap-4 border-t border-blue-100 pt-4">
        <div>
          <dt className="text-xs text-blue-800">Before isolation</dt>
          <dd className="mt-1 text-sm font-semibold tabular-nums">58 m³ / day</dd>
        </div>
        <div>
          <dt className="text-xs text-blue-800">After isolation</dt>
          <dd className="mt-1 text-sm font-semibold tabular-nums">16 m³ / day</dd>
        </div>
      </dl>
      <a href="#mereworks-leak-report" className="mt-5 block text-xs font-semibold text-cyan-700 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950">Read the leak report ↗</a>
    </article>
  )
}
