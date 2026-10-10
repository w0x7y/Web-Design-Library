// Fonts: Familjen Grotesk
export default function PricingCabinStays() {
  return (
    <section
      className="bg-linear-to-b from-sky-100 to-white font-['Familjen_Grotesk',ui-sans-serif,system-ui,sans-serif] text-sky-950"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <p
              className="text-xs font-semibold tracking-widest uppercase text-sky-800"
            >
              North Fold / Two-person mountain cabins
            </p>
            <h2
              className="mt-4 text-4xl leading-[1.05] font-medium tracking-tight sm:text-6xl"
            >
              A few days above the noise.
            </h2>
          </div>
          <p
            className="max-w-sm text-base leading-relaxed text-sky-900"
          >
            Five timber cabins on the edge of the valley. A stove, a deep bath and trails from your door. Pick
            a stay; we take care of the rest.
          </p>
        </div>
        <div className="mt-8">
          <img
            className="aspect-[4/3] w-full rounded-t-3xl object-cover sm:aspect-[20/9]"
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80"
            alt="Snow-covered alpine peaks above a cloud-filled valley at sunset"
            width="1600"
            height="1067"
          />
        </div>
        <div className="relative -mt-10 grid gap-4 px-3 lg:grid-cols-[1fr_1.6fr] lg:px-6">
          <article
            className="rounded-2xl border border-white bg-white/85 p-6 shadow-[0_12px_40px_rgb(8_47_73/0.08)] backdrop-blur-xl"
          >
            <h3 className="text-xl font-semibold">Midweek quiet</h3>
            <p className="mt-2 text-sm text-sky-900">Monday to Thursday / 2 nights</p>
            <p className="mt-5 text-5xl font-medium tracking-tight">£320</p>
            <p className="mt-2 text-xs text-sky-900">Total for two guests</p>
            <a
              className="mt-5 flex min-h-11 items-center justify-center rounded-full bg-sky-950 px-4 text-sm font-semibold text-white hover:bg-sky-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-950"
              href="#"
            >
              Find a midweek stay
            </a>
          </article>
          <article
            className="grid gap-6 rounded-2xl border border-white bg-white/85 p-6 shadow-[0_12px_40px_rgb(8_47_73/0.08)] backdrop-blur-xl sm:grid-cols-2 sm:items-center"
          >
            <div>
              <h3 className="text-xl font-semibold">A longer weekend</h3>
              <p className="mt-2 text-sm text-sky-900">Friday to Monday / 3 nights</p>
              <p className="mt-5 text-5xl font-medium tracking-tight">£540</p>
              <p className="mt-2 text-xs text-sky-900">Total for two guests</p>
            </div>
            <div>
              <p
                className="mt-2 text-sm text-sky-900"
              >
                Arrive Friday, leave after breakfast on Monday. Enough time to unpack, walk and do very
                little.
              </p>
              <a
                className="mt-5 flex min-h-11 items-center justify-center rounded-full bg-sky-950 px-4 text-sm font-semibold text-white hover:bg-sky-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-950"
                href="#"
              >
                Find a weekend stay
              </a>
            </div>
          </article>
        </div>
        <dl className="mt-8 grid gap-5 px-3 text-sm sm:grid-cols-3 lg:px-6">
          <div>
            <dt className="font-semibold">Breakfast basket</dt>
            <dd className="mt-1 text-sky-900">Local bread, eggs and coffee</dd>
          </div>
          <div>
            <dt className="font-semibold">Station collection</dt>
            <dd className="mt-1 text-sky-900">One return trip, on us</dd>
          </div>
          <div>
            <dt className="font-semibold">Cabin essentials</dt>
            <dd className="mt-1 text-sky-900">Logs, linen and cleaning included</dd>
          </div>
        </dl>
        <p
          className="mt-6 px-3 text-xs leading-relaxed text-sky-800 lg:px-6"
        >
          Seasonal rates for October to March, excluding holidays. £100 deposit to book. Balance due 14 days
          before arrival. No extra cleaning fee.
        </p>
      </div>
    </section>
  )
}
