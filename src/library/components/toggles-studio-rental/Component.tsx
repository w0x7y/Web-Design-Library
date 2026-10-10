// Fonts: IBM Plex Sans (https://fonts.google.com/specimen/IBM+Plex+Sans)
export default function TogglesStudioRental() {
  return (
    <section
      aria-labelledby="toggles-studio-rental-title"
      className="w-72 rounded-xl border border-stone-300 bg-white p-4 font-['IBM_Plex_Sans',ui-sans-serif,system-ui,sans-serif] text-stone-900 sm:w-80"
    >
      <p className="text-[10px] font-semibold tracking-[0.12em] text-stone-600 uppercase">TAKEHOUSE / STUDIO RENTAL</p>
      <div className="mt-4 grid grid-cols-[4rem_1fr] items-center gap-4">
        <img
          src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80"
          alt="Recording studio with a mixing desk, guitars and rack-mounted audio equipment"
          width={800}
          height={533}
          className="h-20 w-16 rounded-lg object-cover"
        />
        <div>
          <h2 id="toggles-studio-rental-title" className="text-xl leading-6 font-medium">Studio B</h2>
          <p className="mt-2 text-sm text-emerald-800">3 hours · £42/hr</p>
          <p className="mt-1 text-xs text-stone-600">Live room / Session B-026</p>
        </div>
      </div>
      <div className="mt-4 space-y-4 border-t border-stone-300 pt-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <label htmlFor="toggles-studio-rental-engineer" className="block cursor-pointer text-sm font-semibold">Recording engineer</label>
            <p id="toggles-studio-rental-engineer-hint" className="mt-1 text-xs leading-4 text-stone-600">Add an engineer for the session.</p>
          </div>
          <input
            id="toggles-studio-rental-engineer"
            name="toggles-studio-rental-engineer"
            type="checkbox"
            role="switch"
            defaultChecked
            aria-describedby="toggles-studio-rental-engineer-hint"
            className="relative h-6 w-11 shrink-0 cursor-pointer appearance-none rounded-full border-2 border-stone-500 bg-white after:absolute after:top-0.5 after:left-0.5 after:size-4 after:rounded-full after:bg-stone-500 after:content-[''] checked:border-emerald-800 checked:bg-emerald-800 checked:after:translate-x-5 checked:after:bg-white hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800 forced-colors:border-[ButtonText] forced-colors:after:bg-[CanvasText] forced-colors:checked:after:bg-[CanvasText]"
          />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div>
            <label htmlFor="toggles-studio-rental-microphones" className="block cursor-pointer text-sm font-semibold">Microphone locker</label>
            <p id="toggles-studio-rental-microphones-hint" className="mt-1 text-xs leading-4 text-stone-600">Include the vintage mic set.</p>
          </div>
          <input
            id="toggles-studio-rental-microphones"
            name="toggles-studio-rental-microphones"
            type="checkbox"
            role="switch"
            aria-describedby="toggles-studio-rental-microphones-hint"
            className="relative h-6 w-11 shrink-0 cursor-pointer appearance-none rounded-full border-2 border-stone-500 bg-white after:absolute after:top-0.5 after:left-0.5 after:size-4 after:rounded-full after:bg-stone-500 after:content-[''] checked:border-emerald-800 checked:bg-emerald-800 checked:after:translate-x-5 checked:after:bg-white hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800 forced-colors:border-[ButtonText] forced-colors:after:bg-[CanvasText] forced-colors:checked:after:bg-[CanvasText]"
          />
        </div>
      </div>
      <p className="mt-4 text-[11px] leading-4 text-stone-600">Your session: 18:00–21:00</p>
    </section>
  )
}
