export default function PricingOptionPicker() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="group rounded-lg border border-neutral-200 bg-white p-6">
          <h2 className="text-2xl font-semibold tracking-tight">Title of the configurable offer</h2>
          <p className="mt-3 text-base text-neutral-600">A short description that explains the offer and how size changes the included quantity.</p>
          <fieldset aria-describedby="pricing-option-picker-terms" className="mt-8">
            <legend className="text-sm font-medium">Choose a size</legend>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              <label className="block cursor-pointer rounded-md border border-neutral-300 bg-white p-4 transition-colors hover:bg-neutral-50 has-[:checked]:border-neutral-900 has-[:checked]:bg-neutral-50 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900">
                <input id="pricing-option-picker-small" type="radio" name="pricing-option-picker-size" className="peer sr-only focus-visible:outline-hidden" />
                <span className="block text-sm font-semibold">Small</span>
                <span className="mt-1 block text-sm text-neutral-500">Starting quantity</span>
                <span aria-hidden="true" className="mt-3 block text-xs font-medium opacity-0 peer-checked:opacity-100">
                  Selected
                </span>
              </label>
              <label className="block cursor-pointer rounded-md border border-neutral-300 bg-white p-4 transition-colors hover:bg-neutral-50 has-[:checked]:border-neutral-900 has-[:checked]:bg-neutral-50 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900">
                <input
                  id="pricing-option-picker-medium"
                  type="radio"
                  name="pricing-option-picker-size"
                  defaultChecked
                  className="peer sr-only focus-visible:outline-hidden"
                />
                <span className="block text-sm font-semibold">Medium</span>
                <span className="mt-1 block text-sm text-neutral-500">Expanded quantity</span>
                <span aria-hidden="true" className="mt-3 block text-xs font-medium opacity-0 peer-checked:opacity-100">
                  Selected
                </span>
              </label>
              <label className="block cursor-pointer rounded-md border border-neutral-300 bg-white p-4 transition-colors hover:bg-neutral-50 has-[:checked]:border-neutral-900 has-[:checked]:bg-neutral-50 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900">
                <input id="pricing-option-picker-large" type="radio" name="pricing-option-picker-size" className="peer sr-only focus-visible:outline-hidden" />
                <span className="block text-sm font-semibold">Large</span>
                <span className="mt-1 block text-sm text-neutral-500">Complete quantity</span>
                <span aria-hidden="true" className="mt-3 block text-xs font-medium opacity-0 peer-checked:opacity-100">
                  Selected
                </span>
              </label>
            </div>
          </fieldset>
          <p aria-live="polite" aria-atomic="true" className="mt-8 flex flex-wrap items-baseline gap-2">
            <span className="text-4xl font-semibold tracking-tight">
              <span className="hidden group-has-[#pricing-option-picker-small:checked]:inline">$19</span>
              <span className="hidden group-has-[#pricing-option-picker-medium:checked]:inline">$49</span>
              <span className="hidden group-has-[#pricing-option-picker-large:checked]:inline">$99</span>
            </span>
            <span className="text-sm text-neutral-500">/order</span>
          </p>
          <a
            href="#"
            className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-6 w-full"
          >
            Primary action
          </a>
          <p id="pricing-option-picker-terms" className="mt-3 text-sm text-neutral-500">
            A short hint about the terms that apply to every size.
          </p>
        </div>
        <aside className="rounded-lg border border-neutral-200 bg-neutral-50 p-6">
          <h3 className="text-lg font-semibold">What's included</h3>
          <dl className="mt-4">
            <div className="flex flex-wrap justify-between gap-2 border-b border-neutral-200 py-4">
              <dt className="text-sm text-neutral-600">Included quantity</dt>
              <dd className="text-sm font-medium">By chosen size</dd>
            </div>
            <div className="flex flex-wrap justify-between gap-2 border-b border-neutral-200 py-4">
              <dt className="text-sm text-neutral-600">Core access</dt>
              <dd className="text-sm font-medium">Included</dd>
            </div>
            <div className="flex flex-wrap justify-between gap-2 border-b border-neutral-200 py-4">
              <dt className="text-sm text-neutral-600">Support level</dt>
              <dd className="text-sm font-medium">Standard</dd>
            </div>
            <div className="flex flex-wrap justify-between gap-2 border-b border-neutral-200 py-4">
              <dt className="text-sm text-neutral-600">Renewal</dt>
              <dd className="text-sm font-medium">No auto-renewal</dd>
            </div>
          </dl>
          <p className="mt-6 text-sm text-neutral-600">A supporting note that explains which inclusions stay the same across all sizes.</p>
        </aside>
      </div>
    </section>
  )
}
