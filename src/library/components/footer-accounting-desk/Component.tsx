// Fonts: Manrope (https://fonts.google.com/specimen/Manrope)
export default function FooterAccountingDesk() {
  return (
    <footer className="bg-slate-950 text-slate-100 font-['Manrope',ui-sans-serif,system-ui,sans-serif] antialiased">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <a href="#" className="text-[1.375rem] font-bold tracking-[-0.03em] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">balance room</a>
            <h2 className="mt-6 max-w-md text-[2rem] leading-[1.2] font-medium tracking-[-0.03em]">Good books.<br />Fewer surprises.</h2>
            <p className="mt-4 max-w-md text-[0.9375rem] leading-[1.6] text-slate-300">Bookkeeping, payroll and year-end accounts for the people running independent businesses.</p>
            <ul role="list" className="mt-6 flex flex-wrap gap-3 text-[0.75rem] text-cyan-200" aria-label="Accounting services">
              <li>Monthly bookkeeping</li>
              <li aria-hidden="true">/</li>
              <li>Year-end accounts</li>
            </ul>
          </div>
          <div>
            <details className="border-b border-slate-600" open>
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-[1.125rem] font-semibold hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Your accounts desk<span className="text-[0.875rem] text-cyan-200" aria-hidden="true">↕</span></summary>
              <nav aria-label="Client accounting resources" className="grid grid-cols-2 gap-4 pb-6 text-[0.875rem] text-slate-300">
                <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Client portal</a>
                <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Year-end checklist</a>
                <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Book an introduction</a>
                <a href="mailto:hello@balanceroom.example" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Ask your accountant</a>
              </nav>
            </details>
            <details className="border-b border-slate-600">
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-[1.125rem] font-semibold hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Working together<span className="text-[0.875rem] text-cyan-200" aria-hidden="true">↕</span></summary>
              <nav aria-label="Accounting engagement documents" className="grid grid-cols-2 gap-4 pb-6 text-[0.875rem] text-slate-300">
                <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Our fee guide</a>
                <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Engagement terms</a>
                <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Data handling</a>
                <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Complaints process</a>
              </nav>
            </details>
            <p className="mt-5 text-[0.75rem] leading-[1.6] text-slate-300">Your accountant answers directly. Mon–Fri, 09:00–17:30.</p>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t pt-6 text-[0.75rem] border-slate-700 text-slate-300">
          <p>© 2026 Balance Room Accountants / Manchester</p>
          <nav aria-label="Practice policies" className="flex flex-wrap gap-x-6 gap-y-3 text-[0.875rem]">
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Privacy</a>
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Accessibility</a>
            <a href="#" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Practice news</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
