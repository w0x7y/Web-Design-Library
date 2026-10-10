// Fonts: Bricolage Grotesque (https://fonts.google.com/specimen/Bricolage+Grotesque)
export default function ButtonsKiteWorkshop() {
  return (
    <section
      aria-label="Updraft Works kite-making actions"
      className="rounded-[2rem_2rem_.5rem_2rem] bg-sky-100 p-5 text-rose-900 w-72 sm:w-[22rem] font-['Bricolage_Grotesque',ui-sans-serif,system-ui,sans-serif]"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold">Updraft Works</p>
          <h2 className="mt-2 text-3xl font-bold leading-none tracking-tight">Make it fly.</h2>
        </div>
        <svg
          aria-hidden="true"
          viewBox="0 0 48 80"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
          className="h-20 w-12 shrink-0 text-rose-900"
        >
          <path d="M24 3 43 25 24 49 5 25Z" fill="currentColor" fillOpacity=".12" />
          <path d="M24 3v46M5 25h38M24 49c-13 9 14 13 0 26M15 59l8 3-4 6" />
        </svg>
      </div>
      <button
        type="button"
        className="mt-5 flex h-14 w-full items-center justify-between rounded-[2rem_.5rem_2rem_.5rem] border-2 border-rose-900 bg-yellow-200 px-4 text-base font-bold hover:bg-yellow-100 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-900"
      >
        <span>Build a diamond kite</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-5"
        >
          <path d="M3 8h10M9 4l4 4-4 4" />
        </svg>
      </button>
      <div className="mt-3 flex items-start gap-2">
        <button
          type="button"
          className="h-10 rounded-full bg-white px-3 text-xs font-semibold hover:bg-sky-50 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-900"
        >Cutting template ↓</button>
        <button
          type="button"
          className="mt-2 h-10 rounded-full border-2 border-rose-900 px-3 text-xs font-semibold hover:bg-white cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-900"
        >Pick colours</button>
      </div>
      <p className="mt-4 text-xs">One sheet. Two spars. A windy afternoon.</p>
    </section>
  )
}
