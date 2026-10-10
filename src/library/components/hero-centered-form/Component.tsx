export default function HeroCenteredForm() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-neutral-500">Eyebrow for the signup invitation</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">Headline that introduces the main benefit</h1>
          <p className="mt-6 text-lg text-pretty text-neutral-600">Supporting copy that explains what readers will receive and why they should join.</p>
          <form action="#" method="get" className="mx-auto mt-10 max-w-xl">
            <label htmlFor="hero-centered-form-email" className="sr-only">Email</label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input id="hero-centered-form-email" name="email" type="email" autoComplete="email" required placeholder="name@example.com" aria-describedby="hero-centered-form-hint" className="h-11 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 min-w-0 sm:flex-1" />
              <button type="submit" className="inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-medium transition-colors bg-neutral-900 text-white hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 shrink-0">Join waitlist</button>
            </div>
            <p id="hero-centered-form-hint" className="mt-3 text-sm text-neutral-500">Hint that sets expectations for email updates and privacy.</p>
          </form>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <div className="flex -space-x-2">
              <span aria-hidden="true" className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white bg-neutral-200 text-xs font-medium text-neutral-600">AR</span>
              <span aria-hidden="true" className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white bg-neutral-200 text-xs font-medium text-neutral-600">JC</span>
              <span aria-hidden="true" className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white bg-neutral-200 text-xs font-medium text-neutral-600">MP</span>
              <span aria-hidden="true" className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white bg-neutral-200 text-xs font-medium text-neutral-600">SK</span>
              <span aria-hidden="true" className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white bg-neutral-200 text-xs font-medium text-neutral-600">TL</span>
            </div>
            <p className="text-sm text-neutral-500">Join 1,284 people on the waitlist</p>
          </div>
        </div>
      </div>
    </section>
  )
}
