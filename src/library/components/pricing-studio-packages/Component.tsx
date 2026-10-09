export default function PricingStudioPackages() {
  return (
    <section className="bg-stone-100 text-stone-950">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-orange-800">
              Ways to work together
            </p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              A clear scope.
              <br />A considered result.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-stone-600">
            Fixed starting points for teams ready to move. We confirm the full
            fee before the work begins.
          </p>
        </div>
        <div className="mt-12">
          <article className="grid grid-cols-[2rem_1fr] gap-5 border-t border-stone-300 py-8 md:grid-cols-[3rem_1fr_12rem]">
            <span className="pt-2 font-mono text-xs text-orange-800">01</span>
            <div>
              <h3 className="text-2xl font-medium">The brand foundation</h3>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-stone-600">
                Positioning, a visual identity and guidelines your team will
                actually use. A complete starting point.
              </p>
              <p className="mt-4 text-xs text-stone-600">
                4–6 weeks / Strategy + identity
              </p>
            </div>
            <div className="col-start-2 md:col-start-auto md:text-right">
              <p className="text-xs text-stone-600">Starting at</p>
              <p className="mt-1 text-3xl font-medium">$8,500</p>
              <a
                href="#"
                className="mt-3 inline-block text-sm text-orange-800 underline underline-offset-4 hover:text-stone-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
              >
                Discuss a brand
              </a>
            </div>
          </article>
          <article className="grid grid-cols-[2rem_1fr] gap-5 border-t border-stone-300 py-8 md:grid-cols-[3rem_1fr_12rem]">
            <span className="pt-2 font-mono text-xs text-orange-800">02</span>
            <div>
              <h3 className="text-2xl font-medium">The digital home</h3>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-stone-600">
                A five-page website, designed and built around your content.
                Includes a simple editing system and handover.
              </p>
              <p className="mt-4 text-xs text-stone-600">
                6–8 weeks / Design + development
              </p>
            </div>
            <div className="col-start-2 md:col-start-auto md:text-right">
              <p className="text-xs text-stone-600">Starting at</p>
              <p className="mt-1 text-3xl font-medium">$12,000</p>
              <a
                href="#"
                className="mt-3 inline-block text-sm text-orange-800 underline underline-offset-4 hover:text-stone-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
              >
                Discuss a website
              </a>
            </div>
          </article>
          <article className="grid grid-cols-[2rem_1fr] gap-5 border-y border-stone-300 py-8 md:grid-cols-[3rem_1fr_12rem]">
            <span className="pt-2 font-mono text-xs text-orange-800">03</span>
            <div>
              <h3 className="text-2xl font-medium">The ongoing partner</h3>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-stone-600">
                A reserved day each week for the design work that keeps your
                brand coherent as the business grows.
              </p>
              <p className="mt-4 text-xs text-stone-600">
                Monthly / Three-month minimum
              </p>
            </div>
            <div className="col-start-2 md:col-start-auto md:text-right">
              <p className="text-xs text-stone-600">Per month</p>
              <p className="mt-1 text-3xl font-medium">$3,200</p>
              <a
                href="#"
                className="mt-3 inline-block text-sm text-orange-800 underline underline-offset-4 hover:text-stone-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
              >
                Discuss a partnership
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
