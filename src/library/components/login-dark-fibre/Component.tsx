// Fonts: IBM Plex Sans (https://fonts.google.com/specimen/IBM+Plex+Sans)
export default function LoginDarkFibre() {
  return (
    <section className="bg-slate-950 px-6 py-10 font-['IBM_Plex_Sans',ui-sans-serif,system-ui,sans-serif] text-slate-100 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-600 pb-6">
          <p className="text-2xl font-semibold tracking-tight">Spanline</p>
          <p className="text-xs tracking-widest text-cyan-200">NETWORK OPERATIONS / AUTHORIZED ACCESS</p>
        </header>
        <div className="grid gap-10 pt-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div className="grid content-start gap-6">
            <h1 className="max-w-lg text-4xl leading-tight font-medium tracking-tight sm:text-5xl">Every connection has a keeper.</h1>
            <p
              className="max-w-md text-base leading-7 text-slate-300"
            >
              Fiber routes, splice records and planned maintenance for your operating region.
            </p>
            <svg viewBox="0 0 360 180" fill="none" stroke="currentColor" aria-hidden="true" className="h-40 w-full text-cyan-300 sm:h-56">
              <path d="M25 90h110l60-55h140M135 90l60 55h140M195 35v110M335 35v110" strokeWidth="1.5" />
              <rect x="18" y="83" width="14" height="14" fill="currentColor" stroke="none" />
              <rect x="128" y="83" width="14" height="14" fill="currentColor" stroke="none" />
              <rect x="188" y="28" width="14" height="14" fill="currentColor" stroke="none" />
              <rect x="188" y="138" width="14" height="14" fill="currentColor" stroke="none" />
              <rect x="328" y="28" width="14" height="14" fill="currentColor" stroke="none" />
              <rect x="328" y="138" width="14" height="14" fill="currentColor" stroke="none" />
            </svg>
            <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-slate-600 pt-4 text-xs text-slate-300">
              <p>Metro ring / West region</p>
              <p>24-hour network desk</p>
            </div>
          </div>
          <div className="self-start rounded-xl border border-slate-600 bg-slate-900 p-6 sm:p-8">
            <h2 className="text-2xl font-medium">Operator sign-in</h2>
            <p
              id="login-dark-fibre-hint"
              className="mt-3 text-sm leading-6 text-slate-300"
            >
              Your organization manages access. Use your work email to reach its identity provider.
            </p>
            <form action="#" method="post" className="mt-7 grid gap-5">
              <label htmlFor="login-dark-fibre-email" className="grid gap-2 text-sm font-medium">
                Operator work email
                <input
                  id="login-dark-fibre-email"
                  name="email"
                  type="email"
                  autoComplete="username"
                  required
                  aria-describedby="login-dark-fibre-hint"
                  className="h-12 min-w-0 w-full border border-cyan-400 bg-slate-900 px-3 text-sm font-normal rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                />
              </label>
              <button
                type="submit"
                className="flex min-h-12 cursor-pointer items-center justify-center gap-3 bg-cyan-200 px-5 py-3 text-sm font-semibold text-slate-950 rounded-lg hover:bg-cyan-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
              >
                Continue with organization SSO
              </button>
              <a
                href="#"
                className="w-fit text-sm underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
              >
                Trouble signing in?
              </a>
            </form>
            <p
              className="mt-8 border-t border-slate-600 pt-5 text-xs leading-5 text-slate-300"
            >
              For approved network staff and contractors. Access requests go to your regional administrator.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
