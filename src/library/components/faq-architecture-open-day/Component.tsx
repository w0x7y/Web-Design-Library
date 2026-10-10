// Fonts: Instrument Serif (https://fonts.google.com/specimen/Instrument+Serif)
export default function FaqArchitectureOpenDay() {
  return (
    <section className="bg-stone-900 font-['Instrument_Serif',ui-sans-serif,system-ui,sans-serif] text-stone-100 antialiased">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <figure>
            <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80" alt="An architect drawing a floor plan beside a wooden scale ruler" width="1600" height="900" className="aspect-[4/3] w-full object-cover lg:aspect-[3/4]" />
            <figcaption className="mt-4 text-[0.9375rem] text-stone-300">An idea takes shape at the drawing table.</figcaption>
          </figure>
          <div>
            <header>
              <p className="text-[0.9375rem] uppercase tracking-[0.12em] text-stone-300">Groundline School / open days</p>
              <h2 className="mt-4 text-[3rem] leading-[1.05] text-balance sm:text-[4.5rem]">Start with a line.</h2>
              <p className="mt-5 max-w-[38rem] text-[1rem] leading-[1.7]">
                Meet our tutors, look through the studio work and see where your first drawings
                could take you. Here is how an open day works.
              </p>
            </header>
            <div className="mt-10 grid gap-4">
              <details open className="group border-t border-stone-600">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.5rem] leading-[1.5] font-normal hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-100 [&::-webkit-details-marker]:hidden">
                  <span>Do I need a portfolio for an open day?</span>
                  <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
                </summary>
                <div className="max-w-[65ch] pb-6 text-[1.1875rem] leading-[1.6] text-stone-300">
                  <p>
                    No. Open days are for anyone considering architecture. Bring a sketchbook if you
                    would like to talk through your work with a tutor, but you can also come simply
                    to look, listen and ask questions.
                  </p>
                </div>
              </details>
              <details className="group border-t border-stone-600">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.5rem] leading-[1.5] font-normal hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-100 [&::-webkit-details-marker]:hidden">
                  <span>Can I see the model-making workshop?</span>
                  <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
                </summary>
                <div className="max-w-[65ch] pb-6 text-[1.1875rem] leading-[1.6] text-stone-300">
                  <p>
                    Yes. Every open day includes a guided workshop tour and a look at current
                    student models. The drawing studios and workshop have step-free access. Tell us
                    about any access requirements when booking.
                  </p>
                </div>
              </details>
              <details className="group border-t border-stone-600">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.5rem] leading-[1.5] font-normal hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stone-100 [&::-webkit-details-marker]:hidden">
                  <span>What if I cannot attend in person?</span>
                  <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
                </summary>
                <div className="max-w-[65ch] pb-6 text-[1.1875rem] leading-[1.6] text-stone-300">
                  <p>
                    Join a live online studio tour on the first Friday of each month. A tutor walks
                    through recent projects and answers questions. We email a recording and the
                    admissions guide to everyone who registers.
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
