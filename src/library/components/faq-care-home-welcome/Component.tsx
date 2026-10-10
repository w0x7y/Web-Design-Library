// Fonts: Manrope (https://fonts.google.com/specimen/Manrope)
export default function FaqCareHomeWelcome() {
  return (
    <section className="bg-slate-100 font-['Manrope',ui-sans-serif,system-ui,sans-serif] text-slate-950 antialiased">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-300 pb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.12em]">Willow House / family information</p>
          <p className="text-sm font-medium text-teal-800">For residents and their families</p>
        </div>
        <h2 className="mt-4 text-[2.5rem] leading-[1.1] tracking-[-0.035em] text-balance sm:text-[3.5rem]">Getting to know Willow House.</h2>
        <div className="mt-10 grid gap-8 lg:grid-cols-[16rem_1fr]">
          <aside className="border-l-2 border-teal-700 pl-5">
            <h3 className="text-lg font-semibold">Planning a move</h3>
            <p className="mt-3 text-sm leading-[1.7] text-slate-600">
              A few practical details about visiting, settling in and keeping in touch. Our welcome
              team can talk through the rest with you.
            </p>
          </aside>
          <div className="grid gap-0 rounded-lg border border-slate-300 bg-white px-6">
            <details open className="group border-b border-slate-200 last:border-b-0">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-950 [&::-webkit-details-marker]:hidden">
                <span>Can we visit before deciding on a room?</span>
                <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
              </summary>
              <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7]">
                <p>
                  Yes. Book a tour with our welcome team and bring anyone you would like involved in
                  the decision. We will show you an available room and the shared spaces, then sit
                  down to answer questions.
                </p>
              </div>
            </details>
            <details className="group border-b border-slate-200 last:border-b-0">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-950 [&::-webkit-details-marker]:hidden">
                <span>What can residents bring from home?</span>
                <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
              </summary>
              <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7]">
                <p>
                  Photographs, books and a favourite chair can help a room feel familiar. We check
                  larger furniture with you before moving day so there is space to move comfortably.
                  We provide a written packing list.
                </p>
              </div>
            </details>
            <details className="group border-b border-slate-200 last:border-b-0">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-950 [&::-webkit-details-marker]:hidden">
                <span>When can friends and family visit?</span>
                <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
              </summary>
              <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7]">
                <p>
                  Visitors are welcome throughout the day. Let reception know if you plan to stay
                  for a meal or visit late in the evening. Residents choose when they want company
                  and when they would prefer some quiet.
                </p>
              </div>
            </details>
            <details className="group border-b border-slate-200 last:border-b-0">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-950 [&::-webkit-details-marker]:hidden">
                <span>Who should families contact with questions?</span>
                <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
              </summary>
              <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7]">
                <p>
                  Each resident has a named key worker. Reception can put you in touch or arrange a
                  meeting with the home manager. We agree with the resident who receives updates and
                  how they would like us to keep in touch.
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  )
}
