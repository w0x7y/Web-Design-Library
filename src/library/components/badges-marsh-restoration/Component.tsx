// Fonts: Instrument Serif
export default function BadgesMarshRestoration() {
  return (
    <section aria-label="Brackhaven salt-marsh conservation badges" className="w-72 border border-stone-300 bg-stone-50 p-6 text-stone-950 sm:w-[22rem]">
      <h2 className="text-xs tracking-wide">Brackhaven Trust / Plot 026</h2>
      <p aria-label="Restored salt marsh increased from 12 to 18 hectares" className="mt-5 flex items-center gap-3 font-['Instrument_Serif',ui-serif,Georgia,serif] text-4xl">
        <span>12 ha</span>
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5 text-stone-600">
          <path d="M3 12h18m-6-6 6 6-6 6" />
        </svg>
        <span>18 ha</span>
      </p>
      <ul role="list" className="mt-6 flex flex-wrap gap-2">
        <li className="bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-950">Restored</li>
        <li className="border border-stone-300 px-2.5 py-1 text-xs">Tidal habitat</li>
        <li className="border border-stone-300 px-2.5 py-1 text-xs">Bird refuge</li>
      </ul>
      <p className="mt-5 flex justify-between border-t border-stone-300 pt-3 text-xs text-stone-600"><span>Survey window</span><span>Oct 2026</span></p>
    </section>
  )
}
