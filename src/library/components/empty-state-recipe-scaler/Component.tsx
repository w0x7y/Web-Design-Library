// Fonts: DM Sans (https://fonts.google.com/specimen/DM+Sans)
export default function EmptyStateRecipeScaler() {
  return (
    <section
      aria-labelledby="empty-state-recipe-scaler-title"
      className="w-72 rounded-lg border border-slate-600 bg-slate-900 p-5 text-sky-100 sm:w-96 font-['DM_Sans',ui-sans-serif,system-ui,sans-serif] antialiased"
    >
      <header className="flex items-center justify-between text-sm font-semibold">
        <p>Portionwise</p>
        <span className="text-[0.5625rem] font-medium tracking-wider text-sky-200">RECIPE SCALER</span>
      </header>
      <div className="my-5 grid grid-cols-[1fr_auto_1fr] items-center gap-4 border-y border-slate-600 py-3" aria-hidden="true">
        <div className="flex flex-col gap-1">
          <span className="text-3xl leading-none">—</span>
          <span className="text-[0.5625rem] font-medium tracking-wider text-sky-200">ORIGINAL</span>
        </div>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="size-6 text-sky-300"
        >
          <path d="M4 12h16m-5-5 5 5-5 5" />
        </svg>
        <div className="flex flex-col gap-1">
          <span className="text-3xl leading-none">—</span>
          <span className="text-[0.5625rem] font-medium tracking-wider text-sky-200">YOUR SERVINGS</span>
        </div>
      </div>
      <h2 id="empty-state-recipe-scaler-title" className="text-xl leading-6 font-semibold tracking-tight">Bring a recipe.<br />We’ll do the ratios.</h2>
      <p className="mt-3 text-xs leading-5 text-slate-300">No ingredients yet. Paste a recipe, then choose how many people you’re feeding.</p>
      <a href="#" className="mt-4 flex h-10 items-center justify-center rounded bg-sky-100 px-3 text-xs font-semibold text-slate-900 cursor-pointer hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Paste a recipe →</a>
      <p className="mt-3 text-[0.625rem] text-slate-400">Works with cups, grams and spoonfuls.</p>
    </section>
  )
}
