// Fonts: Syne (https://fonts.google.com/specimen/Syne)
export default function TabsOrigamiFolds() {
  return (
    <section
      aria-label="Foldlet origami pocket instructions"
      className="group w-72 sm:w-[336px] font-['Syne',ui-sans-serif,system-ui,sans-serif] rounded-[20px] border-2 border-rose-900 bg-rose-50 p-5 text-rose-950"
    >
      <header className="flex items-baseline justify-between">
        <h2 className="text-xl font-extrabold">Foldlet</h2>
        <span className="text-[10px] font-semibold">PAPER STUDY 06</span>
      </header>
      <p className="mt-1 text-xs text-rose-900">A pocket for small treasures</p>
      <div className="mt-5 grid grid-cols-[44px_minmax(0,1fr)] gap-4">
        <fieldset className="grid content-start gap-2">
          <legend className="sr-only">Choose paper folding step</legend>
          <label
            id="tabs-origami-folds-square-label"
            className="flex h-11 cursor-pointer items-center justify-center rounded-lg border border-rose-800 text-sm font-bold hover:bg-rose-100 has-checked:bg-rose-900 has-checked:text-white forced-colors:has-checked:underline has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-rose-900"
          >
            <input
              id="tabs-origami-folds-square"
              aria-label="Step 1: Start square"
              type="radio"
              name="tabs-origami-folds-view"
              value="square"
              defaultChecked
              aria-controls="tabs-origami-folds-square-panel"
              className="sr-only focus-visible:outline-hidden"
            />
            01
          </label>
          <label
            id="tabs-origami-folds-diagonal-label"
            className="flex h-11 cursor-pointer items-center justify-center rounded-lg border border-rose-800 text-sm font-bold hover:bg-rose-100 has-checked:bg-rose-900 has-checked:text-white forced-colors:has-checked:underline has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-rose-900"
          >
            <input
              id="tabs-origami-folds-diagonal"
              aria-label="Step 2: Fold in half"
              type="radio"
              name="tabs-origami-folds-view"
              value="diagonal"
              aria-controls="tabs-origami-folds-diagonal-panel"
              className="sr-only focus-visible:outline-hidden"
            />
            02
          </label>
          <label
            id="tabs-origami-folds-pocket-label"
            className="flex h-11 cursor-pointer items-center justify-center rounded-lg border border-rose-800 text-sm font-bold hover:bg-rose-100 has-checked:bg-rose-900 has-checked:text-white forced-colors:has-checked:underline has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-rose-900"
          >
            <input
              id="tabs-origami-folds-pocket"
              aria-label="Step 3: Tuck the corners"
              type="radio"
              name="tabs-origami-folds-view"
              value="pocket"
              aria-controls="tabs-origami-folds-pocket-panel"
              className="sr-only focus-visible:outline-hidden"
            />
            03
          </label>
        </fieldset>
        <div>
          <section
            id="tabs-origami-folds-square-panel"
            aria-labelledby="tabs-origami-folds-square-label"
            className="hidden group-has-[#tabs-origami-folds-square:checked]:block"
          >
            <svg aria-hidden="true" viewBox="0 0 120 120" className="mx-auto size-28">
              <path d="M15 15H105V105H15Z" fill="#fecdd3" stroke="#881337" strokeWidth="2" strokeLinejoin="round"></path>
              <path d="M15 15 105 105M105 15 15 105" fill="none" stroke="#881337" strokeWidth="1.5" strokeDasharray="4 4"></path>
            </svg>
            <h3 className="mt-2 text-base font-bold">Start square</h3>
            <p className="mt-1 text-xs leading-5 text-rose-900">Colour side down. Mark both diagonals.</p>
          </section>
          <section
            id="tabs-origami-folds-diagonal-panel"
            aria-labelledby="tabs-origami-folds-diagonal-label"
            className="hidden group-has-[#tabs-origami-folds-diagonal:checked]:block"
          >
            <svg aria-hidden="true" viewBox="0 0 120 120" className="mx-auto size-28">
              <path d="M15 95 60 15 105 95Z" fill="#fecdd3" stroke="#881337" strokeWidth="2" strokeLinejoin="round"></path>
              <path d="M60 15V95" fill="none" stroke="#881337" strokeWidth="1.5" strokeDasharray="4 4"></path>
            </svg>
            <h3 className="mt-2 text-base font-bold">Fold in half</h3>
            <p className="mt-1 text-xs leading-5 text-rose-900">Bring opposite corners together; crease.</p>
          </section>
          <section
            id="tabs-origami-folds-pocket-panel"
            aria-labelledby="tabs-origami-folds-pocket-label"
            className="hidden group-has-[#tabs-origami-folds-pocket:checked]:block"
          >
            <svg aria-hidden="true" viewBox="0 0 120 120" className="mx-auto size-28">
              <path d="M15 45 60 15 105 45 85 100H35Z" fill="#fecdd3" stroke="#881337" strokeWidth="2" strokeLinejoin="round"></path>
              <path d="M15 45 85 100M105 45 35 100" fill="none" stroke="#881337" strokeWidth="1.5" strokeDasharray="4 4"></path>
            </svg>
            <h3 className="mt-2 text-base font-bold">Tuck the corners</h3>
            <p className="mt-1 text-xs leading-5 text-rose-900">Cross the tips, then open the top flap.</p>
          </section>
        </div>
      </div>
    </section>
  )
}
