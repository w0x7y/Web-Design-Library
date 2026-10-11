export default function TestimonialCardSourceCitation() {
  return (
    <figure className="grid w-72 grid-cols-[32px_1fr] gap-x-4 gap-y-5 rounded-lg border border-neutral-200 bg-white p-5 text-neutral-900 sm:w-80">
      <span aria-hidden="true" className="font-mono text-xs text-neutral-500">01</span>
      <blockquote className="text-base font-medium">Quote that records a useful observation in the author words.</blockquote>
      <span aria-hidden="true" className="font-mono text-xs text-neutral-500">02</span>
      <figcaption className="border-t border-neutral-200 pt-4">
        <p className="text-sm font-semibold">Alex Rivera</p>
        <p className="mt-1 text-xs text-neutral-500">Interview · Oct 10, 2026</p>
        <cite className="mt-3 block text-xs not-italic"><a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 ">Original source</a></cite>
      </figcaption>
    </figure>
  )
}
