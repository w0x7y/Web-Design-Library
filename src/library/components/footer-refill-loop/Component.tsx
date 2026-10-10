// Fonts: Bricolage Grotesque (https://fonts.google.com/specimen/Bricolage+Grotesque)
export default function FooterRefillLoop() {
  return (
    <footer className="bg-teal-50 text-teal-950 font-['Bricolage_Grotesque',ui-sans-serif,system-ui,sans-serif] antialiased">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <a href="#" className="text-[1.5rem] font-bold tracking-[-0.04em] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">roundtrip.</a>
            <h2 className="mt-6 text-[2.75rem] leading-[1.05] font-semibold tracking-[-0.04em] sm:text-[3.75rem]">Same bottle.<br />Next chapter.</h2>
            <p className="mt-5 max-w-sm text-[0.9375rem] leading-[1.6]">Good soap, less packaging. Refill the bottle you already love at our little shop on Fern Street.</p>
          </div>
          <div>
            <div className="flex items-center gap-6 rounded-[2rem] bg-teal-950 p-6 text-teal-50 sm:p-8">
              <svg aria-hidden="true" viewBox="0 0 64 112" fill="none" stroke="currentColor" strokeWidth="2" className="h-28 w-16 shrink-0 text-pink-200">
                <path d="M23 8h18v16l10 14v61a7 7 0 0 1-7 7H20a7 7 0 0 1-7-7V38l10-14Z" />
                <path d="M23 16h18M13 52h38v30H13" />
                <path d="M24 65h16m-6-6 6 6-6 6" />
              </svg>
              <div>
                <h2 className="text-[1.5rem] leading-[1.1] font-semibold">Bring it back.</h2>
                <p className="mt-3 text-[0.875rem] leading-[1.5]">Any clean bottle is a good bottle.<br />We'll weigh it before you fill.</p>
                <a href="#" className="mt-4 inline-block text-[0.875rem] text-pink-200 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">How refills work ↗</a>
              </div>
            </div>
            <p className="mt-4 rounded-[2rem] bg-pink-200 px-6 py-5 text-[0.875rem] sm:ml-10">Forgot your bottle? Borrow one of ours. £2 deposit, returned when you do.</p>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t pt-6 text-[0.75rem] border-teal-900/30">
          <p>© 2026 Roundtrip / 18 Fern Street, Bristol</p>
          <nav aria-label="Refill shop" className="flex flex-wrap gap-x-6 gap-y-3 text-[0.875rem]">
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">What's on tap</a>
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Find the shop</a>
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Ingredients</a>
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Privacy</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
