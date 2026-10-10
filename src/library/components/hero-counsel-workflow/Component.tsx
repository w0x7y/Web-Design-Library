// Fonts: IBM Plex Sans (https://fonts.google.com/specimen/IBM+Plex+Sans)
export default function HeroCounselWorkflow() {
  return (
    <section className="bg-slate-900 text-white font-['IBM_Plex_Sans',ui-sans-serif,system-ui,sans-serif]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-xl font-semibold">Clauseway <span className="text-sm font-normal text-slate-300">/ Legal operations</span></p>
        <div className="mt-12 grid items-center gap-12 lg:grid-cols-[2fr_1fr]">
          <div>
            <h1 className="text-[2.5rem] leading-[1.1] font-semibold tracking-tight sm:text-[4rem]">Every contract.<br />A clear next step.</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">Give sales a place to ask, counsel a place to review and everyone a way to see who has the pen. Without another status meeting.</p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <a href="#" className="inline-flex min-h-12 items-center rounded bg-teal-300 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-teal-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300">Walk through Clauseway</a>
              <a href="#" className="text-sm underline underline-offset-4 hover:text-teal-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300">See the review workspace</a>
            </div>
          </div>
          <aside className="border-l border-teal-300 pl-6">
            <p className="text-2xl leading-tight text-teal-300">The handoff is the hard part.</p>
            <p className="mt-4 text-base leading-relaxed text-slate-300">We keep the request, document and decision together, from first draft to signed copy.</p>
            <p className="mt-6 text-xs text-slate-300">Built for lean in-house teams.</p>
          </aside>
        </div>
        <div className="mt-16 flex flex-wrap justify-between gap-4 text-xs text-slate-300">
          <h2>Your standard NDA, without the chase</h2>
          <p>One request. Four visible steps.</p>
        </div>
        <ol role="list" className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <li className="border-t border-slate-600 pt-5">
            <p className="text-xs text-slate-300">01 / Intake</p>
            <h3 className="mt-4 text-xl font-semibold">Ask once</h3>
            <p className="mt-2 text-sm text-slate-300">Maya, Account team</p>
            <p className="mt-6 text-xs text-teal-300">Request received</p>
          </li>
          <li className="border-t border-slate-600 pt-5">
            <p className="text-xs text-slate-300">02 / Review</p>
            <h3 className="mt-4 text-xl font-semibold">Keep context</h3>
            <p className="mt-2 text-sm text-slate-300">Alex, Legal counsel</p>
            <p className="mt-6 text-xs text-teal-300">Changes resolved</p>
          </li>
          <li className="border-t border-slate-600 pt-5">
            <p className="text-xs text-slate-300">03 / Approval</p>
            <h3 className="mt-4 text-xl font-semibold">Know the owner</h3>
            <p className="mt-2 text-sm text-slate-300">Rae, Finance lead</p>
            <p className="mt-6 text-xs text-teal-300">Ready to sign</p>
          </li>
          <li className="border-t border-slate-600 pt-5">
            <p className="text-xs text-slate-300">04 / Archive</p>
            <h3 className="mt-4 text-xl font-semibold">Find it again</h3>
            <p className="mt-2 text-sm text-slate-300">Your shared repository</p>
            <p className="mt-6 text-xs text-teal-300">Signed and searchable</p>
          </li>
        </ol>
      </div>
    </section>
  )
}
