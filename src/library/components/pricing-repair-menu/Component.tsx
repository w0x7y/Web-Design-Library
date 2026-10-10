// Fonts: DM Sans
export default function PricingRepairMenu() {
  return (
    <section className="bg-white font-['DM_Sans',ui-sans-serif,system-ui,sans-serif] text-neutral-950">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <p
          className="text-xs font-medium tracking-widest uppercase text-neutral-600"
        >
          Second Spin / Independent audio repairs
        </p>
        <h2
          className="mt-4 max-w-3xl text-4xl leading-[1.1] font-medium tracking-tight sm:text-6xl"
        >
          Keep the gear you love.
        </h2>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <div>
              <details className="group border-t border-neutral-400 py-5 last:border-b" open={true}>
                <summary
                  className="grid cursor-pointer grid-cols-[1fr_auto] items-center gap-5 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
                >
                  <span>
                    <span className="text-xl font-medium">Diagnosis</span>
                    <span className="mt-1 block text-xs text-neutral-600">2 working days</span>
                  </span>
                  <span className="flex items-center gap-3">
                    <span className="text-2xl font-medium tracking-tight">£20</span>
                    <span className="text-xl group-open:rotate-45" aria-hidden="true">+</span>
                  </span>
                </summary>
                <p
                  className="mt-4 max-w-lg text-sm leading-relaxed text-neutral-600"
                >
                  We test the fault, open the unit where needed and send a written repair quote. The diagnosis
                  fee comes off your repair bill if you go ahead.
                </p>
              </details>
              <details className="group border-t border-neutral-400 py-5 last:border-b">
                <summary
                  className="grid cursor-pointer grid-cols-[1fr_auto] items-center gap-5 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
                >
                  <span>
                    <span className="text-xl font-medium">Cable &amp; jack repair</span>
                    <span className="mt-1 block text-xs text-neutral-600">3–5 working days</span>
                  </span>
                  <span className="flex items-center gap-3">
                    <span className="text-2xl font-medium tracking-tight">£35</span>
                    <span className="text-xl group-open:rotate-45" aria-hidden="true">+</span>
                  </span>
                </summary>
                <p
                  className="mt-4 max-w-lg text-sm leading-relaxed text-neutral-600"
                >
                  A replacement plug or short cable repair, soldered and strain-relieved. Includes continuity
                  testing. Full cable replacements are quoted after inspection.
                </p>
              </details>
              <details className="group border-t border-neutral-400 py-5 last:border-b">
                <summary
                  className="grid cursor-pointer grid-cols-[1fr_auto] items-center gap-5 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
                >
                  <span>
                    <span className="text-xl font-medium">Headphone servicing</span>
                    <span className="mt-1 block text-xs text-neutral-600">5–7 working days</span>
                  </span>
                  <span className="flex items-center gap-3">
                    <span className="text-2xl font-medium tracking-tight">£55</span>
                    <span className="text-xl group-open:rotate-45" aria-hidden="true">+</span>
                  </span>
                </summary>
                <p
                  className="mt-4 max-w-lg text-sm leading-relaxed text-neutral-600"
                >
                  Clean contacts, repair loose joints and replace standard ear pads. Specialist drivers and
                  manufacturer parts are quoted separately.
                </p>
              </details>
              <details className="group border-t border-neutral-400 py-5 last:border-b">
                <summary
                  className="grid cursor-pointer grid-cols-[1fr_auto] items-center gap-5 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
                >
                  <span>
                    <span className="text-xl font-medium">Amplifier bench work</span>
                    <span className="mt-1 block text-xs text-neutral-600">7–10 working days</span>
                  </span>
                  <span className="flex items-center gap-3">
                    <span className="text-2xl font-medium tracking-tight">£80</span>
                    <span className="text-xl group-open:rotate-45" aria-hidden="true">+</span>
                  </span>
                </summary>
                <p
                  className="mt-4 max-w-lg text-sm leading-relaxed text-neutral-600"
                >
                  One hour of fault tracing and repair on the bench. We check power, inputs and outputs, then
                  confirm any parts or extra time before proceeding.
                </p>
              </details>
            </div>
            <p
              className="mt-5 text-xs leading-relaxed text-neutral-600"
            >
              Guide prices include labour and VAT. Parts are extra unless stated. We always agree the final
              price before starting.
            </p>
          </div>
          <aside className="rounded-2xl bg-neutral-100 p-6">
            <img
              className="aspect-[2/1] w-full rounded-lg object-cover"
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80"
              alt="Black over-ear headphones resting on a yellow surface"
              width="800"
              height="533"
            />
            <h3 className="mt-6 text-2xl font-medium tracking-tight">A quote before a screwdriver.</h3>
            <p
              className="mt-4 max-w-lg text-sm leading-relaxed text-neutral-600"
            >
              Tell us the model and the fault. We will say whether it is worth a closer look, then book your
              gear onto the bench.
            </p>
            <a
              className="mt-6 flex min-h-12 items-center justify-center rounded-lg bg-neutral-950 px-4 text-sm font-medium text-white hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
              href="#"
            >
              Ask about a repair
            </a>
            <p
              className="mt-5 text-xs leading-relaxed text-neutral-600"
            >
              90-day warranty on our work. If we cannot fix it, you only pay for the diagnosis.
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}
