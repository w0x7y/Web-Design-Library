export default function DropdownsProjectSwitcher() {
  return (
    <details
      open
      className="group w-72 rounded-2xl border border-slate-200 bg-white p-4 text-slate-900"
    >
      <summary className="flex cursor-pointer list-none items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 [&::-webkit-details-marker]:hidden">
        <span
          aria-hidden="true"
          className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-sm font-bold text-indigo-800"
        >
          TS
        </span>
        <span>
          <span className="block text-sm font-semibold">Tessera Studio</span>
          <span className="block text-[10px] text-slate-500">
            Pro workspace · 6 members
          </span>
        </span>
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="ml-auto size-4 shrink-0 transition-transform group-open:rotate-180 motion-reduce:transition-none"
        >
          <path d="m4 6 4 4 4-4" />
        </svg>
      </summary>
      <nav
        aria-label="Switch workspace"
        className="mt-4 border-t border-slate-200 pt-3"
      >
        <p className="px-2 text-[9px] tracking-widest text-slate-500 uppercase">
          Your workspaces
        </p>
        <ul role="list" className="mt-2 space-y-1">
          <li>
            <a
              href="#tessera-workspace"
              aria-current="true"
              className="flex items-center gap-3 rounded-lg bg-slate-50 p-2 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
            >
              <span
                aria-hidden="true"
                className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-[10px] font-bold text-indigo-800"
              >
                TS
              </span>
              <span className="flex-1 text-xs font-medium">Tessera Studio</span>
              <span className="text-[9px] text-slate-500">Current</span>
            </a>
          </li>
          <li>
            <a
              href="#personal-workspace"
              className="flex items-center gap-3 rounded-lg p-2 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
            >
              <span
                aria-hidden="true"
                className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-[10px] font-bold text-amber-800"
              >
                MR
              </span>
              <span>
                <span className="block text-xs font-medium">
                  Morgan's space
                </span>
                <span className="block text-[9px] text-slate-500">
                  Personal · Free plan
                </span>
              </span>
            </a>
          </li>
        </ul>
      </nav>
      <button
        type="button"
        className="mt-3 flex h-9 w-full items-center justify-center gap-2 rounded-lg border border-slate-300 text-xs font-medium hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
      >
        <span aria-hidden="true" className="text-base">
          +
        </span>
        Create workspace
      </button>
    </details>
  )
}
