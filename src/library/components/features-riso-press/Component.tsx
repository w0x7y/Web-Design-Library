// Fonts: Syne (https://fonts.google.com/specimen/Syne)
export default function FeaturesRisoPress() {
  return (
    <section className="bg-neutral-950 text-red-50 font-['Syne',ui-sans-serif,system-ui,sans-serif]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <p className="text-sm font-semibold text-red-300">OFFREGISTER / Riso editions</p>
        <h2 className="mt-4 max-w-6xl text-[3rem] leading-[0.95] font-bold tracking-[-0.04em] sm:text-[5rem] lg:text-[7rem]">INK WITH<br />A LITTLE ATTITUDE.</h2>
        <div className="mt-12 grid gap-0 border border-red-400 lg:grid-cols-[1.3fr_1fr]">
          <article className="flex flex-col justify-between gap-12 bg-red-300 p-6 text-neutral-950 sm:p-8">
            <svg aria-hidden="true" viewBox="0 0 520 180" fill="none" stroke="currentColor" strokeWidth="2" className="h-44 w-full">
              <ellipse cx="230" cy="90" rx="115" ry="76" />
              <ellipse cx="290" cy="90" rx="115" ry="76" />
              <path d="M115 90h290M230 14v152M290 14v152M100 10v20m-10-10h20M420 150v20m-10-10h20" />
            </svg>
            <div>
              <h3 className="text-3xl font-bold tracking-tight">Two drums. A third colour.</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed">
                Soy-based inks overlap to make colours you cannot pick from a
                screen. We proof both passes before the edition runs.
              </p>
            </div>
          </article>
          <div className="grid gap-8 p-6 sm:p-8">
            <article>
              <h3 className="text-2xl font-semibold">Paper with a past</h3>
              <p className="mt-3 text-sm leading-relaxed text-red-100">
                Uncoated, recycled and agricultural-fibre stocks. We will help you
                choose a sheet that takes the ink well.
              </p>
            </article>
            <article className="border-t border-red-400 pt-8">
              <h3 className="text-2xl font-semibold">Small runs welcome</h3>
              <p className="mt-3 text-sm leading-relaxed text-red-100">
                Zines, posters and workshop handouts, from 25 copies. File checks
                and a physical proof come with the job.
              </p>
            </article>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap justify-between gap-4 text-sm">
          <a href="#" className="inline-flex w-fit items-center gap-3 py-2 text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-50">
            Get the print-ready guide
          </a>
          <p className="self-center text-red-100">A slight shift is part of the print.</p>
        </div>
      </div>
    </section>
  )
}
