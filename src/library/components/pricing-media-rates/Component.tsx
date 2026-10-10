export default function PricingMediaRates() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <figure>
          <div
            role="img"
            aria-label="Image placeholder: offer or access experience"
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
          <figcaption className="mt-3 text-sm text-neutral-500">A caption that explains what the image shows.</figcaption>
        </figure>
        <div>
          <p className="text-sm font-medium text-neutral-500">Section label</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading for access rates and options</h2>
          <p className="mt-4 text-lg text-pretty text-neutral-600">A short explanation of what the rates cover and how readers choose the access they need.</p>
          <dl className="mt-8 border-t border-neutral-200">
            <div className="flex items-start justify-between gap-6 border-b border-neutral-200 py-5">
              <dt className="min-w-0">
                <span className="block text-base font-medium">Starting access</span>
                <span className="mt-1 block text-sm text-neutral-500">A short note about basic access.</span>
              </dt>
              <dd className="shrink-0 text-lg font-semibold">$19</dd>
            </div>
            <div className="flex items-start justify-between gap-6 border-b border-neutral-200 py-5">
              <dt className="min-w-0">
                <span className="block text-base font-medium">Expanded access</span>
                <span className="mt-1 block text-sm text-neutral-500">A short note about wider coverage.</span>
              </dt>
              <dd className="shrink-0 text-lg font-semibold">$49</dd>
            </div>
            <div className="flex items-start justify-between gap-6 border-b border-neutral-200 py-5">
              <dt className="min-w-0">
                <span className="block text-base font-medium">Complete access</span>
                <span className="mt-1 block text-sm text-neutral-500">A short note about full inclusions.</span>
              </dt>
              <dd className="shrink-0 text-lg font-semibold">$99</dd>
            </div>
            <div className="flex items-start justify-between gap-6 border-b border-neutral-200 py-5">
              <dt className="min-w-0">
                <span className="block text-base font-medium">Flexible access</span>
                <span className="mt-1 block text-sm text-neutral-500">A short note about tailored access.</span>
              </dt>
              <dd className="shrink-0 text-lg font-semibold">$149</dd>
            </div>
          </dl>
          <a
            href="#"
            className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-6 w-full"
          >
            Primary action
          </a>
          <p className="mt-3 text-sm text-neutral-500">A short note about access times, availability or conditions.</p>
        </div>
      </div>
    </section>
  )
}
