// Fonts: Familjen Grotesk
export default function BadgesDiveLog() {
  return (
    <section aria-label="Nacre Dive logged scuba credentials" className="relative h-80 w-72 overflow-hidden rounded-2xl bg-teal-950 p-5 font-['Familjen_Grotesk',ui-sans-serif,system-ui,sans-serif] text-white sm:w-[22rem]">
      <img src="https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=800&q=80" alt="Pink, purple and green corals in a blue-lit aquarium reef" width={800} height={600} className="absolute inset-0 h-full w-full object-cover" />
      <div aria-hidden="true" className="absolute inset-0 bg-linear-to-b from-teal-950/60 via-teal-950/90 to-teal-950"></div>
      <div className="relative flex h-full flex-col">
        <h2 className="text-xs font-medium tracking-wide">Nacre Dive / Log 027</h2>
        <p className="mt-2 text-3xl leading-tight font-medium">Coral garden</p>
        <ul role="list" className="mt-auto flex flex-col gap-3">
          <li className="flex items-center justify-between gap-2 rounded-lg border border-white/40 bg-teal-950/80 p-3 backdrop-blur-md"><span className="text-sm font-semibold">Advanced diver</span><span className="rounded-md bg-lime-200 px-2 py-1 text-xs font-semibold text-teal-950">24 m logged</span></li>
          <li className="rounded-lg border border-white/40 bg-teal-950/80 px-3 py-2 text-xs backdrop-blur-md">Specialty / Underwater photography</li>
        </ul>
        <p className="mt-3 text-xs">Buddy verified · 08 October 2026</p>
      </div>
    </section>
  )
}
