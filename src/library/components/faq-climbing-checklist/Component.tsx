// Fonts: Space Grotesk (https://fonts.google.com/specimen/Space+Grotesk)
export default function FaqClimbingChecklist() {
  return (
    <section className="bg-neutral-950 font-['Space_Grotesk',ui-sans-serif,system-ui,sans-serif] text-orange-100 antialiased">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <header>
              <p className="text-xs font-semibold uppercase tracking-[0.12em]">Crux Yard / first visit</p>
              <h2 className="mt-4 text-[3.25rem] leading-[0.95] font-bold tracking-[-0.05em] text-orange-400 sm:text-[5rem]">Less guessing. More climbing.</h2>
              <p className="mt-5 max-w-[38rem] text-[1rem] leading-[1.7]">Everything you need for your first session on the wall.</p>
            </header>
            <p className="mt-8 border-l-4 border-orange-400 pl-5 text-sm leading-[1.7]">New climber? Come before 6pm on weekdays for a quieter introduction with our floor team.</p>
          </div>
          <div className="grid gap-4">
            <details open className="group border-2 border-orange-400 px-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-100 [&::-webkit-details-marker]:hidden">
                <span>
                  <span className="text-[0.75rem] font-medium text-orange-400">01 / START</span>
                  <span className="mt-2 block">Do I need a partner?</span>
                </span>
                <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
              </summary>
              <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7]">
                <p>
                  No. Our bouldering walls use padded landing areas, with no ropes or belay partner.
                  Your first visit includes a floor briefing before you climb.
                </p>
              </div>
            </details>
            <details className="group border-2 border-orange-400 px-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-100 [&::-webkit-details-marker]:hidden">
                <span>
                  <span className="text-[0.75rem] font-medium text-orange-400">02 / KIT</span>
                  <span className="mt-2 block">What should I bring?</span>
                </span>
                <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
              </summary>
              <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7]">
                <p>
                  Wear clothes you can move in and bring a water bottle. Hire shoes are available at
                  the desk. Socks are required with hire shoes.
                </p>
              </div>
            </details>
            <details className="group border-2 border-orange-400 px-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-100 [&::-webkit-details-marker]:hidden">
                <span>
                  <span className="text-[0.75rem] font-medium text-orange-400">03 / AGE</span>
                  <span className="mt-2 block">Is there an age limit?</span>
                </span>
                <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
              </summary>
              <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7]">
                <p>
                  The main floor is for ages 14 and up. Younger climbers can use the junior wall
                  during supervised family sessions on Saturday mornings.
                </p>
              </div>
            </details>
            <details className="group border-2 border-orange-400 px-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-100 [&::-webkit-details-marker]:hidden">
                <span>
                  <span className="text-[0.75rem] font-medium text-orange-400">04 / PASS</span>
                  <span className="mt-2 block">Can I leave and come back?</span>
                </span>
                <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
              </summary>
              <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7]">
                <p>
                  Your day pass is valid until closing. Keep your wristband on and check back in at
                  the desk when you return.
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  )
}
