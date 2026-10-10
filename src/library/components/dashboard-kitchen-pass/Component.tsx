// Fonts: Archivo
export default function DashboardKitchenPass() {
  return (
    <section className="bg-stone-950 px-4 py-8 font-['Archivo',ui-sans-serif,system-ui,sans-serif] text-stone-100 sm:px-8" aria-labelledby="dashboard-kitchen-pass-title">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-wrap items-end justify-between gap-5 border-b-4 border-yellow-300 pb-5">
          <div>
            <p className="text-xs font-bold tracking-widest text-yellow-300">PASSPAN / SERVICE 02</p>
            <h2 id="dashboard-kitchen-pass-title" className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">On the pass.</h2>
          </div>
          <p className="text-sm font-semibold">Dinner · 19:18 / 4 open tickets</p>
        </header>
        <div className="mt-6 grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <article className="border-2 border-stone-100 bg-stone-100 text-stone-950" aria-label="Table 07 order">
            <header className="flex items-center justify-between gap-2 border-b-2 border-stone-950 p-4 bg-yellow-300">
              <h3 className="text-3xl font-black tabular-nums">T07</h3>
              <p className="text-xs font-bold">12 min</p>
            </header>
            <p className="border-b border-stone-300 px-4 py-3 text-xs font-semibold">19:06 / 2 covers</p>
            <ul role="list" className="grid gap-4 p-4">
              <li className="flex gap-3 text-sm font-semibold">
                <span className="w-4 shrink-0 tabular-nums">2</span>
                <div>
                  Roast cod
                  <p className="mt-1 text-xs font-normal text-stone-700">No butter on one</p>
                </div>
              </li>
              <li className="flex gap-3 text-sm font-semibold">
                <span className="w-4 shrink-0 tabular-nums">1</span>
                <div>
                  Charred cabbage
                  <p className="mt-1 text-xs font-normal text-stone-700">Lemon dressing on side</p>
                </div>
              </li>
            </ul>
            <label className="flex cursor-pointer items-center gap-3 border-t-2 border-stone-950 p-4 text-sm font-bold hover:bg-stone-200 has-[:checked]:bg-green-200 has-[:checked]:hover:bg-green-200"><input type="checkbox" aria-label="Mark table 07 order ready" className="size-4 accent-stone-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current" /><span>Ready at the pass</span></label>
          </article>
          <article className="border-2 border-stone-100 bg-stone-100 text-stone-950" aria-label="Table 12 order">
            <header className="flex items-center justify-between gap-2 border-b-2 border-stone-950 p-4">
              <h3 className="text-3xl font-black tabular-nums">T12</h3>
              <p className="text-xs font-bold">08 min</p>
            </header>
            <p className="border-b border-stone-300 px-4 py-3 text-xs font-semibold">19:10 / 3 covers</p>
            <ul role="list" className="grid gap-4 p-4">
              <li className="flex gap-3 text-sm font-semibold">
                <span className="w-4 shrink-0 tabular-nums">2</span>
                <div>
                  Steak frites
                  <p className="mt-1 text-xs font-normal text-stone-700">One medium, one rare</p>
                </div>
              </li>
              <li className="flex gap-3 text-sm font-semibold">
                <span className="w-4 shrink-0 tabular-nums">1</span>
                <div>
                  Mushroom pappardelle
                  <p className="mt-1 text-xs font-normal text-stone-700">Standard</p>
                </div>
              </li>
            </ul>
            <label className="flex cursor-pointer items-center gap-3 border-t-2 border-stone-950 p-4 text-sm font-bold hover:bg-stone-200 has-[:checked]:bg-green-200 has-[:checked]:hover:bg-green-200"><input type="checkbox" aria-label="Mark table 12 order ready" className="size-4 accent-stone-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current" /><span>Ready at the pass</span></label>
          </article>
          <article className="border-2 border-stone-100 bg-stone-100 text-stone-950" aria-label="Table 03 order">
            <header className="flex items-center justify-between gap-2 border-b-2 border-stone-950 p-4">
              <h3 className="text-3xl font-black tabular-nums">T03</h3>
              <p className="text-xs font-bold">05 min</p>
            </header>
            <p className="border-b border-stone-300 px-4 py-3 text-xs font-semibold">19:13 / 2 covers</p>
            <ul role="list" className="grid gap-4 p-4">
              <li className="flex gap-3 text-sm font-semibold">
                <span className="w-4 shrink-0 tabular-nums">1</span>
                <div>
                  Roast cod
                  <p className="mt-1 text-xs font-normal text-stone-700">Standard</p>
                </div>
              </li>
              <li className="flex gap-3 text-sm font-semibold">
                <span className="w-4 shrink-0 tabular-nums">1</span>
                <div>
                  Aubergine schnitzel
                  <p className="mt-1 text-xs font-normal text-stone-700">No yoghurt</p>
                </div>
              </li>
            </ul>
            <label className="flex cursor-pointer items-center gap-3 border-t-2 border-stone-950 p-4 text-sm font-bold hover:bg-stone-200 has-[:checked]:bg-green-200 has-[:checked]:hover:bg-green-200"><input type="checkbox" aria-label="Mark table 03 order ready" className="size-4 accent-stone-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current" /><span>Ready at the pass</span></label>
          </article>
          <article className="border-2 border-stone-100 bg-stone-100 text-stone-950" aria-label="Table 18 order">
            <header className="flex items-center justify-between gap-2 border-b-2 border-stone-950 p-4">
              <h3 className="text-3xl font-black tabular-nums">T18</h3>
              <p className="text-xs font-bold">02 min</p>
            </header>
            <p className="border-b border-stone-300 px-4 py-3 text-xs font-semibold">19:16 / 4 covers</p>
            <ul role="list" className="grid gap-4 p-4">
              <li className="flex gap-3 text-sm font-semibold">
                <span className="w-4 shrink-0 tabular-nums">2</span>
                <div>
                  Burrata
                  <p className="mt-1 text-xs font-normal text-stone-700">To start</p>
                </div>
              </li>
              <li className="flex gap-3 text-sm font-semibold">
                <span className="w-4 shrink-0 tabular-nums">2</span>
                <div>
                  Beetroot tartare
                  <p className="mt-1 text-xs font-normal text-stone-700">To start</p>
                </div>
              </li>
            </ul>
            <label className="flex cursor-pointer items-center gap-3 border-t-2 border-stone-950 p-4 text-sm font-bold hover:bg-stone-200 has-[:checked]:bg-green-200 has-[:checked]:hover:bg-green-200"><input type="checkbox" aria-label="Mark table 18 order ready" className="size-4 accent-stone-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current" /><span>Ready at the pass</span></label>
          </article>
        </div>
        <footer className="mt-6 grid gap-4 border-t-2 border-stone-600 pt-5 sm:grid-cols-[1fr_auto]">
          <p className="text-sm leading-6">Prep note: 6 cod portions left. Tell front of house before taking the next order.</p>
          <p className="text-sm font-bold text-yellow-300">11 covers in progress</p>
        </footer>
      </div>
    </section>
  )
}
