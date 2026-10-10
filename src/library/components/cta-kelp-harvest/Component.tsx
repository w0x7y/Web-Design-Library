// Fonts: Fraunces (https://fonts.google.com/specimen/Fraunces)
export default function CtaKelpHarvest() {
  return (
    <section className="bg-amber-50 text-green-950 font-['Fraunces',ui-serif,Georgia,serif] antialiased">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-20">
        <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-green-900 pb-5">
          <p className="text-2xl">Tideplot</p>
          <p className="font-mono text-xs uppercase tracking-wider">
            Coastal kelp farm / Spring harvest
          </p>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-[1.2fr_1fr] md:gap-16">
          <div>
            <h2 className="text-[2.5rem] leading-[1.1] tracking-tight sm:text-[3.5rem]">
              Bring the spring tide to your kitchen.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-green-900">
              Our sugar kelp grows on ropes in cold coastal water. Reserve a share of
              the spring harvest, dried and packed at the shore.
            </p>
          </div>
          <div className="border-y border-green-900 py-5">
            <p className="font-mono text-xs uppercase tracking-wider">
              Harvest TP-041 / Reservations open
            </p>
            <h3 className="mt-3 text-[2rem] leading-tight">
              Dried sugar kelp
            </h3>
            <dl className="mt-5 grid grid-cols-2 gap-5 text-sm">
              <div>
                <dt className="text-green-800">Pack</dt>
                <dd className="mt-1 font-medium">100 g</dd>
              </div>
              <div>
                <dt className="text-green-800">Price</dt>
                <dd className="mt-1 font-medium">£8 + delivery</dd>
              </div>
              <div>
                <dt className="text-green-800">Harvest month</dt>
                <dd className="mt-1 font-medium">April 2027</dd>
              </div>
              <div>
                <dt className="text-green-800">Origin</dt>
                <dd className="mt-1 font-medium">West coast</dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <a
            href="#"
            className="inline-flex min-h-12 w-fit items-center justify-center gap-3 rounded-none bg-green-950 px-6 py-3 text-sm font-semibold text-amber-50 hover:bg-green-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-950"
          >
            Reserve a harvest pack
          </a>
          <details className="max-w-md text-sm">
            <summary className="w-fit cursor-pointer rounded-sm py-2 underline underline-offset-4 hover:text-green-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-950">
              When will my kelp arrive?
            </summary>
            <p className="mt-2 leading-6 text-green-900">
              We dispatch after the April harvest has been dried and packed. You will
              get a shipping date by email. UK delivery only.
            </p>
          </details>
        </div>
      </div>
    </section>
  )
}
