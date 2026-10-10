// Fonts: IBM Plex Mono (https://fonts.google.com/specimen/IBM+Plex+Mono)
export default function EmptyStatePrintStore() {
  return (
    <section
      aria-labelledby="empty-state-print-store-title"
      className="w-72 border-2 border-neutral-950 bg-orange-100 p-4 text-neutral-950 sm:w-96 font-['IBM_Plex_Mono',ui-sans-serif,system-ui,sans-serif] antialiased"
    >
      <header className="flex justify-between border-b-2 border-neutral-950 pb-3 text-[0.625rem] font-medium">
        <p>INKPARCEL</p>
        <span>CATALOGUE</span>
      </header>
      <div className="flex items-center justify-between py-3">
        <span className="text-[3.5rem] leading-none font-medium tracking-[-0.08em] tabular-nums">00</span>
        <p className="text-[0.625rem] leading-4">PRODUCTS<br />PUBLISHED</p>
      </div>
      <div className="bg-neutral-950 p-4 text-orange-100">
        <h2 id="empty-state-print-store-title" className="text-xl leading-6 font-medium">No ink on<br />the shelf.</h2>
        <p className="mt-3 text-[0.6875rem] leading-5">Upload a design. Pick a blank. Your first product starts there.</p>
        <a href="#" className="mt-4 flex h-10 items-center justify-between border border-orange-100 px-3 text-[0.6875rem] font-medium cursor-pointer hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"><span>ADD A DESIGN</span><span aria-hidden="true">→</span></a>
      </div>
      <p className="mt-3 text-[0.5625rem] tracking-wide">PRINTED ONLY WHEN IT SELLS.</p>
    </section>
  )
}
