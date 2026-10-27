export default function DropdownsNotificationPanel() {
  return (
    <div className="relative h-96 w-72 text-neutral-900 sm:h-[21rem] sm:w-96">
      <details open className="group">
        <summary className="relative ml-auto flex size-11 cursor-pointer list-none items-center justify-center rounded-md transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
          <span className="sr-only">Notifications, 2 unread</span>
          <span aria-hidden="true" className="absolute top-2.5 right-2.5 size-2 rounded-full bg-neutral-900 ring-2 ring-white forced-colors:bg-[CanvasText]" />
        </summary>
        <div className="absolute top-11 right-0 mt-2 w-full rounded-lg border border-neutral-200 bg-white shadow-lg">
          <div className="flex items-center justify-between gap-4 border-b border-neutral-200 px-4 py-3">
            <h2 className="text-sm font-semibold">Notifications</h2>
            <button type="button" className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Mark all as read</button>
          </div>
          <ul role="list" className="divide-y divide-neutral-200">
            {[
              { initials: 'AR', name: 'Alex Rivera', action: 'replied to your comment', item: 'Item title', time: '5 min ago', dateTime: '2026-10-26T09:55', unread: true },
              { initials: 'SL', name: 'Sam Lee', action: 'assigned you a task', item: 'Project name', time: '1 hour ago', dateTime: '2026-10-26T09:00', unread: true },
              { initials: 'JK', name: 'Jordan Kim', action: 'shared a document', item: 'Folder name', time: 'Yesterday', dateTime: '2026-10-25', unread: false },
            ].map((notification) => (
              <li key={notification.initials}>
                <a href="#" className="flex gap-3 px-4 py-3 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-neutral-900">
                  <span aria-hidden="true" className="flex size-8 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-xs font-medium text-neutral-600">{notification.initials}</span>
                  <span className="min-w-0 flex-1">
                    {notification.unread && <span className="sr-only">Unread: </span>}
                    <span className="block text-sm text-neutral-600"><span className="font-semibold text-neutral-900">{notification.name}</span> {notification.action}</span>
                    <span className="mt-0.5 block text-xs text-neutral-500">{notification.item} · <time dateTime={notification.dateTime}>{notification.time}</time></span>
                  </span>
                  {notification.unread && <span aria-hidden="true" className="mt-1.5 size-2 shrink-0 rounded-full bg-neutral-900 forced-colors:bg-[CanvasText]" />}
                </a>
              </li>
            ))}
          </ul>
          <div className="rounded-b-lg border-t border-neutral-200 bg-neutral-50 px-4 py-3 text-center">
            <a href="#" className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">View all notifications</a>
          </div>
        </div>
      </details>
    </div>
  )
}
