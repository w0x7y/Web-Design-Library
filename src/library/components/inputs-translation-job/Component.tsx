// Fonts: IBM Plex Sans (https://fonts.google.com/specimen/IBM+Plex+Sans)
export default function InputsTranslationJob() {
  return (
    <section
      className="w-72 rounded-xl border-t-4 border-teal-800 bg-slate-50 p-5 font-['IBM_Plex_Sans',ui-sans-serif,system-ui,sans-serif] text-slate-950 sm:w-[22rem]"
      aria-label="Lexbridge translation estimate"
    >
      <p className="text-[10px] font-semibold tracking-widest text-teal-800 uppercase">Lexbridge / Document translation</p>
      <h2 className="mt-1 text-xl font-semibold">Set the language pair</h2>
      <div className="mt-4 grid grid-cols-[1fr_1rem_1fr] items-end gap-2">
        <div>
          <label className="block text-xs font-medium" htmlFor="inputs-translation-job-source">From</label>
          <select
            className="mt-2 block h-10 w-full min-w-0 rounded-md border border-slate-500 bg-white px-2 text-sm leading-[normal] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
            id="inputs-translation-job-source"
            name="source"
          >
            <option value="de">German</option>
            <option value="en">English</option>
            <option value="fr">French</option>
          </select>
        </div>
        <span className="flex h-10 items-center text-base text-teal-800" aria-hidden="true">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4">
            <path d="M2 8h12m-4-4 4 4-4 4" />
          </svg>
        </span>
        <div>
          <label className="block text-xs font-medium" htmlFor="inputs-translation-job-target">To</label>
          <select
            className="mt-2 block h-10 w-full min-w-0 rounded-md border border-slate-500 bg-white px-2 text-sm leading-[normal] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
            id="inputs-translation-job-target"
            name="target"
          >
            <option value="en">English</option>
            <option value="de">German</option>
            <option value="fr">French</option>
          </select>
        </div>
      </div>
      <div className="mt-4">
        <label className="block text-xs font-medium" htmlFor="inputs-translation-job-count">Document word count</label>
        <input
          className="mt-2 block h-10 w-full min-w-0 rounded-md border border-slate-500 bg-white px-2 text-sm leading-[normal] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
          id="inputs-translation-job-count"
          name="words"
          type="number"
          min={1}
          step={1}
          defaultValue="2400"
          aria-describedby="inputs-translation-job-hint"
        />
        <p
          className="mt-2 text-[11px] leading-4 text-slate-600"
          id="inputs-translation-job-hint"
        >An estimate is fine. We confirm after review.</p>
      </div>
    </section>
  )
}
