export default function InputsAddressBlock() {
  return (
    <fieldset className="w-72 min-w-0 text-neutral-900 sm:w-[28rem]">
      <legend className="sr-only">Shipping address</legend>
      <div className="grid gap-4">
        <div>
          <label htmlFor="address-country" className="mb-1.5 block text-sm font-medium">Country or region</label>
          <div className="relative">
            <select id="address-country" name="country" autoComplete="country" defaultValue="" className="h-10 w-full min-w-0 appearance-none rounded-md border border-neutral-300 bg-white pr-10 pl-3 text-sm hover:border-neutral-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
              <option value="" disabled>Select a country</option>
              <option value="first">First country</option>
              <option value="second">Second country</option>
            </select>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="pointer-events-none absolute top-3 right-3 size-4 text-neutral-500"><path d="m6 9 6 6 6-6" /></svg>
          </div>
        </div>
        <div>
          <label htmlFor="address-line1" className="mb-1.5 block text-sm font-medium">Street address</label>
          <input id="address-line1" name="address-line1" type="text" autoComplete="address-line1" placeholder="House number and street" className="h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 hover:border-neutral-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" />
          <input id="address-line2" name="address-line2" type="text" autoComplete="address-line2" aria-label="Address line 2 (optional)" placeholder="Apartment, suite or unit (optional)" className="mt-2 h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 hover:border-neutral-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" />
        </div>
        <div className="grid grid-cols-[1fr_7rem] gap-x-3 gap-y-4 sm:grid-cols-3">
          <div className="col-span-2 min-w-0 sm:col-span-1">
            <label htmlFor="address-city" className="mb-1.5 block text-sm font-medium">City</label>
            <input id="address-city" name="city" type="text" autoComplete="address-level2" placeholder="City or town" className="h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 hover:border-neutral-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" />
          </div>
          <div className="min-w-0">
            <label htmlFor="address-region" className="mb-1.5 block text-sm font-medium">Region</label>
            <input id="address-region" name="region" type="text" autoComplete="address-level1" placeholder="State or province" className="h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 hover:border-neutral-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" />
          </div>
          <div className="min-w-0">
            <label htmlFor="address-postal" className="mb-1.5 block text-sm font-medium">Postal code</label>
            <input id="address-postal" name="postal-code" type="text" autoComplete="postal-code" placeholder="00000" className="h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 hover:border-neutral-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" />
          </div>
        </div>
      </div>
    </fieldset>
  )
}
