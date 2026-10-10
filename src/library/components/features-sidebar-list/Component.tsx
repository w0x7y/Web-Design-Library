export default function FeaturesSidebarList() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:py-24 lg:grid-cols-[1fr_2fr] lg:gap-20">
        <div className="self-start lg:sticky lg:top-8">
          <p className="text-sm font-medium text-neutral-500">Eyebrow for the process</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading that explains the stages</h2>
          <p className="mt-4 max-w-sm text-lg text-pretty text-neutral-600">A short introduction that connects these stages to the result readers need.</p>
          <div className="mt-8">
            <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Explore the process</a>
          </div>
        </div>
        <ol role="list">
          <li className="grid grid-cols-[2rem_1fr] gap-6 border-t border-neutral-200 py-8 last:border-b">
            <span className="font-mono text-sm text-neutral-500">01</span>
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-balance">Title for the initial assessment</h3>
              <p className="mt-3 max-w-xl text-base text-pretty text-neutral-600">Describe the information readers gather at the start. Explain how it sets the scope for the steps that follow.</p>
              <p className="mt-4 text-sm text-neutral-500">Deliverables: scope, requirements and next steps</p>
            </div>
          </li>
          <li className="grid grid-cols-[2rem_1fr] gap-6 border-t border-neutral-200 py-8 last:border-b">
            <span className="font-mono text-sm text-neutral-500">02</span>
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-balance">Title for the proposed approach</h3>
              <p className="mt-3 max-w-xl text-base text-pretty text-neutral-600">Explain how the approach takes shape from the initial information. Identify the decision readers make before moving forward.</p>
              <p className="mt-4 text-sm text-neutral-500">Deliverables: outline, options and recommendation</p>
            </div>
          </li>
          <li className="grid grid-cols-[2rem_1fr] gap-6 border-t border-neutral-200 py-8 last:border-b">
            <span className="font-mono text-sm text-neutral-500">03</span>
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-balance">Title for the main work</h3>
              <p className="mt-3 max-w-xl text-base text-pretty text-neutral-600">Describe the main work and the checkpoints along the way. Say what readers can review as each part is completed.</p>
              <p className="mt-4 text-sm text-neutral-500">Deliverables: draft, review notes and revisions</p>
            </div>
          </li>
          <li className="grid grid-cols-[2rem_1fr] gap-6 border-t border-neutral-200 py-8 last:border-b">
            <span className="font-mono text-sm text-neutral-500">04</span>
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-balance">Title for the final handover</h3>
              <p className="mt-3 max-w-xl text-base text-pretty text-neutral-600">Explain what readers receive at the end of the process. Include the follow-up that helps them use the result.</p>
              <p className="mt-4 text-sm text-neutral-500">Deliverables: final result, guide and follow-up</p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  )
}
