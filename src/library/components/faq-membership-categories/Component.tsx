export default function FaqMembershipCategories() {
  return (
    <section className="bg-violet-50 text-violet-950">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-violet-700">
            Good questions are welcome
          </p>
          <h2 className="mt-4 text-4xl leading-tight font-bold tracking-tight sm:text-5xl">
            Before you pull up a chair.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-violet-100 p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-wider text-violet-700">
              The first hello
            </p>
            <h3 className="mt-3 text-2xl font-bold">Joining Make Room</h3>
            <details className="group mt-5 border-b border-violet-200">
              <summary className="flex cursor-pointer list-none justify-between gap-4 py-5 font-semibold hover:text-violet-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-950 [&::-webkit-details-marker]:hidden">
                Is this for professional makers?
                <span
                  aria-hidden="true"
                  className="shrink-0 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="pb-5 text-sm leading-relaxed">
                It is for anyone who wants to make something. Complete beginners
                and people who have been making for years share the same table.
              </p>
            </details>
            <details className="group border-b border-violet-200">
              <summary className="flex cursor-pointer list-none justify-between gap-4 py-5 font-semibold hover:text-violet-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-950 [&::-webkit-details-marker]:hidden">
                Can I try a session first?
                <span
                  aria-hidden="true"
                  className="shrink-0 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="pb-5 text-sm leading-relaxed">
                Yes. Our monthly open studio is free to attend. Bring a project,
                a question or just yourself. We will make introductions.
              </p>
            </details>
          </div>
          <div className="rounded-3xl bg-lime-100 p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-wider text-violet-700">
              Once you are here
            </p>
            <h3 className="mt-3 text-2xl font-bold">Making it work for you</h3>
            <details className="group mt-5 border-b border-violet-200">
              <summary className="flex cursor-pointer list-none justify-between gap-4 py-5 font-semibold hover:text-violet-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-950 [&::-webkit-details-marker]:hidden">
                What if I cannot attend every week?
                <span
                  aria-hidden="true"
                  className="shrink-0 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="pb-5 text-sm leading-relaxed">
                There is no attendance requirement. Join when it fits your life.
                Regular members can watch workshop recordings at any time.
              </p>
            </details>
            <details className="group border-b border-violet-200">
              <summary className="flex cursor-pointer list-none justify-between gap-4 py-5 font-semibold hover:text-violet-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-950 [&::-webkit-details-marker]:hidden">
                Can I pause my membership?
                <span
                  aria-hidden="true"
                  className="shrink-0 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="pb-5 text-sm leading-relaxed">
                You can pause for up to three months or cancel renewal anytime.
                Your member profile and saved projects stay ready for your
                return.
              </p>
            </details>
          </div>
        </div>
        <p className="mt-7 text-center text-sm">
          Still wondering?{' '}
          <a
            href="#"
            className="font-semibold underline underline-offset-4 hover:text-violet-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
          >
            Say hello to our hosts
          </a>
        </p>
      </div>
    </section>
  )
}
