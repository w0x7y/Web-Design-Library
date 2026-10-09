export default function HeroExhibitionPoster() {
  return (
    <section className="bg-stone-100 text-stone-950">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 sm:py-14">
        <div className="flex flex-wrap justify-between gap-4 border-b border-stone-300 pb-5 font-mono text-xs uppercase tracking-wider">
          <p>The Common Gallery</p>
          <p>Exhibition 08 / 2026</p>
        </div>
        <h1 className="mt-10 font-serif text-[3.5rem] leading-[0.95] tracking-tight sm:text-8xl lg:text-[8rem]">
          Objects
          <br />
          <span className="italic text-orange-700">with a past.</span>
        </h1>
        <div className="mt-12 grid gap-10 border-t border-stone-300 pt-8 md:grid-cols-2">
          <p className="max-w-md text-xl leading-relaxed">
            Thirty makers explore what we keep, what we repair and the stories
            our everyday things carry.
          </p>
          <dl className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <dt className="font-mono text-xs uppercase text-stone-600">
                When
              </dt>
              <dd className="mt-3">
                24 October
                <br />
                through 14 February
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase text-stone-600">
                Where
              </dt>
              <dd className="mt-3">
                North Hall
                <br />
                18 Mill Street, Bristol
              </dd>
            </div>
          </dl>
        </div>
        <div className="mt-10 flex flex-wrap items-end justify-between gap-8">
          <a
            href="#"
            className="inline-flex items-center gap-8 border-b border-stone-950 pb-3 text-lg hover:text-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
          >
            Plan your visit{' '}
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-6"
            >
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </a>
          <div
            aria-hidden="true"
            className="flex size-28 items-center justify-center rounded-full border border-orange-700"
          >
            <div className="h-20 w-8 rotate-45 rounded-full bg-orange-700" />
          </div>
        </div>
      </div>
    </section>
  )
}
