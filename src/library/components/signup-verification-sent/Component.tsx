export default function SignupVerificationSent() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-md">
          <div className="text-center">
            <span
              aria-hidden="true"
              className="mx-auto flex size-12 items-center justify-center rounded-md bg-neutral-100 text-neutral-900"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-6"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </span>
            <p className="mt-6 text-sm font-medium text-neutral-500">Step 2 of 3</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Check your inbox
            </h1>
            <p className="mt-4 text-lg text-pretty text-neutral-600">
              Open the link in the email to verify your address and finish creating your account.
            </p>
          </div>
          <dl className="mt-8 grid gap-3 rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-sm">
            <div className="flex flex-wrap justify-between gap-x-4 gap-y-1">
              <dt className="text-neutral-500">Sent to</dt>
              <dd className="min-w-0 font-medium break-all">name@example.com</dd>
            </div>
            <div className="flex flex-wrap justify-between gap-x-4 gap-y-1">
              <dt className="text-neutral-500">Link expires</dt>
              <dd className="font-medium">In 24 hours</dd>
            </div>
          </dl>
          <a
            href="#"
            className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            Open email app
          </a>
          <form className="mt-8 flex flex-col gap-4 border-t border-neutral-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium">Didn't get the email?</p>
              <p id="signup-verification-sent-resend-hint" className="mt-1 text-sm text-neutral-500">
                Check your spam folder first. You can resend once every 60 seconds.
              </p>
            </div>
            <button
              type="submit"
              aria-describedby="signup-verification-sent-resend-hint"
              className="inline-flex h-11 shrink-0 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Resend email
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-neutral-600">
            Wrong address?{' '}
            <a
              href="#"
              className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Use a different email
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
