// Fonts: Familjen Grotesk (https://fonts.google.com/specimen/Familjen+Grotesk)
export default function LoginSnowmakingConsole() {
  return (
    <section className="bg-slate-950 px-6 py-8 font-['Familjen_Grotesk',ui-sans-serif,system-ui,sans-serif] text-white sm:px-10 sm:py-12">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl bg-slate-800">
        <img
          src="https://images.unsplash.com/photo-1418985991508-e47386d96a71?w=1600&q=80"
          alt="A snow-covered mountain plateau beneath blue winter light"
          width="1600"
          height="1067"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-slate-950/70"></div>
        <div className="relative p-6 sm:p-10">
          <header className="flex flex-wrap justify-between gap-4 border-b border-white/40 pb-5">
            <p className="text-2xl font-semibold tracking-tight">Frostline</p>
            <p className="text-xs tracking-widest">SNOWMAKING / MOUNTAIN OPERATIONS</p>
          </header>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
            <div className="grid content-between gap-10">
              <h1 className="max-w-md text-4xl leading-[1.1] font-medium tracking-tight sm:text-5xl">The morning starts overnight.</h1>
              <div className="border-t border-white/40 pt-5">
                <p className="text-xs tracking-widest">BEFORE YOUR SHIFT</p>
                <p
                  className="mt-3 max-w-sm text-sm leading-6"
                >
                  Review wet-bulb readings, pump availability and the previous crew’s handover before starting a run.
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-white/30 bg-slate-950/80 p-6 backdrop-blur-lg sm:p-8">
              <h2 className="text-2xl font-medium">Operator access</h2>
              <p
                id="login-snowmaking-console-hint"
                className="mt-3 text-sm leading-6 text-sky-100"
              >
                Use your resort-issued account for shift plans and snowgun zones.
              </p>
              <form action="#" method="post" className="mt-6 grid gap-5">
                <label htmlFor="login-snowmaking-console-email" className="grid gap-2 text-sm font-medium">
                  Operator email
                  <input
                    id="login-snowmaking-console-email"
                    name="email"
                    type="email"
                    autoComplete="username"
                    required
                    aria-describedby="login-snowmaking-console-hint"
                    className="h-12 min-w-0 w-full border border-sky-300 bg-slate-950 px-3 text-sm font-normal rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                  />
                </label>
                <label htmlFor="login-snowmaking-console-password" className="grid gap-2 text-sm font-medium">
                  Password
                  <input
                    id="login-snowmaking-console-password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="h-12 min-w-0 w-full border border-sky-300 bg-slate-950 px-3 text-sm font-normal rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                  />
                </label>
                <button
                  type="submit"
                  className="flex min-h-12 cursor-pointer items-center justify-center gap-3 bg-sky-100 px-5 py-3 text-sm font-semibold text-slate-950 rounded-lg hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
                >
                  Sign in to snowmaking
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
          <p className="mt-8 text-xs text-sky-100">Access help goes to your mountain operations supervisor.</p>
        </div>
      </div>
    </section>
  )
}
