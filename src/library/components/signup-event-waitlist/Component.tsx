export default function SignupEventWaitlist() {
  return (
    <section className="bg-yellow-100 px-6 py-12 text-neutral-950 sm:px-12">
      <div className="mx-auto max-w-3xl border-2 border-neutral-950 bg-yellow-50">
        <header className="flex flex-wrap justify-between gap-3 border-b-2 border-neutral-950 p-6 font-mono text-xs">
          <p className="font-bold">OFFSCRIPT / 2027</p>
          <p className="font-bold">EARLY ACCESS LIST</p>
        </header>
        <div className="grid md:grid-cols-[1.3fr_1fr]">
          <div className="border-b-2 border-dashed border-neutral-950 p-6 md:border-r-2 md:border-b-0 sm:p-8">
            <h2 className="text-5xl font-black leading-none tracking-tight">
              Ideas worth gathering for.
            </h2>
            <p className="mt-6 text-sm leading-6">
              Two days. One room. A hundred different ways to see what comes
              next.
            </p>
            <p className="mt-8 font-mono text-xs font-bold">
              LISBON · MAY 14—15
            </p>
          </div>
          <form className="grid content-center gap-5 p-6 sm:p-8" action="#">
            <p className="text-base font-semibold">
              Be first in line when tickets open.
            </p>
            <label
              className="grid gap-2 text-sm font-medium"
              htmlFor="signup-event-waitlist-email"
            >
              Your email
              <input
                className="min-w-0 w-full rounded-lg border border-current/25 bg-transparent px-3 py-2.5 font-normal placeholder:text-current/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                id="signup-event-waitlist-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder=""
                required
              />
            </label>
            <button
              className="border-2 border-neutral-950 bg-neutral-950 px-4 py-3 text-sm font-bold text-yellow-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950"
              type="submit"
            >
              Join the waitlist ↗
            </button>
            <p className="text-xs">One announcement. No mailing list.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
