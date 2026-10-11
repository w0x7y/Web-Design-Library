export default function DashboardTileBoard() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Board title</h1>
          <p className="text-sm text-neutral-500">Updated <time dateTime="2026-10-10T09:41:00Z">09:41</time></p>
        </header>
        <dl className="mt-6 flex flex-wrap gap-x-6 gap-y-3 border-y border-neutral-200 py-4">
          <div className="flex items-center gap-2">
            <span aria-hidden="true" className="size-3 rounded-md border border-neutral-900 bg-neutral-900" />
            <dt className="text-sm text-neutral-600">Active</dt>
            <dd className="text-sm font-semibold">6</dd>
          </div>
          <div className="flex items-center gap-2">
            <span aria-hidden="true" className="size-3 rounded-md border border-neutral-300" />
            <dt className="text-sm text-neutral-600">Idle</dt>
            <dd className="text-sm font-semibold">3</dd>
          </div>
          <div className="flex items-center gap-2">
            <span aria-hidden="true" className="size-3 rounded-md border border-dashed border-neutral-300" />
            <dt className="text-sm text-neutral-600">Offline</dt>
            <dd className="text-sm font-semibold">3</dd>
          </div>
          <div className="flex items-center gap-2">
            <span aria-hidden="true" className="size-3 rounded-md border border-transparent" />
            <dt className="text-sm text-neutral-600">Total</dt>
            <dd className="text-sm font-semibold">12</dd>
          </div>
        </dl>
        <ul role="list" className="mt-6 grid auto-rows-fr grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
          <li className="min-w-0">
            <a href="#" className="block h-full min-w-0 rounded-lg border p-3 transition-colors hover:border-neutral-600 border-neutral-900 bg-neutral-900 text-white forced-colors:border-[ButtonText] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
              <p className="text-xs opacity-75">ID 01</p>
              <h2 className="mt-2 break-words text-sm font-semibold">Item label</h2>
              <p className="mt-3 text-xs">Active</p>
            </a>
          </li>
          <li className="min-w-0">
            <a href="#" className="block h-full min-w-0 rounded-lg border p-3 transition-colors hover:border-neutral-600 border-neutral-900 bg-neutral-900 text-white forced-colors:border-[ButtonText] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
              <p className="text-xs opacity-75">ID 02</p>
              <h2 className="mt-2 break-words text-sm font-semibold">Queue name</h2>
              <p className="mt-3 text-xs">Active</p>
            </a>
          </li>
          <li className="min-w-0">
            <a href="#" className="block h-full min-w-0 rounded-lg border p-3 transition-colors hover:border-neutral-600 border-neutral-300 bg-white text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
              <p className="text-xs opacity-75">ID 03</p>
              <h2 className="mt-2 break-words text-sm font-semibold">Group title</h2>
              <p className="mt-3 text-xs">Idle</p>
            </a>
          </li>
          <li className="min-w-0">
            <a href="#" className="block h-full min-w-0 rounded-lg border p-3 transition-colors hover:border-neutral-600 border-dashed border-neutral-300 bg-white text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
              <p className="text-xs opacity-75">ID 04</p>
              <h2 className="mt-2 break-words text-sm font-semibold">Entry name</h2>
              <p className="mt-3 text-xs">Offline</p>
            </a>
          </li>
          <li className="min-w-0">
            <a href="#" className="block h-full min-w-0 rounded-lg border p-3 transition-colors hover:border-neutral-600 border-neutral-900 bg-neutral-900 text-white forced-colors:border-[ButtonText] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
              <p className="text-xs opacity-75">ID 05</p>
              <h2 className="mt-2 break-words text-sm font-semibold">Unit label</h2>
              <p className="mt-3 text-xs">Active</p>
            </a>
          </li>
          <li className="min-w-0">
            <a href="#" className="block h-full min-w-0 rounded-lg border p-3 transition-colors hover:border-neutral-600 border-neutral-300 bg-white text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
              <p className="text-xs opacity-75">ID 06</p>
              <h2 className="mt-2 break-words text-sm font-semibold">Slot name</h2>
              <p className="mt-3 text-xs">Idle</p>
            </a>
          </li>
          <li className="min-w-0">
            <a href="#" className="block h-full min-w-0 rounded-lg border p-3 transition-colors hover:border-neutral-600 border-neutral-900 bg-neutral-900 text-white forced-colors:border-[ButtonText] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
              <p className="text-xs opacity-75">ID 07</p>
              <h2 className="mt-2 break-words text-sm font-semibold">Team label</h2>
              <p className="mt-3 text-xs">Active</p>
            </a>
          </li>
          <li className="min-w-0">
            <a href="#" className="block h-full min-w-0 rounded-lg border p-3 transition-colors hover:border-neutral-600 border-dashed border-neutral-300 bg-white text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
              <p className="text-xs opacity-75">ID 08</p>
              <h2 className="mt-2 break-words text-sm font-semibold">Row title</h2>
              <p className="mt-3 text-xs">Offline</p>
            </a>
          </li>
          <li className="min-w-0">
            <a href="#" className="block h-full min-w-0 rounded-lg border p-3 transition-colors hover:border-neutral-600 border-neutral-900 bg-neutral-900 text-white forced-colors:border-[ButtonText] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
              <p className="text-xs opacity-75">ID 09</p>
              <h2 className="mt-2 break-words text-sm font-semibold">List name</h2>
              <p className="mt-3 text-xs">Active</p>
            </a>
          </li>
          <li className="min-w-0">
            <a href="#" className="block h-full min-w-0 rounded-lg border p-3 transition-colors hover:border-neutral-600 border-neutral-300 bg-white text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
              <p className="text-xs opacity-75">ID 10</p>
              <h2 className="mt-2 break-words text-sm font-semibold">Task label</h2>
              <p className="mt-3 text-xs">Idle</p>
            </a>
          </li>
          <li className="min-w-0">
            <a href="#" className="block h-full min-w-0 rounded-lg border p-3 transition-colors hover:border-neutral-600 border-dashed border-neutral-300 bg-white text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
              <p className="text-xs opacity-75">ID 11</p>
              <h2 className="mt-2 break-words text-sm font-semibold">Node name</h2>
              <p className="mt-3 text-xs">Offline</p>
            </a>
          </li>
          <li className="min-w-0">
            <a href="#" className="block h-full min-w-0 rounded-lg border p-3 transition-colors hover:border-neutral-600 border-neutral-900 bg-neutral-900 text-white forced-colors:border-[ButtonText] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
              <p className="text-xs opacity-75">ID 12</p>
              <h2 className="mt-2 break-words text-sm font-semibold">Item title</h2>
              <p className="mt-3 text-xs">Active</p>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
