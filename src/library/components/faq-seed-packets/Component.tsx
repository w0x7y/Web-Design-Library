// Fonts: Bricolage Grotesque (https://fonts.google.com/specimen/Bricolage+Grotesque)
export default function FaqSeedPackets() {
  return (
    <section className="bg-green-950 font-['Bricolage_Grotesque',ui-sans-serif,system-ui,sans-serif] text-green-50 antialiased">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="max-w-[48rem]">
          <header>
            <p className="text-xs font-semibold uppercase tracking-[0.12em]">Sprig Exchange / seeds worth sharing</p>
            <h2 className="mt-4 text-[2.5rem] leading-[1.1] tracking-[-0.035em] text-balance sm:text-[3.5rem]">Small packets. Big questions.</h2>
            <p className="mt-5 max-w-[38rem] text-[1rem] leading-[1.7]">
              A neighbourhood seed library for curious growers. Borrow a variety, grow what you can,
              and share a little back.
            </p>
          </header>
        </div>
        <div className="mt-10 grid items-start gap-5 md:grid-cols-2">
          <article className="rounded-[1.5rem] bg-green-100 p-6 text-green-950">
            <h3 className="border-b border-green-800 pb-4 text-xs font-semibold uppercase tracking-[0.12em]">Borrowing / start here</h3>
            <details open className="group">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-950 [&::-webkit-details-marker]:hidden">
                <span>Do I need to bring seeds to join?</span>
                <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
              </summary>
              <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7]">
                <p>
                  No. Your first three packets are on us. Choose something you can grow in the space
                  you have, even if that is one pot on a windowsill.
                </p>
              </div>
            </details>
            <details className="group">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-950 [&::-webkit-details-marker]:hidden">
                <span>Are these seeds suited to my garden?</span>
                <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
              </summary>
              <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7]">
                <p>
                  Each packet lists sowing months, sunlight and the space a plant needs. Our table
                  volunteers can suggest varieties for containers, shade or a short growing season.
                </p>
              </div>
            </details>
          </article>
          <article className="rounded-[1.5rem] bg-orange-100 p-6 text-green-950 md:mt-12">
            <h3 className="border-b border-green-800 pb-4 text-xs font-semibold uppercase tracking-[0.12em]">Returning / keep it growing</h3>
            <details className="group">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-950 [&::-webkit-details-marker]:hidden">
                <span>How many seeds should I return?</span>
                <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
              </summary>
              <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7]">
                <p>
                  A small, clean handful is useful. Return seeds only from healthy plants and label
                  the variety, harvest year and where you grew it.
                </p>
              </div>
            </details>
            <details className="group">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-950 [&::-webkit-details-marker]:hidden">
                <span>What if my crop does not produce seeds?</span>
                <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
              </summary>
              <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7]">
                <p>
                  It happens. There is no fine and you can still borrow next season. Tell us what
                  you tried; your growing notes help the next person.
                </p>
              </div>
            </details>
          </article>
        </div>
      </div>
    </section>
  )
}
