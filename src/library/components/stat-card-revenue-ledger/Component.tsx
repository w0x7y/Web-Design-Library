export default function StatCardRevenueLedger() {
  return (
    <article className="w-72 border-t-2 border-stone-900 bg-[#f7f4ec] p-5 text-stone-900 sm:w-80">
      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider">
        <h2>Revenue ledger</h2>
        <span>Oct 2026</span>
      </div>
      <p className="mt-5 font-serif text-4xl tracking-tight tabular-nums">
        $18,420
      </p>
      <p className="mt-2 text-xs text-stone-600">
        <span className="font-semibold text-green-800">+$2,160</span> compared
        with September
      </p>
      <div
        aria-hidden="true"
        className="mt-6 grid h-20 grid-cols-6 items-end gap-3"
      >
        <div className="h-8 bg-stone-300" />
        <div className="h-11 bg-stone-300" />
        <div className="h-10 bg-stone-300" />
        <div className="h-14 bg-stone-300" />
        <div className="h-[88.3%] bg-stone-300" />
        <div className="h-20 bg-stone-900" />
      </div>
      <div
        aria-hidden="true"
        className="mt-2 grid grid-cols-6 gap-3 text-center font-mono text-[9px] text-stone-600"
      >
        <span>May</span>
        <span>Jun</span>
        <span>Jul</span>
        <span>Aug</span>
        <span>Sep</span>
        <span>Oct</span>
      </div>
      <p className="sr-only">
        Revenue generally grew between May and October, with a small dip in
        July. October is the highest month at $18,420.
      </p>
      <p className="mt-5 border-t border-stone-300 pt-3 text-[11px] text-stone-600">
        Net revenue · USD · Last updated 10 Oct
      </p>
    </article>
  )
}
