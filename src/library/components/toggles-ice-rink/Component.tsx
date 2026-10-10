// Fonts: Familjen Grotesk (https://fonts.google.com/specimen/Familjen+Grotesk)
export default function TogglesIceRink() {
  return (
    <section
      aria-labelledby="toggles-ice-rink-title"
      className="relative w-72 overflow-hidden rounded-3xl border border-sky-700 bg-linear-to-br from-sky-950 via-slate-900 to-sky-800 p-5 font-['Familjen_Grotesk',ui-sans-serif,system-ui,sans-serif] text-white sm:w-96"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 192 192"
        fill="none"
        stroke="currentColor"
        strokeWidth={1}
        className="pointer-events-none absolute -top-4 -right-8 h-48 w-48 text-sky-300/20"
      >
        <rect x={22} y={20} width={148} height={152} rx={66}></rect>
        <rect x={40} y={38} width={112} height={116} rx={48}></rect>
        <path d="M22 96h148M96 20v152"></path>
      </svg>
      <div className="relative">
        <p className="text-[10px] font-semibold tracking-[0.12em] text-sky-200 uppercase">FROSTLANE / LATE SKATE</p>
        <h2 id="toggles-ice-rink-title" className="mt-2 text-2xl leading-7 font-semibold">Friday, on ice.</h2>
        <div className="mt-5 flex items-end justify-between gap-4">
          <p className="text-[42px] leading-none font-medium tracking-tight">20:30</p>
          <p className="text-right text-xs leading-5 text-sky-200">
            60 minutes
            <br />
            Rink 1
          </p>
        </div>
        <div className="mt-5 space-y-4 rounded-xl border border-white/30 bg-white/10 p-4 backdrop-blur-md">
          <div className="flex items-center justify-between gap-4">
            <div>
              <label htmlFor="toggles-ice-rink-warm" className="block cursor-pointer text-xs font-semibold">Boot warmers</label>
              <p id="toggles-ice-rink-warm-hint" className="mt-1 text-xs leading-4 text-sky-100">Ready at the rental desk.</p>
            </div>
            <input
              id="toggles-ice-rink-warm"
              name="toggles-ice-rink-warm"
              type="checkbox"
              role="switch"
              aria-describedby="toggles-ice-rink-warm-hint"
              className="relative h-6 w-11 shrink-0 cursor-pointer appearance-none rounded-full border-2 border-sky-200 bg-slate-900 after:absolute after:top-0.5 after:left-0.5 after:size-4 after:rounded-full after:bg-sky-200 after:content-[''] checked:border-sky-200 checked:bg-sky-200 checked:after:translate-x-5 checked:after:bg-slate-900 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-200 forced-colors:border-[ButtonText] forced-colors:after:bg-[CanvasText] forced-colors:checked:after:bg-[CanvasText]"
            />
          </div>
          <div className="flex items-center justify-between gap-4">
            <div>
              <label htmlFor="toggles-ice-rink-locker" className="block cursor-pointer text-xs font-semibold">Locker hold</label>
              <p id="toggles-ice-rink-locker-hint" className="mt-1 text-xs leading-4 text-sky-100">Keep a locker until 22:00.</p>
            </div>
            <input
              id="toggles-ice-rink-locker"
              name="toggles-ice-rink-locker"
              type="checkbox"
              role="switch"
              defaultChecked
              aria-describedby="toggles-ice-rink-locker-hint"
              className="relative h-6 w-11 shrink-0 cursor-pointer appearance-none rounded-full border-2 border-sky-200 bg-slate-900 after:absolute after:top-0.5 after:left-0.5 after:size-4 after:rounded-full after:bg-sky-200 after:content-[''] checked:border-sky-200 checked:bg-sky-200 checked:after:translate-x-5 checked:after:bg-slate-900 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-200 forced-colors:border-[ButtonText] forced-colors:after:bg-[CanvasText] forced-colors:checked:after:bg-[CanvasText]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
