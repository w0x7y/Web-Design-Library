export default function ProfileCardBiographyIdentityFooter() {
  return (
    <article className="w-72 rounded-lg border border-neutral-200 bg-white p-4 text-neutral-900 sm:w-80">
      <p className="text-sm font-medium text-neutral-500">
        Profile introduction
      </p>
      <p className="mt-3 text-base text-neutral-600">
        A short biography describing the person’s focus, working approach and
        the kind of contribution they make.
      </p>
      <footer className="mt-5 flex items-center gap-4 border-t border-neutral-200 pt-4">
        <div
          role="img"
          aria-label="Image placeholder: person portrait"
          className="flex aspect-[4/3] items-center justify-center rounded-lg bg-neutral-100 text-neutral-400 size-16 shrink-0 aspect-square"
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
        <div className="min-w-0">
          <h2 className="text-base font-semibold">Alex Rivera</h2>
          <p className="mt-1 text-sm text-neutral-500">Role or specialty</p>
          <a
            href="#"
            className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-2 inline-block text-sm"
          >
            View profile
          </a>
        </div>
      </footer>
    </article>
  )
}
