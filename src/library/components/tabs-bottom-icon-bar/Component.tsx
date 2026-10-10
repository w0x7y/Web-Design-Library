export default function TabsBottomIconBar() {
  return (
    <div className="group w-72 overflow-hidden rounded-lg border border-neutral-200 bg-white text-neutral-900 sm:w-80">
      <section id="tabs-bottom-icon-bar-overview-panel" aria-labelledby="tabs-bottom-icon-bar-overview-label" className="hidden p-4 group-has-[#tabs-bottom-icon-bar-overview:checked]:block">
        <h2 className="text-base font-semibold">Panel heading</h2>
        <p className="mt-1 text-sm text-neutral-500">Supporting context</p>
        <div role="img" aria-label="Image placeholder: overview screenshot" className="mt-4 flex aspect-video items-center justify-center rounded-lg bg-neutral-100 text-neutral-400">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-5-5L5 21" /></svg>
        </div>
      </section>
      <section id="tabs-bottom-icon-bar-activity-panel" aria-labelledby="tabs-bottom-icon-bar-activity-label" className="hidden p-4 group-has-[#tabs-bottom-icon-bar-activity:checked]:block">
        <h2 className="text-base font-semibold">Activity heading</h2>
        <p className="mt-1 text-sm text-neutral-500">Context for recent updates</p>
        <div role="img" aria-label="Image placeholder: activity screenshot" className="mt-4 flex aspect-video items-center justify-center rounded-lg bg-neutral-100 text-neutral-400">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-5-5L5 21" /></svg>
        </div>
      </section>
      <section id="tabs-bottom-icon-bar-library-panel" aria-labelledby="tabs-bottom-icon-bar-library-label" className="hidden p-4 group-has-[#tabs-bottom-icon-bar-library:checked]:block">
        <h2 className="text-base font-semibold">Collection heading</h2>
        <p className="mt-1 text-sm text-neutral-500">Context for the collection</p>
        <div role="img" aria-label="Image placeholder: library screenshot" className="mt-4 flex aspect-video items-center justify-center rounded-lg bg-neutral-100 text-neutral-400">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-5-5L5 21" /></svg>
        </div>
      </section>
      <section id="tabs-bottom-icon-bar-settings-panel" aria-labelledby="tabs-bottom-icon-bar-settings-label" className="hidden p-4 group-has-[#tabs-bottom-icon-bar-settings:checked]:block">
        <h2 className="text-base font-semibold">Setting heading</h2>
        <p className="mt-1 text-sm text-neutral-500">Context for preferences</p>
        <div role="img" aria-label="Image placeholder: settings screenshot" className="mt-4 flex aspect-video items-center justify-center rounded-lg bg-neutral-100 text-neutral-400">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-5-5L5 21" /></svg>
        </div>
      </section>
      <div role="radiogroup" aria-label="Preview view" className="grid grid-cols-4 border-t border-neutral-200">
        <label id="tabs-bottom-icon-bar-overview-label" className="flex h-14 cursor-pointer flex-col items-center justify-center gap-1 border-t-2 border-transparent text-xs text-neutral-500 transition-colors hover:text-neutral-900 has-[:checked]:border-neutral-900 has-[:checked]:font-medium has-[:checked]:text-neutral-900 has-[:focus-visible]:outline-2 has-[:focus-visible]:-outline-offset-2 has-[:focus-visible]:outline-neutral-900">
          <input id="tabs-bottom-icon-bar-overview" type="radio" name="tabs-bottom-icon-bar" aria-controls="tabs-bottom-icon-bar-overview-panel" defaultChecked className="sr-only focus-visible:outline-hidden" />
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>
          Overview
        </label>
        <label id="tabs-bottom-icon-bar-activity-label" className="flex h-14 cursor-pointer flex-col items-center justify-center gap-1 border-t-2 border-transparent text-xs text-neutral-500 transition-colors hover:text-neutral-900 has-[:checked]:border-neutral-900 has-[:checked]:font-medium has-[:checked]:text-neutral-900 has-[:focus-visible]:outline-2 has-[:focus-visible]:-outline-offset-2 has-[:focus-visible]:outline-neutral-900">
          <input id="tabs-bottom-icon-bar-activity" type="radio" name="tabs-bottom-icon-bar" aria-controls="tabs-bottom-icon-bar-activity-panel" className="sr-only focus-visible:outline-hidden" />
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5"><path d="M3 12h4l3-7 4 14 3-7h4" /></svg>
          Activity
        </label>
        <label id="tabs-bottom-icon-bar-library-label" className="flex h-14 cursor-pointer flex-col items-center justify-center gap-1 border-t-2 border-transparent text-xs text-neutral-500 transition-colors hover:text-neutral-900 has-[:checked]:border-neutral-900 has-[:checked]:font-medium has-[:checked]:text-neutral-900 has-[:focus-visible]:outline-2 has-[:focus-visible]:-outline-offset-2 has-[:focus-visible]:outline-neutral-900">
          <input id="tabs-bottom-icon-bar-library" type="radio" name="tabs-bottom-icon-bar" aria-controls="tabs-bottom-icon-bar-library-panel" className="sr-only focus-visible:outline-hidden" />
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5"><path d="M4 4h5v16H4zM10 4h5v16h-5zM16 5l4-1 3 15-4 1z" /></svg>
          Library
        </label>
        <label id="tabs-bottom-icon-bar-settings-label" className="flex h-14 cursor-pointer flex-col items-center justify-center gap-1 border-t-2 border-transparent text-xs text-neutral-500 transition-colors hover:text-neutral-900 has-[:checked]:border-neutral-900 has-[:checked]:font-medium has-[:checked]:text-neutral-900 has-[:focus-visible]:outline-2 has-[:focus-visible]:-outline-offset-2 has-[:focus-visible]:outline-neutral-900">
          <input id="tabs-bottom-icon-bar-settings" type="radio" name="tabs-bottom-icon-bar" aria-controls="tabs-bottom-icon-bar-settings-panel" className="sr-only focus-visible:outline-hidden" />
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5"><path d="M4 7h16M4 17h16" /><circle cx="9" cy="7" r="3" /><circle cx="15" cy="17" r="3" /></svg>
          Settings
        </label>
      </div>
    </div>
  )
}
