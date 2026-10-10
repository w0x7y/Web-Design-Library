// Fonts: Instrument Serif
export default function ProfileCardPerfumer() {
  return (
    <article className="w-72 bg-rose-100 text-rose-950 sm:w-[21rem]">
      <div className="grid h-[14.5rem] grid-cols-[7rem_1fr] sm:grid-cols-[8rem_1fr]">
        <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80" alt="Elise Laurent outdoors" width={400} height={267} className="h-full w-full object-cover object-[43%_center]" />
        <div className="p-4">
          <p className="text-[10px] font-semibold uppercase tracking-widest">Orris House</p>
          <h2 className="mt-5 font-['Instrument_Serif',ui-sans-serif,system-ui,sans-serif] text-[30px] leading-none">Elise<br />Laurent</h2>
          <p className="mt-3 text-xs leading-5 text-rose-800">Perfume composer<br />Grasse, France</p>
          <p className="mt-4 text-xs leading-5">A nose for the<br />unexpected.</p>
        </div>
      </div>
      <div className="bg-white p-4">
        <p className="text-[10px] font-semibold uppercase tracking-widest">On the blotter / 06</p>
        <p className="mt-1 text-xs leading-5">Black tea. Iris root. Rain on stone.</p>
        <a href="#elise-consultation" className="mt-3 flex items-center justify-between text-xs font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-950">
          Meet Elise
          <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4">
            <path d="M4 10h12m-5-5 5 5-5 5" />
          </svg>
        </a>
      </div>
    </article>
  )
}
