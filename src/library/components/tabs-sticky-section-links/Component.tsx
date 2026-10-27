export default function TabsStickySectionLinks() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 pt-16 sm:pt-24">
        <p className="text-sm font-medium text-neutral-500">Eyebrow for the page</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Page heading that names the subject</h2>
        <p className="mt-4 max-w-2xl text-lg text-pretty text-neutral-600">A short introduction that says what this page covers and points readers to the section they need.</p>
      </div>
      <nav aria-label="Sections on this page" className="sticky top-0 z-10 mt-10 border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl">
          <ul role="list" className="flex gap-2 overflow-x-auto px-6 py-3">
            <li>
              <a href="#tabs-sticky-section-links-overview" aria-current="true" className="flex h-9 items-center rounded-full px-4 text-sm font-medium whitespace-nowrap text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 aria-[current=true]:bg-neutral-900 aria-[current=true]:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 forced-colors:aria-[current=true]:border">Overview</a>
            </li>
            <li>
              <a href="#tabs-sticky-section-links-features" className="flex h-9 items-center rounded-full px-4 text-sm font-medium whitespace-nowrap text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 aria-[current=true]:bg-neutral-900 aria-[current=true]:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 forced-colors:aria-[current=true]:border">Features</a>
            </li>
            <li>
              <a href="#tabs-sticky-section-links-specifications" className="flex h-9 items-center rounded-full px-4 text-sm font-medium whitespace-nowrap text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 aria-[current=true]:bg-neutral-900 aria-[current=true]:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 forced-colors:aria-[current=true]:border">Specifications</a>
            </li>
            <li>
              <a href="#tabs-sticky-section-links-support" className="flex h-9 items-center rounded-full px-4 text-sm font-medium whitespace-nowrap text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 aria-[current=true]:bg-neutral-900 aria-[current=true]:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 forced-colors:aria-[current=true]:border">Support</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="mx-auto max-w-6xl px-6 pb-16 sm:pb-24">
        <section id="tabs-sticky-section-links-overview" aria-labelledby="tabs-sticky-section-links-overview-heading" className="grid scroll-mt-16 gap-4 border-b border-neutral-200 py-12 last:border-b-0 lg:grid-cols-3 lg:gap-16">
          <h3 id="tabs-sticky-section-links-overview-heading" className="text-2xl font-semibold tracking-tight">Overview</h3>
          <div className="lg:col-span-2">
            <p className="text-base text-pretty text-neutral-600">Opening paragraph that explains what the subject is, who it is for and the main reason to choose it.</p>
            <p className="mt-4 text-base text-pretty text-neutral-600">Second paragraph with the context a reader needs before the detailed sections below.</p>
          </div>
        </section>
        <section id="tabs-sticky-section-links-features" aria-labelledby="tabs-sticky-section-links-features-heading" className="grid scroll-mt-16 gap-4 border-b border-neutral-200 py-12 last:border-b-0 lg:grid-cols-3 lg:gap-16">
          <h3 id="tabs-sticky-section-links-features-heading" className="text-2xl font-semibold tracking-tight">Features</h3>
          <div className="lg:col-span-2">
            <ul role="list" className="grid gap-6 sm:grid-cols-2">
              <li>
                <h4 className="text-base font-semibold">First feature name</h4>
                <p className="mt-1 text-sm text-pretty text-neutral-600">One sentence on what this feature does.</p>
              </li>
              <li>
                <h4 className="text-base font-semibold">Second feature name</h4>
                <p className="mt-1 text-sm text-pretty text-neutral-600">One sentence on what this feature does.</p>
              </li>
              <li>
                <h4 className="text-base font-semibold">Third feature name</h4>
                <p className="mt-1 text-sm text-pretty text-neutral-600">One sentence on what this feature does.</p>
              </li>
              <li>
                <h4 className="text-base font-semibold">Fourth feature name</h4>
                <p className="mt-1 text-sm text-pretty text-neutral-600">One sentence on what this feature does.</p>
              </li>
            </ul>
          </div>
        </section>
        <section id="tabs-sticky-section-links-specifications" aria-labelledby="tabs-sticky-section-links-specifications-heading" className="grid scroll-mt-16 gap-4 border-b border-neutral-200 py-12 last:border-b-0 lg:grid-cols-3 lg:gap-16">
          <h3 id="tabs-sticky-section-links-specifications-heading" className="text-2xl font-semibold tracking-tight">Specifications</h3>
          <div className="lg:col-span-2">
            <dl className="text-sm">
              <div className="flex justify-between gap-4 border-b border-neutral-200 py-3 first:pt-0 last:border-b-0">
                <dt className="text-neutral-500">Dimensions</dt>
                <dd className="font-medium text-neutral-900">24 × 16 × 8 cm</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-neutral-200 py-3 first:pt-0 last:border-b-0">
                <dt className="text-neutral-500">Weight</dt>
                <dd className="font-medium text-neutral-900">1.2 kg</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-neutral-200 py-3 first:pt-0 last:border-b-0">
                <dt className="text-neutral-500">Materials</dt>
                <dd className="font-medium text-neutral-900">Material name</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-neutral-200 py-3 first:pt-0 last:border-b-0">
                <dt className="text-neutral-500">Warranty</dt>
                <dd className="font-medium text-neutral-900">2 years</dd>
              </div>
            </dl>
          </div>
        </section>
        <section id="tabs-sticky-section-links-support" aria-labelledby="tabs-sticky-section-links-support-heading" className="grid scroll-mt-16 gap-4 border-b border-neutral-200 py-12 last:border-b-0 lg:grid-cols-3 lg:gap-16">
          <h3 id="tabs-sticky-section-links-support-heading" className="text-2xl font-semibold tracking-tight">Support</h3>
          <div className="lg:col-span-2">
            <p className="text-base text-pretty text-neutral-600">Explain where readers can get help, how quickly they can expect a reply and what to have ready.</p>
            <a href="#" className="mt-6 inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Contact support</a>
          </div>
        </section>
      </div>
    </section>
  )
}
