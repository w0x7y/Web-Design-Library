// Fonts: Manrope (https://fonts.google.com/specimen/Manrope)
export default function CtaSolarSurvey() {
  return (
    <section className="bg-linear-to-br from-lime-50 via-emerald-100 to-teal-200 text-teal-950 font-['Manrope',ui-sans-serif,system-ui,sans-serif] antialiased">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-20">
        <p className="text-xs font-bold uppercase tracking-widest text-teal-800">
          Daymark / Home solar, properly measured
        </p>
        <h2 className="mt-5 max-w-3xl text-[2.5rem] leading-[1.1] font-semibold tracking-tight sm:text-[3.5rem]">
          Find out what your roof could do.
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-[1.3fr_1fr] md:gap-16">
          <figure>
            <svg
              viewBox="0 0 290 220"
              stroke="currentColor"
              aria-hidden="true"
              className="w-full max-w-md text-teal-800"
            >
              <path
                d="M30 115 145 35l115 80v75H30Z"
                fill="none"
                strokeWidth="2"
               />
              <path
                d="M15 120 145 25l130 95M145 25v-15m-15 0h30"
                fill="none"
                strokeWidth="2"
               />
              <path
                d="m85 90 30-22 22 16-30 22Zm35-25 25-18 22 16-25 18Zm-8 46 30-22 22 16-30 22Zm35-25 25-18 22 16-25 18Z"
                className="fill-teal-800"
               />
              <path
                d="M50 190v-50h35v50m100-50h45v30h-45zM15 205h260"
                fill="none"
                strokeWidth="2"
               />
            </svg>
            <figcaption className="mt-4 max-w-md text-sm leading-6 text-teal-800">
              We check roof area, shading and your household usage. You get a
              written estimate, with the assumptions explained.
            </figcaption>
          </figure>
          <form
            action="#"
            method="get"
            className="border-t border-teal-700 pt-6"
          >
            <h3 className="text-xl font-semibold">
              Start with a free roof survey
            </h3>
            <label
              htmlFor="cta-solar-survey-postcode"
              className="mt-6 block text-sm font-semibold"
            >
              Your postcode
            </label>
            <input
              id="cta-solar-survey-postcode"
              name="postcode"
              type="text"
              required
              autoComplete="postal-code"
              aria-describedby="cta-solar-survey-hint"
              className="mt-2 h-12 w-full rounded-lg border border-teal-700 bg-white px-4 text-base leading-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-950"
            />
            <p
              id="cta-solar-survey-hint"
              className="mt-3 text-xs leading-5 text-teal-800"
            >
              We currently survey homes in Bristol and Bath. No sales call until
              you ask for one.
            </p>
            <div className="mt-5">
              <button
                type="submit"
                className="inline-flex min-h-12 w-fit items-center justify-center gap-3 rounded-lg bg-teal-950 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-950"
              >
                Check my area
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
