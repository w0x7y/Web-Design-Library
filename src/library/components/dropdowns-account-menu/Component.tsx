export default function DropdownsAccountMenu() {
  return (
    <details
      open
      className="group w-72 rounded-2xl border border-slate-700 bg-slate-950 p-4 text-slate-100"
    >
      <summary className="flex cursor-pointer list-none items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300 [&::-webkit-details-marker]:hidden">
        <span
          aria-hidden="true"
          className="flex size-11 shrink-0 items-center justify-center rounded-full bg-cyan-200 text-sm font-semibold text-slate-950"
        >
          AK
        </span>
        <span>
          <span className="block text-sm font-semibold">Ari Kim</span>
          <span className="mt-0.5 block text-[10px] text-slate-400">
            Personal account · Plus
          </span>
        </span>
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="ml-auto size-4 text-slate-400 group-open:rotate-180"
        >
          <path d="m4 6 4 4 4-4" />
        </svg>
      </summary>
      <nav
        aria-label="Account navigation"
        className="mt-4 border-t border-slate-800 pt-3"
      >
        <ul role="list" className="space-y-1">
          <li>
            <a
              href="#account-profile"
              className="flex h-9 items-center gap-3 rounded-lg px-2 text-xs hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="size-4 text-slate-400"
              >
                <circle cx="8" cy="5" r="2.5" />
                <path d="M3 14v-1a5 5 0 0 1 10 0v1" />
              </svg>
              My profile
            </a>
          </li>
          <li>
            <a
              href="#account-billing"
              className="flex h-9 items-center gap-3 rounded-lg px-2 text-xs hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="size-4 text-slate-400"
              >
                <rect x="2" y="3" width="12" height="10" rx="2" />
                <path d="M2 6h12M4 10h3" />
              </svg>
              Billing &amp; subscription
            </a>
          </li>
          <li>
            <a
              href="#account-help"
              className="flex h-9 items-center gap-3 rounded-lg px-2 text-xs hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="size-4 text-slate-400"
              >
                <circle cx="8" cy="8" r="6" />
                <path d="M6 6a2 2 0 0 1 4 0c0 1-2 1-2 3M8 11v.5" />
              </svg>
              Help &amp; support
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="ml-auto size-3.5 shrink-0 text-slate-500"
              >
                <path d="M4 12 12 4M4 4h8v8" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
      <div className="mt-3 border-t border-slate-800 pt-3">
        <button
          type="button"
          className="h-9 w-full rounded-lg px-2 text-left text-xs text-rose-300 hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
        >
          Sign out of this account
        </button>
      </div>
    </details>
  )
}
