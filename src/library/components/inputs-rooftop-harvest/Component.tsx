// Fonts: Fraunces (https://fonts.google.com/specimen/Fraunces)
export default function InputsRooftopHarvest() {
  return (
    <section
      className="w-72 border border-amber-800 bg-amber-50 font-['Fraunces',ui-sans-serif,system-ui,sans-serif] text-amber-950 sm:w-[22rem]"
      aria-label="Skyplot rooftop harvest record"
    >
      <img
        className="h-[4.5rem] w-full object-cover"
        src="https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&q=80"
        alt="Three ripe red tomatoes on the vine against a pale background"
        width={800}
        height={532}
      />
      <div className="p-5">
        <p className="text-[10px] tracking-widest uppercase">Skyplot / Rooftop farm</p>
        <h2 className="mt-1 text-2xl font-medium">Tomato harvest</h2>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div>
            <label
              className="block text-[11px] tracking-wide uppercase"
              htmlFor="inputs-rooftop-harvest-bed"
            >Bed code</label>
            <input
              className="mt-2 block h-10 w-full min-w-0 border border-amber-800 bg-white px-2 text-sm leading-[normal] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
              id="inputs-rooftop-harvest-bed"
              name="bed"
              type="text"
              defaultValue="SP-T08"
              aria-describedby="inputs-rooftop-harvest-note"
            />
          </div>
          <div>
            <label
              className="block text-[11px] tracking-wide uppercase"
              htmlFor="inputs-rooftop-harvest-yield"
            >Yield</label>
            <div className="mt-2 flex h-10 border border-amber-800 bg-white">
              <input
                className="min-w-0 flex-1 px-2 text-sm leading-[normal] tabular-nums focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                id="inputs-rooftop-harvest-yield"
                name="yield"
                type="number"
                min={0}
                step={0.01}
                defaultValue="4.60"
                aria-describedby="inputs-rooftop-harvest-unit"
              />
              <span className="flex items-center pr-2 text-xs" id="inputs-rooftop-harvest-unit">kg</span>
            </div>
          </div>
        </div>
        <p
          className="mt-4 border-t border-amber-800 pt-3 text-xs leading-5"
          id="inputs-rooftop-harvest-note"
        >Log the bed before packing the tomatoes.</p>
      </div>
    </section>
  )
}
