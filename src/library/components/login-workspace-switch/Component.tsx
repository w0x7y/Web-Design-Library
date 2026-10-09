export default function LoginWorkspaceSwitch() {
  return (
    <section className="bg-white px-6 py-12 text-slate-950 sm:px-12">
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
        <div className="rounded-2xl bg-slate-100 p-6 sm:p-8">
          <p className="text-xs font-semibold tracking-widest text-slate-600">
            QUARTERLY / TEAM WORKSPACE
          </p>
          <h2 className="mt-6 max-w-sm text-4xl font-semibold tracking-tight">
            A clear view of what’s next.
          </h2>
          <ol role="list" className="mt-8 grid gap-3">
            <li className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-sm font-semibold">
                1
              </span>
              <div className="grid gap-1">
                <p className="text-sm font-semibold">Website launch</p>
                <p className="text-xs text-slate-500">
                  Design review · 4 people
                </p>
              </div>
            </li>
            <li className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-sm font-semibold">
                2
              </span>
              <div className="grid gap-1">
                <p className="text-sm font-semibold">Partner onboarding</p>
                <p className="text-xs text-slate-500">
                  Ready to start · 2 people
                </p>
              </div>
            </li>
            <li className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-sm font-semibold">
                3
              </span>
              <div className="grid gap-1">
                <p className="text-sm font-semibold">October planning</p>
                <p className="text-xs text-slate-500">In progress · 6 people</p>
              </div>
            </li>
          </ol>
        </div>
        <form className="grid content-center gap-5" action="#" method="post">
          <h2 className="text-3xl font-semibold tracking-tight">
            Welcome back
          </h2>
          <p className="text-sm leading-6 text-slate-600">
            Sign in to your team’s workspace.
          </p>
          <label
            className="grid gap-2 text-sm font-medium"
            htmlFor="login-workspace-switch-email"
          >
            Work email
            <input
              className="min-w-0 w-full rounded-lg border border-current/60 bg-transparent px-3 py-2.5 font-normal placeholder:text-current/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
              id="login-workspace-switch-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder=""
              required
            />
          </label>
          <label
            className="grid gap-2 text-sm font-medium"
            htmlFor="login-workspace-switch-password"
          >
            Password
            <input
              className="min-w-0 w-full rounded-lg border border-current/60 bg-transparent px-3 py-2.5 font-normal placeholder:text-current/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
              id="login-workspace-switch-password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder=""
              required
            />
          </label>
          <button
            className="rounded-lg bg-blue-700 px-4 py-3 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950"
            type="submit"
          >
            Sign in
          </button>
          <div className="flex flex-wrap justify-between gap-3">
            <a
              className="text-sm font-medium underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
              href="#"
            >
              Use single sign-on
            </a>
            <a
              className="text-sm font-medium underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
              href="#"
            >
              Reset password
            </a>
          </div>
          <p className="text-xs text-slate-500">
            Your workspace uses encrypted connections.
          </p>
        </form>
      </div>
    </section>
  )
}
