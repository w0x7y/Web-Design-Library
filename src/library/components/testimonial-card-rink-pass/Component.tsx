// Fonts: Syne (https://fonts.google.com/specimen/Syne)
export default function TestimonialCardRinkPass() {
  return (
    <figure className="relative w-72 overflow-hidden rounded-2xl border border-cyan-700 bg-sky-950 font-['Syne',ui-sans-serif,system-ui,sans-serif] text-cyan-100 sm:w-[22rem]">
      <div aria-hidden="true" className="absolute inset-y-0 left-0 flex w-8 items-center justify-center bg-cyan-200 py-3 text-[10px] font-semibold tracking-[0.12em] text-sky-950 [writing-mode:vertical-rl]">GLIDEHOUR / ADULT BEGINNER</div>
      <div className="ml-8 p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xl font-bold tracking-tight">Glidehour</p>
          <svg aria-hidden="true" viewBox="0 0 48 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" className="h-8 w-12 shrink-0 text-cyan-200">
            <path d="M10 3h12v12l14 5v5H8V3Z M12 25v4m18-4v4M4 29h35l5-4M22 9h-7m7 5h-7" />
          </svg>
        </div>
        <p className="mt-2 text-[10px] text-cyan-100">Adult beginner · Week 4</p>
        <blockquote className="mt-5 text-xl leading-7">
          <p>“I used to grip the barrier. Last night I crossed the rink.<span className="mt-1 block font-bold text-cyan-200">On purpose.”</span></p>
        </blockquote>
      </div>
      <figcaption className="ml-8 border-t border-dashed border-cyan-700 px-5 py-4 text-xs">
        <p className="font-semibold">Nina Kapoor</p>
        <p className="mt-1 text-cyan-100">Thursday group, 19:00</p>
      </figcaption>
    </figure>
  )
}
