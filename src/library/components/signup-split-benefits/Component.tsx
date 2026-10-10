export default function SignupSplitBenefits() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:py-24 lg:grid-cols-2">
        <div className="lg:order-2">
          <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Create your workspace</h1>
          <form className="mt-8 grid gap-5">
            <div><label htmlFor="signup-split-benefits-workspace" className="block text-sm font-medium text-neutral-900">Workspace name</label><input id="signup-split-benefits-workspace" name="workspace" type="text" autoComplete="organization" aria-describedby="signup-split-benefits-workspace-hint" required placeholder="Workspace name" className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" /><p id="signup-split-benefits-workspace-hint" className="mt-2 text-sm text-neutral-500">A short name members will recognize.</p></div>
            <div><label htmlFor="signup-split-benefits-email" className="block text-sm font-medium text-neutral-900">Email</label><input id="signup-split-benefits-email" name="email" type="email" autoComplete="email" required placeholder="name@example.com" className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" /></div>
            <div><label htmlFor="signup-split-benefits-password" className="block text-sm font-medium text-neutral-900">Password</label><input id="signup-split-benefits-password" name="password" type="password" autoComplete="new-password" aria-describedby="signup-split-benefits-password-hint" required minLength={12} className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" /><p id="signup-split-benefits-password-hint" className="mt-2 text-sm text-neutral-500">Password rules and minimum length.</p></div>
            <label className="flex items-start gap-3 text-sm text-neutral-600"><input type="checkbox" name="terms" required className="mt-1 size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" /><span>I agree to the <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Terms</a> and <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Privacy policy</a>.</span></label>
            <button type="submit" className="w-full inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Create workspace</button>
          </form>
          <p className="mt-6 text-sm text-neutral-500">Already have an account? <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Log in</a></p>
        </div>
        <aside className="rounded-lg bg-neutral-50 p-8 sm:p-10 lg:order-1">
          <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">Free 14-day trial</span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Headline describing the benefits of joining</h2>
          <ul role="list" className="mt-8">
            <li className="flex gap-3 border-t border-neutral-200 py-5"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-1 size-5 shrink-0"><path d="m5 12 4 4L19 6" /></svg><div><h3 className="text-base font-semibold">Included access</h3><p className="mt-1 text-sm text-neutral-600">One line describing what the account includes.</p></div></li>
            <li className="flex gap-3 border-t border-neutral-200 py-5"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-1 size-5 shrink-0"><path d="m5 12 4 4L19 6" /></svg><div><h3 className="text-base font-semibold">Guided setup</h3><p className="mt-1 text-sm text-neutral-600">A short explanation of help during setup.</p></div></li>
            <li className="flex gap-3 border-t border-neutral-200 py-5"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-1 size-5 shrink-0"><path d="m5 12 4 4L19 6" /></svg><div><h3 className="text-base font-semibold">Room to grow</h3><p className="mt-1 text-sm text-neutral-600">A note about adding members as needs change.</p></div></li>
          </ul>
          <p className="mt-6 text-sm text-neutral-500">No card required</p>
        </aside>
      </div>
    </section>
  )
}
