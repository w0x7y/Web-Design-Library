// Fonts: Syne (https://fonts.google.com/specimen/Syne)
export default function FaqObservatoryNight() {
  return (
    <section className="bg-stone-950 font-['Syne',ui-sans-serif,system-ui,sans-serif] text-amber-50 antialiased bg-[linear-gradient(120deg,#452516_0%,#1c1917_55%,#0c0a09_100%)]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <header>
          <p className="text-xs font-semibold uppercase tracking-[0.12em]">Meridian Observatory / after sunset</p>
          <h2 className="mt-4 text-[2.5rem] leading-[1.1] tracking-[-0.035em] text-balance sm:text-[3.5rem]">The sky has its own schedule.</h2>
          <p className="mt-5 max-w-[38rem] text-[1rem] leading-[1.7]">
            We can plan the evening. The clouds get the final say. Here is what to expect from a
            night at the telescopes.
          </p>
        </header>
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.6fr_0.7fr]">
          <div className="grid gap-0">
            <details open className="group border-t border-amber-200/40">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-50 [&::-webkit-details-marker]:hidden">
                <span>What happens on a cloudy night?</span>
                <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
              </summary>
              <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7] text-amber-100">
                <p>
                  Your visit still includes the planetarium and an observatory tour. If the
                  telescopes cannot open, we also give you a return pass for an observing session
                  within three months.
                </p>
              </div>
            </details>
            <details className="group border-t border-amber-200/40">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-50 [&::-webkit-details-marker]:hidden">
                <span>Will I need to know anything about astronomy?</span>
                <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
              </summary>
              <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7] text-amber-100">
                <p>
                  No. A host introduces each object before you look through the eyepiece. Ask as
                  many questions as you like; the session is designed for first-time visitors.
                </p>
              </div>
            </details>
            <details className="group border-t border-amber-200/40">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-50 [&::-webkit-details-marker]:hidden">
                <span>Can I take photographs through the telescope?</span>
                <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
              </summary>
              <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7] text-amber-100">
                <p>
                  Our main instruments are set up for visual observing. A host can help you take a
                  phone photo at the smaller telescope when the Moon is visible.
                </p>
              </div>
            </details>
          </div>
          <aside className="self-start rounded-[1.25rem] border border-amber-200/40 bg-stone-950/40 p-6">
            <h3 className="text-[1.5rem] font-semibold">Pack for the hill</h3>
            <p className="mt-4 text-sm leading-[1.7] text-amber-100">
              The dome is unheated. Bring a coat even in summer, wear flat shoes and keep phone
              screens dim around the telescopes.
            </p>
            <p className="mt-4 text-sm leading-[1.7] text-amber-100">Doors open at 7:30pm. The last shuttle leaves the station at 7:15pm.</p>
          </aside>
        </div>
      </div>
    </section>
  )
}
