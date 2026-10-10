// Fonts: Space Grotesk (https://fonts.google.com/specimen/Space+Grotesk)
export default function SettingsFleetCapture() {
  return (
    <section
      className="bg-[#f2a15f] px-5 py-12 text-[#29251f] font-['Space_Grotesk',ui-sans-serif,system-ui,sans-serif] sm:px-8"
    >
      <form className="mx-auto max-w-7xl">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#29251f] pb-5">
          <p className="text-2xl font-bold tracking-tight">KILOMET</p>
          <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#493a2c]">Fleet / data collection</p>
        </header>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div>
            <h2 className="mt-3 text-[2.25rem] leading-[1.1] tracking-[-0.035em] sm:text-[3rem]">Capture what counts.</h2>
            <p className="mt-3 max-w-lg text-sm leading-6 text-[#493a2c]">Location and vehicle data defaults for the Northbridge service fleet.</p>
            <p className="mt-8 text-[4.5rem] leading-none font-semibold">86</p>
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#493a2c]">Connected vehicles</p>
            <p className="mt-3 max-w-lg text-sm leading-6 text-[#493a2c]">Settings apply after each vehicle’s next sync. Drivers can see the collection policy in their app.</p>
          </div>
          <div className="border-2 border-[#29251f] bg-[#fff5e9]">
            <div className="grid gap-5 border-b border-[#805c3c] p-5 md:grid-cols-[1fr_1.2fr]">
              <div>
                <p className="mb-2 text-xs font-semibold tracking-widest">DATA / 01</p>
                <h3 className="text-lg font-semibold">Location pings</h3>
              </div>
              <label className="grid min-w-0 gap-2 text-sm font-medium" htmlFor="settings-fleet-capture-interval">
                While ignition is on
                <select
                  className="min-w-0 w-full rounded-md border border-[#493a2c] bg-transparent px-3 py-3 text-base font-normal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                  id="settings-fleet-capture-interval"
                  name="interval"
                >
                  <option value="30">Every 30 seconds</option>
                  <option value="60">Every 60 seconds</option>
                  <option value="120">Every 2 minutes</option>
                </select>
              </label>
            </div>
            <div className="grid gap-5 border-b border-[#805c3c] p-5 md:grid-cols-[1fr_1.2fr]">
              <div>
                <p className="mb-2 text-xs font-semibold tracking-widest">DATA / 02</p>
                <h3 className="text-lg font-semibold">Trip history</h3>
              </div>
              <label className="grid min-w-0 gap-2 text-sm font-medium" htmlFor="settings-fleet-capture-retention">
                Keep location records
                <select
                  className="min-w-0 w-full rounded-md border border-[#493a2c] bg-transparent px-3 py-3 text-base font-normal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                  id="settings-fleet-capture-retention"
                  name="retention"
                >
                  <option value="30">30 days</option>
                  <option value="60">60 days</option>
                  <option value="90">90 days</option>
                </select>
              </label>
            </div>
            <div className="p-5">
              <label
                className="flex cursor-pointer items-start gap-3 text-sm leading-6"
                htmlFor="settings-fleet-capture-private"
              >
                <input
                  className="mt-1 size-4 shrink-0 cursor-pointer accent-[#29251f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                  id="settings-fleet-capture-private"
                  name="private"
                  type="checkbox"
                  aria-describedby="settings-fleet-capture-private-hint"
                  defaultChecked
                />
                <span>
                  <span>Exclude private trips</span>
                  <span className="block text-xs leading-5 text-[#493a2c]" id="settings-fleet-capture-private-hint">Stop location collection outside working trips.</span>
                </span>
              </label>
            </div>
          </div>
        </div>
        <footer className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#805c3c] pt-5">
          <p className="block text-xs leading-5 text-[#493a2c]">Policy owner · Northbridge fleet office</p>
          <button
            className="inline-flex min-h-11 cursor-pointer items-center justify-center rounded-md bg-[#29251f] px-5 py-3 text-sm font-semibold text-[#fff5e9] hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#29251f]"
            type="button"
          >
            Save collection policy
          </button>
        </footer>
      </form>
    </section>
  )
}
