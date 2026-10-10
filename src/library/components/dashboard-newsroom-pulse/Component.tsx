// Fonts: Newsreader
export default function DashboardNewsroomPulse() {
  return (
    <section className="bg-red-950 px-4 py-10 text-rose-50 sm:px-8" aria-labelledby="dashboard-newsroom-pulse-title">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-wrap items-end justify-between gap-4 border-b border-rose-200/40 pb-5">
          <div>
            <p className="text-xs tracking-[0.18em] text-orange-200">QUOTIENT DESK / AUDIENCE</p>
            <h2 className="mt-2 font-['Newsreader',ui-serif,Georgia,serif] text-4xl tracking-tight sm:text-5xl" id="dashboard-newsroom-pulse-title">The afternoon edition.</h2>
          </div>
          <p className="text-xs text-rose-200">Saturday, 10 October · 14:35 snapshot</p>
        </header>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <figure aria-label="Concurrent readers rose from 1,820 at 14:05 to 3,482 at 14:35, peaking at 3,760 at 14:25">
            <figcaption className="text-sm text-rose-200">Readers on site now</figcaption>
            <p className="mt-3 font-['Newsreader',ui-serif,Georgia,serif] text-6xl tracking-tight tabular-nums">3,482</p>
            <p className="mt-3 text-xs text-orange-200">+38% compared with the previous half hour</p>
            <svg aria-hidden="true" viewBox="0 0 600 140" fill="none" className="mt-6 w-full text-orange-200">
              <path d="M0 120H600M0 60H600" stroke="currentColor" strokeOpacity="0.2"></path>
              <path d="M0 116 40 112 80 100 120 108 160 78 200 84 240 62 280 66 320 36 360 44 400 16 440 24 480 32 520 28 560 36 600 34" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"></path>
            </svg>
            <div aria-hidden="true" className="mt-2 flex justify-between text-xs text-rose-200"><span>14:05</span><span>14:20</span><span>14:35</span></div>
          </figure>
          <article>
            <h3 className="font-['Newsreader',ui-serif,Georgia,serif] text-2xl">Stories finding readers</h3>
            <ol role="list" className="mt-4 grid gap-0">
              <li className="grid grid-cols-[1.5rem_minmax(0,1fr)_auto] gap-3 border-b border-rose-200/25 py-5">
                <span className="text-xs text-orange-200">01</span>
                <div>
                  <p className="text-sm font-medium leading-6">What the new water bill means for renters</p>
                  <p className="mt-1 text-xs text-rose-200">Policy · 5 min average engaged time</p>
                </div>
                <p className="text-sm tabular-nums">1,406</p>
              </li>
              <li className="grid grid-cols-[1.5rem_minmax(0,1fr)_auto] gap-3 border-b border-rose-200/25 py-5">
                <span className="text-xs text-orange-200">02</span>
                <div>
                  <p className="text-sm font-medium leading-6">Inside the city's last neon workshop</p>
                  <p className="mt-1 text-xs text-rose-200">Culture · 4 min average engaged time</p>
                </div>
                <p className="text-sm tabular-nums">982</p>
              </li>
              <li className="grid grid-cols-[1.5rem_minmax(0,1fr)_auto] gap-3 border-b border-rose-200/25 py-5">
                <span className="text-xs text-orange-200">03</span>
                <div>
                  <p className="text-sm font-medium leading-6">The weekend market, mapped stall by stall</p>
                  <p className="mt-1 text-xs text-rose-200">City guide · 3 min average engaged time</p>
                </div>
                <p className="text-sm tabular-nums">604</p>
              </li>
            </ol>
          </article>
        </div>
        <dl className="mt-8 grid gap-4 border-y border-rose-200/40 py-5 sm:grid-cols-4">
          <div>
            <dt className="text-xs text-rose-200">Direct</dt>
            <dd className="mt-2 text-xl tabular-nums">42%</dd>
          </div>
          <div>
            <dt className="text-xs text-rose-200">Search</dt>
            <dd className="mt-2 text-xl tabular-nums">31%</dd>
          </div>
          <div>
            <dt className="text-xs text-rose-200">Newsletter</dt>
            <dd className="mt-2 text-xl tabular-nums">19%</dd>
          </div>
          <div>
            <dt className="text-xs text-rose-200">Other referrals</dt>
            <dd className="mt-2 text-xl tabular-nums">8%</dd>
          </div>
        </dl>
        <details className="mt-5">
          <summary className="cursor-pointer text-xs text-orange-200 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">About this audience snapshot</summary>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-rose-200">Reader counts include active sessions in the last five minutes. Story rankings exclude homepage and category-page traffic.</p>
        </details>
      </div>
    </section>
  )
}
