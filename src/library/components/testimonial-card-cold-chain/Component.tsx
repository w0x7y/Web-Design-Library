// Fonts: IBM Plex Sans (https://fonts.google.com/specimen/IBM+Plex+Sans)
export default function TestimonialCardColdChain() {
  return (
    <figure className="w-72 rounded-xl border border-slate-200 bg-white p-5 font-['IBM_Plex_Sans',ui-sans-serif,system-ui,sans-serif] text-slate-950 sm:w-[22rem]">
      <p className="text-xl font-semibold tracking-tight">Chillproof<span className="mt-1 block text-[10px] font-normal tracking-[0.12em] text-slate-700">COLD-CHAIN MONITORING</span></p>
      <div className="mt-4 grid grid-cols-2 gap-3 border-y border-slate-200 py-3 text-xs">
        <p><span className="block text-slate-700">Shipment</span><span className="mt-1 block font-medium">CP–0826</span></p>
        <p><span className="block text-slate-700">Route</span><span className="mt-1 block font-medium text-cyan-700">Basel → Lyon</span></p>
      </div>
      <blockquote className="mt-4 rounded-lg bg-cyan-50 p-4 text-lg leading-[26px]">
        <p>“Every handover had a record. Release review took one screen, not six attachments.”</p>
      </blockquote>
      <figcaption className="mt-4 flex items-center gap-3">
        <img
          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&q=80"
          alt=""
          width={400}
          height={600}
          className="size-9 shrink-0 rounded-sm object-cover"
        />
        <p className="text-xs font-semibold">Jonah Bell<span className="mt-1 block font-normal text-slate-700">Quality lead, Vale Biologics</span></p>
      </figcaption>
    </figure>
  )
}
