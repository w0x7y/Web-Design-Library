export default function LoginAccountPicker() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Choose an account
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-pretty text-neutral-600">
            Select a saved identity, then confirm access.
          </p>
        </div>
        <form className="mt-10 grid items-start gap-8 md:grid-cols-2">
          <fieldset>
            <legend className="text-base font-semibold">Saved accounts</legend>
            <div className="mt-4 space-y-3">
              <label className="flex cursor-pointer items-center gap-4 rounded-lg border border-neutral-200 p-4 has-[:checked]:border-neutral-900 has-[:checked]:bg-neutral-50">
                <span
                  aria-hidden="true"
                  className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600"
                >
                  AR
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold">
                    Alex Rivera
                  </span>
                  <span className="block truncate text-sm text-neutral-500">
                    alex@example.com
                  </span>
                </span>
                <input
                  type="radio"
                  name="account"
                  value="AR"
                  aria-label="Sign in as Alex Rivera"
                  defaultChecked
                  className="size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                />
              </label>
              <label className="flex cursor-pointer items-center gap-4 rounded-lg border border-neutral-200 p-4 has-[:checked]:border-neutral-900 has-[:checked]:bg-neutral-50">
                <span
                  aria-hidden="true"
                  className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600"
                >
                  JL
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold">
                    Jordan Lee
                  </span>
                  <span className="block truncate text-sm text-neutral-500">
                    jordan@example.com
                  </span>
                </span>
                <input
                  type="radio"
                  name="account"
                  value="JL"
                  aria-label="Sign in as Jordan Lee"
                  className="size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                />
              </label>
            </div>
            <p className="mt-6">
              <a
                href="#"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Use another account
              </a>
            </p>
          </fieldset>
          <div className="min-w-0 rounded-lg border border-neutral-200 bg-white p-6">
            <h2 className="text-lg font-semibold">Confirm your identity</h2>
            <div className="mt-6">
              <div className="min-w-0">
                <label
                  htmlFor="login-account-picker-password"
                  className="block text-sm font-medium"
                >
                  Password
                </label>
                <input
                  id="login-account-picker-password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  aria-describedby="login-account-picker-password-hint"
                  className="mt-2 h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                />
                <p
                  id="login-account-picker-password-hint"
                  className="mt-2 text-sm text-neutral-600"
                >
                  Enter the password for the selected account.
                </p>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 w-full"
              >
                Sign in
              </button>
            </div>
            <p className="mt-4 text-sm">
              <a
                href="#"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Forgot password?
              </a>
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
