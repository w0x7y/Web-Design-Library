export default function SignupCourseRegistration() {
  return (
    <section className="bg-orange-50 px-6 py-12 text-orange-950 sm:px-12">
      <div className="mx-auto max-w-3xl">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-orange-200 pb-6">
          <h2 className="text-2xl font-bold tracking-tight">Field School</h2>
          <span className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-medium">
            Cohort 06 · Begins November 2
          </span>
        </header>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="grid content-start gap-5">
            <h2 className="text-4xl font-bold leading-tight">
              Learn by making.
            </h2>
            <p className="text-sm leading-7 text-orange-900">
              A four-week introduction to drawing the world around you. No
              experience needed.
            </p>
            <ul
              className="grid gap-3 border-t border-orange-200 pt-5 text-xs font-medium"
              role="list"
            >
              <li>01 / Line and shape</li>
              <li>02 / Light and texture</li>
              <li>03 / A sketchbook habit</li>
              <li>04 / Your first field study</li>
            </ul>
          </div>
          <form
            className="grid gap-5 rounded-2xl border-2 border-orange-200 bg-white p-6"
            action="#"
          >
            <label
              className="grid gap-2 text-sm font-medium"
              htmlFor="signup-course-registration-name"
            >
              Your name
              <input
                className="min-w-0 w-full rounded-lg border border-current/25 bg-transparent px-3 py-2.5 font-normal placeholder:text-current/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                id="signup-course-registration-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder=""
                required
              />
            </label>
            <label
              className="grid gap-2 text-sm font-medium"
              htmlFor="signup-course-registration-email"
            >
              Email address
              <input
                className="min-w-0 w-full rounded-lg border border-current/25 bg-transparent px-3 py-2.5 font-normal placeholder:text-current/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                id="signup-course-registration-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder=""
                required
              />
            </label>
            <label
              className="grid gap-2 text-sm font-medium"
              htmlFor="signup-course-registration-experience"
            >
              Drawing experience
              <select
                className="w-full rounded-lg border border-orange-200 bg-white px-3 py-2.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                name="experience"
                id="signup-course-registration-experience"
              >
                <option value="beginner">I’m starting from scratch</option>
                <option value="some">I draw occasionally</option>
                <option value="regular">I draw often</option>
              </select>
            </label>
            <button
              className="rounded-xl bg-orange-800 px-4 py-3 text-sm font-bold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950"
              type="submit"
            >
              Reserve my place
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
