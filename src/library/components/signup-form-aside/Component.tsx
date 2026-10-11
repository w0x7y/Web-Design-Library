export default function SignupFormAside() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto grid max-w-6xl items-start gap-8 px-6 py-16 sm:py-24 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-lg border border-neutral-200 bg-white p-6 sm:p-8">
          <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading for registration details</h1>
          <p className="mt-4 text-lg text-pretty text-neutral-600">Brief introduction explaining which details are needed and why.</p>
          <form className="mt-8 grid gap-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div><label htmlFor="signup-form-aside-first-name" className="block text-sm font-medium text-neutral-900">First name</label><input id="signup-form-aside-first-name" name="first-name" type="text" autoComplete="given-name" required className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" /></div>
              <div><label htmlFor="signup-form-aside-last-name" className="block text-sm font-medium text-neutral-900">Last name</label><input id="signup-form-aside-last-name" name="last-name" type="text" autoComplete="family-name" required className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" /></div>
            </div>
            <div><label htmlFor="signup-form-aside-email" className="block text-sm font-medium text-neutral-900">Email</label><input id="signup-form-aside-email" name="email" type="email" autoComplete="email" required placeholder="name@example.com" className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" /></div>
            <div><label htmlFor="signup-form-aside-phone" className="block text-sm font-medium text-neutral-900">Phone</label><input id="signup-form-aside-phone" name="phone" type="tel" autoComplete="tel" aria-describedby="signup-form-aside-phone-hint" required placeholder="+1 555 010 1234" className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" /><p id="signup-form-aside-phone-hint" className="mt-2 text-sm text-neutral-500">Include the country code.</p></div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div><label htmlFor="signup-form-aside-city" className="block text-sm font-medium text-neutral-900">City</label><input id="signup-form-aside-city" name="city" type="text" autoComplete="address-level2" required className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" /></div>
              <div><label htmlFor="signup-form-aside-postcode" className="block text-sm font-medium text-neutral-900">Postcode</label><input id="signup-form-aside-postcode" name="postcode" type="text" autoComplete="postal-code" required className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" /></div>
            </div>
            <div>
              <label htmlFor="signup-form-aside-account-type" className="block text-sm font-medium text-neutral-900">Account type</label>
              <select id="signup-form-aside-account-type" name="account-type" autoComplete="off" required defaultValue="" aria-describedby="signup-form-aside-account-type-hint" className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
                <option value="" disabled>Select an account type</option>
                <option value="individual">Individual</option>
                <option value="team">Team</option>
              </select>
              <p id="signup-form-aside-account-type-hint" className="mt-2 text-sm text-neutral-500">Choose the option that describes your account.</p>
            </div>
            <div>
              <label className="flex items-start gap-3 text-sm text-neutral-600"><input type="checkbox" name="consent" required aria-describedby="signup-form-aside-consent-hint" className="mt-1 size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" /><span>I consent to the use of these details.</span></label>
              <p id="signup-form-aside-consent-hint" className="mt-2 text-sm text-neutral-500">Hint naming the purpose of this consent.</p>
            </div>
            <button type="submit" className="w-full inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 sm:w-auto sm:justify-self-start">Submit details</button>
          </form>
        </div>
        <aside className="rounded-lg bg-neutral-50 p-6">
          <h2 className="text-lg font-semibold">What happens next</h2>
          <ol role="list" className="mt-6 grid gap-6">
            <li className="flex gap-3"><span aria-hidden="true" className="flex size-6 shrink-0 items-center justify-center rounded-full border border-neutral-300 text-xs font-medium">1</span><div><h3 className="text-base font-semibold">Review your details</h3><p className="mt-1 text-sm text-neutral-600">A short note about checking the submitted information.</p></div></li>
            <li className="flex gap-3"><span aria-hidden="true" className="flex size-6 shrink-0 items-center justify-center rounded-full border border-neutral-300 text-xs font-medium">2</span><div><h3 className="text-base font-semibold">Confirm your account</h3><p className="mt-1 text-sm text-neutral-600">One line explaining the confirmation message.</p></div></li>
            <li className="flex gap-3"><span aria-hidden="true" className="flex size-6 shrink-0 items-center justify-center rounded-full border border-neutral-300 text-xs font-medium">3</span><div><h3 className="text-base font-semibold">Get started</h3><p className="mt-1 text-sm text-neutral-600">A brief description of the first account task.</p></div></li>
          </ol>
          <details className="group mt-8 border-t border-neutral-200 pt-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-2 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">How we use your data<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 transition-transform group-open:rotate-180"><path d="m6 9 6 6 6-6" /></svg></summary>
            <p className="pt-3 text-sm text-neutral-600">Explanation of which details are stored, how they support registration and where to read the data policy.</p>
          </details>
        </aside>
      </div>
    </section>
  )
}
