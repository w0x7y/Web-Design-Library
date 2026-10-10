// Fonts: Manrope (https://fonts.google.com/specimen/Manrope)
export default function SignupDrivingLessons() {
  return (
    <section className="bg-white px-6 py-16 text-slate-950 font-['Manrope',ui-sans-serif,system-ui,sans-serif]">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-24">
        <header className="grid content-start gap-6">
          <p className="text-xs font-semibold tracking-[0.12em] uppercase">Laneahead / Driving school</p>
          <h2 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">Your first mile starts here.</h2>
          <p className="text-sm leading-6">Patient instructors. Familiar streets. Book a first lesson and we will build a plan around you.</p>
          <dl className="mt-6 grid gap-4 border-t border-slate-200 pt-6 text-sm">
            <div className="flex justify-between gap-4">
              <dt>First lesson</dt>
              <dd className="font-semibold">90 minutes / £48</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Pickup area</dt>
              <dd className="font-semibold">East Bristol</dd>
            </div>
          </dl>
        </header>
        <form action="#" method="post" className="grid gap-5 border-t-4 border-teal-800 pt-6">
          <p className="text-lg font-semibold">01 / Tell us about yourself</p>
          <label htmlFor="signup-driving-lessons-name" className="grid min-w-0 gap-2 text-sm font-medium">
            <span>Full name</span>
            <input
              id="signup-driving-lessons-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="min-w-0 h-11 w-full border border-current/60 rounded-lg bg-transparent px-3 text-sm font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800"
            />
          </label>
          <label htmlFor="signup-driving-lessons-email" className="grid min-w-0 gap-2 text-sm font-medium">
            <span>Email address</span>
            <input
              id="signup-driving-lessons-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-w-0 h-11 w-full border border-current/60 rounded-lg bg-transparent px-3 text-sm font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800"
            />
          </label>
          <div className="grid gap-5 sm:grid-cols-2">
            <label htmlFor="signup-driving-lessons-postcode" className="grid min-w-0 gap-2 text-sm font-medium">
              <span>Pickup postcode</span>
              <input
                id="signup-driving-lessons-postcode"
                name="postcode"
                type="text"
                autoComplete="postal-code"
                required
                className="min-w-0 h-11 w-full border border-current/60 rounded-lg bg-transparent px-3 text-sm font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800"
              />
            </label>
            <label htmlFor="signup-driving-lessons-gearbox" className="grid min-w-0 gap-2 text-sm font-medium">
              <span>Gearbox</span>
              <select
                id="signup-driving-lessons-gearbox"
                name="gearbox"
                className="min-w-0 h-11 w-full border border-current/60 rounded-lg bg-transparent px-3 text-sm font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800"
              >
                <option value="auto">Automatic</option>
                <option value="manual">Manual</option>
              </select>
            </label>
          </div>
          <label htmlFor="signup-driving-lessons-permit" className="flex items-start gap-3 text-sm leading-6">
            <input
              id="signup-driving-lessons-permit"
              type="checkbox"
              name="permit"
              required
              className="mt-1 size-4 shrink-0 accent-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800"
            />
            <span>I have a valid provisional driving licence.</span>
          </label>
          <button
            type="submit"
            className="flex min-h-12 cursor-pointer items-center justify-center px-5 py-3 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800 hover:brightness-[1.12] rounded-lg bg-teal-800 text-white"
          >
            Request my first lesson
          </button>
          <p className="text-xs leading-5">We will email available times within one working day.</p>
        </form>
      </div>
    </section>
  )
}
