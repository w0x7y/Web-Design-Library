export default function PricingMembershipPass() {
  return (
    <section className="bg-amber-50 text-emerald-950">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 py-20 md:grid-cols-[1.2fr_1fr] md:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
            The Common Reading Club
          </p>
          <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
            A year of good books
            <br />
            and better company.
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-emerald-900">
            A quieter corner of the internet for people who like to read, ask
            questions and make time for a good conversation.
          </p>
          <ul role="list" className="mt-8 space-y-4 text-sm">
            <li className="flex gap-3">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5 shrink-0 text-emerald-700"
              >
                <path d="m5 12 4 4L19 6" />
              </svg>
              A reading guide delivered every month
            </li>
            <li className="flex gap-3">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5 shrink-0 text-emerald-700"
              >
                <path d="m5 12 4 4L19 6" />
              </svg>
              Live conversations with authors
            </li>
            <li className="flex gap-3">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5 shrink-0 text-emerald-700"
              >
                <path d="m5 12 4 4L19 6" />
              </svg>
              A welcoming, moderated member forum
            </li>
            <li className="flex gap-3">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5 shrink-0 text-emerald-700"
              >
                <path d="m5 12 4 4L19 6" />
              </svg>
              The complete archive, from day one
            </li>
            <li className="flex gap-3">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5 shrink-0 text-emerald-700"
              >
                <path d="m5 12 4 4L19 6" />
              </svg>
              10% off at our independent bookshop
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
            One membership. Everything included.
          </span>
          <p className="mt-8 text-sm text-emerald-900">Annual membership</p>
          <p className="mt-2 text-6xl font-semibold tracking-tight">
            $96
            <span className="ml-2 text-base font-normal tracking-normal text-emerald-900">
              / year
            </span>
          </p>
          <p className="mt-3 text-sm text-emerald-900">
            That is $8 a month, billed once.
          </p>
          <div className="mt-8 border-t border-dashed border-stone-300 pt-6">
            <a
              href="#"
              className="flex min-h-12 items-center justify-center gap-3 rounded-lg bg-emerald-950 px-5 font-medium text-white hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            >
              Take a seat{' '}
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5"
              >
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </a>
            <p className="mt-4 text-center text-xs text-emerald-900">
              Cancel renewal anytime. Your year stays yours.
            </p>
          </div>
          <p className="mt-7 border-t border-stone-200 pt-5 text-center text-xs text-emerald-900">
            Join 1,240 readers in 32 countries.
          </p>
        </div>
      </div>
    </section>
  )
}
