// Fonts: Manrope (https://fonts.google.com/specimen/Manrope)
export default function LoginHearingCare() {
  return (
    <section className="bg-white px-6 py-10 font-['Manrope',ui-sans-serif,system-ui,sans-serif] text-sky-950 sm:px-10 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-sky-200 pb-6">
          <p className="text-2xl font-semibold tracking-tight">auralis</p>
          <p className="text-xs font-medium tracking-widest">PATIENT ACCESS</p>
        </header>
        <div className="grid gap-10 pt-10 lg:grid-cols-[1.3fr_1fr] lg:gap-24 lg:pt-16">
          <div className="grid content-start gap-6">
            <p className="text-sm text-sky-700">Hearing care, at your pace.</p>
            <h1
              className="max-w-lg text-[2.5rem] leading-[1.15] font-medium tracking-tight sm:text-5xl"
            >
              Your next appointment starts here.
            </h1>
            <p
              className="max-w-sm text-base leading-7 text-sky-800"
            >
              Check your hearing results, review your device settings and message your audiologist.
            </p>
            <p
              className="mt-6 border-l-2 border-sky-600 pl-4 text-sm leading-6"
            >
              Need help with access? Call 020 7946 0821. Our care team answers Monday to Friday, 9am to 5pm.
            </p>
          </div>
          <form action="#" method="post" className="grid content-start gap-5 lg:pt-2">
            <h2 className="mb-1 text-xl font-semibold">Sign in to Auralis</h2>
            <label htmlFor="login-hearing-care-email" className="grid gap-2 text-sm font-medium">
              Patient email
              <input
                id="login-hearing-care-email"
                name="email"
                type="email"
                autoComplete="username"
                required
                aria-describedby="login-hearing-care-hint"
                className="h-12 min-w-0 w-full border border-sky-700 bg-white px-3 text-sm font-normal rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
              />
            </label>
            <label htmlFor="login-hearing-care-password" className="grid gap-2 text-sm font-medium">
              Password
              <input
                id="login-hearing-care-password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="h-12 min-w-0 w-full border border-sky-700 bg-white px-3 text-sm font-normal rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
              />
            </label>
            <button
              type="submit"
              className="flex min-h-12 cursor-pointer items-center justify-center gap-3 bg-sky-900 px-5 py-3 text-sm font-semibold text-white rounded-lg hover:bg-sky-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-700"
            >
              Open my care plan
            </button>
            <a
              href="#"
              className="w-fit text-sm underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
            >
              Trouble signing in?
            </a>
            <p
              id="login-hearing-care-hint"
              className="text-xs leading-5 text-sky-800"
            >
              Use the email you gave us at your first appointment.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
