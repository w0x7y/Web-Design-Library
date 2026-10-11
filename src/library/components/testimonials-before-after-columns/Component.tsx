export default function TestimonialsBeforeAfterColumns() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 ">
        <header className="max-w-2xl">
          <p className="text-sm font-medium text-neutral-500">Eyebrow for the section</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading for the change customers describe</h2>
          <p className='mt-4 text-lg text-pretty text-neutral-600'>Short introduction to the two sides of the experience.</p>
        </header>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <figure className="rounded-lg border border-neutral-200 bg-white p-6 sm:p-8">
            <p className="text-sm font-medium text-neutral-500">Before</p>
            <blockquote className="mt-4 text-xl text-pretty">Quote describing the previous difficulty and its effect.</blockquote>
            <p className="mt-6 border-t border-neutral-200 pt-4 text-sm text-neutral-600">Context for this stage of the experience</p>
            <figcaption className="mt-6 flex items-center gap-3">
              <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">AR</span>
              <div>
                <p className="text-sm font-semibold">Alex Rivera</p>
                <p className="text-xs text-neutral-500">Role, organization</p>
              </div>
            </figcaption>
          </figure>
          <figure className="rounded-lg border border-neutral-200 bg-white p-6 sm:p-8">
            <p className="text-sm font-medium text-neutral-500">After</p>
            <blockquote className="mt-4 text-xl text-pretty">Quote describing the new result and what changed.</blockquote>
            <p className="mt-6 border-t border-neutral-200 pt-4 text-sm text-neutral-600">Context for this stage of the experience</p>
            <figcaption className="mt-6 flex items-center gap-3">
              <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">JL</span>
              <div>
                <p className="text-sm font-semibold">Jordan Lee</p>
                <p className="text-xs text-neutral-500">Role, organization</p>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
