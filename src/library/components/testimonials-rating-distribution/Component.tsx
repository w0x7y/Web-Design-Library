export default function TestimonialsRatingDistribution() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 ">
        <header className="max-w-2xl">
          <p className="text-sm font-medium text-neutral-500">Eyebrow for the section</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading for the review evidence</h2>
        </header>
        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_2fr]">
          <aside className="rounded-lg border border-neutral-200 bg-neutral-50 p-6">
            <p className="text-sm font-medium text-neutral-500">Overall rating</p>
            <p className="mt-2 text-4xl font-semibold tracking-tight">4.8<span className="ml-2 text-base font-normal text-neutral-600">/ 5</span></p>
            <p className="mt-2 text-sm text-neutral-600">Based on 1,284 reviews</p>
            <dl className="mt-6 grid gap-3">
              <div className="grid grid-cols-[16px_1fr_40px] items-center gap-3 text-xs">
                <dt>5<span className="sr-only"> stars</span></dt>
                <dd className="contents"><span aria-hidden="true" className="h-2 rounded-full bg-neutral-200"><span className="block h-full w-[78%] rounded-full bg-neutral-900"></span></span><span className="text-right tabular-nums text-neutral-600">78%</span></dd>
              </div>
              <div className="grid grid-cols-[16px_1fr_40px] items-center gap-3 text-xs">
                <dt>4<span className="sr-only"> stars</span></dt>
                <dd className="contents"><span aria-hidden="true" className="h-2 rounded-full bg-neutral-200"><span className="block h-full w-[16%] rounded-full bg-neutral-900"></span></span><span className="text-right tabular-nums text-neutral-600">16%</span></dd>
              </div>
              <div className="grid grid-cols-[16px_1fr_40px] items-center gap-3 text-xs">
                <dt>3<span className="sr-only"> stars</span></dt>
                <dd className="contents"><span aria-hidden="true" className="h-2 rounded-full bg-neutral-200"><span className="block h-full w-[4%] rounded-full bg-neutral-900"></span></span><span className="text-right tabular-nums text-neutral-600">4%</span></dd>
              </div>
              <div className="grid grid-cols-[16px_1fr_40px] items-center gap-3 text-xs">
                <dt>2<span className="sr-only"> stars</span></dt>
                <dd className="contents"><span aria-hidden="true" className="h-2 rounded-full bg-neutral-200"><span className="block h-full w-[1%] rounded-full bg-neutral-900"></span></span><span className="text-right tabular-nums text-neutral-600">1%</span></dd>
              </div>
              <div className="grid grid-cols-[16px_1fr_40px] items-center gap-3 text-xs">
                <dt>1<span className="sr-only"> stars</span></dt>
                <dd className="contents"><span aria-hidden="true" className="h-2 rounded-full bg-neutral-200"><span className="block h-full w-[1%] rounded-full bg-neutral-900"></span></span><span className="text-right tabular-nums text-neutral-600">1%</span></dd>
              </div>
            </dl>
          </aside>
          <div className="grid gap-6">
            <figure className="rounded-lg border border-neutral-200 bg-white p-6">
              <blockquote className="text-xl text-pretty">Quote that gives one specific reason for the positive rating.</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">AR</span>
                <div>
                  <p className="text-sm font-semibold">Alex Rivera</p>
                  <p className="text-xs text-neutral-500">Role, organization</p>
                </div>
              </figcaption>
            </figure>
            <figure className="rounded-lg border border-neutral-200 bg-white p-6">
              <blockquote className="text-xl text-pretty">Quote that gives one specific reason for the positive rating.</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">JL</span>
                <div>
                  <p className="text-sm font-semibold">Jordan Lee</p>
                  <p className="text-xs text-neutral-500">Role, organization</p>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
