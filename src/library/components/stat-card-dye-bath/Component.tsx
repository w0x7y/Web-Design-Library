// Fonts: Space Grotesk
export default function StatCardDyeBath() {
  return (
    <article className="w-72 border-2 border-blue-800 bg-white font-['Space_Grotesk',ui-sans-serif,system-ui,sans-serif] text-blue-800 sm:w-[22rem]">
      <header className="flex justify-between border-b-2 border-blue-800 p-3 text-[10px] font-bold tracking-widest">
        <p>BATHFORM</p>
        <span>RECIPE 018</span>
      </header>
      <div className="grid grid-cols-[1fr_64px] border-b-2 border-blue-800">
        <div className="p-5">
          <h2 className="text-xs font-medium">Fabric : water</h2>
          <p className="mt-3 text-[64px] leading-none font-bold tracking-tight tabular-nums">1:8</p>
          <p className="mt-3 text-[10px] font-semibold tracking-wide">INK BLUE / COTTON</p>
        </div>
        <div aria-hidden="true" className="grid grid-rows-2 border-l-2 border-blue-800"><span className="block bg-blue-800"></span><span className="block bg-blue-100"></span></div>
      </div>
      <div className="p-4">
        <dl className="grid grid-cols-2 gap-4 text-xs">
          <div>
            <dt>Fabric loaded</dt>
            <dd className="mt-1 text-xl font-semibold tabular-nums">25 kg</dd>
          </div>
          <div>
            <dt>Water used</dt>
            <dd className="mt-1 text-xl font-semibold tabular-nums">200 L</dd>
          </div>
        </dl>
        <p className="mt-4 border-t border-blue-800 pt-3 text-[10px] leading-4">Batch BF-208 · 10 Oct 2026<br />Recipe matches the approved sample.</p>
      </div>
    </article>
  )
}
