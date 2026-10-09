// Fonts: Jost (https://fonts.google.com/specimen/Jost)
export default function LoginSplitImage() {
  return (
    <section className="bg-white font-['Jost',ui-sans-serif,system-ui,sans-serif] text-neutral-950 antialiased md:grid md:min-h-[56rem] md:grid-cols-2">
      <figure className="relative m-3 h-48 overflow-hidden rounded-2xl bg-neutral-100 sm:m-4 sm:h-72 md:h-auto">
        <img
          src="https://images.unsplash.com/photo-1524230572899-a752b3835840?w=1600&q=80"
          alt="A white plastered arcade of repeating arches above a flight of stone steps"
          width={1600}
          height={2133}
          className="absolute inset-0 size-full object-cover object-[50%_40%]"
        />
        <figcaption className="absolute right-4 bottom-4 hidden w-60 sm:block">
          <dl className="grid grid-cols-2 gap-px border border-neutral-950 bg-neutral-950">
            <div className="col-span-2 bg-white px-3 py-2">
              <dt className="text-[0.6875rem] font-medium tracking-[0.08em] text-neutral-500 uppercase">Project</dt>
              <dd className="text-[0.8125rem] font-medium">Casa Ferro, Porto</dd>
            </div>
            <div className="bg-white px-3 py-2">
              <dt className="text-[0.6875rem] font-medium tracking-[0.08em] text-neutral-500 uppercase">Sheet</dt>
              <dd className="text-[0.8125rem] font-medium tabular-nums">A-302 Stair</dd>
            </div>
            <div className="bg-white px-3 py-2">
              <dt className="text-[0.6875rem] font-medium tracking-[0.08em] text-neutral-500 uppercase">Revision</dt>
              <dd className="text-[0.8125rem] font-medium">C, approved</dd>
            </div>
          </dl>
        </figcaption>
      </figure>

      <div className="flex flex-col px-6 pt-6 pb-8 sm:px-10 sm:pt-8 md:py-10 lg:px-16 lg:py-12">
        <div className="mx-auto flex w-full max-w-sm flex-1 flex-col md:max-w-none">
          <a
            href="#"
            className="flex w-fit items-center gap-2 rounded-sm text-lg font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
          >
            <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="size-5">
              <path fillRule="evenodd" d="M2 2h16v16H2Zm5.5 16v-5.5a2.5 2.5 0 0 1 5 0V18Z" />
            </svg>
            Plinth
          </a>

          <div className="w-full py-10 sm:py-12 md:mx-auto md:my-auto md:max-w-sm">
            <h1 className="text-[2rem] leading-[1.1] font-medium tracking-[-0.025em]">Sign in to Plinth</h1>
            <p className="mt-3 text-[0.9375rem] text-neutral-600">Drawings, revisions and client sign-off for your studio.</p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex h-11 cursor-pointer items-center justify-center gap-2.5 rounded-lg border border-neutral-200 text-sm font-medium transition-colors hover:border-neutral-300 hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="size-[1.125rem]">
                  <path fill="#4285F4" d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.46a5.52 5.52 0 0 1-2.4 3.62v3h3.88c2.27-2.09 3.58-5.17 3.58-8.81Z" />
                  <path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.94-2.91l-3.88-3c-1.07.72-2.45 1.15-4.06 1.15-3.12 0-5.77-2.11-6.71-4.95H1.28v3.1A12 12 0 0 0 12 24Z" />
                  <path fill="#FBBC05" d="M5.29 14.29A7.2 7.2 0 0 1 4.91 12c0-.79.14-1.57.38-2.29v-3.1H1.28A12 12 0 0 0 0 12c0 1.94.46 3.77 1.28 5.39l4.01-3.1Z" />
                  <path fill="#EA4335" d="M12 4.77c1.76 0 3.34.61 4.59 1.8l3.44-3.44A11.5 11.5 0 0 0 12 0 12 12 0 0 0 1.28 6.61l4.01 3.1C6.23 6.88 8.88 4.77 12 4.77Z" />
                </svg>
                <span>
                  <span className="sr-only">Sign in with </span>Google
                </span>
              </button>
              <button
                type="button"
                className="flex h-11 cursor-pointer items-center justify-center gap-2.5 rounded-lg border border-neutral-200 text-sm font-medium transition-colors hover:border-neutral-300 hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4">
                  <path fill="#F25022" d="M1 1h10.5v10.5H1z" />
                  <path fill="#7FBA00" d="M12.5 1H23v10.5H12.5z" />
                  <path fill="#00A4EF" d="M1 12.5h10.5V23H1z" />
                  <path fill="#FFB900" d="M12.5 12.5H23V23H12.5z" />
                </svg>
                <span>
                  <span className="sr-only">Sign in with </span>Microsoft
                </span>
              </button>
            </div>

            <div className="my-6 flex items-center gap-3 text-xs text-neutral-500">
              <span className="h-px flex-1 bg-neutral-200" />
              or with email
              <span className="h-px flex-1 bg-neutral-200" />
            </div>

            <form className="flex flex-col gap-5">
              <div>
                <label htmlFor="login-split-image-email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  id="login-split-image-email"
                  type="email"
                  name="email"
                  autoComplete="username"
                  required
                  className="mt-2 block h-11 w-full rounded-lg border border-neutral-950/45 bg-white px-3.5 text-[0.9375rem] transition-colors hover:border-neutral-950/70 focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-neutral-950"
                />
              </div>

              <div>
                <label htmlFor="login-split-image-password" className="block text-sm font-medium">
                  Password
                </label>
                <input
                  id="login-split-image-password"
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  required
                  className="mt-2 block h-11 w-full rounded-lg border border-neutral-950/45 bg-white px-3.5 text-[0.9375rem] transition-colors hover:border-neutral-950/70 focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-neutral-950"
                />
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex">
                    <input
                      id="login-split-image-remember"
                      type="checkbox"
                      name="remember"
                      defaultChecked
                      className="peer size-4 cursor-pointer appearance-none rounded-[0.3125rem] border border-neutral-950/45 bg-white transition-colors checked:border-neutral-950 checked:bg-neutral-950 hover:border-neutral-950/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
                    />
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="pointer-events-none absolute inset-0 size-4 text-white opacity-0 peer-checked:opacity-100"
                    >
                      <path d="m4.5 8.25 2.25 2.25 4.75-5" />
                    </svg>
                  </span>
                  <label htmlFor="login-split-image-remember" className="cursor-pointer text-sm text-neutral-700">
                    Keep me signed in
                  </label>
                </div>
                <a
                  href="#"
                  className="rounded-sm text-sm text-neutral-600 underline decoration-neutral-950/25 underline-offset-4 transition-colors hover:text-neutral-950 hover:decoration-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="mt-1 flex h-11 w-full cursor-pointer items-center justify-center rounded-lg bg-neutral-950 text-[0.9375rem] font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
              >
                Sign in
              </button>
            </form>

            <p className="mt-8 text-sm text-neutral-600">
              New to Plinth?{' '}
              <a
                href="#"
                className="rounded-sm font-medium text-neutral-950 underline decoration-neutral-950/25 underline-offset-4 transition-colors hover:decoration-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
              >
                Start a 30-day trial
              </a>
            </p>
          </div>

          <div className="flex flex-wrap justify-between gap-x-6 gap-y-2 text-xs text-neutral-500">
            <p>© 2026 Plinth Software Ltd.</p>
            <div className="flex gap-4">
              <a
                href="#"
                className="rounded-sm transition-colors hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
              >
                Privacy
              </a>
              <a
                href="#"
                className="rounded-sm transition-colors hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
