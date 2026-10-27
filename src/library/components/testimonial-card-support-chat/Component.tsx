export default function TestimonialCardSupportChat() {
  return (
    <figure className="w-72 rounded-lg border border-neutral-200 bg-white p-5 text-neutral-900 sm:w-96 sm:p-6">
      <figcaption className="flex items-center gap-3">
        <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">AR</span>
        <div>
          <p className="text-sm font-semibold">Alex Rivera</p>
          <p className="text-xs text-neutral-500">Chat with support · <time dateTime="2026-03-14">Mar 14</time></p>
        </div>
      </figcaption>
      <ol role="list" aria-label="Conversation excerpt" className="mt-5 flex flex-col gap-3 text-sm">
        <li className="flex pr-8">
          <p className="rounded-lg rounded-bl-none border border-transparent bg-neutral-100 px-3 py-2 text-pretty"><span className="sr-only">Alex Rivera: </span>Customer question about the step they got stuck on</p>
        </li>
        <li className="flex justify-end pl-8">
          <p className="rounded-lg rounded-br-none border border-transparent bg-neutral-900 px-3 py-2 text-pretty text-white"><span className="sr-only">Support agent: </span>Support reply that walks through the fix in two steps</p>
        </li>
        <li className="flex pr-8">
          <p className="rounded-lg rounded-bl-none border border-transparent bg-neutral-100 px-3 py-2 text-pretty"><span className="sr-only">Alex Rivera: </span>Praise for how fast and clearly it was solved</p>
        </li>
      </ol>
      <div className="mt-5 flex items-center justify-between gap-3 border-t border-neutral-200 pt-4 text-xs text-neutral-500">
        <p className="flex items-center gap-1.5"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><circle cx="12" cy="12" r="9" /><path d="m8.5 12 2.5 2.5 4.5-5" /></svg>Resolved in 6 minutes</p>
        <p>Rated 5/5</p>
      </div>
    </figure>
  )
}
