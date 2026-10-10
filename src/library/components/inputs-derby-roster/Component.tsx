// Fonts: Syne (https://fonts.google.com/specimen/Syne)
export default function InputsDerbyRoster() {
  return (
    <section
      className="w-72 rounded-3xl bg-fuchsia-950 p-5 font-['Syne',ui-sans-serif,system-ui,sans-serif] text-pink-100 scheme-dark sm:w-[22rem]"
      aria-label="Jamjar roller derby roster"
    >
      <header className="flex items-center justify-between gap-4">
        <div>
          <p className="text-[10px] tracking-widest uppercase">Jamjar / Roller derby</p>
          <h2 className="text-2xl font-bold">Roster ready.</h2>
        </div>
        <span
          className="flex size-12 shrink-0 rotate-6 items-center justify-center rounded-lg bg-pink-200 text-xl font-bold text-fuchsia-950"
          aria-hidden="true"
        >08</span>
      </header>
      <label className="mt-4 block text-xs font-semibold" htmlFor="inputs-derby-roster-alias">Skate alias</label>
      <input
        className="mt-2 block h-11 w-full rounded-xl border border-pink-300 bg-white px-3 text-base leading-[normal] font-semibold text-fuchsia-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
        id="inputs-derby-roster-alias"
        name="alias"
        type="text"
        maxLength={24}
        defaultValue="Crash Cassidy"
      />
      <div className="grid grid-cols-[5rem_1fr] gap-3">
        <div>
          <label className="mt-4 block text-xs font-semibold" htmlFor="inputs-derby-roster-number">Jersey no.</label>
          <input
            className="mt-2 block h-11 w-full min-w-0 rounded-lg border border-pink-300 px-2 text-sm leading-[normal] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
            id="inputs-derby-roster-number"
            name="jersey"
            type="text"
            inputMode="numeric"
            pattern="[0-9]{1,4}"
            maxLength={4}
            defaultValue="08"
          />
        </div>
        <div>
          <label className="mt-4 block text-xs font-semibold" htmlFor="inputs-derby-roster-position">Position</label>
          <select
            className="mt-2 block h-11 w-full min-w-0 rounded-lg border border-pink-300 px-2 text-sm leading-[normal] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
            id="inputs-derby-roster-position"
            name="position"
          >
            <option className="bg-fuchsia-950" value="jammer">Jammer</option>
            <option className="bg-fuchsia-950" value="blocker">Blocker</option>
            <option className="bg-fuchsia-950" value="pivot">Pivot</option>
          </select>
        </div>
      </div>
    </section>
  )
}
