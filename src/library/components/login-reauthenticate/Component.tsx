export default function LoginReauthenticate() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-sm">
          <div className="text-center">
            <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Confirm it's you</h1>
            <p className="mt-3 text-sm text-pretty text-neutral-600">Your session expired after a period of inactivity. Enter your password to continue where you left off.</p>
          </div>
          <div className="mt-8 overflow-hidden rounded-lg border border-neutral-200 bg-white">
            <div className="flex flex-col items-center border-b border-neutral-200 bg-neutral-50 px-6 py-6 text-center">
              <span aria-hidden="true" className="flex size-16 items-center justify-center rounded-full bg-neutral-200 text-lg font-medium text-neutral-600">AR</span>
              <p className="mt-3 text-base font-semibold">Alex Rivera</p>
              <p className="w-full truncate text-sm text-neutral-500">alex@example.com</p>
            </div>
            <form className="grid gap-5 p-6">
              <input type="hidden" name="username" autoComplete="username" value="alex@example.com" />
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <label htmlFor="login-reauthenticate-password" className="block text-sm font-medium text-neutral-900">Password</label>
                  <span className="text-sm"><a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Forgot password?</a></span>
                </div>
                <input id="login-reauthenticate-password" name="password" type="password" autoComplete="current-password" required className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" />
              </div>
              <button type="submit" className="inline-flex h-11 w-full items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Continue</button>
            </form>
            <p className="border-t border-neutral-200 px-6 py-4 text-center text-sm text-neutral-500">Not you? <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Switch account</a></p>
          </div>
        </div>
      </div>
    </section>
  )
}
