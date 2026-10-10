// Fonts: DM Mono (https://fonts.google.com/specimen/DM+Mono)
export default function BlogCardFalconFlight() {
  return (
    <article className="w-72 bg-stone-950 p-6 font-['DM_Mono',ui-monospace,SFMono-Regular,monospace] text-stone-100 sm:w-80">
      <header className="flex justify-between gap-3 text-[9px] text-stone-400">
        <span>Aerie Return</span>
        <span>Field log / 028</span>
      </header>
      <div className="mt-6 border-y border-stone-700 py-3">
        <svg aria-hidden="true" viewBox="0 0 240 68" fill="none" className="h-[4.25rem] w-full text-stone-300">
          <path d="M8 54c29 0 28-34 60-34s31 31 59 31 33-39 64-39h39" stroke="currentColor" strokeWidth="1" strokeDasharray="3 5" />
          <path d="m201 8 15 4-15 4m-190 34 4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
          <path d="m166 17 11 7 10-7-5 11-5-1-5 1Z" fill="currentColor" />
        </svg>
        <p className="mt-2 text-[8px] text-stone-400">Flight pen 2 / Observation notes</p>
      </div>
      <h2 className="mt-5 text-[23px] leading-7 font-medium tracking-[-0.04em]">
        <a href="#aerie-return-second-turn" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-100">Watch the second turn.</a>
      </h2>
      <p className="mt-3 text-[11px] leading-5 text-stone-400">A falcon's first straight flight tells only part of the story.</p>
      <footer className="mt-5 flex justify-between gap-3 text-[9px] text-stone-400">
        <span>Care team notes</span>
        <span>4 min read</span>
      </footer>
    </article>
  )
}
