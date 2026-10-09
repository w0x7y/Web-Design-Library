export default function LoginStudioPortal() {
  return (
    <section className="bg-stone-100 px-6 py-12 text-stone-950 sm:px-12">
      <div className="mx-auto max-w-md rounded-2xl border border-stone-200 bg-white p-6 sm:p-10">
        <p className="text-xs font-semibold tracking-[0.2em] text-stone-500">
          STUDIO / NORTH
        </p>
        <h2 className="mt-5 text-3xl font-semibold tracking-tight">
          Your project, in one place.
        </h2>
        <p className="mt-3 text-sm leading-6 text-stone-600">
          Review the latest work and keep the conversation moving.
        </p>
        <form className="mt-7 grid gap-5" action="#" method="post">
          <label
            className="grid gap-2 text-sm font-medium"
            htmlFor="login-studio-portal-email"
          >
            Email address
            <input
              className="min-w-0 w-full rounded-lg border border-current/25 bg-transparent px-3 py-2.5 font-normal placeholder:text-current/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current leading-[normal]"
              id="login-studio-portal-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              required
            />
          </label>
          <label
            className="grid gap-2 text-sm font-medium"
            htmlFor="login-studio-portal-password"
          >
            Password
            <input
              className="min-w-0 w-full rounded-lg border border-current/25 bg-transparent px-3 py-2.5 font-normal placeholder:text-current/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current leading-[normal]"
              id="login-studio-portal-password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder=""
              required
            />
          </label>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <label
              className="flex items-start gap-3 text-sm"
              htmlFor="login-studio-portal-remember"
            >
              <input
                className="mt-1 size-4 shrink-0 accent-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                type="checkbox"
                name="remember"
                id="login-studio-portal-remember"
                aria-labelledby="login-studio-portal-remember-label"
                aria-describedby="login-studio-portal-remember-hint"
              />
              <span className="grid gap-1">
                <span
                  id="login-studio-portal-remember-label"
                  className="font-medium"
                >
                  Remember this device
                </span>
                <span
                  className="text-xs leading-5 opacity-70"
                  id="login-studio-portal-remember-hint"
                >
                  For your next visit.
                </span>
              </span>
            </label>
            <a
              className="text-sm font-medium underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
              href="#"
            >
              Reset password
            </a>
          </div>
          <button
            className="rounded-lg bg-stone-950 px-4 py-3 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950"
            type="submit"
          >
            Open my workspace
          </button>
        </form>
        <p className="mt-6 text-center text-xs text-stone-500">
          New here?{' '}
          <a
            className="text-sm font-medium underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
            href="#"
          >
            Ask for an invitation
          </a>
        </p>
      </div>
    </section>
  )
}
