// Fonts: Manrope (https://fonts.google.com/specimen/Manrope)
export default function FooterLegalDesk() {
  return (
    <footer className="bg-slate-950 text-slate-100 font-['Manrope',ui-sans-serif,system-ui,sans-serif] antialiased">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <a href="#" className="text-[1.375rem] font-bold tracking-[-0.03em] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">clauseboard</a>
            <h2 className="mt-6 max-w-md text-[2rem] leading-[1.2] font-medium tracking-[-0.03em]">A clear desk.<br />An accountable process.</h2>
            <p className="mt-4 max-w-md text-[0.9375rem] leading-[1.6] text-slate-300">Intake, approvals and an audit trail for the legal work behind your business.</p>
            <ul role="list" className="mt-6 flex flex-wrap gap-3 text-[0.75rem] text-cyan-200" aria-label="Security assurances">
              <li>SOC 2 Type II</li>
              <li aria-hidden="true">/</li>
              <li>EU data residency</li>
            </ul>
          </div>
          <div>
            <details className="border-b border-slate-600" open>
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-[1.125rem] font-semibold hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Your legal desk<span className="text-[0.875rem] text-cyan-200" aria-hidden="true">↕</span></summary>
              <nav aria-label="Legal team resources" className="grid grid-cols-2 gap-4 pb-6 text-[0.875rem] text-slate-300">
                <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Help centre</a>
                <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Implementation guide</a>
                <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Book onboarding</a>
                <a href="mailto:care@clauseboard.example" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Contact support</a>
              </nav>
            </details>
            <details className="border-b border-slate-600">
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-[1.125rem] font-semibold hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Trust &amp; agreements<span className="text-[0.875rem] text-cyan-200" aria-hidden="true">↕</span></summary>
              <nav aria-label="Trust documents" className="grid grid-cols-2 gap-4 pb-6 text-[0.875rem] text-slate-300">
                <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Security centre</a>
                <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Data processing terms</a>
                <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Subprocessors</a>
                <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Service agreement</a>
              </nav>
            </details>
            <p className="mt-5 text-[0.75rem] leading-[1.6] text-slate-300">A person at the other end. Weekdays, 09:00–18:00 CET.</p>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t pt-6 text-[0.75rem] border-slate-700 text-slate-300">
          <p>© 2026 Clauseboard B.V. / Amsterdam</p>
          <nav aria-label="Company policies" className="flex flex-wrap gap-x-6 gap-y-3 text-[0.875rem]">
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Privacy</a>
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Accessibility</a>
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Service status</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
