// Fonts: Parkinsans (https://fonts.google.com/specimen/Parkinsans)
export default function SignupCardGradient() {
  return (
    <section className="relative isolate overflow-hidden bg-violet-100 px-4 py-12 font-['Parkinsans',ui-sans-serif,system-ui,sans-serif] text-violet-950 antialiased caret-violet-700 selection:bg-pink-200 sm:px-6 sm:py-16 lg:py-20">
      {/* Soft colour field, then crisp sound rings that the card's glass blurs where it covers them */}
      <div aria-hidden="true" className="absolute -top-40 -left-40 -z-10 size-[40rem] rounded-full bg-sky-200 blur-3xl" />
      <div aria-hidden="true" className="absolute top-1/3 -right-48 -z-10 size-[36rem] rounded-full bg-pink-200 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-56 left-1/4 -z-10 size-[34rem] rounded-full bg-amber-100 blur-3xl" />
      <svg aria-hidden="true" viewBox="0 0 1200 1200" fill="none" className="absolute top-1/2 left-1/2 -z-10 size-[75rem] -translate-1/2 overflow-visible">
        <defs>
          <linearGradient id="signup-card-gradient-spectrum" x1="300" y1="0" x2="1200" y2="800" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="oklch(75% 0.183 55.934)" />
            <stop offset="0.35" stopColor="oklch(65.6% 0.241 354.308)" />
            <stop offset="0.7" stopColor="oklch(60.6% 0.25 292.717)" />
            <stop offset="1" stopColor="oklch(74.6% 0.16 232.661)" />
          </linearGradient>
        </defs>
        <g stroke="url(#signup-card-gradient-spectrum)">
          <circle cx="790" cy="340" r="90" strokeWidth="28" />
          <circle cx="790" cy="340" r="150" strokeWidth="22" strokeOpacity="0.85" />
          <circle cx="790" cy="340" r="220" strokeWidth="17" strokeOpacity="0.7" />
          <circle cx="790" cy="340" r="300" strokeWidth="13" strokeOpacity="0.55" />
          <circle cx="790" cy="340" r="390" strokeWidth="9" strokeOpacity="0.4" />
          <circle cx="790" cy="340" r="490" strokeWidth="6" strokeOpacity="0.25" />
        </g>
      </svg>

      <div className="mx-auto max-w-[26rem] rounded-3xl bg-white/55 p-6 shadow-[inset_0_1px_0_rgb(255_255_255/0.9),0_32px_64px_-32px_rgb(46_16_101/0.45)] ring-1 ring-white/80 backdrop-blur-xl sm:p-8">
        <div className="flex items-center justify-between gap-4">
          <a
            href="#"
            className="flex w-fit items-center gap-2.5 rounded-full text-[1.0625rem] font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-700"
          >
            <span aria-hidden="true" className="flex size-8 items-center justify-center rounded-full bg-linear-to-br from-orange-400 via-pink-500 to-violet-600 text-white">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="size-[1.125rem]">
                <path d="M2 10c1.5 0 1.5-4 3-4s1.5 8 3 8 1.5-8 3-8 1.5 8 3 8 1.5-4 3-4" />
              </svg>
            </span>
            Overtone
          </a>
          <p className="text-sm text-violet-800">
            Have an account?{' '}
            <a
              href="#"
              className="rounded-sm font-semibold text-violet-950 underline decoration-violet-950/30 underline-offset-4 transition-colors hover:decoration-violet-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-700"
            >
              Log in
            </a>
          </p>
        </div>

        <h1 className="mt-8 text-[1.75rem] leading-8 font-semibold tracking-[-0.02em] text-balance">Write the next one together</h1>
        <p className="mt-2 text-[0.9375rem]/6 text-violet-800">Free for three collaborators. No card needed.</p>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            type="button"
            className="flex h-11 cursor-pointer items-center justify-center gap-2 rounded-xl bg-white/80 text-sm font-medium ring-1 ring-violet-950/10 transition-colors hover:bg-white hover:ring-violet-950/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-700"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="size-[1.125rem]">
              <path d="M16.37 12.6c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.77-3.32-1.8-1.41-.14-2.76.83-3.47.83-.72 0-1.82-.81-3-.79-1.54.02-2.96.9-3.76 2.27-1.6 2.78-.41 6.9 1.15 9.16.76 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.97-.74 1.38 0 1.77.74 2.98.72 1.24-.02 2.02-1.12 2.77-2.23.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.4-.92-2.42-3.66ZM14.1 5.84c.63-.77 1.06-1.83.94-2.89-.91.04-2.02.61-2.67 1.37-.58.67-1.1 1.76-.96 2.8 1.02.08 2.06-.52 2.69-1.28Z" />
            </svg>
            <span>
              <span className="sr-only">Sign up with </span>Apple
            </span>
          </button>
          <button
            type="button"
            className="flex h-11 cursor-pointer items-center justify-center gap-2 rounded-xl bg-white/80 text-sm font-medium ring-1 ring-violet-950/10 transition-colors hover:bg-white hover:ring-violet-950/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-700"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4">
              <path fill="#4285F4" d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.46a5.52 5.52 0 0 1-2.4 3.62v3h3.88c2.27-2.09 3.58-5.17 3.58-8.81Z" />
              <path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.94-2.91l-3.88-3c-1.07.72-2.45 1.15-4.06 1.15-3.12 0-5.77-2.11-6.71-4.95H1.28v3.1A12 12 0 0 0 12 24Z" />
              <path fill="#FBBC05" d="M5.29 14.29A7.2 7.2 0 0 1 4.91 12c0-.79.14-1.57.38-2.29v-3.1H1.28A12 12 0 0 0 0 12c0 1.94.46 3.77 1.28 5.39l4.01-3.1Z" />
              <path fill="#EA4335" d="M12 4.77c1.76 0 3.34.61 4.59 1.8l3.44-3.44A11.5 11.5 0 0 0 12 0 12 12 0 0 0 1.28 6.61l4.01 3.1C6.23 6.88 8.88 4.77 12 4.77Z" />
            </svg>
            <span>
              <span className="sr-only">Sign up with </span>Google
            </span>
          </button>
        </div>

        <div className="my-5 flex items-center gap-3 text-xs text-violet-800">
          <span className="h-px flex-1 bg-violet-950/15" />
          or
          <span className="h-px flex-1 bg-violet-950/15" />
        </div>

        <form className="flex flex-col gap-4">
          <div>
            <label htmlFor="signup-card-gradient-name" className="block text-sm font-medium">
              Name
            </label>
            <input
              id="signup-card-gradient-name"
              type="text"
              name="name"
              autoComplete="name"
              required
              defaultValue="Noa Lindqvist"
              className="mt-1.5 block h-11 w-full rounded-xl border border-violet-950/50 bg-white/70 px-3.5 text-[0.9375rem] transition-colors hover:border-violet-950/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-700"
            />
          </div>

          <div>
            <label htmlFor="signup-card-gradient-email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="signup-card-gradient-email"
              type="email"
              name="email"
              autoComplete="email"
              required
              defaultValue="noa@lindqvist.studio"
              aria-invalid="true"
              aria-describedby="signup-card-gradient-email-error"
              className="mt-1.5 block h-11 w-full rounded-xl border border-violet-950/50 bg-white/70 px-3.5 text-[0.9375rem] transition-colors hover:border-violet-950/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-700 aria-invalid:border-rose-600 aria-invalid:outline-rose-700 aria-invalid:hover:border-rose-700"
            />
            <p id="signup-card-gradient-email-error" className="mt-1.5 flex items-start gap-1.5 text-[0.8125rem]/5 text-rose-700">
              <svg aria-hidden="true" viewBox="0 0 16 16" fill="currentColor" className="mt-0.5 size-4 shrink-0">
                <path
                  fillRule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm0-10.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 4.5Zm0 7a.875.875 0 1 0 0-1.75.875.875 0 0 0 0 1.75Z"
                  clipRule="evenodd"
                />
              </svg>
              <span>
                This email already has an account.{' '}
                <a
                  href="#"
                  className="rounded-sm font-medium underline underline-offset-2 transition-colors hover:text-rose-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-700"
                >
                  Log in instead
                </a>
              </span>
            </p>
          </div>

          <div>
            <label htmlFor="signup-card-gradient-password" className="block text-sm font-medium">
              Password
            </label>
            <input
              id="signup-card-gradient-password"
              type="password"
              name="password"
              autoComplete="new-password"
              required
              minLength={10}
              aria-describedby="signup-card-gradient-password-hint"
              className="mt-1.5 block h-11 w-full rounded-xl border border-violet-950/50 bg-white/70 px-3.5 text-[0.9375rem] transition-colors hover:border-violet-950/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-700"
            />
            <p id="signup-card-gradient-password-hint" className="mt-1.5 text-[0.8125rem]/5 text-violet-800">
              At least 10 characters, with a number or a symbol.
            </p>
          </div>

          <button
            type="submit"
            className="mt-2 flex h-12 w-full cursor-pointer items-center justify-center rounded-xl bg-violet-950 text-[0.9375rem] font-semibold text-white transition-colors hover:bg-violet-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-700"
          >
            Create account
          </button>

          <p className="text-center text-xs/5 text-violet-800">
            By signing up you agree to our{' '}
            <a href="#" className="rounded-sm underline underline-offset-2 hover:text-violet-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-700">
              Terms
            </a>{' '}
            and{' '}
            <a href="#" className="rounded-sm underline underline-offset-2 hover:text-violet-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-700">
              Privacy Policy
            </a>
            .
          </p>
        </form>
      </div>
    </section>
  )
}
