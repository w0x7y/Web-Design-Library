// Fonts: Archivo (https://fonts.google.com/specimen/Archivo)
export default function SignupFirefighterIntake() {
  return (
    <section className="bg-stone-950 px-6 py-16 text-stone-100 font-['Archivo',ui-sans-serif,system-ui,sans-serif]">
      <div className="mx-auto max-w-6xl">
        <header className="grid gap-6 border-b-2 border-stone-500 pb-10">
          <p className="text-xs font-semibold tracking-[0.12em] uppercase">Station Seven / Volunteer recruitment</p>
          <h2 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">BE THERE WHEN IT COUNTS.</h2>
          <p
            className="max-w-2xl text-base leading-7"
          >
            Join the people who show up for this town. Register for an introduction evening to meet the crew and see how training works.
          </p>
        </header>
        <div className="mt-10 grid gap-8 md:grid-cols-[1fr_2fr]">
          <aside className="grid content-start gap-6 bg-red-800 p-6">
            <p className="text-[6rem] font-bold leading-none">07</p>
            <p className="text-xs font-semibold tracking-widest">INTRODUCTION EVENING</p>
            <p className="grid gap-1 text-lg font-semibold leading-7">
              <span>Thursday 19 November</span>
              <span>18:30 at the station</span>
            </p>
            <p className="text-sm leading-6">Meet the crew. Try the equipment. Bring your questions.</p>
          </aside>
          <form action="#" method="post" className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label htmlFor="signup-firefighter-intake-name" className="grid min-w-0 gap-2 text-sm font-medium">
                <span>Full name</span>
                <input
                  id="signup-firefighter-intake-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="min-w-0 h-11 w-full border border-current/60 rounded-none bg-stone-900 px-3 text-sm font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
                />
              </label>
              <label htmlFor="signup-firefighter-intake-email" className="grid min-w-0 gap-2 text-sm font-medium">
                <span>Email address</span>
                <input
                  id="signup-firefighter-intake-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 h-11 w-full border border-current/60 rounded-none bg-stone-900 px-3 text-sm font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
                />
              </label>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label htmlFor="signup-firefighter-intake-phone" className="grid min-w-0 gap-2 text-sm font-medium">
                <span>Phone number</span>
                <input
                  id="signup-firefighter-intake-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  className="min-w-0 h-11 w-full border border-current/60 rounded-none bg-stone-900 px-3 text-sm font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
                />
              </label>
              <label htmlFor="signup-firefighter-intake-postcode" className="grid min-w-0 gap-2 text-sm font-medium">
                <span>Home postcode</span>
                <input
                  id="signup-firefighter-intake-postcode"
                  name="postcode"
                  type="text"
                  autoComplete="postal-code"
                  required
                  className="min-w-0 h-11 w-full border border-current/60 rounded-none bg-stone-900 px-3 text-sm font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
                />
              </label>
            </div>
            <label htmlFor="signup-firefighter-intake-interest" className="grid min-w-0 gap-2 text-sm font-medium">
              <span>I am interested in</span>
              <select
                id="signup-firefighter-intake-interest"
                name="interest"
                className="min-w-0 h-11 w-full border border-current/60 rounded-none bg-stone-900 px-3 text-sm font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
              >
                <option value="operational">Operational volunteering</option>
                <option value="support">Station support</option>
                <option value="unsure">I would like to find out more</option>
              </select>
            </label>
            <button
              type="submit"
              className="flex min-h-12 cursor-pointer items-center justify-center px-5 py-3 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200 hover:brightness-[1.12] border-2 border-stone-100 bg-stone-100 text-stone-950"
            >
              Register for the introduction
            </button>
            <p className="text-xs leading-5">A crew coordinator will confirm your visit by email.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
