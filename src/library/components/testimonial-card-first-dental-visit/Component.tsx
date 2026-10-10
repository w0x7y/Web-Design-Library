// Fonts: Syne (https://fonts.google.com/specimen/Syne)
export default function TestimonialCardFirstDentalVisit() {
  return (
    <figure className="relative w-72 overflow-hidden rounded-2xl border border-cyan-700 bg-sky-950 font-['Syne',ui-sans-serif,system-ui,sans-serif] text-cyan-100 sm:w-[22rem]">
      <div aria-hidden="true" className="absolute inset-y-0 left-0 flex h-full w-8 items-center justify-center bg-cyan-200 py-3 text-[10px] font-semibold tracking-[0.12em] text-sky-950 [writing-mode:vertical-rl]">LITTLE MOLAR / FIRST VISIT</div>
      <div className="ml-8 p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xl font-bold tracking-tight">Little Molar</p>
          <svg aria-hidden="true" viewBox="0 0 48 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" className="h-8 w-12 shrink-0 text-cyan-200">
            <path d="M24 5c-8-5-15 0-13 9 2 8 3 14 7 14 3 0 2-9 6-9s3 9 6 9c4 0 5-6 7-14 2-9-5-14-13-9Z M19 8c3 2 7 2 10 0" />
          </svg>
        </div>
        <p className="mt-2 text-[10px] text-cyan-100">First check-up · Age 6</p>
        <blockquote className="mt-5 text-xl leading-7">
          <p>“She showed him every tool. He climbed into the chair.<span className="mt-1 block font-bold text-cyan-200">All by himself.”</span></p>
        </blockquote>
      </div>
      <figcaption className="ml-8 border-t border-dashed border-cyan-700 px-5 py-4 text-xs">
        <p className="font-semibold">Rina Shah</p>
        <p className="mt-1 text-cyan-100">Parent of Sam, age 6</p>
      </figcaption>
    </figure>
  )
}
