export default function LoginSplitMedia() {
  return (
    <section className="grid min-h-[720px] bg-white text-neutral-900 lg:grid-cols-2">
      <div className="p-4">
        <div role="img" aria-label="Image placeholder: account access visual" className="flex h-48 items-center justify-center rounded-lg bg-neutral-100 text-neutral-400 sm:h-72 lg:h-full">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-5-5L5 21" /></svg>
        </div>
      </div>
      <div className="flex flex-col gap-12 px-6 py-8 sm:p-10">
        <div className="flex items-center gap-2 font-semibold"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-6"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg><span>Logo</span></div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-sm">
            <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Sign in</h1>
            <p className="mt-4 text-lg text-pretty text-neutral-600">A brief welcome and account-access explanation.</p>
            <form className="mt-8 grid gap-5">
              <div><label htmlFor="login-split-media-email" className="block text-sm font-medium text-neutral-900">Email</label><input id="login-split-media-email" name="email" type="email" autoComplete="username" required placeholder="name@example.com" className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" /></div>
              <div><label htmlFor="login-split-media-password" className="block text-sm font-medium text-neutral-900">Password</label><input id="login-split-media-password" name="password" type="password" autoComplete="current-password" required className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" /></div>
              <div className="flex flex-wrap items-center justify-between gap-3"><label className="inline-flex items-center gap-2 text-sm text-neutral-600"><input name="remember" type="checkbox" className="size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" />Remember me</label><span className="text-sm"><a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Forgot password?</a></span></div>
              <button type="submit" className="w-full inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Sign in</button>
            </form>
            <p className="mt-6 text-sm text-neutral-500">No account? <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Sign up</a></p>
          </div>
        </div>
        <footer className="flex flex-wrap items-center justify-between gap-4 text-sm text-neutral-500">
          <p>© 2026</p>
          <div className="flex gap-4"><a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Privacy</a><a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Terms</a></div>
        </footer>
      </div>
    </section>
  )
}
