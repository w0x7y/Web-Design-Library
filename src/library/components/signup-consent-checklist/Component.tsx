export default function SignupConsentChecklist() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Review your account preferences
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-pretty text-neutral-600">
            Explain which agreements are required and which are optional.
          </p>
        </div>
        <form className="mt-10">
          <fieldset className="divide-y divide-neutral-200 border-y border-neutral-200">
            <legend className="pb-4 text-base font-semibold">
              Agreements and preferences
            </legend>
            <div className="py-6">
              <div className="flex items-start gap-3">
                <input
                  id="signup-consent-checklist-terms"
                  name="terms"
                  value="terms"
                  type="checkbox"
                  aria-describedby="signup-consent-checklist-terms-hint"
                  required
                  className="mt-1 size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                />
                <div className="min-w-0">
                  <label
                    htmlFor="signup-consent-checklist-terms"
                    className="text-sm font-medium"
                  >
                    Accept terms of service
                  </label>
                  <p
                    id="signup-consent-checklist-terms-hint"
                    className="mt-1 text-sm text-neutral-600"
                  >
                    Required agreement for account access.
                  </p>
                </div>
              </div>
            </div>
            <div className="py-6">
              <div className="flex items-start gap-3">
                <input
                  id="signup-consent-checklist-privacy"
                  name="privacy"
                  value="privacy"
                  type="checkbox"
                  aria-describedby="signup-consent-checklist-privacy-hint"
                  required
                  className="mt-1 size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                />
                <div className="min-w-0">
                  <label
                    htmlFor="signup-consent-checklist-privacy"
                    className="text-sm font-medium"
                  >
                    Acknowledge privacy policy
                  </label>
                  <p
                    id="signup-consent-checklist-privacy-hint"
                    className="mt-1 text-sm text-neutral-600"
                  >
                    Explain how account information will be used.
                  </p>
                </div>
              </div>
            </div>
            <div className="py-6">
              <div className="flex items-start gap-3">
                <input
                  id="signup-consent-checklist-updates"
                  name="updates"
                  value="updates"
                  type="checkbox"
                  aria-describedby="signup-consent-checklist-updates-hint"
                  className="mt-1 size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                />
                <div className="min-w-0">
                  <label
                    htmlFor="signup-consent-checklist-updates"
                    className="text-sm font-medium"
                  >
                    Receive product updates
                  </label>
                  <p
                    id="signup-consent-checklist-updates-hint"
                    className="mt-1 text-sm text-neutral-600"
                  >
                    Optional email preference; change it at any time.
                  </p>
                </div>
              </div>
            </div>
          </fieldset>
          <div className="mt-8 grid items-end gap-4 rounded-lg bg-neutral-50 p-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto]">
            <div className="min-w-0">
              <label
                htmlFor="signup-consent-checklist-name"
                className="block text-sm font-medium"
              >
                Name
              </label>
              <input
                id="signup-consent-checklist-name"
                name="name"
                type="text"
                defaultValue="Alex Rivera"
                required
                className="mt-2 h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              />
            </div>
            <div className="min-w-0">
              <label
                htmlFor="signup-consent-checklist-email"
                className="block text-sm font-medium"
              >
                Email
              </label>
              <input
                id="signup-consent-checklist-email"
                name="email"
                type="email"
                placeholder="name@example.com"
                required
                autoComplete="email"
                className="mt-2 h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              />
            </div>
            <button
              type="submit"
              className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Create account
            </button>
          </div>
          <p className="mt-4 text-sm">
            <a
              href="#"
              className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Read full policies
            </a>
          </p>
        </form>
      </div>
    </section>
  )
}
