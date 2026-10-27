export default function DropdownsDatePicker() {
  const weekdays = [['Su', 'Sunday'], ['Mo', 'Monday'], ['Tu', 'Tuesday'], ['We', 'Wednesday'], ['Th', 'Thursday'], ['Fr', 'Friday'], ['Sa', 'Saturday']]
  const weeks = [
    [null, null, null, null, 1, 2, 3],
    [4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30, 31],
  ]
  const today = 26
  const selected = 28
  const unavailable = [20, 21, 30]

  return (
    <div className="relative h-[22rem] w-72 text-neutral-900 sm:w-80">
      <p id="dropdowns-date-picker-label" className="text-sm font-medium">Date</p>
      <details open className="group mt-2">
        <summary aria-labelledby="dropdowns-date-picker-label dropdowns-date-picker-value" className="flex h-10 cursor-pointer list-none items-center gap-2 rounded-md border border-neutral-300 bg-white px-3 text-sm transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></svg>
          <span id="dropdowns-date-picker-value" className="flex-1 tabular-nums">Oct 28, 2026</span>
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0 transition-transform group-open:rotate-180"><path d="m6 9 6 6 6-6" /></svg>
        </summary>
        <div className="absolute top-[68px] left-0 mt-1 w-full rounded-md border border-neutral-200 bg-white p-3 shadow-lg">
          <div className="flex items-center justify-between">
            <button type="button" className="flex size-8 items-center justify-center rounded-md transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="m15 18-6-6 6-6" /></svg>
              <span className="sr-only">Previous month</span>
            </button>
            <h2 id="dropdowns-date-picker-month" className="text-sm font-semibold">October 2026</h2>
            <button type="button" className="flex size-8 items-center justify-center rounded-md transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="m9 18 6-6-6-6" /></svg>
              <span className="sr-only">Next month</span>
            </button>
          </div>
          <table aria-labelledby="dropdowns-date-picker-month" className="mt-2 w-full table-fixed">
            <thead>
              <tr>
                {weekdays.map(([short, name]) => (
                  <th key={name} scope="col" className="h-8 text-xs font-medium text-neutral-500">
                    <span aria-hidden="true">{short}</span>
                    <span className="sr-only">{name}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {weeks.map((week) => (
                <tr key={week.join('-')}>
                  {week.map((day, index) => (
                    <td key={index}>
                      {day && (
                        <button type="button" aria-label={`October ${day}, 2026`} aria-pressed={day === selected} aria-current={day === today ? 'date' : undefined} disabled={unavailable.includes(day)} className="mx-auto flex size-9 items-center justify-center rounded-md text-sm tabular-nums text-neutral-900 transition-colors enabled:hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 disabled:cursor-not-allowed disabled:text-neutral-600 disabled:line-through disabled:opacity-50 aria-[current=date]:border aria-[current=date]:border-neutral-300 aria-[current=date]:font-semibold aria-pressed:bg-neutral-900 aria-pressed:font-medium aria-pressed:text-white aria-pressed:enabled:hover:bg-neutral-700 forced-colors:aria-pressed:bg-[Highlight] forced-colors:aria-pressed:text-[HighlightText]">
                          {day}
                        </button>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
    </div>
  )
}
