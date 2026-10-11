export default function ProfileCardVerticalStatRail() {
  return (
    <article className="grid w-72 grid-cols-[4rem_minmax(0,1fr)] gap-4 rounded-lg border border-neutral-200 bg-white p-4 text-neutral-900 sm:w-80">
      <dl className="space-y-5 border-r border-neutral-200 pr-3 text-center">
        <div>
          <dd className="text-lg font-semibold">24</dd>
          <dt className="mt-1 text-xs text-neutral-500">Projects</dt>
        </div>
        <div>
          <dd className="text-lg font-semibold">8</dd>
          <dt className="mt-1 text-xs text-neutral-500">Years</dt>
        </div>
        <div>
          <dd className="text-lg font-semibold">12</dd>
          <dt className="mt-1 text-xs text-neutral-500">Teams</dt>
        </div>
      </dl>
      <div className="min-w-0">
        <span
          aria-hidden="true"
          className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600"
        >
          AR
        </span>
        <h2 className="mt-3 text-base font-semibold">Alex Rivera</h2>
        <p className="mt-1 text-sm text-neutral-500">Role or specialty</p>
        <p className="text-sm text-neutral-600 mt-3">
          Short biography naming a focus.
        </p>
        <a
          href="#"
          aria-label="Contact Alex Rivera"
          className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-4 w-full px-3"
        >
          Contact
        </a>
      </div>
    </article>
  )
}
