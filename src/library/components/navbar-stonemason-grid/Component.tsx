// Fonts: Archivo (https://fonts.google.com/specimen/Archivo)
export default function NavbarStonemasonGrid() {
  return (
    <header className="bg-neutral-950 font-['Archivo',ui-sans-serif,system-ui,sans-serif] text-yellow-300">
      <div className="mx-auto max-w-7xl p-5">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <a href="#" className="text-3xl font-extrabold tracking-tight hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">BLOCK &amp; LINE</a>
          <p className="text-xs">Stone carving / York<br />Workshop visits by appointment</p>
        </div>
        <nav aria-label="Stonemason" className="mt-6 grid grid-cols-2 md:grid-cols-4">
          <a href="#" className="flex flex-col border border-yellow-300 p-4 hover:bg-yellow-300 hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"><span className="text-xs">01 / CUT</span><span className="mt-6 text-lg font-semibold">New stonework</span></a>
          <a href="#" className="flex flex-col border border-yellow-300 p-4 hover:bg-yellow-300 hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"><span className="text-xs">02 / REPAIR</span><span className="mt-6 text-lg font-semibold">Restoration</span></a>
          <a href="#" className="flex flex-col border border-yellow-300 p-4 hover:bg-yellow-300 hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"><span className="text-xs">03 / DETAIL</span><span className="mt-6 text-lg font-semibold">Lettering</span></a>
          <a href="#" className="flex flex-col border border-yellow-300 bg-yellow-300 p-4 text-neutral-950 hover:bg-yellow-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"><span className="text-xs">04 / PLAN</span><span className="mt-6 text-lg font-semibold">Discuss a project</span></a>
        </nav>
      </div>
    </header>
  )
}
