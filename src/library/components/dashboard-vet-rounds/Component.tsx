export default function DashboardVetRounds() {
  return (
    <section className="bg-cyan-50 px-4 py-10 text-cyan-950 has-[:checked]:[&_[data-discharge=false]]:hidden sm:px-8" aria-labelledby="dashboard-vet-rounds-title">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-widest text-cyan-800">PAWLEDGER / LARCH VETERINARY</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight" id="dashboard-vet-rounds-title">Saturday rounds.</h2>
          </div>
          <p className="text-sm text-cyan-800">10 October · Dr Mira Chen</p>
        </header>
        <div className="mt-7 grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <div>
            <article className="grid gap-5 rounded-2xl border border-cyan-200 bg-white p-5 sm:grid-cols-[9rem_minmax(0,1fr)]">
              <img src="https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&q=80" alt="Golden retriever sitting outdoors, shown on Milo's patient record" width="800" height="1283" className="h-44 w-full rounded-xl object-cover object-[50%_35%] sm:h-full" />
              <div>
                <p className="text-xs font-semibold text-cyan-800">NEXT DISCHARGE / KENNEL 02</p>
                <h3 className="mt-2 text-2xl font-semibold">Milo is heading home.</h3>
                <p className="mt-2 text-sm leading-6 text-cyan-800">Golden retriever · 4 years<br />Post-procedure check complete. Collection arranged with his owner for 14:30.</p>
                <p className="mt-4 inline-flex rounded-md border border-green-700 bg-green-50 px-3 py-1 text-xs font-semibold text-green-900">Cleared for discharge</p>
              </div>
            </article>
            <section className="mt-6" aria-labelledby="dashboard-vet-rounds-ward">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-lg font-semibold" id="dashboard-vet-rounds-ward">Ward roster</h3>
                <label className="flex cursor-pointer items-center gap-2 rounded-md p-2 text-xs hover:bg-cyan-100"><input type="checkbox" className="size-4 accent-cyan-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current" /><span>Ready for discharge only</span></label>
              </div>
              <ul role="list" className="mt-3 rounded-xl border border-cyan-200 bg-white">
                <li className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b border-cyan-200 p-4 last:border-b-0" data-discharge="true">
                  <div>
                    <p className="text-sm font-semibold">Milo · Golden retriever</p>
                    <p className="mt-1 text-xs text-cyan-800">Kennel 02 · Owner notified</p>
                  </div>
                  <p className="text-right text-xs font-medium">Discharge ready</p>
                </li>
                <li className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b border-cyan-200 p-4 last:border-b-0" data-discharge="false">
                  <div>
                    <p className="text-sm font-semibold">Ada · Domestic shorthair</p>
                    <p className="mt-1 text-xs text-cyan-800">Cat ward 01 · Review at 14:00</p>
                  </div>
                  <p className="text-right text-xs font-medium">Observation</p>
                </li>
                <li className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b border-cyan-200 p-4 last:border-b-0" data-discharge="false">
                  <div>
                    <p className="text-sm font-semibold">Pip · Miniature dachshund</p>
                    <p className="mt-1 text-xs text-cyan-800">Kennel 04 · Admitted at 11:20</p>
                  </div>
                  <p className="text-right text-xs font-medium">Recovering</p>
                </li>
              </ul>
            </section>
          </div>
          <aside className="rounded-2xl border border-cyan-200 bg-white p-5">
            <h3 className="text-lg font-semibold">Afternoon appointments</h3>
            <ol role="list" className="mt-5 grid gap-5">
              <li className="border-l-2 border-cyan-700 pl-4">
                <p className="text-xs font-semibold text-cyan-800">13:30 · 20 MIN</p>
                <h4 className="mt-2 text-sm font-semibold">Olive · Annual check</h4>
                <p className="mt-1 text-xs text-cyan-800">Consult room 1 · Dr Chen</p>
              </li>
              <li className="border-l-2 border-cyan-700 pl-4">
                <p className="text-xs font-semibold text-cyan-800">14:00 · 30 MIN</p>
                <h4 className="mt-2 text-sm font-semibold">Basil · First puppy visit</h4>
                <p className="mt-1 text-xs text-cyan-800">Consult room 2 · Dr Santos</p>
              </li>
              <li className="border-l-2 border-cyan-700 pl-4">
                <p className="text-xs font-semibold text-cyan-800">14:45 · 20 MIN</p>
                <h4 className="mt-2 text-sm font-semibold">Nori · Follow-up</h4>
                <p className="mt-1 text-xs text-cyan-800">Consult room 1 · Dr Chen</p>
              </li>
            </ol>
            <details className="mt-6 border-t border-cyan-200 pt-4">
              <summary className="cursor-pointer text-sm font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Milo's collection checklist</summary>
              <p className="mt-3 text-xs leading-5 text-cyan-800">Confirm the discharge sheet is signed, return his collar and lead, and give the owner the scheduled follow-up details.</p>
            </details>
          </aside>
        </div>
      </div>
    </section>
  )
}
