// Fonts: Bricolage Grotesque (https://fonts.google.com/specimen/Bricolage+Grotesque)
export default function CtaBreadClub() {
  return (
    <section className="bg-rose-100 text-rose-950 font-['Bricolage_Grotesque',ui-sans-serif,system-ui,sans-serif] antialiased">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr] md:items-center sm:px-8 sm:py-20">
        <div>
          <p className="text-sm font-bold">Crumb Union / The weekly loaf</p>
          <h2 className="mt-5 max-w-xl text-[3rem] leading-[1.02] font-bold tracking-tight sm:text-[4rem]">
            Good mornings start the night before.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-7">
            Our dough rests for 24 hours. Your Saturday loaf waits just around
            the corner. Join the bread club and make a small ritual of it.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-flex min-h-12 w-fit items-center justify-center gap-3 rounded-full bg-rose-950 px-6 py-3 text-sm font-semibold text-white hover:bg-rose-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-950"
            >
              Put my name on a loaf
            </a>
          </div>
        </div>
        <div className="rounded-t-[6rem] rounded-b-3xl border-2 border-rose-950 bg-white px-6 pt-12 pb-6 sm:px-10">
          <div aria-hidden="true" className="flex justify-center gap-5">
            <span className="h-12 w-3 rotate-[30deg] rounded-full bg-rose-200"></span>
            <span className="h-12 w-3 rotate-[30deg] rounded-full bg-rose-200"></span>
            <span className="h-12 w-3 rotate-[30deg] rounded-full bg-rose-200"></span>
          </div>
          <h3 className="mt-8 text-center text-2xl font-bold">
            One lovely loaf. Every week.
          </h3>
          <dl className="mt-5 flex flex-col gap-3 border-t border-rose-200 pt-5 text-sm">
            <div className="flex justify-between gap-4">
              <dt>Your loaf</dt>
              <dd>Country sourdough</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Pick-up</dt>
              <dd>Saturday, 08:00–12:00</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Weekly price</dt>
              <dd>£5.50</dd>
            </div>
          </dl>
          <p className="mt-5 text-center text-xs text-rose-800">
            Pause any week. We bake only what we need.
          </p>
        </div>
      </div>
    </section>
  )
}
