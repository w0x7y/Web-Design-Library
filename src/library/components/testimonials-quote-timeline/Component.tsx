export default function TestimonialsQuoteTimeline() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 ">
        <header className="max-w-2xl">
          <p className="text-sm font-medium text-neutral-500">Eyebrow for the section</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading for customer milestones</h2>
        </header>
        <ol role="list" className="mt-12 grid gap-8">
          <li className="grid gap-4 md:grid-cols-[144px_1fr]">
            <time dateTime="2026-03-01" className="text-sm font-medium text-neutral-500">Mar 2026</time>
            <figure className="border-l border-neutral-200 pl-6">
              <blockquote className="text-lg text-pretty">Quote about the first useful outcome.</blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">AR</span>
                <div>
                  <p className="text-sm font-semibold">Alex Rivera</p>
                  <p className="text-xs text-neutral-500">Role, organization</p>
                </div>
              </figcaption>
            </figure>
          </li>
          <li className="grid gap-4 md:grid-cols-[144px_1fr]">
            <time dateTime="2026-06-01" className="text-sm font-medium text-neutral-500">Jun 2026</time>
            <figure className="border-l border-neutral-200 pl-6">
              <blockquote className="text-lg text-pretty">Quote about progress after continued use.</blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">JL</span>
                <div>
                  <p className="text-sm font-semibold">Jordan Lee</p>
                  <p className="text-xs text-neutral-500">Role, organization</p>
                </div>
              </figcaption>
            </figure>
          </li>
          <li className="grid gap-4 md:grid-cols-[144px_1fr]">
            <time dateTime="2026-10-01" className="text-sm font-medium text-neutral-500">Oct 2026</time>
            <figure className="border-l border-neutral-200 pl-6">
              <blockquote className="text-lg text-pretty">Quote about the lasting value of the experience.</blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">SK</span>
                <div>
                  <p className="text-sm font-semibold">Sam Kim</p>
                  <p className="text-xs text-neutral-500">Role, organization</p>
                </div>
              </figcaption>
            </figure>
          </li>
        </ol>
      </div>
    </section>
  )
}
