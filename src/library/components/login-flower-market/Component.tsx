// Fonts: Fraunces (https://fonts.google.com/specimen/Fraunces)
export default function LoginFlowerMarket() {
  return (
    <section className="bg-rose-50 px-6 py-10 font-['Fraunces',ui-sans-serif,system-ui,sans-serif] text-rose-950 sm:px-10 sm:py-14">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-wrap items-end justify-between gap-4">
          <p className="text-4xl font-semibold tracking-tight sm:text-5xl">Petalshift</p>
          <p className="text-sm">Early stems. Independent florists.</p>
        </header>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="rounded-t-[3rem] rounded-b-xl border border-rose-800 p-6 sm:p-8">
            <h1 className="text-3xl leading-tight font-medium tracking-tight">The market is open.</h1>
            <p
              id="login-flower-market-hint"
              className="mt-4 text-sm leading-6"
            >
              Sign in to see today’s grower availability and build your next wholesale order.
            </p>
            <form action="#" method="post" className="mt-6 grid gap-5">
              <label htmlFor="login-flower-market-email" className="grid gap-2 text-sm font-medium">
                Buyer email
                <input
                  id="login-flower-market-email"
                  name="email"
                  type="email"
                  autoComplete="username"
                  required
                  aria-describedby="login-flower-market-hint"
                  className="h-12 min-w-0 w-full border border-rose-800 bg-rose-50 px-3 text-sm font-normal rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                />
              </label>
              <label htmlFor="login-flower-market-password" className="grid gap-2 text-sm font-medium">
                Password
                <input
                  id="login-flower-market-password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="h-12 min-w-0 w-full border border-rose-800 bg-rose-50 px-3 text-sm font-normal rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                />
              </label>
              <button
                type="submit"
                className="flex min-h-12 cursor-pointer items-center justify-center gap-3 bg-rose-950 px-5 py-3 text-sm font-semibold text-rose-50 rounded-lg hover:bg-rose-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-800"
              >
                Open the stem list
              </button>
              <a
                href="#"
                className="w-fit text-sm underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
              >
                Trouble signing in?
              </a>
            </form>
            <p
              className="mt-7 border-t border-rose-300 pt-4 text-xs leading-5"
            >
              Order by 11am for next-morning collection. Trade accounts only.
            </p>
          </div>
          <figure className="grid content-center rounded-[3rem] bg-rose-200 p-6 sm:p-10">
            <svg viewBox="0 0 360 300" aria-hidden="true" className="h-60 w-full sm:h-80">
              <path d="M100 270V105M180 270V70M270 270V120" stroke="#365314" strokeWidth="7" strokeLinecap="round" />
              <path
                d="M99 224C52 222 40 188 44 169c43 5 52 26 55 55M181 185c36-8 63-34 59-65-43 9-54 32-59 65M269 240c-40-1-60-24-61-50 37 3 55 21 61 50"
                fill="#365314"
               />
              <path
                d="M63 62 99 82l37-20v35c0 48-73 48-73 0ZM143 27l37 20 37-20v35c0 48-74 48-74 0ZM233 75l37 20 37-20v35c0 48-74 48-74 0Z"
                fill="#be123c"
               />
              <path d="M50 276h270" stroke="#881337" strokeWidth="2" />
            </svg>
            <figcaption className="mt-5 flex flex-wrap justify-between gap-3 border-t border-rose-800 pt-4 text-sm">
              <span>Grower direct</span>
              <span>Sold by the bunch</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
