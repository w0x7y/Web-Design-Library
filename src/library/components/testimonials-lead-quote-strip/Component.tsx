export default function TestimonialsLeadQuoteStrip() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 ">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-neutral-500">Eyebrow for the section</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading for the common customer benefit</h2>
        </header>
        <figure className="mx-auto mt-10 max-w-3xl text-center">
          <blockquote className="text-2xl font-medium text-balance sm:text-3xl">Lead quote that summarizes the benefit shared by several customer experiences.</blockquote>
          <figcaption className="mt-6 justify-center flex items-center gap-3">
            <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">AR</span>
            <div>
              <p className="text-sm font-semibold">Alex Rivera</p>
              <p className="text-xs text-neutral-500">Role, organization</p>
            </div>
          </figcaption>
        </figure>
        <div className="mt-12 grid gap-6 border-t border-neutral-200 pt-8 md:grid-cols-3">
          <figure>
            <blockquote className="text-sm text-neutral-600">Supporting quote with a different detail about that benefit.</blockquote>
            <figcaption className="mt-4 text-sm font-semibold">Jordan Lee</figcaption>
          </figure>
          <figure>
            <blockquote className="text-sm text-neutral-600">Supporting quote with a different detail about that benefit.</blockquote>
            <figcaption className="mt-4 text-sm font-semibold">Sam Kim</figcaption>
          </figure>
          <figure>
            <blockquote className="text-sm text-neutral-600">Supporting quote with a different detail about that benefit.</blockquote>
            <figcaption className="mt-4 text-sm font-semibold">Morgan Taylor</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
