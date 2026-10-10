export default function BadgesSledTeam() {
  return (
    <section aria-label="Northpaw Run sled team harness badges" className="w-72 rounded-3xl bg-sky-100 p-5 text-sky-950 sm:w-[22rem]">
      <h2 className="text-xs font-semibold tracking-wide">Northpaw Run / Team roster</h2>
      <p className="mt-1 text-xl font-bold">Meet your lead pair.</p>
      <ul role="list" className="mt-5 flex items-end gap-4">
        <li className="flex h-28 w-24 flex-col justify-center gap-1 bg-sky-800 px-4 text-sky-50 [clip-path:polygon(0_0,100%_0,100%_calc(100%_-_12px),50%_100%,0_calc(100%_-_12px))]"><span className="text-3xl leading-none font-bold tabular-nums">01</span><span className="text-xs font-semibold">Miska / Lead</span></li>
        <li className="flex h-24 w-24 flex-col justify-center gap-1 bg-orange-700 px-4 text-white [clip-path:polygon(0_0,100%_0,100%_calc(100%_-_12px),50%_100%,0_calc(100%_-_12px))]"><span className="text-3xl leading-none font-bold tabular-nums">02</span><span className="text-xs font-semibold">Tova / Lead</span></li>
      </ul>
      <ul role="list" className="mt-4 flex flex-wrap gap-2">
        <li className="rounded-md border border-sky-700 bg-white px-2.5 py-1 text-xs">Trail trained</li>
        <li className="rounded-md border border-sky-700 bg-white px-2.5 py-1 text-xs">Visitor friendly</li>
      </ul>
    </section>
  )
}
