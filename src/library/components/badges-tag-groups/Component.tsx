export default function BadgesTagGroups() {
  return (
    <div className="w-72 text-neutral-900 sm:w-80">
      <p className="font-mono text-xs text-neutral-500">ITEM-1042</p>
      <h2 className="mt-1 text-sm font-semibold">Item title</h2>
      <div className="mt-4 grid gap-4">
        <div>
          <h3 className="mb-1.5 text-xs font-medium text-neutral-500">Priority</h3>
          <ul role="list" className="flex flex-wrap gap-1.5">
            <li><span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium"><span aria-hidden="true" className="size-1.5 rounded-full border border-neutral-900 bg-neutral-900" />High</span></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-1.5 text-xs font-medium text-neutral-500">Labels</h3>
          <ul role="list" className="flex flex-wrap gap-1.5">
            {['Category', 'Type', 'Stage'].map((label) => (
              <li key={label}><span className="inline-flex items-center rounded-md border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">{label}</span></li>
            ))}
            <li><span aria-label="Two more labels" className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">+2</span></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-1.5 text-xs font-medium text-neutral-500">Owners</h3>
          <ul role="list" className="flex flex-wrap gap-1.5">
            <li><span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium"><span aria-hidden="true" className="flex size-5 items-center justify-center rounded-full bg-neutral-200 text-xs font-medium text-neutral-600">AR</span>Alex Rivera</span></li>
            <li><span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium"><span aria-hidden="true" className="flex size-5 items-center justify-center rounded-full bg-neutral-200 text-xs font-medium text-neutral-600">JL</span>Jordan Lee</span></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
