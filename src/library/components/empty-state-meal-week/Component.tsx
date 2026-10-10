// Fonts: Bricolage Grotesque (https://fonts.google.com/specimen/Bricolage+Grotesque)
export default function EmptyStateMealWeek() {
  return (
    <section
      aria-labelledby="empty-state-meal-week-title"
      className="w-72 rounded-[1.25rem] bg-yellow-50 p-5 text-rose-900 sm:w-96 font-['Bricolage_Grotesque',ui-sans-serif,system-ui,sans-serif] antialiased"
    >
      <header className="flex items-center justify-between text-sm font-bold">
        <p>Weekdish</p>
        <span className="text-[0.625rem] font-medium tracking-wider">DINNER PLAN</span>
      </header>
      <div aria-hidden="true" className="mt-5 grid grid-cols-5 gap-2">
        <span className="rounded-t-xl border border-rose-200 bg-white pt-2 text-center text-xs">M<span className="block py-2 text-2xl text-rose-400">—</span></span>
        <span className="rounded-t-xl border border-rose-200 bg-white pt-2 text-center text-xs">T<span className="block py-2 text-2xl text-rose-400">—</span></span>
        <span className="rounded-t-xl border border-rose-200 bg-white pt-2 text-center text-xs">W<span className="block py-2 text-2xl text-rose-400">—</span></span>
        <span className="rounded-t-xl border border-rose-200 bg-white pt-2 text-center text-xs">T<span className="block py-2 text-2xl text-rose-400">—</span></span>
        <span className="rounded-t-xl border border-rose-200 bg-white pt-2 text-center text-xs">F<span className="block py-2 text-2xl text-rose-400">—</span></span>
      </div>
      <h2 id="empty-state-meal-week-title" className="mt-5 text-2xl font-bold tracking-tight">What’s for dinner?</h2>
      <p className="mt-2 text-sm leading-5">Five blank evenings. Pick one meal and we’ll start your shopping list.</p>
      <a href="#" className="mt-5 flex min-h-11 items-center justify-center rounded-lg bg-rose-900 px-3 text-sm font-semibold text-yellow-50 cursor-pointer hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Plan Monday’s dinner →</a>
      <p className="mt-3 text-center text-[0.6875rem]">Leftovers count. So does takeout.</p>
    </section>
  )
}
