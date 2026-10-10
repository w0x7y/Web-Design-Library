export default function CtaDetailCard() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 sm:py-24 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="text-sm font-medium text-neutral-500">Eyebrow for the scheduled invitation</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading that explains the reason to attend</h2>
          <p className="mt-6 max-w-md text-lg text-pretty text-neutral-600">Supporting copy that describes what the invitation includes and who it is for.</p>
          <p className="mt-6 text-sm text-neutral-500">Capacity: 12 places remaining</p>
        </div>
        <div className="rounded-lg border border-neutral-200 bg-white p-6 lg:col-span-5">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <time dateTime="2027-03-14" className="flex shrink-0 flex-col sm:w-16">
            <span className="text-4xl font-semibold tracking-tight">14</span>
            <span className="mt-1 text-sm font-medium text-neutral-500">MAR</span>
          </time>
          <div className="border-t border-neutral-200 pt-4 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-6">
            <h3 className="text-lg font-semibold">Title for the scheduled session</h3>
            <p className="mt-2 text-sm text-neutral-500">10:00 AM · Location or access details</p>
          </div>
        </div>
        <dl className="mt-6 border-t border-neutral-200">
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-neutral-200 py-4">
            <dt className="text-sm text-neutral-600">Price</dt>
            <dd className="text-sm font-medium">$29</dd>
          </div>
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-neutral-200 py-4">
            <dt className="text-sm text-neutral-600">Places left</dt>
            <dd className="text-sm font-medium">12</dd>
          </div>
        </dl>
        <a href="#" className="inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-medium transition-colors bg-neutral-900 text-white hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-6 w-full">Reserve a place</a>
      </div>
    </div>
  </section>
  )
}
