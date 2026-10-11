export default function SignupReferralCode() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="grid items-start gap-12 md:grid-cols-2">
          <form>
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                Join with a referral
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-pretty text-neutral-600">
                Explain how a referral changes the account setup.
              </p>
            </div>
            <div className="mt-8 space-y-6">
              <div className="min-w-0">
                <label
                  htmlFor="signup-referral-code-referral"
                  className="block text-sm font-medium"
                >
                  Referral code
                </label>
                <input
                  id="signup-referral-code-referral"
                  name="referral"
                  type="text"
                  placeholder="ABCD-1234"
                  required
                  aria-describedby="signup-referral-code-referral-hint"
                  className="mt-2 h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                />
                <p
                  id="signup-referral-code-referral-hint"
                  className="mt-2 text-sm text-neutral-600"
                >
                  Enter the code shared by an existing member.
                </p>
              </div>
              <div className="min-w-0">
                <label
                  htmlFor="signup-referral-code-email"
                  className="block text-sm font-medium"
                >
                  Email
                </label>
                <input
                  id="signup-referral-code-email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                  autoComplete="email"
                  className="mt-2 h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                />
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Continue
              </button>
            </div>
            <p className="mt-4 text-sm">
              <a
                href="#"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Continue without a code
              </a>
            </p>
          </form>
          <aside className="rounded-lg border border-neutral-200 p-6">
            <p className="text-sm font-medium text-neutral-500">
              Referral overview
            </p>
            <h2 className="mt-3 text-lg font-semibold">
              Account benefit title
            </h2>
            <p className="mt-3 text-sm text-neutral-600">
              Short explanation of the benefit granted by an eligible referral.
            </p>
            <dl className="mt-6 space-y-4">
              <div className="flex justify-between gap-4">
                <dt className="text-sm text-neutral-600">Offer duration</dt>
                <dd className="text-sm font-medium">30 days</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-sm text-neutral-600">Account type</dt>
                <dd className="text-sm font-medium">Individual</dd>
              </div>
            </dl>
            <p className="mt-6 text-sm">
              <a
                href="#"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Offer terms
              </a>
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}
