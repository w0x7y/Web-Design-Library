// Fonts: Fraunces (https://fonts.google.com/specimen/Fraunces)
export default function InputsMushroomHarvest() {
  return (
    <section
      className="w-72 border border-amber-800 bg-amber-50 font-['Fraunces',ui-sans-serif,system-ui,sans-serif] text-amber-950 sm:w-[22rem]"
      aria-label="Mycel House harvest record"
    >
      <img
        className="h-[4.5rem] w-full object-cover"
        src="https://images.unsplash.com/photo-1504545102780-26774c1bb073?w=800&q=80"
        alt="Brown mushrooms on a stone work surface beside a harvest bowl"
        width={800}
        height={1098}
      />
      <div className="p-5">
        <p className="text-[10px] tracking-widest uppercase">Mycel House / Grow room</p>
        <h2 className="mt-1 text-2xl font-medium">Today's harvest</h2>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div>
            <label
              className="block text-[11px] tracking-wide uppercase"
              htmlFor="inputs-mushroom-harvest-lot"
            >Lot code</label>
            <input
              className="mt-2 block h-10 w-full min-w-0 border border-amber-800 bg-white px-2 text-sm leading-[normal] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
              id="inputs-mushroom-harvest-lot"
              name="lot"
              type="text"
              defaultValue="MH-1042"
              aria-describedby="inputs-mushroom-harvest-note"
            />
          </div>
          <div>
            <label
              className="block text-[11px] tracking-wide uppercase"
              htmlFor="inputs-mushroom-harvest-yield"
            >Yield</label>
            <div className="mt-2 flex h-10 border border-amber-800 bg-white">
              <input
                className="min-w-0 flex-1 px-2 text-sm leading-[normal] tabular-nums focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                id="inputs-mushroom-harvest-yield"
                name="yield"
                type="number"
                min={0}
                step={0.01}
                defaultValue="3.25"
                aria-describedby="inputs-mushroom-harvest-unit"
              />
              <span className="flex items-center pr-2 text-xs" id="inputs-mushroom-harvest-unit">kg</span>
            </div>
          </div>
        </div>
        <p
          className="mt-4 border-t border-amber-800 pt-3 text-xs leading-5"
          id="inputs-mushroom-harvest-note"
        >Match the lot to the grow-room label.</p>
      </div>
    </section>
  )
}
