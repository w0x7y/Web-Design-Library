// Fonts: Archivo (https://fonts.google.com/specimen/Archivo)
export default function NavbarClimbingGrid() {
  return (
    <header className="bg-neutral-950 font-['Archivo',ui-sans-serif,system-ui,sans-serif] text-yellow-300">
      <div className="mx-auto max-w-7xl p-5">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <a href="#" className="text-3xl font-extrabold tracking-tight hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">CRUX YARD</a>
          <p className="text-xs">Bouldering / Leeds<br />Open today 06:00–23:00</p>
        </div>
        <nav aria-label="Climbing gym" className="mt-6 grid grid-cols-2 md:grid-cols-4">
          <a href="#" className="flex flex-col border border-yellow-300 p-4 hover:bg-yellow-300 hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"><span className="text-xs">01 / CLIMB</span><span className="mt-6 text-lg font-semibold">The walls</span></a>
          <a href="#" className="flex flex-col border border-yellow-300 p-4 hover:bg-yellow-300 hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"><span className="text-xs">02 / LEARN</span><span className="mt-6 text-lg font-semibold">Coaching</span></a>
          <a href="#" className="flex flex-col border border-yellow-300 p-4 hover:bg-yellow-300 hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"><span className="text-xs">03 / BELONG</span><span className="mt-6 text-lg font-semibold">Membership</span></a>
          <a href="#" className="flex flex-col border border-yellow-300 bg-yellow-300 p-4 text-neutral-950 hover:bg-yellow-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"><span className="text-xs">04 / BEGIN</span><span className="mt-6 text-lg font-semibold">Your first visit</span></a>
        </nav>
      </div>
    </header>
  )
}
