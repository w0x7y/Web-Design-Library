export default function InputsPaymentCard() {
  return (
    <fieldset className="w-72 min-w-0 text-neutral-900 sm:w-[22rem]">
      <legend className="mb-4 text-base font-semibold">Card details</legend>
      <div className="grid gap-4">
        <div>
          <label htmlFor="payment-number" className="mb-1.5 block text-sm font-medium">Card number</label>
          <div className="relative">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="pointer-events-none absolute top-3 left-3 size-4 text-neutral-500"><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20M6 15h4" /></svg>
            <input id="payment-number" name="card-number" type="text" inputMode="numeric" autoComplete="cc-number" placeholder="0000 0000 0000 0000" className="h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white pr-3 pl-10 text-sm tabular-nums placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" />
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2">
            <div className="min-w-0">
              <label htmlFor="payment-expiry" className="mb-1.5 block text-sm font-medium">Expiry (MM / YY)</label>
              <input id="payment-expiry" name="card-expiry" type="text" inputMode="numeric" autoComplete="cc-exp" placeholder="MM / YY" className="relative h-10 w-full min-w-0 rounded-l-md border border-neutral-300 bg-white px-3 text-sm tabular-nums placeholder:text-neutral-500 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" />
            </div>
            <div className="min-w-0">
              <label htmlFor="payment-cvc" className="mb-1.5 block text-sm font-medium">Security code</label>
              <input id="payment-cvc" name="card-cvc" type="text" inputMode="numeric" autoComplete="cc-csc" maxLength={4} aria-describedby="payment-cvc-hint" placeholder="CVC" className="relative h-10 w-full min-w-0 rounded-r-md border border-l-0 border-neutral-300 bg-white px-3 text-sm tabular-nums placeholder:text-neutral-500 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" />
            </div>
          </div>
          <p id="payment-cvc-hint" className="mt-1.5 text-sm text-neutral-500">The 3 or 4 digits printed on the card.</p>
        </div>
        <div>
          <label htmlFor="payment-name" className="mb-1.5 block text-sm font-medium">Name on card</label>
          <input id="payment-name" name="card-name" type="text" autoComplete="cc-name" placeholder="Full name as shown on the card" className="h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" />
        </div>
      </div>
    </fieldset>
  )
}
