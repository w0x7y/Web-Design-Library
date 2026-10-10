// Fonts: Archivo
export default function BadgesEsportsSeeding() {
  return (
    <section aria-label="Rift Circuit tournament seeding badges" className="w-72 border-2 border-fuchsia-400 bg-black p-5 font-['Archivo',ui-sans-serif,system-ui,sans-serif] text-white sm:w-[22rem]">
      <h2 className="flex justify-between border-b border-white pb-3 text-xs font-bold uppercase"><span>Rift Circuit</span><span>Finals / 26</span></h2>
      <div className="mt-5 flex items-center gap-4">
        <p aria-label="Seed 1" className="text-[5rem] leading-none font-black tracking-tighter text-fuchsia-400 tabular-nums">01</p>
        <div>
          <p className="text-xl leading-tight font-bold uppercase">Static<br />Wolves</p>
          <p className="mt-2 text-xs uppercase">Regional seed</p>
        </div>
      </div>
      <ul role="list" className="mt-5 flex flex-wrap gap-2">
        <li className="bg-fuchsia-400 px-2.5 py-1.5 text-xs font-bold text-black uppercase">Qualified</li>
        <li className="border border-white px-2.5 py-1.5 text-xs font-bold uppercase">Best of 5</li>
        <li className="border border-white px-2.5 py-1.5 text-xs font-bold uppercase">Upper bracket</li>
      </ul>
      <p className="mt-5 border-t border-white pt-3 text-xs">Match 07 · Saturday, 18:00</p>
    </section>
  )
}
