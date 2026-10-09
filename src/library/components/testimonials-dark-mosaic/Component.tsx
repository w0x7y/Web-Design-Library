export default function TestimonialsDarkMosaic() {
  return (
    <section className="bg-zinc-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-widest text-lime-300">
          From teams in the work
        </p>
        <h2 className="mt-4 text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
          Less friction.
          <br />
          More Friday launches.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-[1.2fr_1fr]">
          <figure className="flex flex-col justify-between rounded-2xl border border-zinc-700 border-t-4 border-t-lime-300 bg-zinc-900 p-6 sm:p-8">
            <blockquote className="text-2xl leading-relaxed font-medium tracking-tight sm:text-3xl">
              Our deploy checklist used to live in someone's head. Cinder made
              it visible, repeatable and safe enough for anyone on the team to
              ship.
            </blockquote>
            <figcaption className="mt-10 border-t border-zinc-700 pt-5">
              <p className="text-sm font-semibold">Nadia Tran</p>
              <p className="mt-1 text-xs text-zinc-400">
                Engineering lead / Waypoint
              </p>
            </figcaption>
          </figure>
          <div className="grid gap-5">
            <figure className="rounded-2xl border border-zinc-700 bg-zinc-900 p-6 sm:p-8">
              <blockquote className="text-xl leading-relaxed">
                The first tool we added this year that actually removed a
                meeting.
              </blockquote>
              <figcaption className="mt-6 text-xs text-zinc-400">
                <span className="font-semibold text-white">Owen Ellis</span>
                <br />
                Founder / Small Batch
              </figcaption>
            </figure>
            <figure className="rounded-2xl border border-zinc-700 bg-zinc-900 p-6 sm:p-8">
              <blockquote className="text-xl leading-relaxed">
                The logs tell us what happened. The rollback button lets us
                sleep. Both matter.
              </blockquote>
              <figcaption className="mt-6 text-xs text-zinc-400">
                <span className="font-semibold text-white">Priya Shah</span>
                <br />
                Staff engineer / Loop Labs
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
