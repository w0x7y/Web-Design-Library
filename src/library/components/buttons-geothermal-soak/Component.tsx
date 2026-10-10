// Fonts: Familjen Grotesk (https://fonts.google.com/specimen/Familjen+Grotesk)
export default function ButtonsGeothermalSoak() {
  return (
    <section
      aria-label="Fumarole geothermal spa booking actions"
      className="rounded-2xl bg-emerald-950 p-5 text-amber-100 w-72 sm:w-[23rem] font-['Familjen_Grotesk',ui-sans-serif,system-ui,sans-serif]"
    >
      <p className="text-xs font-semibold tracking-wider uppercase">Fumarole / geothermal spa</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight">Evening springs</h2>
      <p className="mt-1 text-xs text-emerald-200">Mineral pools · Thursday, 15 October</p>
      <div className="mt-5 flex items-start">
        <button
          type="button"
          className="flex h-20 flex-[3] flex-col items-start justify-center gap-1 rounded-[1.5rem_0_1.5rem_1.5rem] bg-amber-200 px-4 text-left text-emerald-950 hover:bg-amber-100 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
        >
          <span className="text-lg font-semibold">Book soak</span>
          <span className="text-xs">18:30 · 60 min</span>
        </button>
        <button
          type="button"
          aria-label="Add a towel set to the evening soak"
          className="mt-5 flex h-20 flex-[2] flex-col items-start justify-center gap-1 rounded-[0_1.5rem_1.5rem_0] bg-pink-200 px-3 text-left text-emerald-950 hover:bg-pink-100 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
        >
          <span className="text-lg font-semibold">Add</span>
          <span className="text-xs">Towel set</span>
        </button>
      </div>
      <button
        type="button"
        className="mt-5 flex w-full items-center justify-between border-b border-emerald-300 pb-2 text-sm hover:text-white cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
      >
        <span>View bathing guide</span>
        <span aria-hidden="true">↗</span>
      </button>
    </section>
  )
}
