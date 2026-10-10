// Fonts: Manrope
export default function PricingLegalWorkspace() {
  return (
    <section className="bg-indigo-950 font-['Manrope',ui-sans-serif,system-ui,sans-serif] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <p
          className="text-xs font-semibold tracking-widest uppercase text-sky-200"
        >
          Clauseway / For in-house legal teams
        </p>
        <div className="mt-6 grid gap-8 border-b border-indigo-400 pb-10 lg:grid-cols-[1.5fr_1fr] lg:items-end">
          <div>
            <h2
              className="max-w-2xl text-4xl leading-[1.15] font-semibold tracking-tight sm:text-5xl"
            >
              One workspace for every contract.
            </h2>
            <p
              className="mt-5 max-w-xl text-base leading-relaxed text-indigo-100"
            >
              Intake, negotiation, signatures and renewals in a single place. External counsel and business
              reviewers join free.
            </p>
          </div>
          <div>
            <div className="flex flex-wrap items-baseline gap-3">
              <p className="text-6xl font-semibold tracking-tight">$49</p>
              <p className="text-sm text-indigo-100">per legal seat / month</p>
            </div>
            <a
              className="mt-5 flex min-h-12 items-center justify-center rounded-md bg-sky-200 px-5 text-sm font-bold text-indigo-950 hover:bg-sky-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-200"
              href="#"
            >
              Try Clauseway for 21 days
            </a>
            <p className="mt-3 text-xs text-indigo-100">Billed monthly. 3-seat minimum. No setup charge.</p>
          </div>
        </div>
        <ul className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-4" role="list">
          <li>
            <p className="text-xs font-semibold text-sky-200">01 / REQUEST</p>
            <h3 className="mt-3 text-lg font-semibold">A clear intake</h3>
            <p
              className="mt-2 text-sm leading-relaxed text-indigo-100"
            >
              Route requests by contract type, value and team.
            </p>
          </li>
          <li>
            <p className="text-xs font-semibold text-sky-200">02 / REVIEW</p>
            <h3 className="mt-3 text-lg font-semibold">A shared redline</h3>
            <p
              className="mt-2 text-sm leading-relaxed text-indigo-100"
            >
              Version history and clause comments in every matter.
            </p>
          </li>
          <li>
            <p className="text-xs font-semibold text-sky-200">03 / SIGN</p>
            <h3 className="mt-3 text-lg font-semibold">Ready to execute</h3>
            <p
              className="mt-2 text-sm leading-relaxed text-indigo-100"
            >
              Unlimited e-signatures and a full audit trail.
            </p>
          </li>
          <li>
            <p className="text-xs font-semibold text-sky-200">04 / RENEW</p>
            <h3 className="mt-3 text-lg font-semibold">Nothing slips by</h3>
            <p
              className="mt-2 text-sm leading-relaxed text-indigo-100"
            >
              Owners, renewal dates and a searchable repository.
            </p>
          </li>
        </ul>
        <details className="mt-10 border-t border-indigo-400 pt-5">
          <summary
            className="cursor-pointer text-sm font-semibold hover:text-sky-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-200"
          >
            Who counts as a paid legal seat?
          </summary>
          <p
            className="mt-2 text-sm leading-relaxed text-indigo-100"
          >
            Only people who manage matters, edit playbooks or administer the workspace. Colleagues who submit
            requests or approve a contract never count toward your bill.
          </p>
        </details>
      </div>
    </section>
  )
}
