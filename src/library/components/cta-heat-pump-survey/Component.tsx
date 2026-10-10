// Fonts: IBM Plex Sans (https://fonts.google.com/specimen/IBM+Plex+Sans)
export default function CtaHeatPumpSurvey() {
  return (
    <section className="bg-white text-teal-950 font-['IBM_Plex_Sans',ui-sans-serif,system-ui,sans-serif] antialiased">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-20">
        <div className="grid gap-5 border-b border-teal-200 pb-8 md:grid-cols-[1fr_2fr] md:gap-12">
          <div>
            <p className="text-lg font-semibold tracking-tight">Hearthwise</p>
            <p className="mt-2 text-xs uppercase tracking-widest text-teal-700">
              Heat pumps, planned for your home
            </p>
          </div>
          <h2 className="max-w-2xl text-[2.25rem] leading-[1.15] font-medium tracking-tight sm:text-[3rem]">
            Find out what your home needs to stay warm.
          </h2>
        </div>
        <div className="mt-8 grid gap-8 md:grid-cols-[1fr_2fr] md:gap-12">
          <div>
            <p className="max-w-sm text-base leading-7 text-teal-800">
              Start with a home survey. We check heat loss, radiator sizes and outdoor
              space, then explain the installation plan and a fixed quote.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="inline-flex min-h-12 w-fit items-center justify-center gap-3 rounded-lg bg-teal-800 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-950"
              >
                Book a home survey
              </a>
            </div>
            <p className="mt-6 text-xs leading-5 text-teal-800">
              A 90-minute visit with a heating engineer. £75, credited against
              installation.
            </p>
          </div>
          <div className="rounded-xl border border-teal-200 bg-teal-50 p-5 sm:p-7">
            <div className="flex flex-wrap justify-between gap-3 text-xs font-medium text-teal-800">
              <p>EXAMPLE SURVEY / HW-2061</p>
              <p>Site visit confirmed</p>
            </div>
            <h3 className="mt-6 text-xl font-semibold">
              Air-source heat pump survey
            </h3>
            <dl className="mt-4 grid gap-4 border-t border-teal-200 pt-4 sm:grid-cols-2">
              <div>
                <dt className="text-xs text-teal-700">Home</dt>
                <dd className="mt-1 text-sm font-medium">
                  Three-bedroom terrace
                </dd>
              </div>
              <div>
                <dt className="text-xs text-teal-700">Engineer</dt>
                <dd className="mt-1 text-sm font-medium">Asha Green</dd>
              </div>
              <div>
                <dt className="text-xs text-teal-700">Visit</dt>
                <dd className="mt-1 text-sm font-medium">Tuesday, 27 October</dd>
              </div>
              <div>
                <dt className="text-xs text-teal-700">Checks</dt>
                <dd className="mt-1 text-sm font-medium">
                  Heat loss + radiator sizes
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-xs leading-5 text-teal-800">
              A room-by-room plan before you choose an installer.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
