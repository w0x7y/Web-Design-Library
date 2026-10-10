// Fonts: Fraunces (https://fonts.google.com/specimen/Fraunces)
export default function FaqMidwiferyVisits() {
  return (
    <section className="bg-rose-50 font-['Fraunces',ui-sans-serif,system-ui,sans-serif] text-rose-950 antialiased">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <header>
            <p className="text-xs font-semibold uppercase tracking-[0.12em]">Juniper Midwives / getting acquainted</p>
            <h2 className="mt-4 text-[2.5rem] leading-[1.1] tracking-[-0.035em] text-balance sm:text-[3.5rem]">A familiar face at every visit.</h2>
            <p className="mt-5 max-w-[38rem] text-[1rem] leading-[1.7]">
              Before your first appointment, take a look at our visiting hours and the questions
              families ask about meeting their midwife.
            </p>
          </header>
          <p className="mt-5 max-w-[38rem] text-[1rem] leading-[1.7]">
            Our small team offers appointments at the practice and at home. We agree where to meet
            when you book and send the details in writing.
          </p>
        </div>
        <dl className="mt-10 grid gap-6 border-y border-rose-300 py-6 sm:grid-cols-3">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.12em]">Practice visits</dt>
            <dd className="mt-2 text-[1.375rem]">Weekdays, 9am to 5pm</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.12em]">Home visits</dt>
            <dd className="mt-2 text-[1.375rem]">By arrangement</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.12em]">Partner evenings</dt>
            <dd className="mt-2 text-[1.375rem]">Wednesday, 6pm to 8pm</dd>
          </div>
        </dl>
        <div className="mt-10 grid gap-x-16 gap-y-0 lg:ml-[25%]">
          <details open className="group border-b border-rose-300">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-950 [&::-webkit-details-marker]:hidden">
              <span>Can my partner come to appointments?</span>
              <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
            </summary>
            <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7] text-rose-900">
              <p>
                Yes. Bring a partner or another person you trust. Tell us how many people will join
                you when booking so we can choose a room with enough space. You can also ask to
                speak with your midwife alone.
              </p>
            </div>
          </details>
          <details className="group border-b border-rose-300">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-950 [&::-webkit-details-marker]:hidden">
              <span>What happens at the first visit?</span>
              <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
            </summary>
            <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7] text-rose-900">
              <p>
                We set aside ninety minutes to hear about you, talk through your questions and
                explain how our practice works. Bring any maternity notes you already have. We send
                a written summary after the visit.
              </p>
            </div>
          </details>
          <details className="group border-b border-rose-300">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-950 [&::-webkit-details-marker]:hidden">
              <span>How do I change an appointment?</span>
              <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
            </summary>
            <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7] text-rose-900">
              <p>
                Call the practice or reply to your booking email by the previous working day. We
                will offer another time with your usual midwife where possible. Home-visit changes
                are confirmed by phone.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  )
}
