export default function LoginCenteredCard() {
  return (
    <section className="bg-neutral-50 text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-sm rounded-lg border border-neutral-200 bg-white p-6 sm:p-8">
          <div className="flex items-center gap-2 font-semibold"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-6"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg><span>Logo</span></div>
          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Sign in</h1>
          <p className="mt-3 text-sm text-neutral-600">Short introduction for returning members.</p>
          <form className="mt-8 grid gap-5">
            <div><label htmlFor="login-centered-card-email" className="block text-sm font-medium text-neutral-900">Email</label><input id="login-centered-card-email" name="email" type="email" autoComplete="username" required placeholder="name@example.com" className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" /></div>
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <label htmlFor="login-centered-card-password" className="block text-sm font-medium text-neutral-900">Password</label>
                <span className="text-sm"><a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Forgot password?</a></span>
              </div>
              <input id="login-centered-card-password" name="password" type="password" autoComplete="current-password" required className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" />
            </div>
            <label className="inline-flex items-center gap-2 text-sm text-neutral-600"><input name="remember" type="checkbox" className="size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" />Remember me</label>
            <button type="submit" className="w-full inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Sign in</button>
          </form>
        </div>
        <p className="mt-6 text-center text-sm text-neutral-500">No account? <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Sign up</a></p>
      </div>
    </section>
  )
}
