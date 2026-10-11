export default function HeroFormSidebar() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 grid items-center gap-12 lg:grid-cols-[3fr_2fr]">
        <div>
          <p className="text-sm font-medium text-neutral-500">Eyebrow</p>
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl mt-4">
            Headline that explains the invitation
          </h1>
          <p className="text-lg text-pretty text-neutral-600 mt-6">
            A short introduction that names the audience and the benefit.
          </p>
          <ul role="list" className="space-y-3 mt-8">
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
              <span>Who the invitation is intended for</span>
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
              <span>What the first conversation covers</span>
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
              <span>When to expect a response</span>
            </li>
          </ul>
        </div>
        <form className="rounded-lg border border-neutral-200 bg-white p-6">
          <h3 className="text-lg font-semibold">Request an introduction</h3>
          <div className="mt-5 space-y-4">
            <div>
              <label
                htmlFor="hero-form-sidebar-name"
                className="mb-1 block text-sm font-medium"
              >
                Name
              </label>
              <input
                id="hero-form-sidebar-name"
                name="name"
                autoComplete="name"
                required
                aria-describedby="hero-form-sidebar-hint"
                className="h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              />
            </div>
            <div>
              <label
                htmlFor="hero-form-sidebar-email"
                className="mb-1 block text-sm font-medium"
              >
                Work email
              </label>
              <input
                id="hero-form-sidebar-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                aria-describedby="hero-form-sidebar-hint"
                className="h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              />
            </div>
          </div>
          <p
            id="hero-form-sidebar-hint"
            className="text-sm text-neutral-600 mt-4"
          >
            A short note about the response and use of your details.
          </p>
          <button
            type="submit"
            className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-5 w-full"
          >
            Request access
          </button>
        </form>
      </div>
    </section>
  )
}
