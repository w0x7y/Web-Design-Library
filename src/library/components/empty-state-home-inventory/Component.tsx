// Fonts: Manrope (https://fonts.google.com/specimen/Manrope)
export default function EmptyStateHomeInventory() {
  return (
    <section
      aria-labelledby="empty-state-home-inventory-title"
      className="w-72 rounded-xl border border-teal-200 bg-white p-5 text-teal-950 sm:w-96 font-['Manrope',ui-sans-serif,system-ui,sans-serif] antialiased"
    >
      <header className="flex items-center justify-between gap-2 text-sm font-semibold">
        <p>Roomcount</p>
        <span className="text-[0.5625rem] font-medium tracking-wide text-teal-700">PRIVATE INVENTORY</span>
      </header>
      <div className="my-5 flex items-center gap-4">
        <span className="text-5xl leading-none font-medium tabular-nums">0</span>
        <p className="text-xs leading-5">items documented<br /><span className="text-teal-700">Start with one room.</span></p>
      </div>
      <div aria-hidden="true" className="grid grid-cols-3 border-y border-teal-200 py-2 text-[0.5625rem] tracking-widest text-teal-700">
        <span>ITEM</span>
        <span>ROOM</span>
        <span>VALUE</span>
      </div>
      <h2 id="empty-state-home-inventory-title" className="mt-5 text-lg font-semibold tracking-tight">Make a record of home.</h2>
      <p className="mt-2 text-xs leading-5 text-teal-800">A photo and a name are enough to begin. Receipts can come later.</p>
      <a href="#" className="mt-5 flex h-11 items-center justify-between rounded-md bg-teal-900 px-3 text-xs font-semibold text-white cursor-pointer hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Add your first item <span aria-hidden="true">→</span></a>
    </section>
  )
}
