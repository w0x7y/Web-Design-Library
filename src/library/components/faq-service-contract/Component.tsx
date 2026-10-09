export default function FaqServiceContract() {
  return (
    <section className="bg-white text-zinc-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[1fr_2fr] lg:gap-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Working together
          </p>
          <h2 className="mt-5 text-4xl leading-tight font-semibold tracking-tight">
            Clear expectations
            <br />
            make better work.
          </h2>
          <div className="mt-7 rounded-xl bg-zinc-50 p-5">
            <p className="text-sm font-semibold">
              No surprises in the small print.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              Every project starts with a written scope, schedule and fee that
              we both agree on.
            </p>
          </div>
        </div>
        <div>
          <article className="border-t border-zinc-200 py-6">
            <h3 className="text-xl font-medium">How do you price a project?</h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              We use a fixed project fee based on the agreed scope. The proposal
              lists what is included, the number of review rounds and any
              third-party costs, so you can plan with confidence.
            </p>
          </article>
          <article className="border-t border-zinc-200 py-6">
            <h3 className="text-xl font-medium">
              What happens if the scope changes?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              We discuss the change before doing the work. You receive a short
              written estimate showing the effect on the fee and schedule.
              Nothing extra starts without your agreement.
            </p>
          </article>
          <article className="border-t border-zinc-200 py-6">
            <h3 className="text-xl font-medium">Who owns the finished work?</h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              Once the final invoice is paid, the agreed final deliverables are
              yours. We include editable files and a handover guide. Any
              licensed fonts or stock assets are identified in advance.
            </p>
          </article>
          <article className="border-y border-zinc-200 py-6">
            <h3 className="text-xl font-medium">
              Will you support us after launch?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              Every website includes 30 days of launch support. After that, we
              can arrange a maintenance plan or help your team manage things
              independently with training and clear documentation.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
