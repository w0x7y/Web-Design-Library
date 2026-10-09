export default function SignupWorkspaceStarter() {
  return (
    <section className="bg-white px-6 py-12 text-zinc-950 sm:px-12">
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
        <aside className="rounded-2xl bg-zinc-950 p-6 text-white sm:p-10">
          <span className="inline-flex rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300">
            14-DAY TEAM TRIAL
          </span>
          <h2 className="mt-8 text-4xl font-semibold tracking-tight">
            Good work needs a shared place.
          </h2>
          <ul className="mt-8 grid gap-5 text-sm text-zinc-300" role="list">
            <li className="border-b border-zinc-700 pb-4">
              Unlimited projects during your trial
            </li>
            <li className="border-b border-zinc-700 pb-4">
              Invite your whole team from day one
            </li>
            <li className="border-b border-zinc-700 pb-4">
              Export your work whenever you need
            </li>
          </ul>
          <p className="mt-8 text-xs text-zinc-400">
            No card required to get started.
          </p>
        </aside>
        <form
          className="grid content-start gap-5 py-2"
          action="#"
          method="post"
        >
          <h2 className="text-3xl font-semibold tracking-tight">
            Create your workspace
          </h2>
          <label
            className="grid gap-2 text-sm font-medium"
            htmlFor="signup-workspace-starter-workspace"
          >
            Workspace name
            <input
              className="min-w-0 w-full rounded-lg border border-current/25 bg-transparent px-3 py-2.5 font-normal placeholder:text-current/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current leading-[normal]"
              id="signup-workspace-starter-workspace"
              name="workspace"
              type="text"
              autoComplete="off"
              placeholder="Acme Design"
              required
            />
          </label>
          <label
            className="grid gap-2 text-sm font-medium"
            htmlFor="signup-workspace-starter-email"
          >
            Work email
            <input
              className="min-w-0 w-full rounded-lg border border-current/25 bg-transparent px-3 py-2.5 font-normal placeholder:text-current/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current leading-[normal]"
              id="signup-workspace-starter-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder=""
              required
            />
          </label>
          <label
            className="grid gap-2 text-sm font-medium"
            htmlFor="signup-workspace-starter-password"
          >
            Password
            <input
              className="min-w-0 w-full rounded-lg border border-current/25 bg-transparent px-3 py-2.5 font-normal placeholder:text-current/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current leading-[normal]"
              id="signup-workspace-starter-password"
              name="password"
              type="password"
              autoComplete="new-password"
              placeholder=""
              required
            />
          </label>
          <label
            className="flex items-start gap-3 text-sm"
            htmlFor="signup-workspace-starter-terms"
          >
            <input
              className="mt-1 size-4 shrink-0 accent-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
              type="checkbox"
              name="terms"
              id="signup-workspace-starter-terms"
              aria-labelledby="signup-workspace-starter-terms-label"
              aria-describedby="signup-workspace-starter-terms-hint"
              required
            />
            <span className="grid gap-1">
              <span
                id="signup-workspace-starter-terms-label"
                className="font-medium"
              >
                I accept the terms of service
              </span>
              <span
                className="text-xs leading-5 opacity-70"
                id="signup-workspace-starter-terms-hint"
              >
                You can review them before continuing.
              </span>
            </span>
          </label>
          <button
            className="rounded-lg bg-zinc-950 px-4 py-3 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950"
            type="submit"
          >
            Create workspace
          </button>
          <p className="text-xs text-zinc-500">
            Already have an account?{' '}
            <a
              className="text-sm font-medium underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
              href="#"
            >
              Sign in
            </a>
          </p>
        </form>
      </div>
    </section>
  )
}
