// Fonts: DM Mono
export default function StatCardRowingSplit() {
  return (
    <article className="w-72 border border-neutral-700 bg-neutral-950 p-6 font-['DM_Mono',ui-monospace,SFMono-Regular,monospace] text-neutral-100 sm:w-[22rem]">
      <header className="flex justify-between text-[10px] tracking-wider text-neutral-300">
        <p>OARLOG</p>
        <span>2,000 M TEST</span>
      </header>
      <h2 className="mt-6 text-xs text-neutral-300">Average / 500 m</h2>
      <p className="mt-3 text-[44px] leading-none tracking-tight tabular-nums">1:48.6</p>
      <p className="mt-3 text-[10px] text-orange-300">2.1 seconds faster than last test</p>
      <dl className="mt-5 grid grid-cols-2 gap-2 text-[10px] text-neutral-300">
        <div className="border border-neutral-700 p-3">
          <dt>0–500 m</dt>
          <dd className="mt-1 text-sm text-neutral-100 tabular-nums">1:49.2</dd>
        </div>
        <div className="border border-neutral-700 p-3">
          <dt>500–1,000 m</dt>
          <dd className="mt-1 text-sm text-neutral-100 tabular-nums">1:48.8</dd>
        </div>
        <div className="border border-neutral-700 p-3">
          <dt>1,000–1,500 m</dt>
          <dd className="mt-1 text-sm text-neutral-100 tabular-nums">1:48.6</dd>
        </div>
        <div className="border border-neutral-700 p-3">
          <dt>1,500–2,000 m</dt>
          <dd className="mt-1 text-sm text-neutral-100 tabular-nums">1:47.8</dd>
        </div>
      </dl>
      <p className="mt-5 text-[10px] text-neutral-300">10 OCT 2026 · ERG 03 · 28 SPM</p>
    </article>
  )
}
