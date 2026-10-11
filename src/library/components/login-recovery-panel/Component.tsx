export default function LoginRecoveryPanel() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                Recover account access
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-pretty text-neutral-600">
                Explain what happens after a recovery request.
              </p>
            </div>
            <ol role="list" className="mt-8 space-y-6">
              <li className="flex gap-4">
                <span className="text-sm font-semibold">01</span>
                <div>
                  <h2 className="text-base font-semibold">
                    Enter account email
                  </h2>
                  <p className="mt-1 text-sm text-neutral-600">
                    Use the email linked to your account.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-sm font-semibold">02</span>
                <div>
                  <h2 className="text-base font-semibold">Check your inbox</h2>
                  <p className="mt-1 text-sm text-neutral-600">
                    Follow the time-limited recovery link.
                  </p>
                </div>
              </li>
            </ol>
          </div>
          <form className="min-w-0 rounded-lg border border-neutral-200 bg-white p-6">
            <h2 className="text-lg font-semibold">Request recovery link</h2>
            <div className="mt-6">
              <div className="min-w-0">
                <label
                  htmlFor="login-recovery-panel-email"
                  className="block text-sm font-medium"
                >
                  Email
                </label>
                <input
                  id="login-recovery-panel-email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                  autoComplete="email"
                  aria-describedby="login-recovery-panel-email-hint"
                  className="mt-2 h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                />
                <p
                  id="login-recovery-panel-email-hint"
                  className="mt-2 text-sm text-neutral-600"
                >
                  Check spam folders if the message does not arrive.
                </p>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 w-full"
              >
                Send recovery link
              </button>
            </div>
            <p className="mt-6 text-sm">
              <a
                href="#"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Back to sign in
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
