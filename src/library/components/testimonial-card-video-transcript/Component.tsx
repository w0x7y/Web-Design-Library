export default function TestimonialCardVideoTranscript() {
  return (
    <figure className="w-72 rounded-lg border border-neutral-200 bg-white p-4 text-neutral-900 sm:w-80">
      <div role="img" aria-label="Video placeholder: short customer statement" className="flex h-24 items-center justify-center rounded-lg bg-neutral-100 text-neutral-400">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10"><path d="m9 6 9 6-9 6V6Z" /></svg>
      </div>
      <blockquote className="mt-4 text-sm font-medium">Short quote that names the interview benefit.</blockquote>
      <figcaption className="mt-4 flex items-center gap-3">
        <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">AR</span>
        <div>
          <p className="text-sm font-semibold">Alex Rivera</p>
          <p className="text-xs text-neutral-500">Role, organization</p>
        </div>
      </figcaption>
      <details className="group mt-4 border-t border-neutral-200 pt-3">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-xs font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">Transcript excerpt<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 transition-transform group-open:rotate-180"><path d="m6 9 6 6 6-6" /></svg></summary>
        <p className="mt-2 text-xs text-neutral-600">Brief context for the spoken statement.</p>
      </details>
    </figure>
  )
}
