export default function LoginEmailLink() {
  return (
    <section className="bg-teal-950 px-6 py-16 text-teal-50 sm:px-12">
      <div className="mx-auto max-w-xl text-center">
        <div className="mx-auto flex size-16 items-center justify-center rounded-full border border-teal-700 text-teal-200">
          <svg
            className="size-12"
            viewBox="0 0 48 48"
            fill="none"
            aria-hidden="true"
          >
            <rect
              x="5"
              y="12"
              width="38"
              height="26"
              rx="3"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path d="m6 14 18 14 18-14" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        <h2 className="mt-6 text-4xl font-medium tracking-tight">
          A link. And you’re in.
        </h2>
        <p className="mx-auto mt-4 max-w-sm text-base leading-7 text-teal-200">
          Enter your email and we’ll send a sign-in link. No password to
          remember.
        </p>
        <form className="mt-8 grid gap-4 text-left" action="#" method="post">
          <label
            className="grid gap-2 text-sm font-medium"
            htmlFor="login-email-link-email"
          >
            Email address
            <input
              className="min-w-0 w-full rounded-lg border border-current/60 bg-transparent px-3 py-2.5 font-normal placeholder:text-current/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current leading-[normal]"
              id="login-email-link-email"
              aria-describedby="login-email-link-expiry"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
            />
          </label>
          <button
            className="rounded-full bg-teal-100 px-5 py-3 text-sm font-semibold text-teal-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-200"
            type="submit"
          >
            Send sign-in link
          </button>
        </form>
        <p id="login-email-link-expiry" className="mt-5 text-xs text-teal-200">
          The link expires after 15 minutes.
        </p>
        <div className="mt-8 border-t border-teal-700 pt-5">
          <a
            className="text-sm text-teal-100 underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
            href="#"
          >
            Back to the website
          </a>
        </div>
      </div>
    </section>
  )
}
