// Fonts: IBM Plex Sans (https://fonts.google.com/specimen/IBM+Plex+Sans)
export default function FaqHearingAppointments() {
  return (
    <section className="bg-white font-['IBM_Plex_Sans',ui-sans-serif,system-ui,sans-serif] text-emerald-950 antialiased">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid gap-8 border-b border-emerald-900 pb-10 lg:grid-cols-[1.5fr_0.6fr] lg:items-end">
          <header>
            <p className="text-xs font-semibold uppercase tracking-[0.12em]">Soundwell / appointment desk</p>
            <h2 className="mt-4 text-[2.5rem] leading-[1.1] tracking-[-0.035em] text-balance sm:text-[3.5rem]">Time to hear your questions.</h2>
            <p className="mt-5 max-w-[38rem] text-[1rem] leading-[1.7]">
              A quiet room, time to talk and a clear explanation of your appointment. Here is how a
              visit to our hearing clinic works.
            </p>
          </header>
          <aside>
            <p className="text-[3.5rem] leading-none tracking-[-0.04em]">60 min</p>
            <p className="mt-3 text-sm leading-[1.7] text-emerald-800">A first appointment lasts one hour. We confirm the fee when you book.</p>
          </aside>
        </div>
        <div className="mt-10 grid items-start gap-x-16 gap-y-4 md:grid-cols-2">
          <details open className="group border-t border-emerald-200">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-950 [&::-webkit-details-marker]:hidden">
              <span>Do I need to book an appointment?</span>
              <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
            </summary>
            <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7] text-emerald-800">
              <p>
                Yes. Choose a morning or afternoon appointment by phone or email. Tell us if you
                need a quieter waiting area or a written conversation so we can prepare before you
                arrive.
              </p>
            </div>
          </details>
          <details className="group border-t border-emerald-200">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-950 [&::-webkit-details-marker]:hidden">
              <span>What should I bring to my first visit?</span>
              <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
            </summary>
            <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7] text-emerald-800">
              <p>
                Bring any hearing aids you use, their charger and a list of your current medicines.
                If you have a recent hearing report, bring a copy. A friend or family member is
                welcome too.
              </p>
            </div>
          </details>
          <details className="group border-t border-emerald-200">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-950 [&::-webkit-details-marker]:hidden">
              <span>Can you check hearing aids bought elsewhere?</span>
              <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
            </summary>
            <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7] text-emerald-800">
              <p>
                Tell us the make and model when booking. We can clean and check many hearing aids,
                but some adjustments need the original supplier. We will confirm what we can do
                before your visit.
              </p>
            </div>
          </details>
          <details className="group border-t border-emerald-200">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-950 [&::-webkit-details-marker]:hidden">
              <span>Is the clinic easy to access?</span>
              <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
            </summary>
            <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7] text-emerald-800">
              <p>
                The entrance and consultation rooms are on the ground floor, with no steps. There is
                an accessible toilet beside reception. Let us know if you need help from the
                drop-off point.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  )
}
