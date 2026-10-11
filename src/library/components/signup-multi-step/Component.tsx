export default function SignupMultiStep() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl">
          <ol role="list" aria-label="Registration progress" className="flex items-center gap-2">
            <li className="flex min-w-0 flex-1 items-center gap-2">
              <span aria-hidden="true" className="flex size-8 shrink-0 items-center justify-center rounded-full border border-neutral-300"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="m5 12 4 4L19 6" /></svg></span>
              <span className="sr-only text-sm text-neutral-600 sm:not-sr-only">Account<span className="sr-only">, completed</span></span>
              <span aria-hidden="true" className="h-px flex-1 bg-neutral-200" />
            </li>
            <li aria-current="step" className="flex min-w-0 flex-1 items-center gap-2">
              <span aria-hidden="true" className="flex size-8 shrink-0 items-center justify-center rounded-full border border-neutral-900 bg-neutral-900 text-sm font-medium text-white forced-colors:border-[Highlight] forced-colors:bg-[Canvas] forced-colors:text-[CanvasText]">2</span>
              <span className="sr-only text-sm font-medium sm:not-sr-only">Workspace</span>
              <span aria-hidden="true" className="h-px flex-1 bg-neutral-200" />
            </li>
            <li className="flex items-center gap-2">
              <span aria-hidden="true" className="flex size-8 shrink-0 items-center justify-center rounded-full border border-neutral-300 text-sm text-neutral-500">3</span>
              <span className="sr-only text-sm text-neutral-500 sm:not-sr-only">Finish</span>
            </li>
          </ol>
          <p className="mt-4 text-sm font-medium sm:hidden">Step 2 of 3: Workspace</p>
          <form className="mt-8 rounded-lg border border-neutral-200 bg-white p-6 sm:p-8">
            <fieldset className="min-w-0">
              <legend className="text-2xl font-semibold tracking-tight">Workspace details</legend>
              <p className="mt-3 text-sm text-neutral-600">Short explanation of the details needed for this step.</p>
              <div className="mt-6 grid gap-5">
                <div>
                  <label htmlFor="signup-multi-step-company" className="block text-sm font-medium text-neutral-900">Company name</label>
                  <input id="signup-multi-step-company" name="company" type="text" autoComplete="organization" required placeholder="Company name" className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" />
                </div>
                <div>
                  <label htmlFor="signup-multi-step-team-size" className="block text-sm font-medium text-neutral-900">Team size</label>
                  <select id="signup-multi-step-team-size" name="team-size" autoComplete="off" defaultValue="" required aria-describedby="signup-multi-step-team-size-hint" className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
                    <option value="" disabled>Select a team size</option>
                    <option value="1">Just me</option>
                    <option value="2-10">2–10 people</option>
                    <option value="11-50">11–50 people</option>
                    <option value="51-plus">51 or more people</option>
                  </select>
                  <p id="signup-multi-step-team-size-hint" className="mt-2 text-sm text-neutral-500">Include everyone who will use the workspace.</p>
                </div>
                <div>
                  <label htmlFor="signup-multi-step-role" className="block text-sm font-medium text-neutral-900">Role</label>
                  <select id="signup-multi-step-role" name="role" autoComplete="organization-title" defaultValue="" required aria-describedby="signup-multi-step-role-hint" className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
                    <option value="" disabled>Select your role</option>
                    <option value="member">Member</option>
                    <option value="manager">Manager</option>
                    <option value="owner">Owner</option>
                  </select>
                  <p id="signup-multi-step-role-hint" className="mt-2 text-sm text-neutral-500">Choose the role closest to your responsibilities.</p>
                </div>
              </div>
            </fieldset>
            <footer className="mt-8 flex flex-col gap-3 border-t border-neutral-200 pt-6 sm:flex-row sm:justify-between">
              <button type="submit" className="w-full inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 sm:order-2 sm:w-auto">Continue</button>
              <a href="#" className="w-full inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 sm:order-1 sm:w-auto">Back</a>
            </footer>
          </form>
        </div>
      </div>
    </section>
  )
}
