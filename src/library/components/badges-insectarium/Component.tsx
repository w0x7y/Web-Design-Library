// Fonts: Bricolage Grotesque
export default function BadgesInsectarium() {
  return (
    <section aria-label="Papilio Yard butterfly observation badges" className="w-72 overflow-hidden rounded-[1.25rem] border border-teal-800 bg-yellow-50 font-['Bricolage_Grotesque',ui-sans-serif,system-ui,sans-serif] text-teal-950 sm:w-[22rem]">
      <h2 className="p-4 text-sm font-semibold">Papilio Yard / Field journal</h2>
      <img src="https://images.unsplash.com/photo-1475809913362-28a064062ccd?w=800&q=80" alt="Orange butterfly feeding on a cluster of orange flowers" width={800} height={533} className="h-28 w-full object-cover" />
      <div className="px-4 pb-4">
        <ul role="list" className="relative -mt-3 flex flex-wrap gap-2">
          <li className="rounded-md bg-teal-800 px-3 py-1.5 text-xs font-semibold text-white">Sighted today</li>
          <li className="rounded-md bg-yellow-200 px-3 py-1.5 text-xs font-semibold">House 02</li>
        </ul>
        <h3 className="mt-3 text-xl font-semibold">Plain tiger</h3>
        <p className="mt-1 text-xs">Danaus chrysippus · Nectar garden</p>
        <ul role="list" className="mt-4 flex flex-wrap gap-2">
          <li className="rounded-full border border-teal-700 px-2.5 py-1 text-xs">Day-active</li>
          <li className="rounded-full border border-teal-700 px-2.5 py-1 text-xs">Nectar feeder</li>
        </ul>
      </div>
    </section>
  )
}
