export default function FeaturesExpandableCardGrid() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <header>
          <p className="text-sm font-medium text-neutral-500">Eyebrow</p>
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl mt-3">
            Heading for the key benefits
          </h2>
          <p className="text-lg text-pretty text-neutral-600 mt-4 max-w-2xl">
            A short introduction that names the audience and the benefit.
          </p>
        </header>
        <div className="mt-10 grid items-start gap-6 md:grid-cols-3">
          <details open className="rounded-lg border border-neutral-200 p-6">
            <summary className="cursor-pointer text-lg font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
              Main capability
            </summary>
            <div className="mt-5">
              <p className="text-sm text-neutral-600">
                Short explanation of the capability and the problem it resolves.
              </p>
              <ul role="list" className="space-y-3 mt-4">
                <li className="flex items-start gap-3 text-sm text-neutral-600">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-neutral-900"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-4"
                    >
                      <path d="m5 12 4 4L19 6" />
                    </svg>
                  </span>
                  <span>Included detail</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-neutral-600">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-neutral-900"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-4"
                    >
                      <path d="m5 12 4 4L19 6" />
                    </svg>
                  </span>
                  <span>Supporting capability</span>
                </li>
              </ul>
              <a
                href="#"
                aria-label="Explore main capability"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-5 inline-block text-sm"
              >
                Explore capability
              </a>
            </div>
          </details>
          <details className="rounded-lg border border-neutral-200 p-6">
            <summary className="cursor-pointer text-lg font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
              Supporting workflow
            </summary>
            <div className="mt-5">
              <p className="text-sm text-neutral-600">
                Short explanation of the capability and the problem it resolves.
              </p>
              <ul role="list" className="space-y-3 mt-4">
                <li className="flex items-start gap-3 text-sm text-neutral-600">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-neutral-900"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-4"
                    >
                      <path d="m5 12 4 4L19 6" />
                    </svg>
                  </span>
                  <span>Included detail</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-neutral-600">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-neutral-900"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-4"
                    >
                      <path d="m5 12 4 4L19 6" />
                    </svg>
                  </span>
                  <span>Supporting capability</span>
                </li>
              </ul>
              <a
                href="#"
                aria-label="Explore supporting workflow"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-5 inline-block text-sm"
              >
                Explore capability
              </a>
            </div>
          </details>
          <details className="rounded-lg border border-neutral-200 p-6">
            <summary className="cursor-pointer text-lg font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
              Useful detail
            </summary>
            <div className="mt-5">
              <p className="text-sm text-neutral-600">
                Short explanation of the capability and the problem it resolves.
              </p>
              <ul role="list" className="space-y-3 mt-4">
                <li className="flex items-start gap-3 text-sm text-neutral-600">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-neutral-900"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-4"
                    >
                      <path d="m5 12 4 4L19 6" />
                    </svg>
                  </span>
                  <span>Included detail</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-neutral-600">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-neutral-900"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-4"
                    >
                      <path d="m5 12 4 4L19 6" />
                    </svg>
                  </span>
                  <span>Supporting capability</span>
                </li>
              </ul>
              <a
                href="#"
                aria-label="Explore useful detail"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-5 inline-block text-sm"
              >
                Explore capability
              </a>
            </div>
          </details>
        </div>
      </div>
    </section>
  )
}
