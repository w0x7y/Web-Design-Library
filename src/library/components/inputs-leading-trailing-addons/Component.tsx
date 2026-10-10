export default function InputsLeadingTrailingAddons() {
  return (
    <div className="grid w-72 gap-4 text-neutral-900 sm:w-80">
      <div>
        <label htmlFor="addons-website" className="mb-1.5 block text-sm font-medium">Website</label>
        <div className="flex h-10 items-center rounded-md border border-neutral-300 bg-white has-[input:focus-visible]:outline-2 has-[input:focus-visible]:outline-offset-2 has-[input:focus-visible]:outline-neutral-900">
          <span aria-hidden="true" className="flex h-full shrink-0 items-center rounded-l-md border-r border-neutral-300 bg-neutral-50 px-3 text-sm text-neutral-600">https://</span>
          <input id="addons-website" name="website" type="text" autoComplete="url" aria-describedby="addons-website-hint" placeholder="Enter domain" className="h-full w-full min-w-0 rounded-md border-0 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-hidden" />
        </div>
        <p id="addons-website-hint" className="sr-only">Enter the domain after https://.</p>
      </div>
      <div>
        <label htmlFor="addons-amount" className="mb-1.5 block text-sm font-medium">Amount</label>
        <div className="flex h-10 items-center rounded-md border border-neutral-300 bg-white has-[input:focus-visible]:outline-2 has-[input:focus-visible]:outline-offset-2 has-[input:focus-visible]:outline-neutral-900">
          <span aria-hidden="true" className="pl-3 text-sm text-neutral-500">$</span>
          <input id="addons-amount" name="amount" type="text" inputMode="decimal" aria-describedby="addons-amount-hint addons-currency" placeholder="0.00" className="h-full w-full min-w-0 rounded-md border-0 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-hidden" />
          <span id="addons-currency" className="pr-3 text-sm text-neutral-500">USD</span>
        </div>
        <p id="addons-amount-hint" className="sr-only">Enter the amount in US dollars.</p>
      </div>
      <div>
        <label htmlFor="addons-email" className="mb-1.5 block text-sm font-medium">Email</label>
        <div className="flex h-10 items-center rounded-md border border-neutral-300 bg-white has-[input:focus-visible]:outline-2 has-[input:focus-visible]:outline-offset-2 has-[input:focus-visible]:outline-neutral-900">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="ml-3 size-4 shrink-0 text-neutral-500"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
          <input id="addons-email" name="email" type="email" autoComplete="email" aria-describedby="addons-email-hint" placeholder="name@example.com" className="h-full w-full min-w-0 rounded-md border-0 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-hidden" />
        </div>
        <p id="addons-email-hint" className="sr-only">Enter your contact email address.</p>
      </div>
      <div>
        <label htmlFor="addons-reference" className="mb-1.5 block text-sm font-medium">Reference</label>
        <div className="flex h-10 items-center rounded-md border border-neutral-300 bg-white has-[input:focus-visible]:outline-2 has-[input:focus-visible]:outline-offset-2 has-[input:focus-visible]:outline-neutral-900">
          <input id="addons-reference" name="reference" type="text" readOnly defaultValue="AC-1042" aria-describedby="addons-reference-hint" placeholder="Reference ID" className="h-full w-full min-w-0 rounded-md border-0 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-hidden" />
          <button type="button" aria-label="Copy reference" className="inline-flex h-full shrink-0 items-center justify-center gap-1.5 rounded-r-md border-l border-neutral-300 bg-white px-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8V4H4v12h4" /></svg>
            Copy
          </button>
        </div>
        <p id="addons-reference-hint" className="sr-only">Read-only reference for this account.</p>
      </div>
    </div>
  )
}
