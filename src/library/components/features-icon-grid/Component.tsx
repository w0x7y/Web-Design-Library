// Fonts: Libre Franklin (https://fonts.google.com/specimen/Libre+Franklin)
export default function FeaturesIconGrid() {
  return (
    <section className="bg-white font-['Libre_Franklin',ui-sans-serif,system-ui,sans-serif] text-slate-950 antialiased">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid gap-x-12 gap-y-6 lg:grid-cols-12 lg:items-end">
          <h2 className="text-4xl leading-[1.05] font-semibold tracking-[-0.03em] text-balance sm:text-5xl lg:col-span-7 lg:text-[3.5rem]">
            Every card, receipt and approval in one ledger.
          </h2>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-lg text-pretty text-slate-600">
              Halden replaces the expense spreadsheet, the shared company card and the approvals inbox with one system
              that your finance team and your auditors can both read.
            </p>
            <a
              href="#"
              className="group mt-5 inline-flex items-center gap-1.5 rounded-sm text-[0.9375rem] font-semibold text-blue-700 underline decoration-blue-700/30 decoration-2 underline-offset-[0.3em] transition-colors hover:decoration-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
            >
              Explore the platform
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4 transition-transform group-hover:translate-x-0.5"
              >
                <path d="M2.5 8h10M8.5 4l4 4-4 4" />
              </svg>
            </a>
          </div>
        </div>

        <ul role="list" className="mt-16 grid gap-x-12 gap-y-14 sm:grid-cols-2 lg:mt-24 lg:grid-cols-3 lg:gap-y-16">
          <li className="border-t border-slate-200">
            {/* The icon tile and plan label sit on the rule, like entries on a ledger line */}
            <div className="-mt-[1.375rem] flex items-center justify-between gap-4">
              <span className="flex size-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700 ring-1 ring-blue-700/15 ring-inset">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-6">
                  <rect x="3" y="3.5" width="7.5" height="5.5" rx="1.5" fill="currentColor" fillOpacity="0.2" />
                  <path d="M6.75 9v3.75a3 3 0 0 0 3 3h3.75" />
                  <circle cx="17.25" cy="15.75" r="3.75" />
                  <path d="m15.75 15.85 1.1 1.1 2-2.2" />
                </svg>
              </span>
              <span className="bg-white pl-3 text-[0.8125rem] font-medium text-slate-500">All plans</span>
            </div>
            <h3 className="mt-6 text-lg font-semibold tracking-[-0.01em]">Approval rules</h3>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-pretty text-slate-600">
              Route every request by amount, team and vendor. Approvers sign off from email or chat in a single tap.
            </p>
          </li>
          <li className="border-t border-slate-200">
            <div className="-mt-[1.375rem] flex items-center justify-between gap-4">
              <span className="flex size-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700 ring-1 ring-blue-700/15 ring-inset">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-6">
                  <path d="M6.5 5h12.25a2.25 2.25 0 0 1 2.25 2.25V15" />
                  <rect x="3" y="8" width="15" height="11" rx="2" fill="currentColor" fillOpacity="0.2" />
                  <path d="M3 11.75h15M6.25 15.5h3" />
                </svg>
              </span>
              <span className="bg-white pl-3 text-[0.8125rem] font-medium text-slate-500">All plans</span>
            </div>
            <h3 className="mt-6 text-lg font-semibold tracking-[-0.01em]">Virtual cards</h3>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-pretty text-slate-600">
              Issue a card for each vendor with its own limit and expiry date, then freeze it the day a contract ends.
            </p>
          </li>
          <li className="border-t border-slate-200">
            <div className="-mt-[1.375rem] flex items-center justify-between gap-4">
              <span className="flex size-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700 ring-1 ring-blue-700/15 ring-inset">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-6">
                  <path d="M5.5 3.25h13v17.5l-2.17-1.3-2.16 1.3-2.17-1.3-2.17 1.3-2.16-1.3-2.17 1.3Z" fill="currentColor" fillOpacity="0.2" />
                  <path d="M9 7.75h6M9 11h6" />
                  <path d="m9.25 14.75 1.75 1.75 3.5-3.5" />
                </svg>
              </span>
              <span className="bg-white pl-3 text-[0.8125rem] font-medium text-slate-500">All plans</span>
            </div>
            <h3 className="mt-6 text-lg font-semibold tracking-[-0.01em]">Receipt matching</h3>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-pretty text-slate-600">
              Forward a receipt or snap a photo. Halden reads the total and pairs it with the right transaction.
            </p>
          </li>
          <li className="border-t border-slate-200">
            <div className="-mt-[1.375rem] flex items-center justify-between gap-4">
              <span className="flex size-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700 ring-1 ring-blue-700/15 ring-inset">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-6">
                  <path d="M10.75 5.75a7.5 7.5 0 1 0 7.5 7.5h-7.5Z" />
                  <path d="M13.25 3.25a7.5 7.5 0 0 1 7.5 7.5h-7.5Z" fill="currentColor" fillOpacity="0.2" />
                </svg>
              </span>
              <span className="bg-white pl-3 text-[0.8125rem] font-medium text-slate-500">Growth and Scale</span>
            </div>
            <h3 className="mt-6 text-lg font-semibold tracking-[-0.01em]">Live budgets</h3>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-pretty text-slate-600">
              Each team sees what is left for the quarter, updated with every swipe rather than at the end of the month.
            </p>
          </li>
          <li className="border-t border-slate-200">
            <div className="-mt-[1.375rem] flex items-center justify-between gap-4">
              <span className="flex size-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700 ring-1 ring-blue-700/15 ring-inset">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-6">
                  <path d="M8.5 4.75H7A2.25 2.25 0 0 0 4.75 7v11.75A2.25 2.25 0 0 0 7 21h10a2.25 2.25 0 0 0 2.25-2.25V7A2.25 2.25 0 0 0 17 4.75h-1.5" />
                  <rect x="8.5" y="3" width="7" height="3.5" rx="1" fill="currentColor" fillOpacity="0.2" />
                  <path d="M8.5 11h7M8.5 14.25h7M8.5 17.5h4" />
                </svg>
              </span>
              <span className="bg-white pl-3 text-[0.8125rem] font-medium text-slate-500">Scale only</span>
            </div>
            <h3 className="mt-6 text-lg font-semibold tracking-[-0.01em]">Audit trail</h3>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-pretty text-slate-600">
              Every approval, edit and export is logged with who, when and why, and kept for seven years.
            </p>
          </li>
          <li className="border-t border-slate-200">
            <div className="-mt-[1.375rem] flex items-center justify-between gap-4">
              <span className="flex size-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700 ring-1 ring-blue-700/15 ring-inset">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-6">
                  <path d="M4.5 12a7.5 7.5 0 0 1 12.8-5.3L19.5 9" />
                  <path d="M19.5 4.5V9H15" />
                  <path d="M19.5 12a7.5 7.5 0 0 1-12.8 5.3L4.5 15" />
                  <path d="M4.5 19.5V15H9" />
                  <circle cx="12" cy="12" r="2.5" fill="currentColor" fillOpacity="0.2" />
                </svg>
              </span>
              <span className="bg-white pl-3 text-[0.8125rem] font-medium text-slate-500">Growth and Scale</span>
            </div>
            <h3 className="mt-6 text-lg font-semibold tracking-[-0.01em]">Ledger sync</h3>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-pretty text-slate-600">
              Coded transactions post to your accounting system overnight, so closing the month takes an afternoon.
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}
