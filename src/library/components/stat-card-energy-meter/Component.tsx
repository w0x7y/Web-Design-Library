export default function StatCardEnergyMeter() {
  return (
    <article className="w-72 border-2 border-lime-300 bg-zinc-950 text-lime-300 sm:w-80">
      <div className="flex items-center justify-between border-b-2 border-lime-300 px-4 py-3 font-mono text-[10px] uppercase tracking-wider">
        <h2>Workshop energy</h2>
        <span>Week 41</span>
      </div>
      <div className="p-5">
        <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-300">
          Consumed this week
        </p>
        <p className="mt-3 flex items-baseline gap-2 text-5xl font-black tracking-tight tabular-nums">
          184<span className="text-base font-medium">kWh</span>
        </p>
        <div
          aria-hidden="true"
          className="mt-6 h-4 border border-lime-300 p-0.5"
        >
          <div className="h-full w-[74%] bg-lime-300" />
        </div>
        <div className="mt-2 flex justify-between gap-3 font-mono text-[10px]">
          <span>74% OF BUDGET</span>
          <span>250 kWh</span>
        </div>
        <p className="mt-5 border-t border-zinc-700 pt-4 text-sm text-zinc-100">
          <strong className="text-lime-300">66 kWh</strong> left in this week’s
          allowance.
        </p>
      </div>
    </article>
  )
}
