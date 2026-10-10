// Fonts: Newsreader (https://fonts.google.com/specimen/Newsreader)
export default function FooterFuneralMembership() {
  return (
    <footer className="bg-green-50 text-green-950 font-['Newsreader',ui-sans-serif,system-ui,sans-serif] antialiased">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.12em]">Member-owned / Est. 1987</p>
            <a href="#" className="mt-4 text-[2rem] leading-[1.1] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Common Farewell</a>
            <p className="mt-8 text-[5rem] leading-[1] tracking-[-0.05em]">824</p>
            <p className="mt-3 max-w-xs text-[1.125rem] leading-[1.5]">Local members.<br />Care held in common.</p>
          </div>
          <nav aria-label="Funeral care and membership" className="border-t border-green-900">
            <div className="grid gap-3 border-b border-green-900/30 py-5 sm:grid-cols-[7rem_1fr]">
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.12em]">01 / Now</p>
              <div>
                <a href="#" className="text-[1.5rem] leading-[1.25] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Arrange a funeral</a>
                <p className="mt-2 text-[0.9375rem]">Practical help, clear costs and time to decide.</p>
              </div>
            </div>
            <div className="grid gap-3 border-b border-green-900/30 py-5 sm:grid-cols-[7rem_1fr]">
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.12em]">02 / Plan</p>
              <div>
                <a href="#" className="text-[1.5rem] leading-[1.25] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Write down your wishes</a>
                <p className="mt-2 text-[0.9375rem]">Make your preferences known at your own pace.</p>
              </div>
            </div>
            <div className="grid gap-3 border-b border-green-900/30 py-5 sm:grid-cols-[7rem_1fr]">
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.12em]">03 / Talk</p>
              <div>
                <a href="mailto:care@commonfarewell.example" className="text-[1.5rem] leading-[1.25] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Speak with our care team</a>
                <p className="mt-2 text-[0.9375rem]">Call when you need us. Our team answers day and night.</p>
              </div>
            </div>
          </nav>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t pt-6 text-[0.75rem] border-green-900/30">
          <p>© 2026 Common Farewell Co-operative / Owned by our members</p>
          <nav aria-label="Co-operative information" className="flex flex-wrap gap-x-6 gap-y-3 text-[0.875rem]">
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Membership rules</a>
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Privacy</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
