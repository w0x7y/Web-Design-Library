export default function ProfileCardPortraitSide() {
  return (
    <article className="w-72 rounded-lg border border-neutral-200 bg-white text-neutral-900 sm:w-[25rem]">
      <div className="grid h-56 grid-cols-[112px_minmax(0,1fr)] sm:grid-cols-[144px_minmax(0,1fr)]">
        <div role="img" aria-label="Image placeholder: Taylor Brooks portrait" className="flex items-center justify-center rounded-tl-lg bg-neutral-100 text-neutral-400"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-5-5L5 21" /></svg></div>
        <div className="p-4">
          <p className="text-sm font-medium text-neutral-500">Profile</p>
          <h2 className="mt-2 text-lg font-semibold">Taylor Brooks</h2>
          <p className="mt-1 text-sm text-neutral-500">Team lead</p>
          <p className="mt-3 text-sm text-neutral-600">Short biography and areas of focus.</p>
        </div>
      </div>
      <div className="border-t border-neutral-200 p-4">
        <p className="text-xs text-neutral-500">Current focus</p>
        <p className="mt-1 text-sm text-neutral-600">Short current project summary.</p>
        <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-2 inline-flex items-center gap-2 text-sm">View work <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="M5 12h14m-6-6 6 6-6 6" /></svg></a>
      </div>
    </article>
  )
}

