// Fonts: Bricolage Grotesque
export default function BadgesBalloonFlight() {
  return (
    <section aria-label="Aerostat Days balloon flight badges" className="w-72 rounded-3xl border border-orange-800 bg-linear-to-br from-amber-50 via-orange-100 to-rose-200 p-5 font-['Bricolage_Grotesque',ui-sans-serif,system-ui,sans-serif] text-orange-950 sm:w-[22rem]">
      <h2 className="text-xs font-semibold tracking-wide">Aerostat Days / Flight 12</h2>
      <div className="mt-5 flex items-center gap-5">
        <svg aria-hidden="true" viewBox="0 0 64 88" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-[5.5rem] w-16 shrink-0">
          <path d="M32 3C15 3 5 15 5 29c0 18 16 28 20 35h14c4-7 20-17 20-35C59 15 49 3 32 3Z M32 3C13 22 22 46 28 64 M32 3c19 19 10 43 4 61 M25 65l3 10h8l3-10 M26 76h12v9H26Z M5 28h54" />
        </svg>
        <div>
          <p className="text-2xl leading-tight font-semibold">Sunrise<br />departure</p>
          <p className="mt-2 text-xs">06:40–07:10 · 14 October</p>
        </div>
      </div>
      <details className="mt-4 rounded-lg border border-white bg-white/60 p-3 backdrop-blur-sm hover:bg-white/80">
        <summary className="flex cursor-pointer items-center justify-between gap-2 text-xs font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-950"><span>Wind window / Within limits</span><span aria-hidden="true">+</span></summary>
        <p className="mt-2 text-xs">Ground reading: 4 knots from the west. Crew check at 06:10.</p>
      </details>
      <ul role="list" className="mt-4 flex flex-wrap gap-2">
        <li className="flex items-center gap-1.5 rounded-full border border-orange-950 px-2.5 py-1 text-xs"><span aria-hidden="true">✓</span>Pilot assigned</li>
        <li className="flex items-center gap-1.5 rounded-full border border-orange-950 px-2.5 py-1 text-xs"><span aria-hidden="true">✓</span>Landing agreed</li>
      </ul>
    </section>
  )
}
