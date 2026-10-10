// Fonts: Manrope (https://fonts.google.com/specimen/Manrope)
export default function ButtonsFencingStrip() {
  return (
    <section
      aria-label="Piste Nine fencing actions"
      className="border-t-4 border-red-900 bg-white p-5 text-stone-800 w-72 sm:w-[25rem] font-['Manrope',ui-sans-serif,system-ui,sans-serif]"
    >
      <p className="text-xs font-semibold tracking-widest uppercase">Piste Nine / fencing</p>
      <h2 className="mt-5 text-2xl font-medium tracking-tight">Your next bout starts here.</h2>
      <p className="mt-1 text-xs text-stone-600">Open piste · Tuesday evenings</p>
      <div className="mt-6 flex items-stretch">
        <button
          type="button"
          className="flex h-12 flex-1 items-center justify-center bg-red-900 px-3 text-sm font-semibold text-white hover:bg-red-800 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-900"
        >Reserve a piste</button>
        <button
          type="button"
          aria-label="View Piste Nine timetable"
          className="flex size-12 items-center justify-center border border-red-900 text-red-900 hover:bg-red-50 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-900"
        >
          <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5">
            <rect x="3" y="4" width="14" height="13" rx="1" />
            <path d="M6 2v4m8-4v4M3 9h14" />
          </svg>
        </button>
      </div>
      <div className="mt-3 flex justify-end">
        <button
          type="button"
          className="py-2 text-xs text-stone-700 underline decoration-stone-400 underline-offset-4 hover:text-red-900 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-900"
        >Bring a guest →</button>
      </div>
    </section>
  )
}
