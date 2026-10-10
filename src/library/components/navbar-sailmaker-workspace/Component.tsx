// Fonts: Manrope (https://fonts.google.com/specimen/Manrope)
export default function NavbarSailmakerWorkspace() {
  return (
    <header className="bg-slate-950 font-['Manrope',ui-sans-serif,system-ui,sans-serif] text-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        <p className="pt-4 text-xs text-slate-300">Loft / Morrow Sails / Falmouth</p>
        <div className="flex flex-wrap items-start gap-6 py-5">
          <a href="#" className="text-2xl font-bold tracking-tight hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">loftline</a>
          <p className="flex flex-wrap items-center gap-3 pt-1 text-sm text-slate-300">Morrow Sails <span className="rounded border border-slate-500 bg-slate-800 px-2 py-1 text-xs">12 sails in progress</span></p>
          <details className="group w-full md:ml-auto md:w-auto">
            <summary className="flex w-fit cursor-pointer list-none items-center gap-3 rounded px-3 py-2 text-sm [&::-webkit-details-marker]:hidden hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Your loft account
              <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4 group-open:rotate-45">
                <path d="M8 3v10M3 8h10" />
              </svg>
            </summary>
            <div className="mt-2 w-48 rounded-lg border border-slate-600 bg-slate-900 p-3">
              <p className="mb-3 text-xs text-slate-300">Signed in as Evan Brooks</p>
              <a href="#" className="block py-2 text-xs hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Loft preferences</a>
              <a href="#" className="block py-2 text-xs hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Workshop access</a>
            </div>
          </details>
        </div>
        <nav aria-label="Sailmaker workspace" className="flex flex-wrap gap-x-6 border-t border-slate-700 text-sm">
          <a href="#" aria-current="page" className="border-b-2 border-cyan-200 py-4 font-semibold text-cyan-200 hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Orders</a>
          <a href="#" className="border-b-2 border-transparent py-4 hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Sail plans</a>
          <a href="#" className="border-b-2 border-transparent py-4 hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Cutting queue</a>
          <a href="#" className="border-b-2 border-transparent py-4 hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Cloth stock</a>
          <a href="#" className="border-b-2 border-transparent py-4 hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Sea trials</a>
        </nav>
      </div>
    </header>
  )
}
