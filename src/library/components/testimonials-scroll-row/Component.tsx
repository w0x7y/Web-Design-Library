export default function TestimonialsScrollRow() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <header className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading for a row of customer stories</h2>
            <p className="mt-4 text-lg text-pretty text-neutral-600">
              A short introduction that explains the perspectives in this collection and invites readers to explore more.
            </p>
          </div>
          <a
            href="#"
            className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 shrink-0"
          >
            All stories
          </a>
        </header>
        <div
          tabIndex={0}
          role="region"
          aria-label="Customer quotes, scroll horizontally to read more"
          className="relative mt-10 overflow-x-auto snap-x snap-mandatory focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
        >
          <ul role="list" className="flex gap-6 pb-4">
            <li className="rounded-lg border border-neutral-200 bg-white p-6 shrink-0 basis-[85%] snap-start sm:basis-[45%] lg:basis-[30%]">
              <figure className="flex h-full flex-col">
                <blockquote className="text-base text-neutral-600">
                  “A customer quote that names the main benefit in their own words. Add one concrete detail about the improvement that mattered most to them.”
                </blockquote>
                <figcaption className="mt-auto pt-6 flex items-center gap-3">
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
                </figcaption>
              </figure>
            </li>
            <li className="rounded-lg border border-neutral-200 bg-white p-6 shrink-0 basis-[85%] snap-start sm:basis-[45%] lg:basis-[30%]">
              <figure className="flex h-full flex-col">
                <blockquote className="text-base text-neutral-600">
                  “An endorsement that explains why this option was the right fit. Include a specific reason the customer would recommend the experience to
                  someone else.”
                </blockquote>
                <figcaption className="mt-auto pt-6 flex items-center gap-3">
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
            </li>
            <li className="rounded-lg border border-neutral-200 bg-white p-6 shrink-0 basis-[85%] snap-start sm:basis-[45%] lg:basis-[30%]">
              <figure className="flex h-full flex-col">
                <blockquote className="text-base text-neutral-600">
                  “A short account of the change the customer noticed after getting started. Focus on the outcome and the part of the experience that helped.”
                </blockquote>
                <figcaption className="mt-auto pt-6 flex items-center gap-3">
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
            </li>
            <li className="rounded-lg border border-neutral-200 bg-white p-6 shrink-0 basis-[85%] snap-start sm:basis-[45%] lg:basis-[30%]">
              <figure className="flex h-full flex-col">
                <blockquote className="text-base text-neutral-600">
                  “A customer reflection on a useful capability or moment of support. Explain the practical difference it made without turning the quote into a
                  feature list.”
                </blockquote>
                <figcaption className="mt-auto pt-6 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600"
                  >
                    MT
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold">Morgan Taylor</p>
                    <p className="mt-1 text-sm text-neutral-500">Role and organization</p>
                  </div>
                </figcaption>
              </figure>
            </li>
            <li className="rounded-lg border border-neutral-200 bg-white p-6 shrink-0 basis-[85%] snap-start sm:basis-[45%] lg:basis-[30%]">
              <figure className="flex h-full flex-col">
                <blockquote className="text-base text-neutral-600">
                  “A quote about how the experience fit the customer’s needs. Name the strongest result and one detail that makes the statement feel grounded.”
                </blockquote>
                <figcaption className="mt-auto pt-6 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600"
                  >
                    CP
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold">Casey Patel</p>
                    <p className="mt-1 text-sm text-neutral-500">Role and organization</p>
                  </div>
                </figcaption>
              </figure>
            </li>
            <li className="rounded-lg border border-neutral-200 bg-white p-6 shrink-0 basis-[85%] snap-start sm:basis-[45%] lg:basis-[30%]">
              <figure className="flex h-full flex-col">
                <blockquote className="text-base text-neutral-600">
                  “A brief recommendation from a customer with a different perspective. Describe what stood out to them and why they would choose the same
                  option again.”
                </blockquote>
                <figcaption className="mt-auto pt-6 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600"
                  >
                    RN
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold">Riley Nguyen</p>
                    <p className="mt-1 text-sm text-neutral-500">Role and organization</p>
                  </div>
                </figcaption>
              </figure>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
