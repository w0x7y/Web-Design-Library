// Fonts: Archivo (https://fonts.google.com/specimen/Archivo)
export default function BlogCardBallotCount() {
  return (
    <article className="w-72 border-2 border-orange-950 bg-orange-50 font-['Archivo',ui-sans-serif,system-ui,sans-serif] text-orange-950 sm:w-[22rem]">
      <header className="flex justify-between gap-3 border-b-2 border-orange-950 px-4 py-3 text-[10px] font-bold uppercase tracking-[0.06em]">
        <span>Civicfold / Methods</span>
        <span>No. 03</span>
      </header>
      <div className="grid grid-cols-[4.5rem_minmax(0,1fr)]">
        <div className="flex flex-col border-r-2 border-orange-950 text-center text-4xl leading-[1.4] font-extrabold tracking-[-0.05em]" aria-hidden="true">
          <span>01</span>
          <span>02</span>
          <span className="bg-orange-950 text-orange-50">03</span>
        </div>
        <div className="p-4">
          <p className="text-[9px] font-semibold uppercase tracking-[0.06em] text-orange-800">At the counting table</p>
          <h2 className="mt-3 text-2xl leading-6 font-extrabold tracking-[-0.04em]">
            <a href="#civicfold-second-count" className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-950">The case for a second count.</a>
          </h2>
          <p className="mt-3 text-xs leading-5 text-orange-800">A table layout that makes every handoff visible.</p>
        </div>
      </div>
      <footer className="flex justify-between gap-3 border-t-2 border-orange-950 bg-orange-200 px-4 py-3 text-[11px] font-semibold">
        <span>Sort. Count. Check.</span>
        <span>6 min ↗</span>
      </footer>
    </article>
  )
}
