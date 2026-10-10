// Fonts: Space Grotesk (https://fonts.google.com/specimen/Space+Grotesk)
export default function EmptyStateStrengthLog() {
  return (
    <section
      aria-labelledby="empty-state-strength-log-title"
      className="w-72 border-2 border-neutral-950 bg-neutral-950 p-5 text-lime-300 sm:w-96 font-['Space_Grotesk',ui-sans-serif,system-ui,sans-serif] antialiased"
    >
      <header className="flex justify-between border-b border-lime-300 pb-3 text-[0.625rem] font-medium tracking-wider">
        <p>SETMETER</p>
        <span>SESSION / 001</span>
      </header>
      <div className="flex items-center gap-5 py-3">
        <span aria-hidden="true" className="text-[5rem] leading-none">—</span>
        <p className="text-xs leading-5">SETS<br />LOGGED</p>
      </div>
      <h2 id="empty-state-strength-log-title" className="text-xl font-bold leading-6">Your first set goes here.</h2>
      <p className="mt-3 text-xs leading-5 text-neutral-300">Exercise. Weight. Reps. Record one set to begin your training history.</p>
      <a href="#" className="mt-5 flex h-11 items-center justify-between bg-lime-300 px-4 text-sm font-bold text-neutral-950 cursor-pointer hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"><span>Log a set</span><span aria-hidden="true">＋</span></a>
      <p className="mt-3 text-[0.625rem] tracking-wider text-neutral-400">NO PERSONAL BESTS TO BEAT. YET.</p>
    </section>
  )
}
