export default function TabsIconSplitPanels() {
  return (
    <section className="group bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-neutral-500">Eyebrow for the capabilities</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading that names what the product helps people do</h2>
          <p className="mt-4 text-lg text-pretty text-neutral-600">A short introduction that frames the capabilities below and invites readers to pick the one they care about.</p>
        </div>
        <div className="-mx-6 mt-12 overflow-x-auto px-5 sm:mx-0 sm:px-0">
          <div role="radiogroup" aria-label="Capability" className="mx-auto flex w-max p-1">
            <label id="tabs-icon-split-panels-planning-label" className="relative flex w-24 cursor-pointer flex-col items-center gap-2 border-b-2 border-neutral-200 px-2 pt-2 pb-3 text-sm font-medium text-neutral-500 transition-colors hover:border-neutral-400 hover:text-neutral-900 has-[:checked]:border-neutral-900 has-[:checked]:text-neutral-900 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900 forced-colors:border-[Canvas] forced-colors:has-[:checked]:border-[CanvasText] sm:w-36">
              <input id="tabs-icon-split-panels-planning" type="radio" name="tabs-icon-split-panels" aria-controls="tabs-icon-split-panels-planning-panel" defaultChecked className="sr-only focus-visible:outline-hidden" />
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-6"><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
              Planning
            </label>
            <label id="tabs-icon-split-panels-sharing-label" className="relative flex w-24 cursor-pointer flex-col items-center gap-2 border-b-2 border-neutral-200 px-2 pt-2 pb-3 text-sm font-medium text-neutral-500 transition-colors hover:border-neutral-400 hover:text-neutral-900 has-[:checked]:border-neutral-900 has-[:checked]:text-neutral-900 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900 forced-colors:border-[Canvas] forced-colors:has-[:checked]:border-[CanvasText] sm:w-36">
              <input id="tabs-icon-split-panels-sharing" type="radio" name="tabs-icon-split-panels" aria-controls="tabs-icon-split-panels-sharing-panel" className="sr-only focus-visible:outline-hidden" />
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-6"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              Sharing
            </label>
            <label id="tabs-icon-split-panels-automation-label" className="relative flex w-24 cursor-pointer flex-col items-center gap-2 border-b-2 border-neutral-200 px-2 pt-2 pb-3 text-sm font-medium text-neutral-500 transition-colors hover:border-neutral-400 hover:text-neutral-900 has-[:checked]:border-neutral-900 has-[:checked]:text-neutral-900 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900 forced-colors:border-[Canvas] forced-colors:has-[:checked]:border-[CanvasText] sm:w-36">
              <input id="tabs-icon-split-panels-automation" type="radio" name="tabs-icon-split-panels" aria-controls="tabs-icon-split-panels-automation-panel" className="sr-only focus-visible:outline-hidden" />
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-6"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" /></svg>
              Automation
            </label>
            <label id="tabs-icon-split-panels-reports-label" className="relative flex w-24 cursor-pointer flex-col items-center gap-2 border-b-2 border-neutral-200 px-2 pt-2 pb-3 text-sm font-medium text-neutral-500 transition-colors hover:border-neutral-400 hover:text-neutral-900 has-[:checked]:border-neutral-900 has-[:checked]:text-neutral-900 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900 forced-colors:border-[Canvas] forced-colors:has-[:checked]:border-[CanvasText] sm:w-36">
              <input id="tabs-icon-split-panels-reports" type="radio" name="tabs-icon-split-panels" aria-controls="tabs-icon-split-panels-reports-panel" className="sr-only focus-visible:outline-hidden" />
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-6"><path d="M3 3v18h18" /><path d="M18 17V9M13 17V5M8 17v-3" /></svg>
              Reports
            </label>
          </div>
        </div>
        <section id="tabs-icon-split-panels-planning-panel" aria-labelledby="tabs-icon-split-panels-planning-label" className="mt-12 hidden items-center gap-8 group-has-[#tabs-icon-split-panels-planning:checked]:grid lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-balance">Headline that names the planning outcome</h3>
            <p className="mt-4 text-base text-pretty text-neutral-600">Describe how this capability helps people plan their work. Add one detail that shows why it is easier than the usual approach.</p>
            <ul role="list" className="mt-6 grid gap-3 text-base text-neutral-600">
              <li className="flex items-start gap-3">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 size-5 shrink-0 text-neutral-900"><path d="M5 12l4 4L19 6" /></svg>
                <span>Name the essential planning step</span>
              </li>
              <li className="flex items-start gap-3">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 size-5 shrink-0 text-neutral-900"><path d="M5 12l4 4L19 6" /></svg>
                <span>Describe the supporting detail</span>
              </li>
              <li className="flex items-start gap-3">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 size-5 shrink-0 text-neutral-900"><path d="M5 12l4 4L19 6" /></svg>
                <span>State the practical result</span>
              </li>
            </ul>
            <div className="mt-6">
              <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Explore planning</a>
            </div>
          </div>
          <div role="img" aria-label="Image placeholder: planning view screenshot" className="flex aspect-[4/3] items-center justify-center rounded-lg bg-neutral-100 text-neutral-400">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-5-5L5 21" /></svg>
          </div>
        </section>
        <section id="tabs-icon-split-panels-sharing-panel" aria-labelledby="tabs-icon-split-panels-sharing-label" className="mt-12 hidden items-center gap-8 group-has-[#tabs-icon-split-panels-sharing:checked]:grid lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-balance">Headline that names the sharing outcome</h3>
            <p className="mt-4 text-base text-pretty text-neutral-600">Explain who can see and edit shared work. Add one detail about how people stay in step without extra meetings.</p>
            <ul role="list" className="mt-6 grid gap-3 text-base text-neutral-600">
              <li className="flex items-start gap-3">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 size-5 shrink-0 text-neutral-900"><path d="M5 12l4 4L19 6" /></svg>
                <span>Name who work is shared with</span>
              </li>
              <li className="flex items-start gap-3">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 size-5 shrink-0 text-neutral-900"><path d="M5 12l4 4L19 6" /></svg>
                <span>Describe how access is controlled</span>
              </li>
              <li className="flex items-start gap-3">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 size-5 shrink-0 text-neutral-900"><path d="M5 12l4 4L19 6" /></svg>
                <span>State what changes for the team</span>
              </li>
            </ul>
            <div className="mt-6">
              <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Explore sharing</a>
            </div>
          </div>
          <div role="img" aria-label="Image placeholder: shared workspace screenshot" className="flex aspect-[4/3] items-center justify-center rounded-lg bg-neutral-100 text-neutral-400">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-5-5L5 21" /></svg>
          </div>
        </section>
        <section id="tabs-icon-split-panels-automation-panel" aria-labelledby="tabs-icon-split-panels-automation-label" className="mt-12 hidden items-center gap-8 group-has-[#tabs-icon-split-panels-automation:checked]:grid lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-balance">Headline that names the automation outcome</h3>
            <p className="mt-4 text-base text-pretty text-neutral-600">Describe the repetitive work this capability takes over. Add one detail about how people stay in control of each rule.</p>
            <ul role="list" className="mt-6 grid gap-3 text-base text-neutral-600">
              <li className="flex items-start gap-3">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 size-5 shrink-0 text-neutral-900"><path d="M5 12l4 4L19 6" /></svg>
                <span>Name the task that runs on its own</span>
              </li>
              <li className="flex items-start gap-3">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 size-5 shrink-0 text-neutral-900"><path d="M5 12l4 4L19 6" /></svg>
                <span>Describe what triggers it</span>
              </li>
              <li className="flex items-start gap-3">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 size-5 shrink-0 text-neutral-900"><path d="M5 12l4 4L19 6" /></svg>
                <span>State the time it saves</span>
              </li>
            </ul>
            <div className="mt-6">
              <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Explore automation</a>
            </div>
          </div>
          <div role="img" aria-label="Image placeholder: automation rule screenshot" className="flex aspect-[4/3] items-center justify-center rounded-lg bg-neutral-100 text-neutral-400">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-5-5L5 21" /></svg>
          </div>
        </section>
        <section id="tabs-icon-split-panels-reports-panel" aria-labelledby="tabs-icon-split-panels-reports-label" className="mt-12 hidden items-center gap-8 group-has-[#tabs-icon-split-panels-reports:checked]:grid lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-balance">Headline that names the reporting outcome</h3>
            <p className="mt-4 text-base text-pretty text-neutral-600">Explain which numbers the reports show and who reads them. Add one detail about how often they update.</p>
            <ul role="list" className="mt-6 grid gap-3 text-base text-neutral-600">
              <li className="flex items-start gap-3">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 size-5 shrink-0 text-neutral-900"><path d="M5 12l4 4L19 6" /></svg>
                <span>Name the key measure</span>
              </li>
              <li className="flex items-start gap-3">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 size-5 shrink-0 text-neutral-900"><path d="M5 12l4 4L19 6" /></svg>
                <span>Describe how results are grouped</span>
              </li>
              <li className="flex items-start gap-3">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 size-5 shrink-0 text-neutral-900"><path d="M5 12l4 4L19 6" /></svg>
                <span>State the decision it supports</span>
              </li>
            </ul>
            <div className="mt-6">
              <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Explore reports</a>
            </div>
          </div>
          <div role="img" aria-label="Image placeholder: report dashboard screenshot" className="flex aspect-[4/3] items-center justify-center rounded-lg bg-neutral-100 text-neutral-400">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-5-5L5 21" /></svg>
          </div>
        </section>
      </div>
    </section>
  )
}
