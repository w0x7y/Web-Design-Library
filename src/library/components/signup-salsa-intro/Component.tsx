// Fonts: Syne (https://fonts.google.com/specimen/Syne)
export default function SignupSalsaIntro() {
  return (
    <section
      className="relative isolate overflow-hidden bg-linear-to-br from-stone-950 via-red-950 to-amber-950 px-6 py-16 text-amber-100 font-['Syne',ui-sans-serif,system-ui,sans-serif]"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 800"
        fill="none"
        stroke="currentColor"
        preserveAspectRatio="xMidYMid slice"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full text-amber-300/25"
      >
        <path d="M900-100 500 900M1000-100 600 900M1100-100 700 900M1200-100 800 900M1300-100 900 900" strokeWidth="42" />
        <path d="M0 450c250-300 420-300 700 0s450 300 700 0" strokeWidth="2" />
      </svg>
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.1fr_1fr] md:gap-16">
        <header className="grid content-center gap-6">
          <p className="text-xs font-semibold tracking-[0.12em] uppercase">Claveyard / Salsa school</p>
          <h2 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">Find your feet. Follow the rhythm.</h2>
          <p
            className="max-w-md text-base leading-7"
          >
            Start with the first step. Our beginner course builds one move at a time, with plenty of practice and a different partner each round.
          </p>
          <div aria-hidden="true" className="mt-4 flex flex-wrap gap-3">
            <span className="border border-amber-200/60 px-4 py-3 text-lg font-semibold">1</span>
            <span className="border border-amber-200/60 px-4 py-3 text-lg font-semibold">2</span>
            <span className="border border-amber-200/60 px-4 py-3 text-lg font-semibold">3</span>
            <span className="border border-amber-200/60 px-4 py-3 text-lg font-semibold">5</span>
            <span className="border border-amber-200/60 px-4 py-3 text-lg font-semibold">6</span>
            <span className="border border-amber-200/60 px-4 py-3 text-lg font-semibold">7</span>
          </div>
          <p className="text-sm font-semibold">Six weeks / Thursdays / £72</p>
        </header>
        <form action="#" method="post" className="grid gap-5 rounded-2xl border border-amber-200/40 bg-white/10 p-6 backdrop-blur-xl sm:p-8">
          <p className="text-xl font-semibold">Your first class is 5 November</p>
          <label htmlFor="signup-salsa-intro-name" className="grid min-w-0 gap-2 text-sm font-medium">
            <span>Full name</span>
            <input
              id="signup-salsa-intro-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="min-w-0 h-11 w-full border border-current/60 rounded-lg bg-stone-950/40 px-3 text-sm font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
            />
          </label>
          <label htmlFor="signup-salsa-intro-email" className="grid min-w-0 gap-2 text-sm font-medium">
            <span>Email address</span>
            <input
              id="signup-salsa-intro-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-w-0 h-11 w-full border border-current/60 rounded-lg bg-stone-950/40 px-3 text-sm font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
            />
          </label>
          <fieldset className="min-w-0">
            <legend className="mb-3 text-sm font-medium">How will you join?</legend>
            <div className="grid gap-3">
              <label
                className="flex cursor-pointer items-start gap-3 border border-current/40 p-4 has-[:checked]:border-current has-[:checked]:bg-current/5"
              >
                <input
                  type="radio"
                  name="partner"
                  value="solo"
                  defaultChecked
                  className="mt-1 size-4 shrink-0 accent-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
                />
                <span className="grid gap-1">
                  <span className="text-sm font-semibold">I am coming solo</span>
                  <span className="text-xs leading-5">We rotate partners throughout class.</span>
                </span>
              </label>
              <label
                className="flex cursor-pointer items-start gap-3 border border-current/40 p-4 has-[:checked]:border-current has-[:checked]:bg-current/5"
              >
                <input
                  type="radio"
                  name="partner"
                  value="pair"
                  className="mt-1 size-4 shrink-0 accent-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
                />
                <span className="grid gap-1">
                  <span className="text-sm font-semibold">I am coming with someone</span>
                  <span className="text-xs leading-5">Each dancer registers separately.</span>
                </span>
              </label>
            </div>
          </fieldset>
          <button
            type="submit"
            className="flex min-h-12 cursor-pointer items-center justify-center px-5 py-3 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200 hover:brightness-[1.12] rounded-lg bg-amber-200 text-stone-950"
          >
            Book the beginner course
          </button>
          <p className="text-xs leading-5">No partner or dance experience needed. Wear shoes you can turn in.</p>
        </form>
      </div>
    </section>
  )
}
