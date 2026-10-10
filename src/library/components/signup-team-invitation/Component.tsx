export default function SignupTeamInvitation() {
  return (
    <section className="bg-slate-50 px-6 py-12 text-slate-950 sm:px-12">
      <div className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
        <header className="flex items-center gap-4 border-b border-slate-200 pb-5">
          <span aria-hidden="true" className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-blue-700 font-bold text-white">
            M
          </span>
          <div className="grid gap-1">
            <h2 className="text-2xl font-semibold tracking-tight">
              Join Meridian
            </h2>
            <p className="text-xs text-slate-500">
              Invited by Alex Rivera · Product team
            </p>
          </div>
        </header>
        <form className="mt-6 grid gap-5" action="#" method="post">
          <label
            className="grid gap-2 text-sm font-medium"
            htmlFor="signup-team-invitation-name"
          >
            Your full name
            <input
              className="min-w-0 w-full rounded-lg border border-current/60 bg-transparent px-3 py-2.5 font-normal placeholder:text-current/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
              id="signup-team-invitation-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder=""
              required
            />
          </label>
          <label
            className="grid gap-2 text-sm font-medium"
            htmlFor="signup-team-invitation-email"
          >
            Work email
            <input
              className="min-w-0 w-full rounded-lg border border-current/60 bg-transparent px-3 py-2.5 font-normal placeholder:text-current/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
              id="signup-team-invitation-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder=""
              required
            />
          </label>
          <label
            className="grid gap-2 text-sm font-medium"
            htmlFor="signup-team-invitation-password"
          >
            Create a password
            <input
              className="min-w-0 w-full rounded-lg border border-current/60 bg-transparent px-3 py-2.5 font-normal placeholder:text-current/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
              id="signup-team-invitation-password"
              aria-describedby="signup-team-invitation-password-hint"
              minLength={12}
              name="password"
              type="password"
              autoComplete="new-password"
              placeholder=""
              required
            />
            <span
              id="signup-team-invitation-password-hint"
              className="text-xs font-normal text-slate-600"
            >
              Use at least 12 characters.
            </span>
          </label>
          <label
            className="flex items-start gap-3 text-sm"
            htmlFor="signup-team-invitation-terms"
          >
            <input
              className="mt-1 size-4 shrink-0 accent-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
              type="checkbox"
              name="terms"
              id="signup-team-invitation-terms"
              aria-labelledby="signup-team-invitation-terms-label"
              aria-describedby="signup-team-invitation-terms-hint"
              required
            />
            <span className="grid gap-1">
              <span
                id="signup-team-invitation-terms-label"
                className="font-medium"
              >
                I agree to the workspace terms
              </span>
              <span
                className="text-xs leading-5 opacity-70"
                id="signup-team-invitation-terms-hint"
              >
                Your account will belong to Meridian.
              </span>
            </span>
          </label>
          <button
            className="rounded-lg bg-blue-700 px-4 py-3 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950"
            type="submit"
          >
            Accept invitation
          </button>
        </form>
      </div>
    </section>
  )
}
