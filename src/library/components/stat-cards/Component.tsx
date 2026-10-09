// Fonts: Chivo (https://fonts.google.com/specimen/Chivo)
export default function StatCards() {
  return (
    <section
      aria-labelledby="stat-cards-title"
      className="w-72 overflow-hidden rounded-2xl bg-neutral-950 font-['Chivo',ui-sans-serif,system-ui,sans-serif] text-neutral-50 antialiased md:w-[40rem]"
    >
      <div className="flex items-baseline justify-between gap-4 border-b border-neutral-800 px-5 py-3.5">
        <h2 id="stat-cards-title" className="text-sm font-medium">
          Last 7 days
        </h2>
        <p className="text-[0.8125rem] text-neutral-400">
          <time dateTime="2026-09-29">29 Sep</time> – <time dateTime="2026-10-05">5 Oct</time>
        </p>
      </div>

      <ul role="list" className="divide-y divide-neutral-800 md:grid md:grid-cols-3 md:divide-x md:divide-y-0">
        <li className="group relative flex items-end justify-between gap-4 px-5 py-3.5 transition-colors hover:bg-neutral-900 md:flex-col md:items-stretch md:gap-5 md:p-5">
          <div>
            <h3 className="text-sm text-neutral-400">
              <a href="#" className="after:absolute after:inset-1 after:rounded-xl focus-visible:outline-hidden focus-visible:after:outline-2 focus-visible:after:outline-neutral-50">
                Rides
              </a>
            </h3>
            <p className="mt-1 text-2xl font-medium tracking-tight tabular-nums md:text-[2rem]/10">48,210</p>
            <p className="mt-1.5 flex items-center gap-1 text-xs text-emerald-400 tabular-nums">
              <svg aria-hidden="true" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-3">
                <path d="M3 9 9 3M4.5 3H9v4.5" />
              </svg>
              <span><span className="sr-only">Up </span>12.4%</span>
              <span className="ml-1 text-neutral-400"> vs prior week</span>
            </p>
          </div>
          <svg aria-hidden="true" viewBox="0 0 120 40" preserveAspectRatio="none" className="h-10 w-20 shrink-0 text-emerald-400 md:w-full">
            <path
              d="M0 36C3.3 34.8 13.3 29.7 20 28.8C26.7 27.9 33.3 32.2 40 30.6C46.7 29 53.3 22.6 60 19.4C66.7 16.2 73.3 12.5 80 11.6C86.7 10.7 93.3 15.5 100 14.2C106.7 12.9 116.7 5.7 120 4V40H0Z"
              fill="currentColor"
              fillOpacity="0.12"
            />
            <path
              d="M0 36C3.3 34.8 13.3 29.7 20 28.8C26.7 27.9 33.3 32.2 40 30.6C46.7 29 53.3 22.6 60 19.4C66.7 16.2 73.3 12.5 80 11.6C86.7 10.7 93.3 15.5 100 14.2C106.7 12.9 116.7 5.7 120 4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="absolute top-4 right-4 size-4 text-neutral-400 opacity-0 transition-opacity group-focus-within:opacity-100 group-hover:opacity-100">
            <path d="M5 11 11 5M6 5h5v5" />
          </svg>
        </li>

        <li className="group relative flex items-end justify-between gap-4 px-5 py-3.5 transition-colors hover:bg-neutral-900 md:flex-col md:items-stretch md:gap-5 md:p-5">
          <div>
            <h3 className="text-sm text-neutral-400">
              <a href="#" className="after:absolute after:inset-1 after:rounded-xl focus-visible:outline-hidden focus-visible:after:outline-2 focus-visible:after:outline-neutral-50">
                Revenue
              </a>
            </h3>
            <p className="mt-1 text-2xl font-medium tracking-tight tabular-nums md:text-[2rem]/10">€86.4k</p>
            <p className="mt-1.5 flex items-center gap-1 text-xs text-emerald-400 tabular-nums">
              <svg aria-hidden="true" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-3">
                <path d="M3 9 9 3M4.5 3H9v4.5" />
              </svg>
              <span><span className="sr-only">Up </span>8.1%</span>
              <span className="ml-1 text-neutral-400"> vs prior week</span>
            </p>
          </div>
          <svg aria-hidden="true" viewBox="0 0 120 40" preserveAspectRatio="none" className="h-10 w-20 shrink-0 text-emerald-400 md:w-full">
            <path
              d="M0 26.7C3.3 28.2 13.3 35.8 20 36C26.7 36.2 33.3 30 40 28C46.7 26 53.3 23.6 60 24C66.7 24.4 73.3 32.2 80 30.7C86.7 29.1 93.3 19.1 100 14.7C106.7 10.2 116.7 5.8 120 4V40H0Z"
              fill="currentColor"
              fillOpacity="0.12"
            />
            <path
              d="M0 26.7C3.3 28.2 13.3 35.8 20 36C26.7 36.2 33.3 30 40 28C46.7 26 53.3 23.6 60 24C66.7 24.4 73.3 32.2 80 30.7C86.7 29.1 93.3 19.1 100 14.7C106.7 10.2 116.7 5.8 120 4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="absolute top-4 right-4 size-4 text-neutral-400 opacity-0 transition-opacity group-focus-within:opacity-100 group-hover:opacity-100">
            <path d="M5 11 11 5M6 5h5v5" />
          </svg>
        </li>

        <li className="group relative flex items-end justify-between gap-4 px-5 py-3.5 transition-colors hover:bg-neutral-900 md:flex-col md:items-stretch md:gap-5 md:p-5">
          <div>
            <h3 className="text-sm text-neutral-400">
              <a href="#" className="after:absolute after:inset-1 after:rounded-xl focus-visible:outline-hidden focus-visible:after:outline-2 focus-visible:after:outline-neutral-50">
                Bikes available
              </a>
            </h3>
            <p className="mt-1 text-2xl font-medium tracking-tight tabular-nums md:text-[2rem]/10">91.7%</p>
            <p className="mt-1.5 flex items-center gap-1 text-xs text-rose-400 tabular-nums">
              <svg aria-hidden="true" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-3">
                <path d="M3 3 9 9M9 4.5V9H4.5" />
              </svg>
              <span><span className="sr-only">Down </span>2.1 pts</span>
              <span className="ml-1 text-neutral-400"> vs prior week</span>
            </p>
          </div>
          <svg aria-hidden="true" viewBox="0 0 120 40" preserveAspectRatio="none" className="h-10 w-20 shrink-0 text-rose-400 md:w-full">
            <path
              d="M0 6.9C3.3 6.4 13.3 2.7 20 4C26.7 5.3 33.3 12.4 40 14.7C46.7 16.9 53.3 16.1 60 17.6C66.7 19 73.3 20.3 80 23.4C86.7 26.5 93.3 35.2 100 36C106.7 36.8 116.7 29.5 120 28.2V40H0Z"
              fill="currentColor"
              fillOpacity="0.12"
            />
            <path
              d="M0 6.9C3.3 6.4 13.3 2.7 20 4C26.7 5.3 33.3 12.4 40 14.7C46.7 16.9 53.3 16.1 60 17.6C66.7 19 73.3 20.3 80 23.4C86.7 26.5 93.3 35.2 100 36C106.7 36.8 116.7 29.5 120 28.2"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="absolute top-4 right-4 size-4 text-neutral-400 opacity-0 transition-opacity group-focus-within:opacity-100 group-hover:opacity-100">
            <path d="M5 11 11 5M6 5h5v5" />
          </svg>
        </li>
      </ul>
    </section>
  )
}
