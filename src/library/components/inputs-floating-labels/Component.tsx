export default function InputsFloatingLabels() {
  return (
    <div className="grid w-72 gap-4 text-neutral-900 sm:w-96"><div className="relative"><input className="peer h-14 w-full rounded-md border border-neutral-300 bg-white px-3 pb-2 pt-6 text-sm text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" id="inputs-floating-labels-name" name="name" type="text" placeholder=" " aria-describedby="inputs-floating-labels-name-hint" />
    <label className="absolute left-3 top-1.5 cursor-text text-xs font-medium text-neutral-600 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-1.5 peer-focus:text-xs" htmlFor="inputs-floating-labels-name">Display name</label>
    <p className="mt-1.5 text-xs text-neutral-500" id="inputs-floating-labels-name-hint">Use the name people should see.</p></div>
    <div className="relative"><input className="peer h-14 w-full rounded-md border border-neutral-300 bg-white px-3 pb-2 pt-6 text-sm text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" id="inputs-floating-labels-email" name="email" type="email" placeholder=" " aria-describedby="inputs-floating-labels-email-hint" />
    <label className="absolute left-3 top-1.5 cursor-text text-xs font-medium text-neutral-600 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-1.5 peer-focus:text-xs" htmlFor="inputs-floating-labels-email">Email address</label>
    <p className="mt-1.5 text-xs text-neutral-500" id="inputs-floating-labels-email-hint">Use a contact email address.</p></div></div>
  )
}
