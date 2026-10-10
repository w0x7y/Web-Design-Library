// Fonts: Young Serif
export default function PricingPrintJournal() {
  return (
    <section className="bg-fuchsia-950 text-pink-100">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <header className="flex flex-wrap items-end justify-between gap-5 border-b border-pink-300 pb-5">
          <p className="font-['Young_Serif',ui-serif,Georgia,serif] text-3xl">Margin Review</p>
          <p className="text-xs tracking-widest uppercase">An independent quarterly / Printed to keep</p>
        </header>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start lg:gap-20">
          <figure>
            <div className="flex min-h-[28rem] flex-col justify-between bg-pink-200 p-6 text-fuchsia-950 sm:p-10">
              <div className="flex flex-wrap justify-between gap-3 text-xs font-medium tracking-widest uppercase">
                <p>Margin / Volume 02</p>
                <p>Autumn 2026</p>
              </div>
              <p
                className="mt-6 font-['Young_Serif',ui-serif,Georgia,serif] text-[7rem] leading-none tracking-[-0.05em] sm:text-[10rem]"
                aria-hidden="true"
              >
                08
              </p>
              <p
                className="mt-6 max-w-sm font-['Young_Serif',ui-serif,Georgia,serif] text-3xl leading-tight sm:text-4xl"
              >
                The city at walking pace.
              </p>
              <p
                className="mt-8 border-t border-fuchsia-950 pt-4 text-xs leading-relaxed"
              >
                Essays, photographs and conversations about the places we share.
              </p>
            </div>
            <figcaption
              className="mt-3 text-xs text-pink-200"
            >
              Issue 08 / 128 pages / Uncoated paper / Printed in Leeds
            </figcaption>
          </figure>
          <div>
            <h2
              className="font-['Young_Serif',ui-serif,Georgia,serif] text-4xl leading-[1.15]"
            >
              Make a little room for print.
            </h2>
            <p
              className="mt-4 text-sm leading-relaxed text-pink-200"
            >
              A journal about architecture and the people who live around it. Read a single issue or keep a
              place on the doorstep for the next four.
            </p>
            <article className="mt-7 border-t border-pink-300 pt-5">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="text-base font-semibold">The current issue</h3>
                <p className="font-['Young_Serif',ui-serif,Georgia,serif] text-3xl">£14</p>
              </div>
              <p
                className="mt-3 text-sm leading-relaxed text-pink-200"
              >
                Start with Issue 08. Dispatches within three working days, wrapped in recyclable paper.
              </p>
              <a
                className="mt-3 inline-flex min-h-11 items-center text-sm font-medium underline underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-300"
                href="#"
              >
                Order Issue 08 →
              </a>
            </article>
            <article className="mt-7 border-t border-pink-300 pt-5">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="text-base font-semibold">A year of Margin</h3>
                <p className="font-['Young_Serif',ui-serif,Georgia,serif] text-3xl">£48</p>
              </div>
              <p
                className="mt-3 text-sm leading-relaxed text-pink-200"
              >
                Four print issues, beginning with Issue 08. Save £8 and receive each new issue before it
                reaches the shops.
              </p>
              <a
                className="mt-5 flex min-h-12 items-center justify-center bg-pink-300 px-5 text-sm font-semibold text-fuchsia-950 hover:bg-pink-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink-300"
                href="#"
              >
                Subscribe for four issues
              </a>
              <p
                className="mt-5 text-xs leading-relaxed text-pink-200"
              >
                UK postage included. International delivery is calculated at checkout. Annual subscriptions
                renew with a reminder 30 days ahead.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
