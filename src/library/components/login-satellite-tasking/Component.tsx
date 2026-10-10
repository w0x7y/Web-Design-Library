// Fonts: DM Mono (https://fonts.google.com/specimen/DM+Mono)
export default function LoginSatelliteTasking() {
  return (
    <section className="bg-neutral-950 px-6 py-10 font-['DM_Mono',ui-monospace,SFMono-Regular,monospace] text-amber-100 sm:px-10 sm:py-14">
      <div className="mx-auto max-w-6xl border-2 border-amber-400">
        <header className="flex flex-wrap justify-between gap-4 border-b-2 border-amber-400 p-5 text-xs font-medium tracking-wider">
          <p>ORBITALIST / TASKING</p>
          <p>GROUND SEGMENT 04</p>
        </header>
        <div className="grid gap-6 border-b-2 border-amber-400 p-5 sm:p-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div className="grid gap-6">
            <h1 className="text-4xl leading-[1.15] font-medium tracking-tight sm:text-5xl">THE WINDOW IS OPEN.</h1>
            <p className="max-w-md text-sm leading-6">Schedule image acquisitions. Review coverage. Hand over the next orbital pass.</p>
          </div>
          <svg viewBox="0 0 320 190" fill="none" stroke="currentColor" aria-hidden="true" className="h-44 w-full text-amber-300">
            <ellipse cx="160" cy="95" rx="130" ry="38" transform="rotate(-25 160 95)" strokeWidth="2" />
            <circle cx="160" cy="95" r="45" strokeWidth="1" />
            <path d="M160 30v130M95 95h130M160 50c-36 14-36 76 0 90 36-14 36-76 0-90" strokeWidth="1" />
            <rect x="263" y="32" width="16" height="16" fill="currentColor" stroke="none" />
          </svg>
        </div>
        <div className="p-5 sm:p-8">
          <h2 className="text-xs font-medium tracking-widest">SESSION AUTHENTICATION</h2>
          <form action="#" method="post" className="mt-5 grid gap-5 lg:grid-cols-3 lg:items-end">
            <label htmlFor="login-satellite-tasking-email" className="grid gap-2 text-sm font-medium">
              Mission email
              <input
                id="login-satellite-tasking-email"
                name="email"
                type="email"
                autoComplete="username"
                required
                aria-describedby="login-satellite-tasking-hint"
                className="h-12 min-w-0 w-full border border-amber-400 bg-neutral-950 px-3 text-sm font-normal rounded-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
              />
            </label>
            <label htmlFor="login-satellite-tasking-code" className="grid gap-2 text-sm font-medium">
              Access code
              <input
                id="login-satellite-tasking-code"
                name="code"
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                maxLength={6}
                pattern="[0-9]{6}"
                required
                aria-describedby="login-satellite-tasking-hint"
                className="h-12 min-w-0 w-full border border-amber-400 bg-neutral-950 px-3 text-sm font-normal rounded-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
              />
            </label>
            <button
              type="submit"
              className="flex min-h-12 cursor-pointer items-center justify-center gap-3 bg-amber-300 px-5 py-3 text-sm font-semibold text-neutral-950 rounded-none hover:bg-amber-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400"
            >
              Authenticate session
            </button>
            <a
              href="#"
              className="w-fit text-sm underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
            >
              Trouble signing in?
            </a>
          </form>
          <p
            id="login-satellite-tasking-hint"
            className="mt-6 border-t border-amber-400 pt-4 text-xs leading-5"
          >
            Enter the six-digit code from your authenticator. Codes change every 30 seconds.
          </p>
        </div>
      </div>
    </section>
  )
}
