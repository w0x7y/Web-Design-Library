// Fonts: Familjen Grotesk (https://fonts.google.com/specimen/Familjen+Grotesk)
export default function FaqZineFairTables() {
  return (
    <section className="bg-pink-100 font-['Familjen_Grotesk',ui-sans-serif,system-ui,sans-serif] text-red-950 antialiased">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr] md:items-end">
          <header>
            <p className="text-xs font-semibold uppercase tracking-[0.12em]">Foldout Fair / around the tables</p>
            <h2 className="mt-4 text-[2.5rem] leading-[1.1] tracking-[-0.035em] text-balance sm:text-[3.5rem]">Small print. Big questions.</h2>
            <p className="mt-5 max-w-[38rem] text-[1rem] leading-[1.7]">
              Your first table, your next issue or an afternoon browsing. Here are the things people
              ask about our independent publishing fair.
            </p>
          </header>
          <aside className="rounded-[1rem] bg-red-950 p-6 text-pink-100">
            <h3 className="text-lg font-semibold">Set up at the hall</h3>
            <p className="mt-2 text-sm leading-[1.7]">
              Sunday, 9am to 11am. Doors open at 11am; leave your table ready before the first
              readers arrive.
            </p>
          </aside>
        </div>
        <div className="mt-10 grid gap-5">
          <details open className="group rounded-[1.5rem_1.5rem_1.5rem_0.25rem] border border-red-300 bg-white px-6 md:mr-[20%] even:bg-red-200 md:even:mr-0 md:even:ml-[20%]">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-950 [&::-webkit-details-marker]:hidden">
              <span>Can two makers share one table?</span>
              <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
            </summary>
            <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7]">
              <p>
                Yes. A half-table booking gives you ninety centimetres of space. Book two halves
                together and add both maker names so we can place you at the same table. Each
                booking includes one chair.
              </p>
            </div>
          </details>
          <details className="group rounded-[1.5rem_1.5rem_1.5rem_0.25rem] border border-red-300 bg-white px-6 md:mr-[20%] even:bg-red-200 md:even:mr-0 md:even:ml-[20%]">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-950 [&::-webkit-details-marker]:hidden">
              <span>Do I need a finished zine to apply?</span>
              <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
            </summary>
            <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7]">
              <p>
                Send a few sample spreads and a short note about what you are making. First issues
                and small runs are welcome. We ask you to bring printed copies to sell or swap on
                the day.
              </p>
            </div>
          </details>
          <details className="group rounded-[1.5rem_1.5rem_1.5rem_0.25rem] border border-red-300 bg-white px-6 md:mr-[20%] even:bg-red-200 md:even:mr-0 md:even:ml-[20%]">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-950 [&::-webkit-details-marker]:hidden">
              <span>Is the fair accessible without steps?</span>
              <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
            </summary>
            <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7]">
              <p>
                Yes. Use the level entrance on Mill Street. All tables and the accessible toilet are
                on the ground floor. The first hour is a quiet browsing hour, with no music or
                announcements.
              </p>
            </div>
          </details>
          <details className="group rounded-[1.5rem_1.5rem_1.5rem_0.25rem] border border-red-300 bg-white px-6 md:mr-[20%] even:bg-red-200 md:even:mr-0 md:even:ml-[20%]">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-950 [&::-webkit-details-marker]:hidden">
              <span>What if I need to cancel my table?</span>
              <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
            </summary>
            <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7]">
              <p>
                Email us by the Monday before the fair for a refund. After that date, we offer your
                space to the waiting list and refund you if another maker takes it.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  )
}
