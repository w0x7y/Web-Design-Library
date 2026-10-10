// Fonts: Archivo
export default function ProfileCardStuntCoordinator() {
  return (
    <article className="w-72 bg-neutral-950 font-['Archivo',ui-sans-serif,system-ui,sans-serif] text-neutral-100 sm:w-80">
      <p className="bg-red-600 px-5 py-2 text-[10px] font-bold uppercase tracking-widest text-white">Underpin Action / Crew 024</p>
      <div className="p-5">
        <p className="text-[10px] uppercase tracking-widest text-neutral-400">Stunt coordinator</p>
        <h2 className="mt-3 text-5xl leading-none font-black tracking-tight"><span className="mb-1 block text-xl font-normal tracking-normal">Mara</span>VOSS</h2>
        <ul role="list" className="mt-5 grid grid-cols-2 border-y border-neutral-600 text-xs">
          <li className="py-3">Precision driving</li>
          <li className="py-3">Wire work</li>
        </ul>
        <p className="mt-3 text-xs text-neutral-400">18 screen credits · Prague based</p>
        <a href="#mara-production" aria-label="Contact Mara Voss about a production" className="mt-5 flex items-center justify-between border border-neutral-600 px-3 py-3 text-xs font-semibold hover:bg-neutral-100 hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400">
          Production enquiries
          <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4">
            <path d="M4 10h12m-5-5 5 5-5 5" />
          </svg>
        </a>
      </div>
    </article>
  )
}
