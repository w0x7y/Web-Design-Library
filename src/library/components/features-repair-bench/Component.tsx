// Fonts: Space Grotesk (https://fonts.google.com/specimen/Space+Grotesk)
export default function FeaturesRepairBench() {
  return (
    <section className="bg-yellow-300 text-neutral-950 font-['Space_Grotesk',ui-sans-serif,system-ui,sans-serif]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <p className="text-sm font-semibold text-neutral-950">FIXFORM / Neighbourhood repair bench</p>
        <h2 className="mt-4 max-w-4xl text-[2.5rem] leading-none font-bold tracking-[-0.04em] sm:text-[4.5rem]">
          BROKEN IS A STARTING POINT.
        </h2>
        <div className="mt-12 grid border-2 border-neutral-950 lg:grid-cols-[1fr_1.2fr]">
          <div className="flex flex-col justify-between gap-10 bg-neutral-950 p-6 text-yellow-300 sm:p-8">
            <div>
              <p className="text-[4rem] leading-none font-bold tracking-tight sm:text-[6rem]">30 days.</p>
              <p className="mt-5 max-w-sm text-lg">
                Bring it back if the same fault returns. We will put it right.
              </p>
            </div>
            <p className="w-fit border-2 border-yellow-300 px-4 py-2 text-sm font-bold uppercase">
              Repair first. Replace last.
            </p>
          </div>
          <div className="p-6 sm:p-8">
            <details open className="border-b-2 border-neutral-950 py-5">
              <summary className="cursor-pointer text-xl font-bold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950">
                01. Kitchen workhorses
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-neutral-800">
                Coffee machines, mixers and kettles. We replace seals, switches and
                worn parts, then run a full bench test.
              </p>
            </details>
            <details className="border-b-2 border-neutral-950 py-5">
              <summary className="cursor-pointer text-xl font-bold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950">
                02. The everyday electric
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-neutral-800">
                Lamps, fans and vacuum cleaners. Cable checks, motor servicing and
                honest advice when a repair will cost too much.
              </p>
            </details>
            <details className="border-b-2 border-neutral-950 py-5">
              <summary className="cursor-pointer text-xl font-bold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950">
                03. Something unusual?
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-neutral-800">
                Bring the model number and a photo. We check parts availability
                before you carry it across town.
              </p>
            </details>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <a href="#" className="inline-flex w-fit items-center gap-3 py-2 text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950">
                Book a bench check
              </a>
              <p className="text-xs">Diagnosis from £15</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
