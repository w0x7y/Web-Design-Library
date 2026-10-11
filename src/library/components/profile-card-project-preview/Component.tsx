export default function ProfileCardProjectPreview() {
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
      <figure className="mt-4">
        <div
          role="img"
          aria-label="Image placeholder: featured project preview"
          className="flex aspect-[4/3] items-center justify-center rounded-lg bg-neutral-100 text-neutral-400 aspect-video"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-10"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-5-5L5 21" />
          </svg>
        </div>
        <figcaption className="mt-3 flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-base font-semibold">Current project</h3>
            <p className="mt-1 text-xs text-neutral-500">
              Brief description of the featured work.
            </p>
          </div>
          <a
            href="#"
            aria-label="View Alex Rivera current project"
            className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-sm"
          >
            View
          </a>
        </figcaption>
      </figure>
    </article>
  )
}
