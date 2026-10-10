export default function FeaturesFreightDesk() {
  return (
    <section className="bg-zinc-50 text-zinc-950">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <p className="text-sm font-semibold text-red-700">Dockline / From dispatch to delivery</p>
        <h2 className="mt-4 max-w-3xl text-[2.25rem] leading-[1.1] font-semibold tracking-[-0.025em] sm:text-[3rem]">
          Every load. A clear handover.
        </h2>
        <p className="mt-5 max-w-xl leading-relaxed text-zinc-600">
          Give dispatchers, drivers and customers the same shipment record, without
          another round of phone calls.
        </p>
        <div className="mt-12 border-y border-zinc-300">
          <article className="grid gap-6 py-8 md:grid-cols-[1fr_1fr_1fr]">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-red-700">Dispatch</p>
              <h3 className="text-xl font-semibold">Build the run once</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                Group stops, assign a vehicle and send the manifest to your driver.
                Changes reach the cab as they happen.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold">Know what is on board</h4>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                Pallet counts, handling notes and delivery windows travel with the
                consignment, not in someone's notebook.
              </p>
            </div>
            <aside className="rounded-lg border border-zinc-200 bg-white p-5" aria-label="Example dispatch record">
              <p className="text-xs font-semibold text-zinc-600">Consignment record</p>
              <p className="mt-3 font-mono text-sm font-semibold">DL-04821 / Bristol → Bath</p>
              <p className="mt-3 text-sm">6 pallets · Tail lift required</p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">Delivery window 09:00–11:00</p>
            </aside>
          </article>
          <article className="grid gap-6 py-8 md:grid-cols-[1fr_1fr_1fr] border-t border-zinc-300">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-red-700">Delivery</p>
              <h3 className="text-xl font-semibold">Close the loop at the door</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                A signature, a photograph and a timestamp give your office the proof
                it needs to raise the invoice.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold">Handle the exception</h4>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                A missing pallet or a closed gate gets a reason code and an owner,
                so the next shift knows what to do.
              </p>
            </div>
            <aside className="rounded-lg border border-zinc-200 bg-white p-5" aria-label="Example delivery record">
              <p className="text-xs font-semibold text-zinc-600">Proof of delivery</p>
              <p className="mt-3 font-mono text-sm font-semibold">DL-04821 / 10:24</p>
              <p className="mt-3 flex items-center gap-2 text-xs text-green-800">
                <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="size-4">
                  <path d="m3 8 3 3 7-7" />
                </svg>
                Delivered · Signed by M. Patel
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">Signature and 2 photos attached</p>
            </aside>
          </article>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">
            Built for regional fleets and the people who keep them moving.
          </p>
          <a href="#" className="inline-flex w-fit items-center gap-3 py-2 text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950">
            See the dispatch workflow
          </a>
        </div>
      </div>
    </section>
  )
}
