export default function PricingUsageCredits() {
  return (
    <section className="bg-zinc-950 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-cyan-300">
            Relay / Simple usage pricing
          </p>
          <h2 className="mt-5 text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
            Pay for the messages.
            <br />
            Keep the rest simple.
          </h2>
          <div className="mt-8 border-y border-zinc-700 py-6">
            <p className="font-mono text-5xl tracking-tight text-cyan-300 sm:text-6xl">
              $0.40
            </p>
            <p className="mt-3 text-sm text-zinc-400">
              per 1,000 messages, after your free allowance
            </p>
          </div>
          <ul role="list" className="mt-6 space-y-3 text-sm text-zinc-300">
            <li className="flex gap-3">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5 shrink-0 text-cyan-300"
              >
                <path d="m5 12 4 4L19 6" />
              </svg>
              10,000 free messages each month
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
                className="size-5 shrink-0 text-cyan-300"
              >
                <path d="m5 12 4 4L19 6" />
              </svg>
              Unlimited projects and team members
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
                className="size-5 shrink-0 text-cyan-300"
              >
                <path d="m5 12 4 4L19 6" />
              </svg>
              Delivery logs and automatic retries
            </li>
          </ul>
          <a
            href="#"
            className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-lg bg-cyan-300 px-5 font-medium text-zinc-950 hover:bg-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Create a free account{' '}
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
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </a>
        </div>
        <div className="rounded-2xl border border-zinc-700 bg-zinc-900 p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-xl font-semibold">An example month</h3>
            <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400">
              Growing project
            </span>
          </div>
          <dl className="mt-8 space-y-5 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-zinc-400">Messages delivered</dt>
              <dd className="shrink-0 font-mono tabular-nums">100,000</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-zinc-400">Free allowance</dt>
              <dd className="shrink-0 font-mono tabular-nums">−10,000</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-zinc-400">Billable messages</dt>
              <dd className="shrink-0 font-mono tabular-nums">90,000</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-zinc-400">Platform fee</dt>
              <dd className="shrink-0 font-mono">$0</dd>
            </div>
            <div className="flex items-end justify-between gap-4 border-t border-zinc-700 pt-6">
              <dt className="font-medium">Monthly total</dt>
              <dd className="shrink-0 font-mono text-4xl text-cyan-300">$36</dd>
            </div>
          </dl>
          <p className="mt-6 border-t border-zinc-700 pt-5 text-xs leading-relaxed text-zinc-400">
            Set a spending limit in your dashboard. We send a notice at 80% and
            pause delivery at your limit.
          </p>
        </div>
      </div>
    </section>
  )
}
