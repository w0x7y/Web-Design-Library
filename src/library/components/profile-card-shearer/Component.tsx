// Fonts: Newsreader
export default function ProfileCardShearer() {
  return (
    <article className="w-72 bg-stone-950 p-5 text-amber-100 sm:w-80">
      <p className="border-b border-stone-600 pb-3 text-[10px] uppercase tracking-widest">Marrow Wool / Contractors</p>
      <div className="mt-5 flex items-center gap-4">
        <span aria-hidden="true" className="font-['Newsreader',ui-sans-serif,system-ui,sans-serif] text-[56px] leading-none text-amber-300">MK</span>
        <div>
          <h2 className="font-['Newsreader',ui-sans-serif,system-ui,sans-serif] text-[24px] leading-7">Maeve Kelly</h2>
          <p className="mt-1 text-xs text-stone-300">Shearer · County Kerry</p>
        </div>
      </div>
      <p className="mt-4 text-xs leading-5 text-stone-300">Clean fleeces, quiet handling.<br />Small flocks always welcome.</p>
      <p className="mt-4 text-xs"><span className="mb-1 block text-[10px] uppercase tracking-widest text-amber-300">Next route</span>West Cork · 3 to 6 Nov</p>
      <details className="mt-4 border-t border-stone-600 pt-3">
        <summary className="cursor-pointer text-xs hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300">Equipment I bring</summary>
        <p className="mt-2 text-xs leading-5 text-stone-300">Mobile shearing stand, clean combs<br />and a quiet electric handpiece.</p>
      </details>
      <a href="#maeve-route" aria-label="Enquire about Maeve Kelly's shearing route" className="mt-4 flex items-center justify-between text-xs font-medium text-amber-300 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300">
        Ask about your flock
        <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4">
          <path d="M4 10h12m-5-5 5 5-5 5" />
        </svg>
      </a>
    </article>
  )
}
