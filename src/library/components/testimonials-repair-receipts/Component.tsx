// Fonts: IBM Plex Mono (https://fonts.google.com/specimen/IBM+Plex+Mono)
export default function TestimonialsRepairReceipts() {
  return (
    <section className="bg-yellow-300 text-neutral-950 font-['IBM_Plex_Mono',ui-monospace,monospace] antialiased">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24 grid items-start gap-12 lg:grid-cols-[1fr_26rem] lg:gap-16">
        <header>
          <p className="text-xs font-semibold uppercase tracking-widest">Second Shift / Repair workshop</p>
          <h2 className="mt-6 max-w-lg text-4xl leading-tight font-medium uppercase sm:text-5xl">Still good. Just needs a little work.</h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed">The things people bring in have stories. So do the repairs that get them back into use.</p>
          <a className="mt-8 inline-flex w-fit py-2 text-sm font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current" href="#">Bring something to the workshop</a>
        </header>
        <div className="border-2 border-neutral-950 bg-white p-6 sm:p-8">
          <p className="text-center text-lg font-semibold">SECOND SHIFT</p>
          <p className="mt-2 text-center text-xs">Customer copies / Week 40, 2026</p>
          <figure className="mt-6 border-t border-dashed border-neutral-300 pt-6">
            <div className="flex justify-between gap-3 text-xs font-medium">
              <span>01 / Desk lamp</span>
              <span>£18.00</span>
            </div>
            <blockquote className="mt-4 text-base leading-relaxed">“A new switch, a safe cable and my dad’s lamp back on the desk. They even kept the old brass fitting.”</blockquote>
            <figcaption className="mt-4 text-xs text-neutral-600">Tom Arden / Lamp repaired</figcaption>
          </figure>
          <figure className="mt-6 border-t border-dashed border-neutral-300 pt-6">
            <div className="flex justify-between gap-3 text-xs font-medium">
              <span>02 / Wool coat</span>
              <span>£24.00</span>
            </div>
            <blockquote className="mt-4 text-base leading-relaxed">“The lining was torn at both sleeves. Now the repair is stronger than the original seam, and the coat has another winter in it.”</blockquote>
            <figcaption className="mt-4 text-xs text-neutral-600">Farah Lowe / Coat relined</figcaption>
          </figure>
          <figure className="mt-6 border-t border-dashed border-neutral-300 pt-6">
            <div className="flex justify-between gap-3 text-xs font-medium">
              <span>03 / Espresso grinder</span>
              <span>£32.00</span>
            </div>
            <blockquote className="mt-4 text-base leading-relaxed">“They called before ordering the part and told me exactly what it would cost. Coffee tastes the same. The noise is gone.”</blockquote>
            <figcaption className="mt-4 text-xs text-neutral-600">Caleb Ruiz / Bearing replaced</figcaption>
          </figure>
          <p className="mt-6 flex justify-between gap-4 border-t border-dashed border-neutral-950 pt-6 text-sm font-semibold">
            <span>BACK IN USE</span>
            <span>3 of 3</span>
          </p>
        </div>
      </div>
    </section>
  )
}
