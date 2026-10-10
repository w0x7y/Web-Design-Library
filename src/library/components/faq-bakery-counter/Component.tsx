// Fonts: Familjen Grotesk (https://fonts.google.com/specimen/Familjen+Grotesk)
export default function FaqBakeryCounter() {
  return (
    <section className="bg-pink-100 font-['Familjen_Grotesk',ui-sans-serif,system-ui,sans-serif] text-red-950 antialiased">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr] md:items-end">
          <header>
            <p className="text-xs font-semibold uppercase tracking-[0.12em]">Loaf Assembly / over the counter</p>
            <h2 className="mt-4 text-[2.5rem] leading-[1.1] tracking-[-0.035em] text-balance sm:text-[3.5rem]">Good bread. A few good answers.</h2>
            <p className="mt-5 max-w-[38rem] text-[1rem] leading-[1.7]">
              Our weekly bread share is simple. These are the things people ask while the loaves are
              cooling.
            </p>
          </header>
          <aside className="rounded-[1rem] bg-red-950 p-6 text-pink-100">
            <h3 className="text-lg font-semibold">Collection at the bakery</h3>
            <p className="mt-2 text-sm leading-[1.7]">Thursday & Friday, 3–7pm. Bring a bag; we will keep your loaf behind the counter.</p>
          </aside>
        </div>
        <div className="mt-10 grid gap-5">
          <details open className="group rounded-[1.5rem_1.5rem_1.5rem_0.25rem] border border-red-300 bg-white px-6 md:mr-[20%] even:bg-red-200 md:even:mr-0 md:even:ml-[20%]">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-950 [&::-webkit-details-marker]:hidden">
              <span>Can I skip a week of my bread share?</span>
              <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
            </summary>
            <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7]">
              <p>
                Yes. Pause by Sunday evening for the following week. We will move that loaf to the
                end of your subscription, so you do not lose it.
              </p>
            </div>
          </details>
          <details className="group rounded-[1.5rem_1.5rem_1.5rem_0.25rem] border border-red-300 bg-white px-6 md:mr-[20%] even:bg-red-200 md:even:mr-0 md:even:ml-[20%]">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-950 [&::-webkit-details-marker]:hidden">
              <span>Is all of your bread sourdough?</span>
              <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
            </summary>
            <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7]">
              <p>
                Our weekly loaf is naturally leavened. The Saturday milk buns use baker’s yeast and
                contain milk and butter. Every shelf label lists the ingredients.
              </p>
            </div>
          </details>
          <details className="group rounded-[1.5rem_1.5rem_1.5rem_0.25rem] border border-red-300 bg-white px-6 md:mr-[20%] even:bg-red-200 md:even:mr-0 md:even:ml-[20%]">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-950 [&::-webkit-details-marker]:hidden">
              <span>Do you bake without gluten?</span>
              <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
            </summary>
            <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7]">
              <p>
                We do not. Flour is in the air and on our benches, so we cannot offer a loaf
                suitable for someone who needs to avoid gluten.
              </p>
            </div>
          </details>
          <details className="group rounded-[1.5rem_1.5rem_1.5rem_0.25rem] border border-red-300 bg-white px-6 md:mr-[20%] even:bg-red-200 md:even:mr-0 md:even:ml-[20%]">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-950 [&::-webkit-details-marker]:hidden">
              <span>What happens if I miss collection?</span>
              <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
            </summary>
            <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7]">
              <p>
                Call before we close and we can hold your loaf until noon the next day. Uncollected
                bread then goes to our neighbourhood food table.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  )
}
