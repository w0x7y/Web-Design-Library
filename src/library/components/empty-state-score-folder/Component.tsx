// Fonts: Instrument Serif (https://fonts.google.com/specimen/Instrument+Serif)
export default function EmptyStateScoreFolder() {
  return (
    <section
      aria-labelledby="empty-state-score-folder-title"
      className="w-72 border border-rose-200 bg-rose-50 p-6 text-rose-950 sm:w-96 font-['Instrument_Serif',ui-sans-serif,system-ui,sans-serif] antialiased"
    >
      <header className="flex items-center justify-between text-2xl">
        <p>Restmark</p>
        <span className="font-sans text-[0.625rem] tracking-widest">MY SCORES / 0</span>
      </header>
      <svg aria-hidden="true" viewBox="0 0 240 58" fill="none" className="my-5 h-14 w-full text-rose-800">
        <path d="M0 13h240M0 21h240M0 29h240M0 37h240M0 45h240" stroke="currentColor" strokeWidth="1" />
        <path d="M105 20h30v8h-30z" fill="currentColor" />
      </svg>
      <h2 id="empty-state-score-folder-title" className="text-[2rem] leading-none">A little rest<br />before the music.</h2>
      <p className="mt-3 font-sans text-xs leading-5 text-rose-900">Keep your parts together. Add a PDF score and give it a place in your repertoire.</p>
      <footer className="mt-5 flex items-center justify-between gap-3 border-t border-rose-200 pt-4">
        <span className="font-sans text-[0.625rem] tracking-widest">PDF SCORES</span>
        <a href="#" className="font-sans text-xs font-semibold underline-offset-4 cursor-pointer hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Import a score →</a>
      </footer>
    </section>
  )
}
