// Fonts: Archivo (https://fonts.google.com/specimen/Archivo)
export default function LoginCastingCall() {
  return (
    <section className="bg-red-50 px-6 py-8 font-['Archivo',ui-sans-serif,system-ui,sans-serif] text-red-950 sm:px-10 sm:py-12">
      <div className="mx-auto max-w-6xl border-2 border-red-950">
        <header className="flex flex-wrap justify-between gap-4 border-b-2 border-red-950 p-5 text-sm font-bold">
          <p>SLATECAST</p>
          <p>PERFORMER PORTAL / 2026</p>
        </header>
        <div className="grid gap-6 border-b-2 border-red-950 p-5 sm:p-8 lg:grid-cols-[1fr_auto]">
          <h1 className="max-w-2xl text-5xl leading-none font-black tracking-[-0.06em] sm:text-7xl">THE NEXT TAKE IS YOURS.</h1>
          <div className="flex items-end gap-3 text-sm">
            <span className="text-7xl leading-none font-black tracking-tighter">01</span>
            <p>Self-tapes. Callbacks. Your audition record.</p>
          </div>
        </div>
        <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[1fr_2fr]">
          <div className="grid content-start gap-4">
            <h2 className="text-xl font-bold">CHECK IN</h2>
            <p
              id="login-casting-call-hint"
              className="max-w-xs text-sm leading-6"
            >
              Sign in with your performer account. Agency logins have a separate entrance.
            </p>
          </div>
          <form action="#" method="post" className="grid gap-5 sm:grid-cols-2">
            <label htmlFor="login-casting-call-email" className="grid gap-2 text-sm font-medium">
              Performer email
              <input
                id="login-casting-call-email"
                name="email"
                type="email"
                autoComplete="username"
                required
                aria-describedby="login-casting-call-hint"
                className="h-12 min-w-0 w-full border border-red-950 bg-red-50 px-3 text-sm font-normal rounded-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
              />
            </label>
            <label htmlFor="login-casting-call-password" className="grid gap-2 text-sm font-medium">
              Password
              <input
                id="login-casting-call-password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="h-12 min-w-0 w-full border border-red-950 bg-red-50 px-3 text-sm font-normal rounded-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
              />
            </label>
            <button
              type="submit"
              className="flex min-h-12 cursor-pointer items-center justify-center gap-3 bg-red-950 px-5 py-3 text-sm font-semibold text-red-50 rounded-none hover:bg-red-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-950"
            >
              Enter the casting room
            </button>
            <a
              href="#"
              className="w-fit text-sm underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
            >
              Trouble signing in?
            </a>
          </form>
        </div>
      </div>
    </section>
  )
}
