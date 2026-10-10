// Fonts: Fraunces (https://fonts.google.com/specimen/Fraunces)
export default function CtaSeedArchive() {
  return (
    <section className="bg-amber-50 text-green-950 font-['Fraunces',ui-serif,Georgia,serif] antialiased">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-20">
        <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-green-900 pb-5">
          <p className="text-2xl">Acre Memory</p>
          <p className="font-mono text-xs uppercase tracking-wider">
            Living seed archive / Autumn 2026
          </p>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-[1.2fr_1fr] md:gap-16">
          <div>
            <h2 className="text-[2.5rem] leading-[1.1] tracking-tight sm:text-[3.5rem]">
              A future for the seeds we almost lost.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-green-900">
              Grow one of our open-pollinated varieties, save a little seed and
              send it back. Each growing season keeps a local story alive.
            </p>
          </div>
          <div className="border-y border-green-900 py-5">
            <p className="font-mono text-xs uppercase tracking-wider">
              Accession AM-027 / Available this season
            </p>
            <h3 className="mt-3 text-[2rem] leading-tight">
              Painted Mountain corn
            </h3>
            <dl className="mt-5 grid grid-cols-2 gap-5 text-sm">
              <div>
                <dt className="text-green-800">Packet</dt>
                <dd className="mt-1 font-medium">30 seeds</dd>
              </div>
              <div>
                <dt className="text-green-800">Contribution</dt>
                <dd className="mt-1 font-medium">£4 + postage</dd>
              </div>
              <div>
                <dt className="text-green-800">Growing time</dt>
                <dd className="mt-1 font-medium">90 days</dd>
              </div>
              <div>
                <dt className="text-green-800">Pollination</dt>
                <dd className="mt-1 font-medium">Open</dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <a
            href="#"
            className="inline-flex min-h-12 w-fit items-center justify-center gap-3 rounded-none bg-green-950 px-6 py-3 text-sm font-semibold text-amber-50 hover:bg-green-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-950"
          >
            Request a seed packet
          </a>
          <details className="max-w-md text-sm">
            <summary className="w-fit cursor-pointer rounded-sm py-2 underline underline-offset-4 hover:text-green-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-950">
              When will my seeds arrive?
            </summary>
            <p className="mt-2 leading-6 text-green-900">
              We post on the first Monday of each month. Requests received after
              the 25th move to the following dispatch. UK addresses only.
            </p>
          </details>
        </div>
      </div>
    </section>
  )
}
