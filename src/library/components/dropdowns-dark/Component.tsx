// Fonts: Geologica (https://fonts.google.com/specimen/Geologica)
export default function DropdownsDark() {
  return (
    <div className="grid w-72 gap-4 overflow-hidden rounded-2xl bg-neutral-950 p-5 font-['Geologica',ui-sans-serif,system-ui,sans-serif] text-neutral-100 antialiased scheme-dark sm:w-[36rem] sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] sm:items-start sm:gap-6 sm:p-6">
      {/* Closed */}
      <div className="flex gap-2">
        <button
          type="button"
          aria-expanded="false"
          className="group flex h-9 min-w-0 flex-1 cursor-pointer items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 pr-2.5 pl-3 text-sm transition-colors hover:border-neutral-700 hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-100 aria-expanded:border-neutral-500 aria-expanded:bg-neutral-800"
        >
          <span aria-hidden="true" className="size-3.5 shrink-0 rounded-full bg-linear-to-br from-amber-300 to-teal-700" />
          <span className="text-neutral-400">Look</span>
          <span className="truncate font-medium">Kodak 2383</span>
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-auto size-4 shrink-0 text-neutral-400 transition-transform group-aria-expanded:rotate-180"
          >
            <path d="m4 6 4 4 4-4" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Clip actions"
          aria-expanded="false"
          className="flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900 text-neutral-300 transition-colors hover:border-neutral-700 hover:bg-neutral-800 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-100 aria-expanded:border-neutral-500 aria-expanded:bg-neutral-800 aria-expanded:text-white"
        >
          <svg aria-hidden="true" viewBox="0 0 16 16" fill="currentColor" className="size-4">
            <circle cx="3.5" cy="8" r="1.25" />
            <circle cx="8" cy="8" r="1.25" />
            <circle cx="12.5" cy="8" r="1.25" />
          </svg>
        </button>
      </div>

      <div aria-hidden="true" className="hidden w-px self-stretch bg-neutral-800 sm:block" />

      {/* Open */}
      <div>
        <div className="flex gap-2">
          <button
            type="button"
            aria-expanded="true"
            aria-controls="dropdowns-dark-look-menu"
            className="group flex h-9 min-w-0 flex-1 cursor-pointer items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 pr-2.5 pl-3 text-sm transition-colors hover:border-neutral-700 hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-100 aria-expanded:border-neutral-500 aria-expanded:bg-neutral-800"
          >
            <span aria-hidden="true" className="size-3.5 shrink-0 rounded-full bg-linear-to-br from-amber-300 to-teal-700" />
            <span className="text-neutral-400">Look</span>
            <span className="truncate font-medium">Kodak 2383</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-auto size-4 shrink-0 text-neutral-400 transition-transform group-aria-expanded:rotate-180"
            >
              <path d="m4 6 4 4 4-4" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Clip actions"
            aria-expanded="false"
            className="flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900 text-neutral-300 transition-colors hover:border-neutral-700 hover:bg-neutral-800 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-100 aria-expanded:border-neutral-500 aria-expanded:bg-neutral-800 aria-expanded:text-white"
          >
            <svg aria-hidden="true" viewBox="0 0 16 16" fill="currentColor" className="size-4">
              <circle cx="3.5" cy="8" r="1.25" />
              <circle cx="8" cy="8" r="1.25" />
              <circle cx="12.5" cy="8" r="1.25" />
            </svg>
          </button>
        </div>

        <div
          id="dropdowns-dark-look-menu"
          className="mt-2 rounded-xl border border-neutral-800 bg-neutral-900 p-1 shadow-[0_16px_32px_-12px_rgb(0_0_0/0.8)]"
        >
          <fieldset>
            <legend className="px-2.5 pt-1.5 pb-1 text-xs font-medium text-neutral-400">Look</legend>
            <label className="flex h-8 cursor-pointer items-center gap-2.5 rounded-md px-2.5 text-sm text-neutral-300 transition-colors hover:bg-neutral-800 hover:text-white has-checked:text-white has-focus-visible:outline-2 has-focus-visible:-outline-offset-2 has-focus-visible:outline-neutral-100">
              <input type="radio" name="dropdowns-dark-look" value="none" className="peer sr-only" />
              <span aria-hidden="true" className="size-3.5 shrink-0 rounded-full bg-linear-to-br from-neutral-300 to-neutral-600" />
              None
              <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="ml-auto size-4 opacity-0 peer-checked:opacity-100">
                <path d="m3.5 8.5 3 3 6-7" />
              </svg>
            </label>
            <label className="flex h-8 cursor-pointer items-center gap-2.5 rounded-md px-2.5 text-sm text-neutral-300 transition-colors hover:bg-neutral-800 hover:text-white has-checked:text-white has-focus-visible:outline-2 has-focus-visible:-outline-offset-2 has-focus-visible:outline-neutral-100">
              <input type="radio" name="dropdowns-dark-look" value="rec-709" className="peer sr-only" />
              <span aria-hidden="true" className="size-3.5 shrink-0 rounded-full bg-linear-to-br from-sky-200 to-slate-600" />
              Rec. 709
              <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="ml-auto size-4 opacity-0 peer-checked:opacity-100">
                <path d="m3.5 8.5 3 3 6-7" />
              </svg>
            </label>
            <label className="flex h-8 cursor-pointer items-center gap-2.5 rounded-md px-2.5 text-sm text-neutral-300 transition-colors hover:bg-neutral-800 hover:text-white has-checked:text-white has-focus-visible:outline-2 has-focus-visible:-outline-offset-2 has-focus-visible:outline-neutral-100">
              <input type="radio" name="dropdowns-dark-look" value="kodak-2383" defaultChecked className="peer sr-only" />
              <span aria-hidden="true" className="size-3.5 shrink-0 rounded-full bg-linear-to-br from-amber-300 to-teal-700" />
              Kodak 2383
              <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="ml-auto size-4 opacity-0 peer-checked:opacity-100">
                <path d="m3.5 8.5 3 3 6-7" />
              </svg>
            </label>
            <label className="flex h-8 cursor-pointer items-center gap-2.5 rounded-md px-2.5 text-sm text-neutral-300 transition-colors hover:bg-neutral-800 hover:text-white has-checked:text-white has-focus-visible:outline-2 has-focus-visible:-outline-offset-2 has-focus-visible:outline-neutral-100">
              <input type="radio" name="dropdowns-dark-look" value="fuji-3513" className="peer sr-only" />
              <span aria-hidden="true" className="size-3.5 shrink-0 rounded-full bg-linear-to-br from-emerald-200 to-rose-800" />
              Fuji 3513
              <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="ml-auto size-4 opacity-0 peer-checked:opacity-100">
                <path d="m3.5 8.5 3 3 6-7" />
              </svg>
            </label>
          </fieldset>
          <div aria-hidden="true" className="mx-1 my-1 h-px bg-neutral-800" />
          <button
            type="button"
            className="flex h-8 w-full cursor-pointer items-center gap-2.5 rounded-md px-2.5 text-sm text-neutral-300 transition-colors hover:bg-neutral-800 hover:text-white focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-neutral-100"
          >
            <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-3.5 shrink-0">
              <path d="M8 2.5v8M4.5 6 8 2.5 11.5 6M2.5 10.5v2a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-2" />
            </svg>
            Import LUT…
          </button>
        </div>
      </div>
    </div>
  )
}
