// Fonts: Hanken Grotesk (https://fonts.google.com/specimen/Hanken+Grotesk)
export default function HeroSplitImage() {
  return (
    <section className="bg-white font-['Hanken_Grotesk',ui-sans-serif,system-ui,sans-serif] text-zinc-950 antialiased">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 pt-14 pb-16 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-24">
        <div>
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-full border border-zinc-200 py-1 pr-3 pl-1 text-sm text-zinc-600 transition-colors hover:border-zinc-300 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
          >
            <span className="rounded-full bg-zinc-950 px-2 py-0.5 text-xs font-medium text-white">New</span>
            Neighborhoods for hybrid teams
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-3.5 transition-transform group-hover:translate-x-0.5"
            >
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>

          <h1 className="mt-8 text-[2.75rem] leading-[1.05] font-medium tracking-[-0.03em] text-balance sm:text-6xl lg:text-7xl">
            The office, on the days that matter.
          </h1>

          <p className="mt-6 max-w-lg text-lg text-pretty text-zinc-600">
            Fieldnote plans desks, rooms and quiet corners around the days your team actually comes in, so nobody
            commutes to an empty floor.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#"
              className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-950 px-6 text-[0.9375rem] font-medium text-white transition-colors hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            >
              Start for free
            </a>
            <a
              href="#"
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-full border border-zinc-200 px-5 text-[0.9375rem] font-medium transition-colors hover:border-zinc-300 hover:bg-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            >
              See how it works
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4 text-zinc-400 transition group-hover:translate-x-0.5 group-hover:text-zinc-950"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </div>
        </div>

        <figure>
          <img
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1600&q=80"
            alt="Sunlit office with a long window desk, white stools, a tall palm and an open laptop"
            width={1600}
            height={1067}
            className="aspect-[4/3] w-full rounded-2xl object-cover lg:aspect-[8/9]"
          />
          <figcaption className="mt-4 flex items-center justify-between gap-4 text-sm text-zinc-500">
            <span>Lisbon studio, Thursday</span>
            <span className="text-zinc-950 tabular-nums">14 of 18 desks booked</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
