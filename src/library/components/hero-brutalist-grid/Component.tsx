// Fonts: Martian Mono (https://fonts.google.com/specimen/Martian+Mono)
export default function HeroBrutalistGrid() {
  return (
    <section className="bg-stone-200 p-3 font-['Martian_Mono',ui-monospace,monospace] text-black sm:p-5 lg:p-6">
      <div className="grid gap-1 border-4 border-black bg-black sm:grid-cols-2 lg:grid-cols-12">
        <div className="flex items-center justify-between gap-4 bg-stone-200 px-4 py-3 text-[0.6875rem] uppercase sm:col-span-2 lg:col-span-12 lg:px-6">
          <span className="flex items-center gap-2 text-sm font-extrabold tracking-[-0.02em]">
            <svg aria-hidden="true" viewBox="0 0 16 16" fill="currentColor" className="size-4">
              <path d="M0 0h16v16H0Zm4 4v8h8V4Z" />
            </svg>
            Concrete
          </span>
          <span className="flex items-center gap-2">
            <span aria-hidden="true" className="size-2 bg-orange-500 ring-2 ring-black" />
            11 regions up
          </span>
        </div>

        <div className="bg-stone-200 px-4 pt-10 pb-8 sm:col-span-2 lg:col-span-8 lg:row-start-2 lg:px-6 lg:pt-14 lg:pb-10">
          <h1 className="max-w-[11ch] text-5xl leading-[0.9] font-extrabold tracking-[-0.04em] uppercase font-stretch-75% sm:text-7xl lg:text-8xl xl:text-[7rem]">
            Bare metal, billed by the second.
          </h1>
        </div>

        <div className="bg-stone-200 p-4 text-sm leading-relaxed lg:col-span-4 lg:col-start-1 lg:row-start-3 lg:p-6">
          <p className="max-w-sm">
            No hypervisor, no noisy neighbours, no egress fees. Order a whole machine from your terminal and stop
            paying the second you hand it back.
          </p>
          <a
            href="#"
            className="mt-5 inline-flex items-center gap-2 font-bold uppercase underline decoration-2 underline-offset-4 hover:bg-black hover:text-stone-200 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Read the docs
            <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="size-4">
              <path d="M2 8h11M8 3l5 5-5 5" />
            </svg>
          </a>
        </div>

        <a
          href="#"
          className="group flex min-h-44 flex-col justify-between gap-8 bg-orange-500 p-4 transition-colors hover:bg-black hover:text-orange-500 focus-visible:outline-4 focus-visible:-outline-offset-8 focus-visible:outline-current lg:col-span-4 lg:col-start-9 lg:row-start-3 lg:p-6"
        >
          <span className="text-xs uppercase">Free for your first 10 hours</span>
          <span className="flex items-end justify-between gap-4 text-3xl leading-[0.95] font-extrabold tracking-[-0.03em] uppercase font-stretch-75% lg:text-4xl">
            Deploy a server
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="size-9 shrink-0 transition-transform group-hover:translate-x-1"
            >
              <path d="M3 12h17M13 5l7 7-7 7" />
            </svg>
          </span>
        </a>

        <dl className="flex flex-col bg-stone-200 text-xs lg:col-span-4 lg:col-start-9 lg:row-start-2">
          <div className="flex flex-1 items-center justify-between gap-4 border-b-2 border-black px-4 py-3 lg:px-6">
            <dt className="text-stone-600 uppercase">CPU</dt>
            <dd className="text-right font-semibold">96 cores, EPYC 9654</dd>
          </div>
          <div className="flex flex-1 items-center justify-between gap-4 border-b-2 border-black px-4 py-3 lg:px-6">
            <dt className="text-stone-600 uppercase">Memory</dt>
            <dd className="text-right font-semibold">384 GB DDR5</dd>
          </div>
          <div className="flex flex-1 items-center justify-between gap-4 border-b-2 border-black px-4 py-3 lg:px-6">
            <dt className="text-stone-600 uppercase">Disk</dt>
            <dd className="text-right font-semibold">2 × 3.84 TB NVMe</dd>
          </div>
          <div className="flex flex-1 items-center justify-between gap-4 border-b-2 border-black px-4 py-3 lg:px-6">
            <dt className="text-stone-600 uppercase">Network</dt>
            <dd className="text-right font-semibold">25 Gbit/s</dd>
          </div>
          <div className="flex flex-1 items-center justify-between gap-4 border-b-2 border-black px-4 py-3 lg:px-6">
            <dt className="text-stone-600 uppercase">Boot</dt>
            <dd className="text-right font-semibold">38 s, cold</dd>
          </div>
          <div className="flex flex-1 items-center justify-between gap-4 px-4 py-3 lg:px-6">
            <dt className="text-stone-600 uppercase">Price</dt>
            <dd className="text-right font-semibold">€0.00041 / s</dd>
          </div>
        </dl>

        <div className="bg-black p-4 text-stone-300 lg:col-span-4 lg:col-start-5 lg:row-start-3 lg:p-6">
          {/* <pre> gets a monospace stack from the browser and Tailwind's preflight, so name the font again */}
          <pre className="overflow-x-auto font-['Martian_Mono',ui-monospace,monospace] text-xs leading-relaxed font-stretch-[87.5%] lg:text-[0.8125rem]">
            <span className="text-white">{'$ concrete up --size m6 \\\n    --region fra1'}</span>
            {'\n  allocating  fra1-m6-0193\n  imaging     debian-13, 2.1 GB\n'}
            <span className="text-orange-400">{'  ready in 38 s → 203.0.113.42'}</span>
          </pre>
        </div>
      </div>
    </section>
  )
}
