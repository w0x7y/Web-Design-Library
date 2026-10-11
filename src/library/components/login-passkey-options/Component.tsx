export default function LoginPasskeyOptions() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                Access with your device
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-pretty text-neutral-600">
                A short explanation of the preferred account verification
                method.
              </p>
            </div>
            <dl className="mt-8 space-y-5">
              <div>
                <dt className="text-base font-semibold">Device requirement</dt>
                <dd className="mt-1 text-sm text-neutral-600">
                  Describe supported device authentication.
                </dd>
              </div>
              <div>
                <dt className="text-base font-semibold">Recovery option</dt>
                <dd className="mt-1 text-sm text-neutral-600">
                  Explain when to use account credentials.
                </dd>
              </div>
            </dl>
          </div>
          <div className="min-w-0 rounded-lg border border-neutral-200 bg-white p-6">
            <h2 className="text-lg font-semibold">Use a saved passkey</h2>
            <p className="mt-2 text-sm text-neutral-600">
              Confirm access with your device security prompt.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 w-full"
              >
                Continue with passkey
              </a>
            </div>
            <details className="mt-6 border-t border-neutral-200 pt-6">
              <summary className="cursor-pointer text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
                Use a password instead
              </summary>
              <form className="mt-6 space-y-4">
                <div className="min-w-0">
                  <label
                    htmlFor="login-passkey-options-email"
                    className="block text-sm font-medium"
                  >
                    Email
                  </label>
                  <input
                    id="login-passkey-options-email"
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
                    htmlFor="login-passkey-options-password"
                    className="block text-sm font-medium"
                  >
                    Password
                  </label>
                  <input
                    id="login-passkey-options-password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="mt-2 h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 w-full"
                >
                  Sign in
                </button>
              </form>
            </details>
          </div>
        </div>
      </div>
    </section>
  )
}
