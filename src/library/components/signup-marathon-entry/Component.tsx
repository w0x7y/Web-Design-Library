// Fonts: Barlow Condensed (https://fonts.google.com/specimen/Barlow+Condensed)
export default function SignupMarathonEntry() {
  return (
    <section className="bg-[#102e3d] px-6 py-16 text-sky-100">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        <aside className="grid content-start gap-6 border border-sky-100/40 p-6 sm:p-10">
          <p className="text-xs font-semibold tracking-[0.12em] uppercase">Longmile / Race entry 2027</p>
          <p
            className="font-['Barlow_Condensed',ui-sans-serif,system-ui,sans-serif] text-[7rem] font-semibold leading-none text-lime-300 sm:text-[10rem]"
          >
            26.2
          </p>
          <p className="text-xs font-semibold tracking-widest">MILES / ONE FINISH LINE</p>
          <dl className="mt-4 grid gap-5 border-t border-sky-100/40 pt-6 text-sm">
            <div className="flex justify-between gap-3">
              <dt>Race day</dt>
              <dd>18 April 2027</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt>City</dt>
              <dd>Manchester</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt>Entry</dt>
              <dd>£65</dd>
            </div>
          </dl>
          <p
            className="text-sm leading-6"
          >
            A closed-road course through the city, with a riverside finish. Entry includes your race number and timing chip.
          </p>
        </aside>
        <form action="#" method="post" className="grid content-start gap-6">
          <h2 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">Put your name on the start line.</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            <label htmlFor="signup-marathon-entry-name" className="grid min-w-0 gap-2 text-sm font-medium">
              <span>Full name</span>
              <input
                id="signup-marathon-entry-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="min-w-0 h-11 w-full border border-current/60 rounded-none bg-[#102e3d] px-3 text-sm font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
              />
            </label>
            <label htmlFor="signup-marathon-entry-email" className="grid min-w-0 gap-2 text-sm font-medium">
              <span>Email address</span>
              <input
                id="signup-marathon-entry-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 h-11 w-full border border-current/60 rounded-none bg-[#102e3d] px-3 text-sm font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
              />
            </label>
          </div>
          <label htmlFor="signup-marathon-entry-pace" className="grid min-w-0 gap-2 text-sm font-medium">
            <span>Expected finish time</span>
            <select
              id="signup-marathon-entry-pace"
              name="pace"
              className="min-w-0 h-11 w-full border border-current/60 rounded-none bg-[#102e3d] px-3 text-sm font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
            >
              <option value="under4">Under 4 hours</option>
              <option value="4to5">4 to 5 hours</option>
              <option value="over5">Over 5 hours</option>
              <option value="first">This is my first marathon</option>
            </select>
          </label>
          <label htmlFor="signup-marathon-entry-emergency" className="grid min-w-0 gap-2 text-sm font-medium">
            <span>Emergency contact phone</span>
            <input
              id="signup-marathon-entry-emergency"
              name="emergency"
              type="tel"
              autoComplete="off"
              required
              aria-describedby="signup-marathon-entry-emergency-hint"
              className="min-w-0 h-11 w-full border border-current/60 rounded-none bg-[#102e3d] px-3 text-sm font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
            />
            <p
              id="signup-marathon-entry-emergency-hint"
              className="text-xs leading-5"
            >
              Use the number of someone who will be reachable on race day.
            </p>
          </label>
          <label htmlFor="signup-marathon-entry-rules" className="flex items-start gap-3 text-sm leading-6">
            <input
              id="signup-marathon-entry-rules"
              type="checkbox"
              name="rules"
              required
              className="mt-1 size-4 shrink-0 accent-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
            />
            <span>I have read and accept the race entry conditions.</span>
          </label>
          <button
            type="submit"
            className="flex min-h-12 cursor-pointer items-center justify-center px-5 py-3 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300 hover:brightness-[1.12] bg-lime-300 text-[#102e3d]"
          >
            Continue to entry payment
          </button>
          <details className="border-t border-current/30 pt-4">
            <summary
              className="cursor-pointer text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
            >
              What happens after payment?
            </summary>
            <p
              className="mt-3 text-sm leading-6"
            >
              We will email your entry confirmation. Your runner pack and race-number collection details follow nearer race day.
            </p>
          </details>
        </form>
      </div>
    </section>
  )
}
