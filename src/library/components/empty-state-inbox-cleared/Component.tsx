export default function EmptyStateInboxCleared() {
  return (
    <section className="w-72 border-y border-[#756854]/40 bg-[#f7f2e8] p-6 text-[#40382d]">
      <div className="flex items-start justify-between gap-4">
        <p className="font-mono text-[10px] tracking-widest">THE INBOX</p>
        <span className="text-[#756854]">
          <svg
            className="size-12"
            viewBox="0 0 48 48"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="24"
              cy="24"
              r="18"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path d="m15 24 6 6 12-13" stroke="currentColor" strokeWidth="2" />
          </svg>
        </span>
      </div>
      <h2 className="mt-7 font-serif text-3xl font-normal">A clear desk.</h2>
      <p className="mt-3 text-sm leading-6 text-[#756854]">
        You’re all caught up. We’ll keep the next important thing here.
      </p>
      <div className="mt-6 border-t border-[#756854]/25 pt-4">
        <a
          className="text-xs font-medium underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
          href="#"
        >
          Return to your work
        </a>
      </div>
    </section>
  )
}
