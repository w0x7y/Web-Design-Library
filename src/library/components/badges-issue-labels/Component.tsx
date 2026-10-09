export default function BadgesIssueLabels() {
  return (
    <section
      aria-label="Issue badge collection"
      className="w-72 rounded-xl border border-slate-200 bg-white p-5 text-slate-900"
    >
      <p className="font-mono text-[10px] text-slate-500">WEB-248</p>
      <h2 className="mt-1 text-sm font-semibold">Improve checkout recovery</h2>
      <p className="mt-5 text-[10px] font-medium tracking-widest text-slate-500 uppercase">
        Priority
      </p>
      <ul role="list" className="mt-2 flex flex-wrap gap-1.5">
        <li className="rounded-md bg-red-50 px-2 py-1 text-[11px] font-semibold text-red-800">
          ↑ Urgent
        </li>
        <li className="rounded-md bg-amber-50 px-2 py-1 text-[11px] font-semibold text-amber-900">
          High
        </li>
        <li className="rounded-md bg-slate-100 px-2 py-1 text-[11px] font-semibold text-slate-700">
          Normal
        </li>
      </ul>
      <p className="mt-4 text-[10px] font-medium tracking-widest text-slate-500 uppercase">
        Type
      </p>
      <ul role="list" className="mt-2 flex flex-wrap gap-1.5">
        <li className="rounded-full border border-violet-200 px-2.5 py-1 text-[11px] text-violet-800">
          Enhancement
        </li>
        <li className="rounded-full border border-sky-200 px-2.5 py-1 text-[11px] text-sky-800">
          Accessibility
        </li>
      </ul>
      <p className="mt-4 text-[10px] font-medium tracking-widest text-slate-500 uppercase">
        Owners
      </p>
      <ul role="list" className="mt-2 flex flex-wrap gap-2">
        <li className="flex items-center gap-1.5 text-[11px]">
          <span
            aria-hidden="true"
            className="flex size-5 items-center justify-center rounded bg-blue-100 text-[9px] font-bold text-blue-800"
          >
            P
          </span>
          Product
        </li>
        <li className="flex items-center gap-1.5 text-[11px]">
          <span
            aria-hidden="true"
            className="flex size-5 items-center justify-center rounded bg-emerald-100 text-[9px] font-bold text-emerald-800"
          >
            E
          </span>
          Engineering
        </li>
      </ul>
    </section>
  )
}
