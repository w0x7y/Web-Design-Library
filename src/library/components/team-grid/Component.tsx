// Fonts: IBM Plex Sans (https://fonts.google.com/specimen/IBM+Plex+Sans)
export default function TeamGrid() {
  return (
    <section className="bg-white font-['IBM_Plex_Sans',ui-sans-serif,system-ui,sans-serif] text-slate-900 antialiased">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-8">
          <h2 className="max-w-xl text-4xl/[1.1] font-semibold tracking-[-0.025em] text-balance text-slate-950 sm:text-5xl/[1.05] lg:col-span-7">
            Operators first, software second.
          </h2>
          <div className="max-w-xl lg:col-span-4 lg:col-start-9">
            <p className="text-base/7 text-pretty text-slate-600 sm:text-lg/8">
              Everyone leading Kestrel ran part of a power grid before writing code for one. Today we schedule 4.1 GW
              of battery storage for 31 utilities in four countries.
            </p>
            <a
              href="#"
              className="group mt-5 inline-flex items-center gap-1.5 rounded-sm text-[0.9375rem] font-semibold text-cyan-800 underline decoration-cyan-800/30 underline-offset-4 transition-colors hover:decoration-cyan-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-800"
            >
              See 9 open roles
              <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 transition-transform group-hover:translate-x-0.5">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-14 border-t border-slate-200 lg:mt-20">
          <div className="grid gap-6 border-b border-slate-200 py-10 lg:grid-cols-12 lg:gap-8 lg:py-12">
            <div className="lg:col-span-3">
              <h3 className="font-semibold text-slate-950">Executive team</h3>
              <p className="mt-1 max-w-xs text-sm text-slate-600">Sets direction and answers to the board.</p>
            </div>
            <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6 lg:col-span-9">
              <li className="group relative rounded-md has-focus-visible:outline-2 has-focus-visible:outline-offset-4 has-focus-visible:outline-cyan-800">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80"
                  alt=""
                  width={400}
                  height={600}
                  className="aspect-4/5 w-full rounded-md bg-slate-100 object-cover grayscale transition-[filter] duration-300 group-focus-within:grayscale-0 group-hover:grayscale-0"
                />
                <h4 className="mt-4 text-[0.9375rem]/6 font-semibold text-slate-950">
                  <a href="#" className="after:absolute after:inset-0 focus-visible:outline-hidden">Lucía Ferrer</a>
                </h4>
                <p className="text-sm text-slate-600">Chief executive</p>
                <p className="mt-3 border-t border-slate-200 pt-3 text-[0.8125rem]/5 text-slate-500">Led grid planning at Iberia Norte</p>
              </li>
              <li className="group relative rounded-md has-focus-visible:outline-2 has-focus-visible:outline-offset-4 has-focus-visible:outline-cyan-800">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80"
                  alt=""
                  width={400}
                  height={600}
                  className="aspect-4/5 w-full rounded-md bg-slate-100 object-cover grayscale transition-[filter] duration-300 group-focus-within:grayscale-0 group-hover:grayscale-0"
                />
                <h4 className="mt-4 text-[0.9375rem]/6 font-semibold text-slate-950">
                  <a href="#" className="after:absolute after:inset-0 focus-visible:outline-hidden">Henrik Dahl</a>
                </h4>
                <p className="text-sm text-slate-600">Chief technology officer</p>
                <p className="mt-3 border-t border-slate-200 pt-3 text-[0.8125rem]/5 text-slate-500">Built dispatch software at Nordvik Energi</p>
              </li>
              <li className="group relative rounded-md has-focus-visible:outline-2 has-focus-visible:outline-offset-4 has-focus-visible:outline-cyan-800">
                <img
                  src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80"
                  alt=""
                  width={400}
                  height={600}
                  className="aspect-4/5 w-full rounded-md bg-slate-100 object-cover grayscale transition-[filter] duration-300 group-focus-within:grayscale-0 group-hover:grayscale-0"
                />
                <h4 className="mt-4 text-[0.9375rem]/6 font-semibold text-slate-950">
                  <a href="#" className="after:absolute after:inset-0 focus-visible:outline-hidden">Adaeze Okafor</a>
                </h4>
                <p className="text-sm text-slate-600">Chief financial officer</p>
                <p className="mt-3 border-t border-slate-200 pt-3 text-[0.8125rem]/5 text-slate-500">Financed 2 GW of storage at Halden Capital</p>
              </li>
              <li className="group relative rounded-md has-focus-visible:outline-2 has-focus-visible:outline-offset-4 has-focus-visible:outline-cyan-800">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
                  alt=""
                  width={400}
                  height={600}
                  className="aspect-4/5 w-full rounded-md bg-slate-100 object-cover grayscale transition-[filter] duration-300 group-focus-within:grayscale-0 group-hover:grayscale-0"
                />
                <h4 className="mt-4 text-[0.9375rem]/6 font-semibold text-slate-950">
                  <a href="#" className="after:absolute after:inset-0 focus-visible:outline-hidden">Martin Kowal</a>
                </h4>
                <p className="text-sm text-slate-600">General counsel</p>
                <p className="mt-3 border-t border-slate-200 pt-3 text-[0.8125rem]/5 text-slate-500">Counsel to the Baltic energy regulator</p>
              </li>
            </ul>
          </div>

          <div className="grid gap-6 border-b border-slate-200 py-10 lg:grid-cols-12 lg:gap-8 lg:py-12">
            <div className="lg:col-span-3">
              <h3 className="font-semibold text-slate-950">Grid operations</h3>
              <p className="mt-1 max-w-xs text-sm text-slate-600">Run dispatch and forecasting around the clock from Oslo and Rotterdam.</p>
            </div>
            <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6 lg:col-span-9">
              <li className="group relative rounded-md has-focus-visible:outline-2 has-focus-visible:outline-offset-4 has-focus-visible:outline-cyan-800">
                <img
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&q=80"
                  alt=""
                  width={400}
                  height={400}
                  className="aspect-4/5 w-full rounded-md bg-slate-100 object-cover grayscale transition-[filter] duration-300 group-focus-within:grayscale-0 group-hover:grayscale-0"
                />
                <h4 className="mt-4 text-[0.9375rem]/6 font-semibold text-slate-950">
                  <a href="#" className="after:absolute after:inset-0 focus-visible:outline-hidden">Jonas Berg</a>
                </h4>
                <p className="text-sm text-slate-600">Head of dispatch</p>
                <p className="mt-3 border-t border-slate-200 pt-3 text-[0.8125rem]/5 text-slate-500">Shift lead in the Rotterdam control room</p>
              </li>
              <li className="group relative rounded-md has-focus-visible:outline-2 has-focus-visible:outline-offset-4 has-focus-visible:outline-cyan-800">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80"
                  alt=""
                  width={400}
                  height={503}
                  className="aspect-4/5 w-full rounded-md bg-slate-100 object-cover grayscale transition-[filter] duration-300 group-focus-within:grayscale-0 group-hover:grayscale-0"
                />
                <h4 className="mt-4 text-[0.9375rem]/6 font-semibold text-slate-950">
                  <a href="#" className="after:absolute after:inset-0 focus-visible:outline-hidden">Mira Halvorsen</a>
                </h4>
                <p className="text-sm text-slate-600">Head of forecasting</p>
                <p className="mt-3 border-t border-slate-200 pt-3 text-[0.8125rem]/5 text-slate-500">Wind forecaster at Met Nord for seven years</p>
              </li>
              <li className="group relative rounded-md has-focus-visible:outline-2 has-focus-visible:outline-offset-4 has-focus-visible:outline-cyan-800">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
                  alt=""
                  width={400}
                  height={600}
                  className="aspect-4/5 w-full rounded-md bg-slate-100 object-cover grayscale transition-[filter] duration-300 group-focus-within:grayscale-0 group-hover:grayscale-0"
                />
                <h4 className="mt-4 text-[0.9375rem]/6 font-semibold text-slate-950">
                  <a href="#" className="after:absolute after:inset-0 focus-visible:outline-hidden">Rafael Santos</a>
                </h4>
                <p className="text-sm text-slate-600">Head of market operations</p>
                <p className="mt-3 border-t border-slate-200 pt-3 text-[0.8125rem]/5 text-slate-500">Traded day-ahead power for nine years</p>
              </li>
              <li className="group relative rounded-md has-focus-visible:outline-2 has-focus-visible:outline-offset-4 has-focus-visible:outline-cyan-800">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80"
                  alt=""
                  width={400}
                  height={500}
                  className="aspect-4/5 w-full rounded-md bg-slate-100 object-cover grayscale transition-[filter] duration-300 group-focus-within:grayscale-0 group-hover:grayscale-0"
                />
                <h4 className="mt-4 text-[0.9375rem]/6 font-semibold text-slate-950">
                  <a href="#" className="after:absolute after:inset-0 focus-visible:outline-hidden">Linh Tran</a>
                </h4>
                <p className="text-sm text-slate-600">Head of reliability</p>
                <p className="mt-3 border-t border-slate-200 pt-3 text-[0.8125rem]/5 text-slate-500">Ran substation maintenance in Da Nang</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
