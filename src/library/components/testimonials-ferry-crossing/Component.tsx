// Fonts: Familjen Grotesk (https://fonts.google.com/specimen/Familjen+Grotesk)
export default function TestimonialsFerryCrossing() {
  return (
    <section className="bg-sky-950 text-sky-100 font-['Familjen_Grotesk',ui-sans-serif,system-ui,sans-serif] antialiased [background-image:linear-gradient(to_right_in_oklab,oklch(29.3%_0.066_243.157),oklch(38.6%_0.063_188.416))]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
        <header className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-200">Soundline / Across the water</p>
            <h2 className="mt-5 max-w-2xl text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">A small crossing. A big part of the day.</h2>
          </div>
          <p className="text-sm text-teal-200">Twelve crossings, seven days a week.</p>
        </header>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <figure className="border-t border-white/30 pt-8">
            <div className="flex items-center gap-4">
              <span className="grid size-12 shrink-0 place-items-center border border-teal-200 text-xl font-semibold" aria-hidden="true">A</span>
              <div>
                <p className="text-sm font-medium">Harbour → Island</p>
                <p className="mt-1 text-xs text-teal-200">07:10 / The early crossing</p>
              </div>
            </div>
            <blockquote className="mt-6 max-w-lg text-2xl leading-[1.5]">“The ramp is ready before I reach it, and there is space for my chair beside the window. I can make the trip on my own.”</blockquote>
            <figcaption className="mt-6 text-sm text-teal-200">Esther Lewis / Weekly passenger</figcaption>
          </figure>
          <figure className="border-t border-white/30 pt-8">
            <div className="flex items-center gap-4">
              <span className="grid size-12 shrink-0 place-items-center border border-teal-200 text-xl font-semibold" aria-hidden="true">B</span>
              <div>
                <p className="text-sm font-medium">Island → Harbour</p>
                <p className="mt-1 text-xs text-teal-200">17:40 / Coming home</p>
              </div>
            </div>
            <blockquote className="mt-6 max-w-lg text-2xl leading-[1.5]">“When the school bus runs late, the crew knows. That five-minute wait saves twenty families an hour on the quay.”</blockquote>
            <figcaption className="mt-6 text-sm text-teal-200">Omar Hayes / Parent and island resident</figcaption>
          </figure>
        </div>
        <footer className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-white/30 pt-6">
          <p className="text-sm">A crew that knows the people on board.</p>
          <a className="inline-flex w-fit py-2 text-sm font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current" href="#">Check the next sailing</a>
        </footer>
      </div>
    </section>
  )
}
