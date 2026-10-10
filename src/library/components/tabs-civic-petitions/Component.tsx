// Fonts: Public Sans (https://fonts.google.com/specimen/Public+Sans)
export default function TabsCivicPetitions() {
  return (
    <section
      aria-label="Wardvoice civic petition status"
      className="group w-72 sm:w-[352px] font-['Public_Sans',ui-sans-serif,system-ui,sans-serif] rounded-lg border border-blue-200 bg-white p-4 text-slate-900"
    >
      <header className="flex items-baseline justify-between">
        <h2 className="text-lg font-bold">Wardvoice</h2>
        <span className="text-[10px] text-slate-600">NORTH WARD</span>
      </header>
      <fieldset className="mt-4 flex">
        <legend className="sr-only">Choose petition status</legend>
        <label
          id="tabs-civic-petitions-open-label"
          className="flex h-11 flex-1 cursor-pointer items-center justify-center gap-2 border-b-2 border-slate-500 text-xs font-semibold text-slate-600 hover:bg-blue-50 has-checked:border-blue-800 has-checked:text-blue-900 forced-colors:has-checked:underline has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-blue-900"
        >
          <input
            id="tabs-civic-petitions-open"
            type="radio"
            name="tabs-civic-petitions-view"
            value="open"
            defaultChecked
            aria-controls="tabs-civic-petitions-open-panel"
            className="sr-only focus-visible:outline-hidden"
          />
          <span>Open</span>
          <span className="rounded bg-blue-100 px-1.5 py-0.5 text-[10px] text-blue-900">2</span>
        </label>
        <label
          id="tabs-civic-petitions-adopted-label"
          className="flex h-11 flex-1 cursor-pointer items-center justify-center gap-2 border-b-2 border-slate-500 text-xs font-semibold text-slate-600 hover:bg-blue-50 has-checked:border-blue-800 has-checked:text-blue-900 forced-colors:has-checked:underline has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-blue-900"
        >
          <input
            id="tabs-civic-petitions-adopted"
            type="radio"
            name="tabs-civic-petitions-view"
            value="adopted"
            aria-controls="tabs-civic-petitions-adopted-panel"
            className="sr-only focus-visible:outline-hidden"
          />
          <span>Adopted</span>
          <span className="rounded bg-blue-100 px-1.5 py-0.5 text-[10px] text-blue-900">7</span>
        </label>
      </fieldset>
      <section
        id="tabs-civic-petitions-open-panel"
        aria-labelledby="tabs-civic-petitions-open-label"
        className="hidden group-has-[#tabs-civic-petitions-open:checked]:block pt-4"
      >
        <p className="text-[10px] font-medium tracking-wide text-blue-800">PETITION / 026</p>
        <h3 className="mt-2 text-base leading-6 font-semibold">Refill taps in Market Square</h3>
        <p className="mt-4 text-xs font-semibold">184 of 250 signatures</p>
        <div aria-hidden="true" className="mt-2 h-1.5 bg-blue-100">
          <span className="block h-full bg-blue-800 w-[73.6%]"></span>
        </div>
        <p className="mt-4 text-xs leading-5 text-slate-600">Open until 24 October. Submitted by the Market Residents Group.</p>
      </section>
      <section
        id="tabs-civic-petitions-adopted-panel"
        aria-labelledby="tabs-civic-petitions-adopted-label"
        className="hidden group-has-[#tabs-civic-petitions-adopted:checked]:block pt-4"
      >
        <p className="text-[10px] font-medium tracking-wide text-blue-800">PETITION / 019</p>
        <h3 className="mt-2 text-base leading-6 font-semibold">A protected Alder Road crossing</h3>
        <p className="mt-4 text-xs font-semibold">312 signatures · adopted</p>
        <div aria-hidden="true" className="mt-2 h-1.5 bg-blue-100">
          <span className="block h-full bg-blue-800 w-full"></span>
        </div>
        <p className="mt-4 text-xs leading-5 text-slate-600">Council response published 8 October. Site survey scheduled for November.</p>
      </section>
    </section>
  )
}
