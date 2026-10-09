export default function TestimonialsMemberWall() {
  return (
    <section className="bg-amber-50 text-amber-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[1fr_2fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-orange-800">
            Good people, good company
          </p>
          <h2 className="mt-5 text-4xl leading-tight font-bold tracking-tight">
            Find your
            <br />
            kind of curious.
          </h2>
          <p className="mt-5 text-sm leading-relaxed">
            Our members are trying new things, asking better questions and
            helping each other keep going.
          </p>
          <p className="mt-8 text-4xl font-bold tracking-tight">
            2,800
            <span className="mt-2 block text-sm font-normal tracking-normal">
              neighbors and counting
            </span>
          </p>
          <a
            href="#"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
          >
            Meet the community{' '}
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4"
            >
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </a>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <figure className="rounded-3xl bg-orange-100 p-6 sm:col-span-2 sm:p-8">
            <blockquote className="text-xl leading-relaxed font-medium">
              I came to one open studio with a half-finished zine and left with
              three new friends, a better cover and a reason to finish it.
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-orange-200 text-xs font-bold">
                RK
              </span>
              <div>
                <p className="text-sm font-bold">Rae Kim</p>
                <p className="text-xs text-orange-900">
                  Neighbor since February
                </p>
              </div>
            </figcaption>
          </figure>
          <figure className="rounded-3xl bg-lime-100 p-6">
            <blockquote className="text-lg leading-relaxed">
              Nobody asked if I was good at it. They just made room at the
              table.
            </blockquote>
            <figcaption className="mt-6 text-xs">
              <span className="block font-bold">Sam Ortiz</span>Weekend
              woodworker
            </figcaption>
          </figure>
          <figure className="rounded-3xl bg-sky-100 p-6">
            <blockquote className="text-lg leading-relaxed">
              The weekly sessions are the one appointment I never move.
            </blockquote>
            <figcaption className="mt-6 text-xs">
              <span className="block font-bold">Alex Chen</span>Designer, trying
              ceramics
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
