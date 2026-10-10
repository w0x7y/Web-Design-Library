// Fonts: Instrument Serif
export default function PricingMuseumAdmission() {
  return (
    <section className="bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <figure>
            <img
              className="aspect-[4/3] w-full object-cover lg:aspect-[4/5]"
              src="https://images.unsplash.com/photo-1524230572899-a752b3835840?w=1600&q=80"
              alt="White vaulted arcade with shallow steps and repeating arches"
              width="1600"
              height="2133"
            />
            <figcaption
              className="mt-3 text-xs tracking-wide text-neutral-400"
            >
              Forma Museum / Architecture, objects, everyday life
            </figcaption>
          </figure>
          <div>
            <p className="text-xs tracking-widest uppercase text-orange-300">Plan a visit / Forma</p>
            <h2
              className="mt-5 font-['Instrument_Serif',ui-serif,Georgia,serif] text-5xl leading-none sm:text-7xl"
            >
              Take your time. Look again.
            </h2>
            <p
              className="mt-5 max-w-sm text-sm leading-relaxed text-neutral-300"
            >
              One ticket opens every gallery, including the current exhibition. Stay until closing and come
              back the same day.
            </p>
            <dl className="mt-8 border-t border-neutral-600">
              <div className="flex items-baseline justify-between gap-5 border-b border-neutral-600 py-4">
                <dt className="text-sm">Adults</dt>
                <dd className="shrink-0 font-['Instrument_Serif',ui-serif,Georgia,serif] text-3xl">€16</dd>
              </div>
              <div className="flex items-baseline justify-between gap-5 border-b border-neutral-600 py-4">
                <dt className="text-sm">Students &amp; over 65s</dt>
                <dd className="shrink-0 font-['Instrument_Serif',ui-serif,Georgia,serif] text-3xl">€10</dd>
              </div>
              <div className="flex items-baseline justify-between gap-5 border-b border-neutral-600 py-4">
                <dt className="text-sm">Under 18s</dt>
                <dd className="shrink-0 font-['Instrument_Serif',ui-serif,Georgia,serif] text-3xl">Free</dd>
              </div>
              <div className="flex items-baseline justify-between gap-5 border-b border-neutral-600 py-4">
                <dt className="text-sm">First Sunday of the month</dt>
                <dd className="shrink-0 font-['Instrument_Serif',ui-serif,Georgia,serif] text-3xl">Free</dd>
              </div>
            </dl>
            <a
              className="mt-7 flex min-h-12 items-center justify-between gap-4 bg-orange-300 px-5 text-sm font-medium text-neutral-950 hover:bg-orange-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300"
              href="#"
            >
              <span>Reserve your visit</span>
              <svg
                className="size-5"
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M4 12h16m-6-6 6 6-6 6" />
              </svg>
            </a>
            <p
              className="mt-4 text-xs leading-relaxed text-neutral-400"
            >
              Tuesday to Sunday, 10:00–18:00. Carers enter free. Step-free access to every gallery.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
