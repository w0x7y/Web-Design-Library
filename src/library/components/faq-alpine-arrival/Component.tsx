// Fonts: DM Sans (https://fonts.google.com/specimen/DM+Sans)
export default function FaqAlpineArrival() {
  return (
    <section className="bg-slate-950 font-['DM_Sans',ui-sans-serif,system-ui,sans-serif] text-white antialiased relative isolate">
      <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80" alt="Layered alpine peaks in cool evening light beneath a pale sky" width="1600" height="1067" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40" />
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <header>
              <p className="text-xs font-semibold uppercase tracking-[0.12em]">Stillpass / arriving at the cabins</p>
              <h2 className="mt-4 text-[2.5rem] leading-[1.1] tracking-[-0.035em] text-balance sm:text-[3.5rem]">The last mile is the quietest.</h2>
              <p className="mt-5 max-w-[38rem] text-[1rem] leading-[1.7]">
                You have booked a few days on the mountain. Here is how to get here, settle in and
                leave the car behind.
              </p>
            </header>
            <p className="mt-8 max-w-[30rem] border-t border-white/40 pt-5 text-sm leading-[1.7]">
              Save your arrival guide before leaving the valley. Phone reception is patchy above the
              village.
            </p>
          </div>
          <div className="grid gap-0 rounded-[1.5rem] border border-white/30 bg-slate-950/80 px-6 py-2 backdrop-blur-[12px]">
            <details open className="group border-b border-white/20 last:border-b-0">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white [&::-webkit-details-marker]:hidden">
                <span>Can I arrive without a car?</span>
                <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
              </summary>
              <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7] text-slate-200">
                <p>
                  Yes. Take the valley train to Aven station, then the 4:10pm village bus. We meet
                  the bus at the square and carry your bags to the cabin. Tell us your arrival date
                  two days ahead.
                </p>
              </div>
            </details>
            <details className="group border-b border-white/20 last:border-b-0">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white [&::-webkit-details-marker]:hidden">
                <span>When can we check in?</span>
                <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
              </summary>
              <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7] text-slate-200">
                <p>
                  Your cabin is ready from 3pm. If you arrive early, leave your bags at the lodge
                  and use the walking room. Late arrivals receive a key-box code in their arrival
                  guide.
                </p>
              </div>
            </details>
            <details className="group border-b border-white/20 last:border-b-0">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white [&::-webkit-details-marker]:hidden">
                <span>Is the kitchen stocked?</span>
                <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
              </summary>
              <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7] text-slate-200">
                <p>
                  There is coffee, tea, oil, salt and a small breakfast basket for your first
                  morning. The village shop closes at 6pm, so buy groceries before coming up the
                  hill.
                </p>
              </div>
            </details>
            <details className="group border-b border-white/20 last:border-b-0">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white [&::-webkit-details-marker]:hidden">
                <span>Can we bring our dog?</span>
                <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
              </summary>
              <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7] text-slate-200">
                <p>
                  Two cabins welcome dogs. Choose a dog-friendly cabin when booking and bring a bed.
                  Keep dogs on a lead near grazing animals and out of the shared sauna.
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  )
}
