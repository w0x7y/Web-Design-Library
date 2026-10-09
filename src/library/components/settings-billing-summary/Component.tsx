export default function SettingsBillingSummary() {
  return (
    <section className="bg-white px-6 py-10 text-zinc-950 sm:px-12">
      <div className="mx-auto max-w-3xl">
        <header className="flex flex-wrap items-start justify-between gap-5">
          <div className="grid gap-2">
            <h2 className="text-3xl font-semibold tracking-tight">
              Plan & billing
            </h2>
            <p className="text-sm leading-6 text-stone-600">
              Everything about your subscription.
            </p>
          </div>
          <span className="inline-flex rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-700">
            Renews November 10
          </span>
        </header>
        <div className="mt-7 grid gap-5 md:grid-cols-[1.3fr_1fr]">
          <article className="rounded-xl border border-zinc-200 p-6">
            <p className="text-xs font-medium tracking-widest text-zinc-600">
              CURRENT PLAN
            </p>
            <div className="mt-4 flex flex-wrap items-baseline justify-between gap-4">
              <h3 className="text-2xl font-semibold">Team</h3>
              <p className="text-lg font-semibold tabular-nums">$49 / month</p>
            </div>
            <p className="mt-6 text-sm text-zinc-600">12 of 15 seats in use</p>
            <meter
              className="mt-3 h-3 w-full accent-zinc-950"
              min="0"
              max="15"
              value="12"
              aria-label="Team seats used"
            >
              12 of 15 seats
            </meter>
            <a
              className="mt-6 inline-flex text-sm font-medium underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
              href="#"
            >
              Compare plans
            </a>
          </article>
          <article className="rounded-xl bg-zinc-100 p-6">
            <p className="text-xs font-medium tracking-widest text-zinc-600">
              PAYMENT METHOD
            </p>
            <p className="mt-5 text-lg font-medium">Visa ···· 4242</p>
            <p className="mt-2 text-xs text-zinc-600">Expires 08/2028</p>
            <button
              className="mt-6 cursor-pointer rounded-lg border border-zinc-500 bg-white px-3 py-2 text-xs font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950"
              type="button"
            >
              Update payment method
            </button>
          </article>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-5 border-t border-zinc-200 pt-6">
          <div className="grid gap-1">
            <p className="text-sm font-medium">Next invoice</p>
            <p className="text-xs text-zinc-600">
              November 10 · Estimated $49.00
            </p>
          </div>
          <a
            className="text-sm font-medium underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
            href="#"
          >
            View all invoices
          </a>
        </div>
      </div>
    </section>
  )
}
