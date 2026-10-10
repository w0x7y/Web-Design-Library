// Fonts: Barlow (https://fonts.google.com/specimen/Barlow)
export default function FooterMaritimeManifest() {
  return (
    <footer className="bg-blue-950 font-['Barlow',ui-sans-serif,system-ui,sans-serif] text-blue-50 antialiased">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[18rem_1fr] lg:gap-16">
          <div className="flex flex-col items-start">
            <a href="#" className="inline-flex items-center gap-3 text-2xl font-semibold tracking-[-0.02em] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">
              <svg aria-hidden="true" viewBox="0 0 36 28" fill="none" stroke="currentColor" strokeWidth={2} className="h-7 w-9 text-cyan-200">
                <path d="M3 13h30l-5 8H8Z M12 13V5h12v8 M18 5V1 M2 26c3-3 5 3 8 0s5 3 8 0 5 3 8 0 5 3 8 0" />
              </svg>
              Soundward
            </a>
            <p className="mt-5 max-w-xs text-sm leading-6 text-blue-200">Short-sea freight for the North Sea. A weekly sailing and a named person for every shipment.</p>
            <div className="mt-8 border-l-2 border-cyan-200 pl-4">
              <p className="text-xs font-medium uppercase tracking-widest text-blue-200">Cargo desk / Mon–Fri</p>
              <a href="tel:+31105550128" className="mt-2 inline-block text-xl font-medium tabular-nums underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">+31 10 555 0128</a>
              <p className="mt-1 text-xs text-blue-200">07:00–19:00 CET / Rotterdam</p>
            </div>
          </div>
          <div className="border border-blue-300/40">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-blue-300/40 bg-blue-900/50 px-5 py-4">
              <h2 className="text-sm font-semibold">Your next shipment</h2>
              <p className="text-xs tabular-nums text-blue-200">SERVICE / NS–04</p>
            </div>
            <div className="grid gap-5 p-5 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-blue-200">Port of loading</p>
                <p className="mt-2 text-2xl font-medium">Rotterdam</p>
                <p className="mt-1 text-xs text-blue-200">NL RTM / Every Tuesday</p>
              </div>
              <svg aria-hidden="true" viewBox="0 0 32 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-8 rotate-90 text-cyan-200 sm:rotate-0">
                <path d="M1 10h28m-7-7 7 7-7 7" />
              </svg>
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-blue-200">Port of discharge</p>
                <p className="mt-2 text-2xl font-medium">Immingham</p>
                <p className="mt-1 text-xs text-blue-200">GB IMM / Wednesday arrival</p>
              </div>
            </div>
            <nav aria-label="Freight shipment resources" className="grid border-t border-blue-300/40 sm:grid-cols-2">
              <a href="#" className="flex items-center justify-between gap-4 px-5 py-4 text-sm hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"><span>Request a freight quote</span><span aria-hidden="true">↗</span></a>
              <a href="#" className="flex items-center justify-between gap-4 px-5 py-4 text-sm hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"><span>Sailing schedule</span><span aria-hidden="true">↗</span></a>
              <a href="#" className="flex items-center justify-between gap-4 px-5 py-4 text-sm hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"><span>Prepare your documents</span><span aria-hidden="true">↗</span></a>
              <a href="#" className="flex items-center justify-between gap-4 px-5 py-4 text-sm hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"><span>Track a consignment</span><span aria-hidden="true">↗</span></a>
            </nav>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap justify-between gap-4 border-t border-blue-300/40 pt-5 text-xs text-blue-200">
          <p>© 2026 Soundward Shipping B.V.</p>
          <nav aria-label="Shipping policies" className="flex flex-wrap gap-5">
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Conditions of carriage</a>
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Privacy</a>
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Port contacts</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
