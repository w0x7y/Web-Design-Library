// Fonts: Fraunces
export default function StatCardMushroomPick() {
  return (
    <article className="grid w-72 grid-cols-[72px_1fr] overflow-hidden border border-orange-200 bg-orange-50 font-['Fraunces',ui-serif,Georgia,serif] text-orange-950 sm:w-[22rem]">
      <img src="https://images.unsplash.com/photo-1504545102780-26774c1bb073?w=800&q=80" alt="Fresh chestnut mushrooms on a grey stone worktop" width="800" height="1098" className="h-full w-[72px] object-cover" />
      <div className="min-w-0 p-5">
        <p className="text-[10px] tracking-wider text-orange-800">GILLSIDE / HARVEST</p>
        <h2 className="mt-4 text-2xl leading-7">This morning's<br />fresh pick</h2>
        <p className="mt-4 flex items-baseline gap-2 text-[56px] leading-none tracking-tight tabular-nums">64<span className="text-base tracking-normal">kg</span></p>
        <dl className="mt-5 border-t border-dashed border-orange-800 pt-3 text-[11px] text-orange-800">
          <div className="flex justify-between gap-2 py-1">
            <dt>Variety</dt>
            <dd>Chestnut</dd>
          </div>
          <div className="flex justify-between gap-2 py-1">
            <dt>Grow room</dt>
            <dd>04</dd>
          </div>
          <div className="flex justify-between gap-2 py-1">
            <dt>Grade A</dt>
            <dd>58 kg</dd>
          </div>
        </dl>
        <p className="mt-4 text-[10px] leading-4 text-orange-800">Picked 10 Oct, 06:15<br />Batch GS-1010</p>
      </div>
    </article>
  )
}
