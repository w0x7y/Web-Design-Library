export default function TabsSegmentedPills() {
  return (
    <div className="group w-72 bg-white text-neutral-900 sm:w-80">
      <div role="radiogroup" aria-label="Message view" className="grid grid-cols-3 rounded-lg bg-neutral-100 p-1">
        <label id="tabs-segmented-pills-all-label" className="flex h-8 cursor-pointer items-center justify-center rounded-md border border-transparent text-sm text-neutral-600 transition-colors hover:text-neutral-900 has-[:checked]:border-neutral-200 has-[:checked]:bg-white has-[:checked]:font-medium has-[:checked]:text-neutral-900 has-[:checked]:shadow-sm has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900 forced-colors:has-[:checked]:border-[Highlight]">
          <input id="tabs-segmented-pills-all" type="radio" name="tabs-segmented-pills" aria-controls="tabs-segmented-pills-all-panel" defaultChecked className="sr-only focus-visible:outline-hidden" />
          All
        </label>
        <label id="tabs-segmented-pills-unread-label" className="flex h-8 cursor-pointer items-center justify-center rounded-md border border-transparent text-sm text-neutral-600 transition-colors hover:text-neutral-900 has-[:checked]:border-neutral-200 has-[:checked]:bg-white has-[:checked]:font-medium has-[:checked]:text-neutral-900 has-[:checked]:shadow-sm has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900 forced-colors:has-[:checked]:border-[Highlight]">
          <input id="tabs-segmented-pills-unread" type="radio" name="tabs-segmented-pills" aria-controls="tabs-segmented-pills-unread-panel" className="sr-only focus-visible:outline-hidden" />
          Unread
        </label>
        <label id="tabs-segmented-pills-saved-label" className="flex h-8 cursor-pointer items-center justify-center rounded-md border border-transparent text-sm text-neutral-600 transition-colors hover:text-neutral-900 has-[:checked]:border-neutral-200 has-[:checked]:bg-white has-[:checked]:font-medium has-[:checked]:text-neutral-900 has-[:checked]:shadow-sm has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900 forced-colors:has-[:checked]:border-[Highlight]">
          <input id="tabs-segmented-pills-saved" type="radio" name="tabs-segmented-pills" aria-controls="tabs-segmented-pills-saved-panel" className="sr-only focus-visible:outline-hidden" />
          Saved
        </label>
      </div>
      <section id="tabs-segmented-pills-all-panel" aria-labelledby="tabs-segmented-pills-all-label" className="mt-4 hidden group-has-[#tabs-segmented-pills-all:checked]:block">
        <ul role="list">
          <li className="flex h-14 items-center gap-3 border-b border-neutral-200 last:border-b-0">
            <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">AR</span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">Item title</p>
              <p className="truncate text-xs text-neutral-500">Supporting detail</p>
            </div>
            <span className="shrink-0 text-xs text-neutral-500">9:41</span>
          </li>
          <li className="flex h-14 items-center gap-3 border-b border-neutral-200 last:border-b-0">
            <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">JL</span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">Sender name</p>
              <p className="truncate text-xs text-neutral-500">Message preview</p>
            </div>
            <span className="shrink-0 text-xs text-neutral-500">8:20</span>
          </li>
          <li className="flex h-14 items-center gap-3 border-b border-neutral-200 last:border-b-0">
            <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">SK</span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">Saved item title</p>
              <p className="truncate text-xs text-neutral-500">Context for the item</p>
            </div>
            <span className="shrink-0 text-xs text-neutral-500">7:05</span>
          </li>
        </ul>
      </section>
      <section id="tabs-segmented-pills-unread-panel" aria-labelledby="tabs-segmented-pills-unread-label" className="mt-4 hidden group-has-[#tabs-segmented-pills-unread:checked]:block">
        <ul role="list">
          <li className="flex h-14 items-center gap-3 border-b border-neutral-200 last:border-b-0">
            <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">MC</span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">Unread item title</p>
              <p className="truncate text-xs text-neutral-500">Latest update</p>
            </div>
            <span className="shrink-0 text-xs text-neutral-500">9:12</span>
          </li>
          <li className="flex h-14 items-center gap-3 border-b border-neutral-200 last:border-b-0">
            <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">AT</span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">Contributor name</p>
              <p className="truncate text-xs text-neutral-500">New message</p>
            </div>
            <span className="shrink-0 text-xs text-neutral-500">8:45</span>
          </li>
          <li className="flex h-14 items-center gap-3 border-b border-neutral-200 last:border-b-0">
            <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">RP</span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">Thread title</p>
              <p className="truncate text-xs text-neutral-500">Reply preview</p>
            </div>
            <span className="shrink-0 text-xs text-neutral-500">8:03</span>
          </li>
        </ul>
      </section>
      <section id="tabs-segmented-pills-saved-panel" aria-labelledby="tabs-segmented-pills-saved-label" className="mt-4 hidden group-has-[#tabs-segmented-pills-saved:checked]:block">
        <ul role="list">
          <li className="flex h-14 items-center gap-3 border-b border-neutral-200 last:border-b-0">
            <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">AR</span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">Reference title</p>
              <p className="truncate text-xs text-neutral-500">Saved context</p>
            </div>
            <span className="shrink-0 text-xs text-neutral-500">Mar 14</span>
          </li>
          <li className="flex h-14 items-center gap-3 border-b border-neutral-200 last:border-b-0">
            <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">JL</span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">Document title</p>
              <p className="truncate text-xs text-neutral-500">Document summary</p>
            </div>
            <span className="shrink-0 text-xs text-neutral-500">Mar 12</span>
          </li>
          <li className="flex h-14 items-center gap-3 border-b border-neutral-200 last:border-b-0">
            <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">SK</span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">Resource title</p>
              <p className="truncate text-xs text-neutral-500">Resource description</p>
            </div>
            <span className="shrink-0 text-xs text-neutral-500">Mar 10</span>
          </li>
        </ul>
      </section>
    </div>
  )
}
