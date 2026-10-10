// Fonts: IBM Plex Sans (https://fonts.google.com/specimen/IBM+Plex+Sans)
export default function SignupDonorRegistration() {
  return (
    <section className="bg-slate-100 px-6 py-16 text-slate-950 font-['IBM_Plex_Sans',ui-sans-serif,system-ui,sans-serif]">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.7fr_1fr] lg:items-start">
        <form action="#" method="post" className="grid gap-6 bg-white p-6 sm:p-10">
          <div className="grid gap-3">
            <p className="text-xs font-semibold tracking-[0.12em] uppercase">Redthread / Donor services</p>
            <h2 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">Register as a new donor.</h2>
            <p
              className="text-sm leading-6"
            >
              Start with your contact details. Our donor team will help you find a local session and explain the checks before you book.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <label htmlFor="signup-donor-registration-given-name" className="grid min-w-0 gap-2 text-sm font-medium">
              <span>First name</span>
              <input
                id="signup-donor-registration-given-name"
                name="given-name"
                type="text"
                autoComplete="given-name"
                required
                className="min-w-0 h-11 w-full border border-current/60 rounded-md bg-white px-3 text-sm font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800"
              />
            </label>
            <label htmlFor="signup-donor-registration-family-name" className="grid min-w-0 gap-2 text-sm font-medium">
              <span>Last name</span>
              <input
                id="signup-donor-registration-family-name"
                name="family-name"
                type="text"
                autoComplete="family-name"
                required
                className="min-w-0 h-11 w-full border border-current/60 rounded-md bg-white px-3 text-sm font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800"
              />
            </label>
          </div>
          <label htmlFor="signup-donor-registration-email" className="grid min-w-0 gap-2 text-sm font-medium">
            <span>Email address</span>
            <input
              id="signup-donor-registration-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-w-0 h-11 w-full border border-current/60 rounded-md bg-white px-3 text-sm font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800"
            />
          </label>
          <div className="grid gap-5 sm:grid-cols-2">
            <label htmlFor="signup-donor-registration-phone" className="grid min-w-0 gap-2 text-sm font-medium">
              <span>Mobile number</span>
              <input
                id="signup-donor-registration-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                className="min-w-0 h-11 w-full border border-current/60 rounded-md bg-white px-3 text-sm font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800"
              />
            </label>
            <label htmlFor="signup-donor-registration-postcode" className="grid min-w-0 gap-2 text-sm font-medium">
              <span>Postcode</span>
              <input
                id="signup-donor-registration-postcode"
                name="postcode"
                type="text"
                autoComplete="postal-code"
                required
                className="min-w-0 h-11 w-full border border-current/60 rounded-md bg-white px-3 text-sm font-normal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800"
              />
            </label>
          </div>
          <label htmlFor="signup-donor-registration-contact" className="flex items-start gap-3 text-sm leading-6">
            <input
              id="signup-donor-registration-contact"
              type="checkbox"
              name="contact"
              required
              className="mt-1 size-4 shrink-0 accent-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800"
            />
            <span>I agree to be contacted about donor registration.</span>
          </label>
          <button
            type="submit"
            className="flex min-h-12 cursor-pointer items-center justify-center px-5 py-3 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800 hover:brightness-[1.12] rounded-md bg-red-800 text-white"
          >
            Create my donor profile
          </button>
          <p className="text-xs leading-5">This registration does not book a donation appointment.</p>
        </form>
        <aside className="grid content-start gap-6 border-t-4 border-red-800 bg-slate-50 p-6">
          <p className="text-xl font-semibold">What comes next</p>
          <ol role="list" className="grid gap-6 text-sm leading-6">
            <li className="grid gap-1">
              <strong>01 / Confirm your email</strong>
              <span>A secure link connects you to your profile.</span>
            </li>
            <li className="grid gap-1">
              <strong>02 / Speak with our team</strong>
              <span>Ask questions and discuss the registration checks.</span>
            </li>
            <li className="grid gap-1">
              <strong>03 / Choose a session</strong>
              <span>See upcoming locations and available times.</span>
            </li>
          </ol>
          <details className="border-t border-current/30 pt-4">
            <summary
              className="cursor-pointer text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800"
            >
              How is my information used?
            </summary>
            <p
              className="mt-3 text-sm leading-6"
            >
              Your details are used to manage registration and contact you about donation sessions. They are not shared for advertising.
            </p>
          </details>
        </aside>
      </div>
    </section>
  )
}
