// Fonts: Young Serif
export default function DashboardPantryAllocation() {
  return (
    <section className="bg-yellow-50 px-4 py-10 text-green-950 sm:px-8" aria-labelledby="dashboard-pantry-allocation-title">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold tracking-widest">CRATEKIND / COMMUNITY FOOD BANK</p>
            <h2 className="mt-3 font-['Young_Serif',ui-serif,Georgia,serif] text-3xl tracking-tight sm:text-4xl" id="dashboard-pantry-allocation-title">Good food, ready to go.</h2>
          </div>
          <p className="rounded-full border-2 border-green-950 bg-yellow-300 px-4 py-2 text-xs font-semibold">SATURDAY · 10 OCT</p>
        </header>
        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <article className="rounded-[2rem] border-2 border-green-950 bg-green-100 p-5 sm:p-7">
            <h3 className="text-lg font-semibold">On the shelves</h3>
            <svg aria-hidden="true" viewBox="0 0 480 160" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" className="mt-6 w-full text-green-900">
              <path d="M8 140h464M24 140v14M456 140v14"></path>
              <path d="M32 63h120v77H32V63Zm0 20h120M48 98h88M48 116h88" className="fill-yellow-300"></path>
              <path d="M52 62c-15-14-5-35 11-26 6-23 27-23 32-4 24-12 34 9 24 29"></path>
              <path d="m196 30 16-14h44l16 14 10 110H186l10-110Zm0 0h76M201 114h66" className="fill-white"></path>
              <path d="M347 58h44v82h-44V58Zm52 0h44v82h-44V58Zm-26-48h44v44h-44V10Z" className="fill-green-300"></path>
              <path d="M347 78h44M347 119h44M399 78h44M399 119h44M373 23h44M373 42h44"></path>
            </svg>
            <dl className="mt-5 grid grid-cols-3 gap-3">
              <div>
                <dt className="text-xs">Fresh crates</dt>
                <dd className="mt-2 text-2xl font-semibold tabular-nums">112</dd>
              </div>
              <div>
                <dt className="text-xs">Grain sacks</dt>
                <dd className="mt-2 text-2xl font-semibold tabular-nums">78</dd>
              </div>
              <div>
                <dt className="text-xs">Tinned items</dt>
                <dd className="mt-2 text-2xl font-semibold tabular-nums">540</dd>
              </div>
            </dl>
            <p className="mt-5 text-xs leading-5">Use the oldest fresh stock first. Today's greens arrived at 08:15.</p>
          </article>
          <article className="rounded-[2rem] border-2 border-green-950 bg-white p-5 sm:p-7">
            <h3 className="text-lg font-semibold">Afternoon allocations</h3>
            <p className="mt-4 font-['Young_Serif',ui-serif,Georgia,serif] text-5xl tracking-tight">112 / 160</p>
            <p className="mt-3 text-sm leading-6">Household parcels packed. Another 48 are being assembled for the second collection.</p>
            <ul role="list" className="mt-5 grid gap-3">
              <li className="grid grid-cols-[minmax(0,1fr)_auto] gap-3 rounded-xl bg-yellow-100 p-4">
                <div>
                  <p className="text-sm font-semibold">Eastside community hub</p>
                  <p className="mt-1 text-xs">13:30 collection · Packed</p>
                </div>
                <p className="text-xl font-semibold tabular-nums">64</p>
              </li>
              <li className="grid grid-cols-[minmax(0,1fr)_auto] gap-3 rounded-xl bg-yellow-100 p-4">
                <div>
                  <p className="text-sm font-semibold">Park Road drop-in</p>
                  <p className="mt-1 text-xs">15:00 collection · 48 of 96 packed</p>
                </div>
                <p className="text-xl font-semibold tabular-nums">96</p>
              </li>
            </ul>
          </article>
        </div>
        <footer className="mt-6 flex flex-wrap items-start justify-between gap-4 rounded-xl bg-yellow-200 p-5">
          <p className="text-sm leading-6">Next packing shift: 14:00–16:00<br />8 volunteers confirmed · Table B</p>
          <details className="max-w-md">
            <summary className="cursor-pointer text-sm font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Parcel packing checklist</summary>
            <p className="mt-3 text-sm leading-6">Each parcel needs a grain bag, four tins, fresh produce and the dietary label. Keep gluten-free parcels on the marked shelf.</p>
          </details>
        </footer>
      </div>
    </section>
  )
}
