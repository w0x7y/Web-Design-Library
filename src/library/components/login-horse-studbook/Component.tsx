// Fonts: Instrument Serif (https://fonts.google.com/specimen/Instrument+Serif)
export default function LoginHorseStudbook() {
  return (
    <section className="bg-lime-50 px-6 py-10 font-['Instrument_Serif',ui-serif,Georgia,serif] text-lime-950 sm:px-10 sm:py-14">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-wrap items-baseline justify-between gap-3 border-b border-lime-900 pb-5">
          <p className="text-4xl">Bridlefolio</p>
          <p className="text-base">The breeder’s record</p>
        </header>
        <figure className="mt-6">
          <img
            src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=1600&q=80"
            alt="A grey horse trotting beside a dark woodland edge"
            width="1600"
            height="1066"
            className="h-44 w-full object-cover object-[50%_25%] sm:h-72"
          />
          <figcaption className="mt-3 flex flex-wrap justify-between gap-3 text-sm">
            <span>Pedigrees, foal records &amp; breeding notes</span>
            <span>Member access / 2026</span>
          </figcaption>
        </figure>
        <div className="mt-8 grid gap-8 border-t border-lime-900 pt-8 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <div className="grid content-start gap-5">
            <h1 className="max-w-lg text-5xl leading-[1.05] sm:text-6xl">Records that run in the family.</h1>
            <p
              id="login-horse-studbook-hint"
              className="max-w-sm text-lg leading-7"
            >
              Sign in to keep your breeding programme, mare histories and next season’s plans in order.
            </p>
          </div>
          <form action="#" method="post" className="grid content-start gap-5">
            <label htmlFor="login-horse-studbook-email" className="grid gap-2 text-sm font-medium">
              Breeder email
              <input
                id="login-horse-studbook-email"
                name="email"
                type="email"
                autoComplete="username"
                required
                aria-describedby="login-horse-studbook-hint"
                className="h-12 min-w-0 w-full border border-lime-900 bg-lime-50 px-3 text-sm font-normal rounded-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
              />
            </label>
            <label htmlFor="login-horse-studbook-password" className="grid gap-2 text-sm font-medium">
              Password
              <input
                id="login-horse-studbook-password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="h-12 min-w-0 w-full border border-lime-900 bg-lime-50 px-3 text-sm font-normal rounded-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
              />
            </label>
            <button
              type="submit"
              className="flex min-h-12 cursor-pointer items-center justify-center gap-3 bg-lime-950 px-5 py-3 text-sm font-semibold text-lime-50 rounded-none hover:bg-lime-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-900"
            >
              Open the studbook
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
