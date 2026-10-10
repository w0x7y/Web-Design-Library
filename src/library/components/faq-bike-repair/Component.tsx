// Fonts: IBM Plex Sans (https://fonts.google.com/specimen/IBM+Plex+Sans)
export default function FaqBikeRepair() {
  return (
    <section className="bg-white font-['IBM_Plex_Sans',ui-sans-serif,system-ui,sans-serif] text-emerald-950 antialiased">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid gap-8 border-b border-emerald-900 pb-10 lg:grid-cols-[1.5fr_0.6fr] lg:items-end">
          <header>
            <p className="text-xs font-semibold uppercase tracking-[0.12em]">Spoke House / workshop desk</p>
            <h2 className="mt-4 text-[2.5rem] leading-[1.1] tracking-[-0.035em] text-balance sm:text-[3.5rem]">A repair, without the mystery.</h2>
            <p className="mt-5 max-w-[38rem] text-[1rem] leading-[1.7]">
              Tell us what feels wrong. We will check the bike, explain the work and agree a price
              before picking up a tool.
            </p>
          </header>
          <aside>
            <p className="text-[3.5rem] leading-none tracking-[-0.04em]">£35</p>
            <p className="mt-3 text-sm leading-[1.7] text-emerald-800">Safety check, from £35. Parts and extra labour are quoted separately.</p>
          </aside>
        </div>
        <div className="mt-10 grid items-start gap-x-16 gap-y-4 md:grid-cols-2">
          <details open className="group border-t border-emerald-200">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-950 [&::-webkit-details-marker]:hidden">
              <span>Do I need to book a repair?</span>
              <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
            </summary>
            <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7] text-emerald-800">
              <p>
                For a service, yes. Book a drop-off window and bring your bike by 10am. We leave a
                few slots open each day for punctures and small adjustments.
              </p>
            </div>
          </details>
          <details className="group border-t border-emerald-200">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-950 [&::-webkit-details-marker]:hidden">
              <span>How long will you keep my bike?</span>
              <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
            </summary>
            <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7] text-emerald-800">
              <p>
                Most services are ready the next working day. If we need to order a part, we will
                give you an expected date before you leave the bike.
              </p>
            </div>
          </details>
          <details className="group border-t border-emerald-200">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-950 [&::-webkit-details-marker]:hidden">
              <span>Will you work on an electric bike?</span>
              <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
            </summary>
            <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7] text-emerald-800">
              <p>
                We service tyres, brakes and drivetrains on most electric bikes. For motor or
                battery faults, tell us the system name first so we can check whether we support it.
              </p>
            </div>
          </details>
          <details className="group border-t border-emerald-200">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-950 [&::-webkit-details-marker]:hidden">
              <span>Can you fit parts I already own?</span>
              <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
            </summary>
            <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7] text-emerald-800">
              <p>
                Usually. Bring the part and its packaging so we can check compatibility. Our labour
                guarantee covers the fitting; the part remains covered by its seller.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  )
}
