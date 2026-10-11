export default function TestimonialsLargeQuote() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-4xl px-6 py-16 text-center sm:py-24">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mx-auto size-12 text-neutral-400"
        >
          <path d="M10 11H4V7a3 3 0 0 1 3-3h3M4 11v7h6v-7M20 11h-6V7a3 3 0 0 1 3-3h3M14 11v7h6v-7" />
        </svg>
        <figure className="mt-6">
          <blockquote className="text-2xl font-medium text-balance sm:text-3xl">
            “A customer quote that names the main outcome in their own words. Include one concrete detail about what changed and why that difference mattered to
            them, so the statement can stand on its own.”
          </blockquote>
          <figcaption className="mt-10 justify-center flex items-center gap-3">
            <span
              aria-hidden="true"
              className="flex size-12 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600"
            >
              AR
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold">Alex Rivera</p>
              <p className="mt-1 text-sm text-neutral-500">Role and organization</p>
            </div>
          </figcaption>
        </figure>
        <p className="mt-4">
          <a
            href="#"
            className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            Read full story
          </a>
        </p>
      </div>
    </section>
  )
}
