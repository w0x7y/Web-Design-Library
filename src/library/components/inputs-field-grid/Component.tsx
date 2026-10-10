export default function InputsFieldGrid() {
  return (
    <div className="grid w-72 gap-4 text-neutral-900 sm:w-[26rem]">
      <div>
        <label htmlFor="grid-name" className="mb-1.5 block text-sm font-medium">Full name</label>
        <input id="grid-name" name="name" type="text" autoComplete="name" aria-describedby="grid-hint" placeholder="Enter full name" className="h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 hover:border-neutral-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" />
      </div>
      <div className="grid grid-cols-[1fr_6rem] gap-3">
        <div className="min-w-0">
          <label htmlFor="grid-city" className="mb-1.5 block text-sm font-medium">City</label>
          <input id="grid-city" name="city" type="text" autoComplete="address-level2" aria-describedby="grid-hint" placeholder="Enter city" className="h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 hover:border-neutral-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" />
        </div>
        <div className="min-w-0">
          <label htmlFor="grid-postal" className="mb-1.5 block text-sm font-medium">Postal code</label>
          <input id="grid-postal" name="postal-code" type="text" autoComplete="postal-code" aria-describedby="grid-hint" placeholder="00000" className="h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 hover:border-neutral-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="min-w-0">
          <label htmlFor="grid-country" className="mb-1.5 block text-sm font-medium">Country</label>
          <div className="relative">
            <select id="grid-country" name="country" autoComplete="country-name" aria-describedby="grid-hint" defaultValue="" className="h-10 w-full min-w-0 appearance-none rounded-md border border-neutral-300 bg-white pr-10 pl-3 text-sm hover:border-neutral-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
              <option value="" disabled>Select</option>
              <option value="first">First option</option>
              <option value="second">Other option</option>
            </select>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="pointer-events-none absolute top-3 right-3 size-4 text-neutral-500"><path d="m6 9 6 6 6-6" /></svg>
          </div>
        </div>
        <div className="min-w-0">
          <label htmlFor="grid-phone" className="mb-1.5 block text-sm font-medium">Phone</label>
          <input id="grid-phone" name="phone" type="tel" autoComplete="tel" aria-describedby="grid-hint" placeholder="Enter phone" className="h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 hover:border-neutral-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" />
        </div>
      </div>
      <p id="grid-hint" className="sr-only">Use the contact details for this account.</p>
    </div>
  )
}
