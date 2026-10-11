export default function TestimonialCardTwoVoices() {
  return (
    <article className="w-72 rounded-lg border border-neutral-200 bg-white p-5 text-neutral-900 sm:w-80">
      <h3 className="text-xs font-medium text-neutral-500">Two perspectives on one outcome</h3>
      <figure className="mt-4 border-t border-neutral-200 pt-4">
        <blockquote className="text-sm text-neutral-600">Short quote naming the shared benefit.</blockquote>
        <figcaption className="mt-3 flex items-center gap-2">
          <span aria-hidden="true" className="flex size-8 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-xs text-neutral-600">AR</span>
          <p className="text-xs font-semibold">Alex Rivera</p>
        </figcaption>
      </figure>
      <figure className="mt-4 border-t border-neutral-200 pt-4">
        <blockquote className="text-sm text-neutral-600">Short quote adding a different useful detail.</blockquote>
        <figcaption className="mt-3 flex items-center gap-2">
          <span aria-hidden="true" className="flex size-8 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-xs text-neutral-600">JL</span>
          <p className="text-xs font-semibold">Jordan Lee</p>
        </figcaption>
      </figure>
    </article>
  )
}
