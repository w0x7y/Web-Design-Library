export default function SignupWaitlistInline() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <div className="mx-auto max-w-2xl">
          <header className="text-center">
            <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">Opens Mar 14</span>
            <h1 className="mt-6 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Headline inviting early interest</h1>
            <p className="mt-4 text-lg text-pretty text-neutral-600">A short introduction explaining what opens next and why readers should join.</p>
          </header>
          <form className="mt-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
              <div className="min-w-0 flex-1">
                <label htmlFor="signup-waitlist-inline-email" className="block text-sm font-medium text-neutral-900">Email</label>
                <input id="signup-waitlist-inline-email" name="email" type="email" autoComplete="email" required aria-describedby="signup-waitlist-inline-email-hint" placeholder="name@example.com" className="mt-2 h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" />
              </div>
              <button type="submit" className="w-full shrink-0 inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 sm:w-auto">Join the waitlist</button>
            </div>
            <p id="signup-waitlist-inline-email-hint" className="mt-3 text-sm text-neutral-500">Hint explaining when emails arrive and how the address is used.</p>
          </form>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <div aria-hidden="true" className="flex">
              <span className="flex size-10 items-center justify-center rounded-full border border-white bg-neutral-200 text-sm font-medium text-neutral-600">AR</span>
              <span className="-ml-3 flex size-10 items-center justify-center rounded-full border border-white bg-neutral-200 text-sm font-medium text-neutral-600">JL</span>
              <span className="-ml-3 flex size-10 items-center justify-center rounded-full border border-white bg-neutral-200 text-sm font-medium text-neutral-600">MK</span>
            </div>
            <p className="text-sm text-neutral-500">1,284 people have joined</p>
          </div>
        </div>
      </div>
    </section>
  )
}
