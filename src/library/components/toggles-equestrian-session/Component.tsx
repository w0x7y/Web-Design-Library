// Fonts: Instrument Serif (https://fonts.google.com/specimen/Instrument+Serif)
export default function TogglesEquestrianSession() {
  return (
    <section
      aria-labelledby="toggles-equestrian-session-title"
      className="w-72 overflow-hidden rounded-xl border border-emerald-800 bg-emerald-950 font-['Instrument_Serif',ui-sans-serif,system-ui,sans-serif] text-amber-50 sm:w-96"
    >
      <img
        src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&q=80"
        alt="White horse moving through a wooded paddock"
        width={800}
        height={533}
        className="h-24 w-full object-cover object-[center_45%]"
      />
      <div className="p-5">
        <p className="text-[10px] font-semibold tracking-[0.12em] text-emerald-200 uppercase">CANTRO / RIDING SCHOOL</p>
        <h2 id="toggles-equestrian-session-title" className="mt-1 text-[28px] leading-8 font-normal">Your hour in the arena.</h2>
        <p className="mt-1 text-sm text-emerald-200">Sunday, 11:00 · Indoor arena</p>
        <div className="mt-4 space-y-3 border-t border-emerald-700 pt-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <label htmlFor="toggles-equestrian-session-helmet" className="block cursor-pointer text-sm font-semibold">Reserve a helmet</label>
              <p id="toggles-equestrian-session-helmet-hint" className="mt-1 text-xs leading-4 text-emerald-200">Included with your lesson.</p>
            </div>
            <input
              id="toggles-equestrian-session-helmet"
              name="toggles-equestrian-session-helmet"
              type="checkbox"
              role="switch"
              defaultChecked
              aria-describedby="toggles-equestrian-session-helmet-hint"
              className="relative h-6 w-11 shrink-0 cursor-pointer appearance-none rounded-full border-2 border-emerald-200 bg-emerald-950 after:absolute after:top-0.5 after:left-0.5 after:size-4 after:rounded-full after:bg-emerald-200 after:content-[''] checked:border-amber-200 checked:bg-amber-200 checked:after:translate-x-5 checked:after:bg-emerald-950 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200 forced-colors:border-[ButtonText] forced-colors:after:bg-[CanvasText] forced-colors:checked:after:bg-[CanvasText]"
            />
          </div>
          <div className="flex items-center justify-between gap-4">
            <div>
              <label htmlFor="toggles-equestrian-session-groom" className="block cursor-pointer text-sm font-semibold">Grooming beforehand</label>
              <p id="toggles-equestrian-session-groom-hint" className="mt-1 text-xs leading-4 text-emerald-200">Arrive 15 minutes early.</p>
            </div>
            <input
              id="toggles-equestrian-session-groom"
              name="toggles-equestrian-session-groom"
              type="checkbox"
              role="switch"
              aria-describedby="toggles-equestrian-session-groom-hint"
              className="relative h-6 w-11 shrink-0 cursor-pointer appearance-none rounded-full border-2 border-emerald-200 bg-emerald-950 after:absolute after:top-0.5 after:left-0.5 after:size-4 after:rounded-full after:bg-emerald-200 after:content-[''] checked:border-amber-200 checked:bg-amber-200 checked:after:translate-x-5 checked:after:bg-emerald-950 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200 forced-colors:border-[ButtonText] forced-colors:after:bg-[CanvasText] forced-colors:checked:after:bg-[CanvasText]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
