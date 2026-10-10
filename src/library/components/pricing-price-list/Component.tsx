export default function PricingPriceList() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <header className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-neutral-500">Section label</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading for separately priced options</h2>
          </div>
          <p className="max-w-sm text-lg text-pretty text-neutral-600">
            A short introduction that explains how to choose an option and what each starting price covers.
          </p>
        </header>
        <ol role="list" className="mt-10 border-t border-neutral-200">
          <li className="grid grid-cols-[32px_1fr] gap-6 border-b border-neutral-200 py-8 md:grid-cols-[48px_1fr_192px]">
            <span className="font-mono text-sm text-neutral-500">01</span>
            <div className="min-w-0">
              <h3 className="text-lg font-semibold">Entry scope or short session</h3>
              <p className="mt-2 text-base text-neutral-600">
                Describe the smallest option and the outcome it covers. Explain one limit that helps set expectations.
              </p>
              <p className="mt-3 text-sm text-neutral-500">Scope note for the starting option</p>
            </div>
            <div className="col-start-2 md:col-start-3 md:text-right">
              <p className="text-sm text-neutral-500">From</p>
              <p className="mt-1 text-2xl font-semibold tracking-tight">$19</p>
              <a
                href="#"
                aria-label="View entry scope or short session"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-3 inline-block"
              >
                View option
              </a>
            </div>
          </li>
          <li className="grid grid-cols-[32px_1fr] gap-6 border-b border-neutral-200 py-8 md:grid-cols-[48px_1fr_192px]">
            <span className="font-mono text-sm text-neutral-500">02</span>
            <div className="min-w-0">
              <h3 className="text-lg font-semibold">Expanded scope or longer session</h3>
              <p className="mt-2 text-base text-neutral-600">
                Describe the broader option and what the extra scope adds. Give readers a reason to choose this level.
              </p>
              <p className="mt-3 text-sm text-neutral-500">Scope note for the expanded option</p>
            </div>
            <div className="col-start-2 md:col-start-3 md:text-right">
              <p className="text-sm text-neutral-500">From</p>
              <p className="mt-1 text-2xl font-semibold tracking-tight">$49</p>
              <a
                href="#"
                aria-label="View expanded scope or longer session"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-3 inline-block"
              >
                View option
              </a>
            </div>
          </li>
          <li className="grid grid-cols-[32px_1fr] gap-6 border-b border-neutral-200 py-8 md:grid-cols-[48px_1fr_192px]">
            <span className="font-mono text-sm text-neutral-500">03</span>
            <div className="min-w-0">
              <h3 className="text-lg font-semibold">Complete scope or extended session</h3>
              <p className="mt-2 text-base text-neutral-600">
                Describe the most complete option and what is included. Explain the key difference from the smaller options.
              </p>
              <p className="mt-3 text-sm text-neutral-500">Scope note for the complete option</p>
            </div>
            <div className="col-start-2 md:col-start-3 md:text-right">
              <p className="text-sm text-neutral-500">From</p>
              <p className="mt-1 text-2xl font-semibold tracking-tight">$99</p>
              <a
                href="#"
                aria-label="View complete scope or extended session"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-3 inline-block"
              >
                View option
              </a>
            </div>
          </li>
          <li className="grid grid-cols-[32px_1fr] gap-6 border-b border-neutral-200 py-8 md:grid-cols-[48px_1fr_192px]">
            <span className="font-mono text-sm text-neutral-500">04</span>
            <div className="min-w-0">
              <h3 className="text-lg font-semibold">Custom scope or flexible session</h3>
              <p className="mt-2 text-base text-neutral-600">
                Describe the tailored option and how its scope is agreed. Say which details affect the final price.
              </p>
              <p className="mt-3 text-sm text-neutral-500">Scope note for the custom option</p>
            </div>
            <div className="col-start-2 md:col-start-3 md:text-right">
              <p className="text-sm text-neutral-500">From</p>
              <p className="mt-1 text-2xl font-semibold tracking-tight">$149</p>
              <a
                href="#"
                aria-label="View custom scope or flexible session"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-3 inline-block"
              >
                View option
              </a>
            </div>
          </li>
        </ol>
      </div>
    </section>
  )
}
