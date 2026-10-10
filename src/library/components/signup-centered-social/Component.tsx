export default function SignupCenteredSocial() {
  return (
    <section className="bg-neutral-50 text-neutral-900">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-md rounded-lg border border-neutral-200 bg-white p-6 sm:p-8">
          <header className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 font-semibold"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-6"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg><span>Logo</span></div>
            <p className="text-sm text-neutral-500">Have an account? <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Log in</a></p>
          </header>
          <h1 className="mt-8 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Create an account</h1>
          <p className="mt-3 text-sm text-neutral-600">Short introduction to joining and getting started.</p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <button type="button" aria-label="Continue with primary provider name" className="min-w-0 w-full gap-2 inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 max-sm:px-3"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0"><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M8 12h8M12 8v8" /></svg><span className="min-w-0 leading-tight"><span className="sm:hidden">Provider</span><span className="hidden sm:inline">Continue with provider name</span></span></button>
            <button type="button" aria-label="Continue with alternative provider name" className="min-w-0 w-full gap-2 inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 max-sm:px-3"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0"><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M8 12h8M12 8v8" /></svg><span className="min-w-0 leading-tight"><span className="sm:hidden">Provider</span><span className="hidden sm:inline">Continue with provider name</span></span></button>
          </div>
          <div className="my-6 flex items-center gap-3 text-sm text-neutral-500"><span aria-hidden="true" className="h-px flex-1 bg-neutral-200" />or<span aria-hidden="true" className="h-px flex-1 bg-neutral-200" /></div>
          <form className="grid gap-5">
            <div><label htmlFor="signup-centered-social-name" className="block text-sm font-medium text-neutral-900">Name</label><input id="signup-centered-social-name" name="name" type="text" autoComplete="name" required placeholder="Full name" className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" /></div>
            <div>
              <label htmlFor="signup-centered-social-email" className="block text-sm font-medium text-neutral-900">Email</label>
              <input id="signup-centered-social-email" name="email" type="email" autoComplete="email" required aria-invalid="true" aria-describedby="signup-centered-social-email-error" placeholder="name@example.com" className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" />
              <p id="signup-centered-social-email-error" className="mt-2 text-sm text-neutral-600">Error text explaining what to correct.</p>
            </div>
            <div><label htmlFor="signup-centered-social-password" className="block text-sm font-medium text-neutral-900">Password</label><input id="signup-centered-social-password" name="password" type="password" autoComplete="new-password" aria-describedby="signup-centered-social-password-hint" required minLength={12} className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" /><p id="signup-centered-social-password-hint" className="mt-2 text-sm text-neutral-500">Password rules and minimum length.</p></div>
            <button type="submit" className="w-full inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Create account</button>
          </form>
          <p className="mt-6 text-center text-sm text-neutral-500">By signing up, you accept the <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Terms</a> and <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Privacy policy</a>.</p>
        </div>
      </div>
    </section>
  )
}
