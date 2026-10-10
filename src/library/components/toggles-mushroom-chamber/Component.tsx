// Fonts: IBM Plex Sans (https://fonts.google.com/specimen/IBM+Plex+Sans)
export default function TogglesMushroomChamber() {
  return (
    <section
      aria-labelledby="toggles-mushroom-chamber-title"
      className="w-72 rounded-xl border border-stone-300 bg-white p-4 font-['IBM_Plex_Sans',ui-sans-serif,system-ui,sans-serif] text-stone-900 sm:w-80"
    >
      <p className="text-[10px] font-semibold tracking-[0.12em] text-stone-600 uppercase">MYCORA / GROW ROOM</p>
      <div className="mt-4 grid grid-cols-[4rem_1fr] items-center gap-4">
        <img
          src="https://images.unsplash.com/photo-1504545102780-26774c1bb073?w=800&q=80"
          alt="Harvested brown mushrooms on a stone surface"
          width={800}
          height={1098}
          className="h-20 w-16 rounded-lg object-cover"
        />
        <div>
          <h2 id="toggles-mushroom-chamber-title" className="text-xl leading-6 font-medium">Chamber 04</h2>
          <p className="mt-2 text-sm text-emerald-800">86% RH · 18.4°C</p>
          <p className="mt-1 text-xs text-stone-600">Chestnut batch / M-042</p>
        </div>
      </div>
      <div className="mt-4 space-y-4 border-t border-stone-300 pt-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <label htmlFor="toggles-mushroom-chamber-mist" className="block cursor-pointer text-sm font-semibold">Timed misting</label>
            <p id="toggles-mushroom-chamber-mist-hint" className="mt-1 text-xs leading-4 text-stone-600">15 seconds every half hour.</p>
          </div>
          <input
            id="toggles-mushroom-chamber-mist"
            name="toggles-mushroom-chamber-mist"
            type="checkbox"
            role="switch"
            defaultChecked
            aria-describedby="toggles-mushroom-chamber-mist-hint"
            className="relative h-6 w-11 shrink-0 cursor-pointer appearance-none rounded-full border-2 border-stone-500 bg-white after:absolute after:top-0.5 after:left-0.5 after:size-4 after:rounded-full after:bg-stone-500 after:content-[''] checked:border-emerald-800 checked:bg-emerald-800 checked:after:translate-x-5 checked:after:bg-white hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800 forced-colors:border-[ButtonText] forced-colors:after:bg-[CanvasText] forced-colors:checked:after:bg-[CanvasText]"
          />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div>
            <label htmlFor="toggles-mushroom-chamber-air" className="block cursor-pointer text-sm font-semibold">Fresh-air cycle</label>
            <p id="toggles-mushroom-chamber-air-hint" className="mt-1 text-xs leading-4 text-stone-600">Run the vent between mists.</p>
          </div>
          <input
            id="toggles-mushroom-chamber-air"
            name="toggles-mushroom-chamber-air"
            type="checkbox"
            role="switch"
            aria-describedby="toggles-mushroom-chamber-air-hint"
            className="relative h-6 w-11 shrink-0 cursor-pointer appearance-none rounded-full border-2 border-stone-500 bg-white after:absolute after:top-0.5 after:left-0.5 after:size-4 after:rounded-full after:bg-stone-500 after:content-[''] checked:border-emerald-800 checked:bg-emerald-800 checked:after:translate-x-5 checked:after:bg-white hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800 forced-colors:border-[ButtonText] forced-colors:after:bg-[CanvasText] forced-colors:checked:after:bg-[CanvasText]"
          />
        </div>
      </div>
      <p className="mt-4 text-[11px] leading-4 text-stone-600">Last sensor check: 10:42</p>
    </section>
  )
}
