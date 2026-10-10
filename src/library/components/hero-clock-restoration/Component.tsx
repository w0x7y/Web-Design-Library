// Fonts: Space Grotesk (https://fonts.google.com/specimen/Space+Grotesk)
export default function HeroClockRestoration() {
  return (
    <section className="bg-yellow-300 text-black font-['Space_Grotesk',ui-sans-serif,system-ui,sans-serif]">
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-6">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <p className="text-lg font-bold tracking-tight">SECOND HAND</p>
          <p className="text-xs leading-relaxed">Clock restoration<br />No. 8, Bell Yard</p>
        </div>
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h1 className="text-[3.5rem] leading-[0.95] font-bold tracking-[-0.05em] uppercase sm:text-[6rem]">Keep time<br />again.</h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed">A mantel clock that has fallen silent. A longcase that runs fast. We clean, repair and regulate mechanical movements, keeping the original parts wherever we can.</p>
            <p className="mt-6 text-sm font-medium">An assessment first. A written record of every repair.</p>
          </div>
          <dl className="min-w-0">
            <div className="border-t-2 border-black py-5">
              <dt className="text-2xl leading-tight font-medium">01 / Mantel clocks</dt>
              <dd className="mt-3 text-sm">Cleaning, oiling and regulation. From £95.</dd>
            </div>
            <div className="border-t-2 border-black py-5">
              <dt className="text-2xl leading-tight font-medium">02 / Longcase clocks</dt>
              <dd className="mt-3 text-sm">Movement and pendulum service. From £240.</dd>
            </div>
            <div className="border-t-2 border-black py-5">
              <dt className="text-2xl leading-tight font-medium">03 / Case restoration</dt>
              <dd className="mt-3 text-sm">Veneer, glass and dial repairs. Quoted individually.</dd>
            </div>
          </dl>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-6 bg-black p-6 text-yellow-300">
          <p className="text-sm leading-relaxed">Wednesday–Saturday / 09:30–17:00<br />Bring your clock or send us a photograph.</p>
          <a href="#" className="inline-flex min-h-12 items-center bg-white px-5 py-3 text-sm font-bold text-black hover:bg-yellow-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-300">Book a clock assessment ↗</a>
        </div>
      </div>
    </section>
  )
}
