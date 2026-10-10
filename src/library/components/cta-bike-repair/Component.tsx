// Fonts: Archivo (https://fonts.google.com/specimen/Archivo)
export default function CtaBikeRepair() {
  return (
    <section className="bg-orange-400 text-zinc-950 font-['Archivo',ui-sans-serif,system-ui,sans-serif] antialiased">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-16">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-zinc-950 pb-5">
          <p className="text-xl font-black uppercase tracking-tight">
            Spoke Yard
          </p>
          <p className="text-xs font-semibold uppercase tracking-widest">
            Repair desk / No. 018
          </p>
        </div>
        <div className="grid gap-8 py-10 lg:grid-cols-[.5fr_1.5fr_1fr]">
          <p
            aria-hidden="true"
            className="text-[5rem] leading-none font-black tracking-[-0.06em]"
          >
            01
          </p>
          <div>
            <h2 className="text-[2.5rem] leading-none font-black uppercase tracking-tight sm:text-[3.5rem]">
              Fix it. Ride it.
            </h2>
            <p className="mt-5 max-w-md text-base leading-6">
              That click, squeak or wobble has a fix. Bring your bike to our
              bench. We quote before we turn a wrench.
            </p>
          </div>
          <ul role="list" className="border-t-2 border-zinc-950">
            <li className="flex justify-between gap-4 border-b border-zinc-950 py-4 text-sm font-semibold">
              <span>Safety check</span>
              <span>£25</span>
            </li>
            <li className="flex justify-between gap-4 border-b border-zinc-950 py-4 text-sm font-semibold">
              <span>Full tune-up</span>
              <span>£75</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5 border-t-2 border-zinc-950 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-medium">
            18 Mill Lane · Tue–Sat, 09:00–18:00
          </p>
          <a
            href="#"
            className="inline-flex min-h-12 w-fit items-center justify-center gap-3 rounded-none bg-zinc-950 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950"
          >
            Book a bench slot
          </a>
        </div>
      </div>
    </section>
  )
}
