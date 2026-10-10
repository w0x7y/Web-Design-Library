// Fonts: Space Grotesk
export default function BadgesDemolitionZones() {
  return (
    <section aria-label="Breakline Works site access badges" className="w-72 border-2 border-orange-400 bg-neutral-950 p-5 font-['Space_Grotesk',ui-sans-serif,system-ui,sans-serif] text-orange-100 sm:w-[22rem]">
      <h2 className="text-xs font-bold tracking-widest uppercase">Breakline Works</h2>
      <div className="mt-5 flex items-center gap-4 bg-orange-400 p-4 text-neutral-950">
        <svg aria-hidden="true" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" className="size-11 shrink-0">
          <path d="M24 5 45 42H3Z M24 17v12 M24 34v1" />
        </svg>
        <div>
          <p className="text-xs font-bold uppercase">Zone C / Active</p>
          <p className="mt-1 text-2xl leading-none font-bold uppercase">No entry</p>
        </div>
      </div>
      <ul role="list" className="mt-5 flex flex-wrap gap-2">
        <li className="border-2 border-orange-400 px-3 py-2 text-xs font-bold uppercase">Crew cleared</li>
        <li className="bg-orange-100 px-3 py-2 text-xs font-bold text-neutral-950 uppercase">Permit 08</li>
      </ul>
      <p className="mt-5 border-t border-orange-400 pt-3 text-xs">East annex · Survey complete</p>
    </section>
  )
}
