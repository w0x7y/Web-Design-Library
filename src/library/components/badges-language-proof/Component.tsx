// Fonts: Instrument Serif
export default function BadgesLanguageProof() {
  return (
    <section aria-label="Bracketside translation proof badges" className="w-72 border border-stone-300 bg-stone-50 p-6 text-stone-950 sm:w-[22rem]">
      <h2 className="text-xs tracking-wide">Bracketside / Proof 041</h2>
      <p aria-label="Translated from French to English" className="mt-5 flex items-center gap-3 font-['Instrument_Serif',ui-serif,Georgia,serif] text-4xl">
        <span>FR</span>
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5 text-stone-600">
          <path d="M3 12h18m-6-6 6 6-6 6" />
        </svg>
        <span>EN</span>
      </p>
      <ul role="list" className="mt-6 flex flex-wrap gap-2">
        <li className="bg-rose-100 px-2.5 py-1 text-xs font-medium text-rose-950">Human reviewed</li>
        <li className="border border-stone-300 px-2.5 py-1 text-xs">UK English</li>
        <li className="border border-stone-300 px-2.5 py-1 text-xs">Glossary matched</li>
      </ul>
      <p className="mt-5 flex justify-between border-t border-stone-300 pt-3 text-xs text-stone-600"><span>Delivery format</span><span>InDesign + PDF</span></p>
    </section>
  )
}
