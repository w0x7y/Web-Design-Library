// Fonts: IBM Plex Sans (https://fonts.google.com/specimen/IBM+Plex+Sans)
export default function CtaLegalIntake() {
  return (
    <section className="bg-white text-teal-950 font-['IBM_Plex_Sans',ui-sans-serif,system-ui,sans-serif] antialiased">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-20">
        <div className="grid gap-5 border-b border-teal-200 pb-8 md:grid-cols-[1fr_2fr] md:gap-12">
          <div>
            <p className="text-lg font-semibold tracking-tight">Clauseway</p>
            <p className="mt-2 text-xs uppercase tracking-widest text-teal-700">
              A calmer legal inbox
            </p>
          </div>
          <h2 className="max-w-2xl text-[2.25rem] leading-[1.15] font-medium tracking-tight sm:text-[3rem]">
            Give every request a proper place to start.
          </h2>
        </div>
        <div className="mt-8 grid gap-8 md:grid-cols-[1fr_2fr] md:gap-12">
          <div>
            <p className="max-w-sm text-base leading-7 text-teal-800">
              Replace scattered messages with one intake queue. Your team gets
              the context, owner and deadline before the work begins.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="inline-flex min-h-12 w-fit items-center justify-center gap-3 rounded-lg bg-teal-800 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-950"
              >
                Walk through an intake
              </a>
            </div>
            <p className="mt-6 text-xs leading-5 text-teal-800">
              20-minute demo with a legal operations specialist.
            </p>
          </div>
          <div className="rounded-xl border border-teal-200 bg-teal-50 p-5 sm:p-7">
            <div className="flex flex-wrap justify-between gap-3 text-xs font-medium text-teal-800">
              <p>EXAMPLE REQUEST / CW-1048</p>
              <p>Ready for review</p>
            </div>
            <h3 className="mt-6 text-xl font-semibold">
              Supplier agreement review
            </h3>
            <dl className="mt-4 grid gap-4 border-t border-teal-200 pt-4 sm:grid-cols-2">
              <div>
                <dt className="text-xs text-teal-700">Requested by</dt>
                <dd className="mt-1 text-sm font-medium">
                  Mina Patel · Procurement
                </dd>
              </div>
              <div>
                <dt className="text-xs text-teal-700">Assigned to</dt>
                <dd className="mt-1 text-sm font-medium">Commercial legal</dd>
              </div>
              <div>
                <dt className="text-xs text-teal-700">Deadline</dt>
                <dd className="mt-1 text-sm font-medium">Friday, 23 October</dd>
              </div>
              <div>
                <dt className="text-xs text-teal-700">Attachments</dt>
                <dd className="mt-1 text-sm font-medium">
                  Draft agreement + scope
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-xs leading-5 text-teal-800">
              The right details, before the first follow-up.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
