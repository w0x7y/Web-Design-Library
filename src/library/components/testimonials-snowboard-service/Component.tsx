// Fonts: IBM Plex Mono (https://fonts.google.com/specimen/IBM+Plex+Mono)
export default function TestimonialsSnowboardService() {
  return (
    <section className="bg-yellow-300 text-neutral-950 font-['IBM_Plex_Mono',ui-monospace,monospace] antialiased">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24 grid items-start gap-12 lg:grid-cols-[1fr_26rem] lg:gap-16">
        <header>
          <p className="text-xs font-semibold uppercase tracking-widest">Basecamp Bench / Snowboard workshop</p>
          <h2 className="mt-6 max-w-lg text-4xl leading-tight font-medium uppercase sm:text-5xl">Fresh edges. Another season.</h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed">Wax, edge work and base repairs, with a written service record for every board. Riders tell us how it felt back on snow.</p>
          <a className="mt-8 inline-flex w-fit py-2 text-sm font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current" href="#">Book your board service</a>
        </header>
        <div className="border-2 border-neutral-950 bg-white p-6 sm:p-8">
          <p className="text-center text-lg font-semibold">BASECAMP BENCH</p>
          <p className="mt-2 text-center text-xs">Rider copies / Batch 06, 2026</p>
          <figure className="mt-6 border-t border-dashed border-neutral-300 pt-6">
            <div className="flex justify-between gap-3 text-xs font-medium">
              <span>01 / Hot wax</span>
              <span>£20.00</span>
            </div>
            <blockquote className="mt-4 text-base leading-relaxed">“They chose a wax for the cold week ahead. My board ran smoothly on the flats, and they wrote the temperature range on the receipt.”</blockquote>
            <figcaption className="mt-4 text-xs text-neutral-600">Alex Mora / All-mountain board</figcaption>
          </figure>
          <figure className="mt-6 border-t border-dashed border-neutral-300 pt-6">
            <div className="flex justify-between gap-3 text-xs font-medium">
              <span>02 / Edge tune</span>
              <span>£35.00</span>
            </div>
            <blockquote className="mt-4 text-base leading-relaxed">“The edges were catching near the nose. They checked the bevel with me and explained the tune before touching the board.”</blockquote>
            <figcaption className="mt-4 text-xs text-neutral-600">Priya Ellis / Freestyle board</figcaption>
          </figure>
          <figure className="mt-6 border-t border-dashed border-neutral-300 pt-6">
            <div className="flex justify-between gap-3 text-xs font-medium">
              <span>03 / Base patch</span>
              <span>£45.00</span>
            </div>
            <blockquote className="mt-4 text-base leading-relaxed">“A rock left a deep groove across the base. They showed me the patch at pickup and gave me a clear price before starting.”</blockquote>
            <figcaption className="mt-4 text-xs text-neutral-600">Noah Kim / Splitboard</figcaption>
          </figure>
          <p className="mt-6 flex justify-between gap-4 border-t border-dashed border-neutral-950 pt-6 text-sm font-semibold">
            <span>READY FOR SNOW</span>
            <span>3 boards</span>
          </p>
        </div>
      </div>
    </section>
  )
}
