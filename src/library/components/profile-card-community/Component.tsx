export default function ProfileCardCommunity() {
  return (
    <article className="w-72 rounded-[1.5rem] border-2 border-indigo-950 bg-amber-50 text-indigo-950 sm:w-80">
      <div className="flex items-center gap-4 rounded-t-[1.375rem] bg-indigo-100 px-4 py-4">
        <span
          aria-hidden="true"
          className="flex size-14 shrink-0 items-center justify-center rounded-full border-2 border-indigo-950 bg-amber-200 text-2xl font-bold"
        >
          JS
        </span>
        <div>
          <p className="text-xs font-medium">Your neighborhood helper</p>
          <h2 className="mt-1 text-xl font-bold leading-6">Jules Santos</h2>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm leading-5">
          Usually at the community garden. Always up for a seed swap.
        </p>
        <ul
          role="list"
          className="mt-3 flex flex-wrap gap-2 text-xs font-medium"
        >
          <li className="rounded-full border border-indigo-950 px-2.5 py-1">
            Gardening
          </li>
          <li className="rounded-full border border-indigo-950 px-2.5 py-1">
            Bike repair
          </li>
        </ul>
        <div className="mt-3 flex items-center justify-between gap-2 border-t border-indigo-950/20 pt-3">
          <p className="text-xs">
            <strong className="text-lg">32</strong> neighborly acts
          </p>
          <a
            href="#jules-profile"
            aria-label="View Jules Santos’s profile"
            className="flex size-10 items-center justify-center rounded-full bg-indigo-950 text-xl text-amber-50 hover:bg-indigo-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-950"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="inline-block size-3.5 align-[-0.125em]"
            >
              <path d="M5 15 15 5M5 5h10v10" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  )
}
