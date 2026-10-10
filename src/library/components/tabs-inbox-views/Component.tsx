export default function TabsInboxViews() {
  return (
    <section
      aria-label="Shared inbox views"
      className="group w-72 rounded-2xl border border-slate-200 bg-white p-4 text-slate-900"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Inbox</h2>
        <span className="rounded-full bg-violet-100 px-2 py-1 text-[10px] font-medium text-violet-800">
          8 new
        </span>
      </div>
      <fieldset className="mt-4">
        <legend className="sr-only">Choose message view</legend>
        <div className="grid grid-cols-3 border-b border-slate-200">
          <label className="flex h-9 cursor-pointer items-center justify-center border-b-2 border-transparent text-xs text-slate-500 hover:bg-violet-50 has-checked:border-violet-700 has-checked:font-semibold has-checked:text-violet-800 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-slate-900">
            <input
              id="tabs-inbox-views-all"
              type="radio"
              name="tabs-inbox-views-filter"
              value="all"
              defaultChecked
              className="sr-only focus-visible:outline-hidden"
            />
            All
          </label>
          <label className="flex h-9 cursor-pointer items-center justify-center border-b-2 border-transparent text-xs text-slate-500 hover:bg-violet-50 has-checked:border-violet-700 has-checked:font-semibold has-checked:text-violet-800 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-slate-900">
            <input
              id="tabs-inbox-views-unread"
              type="radio"
              name="tabs-inbox-views-filter"
              value="unread"
              className="sr-only focus-visible:outline-hidden"
            />
            Unread
          </label>
          <label className="flex h-9 cursor-pointer items-center justify-center border-b-2 border-transparent text-xs text-slate-500 hover:bg-violet-50 has-checked:border-violet-700 has-checked:font-semibold has-checked:text-violet-800 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-slate-900">
            <input
              id="tabs-inbox-views-mine"
              type="radio"
              name="tabs-inbox-views-filter"
              value="mine"
              className="sr-only focus-visible:outline-hidden"
            />
            Assigned
          </label>
        </div>
      </fieldset>
      <ul
        role="list"
        aria-label="All messages"
        className="mt-2 hidden group-has-[#tabs-inbox-views-all:checked]:block"
      >
        <li className="flex items-center gap-3 border-b border-slate-100 py-4">
          <span
            aria-hidden="true"
            className="flex size-8 shrink-0 items-center justify-center rounded-full bg-violet-100 text-xs font-semibold text-violet-800"
          >
            LC
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold">October delivery</p>
            <p className="mt-1 text-[10px] text-slate-500">
              Lena Chen · 12 min ago
            </p>
          </div>
          <span className="size-1.5 shrink-0 rounded-full bg-violet-700 forced-colors:bg-[CanvasText]">
            <span className="sr-only">Unread</span>
          </span>
        </li>
        <li className="flex items-center gap-3 py-4">
          <span
            aria-hidden="true"
            className="flex size-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-xs font-semibold text-sky-800"
          >
            OB
          </span>
          <div>
            <p className="text-xs font-semibold">Invoice received, thanks!</p>
            <p className="mt-1 text-[10px] text-slate-500">
              Owen Brooks · 34 min ago
            </p>
          </div>
        </li>
      </ul>
      <ul
        role="list"
        aria-label="Unread messages"
        className="mt-2 hidden group-has-[#tabs-inbox-views-unread:checked]:block"
      >
        <li className="border-b border-slate-100 py-4">
          <p className="text-xs font-semibold">October delivery</p>
          <p className="mt-1 text-[10px] text-slate-500">
            Lena Chen · Delivery question
          </p>
        </li>
        <li className="py-4">
          <p className="text-xs font-semibold">New wholesale enquiry</p>
          <p className="mt-1 text-[10px] text-slate-500">
            Noah Kim · 1 hour ago
          </p>
        </li>
      </ul>
      <ul
        role="list"
        aria-label="Assigned messages"
        className="mt-2 hidden group-has-[#tabs-inbox-views-mine:checked]:block"
      >
        <li className="border-b border-slate-100 py-4">
          <p className="text-xs font-semibold">Return label request</p>
          <p className="mt-1 text-[10px] text-slate-500">
            Bea Lewis · Assigned to you
          </p>
        </li>
        <li className="py-4">
          <p className="text-xs font-semibold">Order #1048 address update</p>
          <p className="mt-1 text-[10px] text-slate-500">
            Milo Reed · Assigned to you
          </p>
        </li>
      </ul>
    </section>
  )
}
