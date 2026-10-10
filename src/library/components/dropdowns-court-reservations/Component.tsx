// Fonts: IBM Plex Sans (https://fonts.google.com/specimen/IBM+Plex+Sans)
export default function DropdownsCourtReservations() {
  return (
    <div className="w-72 sm:w-80 rounded-xl border border-blue-700 bg-blue-950 p-4 text-blue-50 scheme-dark font-['IBM_Plex_Sans',ui-sans-serif,system-ui,sans-serif]">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-semibold">SHUTTLEGRID<span className="mt-1 block text-xs text-blue-200">East hall · Badminton</span></p>
        <p className="rounded-md border border-blue-700 px-2 py-1 text-center text-xs leading-5">OCT<span className="block font-semibold">10</span></p>
      </div>
      <details open className="group">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 [&::-webkit-details-marker]:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current rounded-lg bg-blue-800 px-3 py-3 text-sm font-medium">
          <span>Choose court &amp; time</span>
          <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4 shrink-0 group-open:rotate-180">
            <path d="m4 6 4 4 4-4" />
          </svg>
        </summary>
        <fieldset className="mt-4">
          <legend className="sr-only">Court number</legend>
          <p className="mb-2 text-xs font-medium text-blue-200">Available courts</p>
          <div className="grid grid-cols-3 gap-2">
            <label className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-blue-500 px-2 py-3 text-sm has-checked:bg-blue-800">
              <input type="radio" name="dropdowns-court-reservations-court" value="1" aria-label="Court 1" className="size-3.5 accent-blue-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current" /><span>01</span>
            </label>
            <label className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-blue-500 px-2 py-3 text-sm has-checked:bg-blue-800">
              <input type="radio" name="dropdowns-court-reservations-court" value="2" aria-label="Court 2" defaultChecked className="size-3.5 accent-blue-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current" /><span>02</span>
            </label>
            <label className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-blue-500 px-2 py-3 text-sm has-checked:bg-blue-800">
              <input type="radio" name="dropdowns-court-reservations-court" value="3" aria-label="Court 3" className="size-3.5 accent-blue-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current" /><span>03</span>
            </label>
          </div>
        </fieldset>
        <div className="mt-4 flex items-center justify-between gap-3">
          <label htmlFor="dropdowns-court-reservations-time" className="text-xs text-blue-200">Time slot</label>
          <select id="dropdowns-court-reservations-time" name="court-time" className="h-10 w-40 rounded-md border border-blue-500 bg-blue-950 px-2 text-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">
            <option value="18:00">18:00–19:00</option>
            <option value="19:00">19:00–20:00</option>
            <option value="20:00">20:00–21:00</option>
          </select>
        </div>
        <p className="mt-4 border-t border-blue-700 pt-3 text-xs text-blue-200">60-minute session · Rackets available at reception.</p>
      </details>
    </div>
  )
}
