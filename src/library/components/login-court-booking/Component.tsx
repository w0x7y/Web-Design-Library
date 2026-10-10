// Fonts: Bricolage Grotesque (https://fonts.google.com/specimen/Bricolage+Grotesque)
export default function LoginCourtBooking() {
  return (
    <section
      className="bg-emerald-100 px-6 py-12 font-['Bricolage_Grotesque',ui-sans-serif,system-ui,sans-serif] text-emerald-950 sm:px-10"
    >
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
        <div className="grid content-start gap-7">
          <p className="text-2xl font-bold tracking-tight">rallymint / padel club</p>
          <h1 className="max-w-md text-5xl leading-[1.05] font-semibold tracking-tight sm:text-6xl">Less admin. More rallies.</h1>
          <figure className="relative rounded-[2rem] border-2 border-emerald-950 bg-emerald-800 p-6">
            <svg
              viewBox="0 0 400 200"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              aria-hidden="true"
              className="h-40 w-full text-emerald-100 sm:h-52"
            >
              <rect x="10" y="10" width="380" height="180" rx="3" />
              <path d="M200 10v180M80 10v180M320 10v180M80 100h240" strokeWidth="2" />
              <circle cx="285" cy="72" r="14" fill="#fef9c3" stroke="none" />
            </svg>
            <figcaption className="mt-4 text-sm text-emerald-100">Your court, doubles partner and league nights, together.</figcaption>
          </figure>
        </div>
        <div className="rounded-[2rem] border-2 border-emerald-950 bg-yellow-100 p-6 sm:p-8">
          <header className="flex flex-wrap items-center justify-between gap-3 border-b border-emerald-800 pb-5">
            <p className="text-xs font-bold tracking-widest">MEMBER PASS</p>
            <p className="text-xs">AUTUMN 26</p>
          </header>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight">Back for another set?</h2>
          <form action="#" method="post" className="mt-6 grid gap-5">
            <label htmlFor="login-court-booking-email" className="grid gap-2 text-sm font-medium">
              Club email
              <input
                id="login-court-booking-email"
                name="email"
                type="email"
                autoComplete="username"
                required
                aria-describedby="login-court-booking-hint"
                className="h-12 min-w-0 w-full border border-emerald-800 bg-white px-3 text-sm font-normal rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
              />
            </label>
            <label htmlFor="login-court-booking-password" className="grid gap-2 text-sm font-medium">
              Password
              <input
                id="login-court-booking-password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="h-12 min-w-0 w-full border border-emerald-800 bg-white px-3 text-sm font-normal rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
              />
            </label>
            <button
              type="submit"
              className="flex min-h-12 cursor-pointer items-center justify-center gap-3 bg-emerald-950 px-5 py-3 text-sm font-semibold text-yellow-100 rounded-full hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-800"
            >
              Find my next game
            </button>
            <a
              href="#"
              className="w-fit text-sm underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
            >
              Trouble signing in?
            </a>
          </form>
          <p
            id="login-court-booking-hint"
            className="mt-6 text-xs leading-5"
          >
            First visit? Your welcome email includes your account invitation.
          </p>
        </div>
      </div>
    </section>
  )
}
