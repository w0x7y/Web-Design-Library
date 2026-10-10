// Fonts: Bricolage Grotesque (https://fonts.google.com/specimen/Bricolage+Grotesque)
export default function DropdownsLaundryCycle() {
  return (
    <div className="w-72 sm:w-80 rounded-[20px] border-2 border-orange-900 bg-orange-50 p-4 text-orange-950 font-['Bricolage_Grotesque',ui-sans-serif,system-ui,sans-serif]">
      <p className="mb-3 flex items-baseline justify-between"><span className="text-2xl font-bold tracking-tight">foldjoy</span><span className="text-[10px] font-medium">BAG / 0284</span></p>
      <details open className="group">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 [&::-webkit-details-marker]:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-900 rounded-full bg-orange-900 px-4 py-2 text-sm font-semibold text-white">
          <span>Pick your wash cycle</span>
          <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4 shrink-0 group-open:rotate-180">
            <path d="m4 6 4 4 4-4" />
          </svg>
        </summary>
        <fieldset className="mt-3 grid grid-cols-2 gap-2">
          <legend className="sr-only">Wash cycle</legend>
          <label className="cursor-pointer rounded-xl border border-orange-900 bg-white p-3 has-checked:bg-orange-200">
            <span className="mb-2 flex items-center justify-between">
              <input type="radio" name="dropdowns-laundry-cycle-mode" value="everyday" aria-labelledby="dropdowns-laundry-cycle-0-name" aria-describedby="dropdowns-laundry-cycle-0-hint" defaultChecked className="size-4 accent-orange-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current" /><span className="rounded-full bg-orange-100 px-2 py-0.5 text-[10px] font-bold">30°</span></span>
            <span id="dropdowns-laundry-cycle-0-name" className="block text-sm font-semibold">Everyday</span>
            <span id="dropdowns-laundry-cycle-0-hint" className="block text-[10px] text-orange-900">Cotton & mixed loads</span>
          </label>
          <label className="cursor-pointer rounded-xl border border-orange-900 bg-white p-3 has-checked:bg-orange-200">
            <span className="mb-2 flex items-center justify-between">
              <input type="radio" name="dropdowns-laundry-cycle-mode" value="delicates" aria-labelledby="dropdowns-laundry-cycle-1-name" aria-describedby="dropdowns-laundry-cycle-1-hint" className="size-4 accent-orange-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current" /><span className="rounded-full bg-orange-100 px-2 py-0.5 text-[10px] font-bold">20°</span></span>
            <span id="dropdowns-laundry-cycle-1-name" className="block text-sm font-semibold">Delicates</span>
            <span id="dropdowns-laundry-cycle-1-hint" className="block text-[10px] text-orange-900">Gentle spin</span>
          </label>
          <label className="cursor-pointer rounded-xl border border-orange-900 bg-white p-3 has-checked:bg-orange-200">
            <span className="mb-2 flex items-center justify-between">
              <input type="radio" name="dropdowns-laundry-cycle-mode" value="linen" aria-labelledby="dropdowns-laundry-cycle-2-name" aria-describedby="dropdowns-laundry-cycle-2-hint" className="size-4 accent-orange-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current" /><span className="rounded-full bg-orange-100 px-2 py-0.5 text-[10px] font-bold">40°</span></span>
            <span id="dropdowns-laundry-cycle-2-name" className="block text-sm font-semibold">Linen</span>
            <span id="dropdowns-laundry-cycle-2-hint" className="block text-[10px] text-orange-900">Sheets & towels</span>
          </label>
          <label className="cursor-pointer rounded-xl border border-orange-900 bg-white p-3 has-checked:bg-orange-200">
            <span className="mb-2 flex items-center justify-between">
              <input type="radio" name="dropdowns-laundry-cycle-mode" value="wool" aria-labelledby="dropdowns-laundry-cycle-3-name" aria-describedby="dropdowns-laundry-cycle-3-hint" className="size-4 accent-orange-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current" /><span className="rounded-full bg-orange-100 px-2 py-0.5 text-[10px] font-bold">20°</span></span>
            <span id="dropdowns-laundry-cycle-3-name" className="block text-sm font-semibold">Wool</span>
            <span id="dropdowns-laundry-cycle-3-hint" className="block text-[10px] text-orange-900">Low agitation</span>
          </label>
        </fieldset>
        <p className="mt-3 text-xs">One cycle per bag. We sort the rest.</p>
      </details>
    </div>
  )
}
