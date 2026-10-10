// Fonts: DM Sans
export default function PricingCobblerMenu() {
  return (
    <section className="bg-white font-['DM_Sans',ui-sans-serif,system-ui,sans-serif] text-neutral-950">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <p
          className="text-xs font-medium tracking-widest uppercase text-neutral-600"
        >
          Last &amp; Sole / Independent cobblers
        </p>
        <h2
          className="mt-4 max-w-3xl text-4xl leading-[1.1] font-medium tracking-tight sm:text-6xl"
        >
          Keep your favourite pair.
        </h2>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <div>
              <details className="group border-t border-neutral-400 py-5 last:border-b" open={true}>
                <summary
                  className="grid cursor-pointer grid-cols-[1fr_auto] items-center gap-5 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
                >
                  <span>
                    <span className="text-xl font-medium">Heel replacement</span>
                    <span className="mt-1 block text-xs text-neutral-600">2–3 working days</span>
                  </span>
                  <span className="flex items-center gap-3">
                    <span className="text-2xl font-medium tracking-tight">£24</span>
                    <span className="text-xl group-open:rotate-45" aria-hidden="true">+</span>
                  </span>
                </summary>
                <p
                  className="mt-4 max-w-lg text-sm leading-relaxed text-neutral-600"
                >
                  Replace worn heel tips or rubber heel blocks on a pair of shoes. We match the profile and
                  check the heel stack before fitting.
                </p>
              </details>
              <details className="group border-t border-neutral-400 py-5 last:border-b">
                <summary
                  className="grid cursor-pointer grid-cols-[1fr_auto] items-center gap-5 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
                >
                  <span>
                    <span className="text-xl font-medium">Protective half soles</span>
                    <span className="mt-1 block text-xs text-neutral-600">3–5 working days</span>
                  </span>
                  <span className="flex items-center gap-3">
                    <span className="text-2xl font-medium tracking-tight">£38</span>
                    <span className="text-xl group-open:rotate-45" aria-hidden="true">+</span>
                  </span>
                </summary>
                <p
                  className="mt-4 max-w-lg text-sm leading-relaxed text-neutral-600"
                >
                  Fit thin rubber half soles to protect leather soles and improve grip. Includes edge trimming
                  and finishing on both shoes.
                </p>
              </details>
              <details className="group border-t border-neutral-400 py-5 last:border-b">
                <summary
                  className="grid cursor-pointer grid-cols-[1fr_auto] items-center gap-5 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
                >
                  <span>
                    <span className="text-xl font-medium">Leather sole renewal</span>
                    <span className="mt-1 block text-xs text-neutral-600">5–7 working days</span>
                  </span>
                  <span className="flex items-center gap-3">
                    <span className="text-2xl font-medium tracking-tight">£95</span>
                    <span className="text-xl group-open:rotate-45" aria-hidden="true">+</span>
                  </span>
                </summary>
                <p
                  className="mt-4 max-w-lg text-sm leading-relaxed text-neutral-600"
                >
                  Replace worn leather soles on welted shoes and finish the edges by hand. Heel work and
                  unusual constructions are quoted separately.
                </p>
              </details>
              <details className="group border-t border-neutral-400 py-5 last:border-b">
                <summary
                  className="grid cursor-pointer grid-cols-[1fr_auto] items-center gap-5 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
                >
                  <span>
                    <span className="text-xl font-medium">Boot zip replacement</span>
                    <span className="mt-1 block text-xs text-neutral-600">7–10 working days</span>
                  </span>
                  <span className="flex items-center gap-3">
                    <span className="text-2xl font-medium tracking-tight">£48</span>
                    <span className="text-xl group-open:rotate-45" aria-hidden="true">+</span>
                  </span>
                </summary>
                <p
                  className="mt-4 max-w-lg text-sm leading-relaxed text-neutral-600"
                >
                  Fit a matching zip into one boot, preserving the original seam where possible. We confirm
                  the length and finish before ordering parts.
                </p>
              </details>
            </div>
            <p
              className="mt-5 text-xs leading-relaxed text-neutral-600"
            >
              Prices include materials and VAT. Rates are per pair, except zips which are per boot. We confirm
              the final price after inspection.
            </p>
          </div>
          <aside className="rounded-2xl bg-neutral-100 p-6">
            <img
              className="aspect-[2/1] w-full rounded-lg object-cover"
              src="https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=800&q=80"
              alt="A pair of brown leather lace-up shoes on pale fabric"
              width="800"
              height="451"
            />
            <h3 className="mt-6 text-2xl font-medium tracking-tight">A good repair starts with a look.</h3>
            <p
              className="mt-4 max-w-lg text-sm leading-relaxed text-neutral-600"
            >
              Bring your shoes in or send clear photos of the soles and heels. We will explain the options
              before your pair goes on the bench.
            </p>
            <a
              className="mt-6 flex min-h-12 items-center justify-center rounded-lg bg-neutral-950 px-4 text-sm font-medium text-white hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
              href="#"
            >
              Ask about your shoes
            </a>
            <p
              className="mt-5 text-xs leading-relaxed text-neutral-600"
            >
              Our repairs carry a 90-day workmanship guarantee. Shoe assessments are free.
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}
