// Fonts: Familjen Grotesk (https://fonts.google.com/specimen/Familjen+Grotesk)
export default function InputsGlass() {
  return (
    <div className="relative isolate grid w-72 gap-3 overflow-hidden rounded-3xl bg-stone-950 p-4 font-['Familjen_Grotesk',ui-sans-serif,system-ui,sans-serif] text-stone-100 antialiased caret-amber-300 scheme-dark selection:bg-amber-300/30 sm:w-[34rem] sm:grid-cols-2 sm:gap-x-5 sm:gap-y-4 sm:p-7">
      <div aria-hidden="true" className="absolute -top-24 -left-20 -z-10 size-64 rounded-full bg-red-600/20 blur-3xl" />
      <div
        aria-hidden="true"
        className="absolute -right-12 -bottom-20 -z-10 size-40 rounded-full bg-radial from-orange-200 via-orange-500 to-rose-600 sm:size-60"
      />

      <div className="sm:col-start-1">
        <label htmlFor="inputs-glass-name" className="block text-sm font-medium text-stone-300">
          Name
        </label>
        <input
          id="inputs-glass-name"
          type="text"
          name="name"
          autoComplete="name"
          defaultValue="Aino Virtanen"
          className="mt-1.5 block h-10 w-full rounded-xl border border-white/35 bg-stone-950/50 px-3.5 text-[0.9375rem] text-white backdrop-blur-xl transition-colors placeholder:text-stone-400 hover:border-white/55 focus-visible:border-amber-200 focus-visible:outline-3 focus-visible:outline-amber-200/40"
        />
      </div>

      <div className="sm:col-start-1">
        <label htmlFor="inputs-glass-email" className="block text-sm font-medium text-stone-300">
          Email
        </label>
        <input
          id="inputs-glass-email"
          type="email"
          name="email"
          autoComplete="email"
          defaultValue="aino.virtanen@"
          aria-invalid="true"
          aria-describedby="inputs-glass-email-error"
          className="mt-1.5 block h-10 w-full rounded-xl border border-white/35 bg-stone-950/50 px-3.5 text-[0.9375rem] text-white backdrop-blur-xl transition-colors placeholder:text-stone-400 hover:border-white/55 focus-visible:border-amber-200 focus-visible:outline-3 focus-visible:outline-amber-200/40 aria-invalid:border-rose-300 aria-invalid:outline-rose-300/40"
        />
        <p id="inputs-glass-email-error" className="mt-1.5 flex items-center gap-1.5 text-[0.8125rem] text-rose-200">
          <svg aria-hidden="true" viewBox="0 0 16 16" fill="currentColor" className="size-4 shrink-0">
            <path
              fillRule="evenodd"
              d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm0-10.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 4.5Zm0 7a.875.875 0 1 0 0-1.75.875.875 0 0 0 0 1.75Z"
              clipRule="evenodd"
            />
          </svg>
          Add the domain after the @.
        </p>
      </div>

      <div className="sm:col-start-1">
        <label htmlFor="inputs-glass-session" className="block text-sm font-medium text-stone-300">
          Session
        </label>
        <div className="relative mt-1.5">
          <select
            id="inputs-glass-session"
            name="session"
            defaultValue="evening"
            className="block h-10 w-full cursor-pointer appearance-none rounded-xl border border-white/35 bg-stone-950/50 pr-10 pl-3.5 text-[0.9375rem] text-white backdrop-blur-xl transition-colors hover:border-white/55 focus-visible:border-amber-200 focus-visible:outline-3 focus-visible:outline-amber-200/40 *:bg-stone-900"
          >
            <option value="morning">Morning · 07:00–08:30</option>
            <option value="evening">Evening · 19:00–21:00</option>
            <option value="late">Late · 21:30–23:00</option>
          </select>
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="pointer-events-none absolute top-3 right-3.5 size-4 text-stone-400"
          >
            <path d="m4 6 4 4 4-4" />
          </svg>
        </div>
      </div>

      <div className="sm:col-start-2 sm:row-span-3 sm:row-start-1 sm:flex sm:flex-col">
        <div className="flex items-baseline justify-between gap-3">
          <label htmlFor="inputs-glass-notes" className="text-sm font-medium text-stone-300">
            Notes for the host
          </label>
          <span id="inputs-glass-notes-hint" className="text-xs text-stone-400">
            Optional
          </span>
        </div>
        <textarea
          id="inputs-glass-notes"
          name="notes"
          defaultValue="First visit, could we borrow towels?"
          placeholder="Towel hire, first visit…"
          aria-describedby="inputs-glass-notes-hint"
          className="mt-1.5 block h-16 w-full resize-none rounded-xl border border-white/35 bg-stone-950/50 px-3.5 py-2 text-[0.9375rem] text-white backdrop-blur-xl transition-colors placeholder:text-stone-400 hover:border-white/55 focus-visible:border-amber-200 focus-visible:outline-3 focus-visible:outline-amber-200/40 sm:h-auto sm:flex-1"
        />
      </div>
    </div>
  )
}
