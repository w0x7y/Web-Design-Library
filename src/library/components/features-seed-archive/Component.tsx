// Fonts: Manrope (https://fonts.google.com/specimen/Manrope)
export default function FeaturesSeedArchive() {
  return (
    <section className="bg-green-50 font-['Manrope',ui-sans-serif,system-ui,sans-serif] text-green-950">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <header>
          <p className="text-sm font-semibold text-green-800">Morrow Seed Library</p>
          <h2 className="mt-4 max-w-3xl text-[2.25rem] leading-[1.1] font-semibold tracking-[-0.025em] sm:text-[3rem]">
            Keep a variety in the ground.
          </h2>
          <p className="mt-5 max-w-2xl text-green-800">
            Locally adapted seeds, with the knowledge to grow them and the records to
            keep them true.
          </p>
        </header>
        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <figure className="rounded-lg border border-green-200 bg-white p-6">
            <div className="flex flex-col items-center rounded-sm bg-green-100 p-5">
              <svg aria-hidden="true" viewBox="0 0 240 240" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-56 w-56 max-w-full text-green-800">
                <path d="M120 219V77M120 164C66 167 47 140 41 115c42-3 74 16 79 49ZM120 137c51-3 68-28 76-60-42 0-69 20-76 60ZM120 108C79 104 65 86 60 63c36-1 55 16 60 45Z" />
                <path d="M120 79c-24-12-29-36-18-60 22 10 31 32 18 60ZM52 124l68 40m63-74-63 47M72 72l48 36" />
              </svg>
              <span className="mt-2 text-sm italic">Phaseolus vulgaris</span>
            </div>
            <figcaption className="mt-5 text-xl font-semibold">Painted Lady runner bean</figcaption>
            <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-4">
              <div>
                <dt className="text-xs text-green-800">Accession</dt>
                <dd className="mt-1 text-sm font-medium">ML / 0472</dd>
              </div>
              <div>
                <dt className="text-xs text-green-800">Saved in</dt>
                <dd className="mt-1 text-sm font-medium">North Devon</dd>
              </div>
              <div>
                <dt className="text-xs text-green-800">Harvest</dt>
                <dd className="mt-1 text-sm font-medium">September 2025</dd>
              </div>
            </dl>
          </figure>
          <div className="flex flex-col justify-center">
            <article>
              <p className="text-xs text-green-800">A record that travels with the seed</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">Know what you are planting.</h3>
              <p className="mt-4 max-w-md leading-relaxed text-green-800">
                Every packet includes its origin, isolation notes and germination
                test. No guesswork about last season.
              </p>
            </article>
            <article className="mt-8 border-t border-green-200 pt-8">
              <p className="text-xs text-green-800">Borrow, grow, return</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">Your harvest keeps it going.</h3>
              <p className="mt-4 max-w-md leading-relaxed text-green-800">
                Keep some for your kitchen. Save a handful for the library. Our
                field notes walk you through the first return.
              </p>
            </article>
            <a href="#" className="mt-8 w-fit text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-950">
              Browse the seed catalogue
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
