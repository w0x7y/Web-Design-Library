// Fonts: Instrument Serif (https://fonts.google.com/specimen/Instrument+Serif)
export default function FaqMuseumVisit() {
  return (
    <section className="bg-stone-900 font-['Instrument_Serif',ui-sans-serif,system-ui,sans-serif] text-stone-100 antialiased">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <figure>
            <img src="https://images.unsplash.com/photo-1524230572899-a752b3835840?w=1600&q=80" alt="White arched passage with stone steps and repeating rounded doorways" width="1600" height="2133" className="aspect-[4/3] w-full object-cover lg:aspect-[3/4]" />
            <figcaption className="mt-4 text-[0.9375rem] text-stone-300">A quieter route between the galleries. Take your time.</figcaption>
          </figure>
          <div>
            <header>
              <p className="text-[0.9375rem] uppercase tracking-[0.12em] text-stone-300">Portico Museum / your visit</p>
              <h2 className="mt-4 text-[3rem] leading-[1.05] text-balance sm:text-[4.5rem]">Come with a little curiosity.</h2>
              <p className="mt-5 max-w-[38rem] text-[1rem] leading-[1.7]">
                Practical things to know before spending an afternoon among objects, stories and
                quiet corners.
              </p>
            </header>
            <div className="mt-10 grid gap-4">
              <details open className="group border-t border-stone-600">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.5rem] leading-[1.5] font-normal hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-100 [&::-webkit-details-marker]:hidden">
                  <span>Do I need to book a time slot?</span>
                  <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
                </summary>
                <div className="max-w-[65ch] pb-6 text-[1.1875rem] leading-[1.6] text-stone-300">
                  <p>
                    The permanent collection is free, with no booking needed. Temporary exhibitions
                    use timed tickets. Your ticket lets you stay in that exhibition for as long as
                    you like.
                  </p>
                </div>
              </details>
              <details className="group border-t border-stone-600">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.5rem] leading-[1.5] font-normal hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-100 [&::-webkit-details-marker]:hidden">
                  <span>Is there a step-free route through the museum?</span>
                  <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
                </summary>
                <div className="max-w-[65ch] pb-6 text-[1.1875rem] leading-[1.6] text-stone-300">
                  <p>
                    Yes. Use the garden entrance on East Lane. A lift connects all galleries, and
                    stools and wheelchairs are available at the welcome desk without a reservation.
                  </p>
                </div>
              </details>
              <details className="group border-t border-stone-600">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.5rem] leading-[1.5] font-normal hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-100 [&::-webkit-details-marker]:hidden">
                  <span>Can children visit the exhibitions?</span>
                  <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
                </summary>
                <div className="max-w-[65ch] pb-6 text-[1.1875rem] leading-[1.6] text-stone-300">
                  <p>
                    Children are welcome in every gallery. Ask for a free looking booklet at the
                    desk. Pushchairs fit the lifts, and there is a family room beside the courtyard.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
