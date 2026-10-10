// Fonts: IBM Plex Mono (https://fonts.google.com/specimen/IBM+Plex+Mono)
export default function TestimonialCardPestMonitor() {
  return (
    <figure className="w-72 border-2 border-red-950 bg-white font-['IBM_Plex_Mono',ui-monospace,SFMono-Regular,monospace] text-red-950 shadow-[4px_4px_0_0_#450a0a] sm:w-[22rem]">
      <div className="flex items-center justify-between gap-3 bg-red-100 p-4 text-[10px]">
        <span className="text-sm font-semibold tracking-tight">TRACEPIN</span>
        <span>CLIENT LOG</span>
      </div>
      <ul role="list" aria-label="Monitoring stations" className="grid grid-cols-4 border-y-2 border-red-950">
        <li className="border-r border-red-950 py-2 text-center text-xs last:border-r-0" aria-label="Monitor 01: OK">01<span className="mt-0.5 block text-[10px] font-medium">OK</span></li>
        <li className="border-r border-red-950 py-2 text-center text-xs last:border-r-0 bg-red-100" aria-label="Monitor 02: OK">02<span className="mt-0.5 block text-[10px] font-medium">OK</span></li>
        <li className="border-r border-red-950 py-2 text-center text-xs last:border-r-0" aria-label="Monitor 03: OK">03<span className="mt-0.5 block text-[10px] font-medium">OK</span></li>
        <li className="border-r border-red-950 py-2 text-center text-xs last:border-r-0 bg-red-100" aria-label="Monitor 04: OK">04<span className="mt-0.5 block text-[10px] font-medium">OK</span></li>
      </ul>
      <blockquote className="p-5 text-lg leading-7">
        <p>“A named map of every monitor. No mystery boxes. Our night team knows exactly what to check.”</p>
      </blockquote>
      <figcaption className="border-t-2 border-red-950 px-4 py-3 text-[11px]">
        <p className="font-semibold">Tomas Park</p>
        <p className="mt-1">Duty manager, Gable Hotel</p>
      </figcaption>
    </figure>
  )
}
