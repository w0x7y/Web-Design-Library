export default function ButtonsArcadeControls() {
  return (
    <section
      aria-label="Arcade actions"
      className="w-72 rounded-2xl border-2 border-black bg-amber-100 p-5 text-black"
    >
      <p className="font-mono text-[10px] tracking-wider uppercase">
        Pocket arcade / 02
      </p>
      <h2 className="mt-2 text-2xl font-black tracking-tight">
        One more round?
      </h2>
      <button
        type="button"
        className="mt-5 flex h-14 w-full items-center justify-center gap-3 rounded-xl border-2 border-black bg-lime-300 text-lg font-black shadow-[4px_4px_0_0_#000] transition-[background-color,translate,box-shadow] hover:bg-lime-200 active:translate-y-0.5 active:shadow-[2px_2px_0_0_#000] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 motion-reduce:transition-none"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="size-4 shrink-0"
        >
          <path d="M4 2.5 13 8l-9 5.5z" />
        </svg>
        Let's play
      </button>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <button
          type="button"
          className="flex h-16 flex-col items-center justify-center gap-1 rounded-xl border-2 border-black bg-white text-xs font-bold shadow-[4px_4px_0_0_#000] transition-[background-color,translate,box-shadow] hover:bg-amber-50 active:translate-y-0.5 active:shadow-[2px_2px_0_0_#000] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 motion-reduce:transition-none"
        >
          <span aria-hidden="true" className="text-lg">
            ★
          </span>
          High scores
        </button>
        <button
          type="button"
          className="flex h-16 flex-col items-center justify-center gap-1 rounded-xl border-2 border-black bg-white text-xs font-bold shadow-[4px_4px_0_0_#000] transition-[background-color,translate,box-shadow] hover:bg-amber-50 active:translate-y-0.5 active:shadow-[2px_2px_0_0_#000] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 motion-reduce:transition-none"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="size-5"
          >
            <path d="M4 8h3l4-4v12l-4-4H4zM14 7a4 4 0 0 1 0 6M16 4a8 8 0 0 1 0 12" />
          </svg>
          Sound settings
        </button>
      </div>
      <p className="mt-5 text-center font-mono text-[10px]">
        No coins needed. Just good reflexes.
      </p>
    </section>
  )
}
