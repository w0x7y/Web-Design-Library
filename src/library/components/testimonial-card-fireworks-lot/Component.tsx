// Fonts: IBM Plex Mono (https://fonts.google.com/specimen/IBM+Plex+Mono)
export default function TestimonialCardFireworksLot() {
  return (
    <figure className="w-72 border-2 border-red-950 bg-white font-['IBM_Plex_Mono',ui-monospace,SFMono-Regular,monospace] text-red-950 shadow-[4px_4px_0_0_#450a0a] sm:w-[22rem]">
      <div className="flex items-center justify-between gap-3 bg-red-100 p-4 text-[10px]">
        <span className="text-sm font-semibold tracking-tight">EMBERLOT</span>
        <span>SHOW LOG</span>
      </div>
      <ul role="list" aria-label="Firework lot checks" className="grid grid-cols-4 border-y-2 border-red-950">
        <li className="border-r border-red-950 py-2 text-center text-xs last:border-r-0" aria-label="Lot 11: checked">11<span className="mt-0.5 block text-[10px] font-medium">CHECKED</span></li>
        <li className="border-r border-red-950 py-2 text-center text-xs last:border-r-0 bg-red-100" aria-label="Lot 12: checked">12<span className="mt-0.5 block text-[10px] font-medium">CHECKED</span></li>
        <li className="border-r border-red-950 py-2 text-center text-xs last:border-r-0" aria-label="Lot 13: checked">13<span className="mt-0.5 block text-[10px] font-medium">CHECKED</span></li>
        <li className="border-r border-red-950 py-2 text-center text-xs last:border-r-0 bg-red-100" aria-label="Lot 14: checked">14<span className="mt-0.5 block text-[10px] font-medium">CHECKED</span></li>
      </ul>
      <blockquote className="p-5 text-lg leading-7">
        <p>“Every shell lot had a clear label. We matched the colours to the cue sheet in minutes.”</p>
      </blockquote>
      <figcaption className="border-t-2 border-red-950 px-4 py-3 text-[11px]">
        <p className="font-semibold">Joel Tan</p>
        <p className="mt-1">Display producer, Civic Night</p>
      </figcaption>
    </figure>
  )
}
