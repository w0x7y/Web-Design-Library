// Fonts: Archivo (https://fonts.google.com/specimen/Archivo)
export default function ButtonsSpiceDispatch() {
  return (
    <section
      aria-label="Saffron Lane spice dispatch actions"
      className="rounded-xl bg-stone-950 p-5 text-orange-100 w-72 sm:w-[22rem] font-['Archivo',ui-sans-serif,system-ui,sans-serif]"
    >
      <div className="flex items-center gap-4">
        <img
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80"
          alt="Whole and ground spices arranged on a pale wooden table"
          width="800"
          height="533"
          className="h-20 w-16 shrink-0 rounded-lg object-cover"
        />
        <div>
          <p className="text-xs tracking-widest text-orange-200 uppercase">Saffron Lane</p>
          <h2 className="mt-2 text-xl font-medium leading-tight">Cumin seed, lot 62</h2>
        </div>
      </div>
      <div className="mt-5 flex flex-col items-start gap-2">
        <button
          type="button"
          className="flex h-12 w-full items-center justify-between rounded-lg bg-orange-200 px-4 text-sm font-semibold text-stone-950 hover:bg-orange-100 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-200"
        >
          <span>Pack this order</span>
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
          <span>Print sack labels</span>
          <span aria-label="18 sacks" className="text-orange-200 tabular-nums">18</span>
        </button>
      </div>
      <p className="mt-4 text-xs text-stone-300">Ground today · Dispatch at 16:00</p>
    </section>
  )
}
