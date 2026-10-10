// Fonts: Fraunces (https://fonts.google.com/specimen/Fraunces)
export default function FooterBakeryStamp() {
  return (
    <footer className="bg-yellow-50 text-red-900 font-['Fraunces',ui-sans-serif,system-ui,sans-serif] antialiased">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-[14rem_1fr] lg:grid-cols-[14rem_1fr_16rem]">
          <div className="flex size-52 -rotate-6 flex-col items-center justify-center rounded-full border-2 border-red-900 text-center">
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.12em]">Worker owned</p>
            <svg aria-hidden="true" viewBox="0 0 96 56" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="my-3 h-14 w-24">
              <path d="M8 43C3 23 16 8 33 8h30c17 0 30 15 25 35-1 4-5 6-9 6H17c-4 0-8-2-9-6Z" />
              <path d="m31 15-9 19m26-19-9 19m26-19-9 19m-38 9h60" />
            </svg>
            <a href="#" className="text-[1.5rem] font-semibold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Early Crumb</a>
            <p className="text-[0.75rem]">A neighbourhood bakery</p>
          </div>
          <div>
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.12em]">The last word, before breakfast</p>
            <h2 className="mt-3 text-[2.5rem] leading-[1.1] tracking-[-0.03em] sm:text-[3.25rem]">See you<br />at the bread counter.</h2>
            <p className="mt-5 max-w-md text-[1rem] leading-[1.6]">Long-fermented loaves. A pot of coffee. A little flour on everything. Baked by the people who own the place.</p>
          </div>
          <div className="border-t border-red-900 pt-5 md:col-span-2 lg:col-span-1">
            <h2 className="text-[0.75rem] font-semibold uppercase tracking-[0.12em]">When the oven is on</h2>
            <dl className="mt-4 grid grid-cols-[1fr_auto] gap-x-6 gap-y-3 text-[0.875rem]">
              <dt>Tuesday to Friday</dt><dd>07:30–15:00</dd>
              <dt>Saturday</dt><dd>08:00–14:00</dd>
              <dt>Sunday &amp; Monday</dt><dd>Resting</dd>
            </dl>
            <address className="mt-5 text-[0.875rem] not-italic">6 Mill Yard, Norwich<br />Come early for the rye.</address>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t pt-6 text-[0.75rem] border-red-900">
          <p>© 2026 Early Crumb Workers Co-operative</p>
          <nav aria-label="Bakery links" className="flex flex-wrap gap-x-6 gap-y-3 text-[0.875rem]">
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">This week's bread</a>
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Our co-op</a>
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Allergen guide</a>
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Privacy</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
