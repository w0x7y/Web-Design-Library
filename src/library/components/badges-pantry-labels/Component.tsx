export default function BadgesPantryLabels() {
  return (
    <section
      aria-label="Pantry label badges"
      className="w-72 border border-emerald-800 bg-amber-50 p-6 text-emerald-950"
    >
      <p className="text-center text-[10px] tracking-[0.2em] uppercase">
        Good cupboard / No. 08
      </p>
      <div className="mx-auto mt-5 flex h-20 w-32 flex-col items-center justify-center rounded-[50%] border border-emerald-800 ring-1 ring-emerald-800 ring-offset-4 ring-offset-amber-50">
        <span className="text-[10px] tracking-widest uppercase">
          Made by hand
        </span>
        <span className="font-serif text-2xl">Small batch</span>
        <span className="text-[10px] tracking-widest uppercase">Since 1984</span>
      </div>
      <ul role="list" className="mt-7 flex flex-wrap justify-center gap-2">
        <li className="border border-emerald-800 px-2.5 py-1 text-[10px] font-semibold uppercase">
          Plant based
        </li>
        <li className="border border-emerald-800 px-2.5 py-1 text-[10px] font-semibold uppercase">
          No additives
        </li>
        <li className="border border-emerald-800 bg-emerald-800 px-2.5 py-1 text-[10px] font-semibold text-amber-50 uppercase">
          Organic
        </li>
      </ul>
      <div className="mt-5 flex justify-between border-t border-emerald-800 pt-3 text-[10px]">
        <span>Grown in Somerset</span>
        <span className="font-mono">250 g</span>
      </div>
    </section>
  )
}
