export default function InputsOtpRow() {
  return (
    <div className="w-72 text-neutral-900 sm:w-[22rem]">
      <fieldset aria-describedby="otp-instruction">
        <legend className="text-sm font-medium">Verification code</legend>
        <p id="otp-instruction" className="mt-1.5 text-sm text-neutral-500">Enter the six-digit code.</p>
        <div className="mt-4 flex items-center justify-center gap-2">
          <div className="flex gap-1">
            {[1, 2, 3].map((digit) => (
              <input key={digit} name={`digit-${digit}`} type="text" inputMode="numeric" pattern="[0-9]" maxLength={1} autoComplete={digit === 1 ? 'one-time-code' : 'off'} aria-label={`Digit ${digit} of 6`} aria-describedby="otp-instruction" defaultValue={String(digit)} placeholder="" className="h-11 w-9 rounded-md border border-neutral-300 bg-white px-0 text-center font-mono text-lg placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 sm:h-12 sm:w-11" />
            ))}
          </div>
          <span aria-hidden="true" className="w-3 text-center text-neutral-400">-</span>
          <div className="flex gap-1">
            {[4, 5, 6].map((digit) => (
              <input key={digit} name={`digit-${digit}`} type="text" inputMode="numeric" pattern="[0-9]" maxLength={1} autoComplete="off" aria-label={`Digit ${digit} of 6`} aria-describedby="otp-instruction" placeholder="" className="h-11 w-9 rounded-md border border-neutral-300 bg-white px-0 text-center font-mono text-lg placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 sm:h-12 sm:w-11" />
            ))}
          </div>
        </div>
      </fieldset>
      <button type="button" className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Verify</button>
      <p className="mt-3 text-center text-sm text-neutral-600">Didn't get a code? <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Resend</a></p>
    </div>
  )
}
