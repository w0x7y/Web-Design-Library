// Fonts: Archivo (https://fonts.google.com/specimen/Archivo)
export default function PricingBrutalist() {
  return (
    <section className="bg-yellow-300 px-4 py-16 font-['Archivo',ui-sans-serif,system-ui,sans-serif] text-black sm:px-6 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-10">
          <h2 className="text-[2.75rem] leading-[0.92] font-black tracking-[-0.02em] uppercase font-stretch-125% sm:text-6xl lg:col-span-8 lg:text-7xl">
            Pay for the shed, not the mansion.
          </h2>
          <p className="max-w-md text-lg leading-snug font-medium text-pretty lg:col-span-4">
            Static hosting with no seat tax and no surprise bandwidth bill. Every plan gets git deploys, HTTPS, a
            global CDN and one-click rollbacks.
          </p>
        </div>

        {/* Phones: three stacked plan cards. From 768px the cards lock into one table, with row labels in the
            first column and every row aligned across plans by a shared subgrid. */}
        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-4 md:gap-0 md:border-[3px] md:border-black md:bg-white md:shadow-[10px_10px_0_#000]">
          <div aria-hidden="true" className="hidden md:row-span-8 md:grid md:grid-rows-subgrid">
            <div className="flex items-end p-5 lg:p-6">
              <span className="flex items-center gap-2 text-2xl leading-none font-black whitespace-nowrap uppercase font-stretch-extra-condensed lg:text-4xl">
                Pick one
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="square" className="size-7">
                  <path d="M3 12h16M13 5l7 7-7 7" />
                </svg>
              </span>
            </div>
            <div className="flex items-center border-t-[3px] border-black px-5 py-3 text-xs font-bold tracking-[0.04em] uppercase lg:px-6">Sites</div>
            <div className="flex items-center border-t-[3px] border-black px-5 py-3 text-xs font-bold tracking-[0.04em] uppercase lg:px-6">Bandwidth / month</div>
            <div className="flex items-center border-t-[3px] border-black px-5 py-3 text-xs font-bold tracking-[0.04em] uppercase lg:px-6">Build minutes</div>
            <div className="flex items-center border-t-[3px] border-black px-5 py-3 text-xs font-bold tracking-[0.04em] uppercase lg:px-6">Custom domains</div>
            <div className="flex items-center border-t-[3px] border-black px-5 py-3 text-xs font-bold tracking-[0.04em] uppercase lg:px-6">Password protection</div>
            <div className="flex items-center border-t-[3px] border-black px-5 py-3 text-xs font-bold tracking-[0.04em] uppercase lg:px-6">Team seats</div>
            <div className="flex items-center border-t-[3px] border-black px-5 py-3 text-xs font-bold tracking-[0.04em] uppercase lg:px-6">Support</div>
          </div>

          {/* Shack */}
          <div className="relative border-[3px] border-black bg-white shadow-[6px_6px_0_#000] md:row-span-8 md:grid md:grid-rows-subgrid md:border-0 md:border-l-[3px] md:shadow-none">
            <div className="flex flex-col p-5 lg:p-6">
              <h3 className="text-2xl leading-none font-black uppercase font-stretch-125%">Shack</h3>
              <p className="mt-2 text-sm leading-snug text-pretty">One site on a shed.page address. No card needed.</p>
              <div className="mt-auto pt-6">
                <p className="flex items-end gap-1.5">
                  <span className="text-7xl leading-[0.8] font-black tracking-[-0.02em] font-stretch-extra-condensed">$0</span>
                  <span className="text-sm font-bold uppercase">per month</span>
                </p>
                <a
                  href="#"
                  className="mt-6 flex h-12 items-center justify-center border-[3px] border-black bg-white text-sm font-black tracking-[0.04em] uppercase shadow-[4px_4px_0_#000] transition-[translate,box-shadow] duration-100 hover:translate-x-1 hover:translate-y-1 hover:shadow-none focus-visible:outline-[3px] focus-visible:outline-offset-[6px] focus-visible:outline-black"
                >
                  Start free
                </a>
              </div>
            </div>
            <dl className="md:row-span-7 md:grid md:grid-rows-subgrid">
              <div className="flex items-center justify-between gap-4 border-t-[3px] border-black px-5 py-3 lg:px-6">
                <dt className="text-xs font-bold tracking-[0.04em] uppercase md:sr-only">Sites</dt>
                <dd className="flex items-center text-right font-semibold tabular-nums md:text-left">
                  1
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-t-[3px] border-black px-5 py-3 lg:px-6">
                <dt className="text-xs font-bold tracking-[0.04em] uppercase md:sr-only">Bandwidth / month</dt>
                <dd className="flex items-center text-right font-semibold tabular-nums md:text-left">
                  10 GB
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-t-[3px] border-black px-5 py-3 lg:px-6">
                <dt className="text-xs font-bold tracking-[0.04em] uppercase md:sr-only">Build minutes</dt>
                <dd className="flex items-center text-right font-semibold tabular-nums md:text-left">
                  300
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-t-[3px] border-black px-5 py-3 lg:px-6">
                <dt className="text-xs font-bold tracking-[0.04em] uppercase md:sr-only">Custom domains</dt>
                <dd className="flex items-center text-right font-semibold tabular-nums md:text-left">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" className="size-5 opacity-40"><path d="m6 6 12 12M18 6 6 18" /></svg>
                  <span className="sr-only">Not included</span>
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-t-[3px] border-black px-5 py-3 lg:px-6">
                <dt className="text-xs font-bold tracking-[0.04em] uppercase md:sr-only">Password protection</dt>
                <dd className="flex items-center text-right font-semibold tabular-nums md:text-left">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" className="size-5 opacity-40"><path d="m6 6 12 12M18 6 6 18" /></svg>
                  <span className="sr-only">Not included</span>
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-t-[3px] border-black px-5 py-3 lg:px-6">
                <dt className="text-xs font-bold tracking-[0.04em] uppercase md:sr-only">Team seats</dt>
                <dd className="flex items-center text-right font-semibold tabular-nums md:text-left">
                  1
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-t-[3px] border-black px-5 py-3 lg:px-6">
                <dt className="text-xs font-bold tracking-[0.04em] uppercase md:sr-only">Support</dt>
                <dd className="flex items-center text-right font-semibold tabular-nums md:text-left">
                  Forum
                </dd>
              </div>
            </dl>
          </div>

          {/* Shed: the highlighted plan */}
          <div className="relative border-[3px] border-black bg-pink-300 shadow-[6px_6px_0_#000] md:row-span-8 md:grid md:grid-rows-subgrid md:border-0 md:border-l-[3px] md:shadow-none">
            <span className="absolute -top-4 right-4 rotate-3 border-[3px] border-black bg-white px-2 py-0.5 text-xs font-black tracking-[0.04em] uppercase md:-top-5">
              Most picked
            </span>
            <div className="flex flex-col p-5 lg:p-6">
              <h3 className="text-2xl leading-none font-black uppercase font-stretch-125%">Shed</h3>
              <p className="mt-2 text-sm leading-snug text-pretty">For freelancers with a handful of client sites.</p>
              <div className="mt-auto pt-6">
                <p className="flex items-end gap-1.5">
                  <span className="text-7xl leading-[0.8] font-black tracking-[-0.02em] font-stretch-extra-condensed">$8</span>
                  <span className="text-sm font-bold uppercase">per month</span>
                </p>
                <a
                  href="#"
                  className="mt-6 flex h-12 items-center justify-center border-[3px] border-black bg-black text-white text-sm font-black tracking-[0.04em] uppercase shadow-[4px_4px_0_#000] transition-[translate,box-shadow] duration-100 hover:translate-x-1 hover:translate-y-1 hover:shadow-none focus-visible:outline-[3px] focus-visible:outline-offset-[6px] focus-visible:outline-black"
                >
                  Get the shed
                </a>
              </div>
            </div>
            <dl className="md:row-span-7 md:grid md:grid-rows-subgrid">
              <div className="flex items-center justify-between gap-4 border-t-[3px] border-black px-5 py-3 lg:px-6">
                <dt className="text-xs font-bold tracking-[0.04em] uppercase md:sr-only">Sites</dt>
                <dd className="flex items-center text-right font-semibold tabular-nums md:text-left">
                  10
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-t-[3px] border-black px-5 py-3 lg:px-6">
                <dt className="text-xs font-bold tracking-[0.04em] uppercase md:sr-only">Bandwidth / month</dt>
                <dd className="flex items-center text-right font-semibold tabular-nums md:text-left">
                  200 GB
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-t-[3px] border-black px-5 py-3 lg:px-6">
                <dt className="text-xs font-bold tracking-[0.04em] uppercase md:sr-only">Build minutes</dt>
                <dd className="flex items-center text-right font-semibold tabular-nums md:text-left">
                  3,000
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-t-[3px] border-black px-5 py-3 lg:px-6">
                <dt className="text-xs font-bold tracking-[0.04em] uppercase md:sr-only">Custom domains</dt>
                <dd className="flex items-center text-right font-semibold tabular-nums md:text-left">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="square" className="size-6"><path d="m4 12.5 5 5L20 6.5" /></svg>
                  <span className="sr-only">Included</span>
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-t-[3px] border-black px-5 py-3 lg:px-6">
                <dt className="text-xs font-bold tracking-[0.04em] uppercase md:sr-only">Password protection</dt>
                <dd className="flex items-center text-right font-semibold tabular-nums md:text-left">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="square" className="size-6"><path d="m4 12.5 5 5L20 6.5" /></svg>
                  <span className="sr-only">Included</span>
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-t-[3px] border-black px-5 py-3 lg:px-6">
                <dt className="text-xs font-bold tracking-[0.04em] uppercase md:sr-only">Team seats</dt>
                <dd className="flex items-center text-right font-semibold tabular-nums md:text-left">
                  3
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-t-[3px] border-black px-5 py-3 lg:px-6">
                <dt className="text-xs font-bold tracking-[0.04em] uppercase md:sr-only">Support</dt>
                <dd className="flex items-center text-right font-semibold tabular-nums md:text-left">
                  Email, 1 day
                </dd>
              </div>
            </dl>
          </div>

          {/* Barn */}
          <div className="relative border-[3px] border-black bg-white shadow-[6px_6px_0_#000] md:row-span-8 md:grid md:grid-rows-subgrid md:border-0 md:border-l-[3px] md:shadow-none">
            <div className="flex flex-col p-5 lg:p-6">
              <h3 className="text-2xl leading-none font-black uppercase font-stretch-125%">Barn</h3>
              <p className="mt-2 text-sm leading-snug text-pretty">For studios that run sites for a living.</p>
              <div className="mt-auto pt-6">
                <p className="flex items-end gap-1.5">
                  <span className="text-7xl leading-[0.8] font-black tracking-[-0.02em] font-stretch-extra-condensed">$24</span>
                  <span className="text-sm font-bold uppercase">per month</span>
                </p>
                <a
                  href="#"
                  className="mt-6 flex h-12 items-center justify-center border-[3px] border-black bg-white text-sm font-black tracking-[0.04em] uppercase shadow-[4px_4px_0_#000] transition-[translate,box-shadow] duration-100 hover:translate-x-1 hover:translate-y-1 hover:shadow-none focus-visible:outline-[3px] focus-visible:outline-offset-[6px] focus-visible:outline-black"
                >
                  Get the barn
                </a>
              </div>
            </div>
            <dl className="md:row-span-7 md:grid md:grid-rows-subgrid">
              <div className="flex items-center justify-between gap-4 border-t-[3px] border-black px-5 py-3 lg:px-6">
                <dt className="text-xs font-bold tracking-[0.04em] uppercase md:sr-only">Sites</dt>
                <dd className="flex items-center text-right font-semibold tabular-nums md:text-left">
                  Unlimited
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-t-[3px] border-black px-5 py-3 lg:px-6">
                <dt className="text-xs font-bold tracking-[0.04em] uppercase md:sr-only">Bandwidth / month</dt>
                <dd className="flex items-center text-right font-semibold tabular-nums md:text-left">
                  1 TB
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-t-[3px] border-black px-5 py-3 lg:px-6">
                <dt className="text-xs font-bold tracking-[0.04em] uppercase md:sr-only">Build minutes</dt>
                <dd className="flex items-center text-right font-semibold tabular-nums md:text-left">
                  12,000
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-t-[3px] border-black px-5 py-3 lg:px-6">
                <dt className="text-xs font-bold tracking-[0.04em] uppercase md:sr-only">Custom domains</dt>
                <dd className="flex items-center text-right font-semibold tabular-nums md:text-left">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="square" className="size-6"><path d="m4 12.5 5 5L20 6.5" /></svg>
                  <span className="sr-only">Included</span>
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-t-[3px] border-black px-5 py-3 lg:px-6">
                <dt className="text-xs font-bold tracking-[0.04em] uppercase md:sr-only">Password protection</dt>
                <dd className="flex items-center text-right font-semibold tabular-nums md:text-left">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="square" className="size-6"><path d="m4 12.5 5 5L20 6.5" /></svg>
                  <span className="sr-only">Included</span>
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-t-[3px] border-black px-5 py-3 lg:px-6">
                <dt className="text-xs font-bold tracking-[0.04em] uppercase md:sr-only">Team seats</dt>
                <dd className="flex items-center text-right font-semibold tabular-nums md:text-left">
                  10
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-t-[3px] border-black px-5 py-3 lg:px-6">
                <dt className="text-xs font-bold tracking-[0.04em] uppercase md:sr-only">Support</dt>
                <dd className="flex items-center text-right font-semibold tabular-nums md:text-left">
                  Chat, 1 hour
                </dd>
              </div>
            </dl>
          </div>

        </div>

        <p className="mt-10 max-w-2xl text-sm font-medium md:mt-12">
          Prices in US dollars. Go over your bandwidth and we email you first; after that it is $0.05 per GB, and you
          can cap it.
        </p>
      </div>
    </section>
  )
}
