export default function ProfileCardContactGrid() {
  return (
    <article className="w-72 rounded-lg border border-neutral-200 bg-white p-4 text-neutral-900 sm:w-80">
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600"
        >
          AR
        </span>
        <div className="min-w-0">
          <h3 className="text-base font-semibold">Alex Rivera</h3>
          <p className="text-sm text-neutral-500">Role or specialty</p>
        </div>
      </div>
      <p className="text-sm text-neutral-600 mt-3">
        Short biography naming a focus and a useful way to help.
      </p>
      <nav
        aria-label="Alex Rivera contact options"
        className="mt-4 grid grid-cols-2 gap-2 text-sm"
      >
        <a
          href="#"
          aria-label="Email Alex Rivera"
          className="rounded-md border border-neutral-300 p-3 font-medium hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
        >
          Email
        </a>
        <a
          href="#"
          aria-label="Website Alex Rivera"
          className="rounded-md border border-neutral-300 p-3 font-medium hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
        >
          Website
        </a>
        <a
          href="#"
          aria-label="Profile Alex Rivera"
          className="rounded-md border border-neutral-300 p-3 font-medium hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
        >
          Profile
        </a>
        <a
          href="#"
          aria-label="Calendar Alex Rivera"
          className="rounded-md border border-neutral-300 p-3 font-medium hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
        >
          Calendar
        </a>
      </nav>
    </article>
  )
}
