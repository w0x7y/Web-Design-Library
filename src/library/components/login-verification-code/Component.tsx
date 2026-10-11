export default function LoginVerificationCode() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <form>
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                Enter verification code
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-pretty text-neutral-600">
                Use the six-digit code sent to your account email.
              </p>
            </div>
            <fieldset className="mt-8">
              <legend className="text-sm font-medium">Verification code</legend>
              <div className="mt-3 grid grid-cols-6 gap-2">
                <div>
                  <label
                    htmlFor="login-verification-code-digit-1"
                    className="sr-only"
                  >
                    Digit 1
                  </label>
                  <input
                    id="login-verification-code-digit-1"
                    name="digit-1"
                    aria-describedby="login-verification-code-code-hint"
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]"
                    maxLength={1}
                    required
                    autoComplete="one-time-code"
                    className="h-12 w-full min-w-0 rounded-md border border-neutral-300 text-center text-lg font-mono focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  />
                </div>
                <div>
                  <label
                    htmlFor="login-verification-code-digit-2"
                    className="sr-only"
                  >
                    Digit 2
                  </label>
                  <input
                    id="login-verification-code-digit-2"
                    name="digit-2"
                    aria-describedby="login-verification-code-code-hint"
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]"
                    maxLength={1}
                    required
                    className="h-12 w-full min-w-0 rounded-md border border-neutral-300 text-center text-lg font-mono focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  />
                </div>
                <div>
                  <label
                    htmlFor="login-verification-code-digit-3"
                    className="sr-only"
                  >
                    Digit 3
                  </label>
                  <input
                    id="login-verification-code-digit-3"
                    name="digit-3"
                    aria-describedby="login-verification-code-code-hint"
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]"
                    maxLength={1}
                    required
                    className="h-12 w-full min-w-0 rounded-md border border-neutral-300 text-center text-lg font-mono focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  />
                </div>
                <div>
                  <label
                    htmlFor="login-verification-code-digit-4"
                    className="sr-only"
                  >
                    Digit 4
                  </label>
                  <input
                    id="login-verification-code-digit-4"
                    name="digit-4"
                    aria-describedby="login-verification-code-code-hint"
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]"
                    maxLength={1}
                    required
                    className="h-12 w-full min-w-0 rounded-md border border-neutral-300 text-center text-lg font-mono focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  />
                </div>
                <div>
                  <label
                    htmlFor="login-verification-code-digit-5"
                    className="sr-only"
                  >
                    Digit 5
                  </label>
                  <input
                    id="login-verification-code-digit-5"
                    name="digit-5"
                    aria-describedby="login-verification-code-code-hint"
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]"
                    maxLength={1}
                    required
                    className="h-12 w-full min-w-0 rounded-md border border-neutral-300 text-center text-lg font-mono focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  />
                </div>
                <div>
                  <label
                    htmlFor="login-verification-code-digit-6"
                    className="sr-only"
                  >
                    Digit 6
                  </label>
                  <input
                    id="login-verification-code-digit-6"
                    name="digit-6"
                    aria-describedby="login-verification-code-code-hint"
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]"
                    maxLength={1}
                    required
                    className="h-12 w-full min-w-0 rounded-md border border-neutral-300 text-center text-lg font-mono focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  />
                </div>
              </div>
            </fieldset>
            <p
              id="login-verification-code-code-hint"
              className="mt-4 text-sm text-neutral-600"
            >
              Enter each digit separately. Codes expire after 10 minutes.
            </p>
            <div className="mt-6">
              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Verify account
              </button>
            </div>
          </form>
          <aside className="rounded-lg bg-neutral-50 p-6">
            <h2 className="text-base font-semibold">Delivery details</h2>
            <p className="mt-3 break-words text-sm text-neutral-600">
              name@example.com
            </p>
            <p className="mt-3 text-sm text-neutral-600">
              Check your inbox and spam folder.
            </p>
            <div className="mt-6 space-y-4 text-sm">
              <p>
                <a
                  href="#"
                  className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  Send another code
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  Change email address
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  Use recovery method
                </a>
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
