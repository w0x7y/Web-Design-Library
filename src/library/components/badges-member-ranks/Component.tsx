export default function BadgesMemberRanks() {
  return (
    <section
      aria-label="Walking club achievement badges"
      className="w-72 rounded-3xl bg-violet-50 p-5 text-violet-950"
    >
      <p className="text-[10px] font-semibold tracking-widest uppercase">
        Little steps club
      </p>
      <h2 className="mt-1 text-xl font-bold">A few proud moments</h2>
      <ul role="list" className="mt-5 space-y-2.5">
        <li className="flex items-center gap-3 rounded-xl bg-white p-3">
          <span
            aria-hidden="true"
            className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-amber-400 bg-amber-100 text-xl text-amber-900"
          >
            ★
          </span>
          <div>
            <p className="text-sm font-semibold">First five</p>
            <p className="mt-0.5 text-[11px] text-violet-700">
              Five walks. A new habit.
            </p>
          </div>
        </li>
        <li className="flex items-center gap-3 rounded-xl bg-white p-3">
          <span
            aria-hidden="true"
            className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-emerald-400 bg-emerald-100 text-emerald-900"
          >
            <svg
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="size-6"
            >
              <path d="M2 14h16M5 14a5 5 0 0 1 10 0M10 2v3M3 6l2 2M17 6l-2 2" />
            </svg>
          </span>
          <div>
            <p className="text-sm font-semibold">Early bird</p>
            <p className="mt-0.5 text-[11px] text-violet-700">
              Out before the world wakes.
            </p>
          </div>
        </li>
        <li className="flex items-center gap-3 rounded-xl bg-white p-3">
          <span
            aria-hidden="true"
            className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-violet-400 bg-violet-100 text-xl text-violet-900"
          >
            ✦
          </span>
          <div>
            <p className="text-sm font-semibold">Weekend wanderer</p>
            <p className="mt-0.5 text-[11px] text-violet-700">
              Four weekends in a row.
            </p>
          </div>
        </li>
      </ul>
    </section>
  )
}
