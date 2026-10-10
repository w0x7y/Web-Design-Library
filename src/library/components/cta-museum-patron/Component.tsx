// Fonts: Instrument Serif (https://fonts.google.com/specimen/Instrument+Serif)
export default function CtaMuseumPatron() {
  return (
    <section className="bg-stone-50 text-stone-950 font-['Instrument_Serif',ui-serif,Georgia,serif] antialiased">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[1fr_1.6fr] lg:gap-16 lg:px-8 lg:py-20">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1524230572899-a752b3835840?w=1600&q=80"
            alt="White vaulted passage with repeating arches and a short stone stairway"
            width={1600}
            height={2133}
            className="aspect-[4/3] w-full object-cover lg:aspect-[3/4]"
          />
          <figcaption className="mt-3 font-sans text-xs text-stone-600">
            A little space for a different point of view.
          </figcaption>
        </figure>
        <div className="flex flex-col justify-center">
          <p className="font-sans text-xs font-semibold uppercase tracking-widest text-amber-800">
            Morrow Museum / The patron circle
          </p>
          <h2 className="mt-6 text-[3rem] leading-[1.05] text-balance sm:text-[4.5rem]">
            Keep the doors open to the unexpected.
          </h2>
          <p className="mt-6 max-w-lg text-xl leading-7 text-stone-700">
            Your membership supports artist commissions and free school visits.
            Come back all year, bring a friend, and see what your support makes
            possible.
          </p>
          <div className="mt-10 flex flex-col gap-5 border-t border-stone-300 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-2xl">From £60 a year</p>
            <a
              href="#"
              className="w-fit font-sans text-sm font-semibold underline underline-offset-8 hover:text-amber-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-950"
            >
              Become a patron
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
