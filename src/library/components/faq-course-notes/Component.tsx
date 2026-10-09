export default function FaqCourseNotes() {
  return (
    <section className="bg-amber-50 text-stone-950">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-widest text-orange-800">
          Before the first lesson
        </p>
        <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
          A few useful things to know.
        </h2>
        <div className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
          <article className="border-t border-stone-300 pt-5">
            <p className="font-mono text-xs text-orange-800">01</p>
            <h3 className="mt-3 text-xl font-medium">
              Do I need design experience?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-stone-600">
              No. The course begins with observation and simple exercises. If
              you already design for work, it is a chance to revisit the
              foundations with a fresh eye.
            </p>
          </article>
          <article className="border-t border-stone-300 pt-5">
            <p className="font-mono text-xs text-orange-800">02</p>
            <h3 className="mt-3 text-xl font-medium">
              How much time should I set aside?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-stone-600">
              About three hours each week. There is a 75-minute live session, a
              short reading and one practical exercise. You can work at your own
              pace between classes.
            </p>
          </article>
          <article className="border-t border-stone-300 pt-5">
            <p className="font-mono text-xs text-orange-800">03</p>
            <h3 className="mt-3 text-xl font-medium">
              What if I miss a live session?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-stone-600">
              Every session is recorded and shared the following morning. You
              keep access to recordings and course materials for twelve months.
            </p>
          </article>
          <article className="border-t border-stone-300 pt-5">
            <p className="font-mono text-xs text-orange-800">04</p>
            <h3 className="mt-3 text-xl font-medium">
              Which tools will I need?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-stone-600">
              A notebook, a phone camera and a free Figma account. We send a
              short setup guide the week before class begins, with time to ask
              for help.
            </p>
          </article>
        </div>
        <p className="mt-10 border-t border-stone-300 pt-6 text-sm text-stone-600">
          Something else on your mind?{' '}
          <a
            href="#"
            className="text-stone-950 underline underline-offset-4 hover:text-orange-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
          >
            Write to the school
          </a>
        </p>
      </div>
    </section>
  )
}
