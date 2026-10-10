// Fonts: Bricolage Grotesque (https://fonts.google.com/specimen/Bricolage+Grotesque)
export default function CtaLidoMornings() {
  return (
    <section className="bg-sky-100 text-sky-950 font-['Bricolage_Grotesque',ui-sans-serif,system-ui,sans-serif] antialiased">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr] md:items-center sm:px-8 sm:py-20">
        <div>
          <p className="text-sm font-bold">Penny Lido / The early lengths</p>
          <h2 className="mt-5 max-w-xl text-[3rem] leading-[1.02] font-bold tracking-tight sm:text-[4rem]">
            A few lengths before the day begins.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-7">
            Cool air, open sky and a lane with room to swim. Make the outdoor pool
            your morning habit with our weekday early-bird pass.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-flex min-h-12 w-fit items-center justify-center gap-3 rounded-full bg-sky-950 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-950"
            >
              Join the morning swim
            </a>
          </div>
        </div>
        <div className="rounded-t-[6rem] rounded-b-3xl border-2 border-sky-950 bg-white px-6 pt-12 pb-6 sm:px-10">
          <div aria-hidden="true" className="flex justify-center">
            <svg viewBox="0 0 112 48" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="h-12 w-28 text-sky-800">
              <path d="M4 12c8-8 18-8 26 0s18 8 26 0 18-8 26 0 18 8 26 0M4 24c8-8 18-8 26 0s18 8 26 0 18-8 26 0 18 8 26 0M4 36c8-8 18-8 26 0s18 8 26 0 18-8 26 0 18 8 26 0" />
            </svg>
          </div>
          <h3 className="mt-8 text-center text-2xl font-bold">
            Your lane. Every morning.
          </h3>
          <dl className="mt-5 flex flex-col gap-3 border-t border-sky-200 pt-5 text-sm">
            <div className="flex justify-between gap-4">
              <dt>Pool</dt>
              <dd>50 m outdoors</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Hours</dt>
              <dd>Weekdays, 06:30–09:00</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Monthly pass</dt>
              <dd>£32</dd>
            </div>
          </dl>
          <p className="mt-5 text-center text-xs text-sky-800">
            Book your lane online. Lifeguards on duty.
          </p>
        </div>
      </div>
    </section>
  )
}
