export default function DashboardLearningJournal() {
  return (
    <section className="bg-orange-50 px-6 py-10 text-orange-950 sm:px-12">
      <div className="mx-auto max-w-5xl">
        <header className="flex flex-wrap justify-between gap-4">
          <div className="grid gap-3">
            <p className="text-xs font-bold tracking-widest text-orange-800">
              FIELD SCHOOL / YOUR JOURNAL
            </p>
            <h2 className="text-4xl font-bold tracking-tight">
              Look how far you’ve come.
            </h2>
          </div>
          <span className="self-start rounded-full bg-orange-200 px-4 py-2 text-xs font-semibold">
            Week 3 of 4
          </span>
        </header>
        <div className="mt-8 grid gap-6 md:grid-cols-[1.3fr_1fr]">
          <article className="rounded-2xl border-2 border-orange-200 bg-white p-6">
            <span className="rounded-full bg-orange-100 px-3 py-1 text-[10px] font-bold">
              DRAWING THE EVERYDAY
            </span>
            <h2 className="mt-6 text-2xl font-bold">
              Light, shadow & a cup of tea.
            </h2>
            <p className="mt-4 text-sm leading-6 text-orange-900">
              Your next lesson is a 20-minute study in finding shape through
              light.
            </p>
            <div className="mt-6">
              <p className="text-xs font-semibold">6 of 8 lessons complete</p>
              <progress
                className="mt-3 h-3 w-full align-baseline accent-orange-800"
                max="8"
                value="6"
                aria-label="Course lesson progress"
              >
                75%
              </progress>
            </div>
            <button
              className="mt-6 rounded-full bg-orange-900 px-5 py-3 text-sm font-bold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950"
              type="button"
            >
              Continue learning
            </button>
          </article>
          <div className="grid gap-5">
            <article className="rounded-2xl bg-orange-200 p-6">
              <div className="grid gap-2 ">
                <p className="text-xs font-medium opacity-70">
                  This week’s practice
                </p>
                <p className="text-3xl font-semibold tracking-tight tabular-nums">
                  85 minutes
                </p>
                <p className="text-xs opacity-70">Your goal: 100 minutes</p>
              </div>
              <p className="mt-5 text-xs leading-5">
                One small session will get you there.
              </p>
            </article>
            <article className="rounded-2xl border-2 border-orange-200 p-6">
              <h2 className="text-lg font-bold">A habit taking shape</h2>
              <p className="mt-3 text-sm leading-6 text-orange-900">
                You’ve practiced on four days this week. Keep a pencil somewhere
                you can see it.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
