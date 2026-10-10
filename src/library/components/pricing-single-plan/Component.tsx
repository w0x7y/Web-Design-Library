export default function PricingSinglePlan() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 grid items-center gap-12 lg:grid-cols-[7fr_5fr]">
        <div>
          <p className="text-sm font-medium text-neutral-500">One plan, complete access</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading for a single complete offer</h2>
          <p className="mt-4 text-lg text-pretty text-neutral-600">
            A short introduction that explains who the annual plan is for and what the membership includes.
          </p>
          <ul role="list" className="mt-8 grid gap-x-6 gap-y-3 space-y-0 sm:grid-cols-2 space-y-3 text-sm text-neutral-600">
            <li className="flex items-start gap-3">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5 shrink-0"
              >
                <path d="m5 12 4 4L19 6" />
              </svg>
              <span>Primary capability for members</span>
            </li>
            <li className="flex items-start gap-3">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5 shrink-0"
              >
                <path d="m5 12 4 4L19 6" />
              </svg>
              <span>Included access or capacity</span>
            </li>
            <li className="flex items-start gap-3">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5 shrink-0"
              >
                <path d="m5 12 4 4L19 6" />
              </svg>
              <span>Collaboration benefit and scope</span>
            </li>
            <li className="flex items-start gap-3">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5 shrink-0"
              >
                <path d="m5 12 4 4L19 6" />
              </svg>
              <span>Support or guidance included</span>
            </li>
            <li className="flex items-start gap-3">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5 shrink-0"
              >
                <path d="m5 12 4 4L19 6" />
              </svg>
              <span>Account flexibility or control</span>
            </li>
            <li className="flex items-start gap-3">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5 shrink-0"
              >
                <path d="m5 12 4 4L19 6" />
              </svg>
              <span>Additional membership benefit</span>
            </li>
          </ul>
        </div>
        <article className="rounded-lg border border-neutral-200 bg-white p-6">
          <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">Annual access</span>
          <h3 className="mt-4 text-lg font-semibold">Plan label</h3>
          <p className="mt-6 flex flex-wrap items-baseline gap-2">
            <span className="text-5xl font-semibold tracking-tight">$228</span>
            <span className="text-sm text-neutral-500">/year</span>
          </p>
          <p className="mt-2 text-sm text-neutral-500">Equivalent to $19 /month</p>
          <a
            href="#"
            className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-8 w-full"
          >
            Primary action
          </a>
          <p className="mt-3 text-center text-sm text-neutral-500">A short note about renewal and cancellation terms.</p>
          <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-neutral-200 pt-6">
            <div className="flex -space-x-2">
              <span
                aria-hidden="true"
                className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600 border-2 border-white"
              >
                AR
              </span>
              <span
                aria-hidden="true"
                className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600 border-2 border-white"
              >
                JL
              </span>
              <span
                aria-hidden="true"
                className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600 border-2 border-white"
              >
                SK
              </span>
            </div>
            <p className="text-sm text-neutral-500">1,284 members</p>
          </div>
        </article>
      </div>
    </section>
  )
}
