// Fonts: IBM Plex Sans (https://fonts.google.com/specimen/IBM+Plex+Sans)
export default function FooterTailorOrder() {
  return (
    <footer className="bg-white text-stone-950 font-['IBM_Plex_Sans',ui-sans-serif,system-ui,sans-serif] antialiased">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid overflow-hidden rounded-2xl border border-stone-200 md:grid-cols-[1fr_19rem]">
          <div className="p-6 sm:p-10">
            <a href="#" className="text-[1.5rem] font-bold tracking-[-0.04em] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current" aria-label="Selvedge Room home">selvedge room /</a>
            <h2 className="mt-6 max-w-xl text-[2.25rem] leading-[1.1] font-medium tracking-[-0.03em] sm:text-[3rem]">Cut for you.<br />Kept for years.</h2>
            <ol role="list" className="mt-8 grid grid-cols-3 border-t-2 border-stone-700 pt-4 text-[0.75rem]" aria-label="Bespoke commission stages">
              <li><span className="font-semibold">Consult</span><br />Cloth &amp; cut</li>
              <li className="text-center"><span className="font-semibold">Fit</span><br />Baste &amp; refine</li>
              <li className="text-right"><span className="font-semibold">Collect</span><br />Finish &amp; wear</li>
            </ol>
          </div>
          <nav className="border-t border-dashed border-stone-200 bg-stone-50 p-6 md:border-t-0 md:border-l sm:p-10" aria-label="Tailoring appointments">
            <h2 className="text-[0.75rem] font-semibold uppercase tracking-[0.12em]">Your first commission</h2>
            <ul role="list" className="mt-6 grid gap-4 text-[0.9375rem]">
              <li><a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Book a consultation</a></li>
              <li><a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Cloths &amp; linings</a></li>
              <li><a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">The fitting process</a></li>
              <li><a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Care &amp; alterations</a></li>
            </ul>
            <p className="mt-8 border-t border-stone-200 pt-4 text-[0.75rem] leading-[1.6]">Atelier appointments<br /><a href="tel:+441613940728" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">0161 394 0728</a><br />Tue–Sat, 10:00 to 18:00</p>
          </nav>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t pt-6 text-[0.75rem] border-stone-200">
          <p>© 2026 Selvedge Room Bespoke Ltd.</p>
          <nav aria-label="Atelier policies" className="flex flex-wrap gap-x-6 gap-y-3 text-[0.875rem]">
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Commission terms</a>
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Accessibility</a>
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Privacy</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
