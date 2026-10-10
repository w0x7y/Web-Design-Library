export default function CtaProjectEnquiry() {
  return (
    <section className="bg-stone-100 text-stone-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:gap-16">
        <div>
          <p className="flex items-center gap-2 text-xs font-medium text-orange-800">
            <span
              aria-hidden="true"
              className="size-2 rounded-full bg-orange-800"
            />
            Taking briefs for January 2027
          </p>
          <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl">
            Tell us what
            <br />
            you have in mind.
          </h2>
          <p className="mt-5 max-w-sm leading-relaxed text-stone-600">
            A new chapter, a thorny problem or a good idea that needs a form. A
            few lines is plenty to start.
          </p>
          <p className="mt-7 text-sm text-stone-600">
            Prefer email?{' '}
            <a
              href="mailto:hello@formfield.studio"
              className="break-all text-stone-950 underline underline-offset-4 hover:text-orange-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            >
              hello@formfield.studio
            </a>
          </p>
        </div>
        <form action="#" method="get" className="space-y-5">
          <div>
            <label
              htmlFor="cta-project-enquiry-email"
              className="mb-2 block text-sm font-medium"
            >
              Your email (required)
            </label>
            <input
              id="cta-project-enquiry-email"
              type="email"
              name="email"
              autoComplete="email"
              aria-describedby="cta-project-enquiry-hint"
              placeholder="you@company.com"
              required
              className="h-12 w-full rounded-xl border border-stone-500 bg-white px-4 text-base placeholder:text-stone-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950 leading-[normal] [filter:opacity(1)]"
            />
          </div>
          <div>
            <label
              htmlFor="cta-project-enquiry-brief"
              className="mb-2 block text-sm font-medium"
            >
              A little about the project
            </label>
            <textarea
              id="cta-project-enquiry-brief"
              name="brief"
              rows={4}
              placeholder="What are you hoping to make?"
              aria-describedby="cta-project-enquiry-hint"
              className="min-h-32 w-full resize-y rounded-xl border border-stone-500 bg-white p-4 text-base placeholder:text-stone-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950 [filter:opacity(1)]"
            />
          </div>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <p
              id="cta-project-enquiry-hint"
              className="max-w-56 text-xs leading-relaxed text-stone-600"
            >
              We read every note and reply within two working days.
            </p>
            <button
              type="submit"
              className="inline-flex min-h-12 w-fit shrink-0 items-center gap-3 rounded-full bg-stone-950 px-6 text-sm font-medium text-white hover:bg-stone-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950"
            >
              Send your note{' '}
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4"
              >
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
