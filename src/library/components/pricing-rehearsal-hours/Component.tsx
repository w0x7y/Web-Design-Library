// Fonts: IBM Plex Mono
export default function PricingRehearsalHours() {
  return (
    <section className="bg-neutral-950 font-['IBM_Plex_Mono',ui-monospace,monospace] text-neutral-100">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <header className="flex flex-wrap justify-between gap-4 text-xs uppercase tracking-widest text-green-300">
          <p>ROOM 04 / Rehearsal rooms</p>
          <p>Open daily / East London</p>
        </header>
        <h2
          className="mt-8 max-w-4xl text-4xl leading-[1.05] font-medium tracking-tight uppercase sm:text-6xl"
        >
          Make noise. Pay by the hour.
        </h2>
        <p
          className="mt-5 max-w-2xl text-sm leading-relaxed text-neutral-300"
        >
          A treated room, a real drum kit and backline that works. One rate for the whole band. Bring your
          instruments and get on with it.
        </p>
        <dl className="mt-10 grid gap-3">
          <div
            className="grid gap-5 bg-neutral-100 p-6 text-neutral-950 md:grid-cols-[1fr_1.3fr_1fr] md:items-center lg:mr-12"
          >
            <dt>
              <p className="text-xl font-medium">10:00–17:00</p>
              <p className="mt-2 text-xs uppercase tracking-wide">Monday to Friday</p>
            </dt>
            <dd>
              <p className="text-sm font-medium uppercase">Daylight session</p>
              <p className="mt-2 text-xs leading-relaxed">For writing, trying and starting over.</p>
            </dd>
            <dd className="flex flex-wrap items-baseline gap-2 md:justify-end">
              <span className="text-5xl font-medium tracking-tight">£12</span>
              <span className="text-xs">/ hour</span>
            </dd>
          </div>
          <div
            className="grid gap-5 bg-green-300 p-6 text-neutral-950 md:grid-cols-[1fr_1.3fr_1fr] md:items-center lg:ml-12"
          >
            <dt>
              <p className="text-xl font-medium">17:00–23:00</p>
              <p className="mt-2 text-xs uppercase tracking-wide">Every day</p>
            </dt>
            <dd>
              <p className="text-sm font-medium uppercase">After-hours session</p>
              <p className="mt-2 text-xs leading-relaxed">Plug in after work. Turn it up.</p>
            </dd>
            <dd className="flex flex-wrap items-baseline gap-2 md:justify-end">
              <span className="text-5xl font-medium tracking-tight">£18</span>
              <span className="text-xs">/ hour</span>
            </dd>
          </div>
          <div
            className="grid gap-5 border-2 border-neutral-100 p-6 md:grid-cols-[1fr_1.3fr_1fr] md:items-center lg:mr-12"
          >
            <dt>
              <p className="text-xl font-medium">10:00–17:00</p>
              <p className="mt-2 text-xs uppercase tracking-wide">Saturday &amp; Sunday</p>
            </dt>
            <dd>
              <p className="text-sm font-medium uppercase">Weekend session</p>
              <p className="mt-2 text-xs leading-relaxed">A longer stretch with the whole band.</p>
            </dd>
            <dd className="flex flex-wrap items-baseline gap-2 md:justify-end">
              <span className="text-5xl font-medium tracking-tight">£16</span>
              <span className="text-xs">/ hour</span>
            </dd>
          </div>
        </dl>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
          <p
            className="max-w-xl text-xs leading-relaxed text-neutral-300"
          >
            Two-hour minimum. Drum kit, two guitar amps, bass amp, PA and three microphones included. Cancel
            free up to 48 hours before your session.
          </p>
          <a
            className="inline-flex min-h-12 items-center border-2 border-green-300 px-6 text-sm font-medium uppercase text-green-300 hover:bg-green-300 hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-300"
            href="#"
          >
            Find a free room →
          </a>
        </div>
      </div>
    </section>
  )
}
