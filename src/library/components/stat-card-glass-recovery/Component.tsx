// Fonts: Archivo
export default function StatCardGlassRecovery() {
  return (
    <article className="w-72 border-[3px] border-neutral-950 bg-orange-300 font-['Archivo',ui-sans-serif,system-ui,sans-serif] text-neutral-950 sm:w-80">
      <header className="flex justify-between border-b-[3px] border-neutral-950 p-4 text-[10px] font-bold tracking-widest">
        <p>CULLETLINE</p>
        <span>SORTING / 02</span>
      </header>
      <div className="p-5">
        <p className="flex items-baseline gap-2 text-[72px] leading-none font-bold tracking-tight tabular-nums">8.4<span className="text-xl font-medium tracking-normal">t</span></p>
        <h2 className="mt-3 text-sm font-bold">Glass back in circulation</h2>
        <dl className="mt-6 border-t border-neutral-950 pt-3 text-xs">
          <div className="flex justify-between gap-3 py-1">
            <dt>Incoming load</dt>
            <dd>8.9 t</dd>
          </div>
          <div className="flex justify-between gap-3 py-1">
            <dt>Contaminants removed</dt>
            <dd>0.5 t</dd>
          </div>
        </dl>
      </div>
      <p className="bg-neutral-950 p-4 text-[10px] font-semibold tracking-widest text-orange-300">LOAD CL-208 / 10 OCT 2026</p>
    </article>
  )
}
