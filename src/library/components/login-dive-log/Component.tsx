// Fonts: Space Grotesk (https://fonts.google.com/specimen/Space+Grotesk)
export default function LoginDiveLog() {
  return (
    <section
      className="bg-linear-to-br from-emerald-950 via-cyan-950 to-slate-950 px-6 py-12 font-['Space_Grotesk',ui-sans-serif,system-ui,sans-serif] text-cyan-50 sm:px-10 sm:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-wrap justify-between gap-4 text-sm">
          <p className="font-bold tracking-widest">BELOWDECK</p>
          <p>DIVE LOG / EXPEDITION RECORDS</p>
        </header>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div className="self-start rounded-2xl border border-white/30 bg-white/10 p-6 backdrop-blur-xl sm:p-8">
            <h1 className="text-3xl leading-tight font-medium tracking-tight">Back below the surface.</h1>
            <p
              id="login-dive-log-hint"
              className="mt-4 text-sm leading-6 text-cyan-100"
            >
              Sign in to record dives, check your certifications and share a trip with your buddy.
            </p>
            <form action="#" method="post" className="mt-7 grid gap-5">
              <label htmlFor="login-dive-log-email" className="grid gap-2 text-sm font-medium">
                Diver email
                <input
                  id="login-dive-log-email"
                  name="email"
                  type="email"
                  autoComplete="username"
                  required
                  aria-describedby="login-dive-log-hint"
                  className="h-12 min-w-0 w-full border border-cyan-300 bg-cyan-950 px-3 text-sm font-normal rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                />
              </label>
              <label htmlFor="login-dive-log-password" className="grid gap-2 text-sm font-medium">
                Password
                <input
                  id="login-dive-log-password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="h-12 min-w-0 w-full border border-cyan-300 bg-cyan-950 px-3 text-sm font-normal rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                />
              </label>
              <button
                type="submit"
                className="flex min-h-12 cursor-pointer items-center justify-center gap-3 bg-cyan-100 px-5 py-3 text-sm font-semibold text-cyan-950 rounded-lg hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              >
                Return to my logbook
              </button>
              <a
                href="#"
                className="w-fit text-sm underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
              >
                Trouble signing in?
              </a>
            </form>
          </div>
          <aside className="grid content-between gap-10 border-l border-cyan-300/50 pl-6 sm:pl-10">
            <div className="grid gap-4">
              <p className="text-xs tracking-widest text-cyan-200">THE LOGBOOK GOES WITH YOU</p>
              <h2 className="max-w-md text-[2.75rem] leading-[1.1] tracking-tight sm:text-6xl">Good dives deserve good notes.</h2>
            </div>
            <dl className="grid gap-6">
              <div className="border-t border-cyan-300/50 pt-3">
                <dt className="text-4xl font-medium tabular-nums">18 m</dt>
                <dd className="mt-2 text-sm text-cyan-100">A depth, a place, a moment to remember.</dd>
              </div>
              <div className="border-t border-cyan-300/50 pt-3">
                <dt className="text-4xl font-medium tabular-nums">42 min</dt>
                <dd className="mt-2 text-sm text-cyan-100">Keep the details after the fins come off.</dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  )
}
