// Fonts: Bricolage Grotesque (https://fonts.google.com/specimen/Bricolage+Grotesque)
export default function SettingsSchoolWeek() {
  return (
    <section
      className="bg-[#fff8d9] px-5 py-12 text-[#3b2430] font-['Bricolage_Grotesque',ui-sans-serif,system-ui,sans-serif] sm:px-8"
    >
      <form className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#745563]">Bellpatch / Oakmere Primary</p>
        <h2 className="mt-3 text-[2.25rem] leading-[1.1] tracking-[-0.035em] sm:text-[3rem]">Give the week its rhythm.</h2>
        <p className="mt-3 max-w-lg text-sm leading-6 text-[#745563]">Set teaching days and lesson defaults for the autumn timetable.</p>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
          <fieldset>
            <legend className="text-lg font-semibold">Our teaching week</legend>
            <p className="mt-3 max-w-lg text-sm leading-6 text-[#745563]">Select the days that belong in every new timetable.</p>
            <div className="mt-6 grid grid-cols-5 gap-2">
              <label
                className="grid cursor-pointer justify-items-center gap-4 rounded-t-[2rem] rounded-b-lg border-2 border-[#3b2430] bg-[#fffdf4] px-1 py-5 text-xs font-semibold has-[:checked]:bg-[#f4b9c6]"
                htmlFor="settings-school-week-mon"
              >
                Mon
                <input
                  className="mt-1 size-4 shrink-0 cursor-pointer accent-[#b5354a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                  type="checkbox"
                  id="settings-school-week-mon"
                  name="teaching-days"
                  defaultValue="mon"
                  defaultChecked
                />
                <span>1</span>
              </label>
              <label
                className="grid cursor-pointer justify-items-center gap-4 rounded-t-[2rem] rounded-b-lg border-2 border-[#3b2430] bg-[#fffdf4] px-1 py-5 text-xs font-semibold has-[:checked]:bg-[#f4b9c6]"
                htmlFor="settings-school-week-tue"
              >
                Tue
                <input
                  className="mt-1 size-4 shrink-0 cursor-pointer accent-[#b5354a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                  type="checkbox"
                  id="settings-school-week-tue"
                  name="teaching-days"
                  defaultValue="tue"
                  defaultChecked
                />
                <span>2</span>
              </label>
              <label
                className="grid cursor-pointer justify-items-center gap-4 rounded-t-[2rem] rounded-b-lg border-2 border-[#3b2430] bg-[#fffdf4] px-1 py-5 text-xs font-semibold has-[:checked]:bg-[#f4b9c6]"
                htmlFor="settings-school-week-wed"
              >
                Wed
                <input
                  className="mt-1 size-4 shrink-0 cursor-pointer accent-[#b5354a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                  type="checkbox"
                  id="settings-school-week-wed"
                  name="teaching-days"
                  defaultValue="wed"
                  defaultChecked
                />
                <span>3</span>
              </label>
              <label
                className="grid cursor-pointer justify-items-center gap-4 rounded-t-[2rem] rounded-b-lg border-2 border-[#3b2430] bg-[#fffdf4] px-1 py-5 text-xs font-semibold has-[:checked]:bg-[#f4b9c6]"
                htmlFor="settings-school-week-thu"
              >
                Thu
                <input
                  className="mt-1 size-4 shrink-0 cursor-pointer accent-[#b5354a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                  type="checkbox"
                  id="settings-school-week-thu"
                  name="teaching-days"
                  defaultValue="thu"
                  defaultChecked
                />
                <span>4</span>
              </label>
              <label
                className="grid cursor-pointer justify-items-center gap-4 rounded-t-[2rem] rounded-b-lg border-2 border-[#3b2430] bg-[#fffdf4] px-1 py-5 text-xs font-semibold has-[:checked]:bg-[#f4b9c6]"
                htmlFor="settings-school-week-fri"
              >
                Fri
                <input
                  className="mt-1 size-4 shrink-0 cursor-pointer accent-[#b5354a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                  type="checkbox"
                  id="settings-school-week-fri"
                  name="teaching-days"
                  defaultValue="fri"
                  defaultChecked
                />
                <span>5</span>
              </label>
            </div>
            <p className="mt-6 rounded-xl bg-[#f4b9c6] p-5 text-sm leading-6">Wednesday finishes at 14:30. Clubs keep their own timetable.</p>
          </fieldset>
          <div className="grid gap-5 rounded-2xl border-2 border-[#3b2430] bg-[#fffdf4] p-5 shadow-[5px_5px_0_#3b2430]">
            <h3 className="text-lg font-semibold">A little room between lessons</h3>
            <label className="grid min-w-0 gap-2 text-sm font-medium" htmlFor="settings-school-week-period">
              Standard lesson
              <select
                className="min-w-0 w-full rounded-md border border-[#745563] bg-transparent px-3 py-3 text-base font-normal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                id="settings-school-week-period"
                name="period"
              >
                <option value="45">45 minutes</option>
                <option value="40">40 minutes</option>
                <option value="50">50 minutes</option>
              </select>
            </label>
            <label className="grid min-w-0 gap-2 text-sm font-medium" htmlFor="settings-school-week-passing">
              Passing time
              <select
                className="min-w-0 w-full rounded-md border border-[#745563] bg-transparent px-3 py-3 text-base font-normal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                id="settings-school-week-passing"
                name="passing"
              >
                <option value="5">5 minutes</option>
                <option value="10">10 minutes</option>
                <option value="0">No gap</option>
              </select>
            </label>
            <label
              className="flex cursor-pointer items-start gap-3 text-sm leading-6"
              htmlFor="settings-school-week-break"
            >
              <input
                className="mt-1 size-4 shrink-0 cursor-pointer accent-[#b5354a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                id="settings-school-week-break"
                name="break"
                type="checkbox"
                aria-describedby="settings-school-week-break-hint"
                defaultChecked
              />
              <span>
                <span>Keep lunch time clear</span>
                <span className="block text-xs leading-5 text-[#745563]" id="settings-school-week-break-hint">Protect 12:00–13:00 in new timetables.</span>
              </span>
            </label>
          </div>
        </div>
        <footer className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#d9b7be] pt-5">
          <p className="block text-xs leading-5 text-[#745563]">New timetables only. Existing lessons stay as planned.</p>
          <button
            className="inline-flex min-h-11 cursor-pointer items-center justify-center rounded-md bg-[#b5354a] px-5 py-3 text-sm font-semibold text-[#fff8d9] hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b5354a]"
            type="button"
          >
            Save school week
          </button>
        </footer>
      </form>
    </section>
  )
}
