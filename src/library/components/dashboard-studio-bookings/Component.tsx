// Fonts: Bricolage Grotesque
export default function DashboardStudioBookings() {
  return (
    <section className="bg-linear-to-br from-fuchsia-100 via-rose-100 to-orange-100 px-4 py-10 font-['Bricolage_Grotesque',ui-sans-serif,system-ui,sans-serif] text-pink-950 sm:px-8" aria-labelledby="dashboard-studio-bookings-title">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <header className="flex flex-col justify-center py-2">
            <p className="text-xs font-bold tracking-[0.14em]">TEMPOFORM / STUDIO TWO</p>
            <h2 id="dashboard-studio-bookings-title" className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">A full room.<br />A good Saturday.</h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-pink-800">10 October. Six classes on the board, and the afternoon crew is ready.</p>
            <dl className="mt-6 flex flex-wrap gap-8">
              <div>
                <dt className="text-xs text-pink-800">Bookings today</dt>
                <dd className="mt-1 text-3xl font-semibold tabular-nums">86</dd>
              </div>
              <div>
                <dt className="text-xs text-pink-800">First visits</dt>
                <dd className="mt-1 text-3xl font-semibold tabular-nums">12</dd>
              </div>
            </dl>
          </header>
          <figure className="relative min-h-72 overflow-hidden rounded-[2rem]">
            <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1600&q=80" alt="Participants doing mat exercises in a bright fitness studio" width="1600" height="1067" className="h-72 w-full object-cover sm:h-80" />
            <figcaption className="absolute right-4 bottom-4 left-4 rounded-2xl border border-white/80 bg-white/80 px-5 py-4 text-sm font-semibold backdrop-blur-md">Studio two · Mat strength, 12:00</figcaption>
          </figure>
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <article className="overflow-hidden rounded-2xl border border-white bg-white/60">
            <h3 className="p-5 text-lg font-semibold">Next on the floor</h3>
            <ul role="list">
              <li className="grid grid-cols-[3.5rem_minmax(0,1fr)] items-center gap-3 border-t border-pink-200/70 px-5 py-4 sm:grid-cols-[3.5rem_minmax(0,1fr)_auto]">
                <p className="text-sm font-semibold tabular-nums">14:00</p>
                <div>
                  <h4 className="text-base font-semibold">Mat strength</h4>
                  <p className="mt-1 text-xs text-pink-800">Lena · 50 min · Studio two</p>
                </div>
                <p className="col-start-2 text-xs font-semibold sm:col-start-auto">18 / 20 booked</p>
              </li>
              <li className="grid grid-cols-[3.5rem_minmax(0,1fr)] items-center gap-3 border-t border-pink-200/70 px-5 py-4 sm:grid-cols-[3.5rem_minmax(0,1fr)_auto]">
                <p className="text-sm font-semibold tabular-nums">15:15</p>
                <div>
                  <h4 className="text-base font-semibold">Mobility reset</h4>
                  <p className="mt-1 text-xs text-pink-800">Arun · 45 min · Studio one</p>
                </div>
                <p className="col-start-2 text-xs font-semibold sm:col-start-auto">12 / 16 booked</p>
              </li>
              <li className="grid grid-cols-[3.5rem_minmax(0,1fr)] items-center gap-3 border-t border-pink-200/70 px-5 py-4 sm:grid-cols-[3.5rem_minmax(0,1fr)_auto]">
                <p className="text-sm font-semibold tabular-nums">16:30</p>
                <div>
                  <h4 className="text-base font-semibold">Slow flow</h4>
                  <p className="mt-1 text-xs text-pink-800">Lena · 60 min · Studio two</p>
                </div>
                <p className="col-start-2 text-xs font-semibold sm:col-start-auto">16 / 20 booked</p>
              </li>
            </ul>
          </article>
          <aside className="rounded-2xl border border-white bg-white/60 p-5">
            <h3 className="text-lg font-semibold">Today's occupancy</h3>
            <div className="relative mx-auto mt-5 size-32">
              <svg aria-hidden="true" viewBox="0 0 128 128" fill="none" className="size-full -rotate-90 text-pink-800">
                <circle cx="64" cy="64" r="54" stroke="currentColor" strokeWidth="9" className="text-pink-200"></circle>
                <circle cx="64" cy="64" r="54" stroke="currentColor" strokeWidth="9" strokeDasharray="264.65 339.3" strokeLinecap="round"></circle>
              </svg>
              <p className="absolute inset-0 grid place-content-center text-center text-3xl font-semibold">78%</p>
            </div>
            <p className="text-center text-xs text-pink-800">86 of 110 available places</p>
            <details className="mt-5 border-t border-pink-200 pt-4">
              <summary className="cursor-pointer text-sm font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Waitlist notes</summary>
              <p className="mt-3 text-xs leading-5">Mat strength has two people waiting. Hold cancellations until 30 minutes before class, then offer places in order.</p>
            </details>
          </aside>
        </div>
      </div>
    </section>
  )
}
