// Fonts: Manrope (https://fonts.google.com/specimen/Manrope)
export default function SettingsRotaHandover() {
  return (
    <section
      className="bg-[#f0f7f6] px-5 py-12 text-[#123b39] font-['Manrope',ui-sans-serif,system-ui,sans-serif] sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <header>
          <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#4a6664]">Wardline / rota configuration</p>
          <h2 className="mt-3 text-[2.25rem] leading-[1.1] tracking-[-0.035em] sm:text-[3rem]">A smoother shift change.</h2>
          <p className="mt-3 max-w-lg text-sm leading-6 text-[#4a6664]">Handover defaults for the Cedar Hospital acute medical unit.</p>
        </header>
        <div className="mt-8 grid gap-8 lg:grid-cols-[20rem_minmax(0,1fr)]">
          <aside className="rounded-xl bg-[#123b39] p-6 text-[#f0f7f6]" aria-label="Current rota coverage">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#c6dad7]">Acute medicine · Ward 4</p>
            <p className="mt-6 text-5xl font-semibold">24 / 24</p>
            <p className="mt-4 text-sm leading-6 text-[#c6dad7]">Shifts covered this week</p>
            <p className="mt-4 text-sm leading-6 text-[#c6dad7]">Next handover<br />Monday, 07:00 · Team B</p>
          </aside>
          <form className="rounded-xl border border-[#c6dad7] bg-white p-5 sm:p-8">
            <h3 className="text-lg font-semibold">Handover window</h3>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <label className="grid min-w-0 gap-2 text-sm font-medium" htmlFor="settings-rota-handover-overlap">
                Shift overlap
                <select
                  className="min-w-0 w-full rounded-md border border-[#4a6664] bg-transparent px-3 py-3 text-base font-normal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                  id="settings-rota-handover-overlap"
                  name="overlap"
                >
                  <option value="30">30 minutes</option>
                  <option value="45">45 minutes</option>
                  <option value="60">60 minutes</option>
                </select>
              </label>
              <label className="grid min-w-0 gap-2 text-sm font-medium" htmlFor="settings-rota-handover-release">
                Publish rota ahead
                <select
                  className="min-w-0 w-full rounded-md border border-[#4a6664] bg-transparent px-3 py-3 text-base font-normal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                  id="settings-rota-handover-release"
                  name="release"
                >
                  <option value="14">14 days</option>
                  <option value="21">21 days</option>
                  <option value="28">28 days</option>
                </select>
              </label>
            </div>
            <div className="mt-6 grid gap-5 border-t border-[#c6dad7] pt-6">
              <label
                className="flex cursor-pointer items-start gap-3 text-sm leading-6"
                htmlFor="settings-rota-handover-cover"
              >
                <input
                  className="mt-1 size-4 shrink-0 cursor-pointer accent-[#0c6960] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                  id="settings-rota-handover-cover"
                  name="cover"
                  type="checkbox"
                  aria-describedby="settings-rota-handover-cover-hint"
                  defaultChecked
                />
                <span>
                  <span>Check cover before a swap</span>
                  <span className="block text-xs leading-5 text-[#4a6664]" id="settings-rota-handover-cover-hint">A swap needs the same clinical role.</span>
                </span>
              </label>
              <label
                className="flex cursor-pointer items-start gap-3 text-sm leading-6"
                htmlFor="settings-rota-handover-notes"
              >
                <input
                  className="mt-1 size-4 shrink-0 cursor-pointer accent-[#0c6960] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                  id="settings-rota-handover-notes"
                  name="notes"
                  type="checkbox"
                  aria-describedby="settings-rota-handover-notes-hint"
                  defaultChecked
                />
                <span>
                  <span>Include handover checklist</span>
                  <span className="block text-xs leading-5 text-[#4a6664]" id="settings-rota-handover-notes-hint">Show the checklist at the start of a shift.</span>
                </span>
              </label>
            </div>
            <footer className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#c6dad7] pt-5">
              <p className="block text-xs leading-5 text-[#4a6664]">For this unit only.</p>
              <button
                className="inline-flex min-h-11 cursor-pointer items-center justify-center rounded-md bg-[#0c6960] px-5 py-3 text-sm font-semibold text-[#ffffff] hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0c6960]"
                type="button"
              >
                Save handover rules
              </button>
            </footer>
          </form>
        </div>
      </div>
    </section>
  )
}
