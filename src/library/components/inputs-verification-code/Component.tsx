export default function InputsVerificationCode() {
  return (
    <section
      aria-label="Verification fields"
      className="w-72 rounded-2xl border border-slate-200 bg-white p-5 text-slate-900"
    >
      <span
        aria-hidden="true"
        className="flex size-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-800"
      >
        <svg
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="size-5"
        >
          <path d="m10 2 7 3v5c0 4-7 8-7 8s-7-4-7-8V5zM7 9l2 2 4-4" />
        </svg>
      </span>
      <h2 className="mt-3 text-lg font-semibold">Check your inbox</h2>
      <p
        id="inputs-verification-code-hint"
        className="mt-1 text-xs leading-5 text-slate-600"
      >
        Enter the four digits sent to your email.
      </p>
      <fieldset className="mt-4">
        <legend className="sr-only">Verification code</legend>
        <div className="flex gap-3">
          <input
            type="text"
            name="digit-1"
            aria-label="Verification code digit 1"
            aria-describedby="inputs-verification-code-hint"
            inputMode="numeric"
            pattern="[0-9]"
            maxLength={1}
            autoComplete="one-time-code"
            defaultValue="4"
            className="size-12 rounded-lg border border-indigo-300 bg-indigo-50 text-center font-mono text-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 leading-[normal]"
          />
          <input
            type="text"
            name="digit-2"
            aria-label="Verification code digit 2"
            aria-describedby="inputs-verification-code-hint"
            inputMode="numeric"
            pattern="[0-9]"
            maxLength={1}
            defaultValue="8"
            className="size-12 rounded-lg border border-indigo-300 bg-indigo-50 text-center font-mono text-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 leading-[normal]"
          />
          <input
            type="text"
            name="digit-3"
            aria-label="Verification code digit 3"
            aria-describedby="inputs-verification-code-hint"
            inputMode="numeric"
            pattern="[0-9]"
            maxLength={1}
            className="size-12 rounded-lg border border-slate-300 bg-white text-center font-mono text-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 leading-[normal]"
          />
          <input
            type="text"
            name="digit-4"
            aria-label="Verification code digit 4"
            aria-describedby="inputs-verification-code-hint"
            inputMode="numeric"
            pattern="[0-9]"
            maxLength={1}
            className="size-12 rounded-lg border border-slate-300 bg-white text-center font-mono text-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 leading-[normal]"
          />
        </div>
      </fieldset>
      <label
        htmlFor="inputs-verification-code-recovery"
        className="mt-5 block text-xs font-medium"
      >
        Recovery email
      </label>
      <input
        id="inputs-verification-code-recovery"
        name="recovery-email"
        type="email"
        autoComplete="email"
        placeholder="backup@example.com"
        aria-describedby="inputs-verification-code-privacy"
        className="mt-2 h-10 w-full rounded-lg border border-slate-300 px-3 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 leading-[normal]"
      />
      <p
        id="inputs-verification-code-privacy"
        className="mt-2 text-[10px] text-slate-500"
      >
        Used only if you lose access to your account.
      </p>
    </section>
  )
}
