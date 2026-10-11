export default function TestimonialsMediaQuote() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 grid items-start gap-12 lg:grid-cols-[5fr_7fr]">
        <div
          role="img"
          aria-label="Image placeholder: customer portrait or shared experience"
          className="flex aspect-[4/3] items-center justify-center rounded-lg bg-neutral-100 text-neutral-400 lg:aspect-[4/5]"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-10"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-5-5L5 21" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-medium text-neutral-500">Customer perspectives</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading that connects two customer voices</h2>
          <div className="mt-8 divide-y divide-neutral-200">
            <figure className="py-6">
              <blockquote className="text-xl text-neutral-600">
                “A customer quote that explains the main benefit from their perspective. Describe a specific part of the experience that helped them, then name
                the outcome they would share with another reader.”
              </blockquote>
              <figcaption className="mt-5">
                <p className="text-sm font-semibold">Alex Rivera</p>
                <p className="mt-1 text-sm text-neutral-500">Role and organization</p>
              </figcaption>
            </figure>
            <figure className="py-6">
              <blockquote className="text-xl text-neutral-600">
                “A second customer quote that adds a different perspective on the same experience. Focus on another useful detail and explain why it mattered,
                so the two voices complement each other.”
              </blockquote>
              <figcaption className="mt-5">
                <p className="text-sm font-semibold">Jordan Lee</p>
                <p className="mt-1 text-sm text-neutral-500">Role and organization</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
