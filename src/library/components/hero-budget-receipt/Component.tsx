export default function HeroBudgetReceipt() {
  return (
    <section className="bg-rose-50 text-rose-950">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="inline-flex rounded-full border border-rose-200 px-3 py-1 text-xs font-semibold">
            A little more breathing room
          </p>
          <h1 className="mt-6 text-5xl leading-tight font-bold tracking-tight sm:text-6xl">
            Make a plan.
            <br />
            Keep the fun.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-rose-800">
            Pocket helps you set aside the bills, save for something good and
            see what is yours to spend.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex min-h-12 items-center rounded-full bg-rose-700 px-6 font-semibold text-white hover:bg-rose-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            >
              Build my budget
            </a>
            <a
              href="#"
              className="inline-flex min-h-12 items-center gap-2 px-2 text-sm font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            >
              Explore Pocket{' '}
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
          </div>
          <p className="mt-6 text-sm text-rose-800">
            Your money. Your pace. Start with a free plan.
          </p>
        </div>
        <div className="rounded-[2rem] bg-rose-100 p-6 sm:p-12">
          <div className="mx-auto max-w-sm border-2 border-rose-200 bg-white p-6 sm:-rotate-3 sm:p-8">
            <div className="border-b border-dashed border-rose-200 pb-5 text-center">
              <p className="font-mono text-xs uppercase tracking-widest">
                Pocket / October
              </p>
              <p className="mt-2 text-2xl font-bold">The good-month plan</p>
            </div>
            <dl className="space-y-4 py-6 text-sm">
              <div className="flex justify-between gap-3">
                <dt>Money coming in</dt>
                <dd className="font-mono">$3,800</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt>Home &amp; bills</dt>
                <dd className="font-mono">$1,750</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt>Everyday spending</dt>
                <dd className="font-mono">$900</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt>Weekend adventures</dt>
                <dd className="font-mono">$350</dd>
              </div>
            </dl>
            <div className="border-t border-dashed border-rose-200 pt-5">
              <p className="text-xs text-rose-700">Going to future you</p>
              <p className="mt-1 text-4xl font-bold tracking-tight">
                $800
                <span className="ml-3 inline-block rounded-full bg-rose-100 px-2 py-1 align-middle text-xs font-semibold">
                  Saved
                </span>
              </p>
            </div>
            <p className="mt-6 text-center font-mono text-xs text-rose-700">
              A plan with room for real life.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
