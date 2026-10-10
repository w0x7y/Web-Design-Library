// Fonts: Space Grotesk (https://fonts.google.com/specimen/Space+Grotesk)
export default function TestimonialCardEscapeRoom() {
  return (
    <figure className="relative w-72 overflow-hidden rounded-[20px] bg-cyan-950 p-4 font-['Space_Grotesk',ui-sans-serif,system-ui,sans-serif] text-white sm:w-[22rem]">
      <svg aria-hidden="true" viewBox="0 0 352 360" fill="none" stroke="currentColor" strokeWidth="10" className="absolute inset-0 h-full w-full text-teal-300 opacity-30">
        <path d="M-20 40h310v80H70v80h220v80H70v100 M30-20v300h180v-40H110v-80h220 M150 40v40h60 M250 120v40h80" />
      </svg>
      <div className="relative rounded-xl border border-white/30 bg-white/10 p-5 backdrop-blur-md">
        <p className="text-[10px] font-medium tracking-[0.08em] text-cyan-200">LOCK & LANTERN / ESCAPE ROOMS</p>
        <blockquote className="mt-5 text-xl leading-7 font-medium">
          <p>“One clue left. Two minutes on the clock. We opened the door together.”</p>
        </blockquote>
        <p className="mt-5 text-[11px] text-teal-100">The Night Archive · Team of four</p>
      </div>
      <figcaption className="relative mt-4 flex flex-col gap-1 px-1 text-xs text-teal-100">
        <span className="font-semibold text-white">Ben Okafor</span>
        <span>First-time escape room player</span>
      </figcaption>
    </figure>
  )
}
