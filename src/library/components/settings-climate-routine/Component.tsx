// Fonts: DM Sans (https://fonts.google.com/specimen/DM+Sans)
export default function SettingsClimateRoutine() {
  return (
    <section
      className="bg-[linear-gradient(120deg_in_oklab,#f7e3d5,#f4cbb5,#ead7bd)] px-5 py-12 font-['DM_Sans',ui-sans-serif,system-ui,sans-serif] text-[#4b2f25] sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#68473c]">Morrowheat / home comfort</p>
        <h2 className="mt-3 text-[2.25rem] leading-[1.1] tracking-[-0.035em] sm:text-[3rem]">Warm when you need it.</h2>
        <p className="mt-3 max-w-lg text-sm leading-6 text-[#68473c]">Your weekday routine for the living room thermostat.</p>
        <div className="mt-8 grid items-start gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
          <figure className="relative overflow-hidden rounded-3xl">
            <img
              className="aspect-[4/3] w-full object-cover"
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80"
              alt="Sunlit living room with white armchairs, a brown sofa and a round coffee table"
              width={1200}
              height={900}
            />
            <figcaption className="absolute bottom-4 left-4 rounded-full bg-[#fff8f3] px-4 py-2 text-xs font-medium">Living room · downstairs</figcaption>
          </figure>
          <form className="rounded-3xl border border-white bg-white/60 p-5 backdrop-blur-xl sm:p-8">
            <div className="mb-8 flex items-center gap-5">
              <p className="grid size-28 shrink-0 place-items-center rounded-full border-4 border-[#8a3f2e] text-4xl font-medium" aria-label="Current room temperature 21 degrees Celsius">21°</p>
              <div>
                <h3 className="text-lg font-semibold">Comfort mode</h3>
                <p className="block text-xs leading-5 text-[#68473c]">Following your weekday schedule</p>
              </div>
            </div>
            <div className="grid content-start gap-5">
              <label className="grid min-w-0 gap-2 text-sm font-medium" htmlFor="settings-climate-routine-target">
                Comfort temperature
                <select
                  className="min-w-0 w-full rounded-md border border-[#68473c] bg-transparent px-3 py-3 text-base font-normal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                  id="settings-climate-routine-target"
                  name="target"
                >
                  <option value="21">21 °C</option>
                  <option value="20">20 °C</option>
                  <option value="22">22 °C</option>
                </select>
              </label>
              <label className="grid min-w-0 gap-2 text-sm font-medium" htmlFor="settings-climate-routine-start">
                Warm-up starts
                <select
                  className="min-w-0 w-full rounded-md border border-[#68473c] bg-transparent px-3 py-3 text-base font-normal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                  id="settings-climate-routine-start"
                  name="start"
                >
                  <option value="0630">06:30</option>
                  <option value="0700">07:00</option>
                  <option value="0730">07:30</option>
                </select>
              </label>
              <label
                className="flex cursor-pointer items-start gap-3 text-sm leading-6"
                htmlFor="settings-climate-routine-away"
              >
                <input
                  className="mt-1 size-4 shrink-0 cursor-pointer accent-[#8a3f2e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                  id="settings-climate-routine-away"
                  name="away"
                  type="checkbox"
                  aria-describedby="settings-climate-routine-away-hint"
                  defaultChecked
                />
                <span>
                  <span>Lower the heat while away</span>
                  <span className="block text-xs leading-5 text-[#68473c]" id="settings-climate-routine-away-hint">Use 17 °C when the house is empty.</span>
                </span>
              </label>
            </div>
            <footer className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#bd9c8b] pt-5">
              <p className="block text-xs leading-5 text-[#68473c]">Monday to Friday</p>
              <button
                className="inline-flex min-h-11 cursor-pointer items-center justify-center rounded-md bg-[#8a3f2e] px-5 py-3 text-sm font-semibold text-[#fff8f3] hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8a3f2e]"
                type="button"
              >
                Save routine
              </button>
            </footer>
          </form>
        </div>
      </div>
    </section>
  )
}
