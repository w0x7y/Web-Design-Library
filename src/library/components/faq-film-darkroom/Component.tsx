// Fonts: Newsreader (https://fonts.google.com/specimen/Newsreader)
export default function FaqFilmDarkroom() {
  return (
    <section className="bg-red-950 font-['Newsreader',ui-sans-serif,system-ui,sans-serif] text-rose-100 antialiased">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid gap-8 border-b border-rose-300/40 pb-10 md:grid-cols-[1fr_15rem] md:items-end">
          <header>
            <p className="text-xs font-semibold uppercase tracking-[0.12em]">Grainroom / the lab desk</p>
            <h2 className="mt-4 text-[2.5rem] leading-[1.1] tracking-[-0.035em] text-balance sm:text-[3.5rem]">Every roll has a story.</h2>
            <p className="mt-5 max-w-[38rem] text-[1rem] leading-[1.7]">The small practical details between dropping off your film and seeing what came back.</p>
          </header>
          <aside>
            <p className="text-[0.875rem] uppercase tracking-[0.15em]">Standard colour process</p>
            <p className="mt-2 text-[2rem]">Three working days</p>
          </aside>
        </div>
        <div className="mt-6 grid gap-0">
          <details open className="group border-b border-rose-300/40">
            <summary className="grid cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.5rem] leading-[1.5] font-medium hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-100 [&::-webkit-details-marker]:hidden grid-cols-[1fr_auto] sm:grid-cols-[4rem_1fr_auto] sm:gap-6">
              <span aria-hidden="true" className="hidden border border-rose-300/40 p-2 text-center text-[0.875rem] leading-[1.5] sm:block">01A</span>
              <span>Which film formats do you develop?</span>
              <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
            </summary>
            <div className="max-w-[65ch] pb-6 text-[1.125rem] leading-[1.7] text-rose-200 sm:ml-[5.5rem]">
              <p>
                We process 35mm and 120 colour negative film in C-41, plus black-and-white film in
                small batches. We do not process slide film or disposable cameras with water damage.
              </p>
            </div>
          </details>
          <details className="group border-b border-rose-300/40">
            <summary className="grid cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.5rem] leading-[1.5] font-medium hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-100 [&::-webkit-details-marker]:hidden grid-cols-[1fr_auto] sm:grid-cols-[4rem_1fr_auto] sm:gap-6">
              <span aria-hidden="true" className="hidden border border-rose-300/40 p-2 text-center text-[0.875rem] leading-[1.5] sm:block">02A</span>
              <span>Do I get my negatives back?</span>
              <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
            </summary>
            <div className="max-w-[65ch] pb-6 text-[1.125rem] leading-[1.7] text-rose-200 sm:ml-[5.5rem]">
              <p>
                Always. Your negatives are sleeved and ready to collect after scanning. For postal
                orders, we return them with your prints. We keep uncollected negatives for six
                months.
              </p>
            </div>
          </details>
          <details className="group border-b border-rose-300/40">
            <summary className="grid cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.5rem] leading-[1.5] font-medium hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-100 [&::-webkit-details-marker]:hidden grid-cols-[1fr_auto] sm:grid-cols-[4rem_1fr_auto] sm:gap-6">
              <span aria-hidden="true" className="hidden border border-rose-300/40 p-2 text-center text-[0.875rem] leading-[1.5] sm:block">03A</span>
              <span>What size are the scans?</span>
              <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
            </summary>
            <div className="max-w-[65ch] pb-6 text-[1.125rem] leading-[1.7] text-rose-200 sm:ml-[5.5rem]">
              <p>
                Standard scans are about 3000 pixels on the long edge and supplied as JPEG files.
                Choose the archive option for higher-resolution TIFF files when you plan to make
                large prints.
              </p>
            </div>
          </details>
          <details className="group border-b border-rose-300/40">
            <summary className="grid cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.5rem] leading-[1.5] font-medium hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-100 [&::-webkit-details-marker]:hidden grid-cols-[1fr_auto] sm:grid-cols-[4rem_1fr_auto] sm:gap-6">
              <span aria-hidden="true" className="hidden border border-rose-300/40 p-2 text-center text-[0.875rem] leading-[1.5] sm:block">04A</span>
              <span>Can you push or pull a roll?</span>
              <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
            </summary>
            <div className="max-w-[65ch] pb-6 text-[1.125rem] leading-[1.7] text-rose-200 sm:ml-[5.5rem]">
              <p>
                Yes. Write the exposed ISO on the order envelope. We can adjust black-and-white
                processing by up to two stops; colour push processing is available by arrangement.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  )
}
