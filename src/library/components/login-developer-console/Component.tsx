export default function LoginDeveloperConsole() {
  return (
    <section className="bg-neutral-950 px-6 py-12 font-mono text-neutral-100 sm:px-12">
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
        <div className="grid content-start gap-6">
          <p className="text-xs tracking-widest text-lime-300">
            FORGE / CONSOLE
          </p>
          <h1 className="text-4xl font-medium tracking-tight">
            Ship from here.
          </h1>
          <p className="max-w-sm text-sm leading-7 text-neutral-400">
            Builds, logs and environments. One authenticated session.
          </p>
          <div className="border-l-2 border-lime-300 pl-4">
            <p className="text-xs text-lime-300">All systems operational</p>
            <p className="mt-2 text-xs text-neutral-400">
              Last incident: 38 days ago
            </p>
          </div>
        </div>
        <form
          className="grid gap-5 border border-neutral-700 p-6"
          action="#"
          method="post"
        >
          <p className="text-xs text-neutral-400">01 / AUTHENTICATE</p>
          <label
            className="grid gap-2 text-sm font-medium"
            htmlFor="login-developer-console-email"
          >
            Work email
            <input
              className="min-w-0 w-full rounded-lg border border-current/25 bg-transparent px-3 py-2.5 font-normal placeholder:text-current/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current leading-[normal]"
              id="login-developer-console-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="developer@team.dev"
              required
            />
          </label>
          <label
            className="grid gap-2 text-sm font-medium"
            htmlFor="login-developer-console-password"
          >
            Password
            <input
              className="min-w-0 w-full rounded-lg border border-current/25 bg-transparent px-3 py-2.5 font-normal placeholder:text-current/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current leading-[normal]"
              id="login-developer-console-password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder=""
              required
            />
          </label>
          <button
            className="border border-lime-300 bg-lime-300 px-4 py-3 text-left text-sm font-bold text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
            type="submit"
          >
            Continue →
          </button>
          <a
            className="text-xs text-neutral-400 underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
            href="#"
          >
            Recover access
          </a>
        </form>
      </div>
    </section>
  )
}
