export default function TestimonialsCaseStudy() {
  return (
    <section className="bg-slate-50 text-slate-950">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 lg:grid-cols-2 lg:gap-16">
        <figure className="rounded-2xl bg-blue-950 p-6 text-white sm:p-10">
          <span
            aria-hidden="true"
            className="font-serif text-6xl leading-none text-sky-300"
          >
            “
          </span>
          <blockquote className="mt-3 text-2xl leading-relaxed font-medium tracking-tight sm:text-3xl">
            We used to find out a project was late when it was already late. Now
            we can see the risk early enough to do something about it.
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-3">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-blue-800 text-xs font-semibold">
              LM
            </span>
            <div>
              <p className="text-sm font-semibold">Leah Morgan</p>
              <p className="mt-1 text-xs text-blue-200">
                Operations director, Northstar Studio
              </p>
            </div>
          </figcaption>
        </figure>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">
            Customer story / Northstar
          </p>
          <h2 className="mt-4 text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
            A clearer view for
            <br />a growing studio.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-slate-600">
            Northstar brought 42 people and six client teams into one shared
            project view. Here is what changed in their first quarter.
          </p>
          <dl className="mt-7">
            <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1 border-t border-slate-200 py-5">
              <dt className="order-last text-sm text-slate-600">
                fewer project status meetings
              </dt>
              <dd className="order-first text-4xl font-semibold tracking-tight text-blue-700">
                32%
              </dd>
            </div>
            <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1 border-t border-slate-200 py-5">
              <dt className="order-last text-sm text-slate-600">
                saved per project lead each week
              </dt>
              <dd className="order-first text-4xl font-semibold tracking-tight text-blue-700">
                6 hrs
              </dd>
            </div>
            <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1 border-y border-slate-200 py-5">
              <dt className="order-last text-sm text-slate-600">
                of projects delivered on schedule
              </dt>
              <dd className="order-first text-4xl font-semibold tracking-tight text-blue-700">
                94%
              </dd>
            </div>
          </dl>
          <a
            href="#"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
          >
            Read the Northstar story{' '}
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4"
            >
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
