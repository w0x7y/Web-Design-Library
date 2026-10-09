// Fonts: Public Sans (https://fonts.google.com/specimen/Public+Sans)
export default function TogglesCorporate() {
  return (
    <section
      aria-labelledby="toggles-corporate-title"
      className="w-72 overflow-hidden rounded-xl border border-slate-200 bg-white font-['Public_Sans',ui-sans-serif,system-ui,sans-serif] text-slate-900 antialiased sm:w-[26rem]"
    >
      <div className="border-b border-slate-200 bg-slate-50 px-4 py-3.5 sm:px-5">
        <h2 id="toggles-corporate-title" className="text-[0.9375rem] font-semibold">
          Payroll notifications
        </h2>
        <p className="text-[0.8125rem] text-slate-600">Sent to d.okafor@meridian.co</p>
      </div>

      <ul role="list" className="divide-y divide-slate-200">
        <li className="flex items-center justify-between gap-4 px-4 py-3 sm:px-5">
          <div className="min-w-0">
            <label htmlFor="toggles-corporate-payslip" className="block cursor-pointer text-sm font-semibold">
              Payslip published
            </label>
            <p id="toggles-corporate-payslip-hint" className="text-[0.8125rem] text-slate-600">
              Email on each pay date
            </p>
          </div>
          <span className="relative flex shrink-0 items-center gap-2.5">
            <input
              id="toggles-corporate-payslip"
              type="checkbox"
              role="switch"
              defaultChecked
              aria-describedby="toggles-corporate-payslip-hint"
              className="peer absolute inset-0 z-10 size-full cursor-pointer appearance-none rounded-full opacity-0 disabled:pointer-events-none"
            />
            <span
              aria-hidden="true"
              className="h-6 w-11 rounded-full border-2 border-slate-500 bg-white transition-colors peer-checked:border-teal-700 peer-checked:bg-teal-700 peer-hover:border-slate-700 peer-hover:bg-slate-100 peer-checked:peer-hover:border-teal-800 peer-checked:peer-hover:bg-teal-800 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-teal-700 peer-disabled:border-slate-300 peer-disabled:bg-slate-100 peer-disabled:peer-checked:bg-slate-300"
            />
            <span
              aria-hidden="true"
              className="absolute top-1 left-1 flex size-4 items-center justify-center rounded-full bg-slate-500 text-slate-500 transition-[translate,background-color,color] peer-checked:translate-x-5 peer-checked:bg-white peer-checked:text-teal-700 peer-disabled:bg-slate-300 peer-disabled:text-slate-300 peer-disabled:peer-checked:bg-white peer-disabled:peer-checked:text-slate-500 [&>svg]:opacity-0 [&>svg]:transition-opacity peer-checked:[&>svg]:opacity-100"
            >
              <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-3">
                <path d="m3 6.25 2 2 4-4.5" />
              </svg>
            </span>
            <span
              aria-hidden="true"
              className="w-6 text-[0.8125rem] font-medium text-slate-600 after:content-['Off'] peer-checked:text-slate-900 peer-checked:after:content-['On'] peer-disabled:text-slate-500"
            />
          </span>
        </li>

        <li className="flex items-center justify-between gap-4 px-4 py-3 sm:px-5">
          <div className="min-w-0">
            <label htmlFor="toggles-corporate-timesheet" className="block cursor-pointer text-sm font-semibold">
              Timesheet reminders
            </label>
            <p id="toggles-corporate-timesheet-hint" className="text-[0.8125rem] text-slate-600">
              Fridays at 15:00
            </p>
          </div>
          <span className="relative flex shrink-0 items-center gap-2.5">
            <input
              id="toggles-corporate-timesheet"
              type="checkbox"
              role="switch"
              aria-describedby="toggles-corporate-timesheet-hint"
              className="peer absolute inset-0 z-10 size-full cursor-pointer appearance-none rounded-full opacity-0 disabled:pointer-events-none"
            />
            <span
              aria-hidden="true"
              className="h-6 w-11 rounded-full border-2 border-slate-500 bg-white transition-colors peer-checked:border-teal-700 peer-checked:bg-teal-700 peer-hover:border-slate-700 peer-hover:bg-slate-100 peer-checked:peer-hover:border-teal-800 peer-checked:peer-hover:bg-teal-800 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-teal-700 peer-disabled:border-slate-300 peer-disabled:bg-slate-100 peer-disabled:peer-checked:bg-slate-300"
            />
            <span
              aria-hidden="true"
              className="absolute top-1 left-1 flex size-4 items-center justify-center rounded-full bg-slate-500 text-slate-500 transition-[translate,background-color,color] peer-checked:translate-x-5 peer-checked:bg-white peer-checked:text-teal-700 peer-disabled:bg-slate-300 peer-disabled:text-slate-300 peer-disabled:peer-checked:bg-white peer-disabled:peer-checked:text-slate-500 [&>svg]:opacity-0 [&>svg]:transition-opacity peer-checked:[&>svg]:opacity-100"
            >
              <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-3">
                <path d="m3 6.25 2 2 4-4.5" />
              </svg>
            </span>
            <span
              aria-hidden="true"
              className="w-6 text-[0.8125rem] font-medium text-slate-600 after:content-['Off'] peer-checked:text-slate-900 peer-checked:after:content-['On'] peer-disabled:text-slate-500"
            />
          </span>
        </li>

        <li className="flex items-center justify-between gap-4 px-4 py-3 sm:px-5">
          <div className="min-w-0">
            <label htmlFor="toggles-corporate-approvals" className="block cursor-pointer text-sm font-semibold">
              Expense approvals
            </label>
            <p id="toggles-corporate-approvals-hint" className="text-[0.8125rem] text-slate-600">
              Push alert per request
            </p>
          </div>
          <span className="relative flex shrink-0 items-center gap-2.5">
            <input
              id="toggles-corporate-approvals"
              type="checkbox"
              role="switch"
              defaultChecked
              aria-describedby="toggles-corporate-approvals-hint"
              className="peer absolute inset-0 z-10 size-full cursor-pointer appearance-none rounded-full opacity-0 disabled:pointer-events-none"
            />
            <span
              aria-hidden="true"
              className="h-6 w-11 rounded-full border-2 border-slate-500 bg-white transition-colors peer-checked:border-teal-700 peer-checked:bg-teal-700 peer-hover:border-slate-700 peer-hover:bg-slate-100 peer-checked:peer-hover:border-teal-800 peer-checked:peer-hover:bg-teal-800 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-teal-700 peer-disabled:border-slate-300 peer-disabled:bg-slate-100 peer-disabled:peer-checked:bg-slate-300"
            />
            <span
              aria-hidden="true"
              className="absolute top-1 left-1 flex size-4 items-center justify-center rounded-full bg-slate-500 text-slate-500 transition-[translate,background-color,color] peer-checked:translate-x-5 peer-checked:bg-white peer-checked:text-teal-700 peer-disabled:bg-slate-300 peer-disabled:text-slate-300 peer-disabled:peer-checked:bg-white peer-disabled:peer-checked:text-slate-500 [&>svg]:opacity-0 [&>svg]:transition-opacity peer-checked:[&>svg]:opacity-100"
            >
              <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-3">
                <path d="m3 6.25 2 2 4-4.5" />
              </svg>
            </span>
            <span
              aria-hidden="true"
              className="w-6 text-[0.8125rem] font-medium text-slate-600 after:content-['Off'] peer-checked:text-slate-900 peer-checked:after:content-['On'] peer-disabled:text-slate-500"
            />
          </span>
        </li>

        <li className="flex items-center justify-between gap-4 px-4 py-3 sm:px-5">
          <div className="min-w-0">
            <label htmlFor="toggles-corporate-tax" className="block text-sm font-semibold text-slate-500">
              Year-end tax forms
            </label>
            <p id="toggles-corporate-tax-hint" className="flex items-center gap-1 text-[0.8125rem] text-slate-500">
              <svg aria-hidden="true" viewBox="0 0 16 16" fill="currentColor" className="size-3.5 shrink-0">
                <path
                  fillRule="evenodd"
                  d="M8 1.5a3 3 0 0 0-3 3V6.5h-.5A1.5 1.5 0 0 0 3 8v5a1.5 1.5 0 0 0 1.5 1.5h7A1.5 1.5 0 0 0 13 13V8a1.5 1.5 0 0 0-1.5-1.5H11V4.5a3 3 0 0 0-3-3Zm1.5 5V4.5a1.5 1.5 0 0 0-3 0V6.5h3Z"
                  clipRule="evenodd"
                />
              </svg>
              Set by your admin
            </p>
          </div>
          <span className="relative flex shrink-0 cursor-not-allowed items-center gap-2.5">
            <input
              id="toggles-corporate-tax"
              type="checkbox"
              role="switch"
              defaultChecked
              disabled
              aria-describedby="toggles-corporate-tax-hint"
              className="peer absolute inset-0 z-10 size-full cursor-pointer appearance-none rounded-full opacity-0 disabled:pointer-events-none"
            />
            <span
              aria-hidden="true"
              className="h-6 w-11 rounded-full border-2 border-slate-500 bg-white transition-colors peer-checked:border-teal-700 peer-checked:bg-teal-700 peer-hover:border-slate-700 peer-hover:bg-slate-100 peer-checked:peer-hover:border-teal-800 peer-checked:peer-hover:bg-teal-800 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-teal-700 peer-disabled:border-slate-300 peer-disabled:bg-slate-100 peer-disabled:peer-checked:bg-slate-300"
            />
            <span
              aria-hidden="true"
              className="absolute top-1 left-1 flex size-4 items-center justify-center rounded-full bg-slate-500 text-slate-500 transition-[translate,background-color,color] peer-checked:translate-x-5 peer-checked:bg-white peer-checked:text-teal-700 peer-disabled:bg-slate-300 peer-disabled:text-slate-300 peer-disabled:peer-checked:bg-white peer-disabled:peer-checked:text-slate-500 [&>svg]:opacity-0 [&>svg]:transition-opacity peer-checked:[&>svg]:opacity-100"
            >
              <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-3">
                <path d="m3 6.25 2 2 4-4.5" />
              </svg>
            </span>
            <span
              aria-hidden="true"
              className="w-6 text-[0.8125rem] font-medium text-slate-600 after:content-['Off'] peer-checked:text-slate-900 peer-checked:after:content-['On'] peer-disabled:text-slate-500"
            />
          </span>
        </li>
      </ul>
    </section>
  )
}
