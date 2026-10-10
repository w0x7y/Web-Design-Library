export default function ButtonsCalendarActions() {
  return (
    <section
      aria-label="Appointment actions"
      className="w-72 rounded-xl border border-slate-200 bg-white p-5 text-slate-900"
    >
      <div className="flex items-center gap-3">
        <time
          dateTime="2026-10-16"
          aria-label="October 16, 2026"
          className="flex size-12 shrink-0 flex-col items-center justify-center rounded-lg bg-blue-50"
        >
          <span className="text-[10px] font-semibold text-blue-700 uppercase">
            Oct
          </span>
          <span className="text-xl leading-none font-bold text-blue-900">
            16
          </span>
        </time>
        <div>
          <h2 className="text-sm font-semibold">Project check-in</h2>
          <p className="mt-1 text-xs text-slate-600">Friday, 10:00–10:30 AM</p>
        </div>
      </div>
      <p className="mt-4 text-xs leading-5 text-slate-600">
        Your time with Morgan is reserved. Confirm when you're ready.
      </p>
      <button
        type="button"
        className="mt-4 h-11 w-full rounded-lg bg-blue-700 text-sm font-semibold text-white transition-colors motion-reduce:transition-none hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
      >
        Confirm appointment
      </button>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <button
          type="button"
          className="h-9 rounded-lg border border-slate-300 text-xs font-medium transition-colors motion-reduce:transition-none hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
        >
          Reschedule
        </button>
        <button
          type="button"
          className="h-9 rounded-lg text-xs font-medium text-red-700 transition-colors motion-reduce:transition-none hover:bg-red-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
        >
          Cancel booking
        </button>
      </div>
    </section>
  )
}
