// Fonts: Syne (https://fonts.google.com/specimen/Syne)
export default function FaqRecordPressing() {
  return (
    <section className="bg-stone-950 font-['Syne',ui-sans-serif,system-ui,sans-serif] text-amber-50 antialiased bg-[linear-gradient(120deg,#452516_0%,#1c1917_55%,#0c0a09_100%)]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <header>
          <p className="text-xs font-semibold uppercase tracking-[0.12em]">Side A Works / pressing questions</p>
          <h2 className="mt-4 text-[2.5rem] leading-[1.1] tracking-[-0.035em] text-balance sm:text-[3.5rem]">From your master to the turntable.</h2>
          <p className="mt-5 max-w-[38rem] text-[1rem] leading-[1.7]">
            Your record has a few steps to go before it reaches the shops. Here is how quantities,
            test copies and sleeves fit into a pressing order.
          </p>
        </header>
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.6fr_0.7fr]">
          <div className="grid gap-0">
            <details open className="group border-t border-amber-200/40">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-50 [&::-webkit-details-marker]:hidden">
                <span>What is the smallest run you press?</span>
                <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
              </summary>
              <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7] text-amber-100">
                <p>
                  Our standard minimum is 250 copies for a seven-inch or twelve-inch record. Tell us
                  the format, colour and quantity when requesting a quote. We price the records and
                  packaging separately so you can compare options.
                </p>
              </div>
            </details>
            <details className="group border-t border-amber-200/40">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-50 [&::-webkit-details-marker]:hidden">
                <span>How do I approve the test pressing?</span>
                <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
              </summary>
              <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7] text-amber-100">
                <p>
                  We send five test copies before the production run. Listen to both sides on a
                  turntable, check the track order and send one written approval for the whole
                  release. If something needs review, we pause the order and talk it through.
                </p>
              </div>
            </details>
            <details className="group border-t border-amber-200/40">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-50 [&::-webkit-details-marker]:hidden">
                <span>Can you supply printed sleeves too?</span>
                <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
              </summary>
              <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7] text-amber-100">
                <p>
                  Yes. Choose plain sleeves, printed outer sleeves or gatefold packaging when asking
                  for a quote. We send artwork templates for your chosen format and a digital proof
                  to approve before printing.
                </p>
              </div>
            </details>
          </div>
          <aside className="self-start rounded-[1.25rem] border border-amber-200/40 bg-stone-950/40 p-6">
            <h3 className="text-[1.5rem] font-semibold">Prepare your release</h3>
            <p className="mt-4 text-sm leading-[1.7] text-amber-100">
              Send separate WAV masters for each side, a track list with timings and artwork using
              our sleeve templates. Keep the catalogue number the same across the audio, labels and
              packaging.
            </p>
            <p className="mt-4 text-sm leading-[1.7] text-amber-100">
              We confirm your production slot after test-pressing approval and send the expected
              dispatch date in writing.
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}
