// Fonts: Literata (https://fonts.google.com/specimen/Literata)
export default function SettingsReaderComfort() {
  return (
    <section
      className="bg-[#ffffff] px-5 py-12 text-[#302537] font-['Literata',ui-sans-serif,system-ui,sans-serif] sm:px-8"
    >
      <form className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#6e6476]">Folio Pocket / reading comfort</p>
        <h2 className="mt-3 text-[2.25rem] leading-[1.1] tracking-[-0.035em] sm:text-[3rem]">Settle into the page.</h2>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
          <article className="border-y border-[#d7cddc] py-8" aria-labelledby="settings-reader-comfort-sample-title">
            <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#6e6476]">Reading specimen · 18px</p>
            <h3 className="mt-8 text-2xl italic" id="settings-reader-comfort-sample-title">The windows across the courtyard</h3>
            <p className="mt-5 max-w-xl text-lg leading-9">At first light, the windows across the courtyard began to open. A cup settled on a sill. Someone shook a tablecloth into the cool air. For a moment, every small sound seemed to belong to the same room.</p>
            <p className="mt-8 text-center text-xs text-[#6e6476]">42</p>
          </article>
          <section className="border-l-2 border-[#634176] pl-5" aria-labelledby="settings-reader-comfort-defaults">
            <h3 className="text-lg font-semibold" id="settings-reader-comfort-defaults">Your reading defaults</h3>
            <div className="mt-6 grid gap-6">
              <label className="grid min-w-0 gap-2 text-sm font-medium" htmlFor="settings-reader-comfort-size">
                Text size
                <select
                  className="min-w-0 w-full rounded-md border border-[#6e6476] bg-transparent px-3 py-3 text-base font-normal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                  id="settings-reader-comfort-size"
                  name="size"
                >
                  <option value="18">18 pixels</option>
                  <option value="20">20 pixels</option>
                  <option value="22">22 pixels</option>
                </select>
              </label>
              <label className="grid min-w-0 gap-2 text-sm font-medium" htmlFor="settings-reader-comfort-alignment">
                Paragraph alignment
                <select
                  className="min-w-0 w-full rounded-md border border-[#6e6476] bg-transparent px-3 py-3 text-base font-normal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                  id="settings-reader-comfort-alignment"
                  name="alignment"
                >
                  <option value="left">Left aligned</option>
                  <option value="justified">Justified</option>
                </select>
              </label>
              <label
                className="flex cursor-pointer items-start gap-3 text-sm leading-6"
                htmlFor="settings-reader-comfort-pages"
              >
                <input
                  className="mt-1 size-4 shrink-0 cursor-pointer accent-[#634176] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                  id="settings-reader-comfort-pages"
                  name="pages"
                  type="checkbox"
                  aria-describedby="settings-reader-comfort-pages-hint"
                  defaultChecked
                />
                <span>
                  <span>Show page numbers</span>
                  <span className="block text-xs leading-5 text-[#6e6476]" id="settings-reader-comfort-pages-hint">Keep your place visible below the text.</span>
                </span>
              </label>
              <details>
                <summary className="cursor-pointer text-sm underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Where do these settings apply?</summary>
                <p className="mt-3 max-w-lg text-sm leading-6 text-[#6e6476]">Newly opened books use these defaults. Books with fixed page layouts keep their publisher’s typography.</p>
              </details>
            </div>
          </section>
        </div>
        <footer className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#d7cddc] pt-5">
          <p className="block text-xs leading-5 text-[#6e6476]">Synced to your Folio Pocket devices.</p>
          <button
            className="inline-flex min-h-11 cursor-pointer items-center justify-center rounded-md bg-[#634176] px-5 py-3 text-sm font-semibold text-[#ffffff] hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#634176]"
            type="button"
          >
            Save reading defaults
          </button>
        </footer>
      </form>
    </section>
  )
}
