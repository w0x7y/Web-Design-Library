// Fonts: DM Sans (https://fonts.google.com/specimen/DM+Sans)
export default function FaqOperaEvening() {
  return (
    <section className="bg-slate-950 font-['DM_Sans',ui-sans-serif,system-ui,sans-serif] text-white antialiased relative isolate">
      <img src="https://images.unsplash.com/photo-1503095396549-807759245b35?w=1600&q=80" alt="Three performers silhouetted against red stage curtains" width="1600" height="1067" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40" />
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <header>
              <p className="text-xs font-semibold uppercase tracking-[0.12em]">Calder Opera / your evening</p>
              <h2 className="mt-4 text-[2.5rem] leading-[1.1] tracking-[-0.035em] text-balance sm:text-[3.5rem]">Before the curtain rises.</h2>
              <p className="mt-5 max-w-[38rem] text-[1rem] leading-[1.7]">
                You have your ticket. Here is how to find your seat, follow the story and make an
                evening of your first visit to the opera.
              </p>
            </header>
            <p className="mt-8 max-w-[30rem] border-t border-white/40 pt-5 text-sm leading-[1.7]">
              The foyer opens at 6pm for a 7:30pm performance. Your ticket lists the running time
              and intervals so you can plan your journey home.
            </p>
          </div>
          <div className="grid gap-0 rounded-[1.5rem] border border-white/30 bg-slate-950/80 px-6 py-2 backdrop-blur-[12px]">
            <details open className="group border-b border-white/20 last:border-b-0">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white [&::-webkit-details-marker]:hidden">
                <span>Do I need to know the opera beforehand?</span>
                <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
              </summary>
              <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7] text-slate-200">
                <p>
                  No. English surtitles appear above the stage, and the programme has a short
                  synopsis. Our free introduction in the foyer starts forty-five minutes before the
                  performance and lasts twenty minutes.
                </p>
              </div>
            </details>
            <details className="group border-b border-white/20 last:border-b-0">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white [&::-webkit-details-marker]:hidden">
                <span>How early should I arrive?</span>
                <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
              </summary>
              <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7] text-slate-200">
                <p>
                  Aim to arrive thirty minutes before the performance. That gives you time to leave
                  a coat, collect a programme and find your seat. The bars open with the foyer at
                  6pm.
                </p>
              </div>
            </details>
            <details className="group border-b border-white/20 last:border-b-0">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white [&::-webkit-details-marker]:hidden">
                <span>What happens if I arrive after the start?</span>
                <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
              </summary>
              <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7] text-slate-200">
                <p>
                  Ushers will guide you to a waiting area and admit you at a suitable pause. Some
                  productions allow entry only at the interval. We will explain the arrangements for
                  your performance when you arrive.
                </p>
              </div>
            </details>
            <details className="group border-b border-white/20 last:border-b-0">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white [&::-webkit-details-marker]:hidden">
                <span>Can I request accessible seating?</span>
                <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
              </summary>
              <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7] text-slate-200">
                <p>
                  Yes. Contact the box office before booking for wheelchair spaces, companion seats
                  and step-free routes. Tell us what would help you enjoy the evening, and we will
                  confirm the arrangements in writing.
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  )
}
