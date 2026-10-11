export default function LoginMagicLink() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <div className="mx-auto max-w-md">
          <span aria-hidden="true" className="flex size-12 items-center justify-center rounded-md bg-neutral-100 text-neutral-900"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></svg></span>
          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Sign in with an email link</h1>
          <p className="mt-4 text-lg text-pretty text-neutral-600">Enter your email to receive a secure sign-in link.</p>
          <form className="mt-8 grid gap-5">
            <div><label htmlFor="login-magic-link-email" className="block text-sm font-medium text-neutral-900">Email</label><input id="login-magic-link-email" name="email" type="email" autoComplete="username" required placeholder="name@example.com" aria-describedby="login-magic-link-expiry" className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" /></div>
            <button type="submit" className="w-full inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Email me a sign-in link</button>
            <p id="login-magic-link-expiry" className="text-sm text-neutral-500">Hint describing how long the link remains valid.</p>
          </form>
          <details className="group mt-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-3 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
              Didn't get the email?
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 transition-transform group-open:rotate-180"><path d="m6 9 6 6 6-6" /></svg>
            </summary>
            <ul role="list" className="grid gap-3 pb-3 text-sm text-neutral-600">
              <li>Check that the email address matches your account.</li>
              <li>Look in the spam or junk folder.</li>
              <li>Wait a few minutes before requesting another link.</li>
            </ul>
          </details>
          <footer className="mt-6 border-t border-neutral-200 pt-6 text-sm"><a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Sign in with a password instead</a></footer>
        </div>
      </div>
    </section>
  )
}
