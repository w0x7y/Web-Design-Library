export default function CtaEmailSignup() {
  return (
    <section className="border-t border-neutral-200 bg-white text-neutral-900">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:py-24 lg:grid-cols-2 lg:items-end lg:gap-16">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading for the email update invitation</h2>
          <p className="mt-4 text-lg text-pretty text-neutral-600">Supporting copy that explains the kind of updates readers can expect and how often they arrive.</p>
        </div>
        <form action="#" method="get">
          <label htmlFor="cta-email-signup-email" className="mb-2 block text-sm font-medium">Email</label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input id="cta-email-signup-email" name="email" type="email" autoComplete="email" required placeholder="name@example.com" aria-describedby="cta-email-signup-hint" className="h-11 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 min-w-0 sm:flex-1" />
            <button type="submit" className="inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-medium transition-colors bg-neutral-900 text-white hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 shrink-0">Sign up</button>
          </div>
          <p id="cta-email-signup-hint" className="mt-3 text-xs text-neutral-500">Hint that explains email frequency and how to unsubscribe.</p>
        </form>
      </div>
    </section>
  )
}
