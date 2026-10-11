export default function TestimonialCardBeforeAfter() {
  return (
    <figure className="w-72 rounded-lg border border-neutral-200 bg-white p-5 text-neutral-900 sm:w-80">
      <div>
        <p className="text-xs font-medium text-neutral-500">Before</p>
        <blockquote className="mt-2 text-sm text-neutral-600">Quote naming the earlier difficulty.</blockquote>
      </div>
      <div className="mt-5 border-t border-neutral-200 pt-5">
        <p className="text-xs font-medium text-neutral-500">After</p>
        <blockquote className="mt-2 text-base font-medium">Quote naming the change and its benefit.</blockquote>
      </div>
      <figcaption className="mt-5 flex items-center gap-3">
        <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">AR</span>
        <div>
          <p className="text-sm font-semibold">Alex Rivera</p>
          <p className="text-xs text-neutral-500">Role, organization</p>
        </div>
      </figcaption>
    </figure>
  )
}
