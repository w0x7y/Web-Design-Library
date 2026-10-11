export default function LoginSplitContext() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 sm:py-24 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div>
          <p className="text-sm font-medium text-neutral-500">Account context</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Headline explaining what your account unlocks</h1>
          <p className="mt-4 text-lg text-pretty text-neutral-600">A short introduction to the content and support available after sign-in.</p>
          <ul role="list" className="mt-8">
            <li className="flex gap-4 border-t border-neutral-200 py-5"><span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5"><circle cx="12" cy="8" r="4" /><path d="M4 21v-2a8 8 0 0 1 16 0v2" /></svg></span><div><h2 className="text-base font-semibold">Account access</h2><p className="mt-1 text-sm text-neutral-600">One line naming the content available after sign-in.</p></div></li>
            <li className="flex gap-4 border-t border-neutral-200 py-5"><span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5"><rect x="5" y="10" width="14" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg></span><div><h2 className="text-base font-semibold">Account protection</h2><p className="mt-1 text-sm text-neutral-600">A short note explaining how access is protected.</p></div></li>
            <li className="flex gap-4 border-t border-neutral-200 py-5"><span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5"><path d="m5 12 4 4L19 6" /></svg></span><div><h2 className="text-base font-semibold">Availability note</h2><p className="mt-1 text-sm text-neutral-600">Brief status or support information for members.</p></div></li>
          </ul>
        </div>
        <div className="rounded-lg border border-neutral-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Sign in</h2>
          <form className="mt-6 grid gap-5">
            <div><label htmlFor="login-split-context-email" className="block text-sm font-medium text-neutral-900">Email</label><input id="login-split-context-email" name="email" type="email" autoComplete="username" required placeholder="name@example.com" className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" /></div>
            <div><label htmlFor="login-split-context-password" className="block text-sm font-medium text-neutral-900">Password</label><input id="login-split-context-password" name="password" type="password" autoComplete="current-password" required className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" /></div>
            <span className="text-sm"><a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Forgot password?</a></span>
            <button type="submit" className="w-full inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Sign in</button>
          </form>
          <p className="mt-6 border-t border-neutral-200 pt-6 text-sm text-neutral-500">Hint about which account to use for access.</p>
        </div>
      </div>
    </section>
  )
}
