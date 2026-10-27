export default function SignupTrialCheckout() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto grid max-w-6xl items-start gap-x-16 gap-y-10 px-6 py-16 sm:py-24 lg:grid-cols-[minmax(0,1fr)_24rem]">
        <div>
          <p className="text-sm font-medium text-neutral-500">14-day free trial</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Start your free trial
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-pretty text-neutral-600">
            Create your account and add a payment method. Nothing is charged until the trial ends.
          </p>
        </div>
        <aside
          aria-labelledby="signup-trial-checkout-summary"
          className="rounded-lg border border-neutral-200 bg-neutral-50 p-6 lg:sticky lg:top-8 lg:col-start-2 lg:row-span-2 lg:row-start-1"
        >
          <h2 id="signup-trial-checkout-summary" className="text-base font-semibold">
            Order summary
          </h2>
          <div className="mt-4 flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="text-sm font-medium">Plan name</p>
              <p className="mt-1 text-sm text-neutral-500">Billed monthly, up to 10 members</p>
            </div>
            <a
              href="#"
              className="shrink-0 text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Change plan
            </a>
          </div>
          <dl className="mt-6 grid gap-3 border-t border-neutral-200 pt-6 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-neutral-600">Free trial</dt>
              <dd className="font-medium tabular-nums">14 days</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-neutral-600">First charge</dt>
              <dd className="font-medium tabular-nums">Nov 9, 2026</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-neutral-600">Then</dt>
              <dd className="font-medium tabular-nums">$29.00 / month</dd>
            </div>
            <div className="mt-3 flex items-baseline justify-between gap-4 border-t border-neutral-200 pt-6">
              <dt className="text-base font-semibold">Due today</dt>
              <dd className="text-2xl font-semibold tracking-tight tabular-nums">$0.00</dd>
            </div>
          </dl>
          <p className="mt-4 text-sm text-neutral-500">
            A reminder email goes out 3 days before the first charge. Cancel before then and you pay nothing.
          </p>
        </aside>
        <form>
          <fieldset>
            <legend className="text-base font-semibold">Account</legend>
            <div className="mt-4 grid gap-5 sm:grid-cols-2">
              <div className="min-w-0">
                <label htmlFor="signup-trial-checkout-name" className="block text-sm font-medium">
                  Full name
                </label>
                <input
                  id="signup-trial-checkout-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Alex Rivera"
                  className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                />
              </div>
              <div className="min-w-0">
                <label htmlFor="signup-trial-checkout-email" className="block text-sm font-medium">
                  Work email
                </label>
                <input
                  id="signup-trial-checkout-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="name@example.com"
                  className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                />
              </div>
              <div className="min-w-0 sm:col-span-2">
                <label htmlFor="signup-trial-checkout-password" className="block text-sm font-medium">
                  Password
                </label>
                <input
                  id="signup-trial-checkout-password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  minLength={12}
                  aria-describedby="signup-trial-checkout-password-hint"
                  className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                />
                <p id="signup-trial-checkout-password-hint" className="mt-2 text-sm text-neutral-500">
                  At least 12 characters.
                </p>
              </div>
            </div>
          </fieldset>
          <div className="mt-10 border-t border-neutral-200 pt-8">
            <fieldset aria-describedby="signup-trial-checkout-payment-hint">
              <legend className="text-base font-semibold">Payment</legend>
              <p id="signup-trial-checkout-payment-hint" className="mt-1 text-sm text-neutral-500">
                The card is saved for the first charge after the trial.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-5">
                <div className="col-span-2 min-w-0">
                  <label htmlFor="signup-trial-checkout-card" className="block text-sm font-medium">
                    Card number
                  </label>
                  <input
                    id="signup-trial-checkout-card"
                    name="card"
                    type="text"
                    inputMode="numeric"
                    autoComplete="cc-number"
                    required
                    placeholder="1234 1234 1234 1234"
                    className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  />
                </div>
                <div className="min-w-0">
                  <label htmlFor="signup-trial-checkout-expiry" className="block text-sm font-medium">
                    Expiry date
                  </label>
                  <input
                    id="signup-trial-checkout-expiry"
                    name="expiry"
                    type="text"
                    inputMode="numeric"
                    autoComplete="cc-exp"
                    required
                    placeholder="MM / YY"
                    className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  />
                </div>
                <div className="min-w-0">
                  <label htmlFor="signup-trial-checkout-cvc" className="block text-sm font-medium">
                    Security code
                  </label>
                  <input
                    id="signup-trial-checkout-cvc"
                    name="cvc"
                    type="text"
                    inputMode="numeric"
                    autoComplete="cc-csc"
                    required
                    placeholder="CVC"
                    className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  />
                </div>
              </div>
            </fieldset>
          </div>
          <label className="mt-8 flex items-start gap-3 text-sm text-neutral-600">
            <input
              type="checkbox"
              name="terms"
              required
              className="mt-0.5 size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            />
            <span>
              I agree to the{' '}
              <a
                href="#"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Terms
              </a>{' '}
              and allow a charge of $29.00 per month from Nov 9, 2026 until I cancel.
            </span>
          </label>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button
              type="submit"
              className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Start free trial
            </button>
            <p className="text-sm text-neutral-500">
              Already have an account?{' '}
              <a
                href="#"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Log in
              </a>
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
