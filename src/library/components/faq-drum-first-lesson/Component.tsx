// Fonts: Space Grotesk (https://fonts.google.com/specimen/Space+Grotesk)
export default function FaqDrumFirstLesson() {
  return (
    <section className="bg-neutral-950 font-['Space_Grotesk',ui-sans-serif,system-ui,sans-serif] text-orange-100 antialiased">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <header>
              <p className="text-xs font-semibold uppercase tracking-[0.12em]">Backbeat Rooms / first lesson</p>
              <h2 className="mt-4 text-[3.25rem] leading-[0.95] font-bold tracking-[-0.05em] text-orange-400 sm:text-[5rem]">Find your beat.</h2>
              <p className="mt-5 max-w-[38rem] text-[1rem] leading-[1.7]">Everything you need before sitting at the kit for the first time.</p>
            </header>
            <p className="mt-8 border-l-4 border-orange-400 pl-5 text-sm leading-[1.7]">
              Never played? Book a thirty-minute taster. Your teacher will meet you at reception and
              show you the rehearsal room.
            </p>
          </div>
          <div className="grid gap-4">
            <details open className="group border-2 border-orange-400 px-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-100 [&::-webkit-details-marker]:hidden">
                <span>
                  <span className="text-[0.75rem] font-medium text-orange-400">01 / START</span>
                  <span className="mt-2 block">Do I need any experience?</span>
                </span>
                <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
              </summary>
              <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7]">
                <p>
                  No. Your teacher starts with how to hold the sticks, sit at the kit and play a
                  simple beat. We teach at your pace, whether you want to join a band or just try
                  something new.
                </p>
              </div>
            </details>
            <details className="group border-2 border-orange-400 px-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-100 [&::-webkit-details-marker]:hidden">
                <span>
                  <span className="text-[0.75rem] font-medium text-orange-400">02 / KIT</span>
                  <span className="mt-2 block">Do I need to bring my own drums?</span>
                </span>
                <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
              </summary>
              <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7]">
                <p>
                  The room has a full kit, practice pads and spare sticks. Bring your own sticks if
                  you have a pair. Ear protection is available at reception and included with every
                  lesson.
                </p>
              </div>
            </details>
            <details className="group border-2 border-orange-400 px-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-100 [&::-webkit-details-marker]:hidden">
                <span>
                  <span className="text-[0.75rem] font-medium text-orange-400">03 / AGE</span>
                  <span className="mt-2 block">Can children take lessons?</span>
                </span>
                <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
              </summary>
              <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7]">
                <p>
                  We teach students from age seven. A parent or carer stays for the first lesson so
                  we can talk about the schedule and home practice. Our smaller kit adjusts for
                  younger players.
                </p>
              </div>
            </details>
            <details className="group border-2 border-orange-400 px-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-100 [&::-webkit-details-marker]:hidden">
                <span>
                  <span className="text-[0.75rem] font-medium text-orange-400">04 / PRACTICE</span>
                  <span className="mt-2 block">Can I practise between lessons?</span>
                </span>
                <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
              </summary>
              <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7]">
                <p>
                  Students can book a rehearsal room in half-hour slots. A practice pad is enough
                  for the exercises we set at home; you do not need a drum kit to begin.
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  )
}
