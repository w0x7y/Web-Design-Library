// Fonts: Barlow (https://fonts.google.com/specimen/Barlow)
export default function SettingsCrewRest() {
  return (
    <section
      className="bg-[#0e223a] px-5 py-12 text-[#f0f6ff] font-['Barlow',ui-sans-serif,system-ui,sans-serif] sm:px-8"
    >
      <form className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#b4c6dc]">Aerlane / crew preferences</p>
        <h2 className="mt-3 text-[2.25rem] leading-[1.1] tracking-[-0.035em] sm:text-[3rem]">Keep your off-duty time clear.</h2>
        <p className="mt-3 max-w-lg text-sm leading-6 text-[#b4c6dc]">Choose how your crew app handles the hours between duties.</p>
        <div className="mt-8 overflow-hidden rounded-xl border border-[#51647c]">
          <header className="flex flex-wrap items-center justify-between gap-4 bg-[#1c3654] px-6 py-4 text-sm">
            <span>CREW PROFILE · MARA EVANS</span>
            <span>Cabin crew / Manchester base</span>
          </header>
          <div className="grid lg:grid-cols-[18rem_minmax(0,1fr)]">
            <aside className="border-b border-dashed border-[#51647c] p-6 lg:border-r lg:border-b-0" aria-label="Next rostered duty">
              <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#b4c6dc]">Next duty / 14 October</p>
              <p className="my-6 text-4xl font-semibold tracking-wide">MAN → LIS</p>
              <p className="block text-xs leading-5 text-[#b4c6dc]">Report 06:10 local<br />Flight AL 204 · Terminal 2</p>
              <p className="mt-3 max-w-lg text-sm leading-6 text-[#b4c6dc]">Your rest preferences follow you across time zones.</p>
            </aside>
            <div className="grid gap-6 p-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid min-w-0 gap-2 text-sm font-medium" htmlFor="settings-crew-rest-clock">
                  Display times in
                  <select
                    className="min-w-0 w-full rounded-md border border-[#b4c6dc] bg-transparent px-3 py-3 text-base font-normal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                    id="settings-crew-rest-clock"
                    name="clock"
                  >
                    <option value="base">Home-base time</option>
                    <option value="local">Current local time</option>
                    <option value="utc">UTC</option>
                  </select>
                </label>
                <label className="grid min-w-0 gap-2 text-sm font-medium" htmlFor="settings-crew-rest-quiet">
                  Quiet hours begin
                  <select
                    className="min-w-0 w-full rounded-md border border-[#b4c6dc] bg-transparent px-3 py-3 text-base font-normal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                    id="settings-crew-rest-quiet"
                    name="quiet"
                  >
                    <option value="2100">21:00</option>
                    <option value="2200">22:00</option>
                    <option value="2300">23:00</option>
                  </select>
                </label>
              </div>
              <label
                className="flex cursor-pointer items-start gap-3 text-sm leading-6"
                htmlFor="settings-crew-rest-mute"
              >
                <input
                  className="mt-1 size-4 shrink-0 cursor-pointer accent-[#c3e4ef] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                  id="settings-crew-rest-mute"
                  name="mute"
                  type="checkbox"
                  aria-describedby="settings-crew-rest-mute-hint"
                  defaultChecked
                />
                <span>
                  <span>Silence routine roster updates</span>
                  <span className="block text-xs leading-5 text-[#b4c6dc]" id="settings-crew-rest-mute-hint">Show changes when quiet hours end.</span>
                </span>
              </label>
              <label
                className="flex cursor-pointer items-start gap-3 text-sm leading-6"
                htmlFor="settings-crew-rest-urgent"
              >
                <input
                  className="mt-1 size-4 shrink-0 cursor-pointer accent-[#c3e4ef] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                  id="settings-crew-rest-urgent"
                  name="urgent"
                  type="checkbox"
                  aria-describedby="settings-crew-rest-urgent-hint"
                  defaultChecked
                />
                <span>
                  <span>Allow urgent crew-desk calls</span>
                  <span className="block text-xs leading-5 text-[#b4c6dc]" id="settings-crew-rest-urgent-hint">Operational calls can still reach you.</span>
                </span>
              </label>
              <details>
                <summary className="cursor-pointer text-sm underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Which alerts remain available?</summary>
                <p className="mt-3 max-w-lg text-sm leading-6 text-[#b4c6dc]">Duty cancellations and direct calls from the crew desk remain visible. Rest preferences do not change your roster or reporting time.</p>
              </details>
            </div>
          </div>
        </div>
        <footer className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#51647c] pt-5">
          <p className="block text-xs leading-5 text-[#b4c6dc]">Personal app preferences. Roster rules are managed by your airline.</p>
          <button
            className="inline-flex min-h-11 cursor-pointer items-center justify-center rounded-md bg-[#c3e4ef] px-5 py-3 text-sm font-semibold text-[#0e223a] hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c3e4ef]"
            type="button"
          >
            Save rest preferences
          </button>
        </footer>
      </form>
    </section>
  )
}
