// Fonts: IBM Plex Sans (https://fonts.google.com/specimen/IBM+Plex+Sans)
export default function FooterRailTicket() {
  return (
    <footer className="bg-white text-blue-950 font-['IBM_Plex_Sans',ui-sans-serif,system-ui,sans-serif] antialiased">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid overflow-hidden rounded-2xl border border-blue-200 md:grid-cols-[1fr_19rem]">
          <div className="p-6 sm:p-10">
            <a href="#" className="text-[1.5rem] font-bold tracking-[-0.04em] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current" aria-label="Wayline home">wayline /</a>
            <h2 className="mt-6 max-w-xl text-[2.25rem] leading-[1.1] font-medium tracking-[-0.03em] sm:text-[3rem]">The next town.<br />A little closer.</h2>
            <ol role="list" className="mt-8 grid grid-cols-3 border-t-2 border-blue-700 pt-4 text-[0.75rem]" aria-label="Avon Valley route">
              <li><span className="font-semibold">Bristol</span><br />Temple Meads</li>
              <li className="text-center"><span className="font-semibold">Bath</span><br />Spa</li>
              <li className="text-right"><span className="font-semibold">Bradford</span><br />on Avon</li>
            </ol>
          </div>
          <nav className="border-t border-dashed border-blue-200 bg-blue-50 p-6 md:border-t-0 md:border-l sm:p-10" aria-label="Passenger help">
            <h2 className="text-[0.75rem] font-semibold uppercase tracking-[0.12em]">Before you board</h2>
            <ul role="list" className="mt-6 grid gap-4 text-[0.9375rem]">
              <li><a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Find your train</a></li>
              <li><a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Tickets &amp; railcards</a></li>
              <li><a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Book assisted travel</a></li>
              <li><a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Lost something?</a></li>
            </ul>
            <p className="mt-8 border-t border-blue-200 pt-4 text-[0.75rem] leading-[1.6]">Passenger care<br /><a href="tel:+448001234506" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">0800 123 4506</a><br />Every day, 06:00 to 23:00</p>
          </nav>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t pt-6 text-[0.75rem] border-blue-200">
          <p>© 2026 Wayline Rail Ltd.</p>
          <nav aria-label="Rail policies" className="flex flex-wrap gap-x-6 gap-y-3 text-[0.875rem]">
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Conditions of travel</a>
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Accessibility</a>
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Privacy</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
