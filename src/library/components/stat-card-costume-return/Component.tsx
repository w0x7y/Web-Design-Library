// Fonts: Syne
export default function StatCardCostumeReturn() {
  return (
    <article className="w-72 rounded-3xl border border-pink-800 bg-pink-950 p-5 font-['Syne',ui-sans-serif,system-ui,sans-serif] text-pink-200 sm:w-80">
      <header className="flex justify-between text-[10px] font-semibold tracking-wide">
        <p>CUECUP</p>
        <span>WARDROBE / WEEK 41</span>
      </header>
      <div className="mt-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-[56px] leading-none font-bold tracking-tight tabular-nums">86</p>
          <h2 className="mt-2 text-sm">Costumes on stage</h2>
        </div>
        <svg aria-hidden="true" viewBox="0 0 64 64" fill="currentColor" stroke="#500724" strokeWidth="2" strokeLinejoin="round" className="size-16 shrink-0 -rotate-6">
          <path d="m22 8-16 9 8 15 8-4v28h20V28l8 4 8-15-16-9c-2 8-18 8-20 0Z" />
          <path d="M26 10v36m12-36v36M26 20h12" fill="none" />
        </svg>
      </div>
      <div className="mt-6 rounded-b-xl border-t-2 border-dashed border-pink-950 bg-orange-100 p-4 text-pink-950">
        <div className="flex items-baseline justify-between gap-2">
          <p className="text-2xl font-bold">12 due back</p>
          <span className="text-[10px] font-semibold">TODAY</span>
        </div>
        <p className="mt-1 text-[10px]">Before 18:00 · includes 3 waistcoats</p>
        <a href="#cuecup-return-log" className="mt-4 block rounded-lg bg-pink-950 px-3 py-2 text-xs font-semibold text-orange-100 hover:bg-pink-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-950">Open the return log ↗</a>
      </div>
    </article>
  )
}
