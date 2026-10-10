// Fonts: Newsreader
export default function BadgesPianoGrades() {
  return (
    <section aria-label="Cadenza Board piano examination badges" className="w-72 rounded-lg border border-stone-600 bg-stone-900 p-6 font-['Newsreader',ui-serif,Georgia,serif] text-stone-100 sm:w-[22rem]">
      <h2 className="text-lg">Cadenza Board</h2>
      <div className="mt-5 flex items-center gap-5">
        <p className="flex h-24 w-20 shrink-0 flex-col items-center justify-center rounded-t-[2.5rem] bg-stone-100 text-stone-900"><span className="text-xs tracking-widest uppercase">Grade</span><span className="text-4xl">6</span></p>
        <div>
          <p className="text-2xl text-amber-200">Distinction</p>
          <p className="mt-1 text-sm">Piano · Autumn 2026</p>
        </div>
      </div>
      <ul role="list" className="mt-6 flex flex-wrap gap-4">
        <li className="border-b border-stone-600 pb-1 text-sm">Baroque</li>
        <li className="border-b border-stone-600 pb-1 text-sm">Sight-reading</li>
      </ul>
      <details className="mt-5 border-t border-stone-600 pt-3">
        <summary className="flex cursor-pointer items-center justify-between text-sm hover:text-amber-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"><span>Assessment note</span><span aria-hidden="true">+</span></summary>
        <p className="mt-3 text-sm">Secure phrasing and a well-balanced left hand. Awarded 88/100.</p>
      </details>
    </section>
  )
}
