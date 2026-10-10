export default function LoginCardOnMedia() {
  return (
    <section className="relative min-h-[640px] bg-white text-neutral-900">
      <div role="img" aria-label="Image placeholder: full-width account access visual" className="flex h-40 items-center justify-center bg-neutral-200 text-neutral-400 sm:absolute sm:inset-0 sm:h-full">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10 sm:absolute sm:left-1/4"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-5-5L5 21" /></svg>
      </div>
      <div className="relative mx-auto flex min-h-[480px] max-w-6xl items-center justify-center px-6 py-16 sm:min-h-[640px] sm:py-24 lg:justify-end">
        <div className="w-full max-w-sm rounded-lg border border-neutral-200 bg-white p-8 sm:shadow-lg">
          <div className="flex items-center gap-2 font-semibold"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-6"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg><span>Logo</span></div>
          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Sign in</h1>
          <form className="mt-8 grid gap-5">
            <div><label htmlFor="login-card-on-media-email" className="block text-sm font-medium text-neutral-900">Email</label><input id="login-card-on-media-email" name="email" type="email" autoComplete="username" required placeholder="name@example.com" className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" /></div>
            <div><label htmlFor="login-card-on-media-password" className="block text-sm font-medium text-neutral-900">Password</label><input id="login-card-on-media-password" name="password" type="password" autoComplete="current-password" required className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" /></div>
            <button type="submit" className="w-full inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Sign in</button>
          </form>
          <p className="mt-6 text-sm text-neutral-500">No account? <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Sign up</a></p>
        </div>
      </div>
    </section>
  )
}
