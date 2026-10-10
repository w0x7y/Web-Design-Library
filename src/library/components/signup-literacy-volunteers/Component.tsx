export default function SignupLiteracyVolunteers() {
  return (
    <section className="bg-stone-50 px-6 py-16 text-stone-900">
      <div className="mx-auto max-w-6xl">
        <header className="grid gap-6 border-b border-stone-300 pb-10">
          <p className="text-xs font-semibold tracking-[0.12em] uppercase">Openline / Adult literacy</p>
          <h2 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">Help someone read their next chapter.</h2>
          <p
            className="max-w-2xl text-lg leading-7"
          >
            Volunteer for one hour a week. You will work with one adult learner, with training and a coordinator beside you.
          </p>
        </header>
        <form action="#" method="post" className="mt-10 grid gap-6">
          <div className="grid gap-5 md:grid-cols-3">
            <label htmlFor="signup-literacy-volunteers-name" className="grid min-w-0 gap-2 text-sm font-medium">
              <span>Full name</span>
              <input
                id="signup-literacy-volunteers-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="min-w-0 h-11 w-full border border-current/60 rounded-lg bg-transparent px-3 text-sm font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
              />
            </label>
            <label htmlFor="signup-literacy-volunteers-email" className="grid min-w-0 gap-2 text-sm font-medium">
              <span>Email address</span>
              <input
                id="signup-literacy-volunteers-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 h-11 w-full border border-current/60 rounded-lg bg-transparent px-3 text-sm font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
              />
            </label>
            <label htmlFor="signup-literacy-volunteers-availability" className="grid min-w-0 gap-2 text-sm font-medium">
              <span>Best time for a weekly session</span>
              <select
                id="signup-literacy-volunteers-availability"
                name="availability"
                className="min-w-0 h-11 w-full border border-current/60 rounded-lg bg-transparent px-3 text-sm font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
              >
                <option value="evenings">Weekday evenings</option>
                <option value="daytime">Weekday daytime</option>
                <option value="weekends">Weekends</option>
              </select>
            </label>
          </div>
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <label htmlFor="signup-literacy-volunteers-contact" className="flex items-start gap-3 text-sm leading-6">
              <input
                id="signup-literacy-volunteers-contact"
                type="checkbox"
                name="contact"
                className="mt-1 size-4 shrink-0 accent-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
              />
              <span>Please contact me about volunteer training.</span>
            </label>
            <button
              type="submit"
              className="flex min-h-12 cursor-pointer items-center justify-center px-5 py-3 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 hover:brightness-[1.12] rounded-lg bg-blue-800 text-white"
            >
              Register my interest
            </button>
          </div>
          <p className="text-xs leading-5">No teaching experience needed. Our next volunteer introduction is 12 November.</p>
          <details className="border-t border-current/30 pt-4">
            <summary
              className="cursor-pointer text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
            >
              What happens after I sign up?
            </summary>
            <p
              className="mt-3 text-sm leading-6"
            >
              A coordinator will arrange a short conversation, explain safeguarding checks and help you choose an introduction session.
            </p>
          </details>
        </form>
      </div>
    </section>
  )
}
