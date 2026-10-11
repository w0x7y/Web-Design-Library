export default function InputsDateRange() {
  return (
    <fieldset className="w-72 rounded-lg border border-neutral-200 bg-white p-4 text-neutral-900 sm:w-[28rem]"><legend className="px-1 text-sm font-semibold">Date range</legend>
    <div className="grid gap-3 sm:grid-cols-2"><div><label className="mb-1.5 block text-sm font-medium" htmlFor="inputs-date-range-start">Start date</label>
    <div className="flex rounded-md focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-neutral-900"><input className="h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white px-3 text-sm text-neutral-900 placeholder:text-neutral-500 focus-visible:outline-hidden" id="inputs-date-range-start" name="start" type="date" defaultValue="2026-10-11" aria-describedby="inputs-date-range-hint" /></div></div>
    <div><label className="mb-1.5 block text-sm font-medium" htmlFor="inputs-date-range-end">End date</label>
    <div className="flex rounded-md focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-neutral-900"><input className="h-10 w-full min-w-0 rounded-md border border-neutral-300 bg-white px-3 text-sm text-neutral-900 placeholder:text-neutral-500 focus-visible:outline-hidden" id="inputs-date-range-end" name="end" type="date" defaultValue="2026-10-18" aria-describedby="inputs-date-range-hint" /></div></div></div>
    <p className="mt-3 text-xs text-neutral-500" id="inputs-date-range-hint">Dates follow your local timezone.</p></fieldset>
  )
}
