// Fonts: Familjen Grotesk (https://fonts.google.com/specimen/Familjen+Grotesk)
export default function SettingsFamilyListening() {
  return (
    <section
      className="bg-[#173c32] px-5 py-12 text-[#f4f7db] font-['Familjen_Grotesk',ui-sans-serif,system-ui,sans-serif] sm:px-8"
    >
      <form className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#bed2b9]">Mixnest / your family</p>
        <h2 className="mt-3 text-[2.25rem] leading-[1.1] tracking-[-0.035em] sm:text-[3rem]">Different ears. Their own rules.</h2>
        <p className="mt-3 max-w-lg text-sm leading-6 text-[#bed2b9]">Pick a family member, then set the listening preferences for their profile.</p>
        <div className="mt-8 grid gap-8 lg:grid-cols-[22rem_minmax(0,1fr)] lg:gap-14">
          <fieldset>
            <legend className="text-lg font-semibold">Whose profile?</legend>
            <div className="mt-4 grid gap-3">
              <label
                className="flex cursor-pointer items-center gap-4 rounded-full border border-[#688673] px-5 py-4 has-[:checked]:border-[#d9eb83] has-[:checked]:bg-[#244e3b]"
                htmlFor="settings-family-listening-nia"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#ecc3b8] text-lg font-semibold text-[#173c32]" aria-hidden="true">N</span>
                <span className="flex-1 text-lg">Nia · 11</span>
                <input
                  className="mt-1 size-4 shrink-0 cursor-pointer accent-[#d9eb83] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                  type="radio"
                  name="settings-family-listening-member"
                  defaultValue="nia"
                  id="settings-family-listening-nia"
                  defaultChecked
                />
              </label>
              <label
                className="flex cursor-pointer items-center gap-4 rounded-full border border-[#688673] px-5 py-4 has-[:checked]:border-[#d9eb83] has-[:checked]:bg-[#244e3b]"
                htmlFor="settings-family-listening-leo"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#ecc3b8] text-lg font-semibold text-[#173c32]" aria-hidden="true">L</span>
                <span className="flex-1 text-lg">Leo · 15</span>
                <input
                  className="mt-1 size-4 shrink-0 cursor-pointer accent-[#d9eb83] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                  type="radio"
                  name="settings-family-listening-member"
                  defaultValue="leo"
                  id="settings-family-listening-leo"
                />
              </label>
              <label
                className="flex cursor-pointer items-center gap-4 rounded-full border border-[#688673] px-5 py-4 has-[:checked]:border-[#d9eb83] has-[:checked]:bg-[#244e3b]"
                htmlFor="settings-family-listening-alex"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#ecc3b8] text-lg font-semibold text-[#173c32]" aria-hidden="true">A</span>
                <span className="flex-1 text-lg">Alex · adult</span>
                <input
                  className="mt-1 size-4 shrink-0 cursor-pointer accent-[#d9eb83] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                  type="radio"
                  name="settings-family-listening-member"
                  defaultValue="alex"
                  id="settings-family-listening-alex"
                />
              </label>
            </div>
          </fieldset>
          <div className="rounded-[2rem] bg-[#f4f7db] p-6 text-[#173c32]">
            <fieldset>
              <legend className="text-lg font-semibold">Listening preferences</legend>
              <p className="mt-3 text-sm leading-6 text-[#526747]">These controls are saved for the selected profile.</p>
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#688673] pt-5">
                <div className="grid content-start gap-5">
                  <label
                    className="flex cursor-pointer items-start gap-3 text-sm leading-6"
                    htmlFor="settings-family-listening-explicit"
                  >
                    <input
                      className="mt-1 size-4 shrink-0 cursor-pointer accent-[#42602c] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                      id="settings-family-listening-explicit"
                      name="explicit"
                      type="checkbox"
                      aria-describedby="settings-family-listening-explicit-hint"
                      defaultChecked
                    />
                    <span><span>Filter explicit tracks</span><span className="block text-xs leading-5 text-[#526747]" id="settings-family-listening-explicit-hint">Skip songs marked with an explicit label.</span></span>
                  </label>
                  <label
                    className="flex cursor-pointer items-start gap-3 text-sm leading-6"
                    htmlFor="settings-family-listening-public"
                  >
                    <input
                      className="mt-1 size-4 shrink-0 cursor-pointer accent-[#42602c] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                      id="settings-family-listening-public"
                      name="public"
                      type="checkbox"
                      aria-describedby="settings-family-listening-public-hint"
                    />
                    <span><span>Make playlists public</span><span className="block text-xs leading-5 text-[#526747]" id="settings-family-listening-public-hint">Let other listeners find this profile’s playlists.</span></span>
                  </label>
                  <label
                    className="flex cursor-pointer items-start gap-3 text-sm leading-6"
                    htmlFor="settings-family-listening-autoplay"
                  >
                    <input
                      className="mt-1 size-4 shrink-0 cursor-pointer accent-[#42602c] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                      id="settings-family-listening-autoplay"
                      name="autoplay"
                      type="checkbox"
                      aria-describedby="settings-family-listening-autoplay-hint"
                      defaultChecked
                    />
                    <span><span>Keep similar music playing</span><span className="block text-xs leading-5 text-[#526747]" id="settings-family-listening-autoplay-hint">Continue after an album or playlist ends.</span></span>
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
        <footer className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#688673] pt-5">
          <p className="block text-xs leading-5 text-[#bed2b9]">Managed by Alex · family plan owner</p>
          <button
            className="inline-flex min-h-11 cursor-pointer items-center justify-center rounded-md bg-[#d9eb83] px-5 py-3 text-sm font-semibold text-[#173c32] hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d9eb83]"
            type="button"
          >
            Save listening controls
          </button>
        </footer>
      </form>
    </section>
  )
}
