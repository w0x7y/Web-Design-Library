export default function TestimonialsFeaturedMosaic() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <header>
          <p className="text-sm font-medium text-neutral-500">Section label</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading for a featured customer story</h2>
        </header>
        <div className="mt-10 grid gap-5 md:grid-cols-[7fr_5fr]">
          <figure className="rounded-lg border border-neutral-200 bg-white p-6 flex flex-col">
            <div className="flex items-center gap-2 font-semibold">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-6"
              >
                <rect x="4" y="4" width="16" height="16" rx="3" />
                <path d="M8 12h8M12 8v8" />
              </svg>
              Logo
            </div>
            <blockquote className="mt-8 mb-8 text-2xl font-medium text-balance">
              “A featured customer quote that names the main outcome and explains why it mattered. Include enough detail to show the experience behind the
              recommendation, then close with the benefit the customer values most.”
            </blockquote>
            <figcaption className="mt-auto border-t border-neutral-200 pt-6">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600"
                >
                  AR
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold">Alex Rivera</p>
                  <p className="mt-1 text-sm text-neutral-500">Role and organization</p>
                </div>
              </div>
              <a
                href="#"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-4 inline-block"
              >
                Read full story
              </a>
            </figcaption>
          </figure>
          <div className="grid gap-5">
            <figure className="rounded-lg border border-neutral-200 bg-white p-6">
              <blockquote className="text-base text-neutral-600">
                “An endorsement that explains why this option was the right fit. Include a specific reason the customer would recommend the experience to
                someone else.”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600"
                >
                  JL
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold">Jordan Lee</p>
                  <p className="mt-1 text-sm text-neutral-500">Role and organization</p>
                </div>
              </figcaption>
            </figure>
            <figure className="rounded-lg border border-neutral-200 bg-white p-6">
              <blockquote className="text-base text-neutral-600">
                “A short account of the change the customer noticed after getting started. Focus on the outcome and the part of the experience that helped.”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600"
                >
                  SK
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold">Sam Kim</p>
                  <p className="mt-1 text-sm text-neutral-500">Role and organization</p>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
