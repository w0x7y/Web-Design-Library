// Fonts: Fraunces
export default function BadgesTruffleGrades() {
  return (
    <section aria-label="Myco Ledger truffle lot grading badges" className="w-72 bg-stone-100 p-6 text-rose-950 sm:w-[22rem]">
      <h2 className="text-xs tracking-wide uppercase">Myco Ledger / Lot 19</h2>
      <p className="mt-2 font-['Fraunces',ui-serif,Georgia,serif] text-2xl">Black autumn truffle</p>
      <p className="mt-5 border-y border-rose-950 py-2 text-xs">Burgundy, France · Wild harvested</p>
      <ul role="list" className="mt-5 grid grid-cols-[2fr_1fr] gap-2">
        <li className="flex flex-col gap-1 bg-rose-950 p-3 text-stone-100"><span className="font-['Fraunces',ui-serif,Georgia,serif] text-3xl">Extra</span><span className="text-xs">Whole · 30–50 g</span></li>
        <li className="flex flex-col gap-1 border border-rose-950 p-3"><span className="font-['Fraunces',ui-serif,Georgia,serif] text-3xl">S</span><span className="text-xs">10–20 g</span></li>
      </ul>
      <p className="mt-5 text-xs">Aroma checked · Packed 10 October</p>
    </section>
  )
}
