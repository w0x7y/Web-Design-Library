// Fonts: Newsreader (https://fonts.google.com/specimen/Newsreader)
export default function LoginAnimationDailies() {
  return (
    <section className="bg-zinc-900 px-6 py-10 font-['Newsreader',ui-sans-serif,system-ui,sans-serif] text-rose-50 sm:px-10 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-wrap justify-between gap-4 border-b border-rose-300/50 pb-5">
          <p className="text-2xl">Flipframe</p>
          <p className="text-sm text-rose-200">ANIMATION DAILIES / STUDIO ACCESS</p>
        </header>
        <div className="grid gap-6 py-8 lg:grid-cols-[1.6fr_1fr] lg:items-end lg:py-12">
          <h1 className="text-5xl leading-[1.05] tracking-tight sm:text-7xl">A note on every frame.</h1>
          <p
            id="login-animation-dailies-hint"
            className="max-w-sm text-lg leading-7 text-rose-200"
          >
            Sign in for shot reviews, director notes and the latest cut from your production.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2 border-y border-rose-300/50 py-5">
          <p className="border border-rose-300/50 px-3 py-6 text-center text-sm text-rose-200 sm:text-lg">01 / Blocking</p>
          <p className="border border-rose-300/50 px-3 py-6 text-center text-sm text-rose-200 sm:text-lg">02 / In-between</p>
          <p className="border border-rose-300/50 px-3 py-6 text-center text-sm text-rose-200 sm:text-lg">03 / Final cut</p>
        </div>
        <form action="#" method="post" className="grid gap-5 pt-8 lg:grid-cols-3 lg:items-end">
          <label htmlFor="login-animation-dailies-email" className="grid gap-2 text-sm font-medium">
            Studio email
            <input
              id="login-animation-dailies-email"
              name="email"
              type="email"
              autoComplete="username"
              required
              aria-describedby="login-animation-dailies-hint"
              className="h-12 min-w-0 w-full border border-rose-300 bg-zinc-900 px-3 text-sm font-normal rounded-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
            />
          </label>
          <label htmlFor="login-animation-dailies-password" className="grid gap-2 text-sm font-medium">
            Password
            <input
              id="login-animation-dailies-password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="h-12 min-w-0 w-full border border-rose-300 bg-zinc-900 px-3 text-sm font-normal rounded-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
            />
          </label>
          <button
            type="submit"
            className="flex min-h-12 cursor-pointer items-center justify-center gap-3 bg-rose-200 px-5 py-3 text-sm font-semibold text-zinc-950 rounded-none hover:bg-rose-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-300"
          >
            Open my review queue
          </button>
          <a
            href="#"
            className="w-fit text-sm underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
          >
            Trouble signing in?
          </a>
        </form>
        <p className="mt-7 text-sm text-rose-200">A shared review room for stop-motion crews. Your producer manages invitations.</p>
      </div>
    </section>
  )
}
