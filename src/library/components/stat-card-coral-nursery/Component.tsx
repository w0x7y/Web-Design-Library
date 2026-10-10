// Fonts: Manrope
export default function StatCardCoralNursery() {
  return (
    <article className="w-72 overflow-hidden rounded-[20px] bg-cyan-950 font-['Manrope',ui-sans-serif,system-ui,sans-serif] text-white sm:w-[22rem]">
      <div className="relative">
        <img src="https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=800&q=80" alt="Pink, orange and violet coral colonies in a blue-lit aquarium" width="800" height="600" className="h-48 w-full object-cover" />
        <p className="absolute top-4 left-4 rounded-sm bg-cyan-950 px-2 py-1 text-[10px] font-semibold tracking-widest text-cyan-200">POLYP HOUSE</p>
      </div>
      <div className="relative p-5">
        <div className="-mt-12 rounded-xl border border-white/30 bg-cyan-950/90 p-4 backdrop-blur-[12px]">
          <div className="flex items-center gap-4">
            <p className="text-5xl leading-none font-semibold tracking-tight tabular-nums">128</p>
            <h2 className="text-xs leading-5 text-cyan-100">New coral<br />fragments</h2>
          </div>
          <dl className="mt-4 grid grid-cols-2 gap-3 border-t border-white/30 pt-3 text-[10px] text-cyan-100">
            <div>
              <dt>Nursery tank</dt>
              <dd className="mt-1 text-xs font-semibold text-white">B-04</dd>
            </div>
            <div>
              <dt>Ready to transfer</dt>
              <dd className="mt-1 text-xs font-semibold text-white">36 fragments</dd>
            </div>
          </dl>
        </div>
        <a href="#polyp-transfer-log" className="mt-4 inline-block text-xs font-medium text-cyan-200 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200">October transfer log ↗</a>
      </div>
    </article>
  )
}
