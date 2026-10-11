export default function StatCardThresholdStatus() {
  return (
    <article className="grid w-72 grid-cols-[40px_1fr] gap-5 rounded-lg border border-neutral-200 bg-white p-6 text-neutral-900 sm:w-80">
      <div aria-hidden="true" className="grid grid-rows-3 gap-2">
        <span className="rounded-md border border-neutral-300 bg-neutral-100"></span>
        <span className="rounded-md border border-neutral-900 bg-neutral-900"></span>
        <span className="rounded-md border border-neutral-300 bg-neutral-100"></span>
      </div>
      <div>
        <h3 className="text-sm font-medium text-neutral-500">Current capacity</h3>
        <p className="mt-2 text-4xl font-semibold tracking-tight">64%</p>
        <p className="mt-2 text-sm font-semibold">Within operating range</p>
        <dl className="mt-5 grid gap-3 border-t border-neutral-200 pt-4">
          <div className="flex justify-between gap-3 text-xs">
            <dt className="text-neutral-500">Lower limit</dt>
            <dd className="font-medium">40%</dd>
          </div>
          <div className="flex justify-between gap-3 text-xs">
            <dt className="text-neutral-500">Upper limit</dt>
            <dd className="font-medium">80%</dd>
          </div>
        </dl>
      </div>
      <p className="col-span-2 border-t border-neutral-200 pt-4 text-xs text-neutral-500">Keep the figure between the stated limits.</p>
    </article>
  )
}
