// Fonts: Archivo (https://fonts.google.com/specimen/Archivo)
export default function ButtonsMushroomHarvest() {
  return (
    <section
      aria-label="Sporeline harvest actions"
      className="rounded-xl bg-stone-950 p-5 text-orange-100 w-72 sm:w-[22rem] font-['Archivo',ui-sans-serif,system-ui,sans-serif]"
    >
      <div className="flex items-center gap-4">
        <img
          src="https://images.unsplash.com/photo-1504545102780-26774c1bb073?w=800&q=80"
          alt="Brown chestnut mushrooms on a grey work surface"
          width="800"
          height="1098"
          className="h-20 w-16 shrink-0 rounded-lg object-cover"
        />
        <div>
          <p className="text-xs tracking-widest text-orange-200 uppercase">Sporeline</p>
          <h2 className="mt-2 text-xl font-medium leading-tight">Chestnut crop, bay 4</h2>
        </div>
      </div>
      <div className="mt-5 flex flex-col items-start gap-2">
        <button
          type="button"
          className="flex h-12 w-full items-center justify-between rounded-lg bg-orange-200 px-4 text-sm font-semibold text-stone-950 hover:bg-orange-100 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-200"
        >
          <span>Log this harvest</span>
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4"
          >
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </button>
        <button
          type="button"
          className="flex h-10 items-center gap-3 rounded-lg border border-stone-500 px-4 text-xs text-orange-100 hover:bg-stone-800 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-200"
        >
          <span>Print crate labels</span>
          <span aria-label="24 crates" className="text-orange-200 tabular-nums">24</span>
        </button>
      </div>
      <p className="mt-4 text-xs text-stone-300">Picked today · Packed by 14:00</p>
    </section>
  )
}
