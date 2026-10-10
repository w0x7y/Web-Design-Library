export default function SignupInviteAccept() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-md rounded-lg border border-neutral-200 bg-white p-6 sm:p-8">
          <header className="flex items-start gap-4 border-b border-neutral-200 pb-6">
            <span aria-hidden="true" className="flex size-12 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-sm font-medium text-neutral-900">WN</span>
            <div>
              <h1 className="text-lg font-semibold">Alex Rivera invited you to join Workspace name</h1>
              <p className="mt-2 text-sm text-neutral-500">Role: Member</p>
            </div>
          </header>
          <form className="mt-6 grid gap-5">
            <div>
              <label htmlFor="signup-invite-accept-email" className="block text-sm font-medium text-neutral-900">Invited email</label>
              <input id="signup-invite-accept-email" name="email" type="email" autoComplete="email" defaultValue="name@example.com" readOnly aria-describedby="signup-invite-accept-email-hint" className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 read-only:bg-neutral-50" />
              <p id="signup-invite-accept-email-hint" className="mt-2 text-sm text-neutral-500">This invitation is tied to this address.</p>
            </div>
            <div><label htmlFor="signup-invite-accept-name" className="block text-sm font-medium text-neutral-900">Full name</label><input id="signup-invite-accept-name" name="name" type="text" autoComplete="name" required placeholder="Full name" className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" /></div>
            <div><label htmlFor="signup-invite-accept-password" className="block text-sm font-medium text-neutral-900">Password</label><input id="signup-invite-accept-password" name="password" type="password" autoComplete="new-password" aria-describedby="signup-invite-accept-password-hint" required minLength={12} className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" /><p id="signup-invite-accept-password-hint" className="mt-2 text-sm text-neutral-500">Password rules and minimum length.</p></div>
            <label className="flex items-start gap-3 text-sm text-neutral-600"><input type="checkbox" name="terms" required className="mt-1 size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" /><span>I agree to the <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Terms</a> and <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Privacy policy</a>.</span></label>
            <button type="submit" className="w-full inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Accept and join</button>
          </form>
          <p className="mt-6 text-sm text-neutral-500">Not you? <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Use another account</a></p>
        </div>
      </div>
    </section>
  )
}
