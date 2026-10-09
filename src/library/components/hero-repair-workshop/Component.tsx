// Fonts: Space Grotesk (https://fonts.google.com/specimen/Space+Grotesk)
export default function HeroRepairWorkshop() {
  return (
    <section className="bg-yellow-300 text-black font-['Space_Grotesk',ui-sans-serif,system-ui,sans-serif]">
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-6">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <p className="text-lg font-bold tracking-tight">BENCH UNION</p>
          <p className="text-xs leading-relaxed">Repair workshop<br />Unit 4, Market Yard</p>
        </div>
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h1 className="text-[3.5rem] leading-[0.95] font-bold tracking-[-0.05em] uppercase sm:text-[6rem]">Keep it<br />going.</h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed">The zip that gave up. The chair with a wobble. The lamp you inherited. Bring it in. We will take a proper look.</p>
            <p className="mt-6 text-sm font-medium">A quote before we start. A repair you can keep.</p>
          </div>
          <dl className="min-w-0">
            <div className="border-t-2 border-black py-5">
              <dt className="text-2xl leading-tight font-medium">01 / Clothes &amp; bags</dt>
              <dd className="mt-3 text-sm">Zips, seams and straps. From £8.</dd>
            </div>
            <div className="border-t-2 border-black py-5">
              <dt className="text-2xl leading-tight font-medium">02 / Furniture</dt>
              <dd className="mt-3 text-sm">Joints, frames and finishes. From £25.</dd>
            </div>
            <div className="border-t-2 border-black py-5">
              <dt className="text-2xl leading-tight font-medium">03 / Small electrics</dt>
              <dd className="mt-3 text-sm">Lamps, cables and switches. From £18.</dd>
            </div>
          </dl>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-6 bg-black p-6 text-yellow-300">
          <p className="text-sm leading-relaxed">Tuesday–Saturday / 10:00–18:00<br />Walk-ins welcome. Tea usually on.</p>
          <a href="#" className="inline-flex min-h-12 items-center bg-white px-5 py-3 text-sm font-bold text-black hover:bg-yellow-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-300">Book a repair assessment ↗</a>
        </div>
      </div>
    </section>
  )
}
