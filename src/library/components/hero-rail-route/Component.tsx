// Fonts: Manrope (https://fonts.google.com/specimen/Manrope)
export default function HeroRailRoute() {
  return (
    <section className="bg-white text-blue-950 font-['Manrope',ui-sans-serif,system-ui,sans-serif]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-blue-200 pb-5">
          <p className="text-2xl font-bold tracking-tight">Northline</p>
          <p className="text-xs text-blue-700">Regional rail / Northern routes</p>
        </div>
        <div className="my-10 grid items-end gap-6 md:grid-cols-[2fr_1fr]">
          <h1 className="text-[2.5rem] leading-[1.1] font-semibold tracking-tight sm:text-[3.75rem]">Less motorway.<br />More window seat.</h1>
          <p className="max-w-sm text-base leading-relaxed text-blue-900">City mornings. Mountain afternoons. Our new valley line gets you there in 84 minutes, with a seat and a view included.</p>
        </div>
        <div className="relative h-44 overflow-hidden">
          <img className="h-full w-full object-cover object-center" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80" alt="Layered mountain peaks along the valley route" width="1600" height="1067" />
          <div className="absolute inset-x-6 bottom-5 h-24 w-[calc(100%-3rem)] bg-blue-950/90 p-4">
            <ol role="list" className="flex justify-between gap-2 text-xs text-white sm:text-sm">
              <li>Westhaven</li>
              <li>Alder Pass</li>
              <li>Highmere</li>
            </ol>
            <svg className="mt-3 h-5 w-full" aria-hidden="true" viewBox="0 0 1000 30" preserveAspectRatio="none">
              <path d="M10 15H990" stroke="#67e8f9" strokeWidth="3" />
              <g fill="white">
                <circle cx="10" cy="15" r="8" />
                <circle cx="500" cy="15" r="8" />
                <circle cx="990" cy="15" r="8" />
              </g>
            </svg>
          </div>
        </div>
        <form action="#" method="get" className="mt-6 grid gap-6 border border-blue-200 p-6 md:grid-cols-3">
          <div>
            <label htmlFor="hero-rail-route-station" className="mb-2 block text-xs font-semibold">Your departure</label>
            <select id="hero-rail-route-station" name="station" className="h-12 w-full min-w-0 border border-blue-500 bg-white px-3 text-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-950">
              <option>Westhaven Central</option>
              <option>Alder Pass</option>
              <option>Highmere</option>
            </select>
          </div>
          <div>
            <label htmlFor="hero-rail-route-date" className="mb-2 block text-xs font-semibold">Travel date</label>
            <select id="hero-rail-route-date" name="date" className="h-12 w-full min-w-0 border border-blue-500 bg-white px-3 text-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-950">
              <option>Friday, 16 October</option>
              <option>Saturday, 17 October</option>
              <option>Sunday, 18 October</option>
            </select>
          </div>
          <button type="submit" className="min-h-12 self-end rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-950">Find tickets from £12</button>
        </form>
        <p className="mt-4 text-xs text-blue-800">Every hour, every day. Bicycles welcome on all services.</p>
      </div>
    </section>
  )
}
