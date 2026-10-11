export default function LoginInlineRow() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="grid items-end gap-8 lg:grid-cols-[1.6fr_1fr]">
          <div><h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Headline for account access</h1><p className="mt-4 text-lg text-pretty text-neutral-600">A brief explanation of what members can access after sign-in.</p></div>
          <p className="text-sm text-neutral-500">Short account-status or access note.</p>
        </div>
        <form className="mt-8 grid items-end gap-4 border-t border-neutral-200 pt-8 lg:grid-cols-[1fr_1fr_auto]">
          <div><label htmlFor="login-inline-row-email" className="block text-sm font-medium text-neutral-900">Email</label><input id="login-inline-row-email" name="email" type="email" autoComplete="username" required placeholder="name@example.com" className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" /></div>
          <div><label htmlFor="login-inline-row-password" className="block text-sm font-medium text-neutral-900">Password</label><input id="login-inline-row-password" name="password" type="password" autoComplete="current-password" required className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" /></div>
          <button type="submit" className="w-full inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 lg:w-auto">Sign in</button>
        </form>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm"><a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Forgot password?</a><a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Create account</a></div>
      </div>
    </section>
  )
}
