export default function SignupRoleSelection() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Choose how you will use your account
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-pretty text-neutral-600">
            A short explanation of how the selected purpose shapes onboarding.
          </p>
        </div>
        <form className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
          <fieldset>
            <legend className="mb-4 text-base font-semibold">
              Account purpose
            </legend>
            <div>
              <label className="flex cursor-pointer items-start gap-4 border-t border-neutral-200 py-6">
                <input
                  type="radio"
                  name="role"
                  value="personal"
                  aria-describedby="signup-role-selection-personal-hint"
                  defaultChecked
                  className="mt-1 size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                />
                <span className="min-w-0">
                  <span className="block text-base font-semibold">
                    Personal use
                  </span>
                  <span
                    id="signup-role-selection-personal-hint"
                    className="mt-2 block text-sm text-neutral-600"
                  >
                    Short benefit for an individual account.
                  </span>
                </span>
              </label>
              <label className="flex cursor-pointer items-start gap-4 border-t border-neutral-200 py-6">
                <input
                  type="radio"
                  name="role"
                  value="team"
                  aria-describedby="signup-role-selection-team-hint"
                  className="mt-1 size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                />
                <span className="min-w-0">
                  <span className="block text-base font-semibold">
                    Team use
                  </span>
                  <span
                    id="signup-role-selection-team-hint"
                    className="mt-2 block text-sm text-neutral-600"
                  >
                    Short benefit for a shared workspace.
                  </span>
                </span>
              </label>
              <label className="flex cursor-pointer items-start gap-4 border-t border-neutral-200 py-6">
                <input
                  type="radio"
                  name="role"
                  value="organization"
                  aria-describedby="signup-role-selection-organization-hint"
                  className="mt-1 size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                />
                <span className="min-w-0">
                  <span className="block text-base font-semibold">
                    Organization use
                  </span>
                  <span
                    id="signup-role-selection-organization-hint"
                    className="mt-2 block text-sm text-neutral-600"
                  >
                    Short benefit for managed access.
                  </span>
                </span>
              </label>
            </div>
          </fieldset>
          <div className="min-w-0 rounded-lg border border-neutral-200 bg-white p-6">
            <h2 className="text-lg font-semibold">Create your account</h2>
            <div className="mt-6 space-y-6">
              <div className="min-w-0">
                <label
                  htmlFor="signup-role-selection-email"
                  className="block text-sm font-medium"
                >
                  Email
                </label>
                <input
                  id="signup-role-selection-email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                  autoComplete="email"
                  className="mt-2 h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                />
              </div>
              <div className="min-w-0">
                <label
                  htmlFor="signup-role-selection-password"
                  className="block text-sm font-medium"
                >
                  Password
                </label>
                <input
                  id="signup-role-selection-password"
                  name="password"
                  type="password"
                  required
                  autoComplete="new-password"
                  aria-describedby="signup-role-selection-password-hint"
                  className="mt-2 h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                />
                <p
                  id="signup-role-selection-password-hint"
                  className="mt-2 text-sm text-neutral-600"
                >
                  Use at least 12 characters.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 w-full"
              >
                Create account
              </button>
            </div>
            <p className="mt-6 text-sm">
              <a
                href="#"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Already have an account?
              </a>
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
