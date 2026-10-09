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
            <h2 className="text-4xl font-black leading-none tracking-tight sm:text-5xl">
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
          <form className="grid content-center gap-5 p-6 sm:p-8" action="#" method="post">
            <p className="text-base font-semibold">
              Be first in line when tickets open.
            </p>
            <label
              className="grid gap-2 text-sm font-medium"
              htmlFor="signup-event-waitlist-email"
            >
              Your email
              <input
                className="min-w-0 w-full rounded-none border border-current/60 bg-transparent px-3 py-2.5 font-normal placeholder:text-current/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                id="signup-event-waitlist-email"
                aria-describedby="signup-event-waitlist-hint"
                name="email"
                type="email"
                autoComplete="email"
                placeholder=""
                required
              />
            </label>
            <button
              className="flex items-center justify-center gap-2 border-2 border-neutral-950 bg-neutral-950 px-4 py-3 text-sm font-bold text-yellow-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950"
              type="submit"
            >
              Join the waitlist
            <svg aria-hidden="true" className="size-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12l8-8M4 4h8v8" />
            </svg>
            </button>
            <p id="signup-event-waitlist-hint" className="text-xs">One announcement. No newsletters.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
