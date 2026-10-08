// Fonts: Atkinson Hyperlegible Next (https://fonts.google.com/specimen/Atkinson+Hyperlegible+Next)
export default function FooterColumns() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 font-['Atkinson_Hyperlegible_Next',ui-sans-serif,system-ui,sans-serif] text-slate-950 antialiased">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 py-16 lg:grid-cols-12 lg:gap-8 lg:py-20">
          <div className="md:grid md:grid-cols-2 md:gap-8 lg:col-span-4 lg:block">
            <div>
              <a href="#" className="inline-flex items-center gap-2.5 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700">
                <span className="flex size-9 items-center justify-center rounded-lg bg-orange-600 text-white">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                    <path d="M12 21s-6.5-5.75-6.5-11.25a6.5 6.5 0 0 1 13 0C18.5 15.25 12 21 12 21Z" />
                    <path d="m9.25 9.75 2 2 3.5-3.5" />
                  </svg>
                </span>
                <span className="text-xl font-bold tracking-[-0.01em]">Fieldmark</span>
              </a>
              <p className="mt-5 max-w-xs text-[0.9375rem] leading-relaxed text-pretty text-slate-600">
                Scheduling, dispatch and invoicing for field service teams, from five vans to five thousand.
              </p>
            </div>
            <div className="mt-8 md:mt-0 lg:mt-8">
              <dl>
                <dt className="text-sm font-bold">Talk to sales</dt>
                <dd className="mt-1.5">
                  <a href="tel:+17205550142" className="rounded-sm text-lg font-bold tabular-nums underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700">
                    +1 720 555 0142
                  </a>
                </dd>
                <dd className="mt-0.5 text-sm text-slate-600">Weekdays, 7 am to 6 pm Mountain Time</dd>
              </dl>
              <a
                href="#"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white py-1.5 pr-3.5 pl-3 text-sm font-medium text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700"
              >
                <span aria-hidden="true" className="size-2 rounded-full bg-emerald-500 ring-4 ring-emerald-500/15" />
                All systems operational
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 lg:col-span-8">
            <nav aria-labelledby="footer-columns-product">
              <h2 id="footer-columns-product" className="text-sm font-bold">Product</h2>
              <ul className="mt-4 space-y-3 text-[0.9375rem] text-slate-600">
                <li><a href="#" className="rounded-sm underline-offset-4 transition-colors hover:text-slate-950 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700">Scheduling</a></li>
                <li><a href="#" className="rounded-sm underline-offset-4 transition-colors hover:text-slate-950 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700">Dispatch board</a></li>
                <li><a href="#" className="rounded-sm underline-offset-4 transition-colors hover:text-slate-950 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700">Technician app</a></li>
                <li><a href="#" className="rounded-sm underline-offset-4 transition-colors hover:text-slate-950 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700">Quotes and invoices</a></li>
                <li><a href="#" className="rounded-sm underline-offset-4 transition-colors hover:text-slate-950 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700">Integrations</a></li>
                <li><a href="#" className="rounded-sm underline-offset-4 transition-colors hover:text-slate-950 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700">Pricing</a></li>
              </ul>
            </nav>
            <nav aria-labelledby="footer-columns-industries">
              <h2 id="footer-columns-industries" className="text-sm font-bold">Industries</h2>
              <ul className="mt-4 space-y-3 text-[0.9375rem] text-slate-600">
                <li><a href="#" className="rounded-sm underline-offset-4 transition-colors hover:text-slate-950 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700">Heating and cooling</a></li>
                <li><a href="#" className="rounded-sm underline-offset-4 transition-colors hover:text-slate-950 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700">Plumbing</a></li>
                <li><a href="#" className="rounded-sm underline-offset-4 transition-colors hover:text-slate-950 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700">Electrical</a></li>
                <li><a href="#" className="rounded-sm underline-offset-4 transition-colors hover:text-slate-950 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700">Landscaping</a></li>
                <li><a href="#" className="rounded-sm underline-offset-4 transition-colors hover:text-slate-950 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700">Pest control</a></li>
              </ul>
            </nav>
            <nav aria-labelledby="footer-columns-resources">
              <h2 id="footer-columns-resources" className="text-sm font-bold">Resources</h2>
              <ul className="mt-4 space-y-3 text-[0.9375rem] text-slate-600">
                <li><a href="#" className="rounded-sm underline-offset-4 transition-colors hover:text-slate-950 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700">Help centre</a></li>
                <li><a href="#" className="rounded-sm underline-offset-4 transition-colors hover:text-slate-950 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700">API reference</a></li>
                <li><a href="#" className="rounded-sm underline-offset-4 transition-colors hover:text-slate-950 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700">Customer stories</a></li>
                <li><a href="#" className="rounded-sm underline-offset-4 transition-colors hover:text-slate-950 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700">Webinars</a></li>
                <li><a href="#" className="rounded-sm underline-offset-4 transition-colors hover:text-slate-950 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700">Release notes</a></li>
              </ul>
            </nav>
            <nav aria-labelledby="footer-columns-company">
              <h2 id="footer-columns-company" className="text-sm font-bold">Company</h2>
              <ul className="mt-4 space-y-3 text-[0.9375rem] text-slate-600">
                <li><a href="#" className="rounded-sm underline-offset-4 transition-colors hover:text-slate-950 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700">About</a></li>
                <li className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <a href="#" className="rounded-sm underline-offset-4 transition-colors hover:text-slate-950 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700">Careers</a>
                  <span className="rounded-full bg-orange-100 px-2 py-0.5 text-xs font-bold text-orange-800">12 open roles</span>
                </li>
                <li><a href="#" className="rounded-sm underline-offset-4 transition-colors hover:text-slate-950 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700">Partners</a></li>
                <li><a href="#" className="rounded-sm underline-offset-4 transition-colors hover:text-slate-950 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700">Press</a></li>
                <li><a href="#" className="rounded-sm underline-offset-4 transition-colors hover:text-slate-950 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700">Contact sales</a></li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-slate-200 py-8 text-sm text-slate-600 lg:flex-row lg:items-center lg:gap-10">
          <p>© 2026 Fieldmark, Inc. Offices in Denver, Leeds and Melbourne.</p>
          <nav aria-label="Legal" className="lg:ml-auto">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              <li><a href="#" className="rounded-sm underline-offset-4 transition-colors hover:text-slate-950 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700">Privacy</a></li>
              <li><a href="#" className="rounded-sm underline-offset-4 transition-colors hover:text-slate-950 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700">Terms</a></li>
              <li><a href="#" className="rounded-sm underline-offset-4 transition-colors hover:text-slate-950 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700">Security</a></li>
              <li><a href="#" className="rounded-sm underline-offset-4 transition-colors hover:text-slate-950 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700">Accessibility</a></li>
              <li><a href="#" className="rounded-sm underline-offset-4 transition-colors hover:text-slate-950 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700">Cookie settings</a></li>
            </ul>
          </nav>
          <a href="#" className="inline-flex w-fit items-center gap-2 rounded-sm font-medium text-slate-950 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700">
            <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.25" className="size-4">
              <circle cx="8" cy="8" r="6.25" />
              <path d="M1.75 8h12.5M8 1.75c1.75 1.6 2.6 3.7 2.6 6.25S9.75 12.65 8 14.25C6.25 12.65 5.4 10.55 5.4 8S6.25 3.35 8 1.75Z" />
            </svg>
            <span className="sr-only">Region: </span>
            United States, English
          </a>
        </div>
      </div>
    </footer>
  )
}
