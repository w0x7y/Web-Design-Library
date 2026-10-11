export default function TestimonialCardMetricLead() {
  return (
    <figure className="w-72 rounded-lg border border-neutral-200 bg-white p-6 text-neutral-900 sm:w-80">
      <p className="text-sm font-medium text-neutral-500">Company label</p>
      <p className="mt-3 text-5xl font-semibold tracking-tight tabular-nums">3.2×</p>
      <p className="mt-2 text-sm text-neutral-600">Outcome label</p>
      <blockquote className="mt-5 border-t border-neutral-200 pt-5 text-sm text-pretty text-neutral-600">
        Short quote that explains the result and names the part of the experience that made the biggest difference.
      </blockquote>
      <figcaption className="mt-4 flex flex-wrap items-baseline gap-x-2 text-sm"><span className="font-semibold">Alex Rivera</span><span className="text-neutral-500">Role</span></figcaption>
      <a href="#" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Read the case study<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="M5 12h14m-5-5 5 5-5 5" /></svg></a>
    </figure>
  )
}

