export default function TestimonialCardAttributionRail() {
  return (
    <figure className="grid w-72 grid-cols-[72px_1fr] gap-5 rounded-lg border border-neutral-200 bg-white p-5 text-neutral-900 sm:w-96">
      <figcaption className="border-r border-neutral-200 pr-4">
        <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">AR</span>
        <p className="mt-3 text-xs font-semibold">Alex Rivera</p>
        <p className="mt-1 text-xs text-neutral-500">Author role</p>
      </figcaption>
      <div>
        <blockquote className="text-base font-medium text-pretty">Quote describing one useful result and why it matters to the author.</blockquote>
        <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-5 inline-block text-xs">Read interview</a>
      </div>
    </figure>
  )
}
