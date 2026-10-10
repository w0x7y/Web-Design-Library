// Fonts: Familjen Grotesk (https://fonts.google.com/specimen/Familjen+Grotesk)
export default function FeaturesMendingClub() {
  return (
    <section className="bg-lime-50 text-emerald-950 font-['Familjen_Grotesk',ui-sans-serif,system-ui,sans-serif]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <p className="text-sm font-semibold text-emerald-800">Patchwork Club / Keep the good things</p>
        <h2 className="mt-4 max-w-3xl text-[2.75rem] leading-[1.05] font-bold tracking-tight sm:text-[4rem]">
          Your favourite jeans deserve another year.
        </h2>
        <p className="mt-5 max-w-xl leading-relaxed text-emerald-900">
          A shared table, a box of scraps and someone who knows that stitch. Come mend
          with us.
        </p>
        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1fr_0.8fr] lg:items-start">
          <article className="relative rounded-xl border-2 border-emerald-950 bg-lime-200 p-6 sm:p-8">
            <p className="border-b-2 border-dashed border-emerald-950 pb-4 text-sm font-semibold">
              Bring one thing to fix
            </p>
            <h3 className="mt-8 text-3xl font-bold tracking-tight">The Saturday repair table</h3>
            <p className="mt-4 text-base leading-relaxed text-emerald-900">
              Loose buttons, torn pockets, hems that never got done. A volunteer helps
              you work out the repair and try it yourself.
            </p>
            <p className="mt-8 text-xs font-semibold">Every Saturday / 10:00–13:00</p>
          </article>
          <article className="relative rounded-xl border-2 border-emerald-950 bg-lime-200 p-6 sm:p-8 bg-pink-200 lg:mt-16">
            <p className="border-b-2 border-dashed border-emerald-950 pb-4 text-sm font-semibold">
              Learn a stitch you will use
            </p>
            <h3 className="mt-8 text-3xl font-bold tracking-tight">Make the repair visible</h3>
            <p className="mt-4 text-base leading-relaxed text-emerald-900">
              Darning, patching and simple embroidery. Small-group workshops turn a
              worn spot into a part worth keeping.
            </p>
            <p className="mt-8 text-xs font-semibold">Six seats / Materials included</p>
          </article>
          <div className="p-2 lg:pt-6">
            <h3 className="text-xl font-semibold">The kit is already here.</h3>
            <ul role="list" className="mt-5 flex flex-col gap-3 text-sm">
              <li className="flex gap-3">
                <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 size-4 shrink-0">
                  <path d="m3 8 3 3 7-7" />
                </svg>
                Needles, thread and good scissors
              </li>
              <li className="flex gap-3">
                <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 size-4 shrink-0">
                  <path d="m3 8 3 3 7-7" />
                </svg>
                Donated denim and fabric scraps
              </li>
              <li className="flex gap-3">
                <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 size-4 shrink-0">
                  <path d="m3 8 3 3 7-7" />
                </svg>
                Machines you can learn on
              </li>
            </ul>
            <div className="mt-8">
              <a href="#" className="inline-flex w-fit items-center gap-3 py-2 text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-950">
                Find your next workshop
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
