// Fonts: Literata (https://fonts.google.com/specimen/Literata)
export default function FeaturesLendingLibrary() {
  return (
    <section className="bg-sky-50 text-sky-950 font-['Literata',ui-sans-serif,system-ui,sans-serif]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24 grid gap-10 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <p className="text-sm font-semibold text-sky-800">The Margin Library</p>
          <h2 className="mt-4 text-[2.5rem] leading-[1.15] tracking-tight sm:text-[3.5rem]">
            A collection with room for curiosity.
          </h2>
          <img src="https://images.unsplash.com/photo-1524230572899-a752b3835840?w=1600&q=80" alt="White vaulted arches and stone steps opening onto a quiet courtyard" width="1600" height="2133" className="mt-8 aspect-[4/3] w-full object-cover lg:aspect-[4/5]" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="max-w-lg text-2xl leading-relaxed">
            Come for one book. Leave with a subject you had never thought to look for.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <article className="border-t border-sky-300 pt-5">
              <h3 className="text-xl">Small presses, big shelves</h3>
              <p className="mt-3 text-sm leading-relaxed text-sky-900">
                Poetry pamphlets, translated fiction and artists' books from
                independent publishers. Chosen by people who read them.
              </p>
            </article>
            <article className="border-t border-sky-300 pt-5">
              <h3 className="text-xl">A desk without a deadline</h3>
              <p className="mt-3 text-sm leading-relaxed text-sky-900">
                Daylight, a plug socket and a pot of tea. Reading-room seats come
                with every membership.
              </p>
            </article>
          </div>
          <details className="mt-8 rounded-sm border border-sky-300 p-5">
            <summary className="cursor-pointer font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-950">
              How borrowing works
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-sky-900">
              Take home up to four books for three weeks. Renew online if nobody is
              waiting. Return them at the desk or through the evening book slot.
            </p>
          </details>
          <div className="mt-6">
            <a href="#" className="inline-flex w-fit items-center gap-3 py-2 text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-950">
              Explore the catalogue
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
