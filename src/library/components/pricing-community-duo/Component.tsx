export default function PricingCommunityDuo() {
  return (
    <section className="bg-violet-50 text-violet-950">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-violet-700">
            The Make Room community
          </p>
          <h2 className="mt-4 text-4xl leading-tight font-bold tracking-tight sm:text-5xl">
            There is room for you.
          </h2>
          <p className="mt-5 text-violet-900">
            Come for the ideas. Stay for the people. Pick the membership that
            fits your week.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-violet-200 bg-violet-100 p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-violet-700">
              Pull up a chair
            </p>
            <h3 className="mt-4 text-3xl font-bold">Neighbor</h3>
            <p className="mt-4 text-5xl font-bold tracking-tight">Free</p>
            <p className="mt-3 text-sm text-violet-900">
              A friendly place to start making.
            </p>
            <ul role="list" className="my-8 space-y-4 text-sm">
              <li>Monthly open studio session</li>
              <li>Community discussion boards</li>
              <li>A weekly note full of good ideas</li>
              <li>Access to member project showcases</li>
            </ul>
            <a
              href="#"
              className="flex min-h-12 items-center justify-center rounded-full border border-violet-950 px-5 font-semibold hover:bg-violet-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            >
              Join as a Neighbor
            </a>
          </article>
          <article className="rounded-3xl bg-violet-950 p-6 text-white sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-lime-200">
              Help keep the lights on
            </p>
            <h3 className="mt-4 text-3xl font-bold">Regular</h3>
            <div className="mt-4 flex flex-wrap items-end gap-2">
              <p className="text-5xl font-bold tracking-tight">$12</p>
              <p className="pb-1 text-sm text-violet-200">per month</p>
            </div>
            <p className="mt-3 text-sm text-violet-200">
              More time together, more things to try.
            </p>
            <ul role="list" className="my-8 space-y-4 text-sm text-violet-100">
              <li>Everything in Neighbor</li>
              <li>Weekly small-group making sessions</li>
              <li>Workshop recordings and templates</li>
              <li>A say in next month's program</li>
            </ul>
            <a
              href="#"
              className="flex min-h-12 items-center justify-center rounded-full bg-lime-200 px-5 font-semibold text-violet-950 hover:bg-lime-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Become a Regular
            </a>
          </article>
        </div>
        <p className="mt-7 text-center text-xs text-violet-900">
          Need a supported membership? We reserve places every month. Everyone
          is welcome.
        </p>
      </div>
    </section>
  )
}
