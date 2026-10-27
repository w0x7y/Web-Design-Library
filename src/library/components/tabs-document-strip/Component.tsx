export default function TabsDocumentStrip() {
  return (
    <div className="group w-72 overflow-hidden rounded-lg border border-neutral-200 bg-white text-neutral-900 sm:w-[36rem]">
      <div className="flex items-end bg-neutral-100 pr-2">
        <div role="group" aria-label="Open documents" className="flex min-w-0 items-end gap-1 overflow-x-auto px-2 pt-2 [scrollbar-width:none]">
          <div className="flex h-9 shrink-0 items-center gap-1 rounded-t-md pr-1.5 text-sm text-neutral-600 transition-colors hover:bg-neutral-200/50 hover:text-neutral-900 has-[:checked]:bg-white has-[:checked]:text-neutral-900 has-[input:focus-visible]:outline-2 has-[input:focus-visible]:-outline-offset-2 has-[input:focus-visible]:outline-neutral-900 forced-colors:has-[:checked]:border forced-colors:has-[:checked]:border-b-0">
            <label id="tabs-document-strip-brief-label" className="relative flex min-w-0 cursor-pointer items-center gap-2 self-stretch pl-3">
              <input id="tabs-document-strip-brief" type="radio" name="tabs-document-strip" aria-controls="tabs-document-strip-brief-panel" defaultChecked className="sr-only focus-visible:outline-hidden" />
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5M9 13h6M9 17h6" /></svg>
              <span className="max-w-28 truncate">Project brief</span>
            </label>
            <button type="button" aria-label="Close Project brief" className="flex size-6 shrink-0 items-center justify-center rounded-md text-neutral-500 transition-colors hover:bg-neutral-200 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="M18 6 6 18M6 6l12 12" /></svg>
            </button>
          </div>
          <div className="flex h-9 shrink-0 items-center gap-1 rounded-t-md pr-1.5 text-sm text-neutral-600 transition-colors hover:bg-neutral-200/50 hover:text-neutral-900 has-[:checked]:bg-white has-[:checked]:text-neutral-900 has-[input:focus-visible]:outline-2 has-[input:focus-visible]:-outline-offset-2 has-[input:focus-visible]:outline-neutral-900 forced-colors:has-[:checked]:border forced-colors:has-[:checked]:border-b-0">
            <label id="tabs-document-strip-notes-label" className="relative flex min-w-0 cursor-pointer items-center gap-2 self-stretch pl-3">
              <input id="tabs-document-strip-notes" type="radio" name="tabs-document-strip" aria-controls="tabs-document-strip-notes-panel" className="sr-only focus-visible:outline-hidden" />
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5M9 13h6M9 17h6" /></svg>
              <span className="max-w-28 truncate">Meeting notes</span>
            </label>
            <button type="button" aria-label="Close Meeting notes" className="flex size-6 shrink-0 items-center justify-center rounded-md text-neutral-500 transition-colors hover:bg-neutral-200 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="M18 6 6 18M6 6l12 12" /></svg>
            </button>
          </div>
          <div className="flex h-9 shrink-0 items-center gap-1 rounded-t-md pr-1.5 text-sm text-neutral-600 transition-colors hover:bg-neutral-200/50 hover:text-neutral-900 has-[:checked]:bg-white has-[:checked]:text-neutral-900 has-[input:focus-visible]:outline-2 has-[input:focus-visible]:-outline-offset-2 has-[input:focus-visible]:outline-neutral-900 forced-colors:has-[:checked]:border forced-colors:has-[:checked]:border-b-0">
            <label id="tabs-document-strip-plan-label" className="relative flex min-w-0 cursor-pointer items-center gap-2 self-stretch pl-3">
              <input id="tabs-document-strip-plan" type="radio" name="tabs-document-strip" aria-controls="tabs-document-strip-plan-panel" className="sr-only focus-visible:outline-hidden" />
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5M9 13h6M9 17h6" /></svg>
              <span className="max-w-28 truncate">Launch plan</span>
            </label>
            <button type="button" aria-label="Close Launch plan" className="flex size-6 shrink-0 items-center justify-center rounded-md text-neutral-500 transition-colors hover:bg-neutral-200 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="M18 6 6 18M6 6l12 12" /></svg>
            </button>
          </div>
        </div>
        <button type="button" aria-label="New document" className="mb-0.5 ml-1 flex size-8 shrink-0 items-center justify-center rounded-md text-neutral-600 transition-colors hover:bg-neutral-200 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="M12 5v14M5 12h14" /></svg>
        </button>
      </div>
      <section id="tabs-document-strip-brief-panel" aria-labelledby="tabs-document-strip-brief-label" className="hidden p-5 group-has-[#tabs-document-strip-brief:checked]:block sm:p-6">
        <h2 className="text-lg font-semibold">Project brief</h2>
        <p className="mt-1 text-sm text-neutral-500">Edited 2 hours ago by Alex Rivera</p>
        <p className="mt-4 text-sm text-pretty text-neutral-600">Opening paragraph that states what the document covers, who it is for and the decision it supports.</p>
        <p className="mt-3 text-sm text-pretty text-neutral-600">Supporting paragraph with the details, constraints and open questions a reader needs before the next step.</p>
      </section>
      <section id="tabs-document-strip-notes-panel" aria-labelledby="tabs-document-strip-notes-label" className="hidden p-5 group-has-[#tabs-document-strip-notes:checked]:block sm:p-6">
        <h2 className="text-lg font-semibold">Meeting notes</h2>
        <p className="mt-1 text-sm text-neutral-500">Edited yesterday by Jordan Lee</p>
        <p className="mt-4 text-sm text-pretty text-neutral-600">Summary of what was discussed, in the order the topics came up, with the people involved.</p>
        <p className="mt-3 text-sm text-pretty text-neutral-600">Decisions and follow-up actions, each with an owner and a date so progress is easy to check.</p>
      </section>
      <section id="tabs-document-strip-plan-panel" aria-labelledby="tabs-document-strip-plan-label" className="hidden p-5 group-has-[#tabs-document-strip-plan:checked]:block sm:p-6">
        <h2 className="text-lg font-semibold">Launch plan</h2>
        <p className="mt-1 text-sm text-neutral-500">Edited Oct 24 by Sam Kim</p>
        <p className="mt-4 text-sm text-pretty text-neutral-600">Overview of the milestones, the order they happen in and what must be ready before each one.</p>
        <p className="mt-3 text-sm text-pretty text-neutral-600">Risks and fallback steps for each milestone, with the person to contact when something slips.</p>
      </section>
    </div>
  )
}
