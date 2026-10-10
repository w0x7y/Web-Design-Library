// Fonts: Space Grotesk (https://fonts.google.com/specimen/Space+Grotesk)
export default function SignupCampusHackathon() {
  return (
    <section className="bg-neutral-950 px-6 py-16 text-lime-200 font-['Space_Grotesk',ui-sans-serif,system-ui,sans-serif]">
      <div className="mx-auto max-w-6xl">
        <header className="grid gap-8 border-b-2 border-lime-200 pb-10 md:grid-cols-[1fr_auto]">
          <div className="grid gap-6">
            <p className="text-xs font-semibold tracking-[0.12em] uppercase">Patchweek / Student hackathon 2027</p>
            <h2 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">MAKE SOMETHING THAT WORKS.</h2>
            <p
              className="max-w-xl text-base leading-7"
            >
              A weekend for unfinished ideas, unlikely teams and a demo by Sunday. All subjects welcome. All experience levels too.
            </p>
          </div>
          <div className="grid content-end gap-2">
            <p className="text-[7rem] font-bold leading-none tracking-tighter">48</p>
            <p className="text-xs font-semibold">HOURS / 19–21 FEB / LEEDS</p>
          </div>
        </header>
        <form action="#" method="post" className="mt-10 grid gap-8">
          <div className="grid gap-5 md:grid-cols-3">
            <label htmlFor="signup-campus-hackathon-name" className="grid min-w-0 gap-2 text-sm font-medium">
              <span>01 / Your full name</span>
              <input
                id="signup-campus-hackathon-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="min-w-0 h-11 w-full border border-current/60 rounded-none bg-transparent px-3 text-sm font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-200"
              />
            </label>
            <label htmlFor="signup-campus-hackathon-email" className="grid min-w-0 gap-2 text-sm font-medium">
              <span>02 / University email</span>
              <input
                id="signup-campus-hackathon-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 h-11 w-full border border-current/60 rounded-none bg-transparent px-3 text-sm font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-200"
              />
            </label>
            <label htmlFor="signup-campus-hackathon-university" className="grid min-w-0 gap-2 text-sm font-medium">
              <span>03 / University or college</span>
              <input
                id="signup-campus-hackathon-university"
                name="university"
                type="text"
                autoComplete="off"
                required
                className="min-w-0 h-11 w-full border border-current/60 rounded-none bg-transparent px-3 text-sm font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-200"
              />
            </label>
          </div>
          <div className="grid gap-8 md:grid-cols-[1fr_1fr]">
            <fieldset className="min-w-0">
              <legend className="mb-3 text-sm font-medium">Your team situation</legend>
              <div className="grid gap-3">
                <label
                  className="flex cursor-pointer items-start gap-3 border border-current/40 p-4 has-[:checked]:border-current has-[:checked]:bg-current/5"
                >
                  <input
                    type="radio"
                    name="team"
                    value="solo"
                    defaultChecked
                    className="mt-1 size-4 shrink-0 accent-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-200"
                  />
                  <span className="grid gap-1">
                    <span className="text-sm font-semibold">Find me a team</span>
                    <span className="text-xs leading-5">Meet other solo entrants on Friday.</span>
                  </span>
                </label>
                <label
                  className="flex cursor-pointer items-start gap-3 border border-current/40 p-4 has-[:checked]:border-current has-[:checked]:bg-current/5"
                >
                  <input
                    type="radio"
                    name="team"
                    value="together"
                    className="mt-1 size-4 shrink-0 accent-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-200"
                  />
                  <span className="grid gap-1">
                    <span className="text-sm font-semibold">I am coming with a team</span>
                    <span className="text-xs leading-5">We will ask for team details by email.</span>
                  </span>
                </label>
              </div>
            </fieldset>
            <div className="grid content-end gap-5">
              <label htmlFor="signup-campus-hackathon-student" className="flex items-start gap-3 text-sm leading-6">
                <input
                  id="signup-campus-hackathon-student"
                  type="checkbox"
                  name="student"
                  required
                  className="mt-1 size-4 shrink-0 accent-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-200"
                />
                <span>I will be a student at the time of the event.</span>
              </label>
              <button
                type="submit"
                className="flex min-h-12 cursor-pointer items-center justify-center px-5 py-3 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-200 hover:brightness-[1.12] border-2 border-lime-200 bg-lime-200 text-neutral-950"
              >
                Submit my entry / 2027
              </button>
              <p className="text-xs leading-5">Free entry. Meals included. Applications close 29 January.</p>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
