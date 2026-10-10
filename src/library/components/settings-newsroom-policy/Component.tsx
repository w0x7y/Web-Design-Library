// Fonts: Newsreader (https://fonts.google.com/specimen/Newsreader)
export default function SettingsNewsroomPolicy() {
  return (
    <section
      className="bg-[#fffdf7] px-5 py-12 text-[#25231e] font-['Newsreader',ui-sans-serif,system-ui,sans-serif] sm:px-8"
    >
      <form className="mx-auto max-w-7xl">
        <header className="flex flex-wrap items-end justify-between gap-4 border-b-2 border-[#25231e] pb-6">
          <p className="text-2xl font-semibold">Edition Desk<span aria-hidden="true">.</span></p>
          <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#655c54]">Publishing / house rules</p>
        </header>
        <div className="py-8">
          <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#655c54]">The Borough Record</p>
          <h2 className="mt-3 text-[2.25rem] leading-[1.1] tracking-[-0.035em] sm:text-[3rem]">Before a story goes live.</h2>
          <p className="mt-3 max-w-lg text-sm leading-6 text-[#655c54]">Set the checks your newsroom follows, from the first draft to a published correction.</p>
        </div>
        <div className="grid gap-5 border-t border-[#d9d1c4] py-6 md:grid-cols-[4rem_1fr_1fr] md:gap-8">
          <span className="text-3xl text-[#a23124]" aria-hidden="true">01</span>
          <div>
            <h3 className="text-lg font-semibold">A second pair of eyes</h3>
            <p className="mt-3 max-w-lg text-sm leading-6 text-[#655c54]">Keep the publishing decision with the desk.</p>
          </div>
          <label className="grid min-w-0 gap-2 text-sm font-medium" htmlFor="settings-newsroom-policy-approval">
            Required approval
            <select
              className="min-w-0 w-full rounded-md border border-[#655c54] bg-transparent px-3 py-3 text-base font-normal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
              id="settings-newsroom-policy-approval"
              name="approval"
            >
              <option value="desk">Section editor</option>
              <option value="chief">Editor in chief</option>
            </select>
          </label>
        </div>
        <div className="grid gap-5 border-t border-[#d9d1c4] py-6 md:grid-cols-[4rem_1fr_1fr] md:gap-8">
          <span className="text-3xl text-[#a23124]" aria-hidden="true">02</span>
          <div>
            <h3 className="text-lg font-semibold">Make the record clear</h3>
            <p className="mt-3 max-w-lg text-sm leading-6 text-[#655c54]">Readers should know when a story changes.</p>
          </div>
          <div className="grid content-start gap-5">
            <label
              className="flex cursor-pointer items-start gap-3 text-sm leading-6"
              htmlFor="settings-newsroom-policy-corrections"
            >
              <input
                className="mt-1 size-4 shrink-0 cursor-pointer accent-[#a23124] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                id="settings-newsroom-policy-corrections"
                name="corrections"
                type="checkbox"
                aria-describedby="settings-newsroom-policy-corrections-hint"
                defaultChecked
              />
              <span>
                <span>Show correction notes</span>
                <span className="block text-xs leading-5 text-[#655c54]" id="settings-newsroom-policy-corrections-hint">Attach the note to the article footer.</span>
              </span>
            </label>
            <label
              className="flex cursor-pointer items-start gap-3 text-sm leading-6"
              htmlFor="settings-newsroom-policy-byline"
            >
              <input
                className="mt-1 size-4 shrink-0 cursor-pointer accent-[#a23124] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                id="settings-newsroom-policy-byline"
                name="byline"
                type="checkbox"
                aria-describedby="settings-newsroom-policy-byline-hint"
                defaultChecked
              />
              <span>
                <span>Require an author byline</span>
                <span className="block text-xs leading-5 text-[#655c54]" id="settings-newsroom-policy-byline-hint">A named author is required to publish.</span>
              </span>
            </label>
          </div>
        </div>
        <footer className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#d9d1c4] pt-5">
          <p className="border-l-2 border-[#a23124] pl-4 text-sm leading-6">Applies to web stories. Print deadlines stay with the desk.</p>
          <button
            className="inline-flex min-h-11 cursor-pointer items-center justify-center rounded-md bg-[#a23124] px-5 py-3 text-sm font-semibold text-[#ffffff] hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a23124]"
            type="button"
          >
            Save publishing policy
          </button>
        </footer>
      </form>
    </section>
  )
}
