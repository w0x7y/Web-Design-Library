// Fonts: Space Grotesk (https://fonts.google.com/specimen/Space+Grotesk)
export default function CtaFirstAscent() {
  return (
    <section className="bg-zinc-950 text-yellow-300 font-['Space_Grotesk',ui-sans-serif,system-ui,sans-serif] antialiased">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-16">
        <p className="text-sm font-bold uppercase tracking-widest">
          Chalkline / Your first ascent
        </p>
        <div className="mt-7 grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <p
            aria-hidden="true"
            className="text-[8rem] leading-[.85] font-bold tracking-[-.08em] sm:text-[12rem] lg:text-[16rem]"
          >
            03
          </p>
          <div>
            <h2 className="text-[2.5rem] leading-[1.05] font-bold tracking-tight sm:text-[3.5rem]">
              Three visits. A new way up.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-zinc-200">
              Start with the low wall and a friendly coach. Find your feet, try
              a few routes and come back for the one you nearly finished.
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-6 bg-yellow-300 p-5 text-zinc-950 md:flex-row md:items-center md:justify-between sm:p-7">
          <div>
            <h3 className="text-xl font-bold">The first-three pass / £25</h3>
            <p className="mt-2 text-sm leading-6">
              Three entries in 30 days. Shoe hire and your first induction
              included.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex min-h-12 w-fit items-center justify-center gap-3 rounded-none bg-zinc-950 px-6 py-3 text-sm font-semibold text-yellow-300 hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950"
          >
            Get my first-three pass
          </a>
        </div>
      </div>
    </section>
  )
}
