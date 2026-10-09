// Fonts: Onest (https://fonts.google.com/specimen/Onest)
export default function PricingThreeTier() {
  return (
    // `group` lets the prices follow the billing switch with CSS alone (group-has-[…:checked])
    <section className="group bg-zinc-50 font-['Onest',ui-sans-serif,system-ui,sans-serif] text-zinc-950 antialiased">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl leading-[1.05] font-semibold tracking-[-0.03em] text-balance sm:text-5xl">
            Know it&rsquo;s down before your customers do.
          </h2>
          <p className="mt-5 text-lg text-pretty text-zinc-600">
            Every plan checks from 14 regions and comes with a public status page. Pay monthly, or pay yearly and get
            two months free.
          </p>
        </div>

        <fieldset className="mx-auto mt-10 flex w-fit gap-1 rounded-full bg-white p-1 ring-1 ring-zinc-200">
          <legend className="sr-only">Billing period</legend>
          <label className="flex h-9 cursor-pointer items-center rounded-full px-4 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950 has-checked:bg-zinc-950 has-checked:text-white has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-zinc-950">
            <input type="radio" name="pricing-three-tier-billing" value="monthly" defaultChecked className="sr-only" />
            Monthly
          </label>
          <label className="flex h-9 cursor-pointer items-center gap-2 rounded-full px-4 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950 has-checked:bg-zinc-950 has-checked:text-white has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-zinc-950">
            <input id="pricing-three-tier-yearly" type="radio" name="pricing-three-tier-billing" value="yearly" className="sr-only" />
            Yearly
            <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-800">2 months free</span>
          </label>
        </fieldset>

        <div className="mx-auto mt-14 grid max-w-md gap-6 lg:mt-20 lg:max-w-none lg:grid-cols-3 lg:gap-0">
          {/* Hobby */}
          <div className="flex flex-col rounded-2xl bg-white p-8 ring-1 ring-zinc-200 lg:rounded-r-none lg:ring-inset">
            <h3 className="text-lg font-semibold">Hobby</h3>
            <p className="mt-2 text-sm text-pretty text-zinc-600 lg:min-h-10">For side projects and personal sites.</p>
            <p className="mt-8 flex items-baseline gap-x-2">
              <span className="text-5xl font-semibold tracking-[-0.04em] tabular-nums">$0</span>
              <span className="text-sm text-zinc-600">per month</span>
            </p>
            <p className="mt-1 text-sm text-zinc-600">Free for as long as you like</p>
            <a
              href="#"
              className="mt-8 flex h-11 items-center justify-center rounded-lg bg-white text-sm font-semibold ring-1 ring-zinc-300 transition-colors ring-inset hover:bg-zinc-50 hover:ring-zinc-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            >
              Start monitoring
            </a>
            <ul role="list" className="mt-8 space-y-3 border-t border-zinc-200 pt-8 text-sm text-zinc-700">
              <li className="flex gap-3">
                <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 size-4 shrink-0 text-emerald-600">
                  <path d="m3.5 8.5 3 3 6-7" />
                </svg>
                10 monitors
              </li>
              <li className="flex gap-3">
                <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 size-4 shrink-0 text-emerald-600">
                  <path d="m3.5 8.5 3 3 6-7" />
                </svg>
                Checks every 3 minutes
              </li>
              <li className="flex gap-3">
                <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 size-4 shrink-0 text-emerald-600">
                  <path d="m3.5 8.5 3 3 6-7" />
                </svg>
                Email alerts
              </li>
              <li className="flex gap-3">
                <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 size-4 shrink-0 text-emerald-600">
                  <path d="m3.5 8.5 3 3 6-7" />
                </svg>
                One public status page
              </li>
              <li className="flex gap-3">
                <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 size-4 shrink-0 text-emerald-600">
                  <path d="m3.5 8.5 3 3 6-7" />
                </svg>
                30 days of history
              </li>
            </ul>
          </div>

          {/* Team: the highlighted plan, lifted above the other two on desktop */}
          <div className="relative flex flex-col rounded-2xl bg-emerald-950 p-8 text-white shadow-[0_32px_64px_-24px_rgb(2_44_34/0.6)] lg:-my-6 lg:py-14">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-lg font-semibold">Team</h3>
              <span className="rounded-full bg-emerald-300 px-2.5 py-1 text-xs font-semibold text-emerald-950">Most popular</span>
            </div>
            <p className="mt-2 text-sm text-pretty text-emerald-100 lg:min-h-10">For product teams with customers depending on them.</p>
            <p className="mt-8 flex items-baseline gap-x-2">
              <span className="text-5xl font-semibold tracking-[-0.04em] tabular-nums">
                <span className="group-has-[#pricing-three-tier-yearly:checked]:hidden">$30</span>
                <span className="hidden group-has-[#pricing-three-tier-yearly:checked]:inline">$25</span>
              </span>
              <span className="text-sm text-emerald-100">per month</span>
            </p>
            <p className="mt-1 text-sm text-emerald-100">
              <span className="group-has-[#pricing-three-tier-yearly:checked]:hidden">Billed monthly</span>
              <span className="hidden group-has-[#pricing-three-tier-yearly:checked]:inline">$300 billed once a year</span>
            </p>
            <a
              href="#"
              className="mt-8 flex h-11 items-center justify-center rounded-lg bg-emerald-300 text-sm font-semibold text-emerald-950 transition-colors hover:bg-emerald-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
            >
              Start a 14-day trial
            </a>
            <ul role="list" className="mt-8 space-y-3 border-t border-white/15 pt-8 text-sm text-emerald-50">
              <li className="font-medium text-white">Everything in Hobby, plus:</li>
              <li className="flex gap-3">
                <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 size-4 shrink-0 text-emerald-300">
                  <path d="m3.5 8.5 3 3 6-7" />
                </svg>
                50 monitors
              </li>
              <li className="flex gap-3">
                <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 size-4 shrink-0 text-emerald-300">
                  <path d="m3.5 8.5 3 3 6-7" />
                </svg>
                Checks every 30 seconds
              </li>
              <li className="flex gap-3">
                <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 size-4 shrink-0 text-emerald-300">
                  <path d="m3.5 8.5 3 3 6-7" />
                </svg>
                Slack, SMS and phone-call alerts
              </li>
              <li className="flex gap-3">
                <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 size-4 shrink-0 text-emerald-300">
                  <path d="m3.5 8.5 3 3 6-7" />
                </svg>
                On-call rotations
              </li>
              <li className="flex gap-3">
                <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 size-4 shrink-0 text-emerald-300">
                  <path d="m3.5 8.5 3 3 6-7" />
                </svg>
                Status page on your own domain
              </li>
              <li className="flex gap-3">
                <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 size-4 shrink-0 text-emerald-300">
                  <path d="m3.5 8.5 3 3 6-7" />
                </svg>
                One year of history
              </li>
            </ul>
          </div>

          {/* Business */}
          <div className="flex flex-col rounded-2xl bg-white p-8 ring-1 ring-zinc-200 lg:rounded-l-none lg:ring-inset">
            <h3 className="text-lg font-semibold">Business</h3>
            <p className="mt-2 text-sm text-pretty text-zinc-600 lg:min-h-10">For companies with uptime written into their contracts.</p>
            <p className="mt-8 flex items-baseline gap-x-2">
              <span className="text-5xl font-semibold tracking-[-0.04em] tabular-nums">
                <span className="group-has-[#pricing-three-tier-yearly:checked]:hidden">$90</span>
                <span className="hidden group-has-[#pricing-three-tier-yearly:checked]:inline">$75</span>
              </span>
              <span className="text-sm text-zinc-600">per month</span>
            </p>
            <p className="mt-1 text-sm text-zinc-600">
              <span className="group-has-[#pricing-three-tier-yearly:checked]:hidden">Billed monthly</span>
              <span className="hidden group-has-[#pricing-three-tier-yearly:checked]:inline">$900 billed once a year</span>
            </p>
            <a
              href="#"
              className="mt-8 flex h-11 items-center justify-center rounded-lg bg-white text-sm font-semibold ring-1 ring-zinc-300 transition-colors ring-inset hover:bg-zinc-50 hover:ring-zinc-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            >
              Start a 14-day trial
            </a>
            <ul role="list" className="mt-8 space-y-3 border-t border-zinc-200 pt-8 text-sm text-zinc-700">
              <li className="font-medium text-zinc-950">Everything in Team, plus:</li>
              <li className="flex gap-3">
                <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 size-4 shrink-0 text-emerald-600">
                  <path d="m3.5 8.5 3 3 6-7" />
                </svg>
                250 monitors
              </li>
              <li className="flex gap-3">
                <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 size-4 shrink-0 text-emerald-600">
                  <path d="m3.5 8.5 3 3 6-7" />
                </svg>
                Checks every 10 seconds
              </li>
              <li className="flex gap-3">
                <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 size-4 shrink-0 text-emerald-600">
                  <path d="m3.5 8.5 3 3 6-7" />
                </svg>
                SAML single sign-on
              </li>
              <li className="flex gap-3">
                <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 size-4 shrink-0 text-emerald-600">
                  <path d="m3.5 8.5 3 3 6-7" />
                </svg>
                Audit log
              </li>
              <li className="flex gap-3">
                <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 size-4 shrink-0 text-emerald-600">
                  <path d="m3.5 8.5 3 3 6-7" />
                </svg>
                Monthly SLA reports
              </li>
              <li className="flex gap-3">
                <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 size-4 shrink-0 text-emerald-600">
                  <path d="m3.5 8.5 3 3 6-7" />
                </svg>
                Support that answers within an hour
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-14 text-center text-sm text-zinc-600 lg:mt-20">
          Prices in US dollars, before tax. Monitoring more than 250 endpoints?{' '}
          <a
            href="#"
            className="rounded-sm font-medium text-zinc-950 underline decoration-zinc-950/30 underline-offset-4 transition-colors hover:decoration-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
          >
            Talk to us
          </a>
        </p>
      </div>
    </section>
  )
}
