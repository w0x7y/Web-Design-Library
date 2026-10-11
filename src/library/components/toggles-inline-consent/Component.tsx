export default function TogglesInlineConsent() {
  return (
    <div className="group w-72 rounded-lg border border-neutral-200 bg-white text-neutral-900 sm:w-[26rem]"><div className="p-4"><h2 className="text-sm font-semibold">Consent heading</h2>
    <p className="mt-2 text-sm text-pretty text-neutral-600">Explain the permission requested and how it is used.</p>
    <p className="mt-3 text-sm"><a className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 " href="#" >Read the policy</a></p></div>
    <div className="flex items-center justify-between gap-3 border-t border-neutral-200 bg-neutral-50 p-4"><label className="flex cursor-pointer items-center gap-2 text-sm font-medium"><input className="size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" id="toggles-inline-consent-accepted" name="consent" type="checkbox" aria-describedby="toggles-inline-consent-hint" />I agree</label>
    <span className="text-xs text-neutral-500 group-has-[#toggles-inline-consent-accepted:checked]:hidden">Not agreed</span>
    <span className="hidden text-xs font-medium text-neutral-900 group-has-[#toggles-inline-consent-accepted:checked]:inline">Agreed</span></div>
    <p className="sr-only" id="toggles-inline-consent-hint">Check the box to record your agreement.</p></div>
  )
}
